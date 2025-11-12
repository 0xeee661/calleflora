import { whatsappLink } from '@/constants/app'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingButtons = () => {
  return (
    <a
      href={`${whatsappLink}&text=%C2%A1Hola!%20Quiero%20reservar%20a%20la%20mejor%20tarifa`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed right-6 bottom-6 z-30 flex h-14 w-14 
      items-center justify-center rounded-full bg-[#25d366] text-3xl 
      text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 bottom-[10%]"
      id="whatsapp-button"
    >
      <FaWhatsapp />
    </a>
  )
}

export default FloatingButtons
