import { Rooms as RoomsComponent } from '@/components/Rooms'
import { getRooms } from '@/lib/api'
import React from 'react'

export const dynamic = 'force-dynamic'

const Rooms = async () => {
  let data: Awaited<ReturnType<typeof getRooms>> | undefined
  try {
    data = await getRooms({})
  } catch {
    data = undefined
  }

  return <RoomsComponent rooms={data?.listCollection?.items || []} />
}

export default Rooms
