'use client'

import { Maybe, Room } from '@/types/graphql/graphql'
import { useState } from 'react'

const Rooms = ({ rooms }: { rooms: Maybe<Room>[] }) => {
  const [currentRoom, setCurrentRoom] = useState<Room | null>(rooms[0] || null)

  console.log(currentRoom)

  return (
    <section className="relative h-screen snap-start">
      {currentRoom && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full min-h-screen w-full object-cover align-top"
          poster={currentRoom.background?.url || undefined}
        >
          {currentRoom.background?.url && (
            <source src={currentRoom.background?.url} type="video/mp4" />
          )}
        </video>
      )}
      <nav className="absolute top-0 right-0 flex justify-center gap-4">
        {rooms.map(room => (
          <button key={room?.type} onClick={() => setCurrentRoom(room)}>
            {room?.type}
          </button>
        ))}
      </nav>
    </section>
  )
}

export default Rooms
