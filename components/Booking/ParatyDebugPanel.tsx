"use client"

import React from 'react'

type LoadedDetail = {
  paratyInjectionUrl: string
  customWidgetRootId: string
  forceFlightHotel: boolean
}

export function ParatyDebugPanel() {
  const [loadedDetail, setLoadedDetail] = React.useState<LoadedDetail | null>(
    null,
  )
  const [messages, setMessages] = React.useState<unknown[]>([])

  React.useEffect(() => {
    const onLoaded = (e: Event) => {
      const ce = e as CustomEvent<LoadedDetail>
      setLoadedDetail(ce.detail)
    }
    const onMessage = (e: MessageEvent) => {
      try {
        const originOk = e.origin.includes('secure-booking-co4.appspot.com')
        if (originOk) setMessages(prev => [...prev.slice(-19), e.data])
      } catch {}
    }
    document.addEventListener(
      'paratyBookingWidgetLoaded',
      onLoaded as EventListener,
    )
    window.addEventListener('message', onMessage)
    return () => {
      document.removeEventListener(
        'paratyBookingWidgetLoaded',
        onLoaded as EventListener,
      )
      window.removeEventListener('message', onMessage)
    }
  }, [])

  if (process.env.NEXT_PUBLIC_PARATY_DEBUG !== '1') return null

  return (
    <div
      style={{
        position: 'fixed',
        right: 12,
        bottom: 12,
        background: '#111',
        color: '#fff',
        padding: 12,
        borderRadius: 8,
        maxWidth: 420,
        maxHeight: 300,
        overflow: 'auto',
        fontSize: 12,
        zIndex: 9999,
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: 6 }}>Paraty Debug</div>
      <div>
        <b>Loaded:</b> {loadedDetail ? 'sí' : 'no'}
      </div>
      {loadedDetail && (
        <pre style={{ whiteSpace: 'pre-wrap' }}>
          {JSON.stringify(loadedDetail, null, 2)}
        </pre>
      )}
      <div style={{ marginTop: 8 }}>
        <b>Mensajes (últimos):</b>
      </div>
      <pre style={{ whiteSpace: 'pre-wrap' }}>
        {JSON.stringify(messages, null, 2)}
      </pre>
    </div>
  )
}


