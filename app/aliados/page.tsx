import { notFound } from 'next/navigation'
import { AlliesPage } from './page.client'
import { getAllies } from '@/lib/api'

const Allies = async () => {
  const allies = await getAllies({})

  if (!allies) {
    return notFound()
  }

  return <AlliesPage allies={allies} />
}

export default Allies
