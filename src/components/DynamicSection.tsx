import { IoIosArrowDown } from 'react-icons/io'
import AnimatedButton from '../components/AnimatedButton'
import { Link } from 'react-router-dom'

export interface DynamicSectionProps {
	title: string
	subtitle: string
	mediaType: 'video' | 'image' | string
	mediaSrc: string
	btnSrc: string
}

export default function DynamicSection({ title, subtitle, mediaType, mediaSrc, btnSrc }: DynamicSectionProps) {
	return (
		<div className="relative w-screen h-screen overflow-hidden">
			{mediaType === 'video' ? (
				<video className="absolute inset-0 w-full h-full object-cover max-w-full" loop muted autoPlay>
					<source src={mediaSrc} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			) : (
				<img src={mediaSrc} alt={title} className="absolute inset-0 w-full h-full object-cover" />
			)}

			<div className="absolute inset-0 flex flex-col justify-end text-white container mx-auto px-4 md:px-16 pb-36">
				<h4 className="text-sm sm:text-xl font-normal mb-0 uppercase tracking-wide animate-fade-up">{subtitle}</h4>
				<h2 className="text-3xl sm:text-5xl font-bold uppercase animate-fade-up animate-delay-150 whitespace-pre-wrap leading-8">
					{title}
				</h2>
				<Link to={btnSrc}>
					<AnimatedButton href="">rewatch</AnimatedButton>
				</Link>
			</div>

			<IoIosArrowDown
				size={42}
				className="absolute flex items-ce bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce-and-fade"
			/>
		</div>
	)
}
