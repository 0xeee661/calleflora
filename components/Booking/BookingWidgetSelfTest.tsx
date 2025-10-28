"use client"

import React from 'react'

type LoggedEntry = {
  url: string
  status?: number
  ok?: boolean
  error?: string
  timestamp: string
}

const PROVIDER_HOST = 'jalo-calle-flora-dot-secure-booking-co4.appspot.com'

export function BookingWidgetSelfTest() {
  const [logs, setLogs] = React.useState<LoggedEntry[]>([])
  const [patched, setPatched] = React.useState(false)

  React.useEffect(() => {
    if (patched) return
    if (typeof window === 'undefined' || typeof window.fetch !== 'function') return

    const originalFetch = window.fetch.bind(window)

    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = typeof input === 'string' ? input : input.toString()
      const isProvider = url.includes(PROVIDER_HOST)
      if (!isProvider) {
        return originalFetch(input as any, init)
      }

      try {
        const res = await originalFetch(input as any, init)
        setLogs(prev => [
          { url, status: res.status, ok: res.ok, timestamp: new Date().toISOString() },
          ...prev.slice(0, 29),
        ])
        // do not consume body; provider needs it. We only log status.
        return res
      } catch (error: any) {
        setLogs(prev => [
          { url, error: String(error?.message || error), timestamp: new Date().toISOString() },
          ...prev.slice(0, 29),
        ])
        throw error
      }
    }

    setPatched(true)

    return () => {
      window.fetch = originalFetch
    }
  }, [patched])

  return (
    <div
      style={{
        position: 'fixed',
        right: 12,
        bottom: 12,
        width: 380,
        maxHeight: 320,
        overflow: 'auto',
        background: '#0f172a',
        color: '#fff',
        padding: 12,
        borderRadius: 8,
        boxShadow: '0 6px 24px rgba(0,0,0,0.3)',
        zIndex: 2147483647,
      }}
    >
      <div style={{ fontWeight: 700, marginBottom: 6 }}>Booking Widget Self-Test</div>
      <div style={{ fontSize: 12, opacity: 0.85, marginBottom: 10 }}>
        Abre “Select dates”. Aquí verás las peticiones al proveedor (status/ok).
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {logs.map((l, idx) => (
          <li key={idx} style={{ marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 6 }}>
            <div style={{ fontSize: 11, wordBreak: 'break-all' }}>{l.url}</div>
            <div style={{ fontSize: 12, marginTop: 2 }}>
              {l.error ? (
                <span style={{ color: '#fca5a5' }}>error: {l.error}</span>
              ) : (
                <>
                  <b>status:</b> {l.status} <b>ok:</b> {String(l.ok)}
                </>
              )}
            </div>
            <div style={{ fontSize: 10, opacity: 0.7 }}>{l.timestamp}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}


