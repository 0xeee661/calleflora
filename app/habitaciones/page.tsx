import { getRooms } from '@/lib/api'
import Rooms from '@/components/Rooms'

const Habitaciones = async () => {
  const data = await getRooms({})

  return <Rooms rooms={data?.listCollection?.items || []} />
}

export default Habitaciones
