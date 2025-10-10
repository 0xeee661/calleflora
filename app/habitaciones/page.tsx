import { Rooms as RoomsComponent } from '@/components/Rooms'
import { getRooms } from '@/lib/api'
import React from 'react'

const Rooms = async () => {
  const data = await getRooms({})

  return <RoomsComponent rooms={data?.listCollection?.items || []} />
}

export default Rooms
