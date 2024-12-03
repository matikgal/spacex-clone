import { IoIosArrowDown } from 'react-icons/io'

export interface DynamicSectionProps {
	title: string
	subtitle: string
	mediaSrc: string
	altText: string
}

export default function SubSectionHeader({ title, subtitle, mediaSrc, altText }: DynamicSectionProps) {
	return (
		<div className="relative w-screen h-screen overflow-hidden">
			<img src={mediaSrc} alt={altText} className="absolute inset-0 w-full h-full object-cover" />

			<div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center uppercase">
				<h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">{title}</h1>
				<h4 className="text-sm sm:text-xl mt-5 font-normal sm:font-light tracking-tight">{subtitle}</h4>
			</div>

			<IoIosArrowDown
				size={42}
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce-and-fade"
			/>
		</div>
	)
}
