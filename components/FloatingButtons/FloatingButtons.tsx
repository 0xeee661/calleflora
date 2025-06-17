import { FaWhatsapp } from 'react-icons/fa'

const FloatingButtons = () => {
	return (
			<a
				href='https://api.whatsapp.com/send?phone=573116810440&text=%C2%A1Hola!%20Quiero%20reservar%20a%20la%20mejor%20tarifa'
				target="_blank"
				rel="noopener noreferrer"
				aria-label="WhatsApp"
				className="flex items-center justify-center h-14 w-14 rounded-full bg-[#25d366] shadow-lg fixed right-6 bottom-6 z-30 text-white text-3xl transition-all duration-300 ease-in-out hover:scale-105"
				id="whatsapp-button"
			>
				<FaWhatsapp />
			</a>
	)
}

export default FloatingButtons
