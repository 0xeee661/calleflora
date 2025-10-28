"use client"

import React, { useEffect } from 'react'

interface ParatyBookingWidgetLoadedDetail {
  paratyInjectionUrl: string
  customWidgetRootId: string
  forceFlightHotel: boolean
}

type BookingWidgetProps = {
  rootId?: string // empty string shows floating widget per provider default
  onClose?: () => void
}

export function BookingWidgetScript({ rootId = 'paraty-booking-root', onClose }: BookingWidgetProps) {
  useEffect(() => {
    const scriptId = 'paraty-booking-widget-runtime'
    const styleId = 'paraty-booking-widget-style'

    const existingScript = document.getElementById(scriptId)
    const existingLink = document.getElementById(styleId)

    // Determine provider language from browser
    const providerLanguage = (() => {
      try {
        const nav = (typeof navigator !== 'undefined' && navigator.language) || 'en'
        const lang = nav.toLowerCase()
        if (lang.startsWith('es')) return 'SPANISH'
        if (lang.startsWith('en')) return 'ENGLISH'
        if (lang.startsWith('pt')) return 'PORTUGUESE'
        if (lang.startsWith('fr')) return 'FRENCH'
        if (lang.startsWith('de')) return 'GERMAN'
        if (lang.startsWith('it')) return 'ITALIAN'
        return 'ENGLISH'
      } catch {
        return 'ENGLISH'
      }
    })()

    // Helper to ensure provider stylesheet is present
    const ensureStylesheet = (): Promise<void> => {
      if (existingLink) return Promise.resolve()
      return new Promise(resolve => {
        const link = document.createElement('link')
        link.id = styleId
        link.rel = 'stylesheet'
        link.type = 'text/css'
        link.href =
          'https://jalo-calle-flora-dot-secure-booking-co4.appspot.com/static_1/web_apps/assets/css/main_booking_widget.css?v=202510220915'
        link.onload = () => resolve()
        link.onerror = () => resolve()
        document.head.appendChild(link)
        setTimeout(() => resolve(), 1500)
      })
    }

    // Provider default floating bar: ensure CSS, patch bad dev URL, dispatch config, then load bootstrap script
    if (rootId === '') {
      ;(async () => {
        await ensureStylesheet()
        try {
          const host = 'https://jalo-calle-flora-dot-secure-booking-co4.appspot.com'
          const anyWin = window as unknown as { __paratyFetchPatched?: boolean }
          if (!anyWin.__paratyFetchPatched && typeof window.fetch === 'function') {
            const originalFetch = window.fetch.bind(window)
            window.fetch = (input: RequestInfo | URL, init?: RequestInit) => {
              const url = typeof input === 'string' ? input : input.toString()
              const isLocalDev = url.startsWith('http://localhost:8090')
              const isProvider = url.startsWith(host)

              // Rewrite localhost origin to provider host
              let finalUrl = url
              if (isLocalDev) {
                finalUrl = host + url.replace('http://localhost:8090', '')
              }

              // If it's the provider utils dictionary, force language to SPANISH
              try {
                const u = new URL(finalUrl, window.location.origin)
                const isDictionary = u.pathname.includes('/utils') && u.searchParams.get('action') === 'complete_dictionary'
                const isProviderOrLocal = isLocalDev || isProvider || u.origin === host
                if (isDictionary && isProviderOrLocal) {
                  u.searchParams.set('language', providerLanguage)
                  finalUrl = u.toString()
                }
              } catch {}

              return originalFetch(finalUrl, init)
            }
            anyWin.__paratyFetchPatched = true
          }
        } catch {}

        try {
          const cfgEvent = new CustomEvent<ParatyBookingWidgetLoadedDetail>(
            'paratyBookingWidgetLoaded',
            {
              detail: {
                paratyInjectionUrl:
                  'https://jalo-calle-flora-dot-secure-booking-co4.appspot.com',
                customWidgetRootId: '',
                forceFlightHotel: false,
              },
            },
          )
          document.dispatchEvent(cfgEvent)
        } catch {}

        if (!existingScript) {
          const script = document.createElement('script')
          script.id = scriptId
          script.src =
            'https://jalo-calle-flora-dot-secure-booking-co4.appspot.com/paraty-booking-widget-script'
          script.async = true
          document.head.appendChild(script)
        }
      })()
      return
    }

    // Inline/modal path continues below using ensureStylesheet

    const dispatchLoaded = () => {
      const event = new CustomEvent<ParatyBookingWidgetLoadedDetail>(
        'paratyBookingWidgetLoaded',
        {
          detail: {
            paratyInjectionUrl:
              'https://jalo-calle-flora-dot-secure-booking-co4.appspot.com',
            customWidgetRootId: rootId,
            forceFlightHotel: false,
          },
        },
      )
      document.dispatchEvent(event)
    }

    const injectParatyWidget = async () => {
      await ensureStylesheet()

      if (!existingScript) {
        const script = document.createElement('script')
        script.id = scriptId
        script.src =
          'https://jalo-calle-flora-dot-secure-booking-co4.appspot.com/static_1/web_apps/booking_widget.js?v=202510220915'
        script.async = true
        script.onload = () => dispatchLoaded()
        script.onerror = () => dispatchLoaded() // intenta continuar aun si falla onload
        document.head.appendChild(script)
      } else {
        // Si el script ya existe, re-despachar para montar o reconfigurar
        dispatchLoaded()
      }
    }

    injectParatyWidget()
  }, [rootId])

  if (!rootId) return null

  return (
    <div
      aria-label="Booking Widget Overlay"
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2147483646,
      }}
      onClick={() => onClose?.()}
    >
      {/* Backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.45)',
        }}
      />
      {/* Widget container - click inside should not close */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 2147483647,
          width: 'min(92vw, 560px)',
          maxWidth: 560,
          minWidth: 320,
          background: 'transparent',
          pointerEvents: 'auto',
        }}
      >
        <div
          id={rootId}
          style={{
            width: '100%',
            minHeight: 0,
          }}
        />
      </div>
    </div>
  )
}


