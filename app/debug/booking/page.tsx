'use client'

import React from 'react'
import { BookingWidgetScript } from '@/components/Booking/BookingWidgetScript'
import { BookingWidgetSelfTest } from '@/components/Booking/BookingWidgetSelfTest'

export default function BookingDebugPage() {
  return (
    <main style={{ minHeight: '100vh', padding: 24 }}>
      <h1 style={{ fontSize: 22, marginBottom: 12 }}>Debug: Booking Widget</h1>
      <p style={{ marginBottom: 16 }}>
        1) Haz clic en “Select dates” en la barra inferior. 2) Observa el panel de
        la derecha para ver estado de las peticiones al proveedor.
      </p>

      {/* Barra flotante original */}
      <BookingWidgetScript rootId="" />
      <BookingWidgetSelfTest />
    </main>
  )
}


