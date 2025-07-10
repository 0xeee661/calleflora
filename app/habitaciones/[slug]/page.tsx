import { getRoomData } from '@/lib/api'
import { RoomPage } from './page.client'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ slug: string }>
}
const Room = async ({ params }: Props) => {
  const { slug } = await params
  const room = await getRoomData({ slug })

  if (!room) {
    return notFound()
  }

  return <RoomPage room={room} />
}

export default Room
