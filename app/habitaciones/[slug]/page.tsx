import { getRoomData } from '@/lib/api'
import { RoomPage } from './page.client'
import { notFound } from 'next/navigation'

const Room = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const room = await getRoomData({ slug })

  if (!room) {
    return notFound()
  }

  return <RoomPage room={room} />
}

export default Room
