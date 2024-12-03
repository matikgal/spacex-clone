import { useState } from 'react'
import { IoMdPlay } from 'react-icons/io'
import { RxCross1 } from 'react-icons/rx'

export interface VideoSectionProps {
	VideoSrc: string
	bgSrc: string
	altBgSrc: string
	subtitle: string
	title: string
}

export default function VideoSection({ VideoSrc, subtitle, title, bgSrc, altBgSrc }: VideoSectionProps) {
	const [isVideoOpen, setVideoOpen] = useState(false)
	const [isExiting, setExiting] = useState(false)

	const closeVideo = () => {
		setExiting(true)
		setTimeout(() => {
			setVideoOpen(false)
			setExiting(false)
		}, 500)
	}

	return (
		<div className="relative w-screen h-screen bg-black flex items-center justify-center">
			<img src={bgSrc} alt={altBgSrc} className="absolute inset-0 w-full h-full object-cover" />

			{!isVideoOpen && (
				<div className="absolute bottom-10 pl-10 text-white uppercase w-full container">
					<h4 className=" font-semibold tracking-tight">{subtitle}</h4>
					<h1 className="text-4xl sm:text-6xl font-semibold mt-1 w-full sm:w-1/3">{title}</h1>
				</div>
			)}

			{!isVideoOpen && (
				<button
					onClick={() => setVideoOpen(true)}
					className="text-white text-5xl z-10 flex items-center justify-center"
					aria-label="Play video">
					<IoMdPlay />
				</button>
			)}

			{isVideoOpen && (
				<div
					className={`fixed inset-0 flex items-center justify-center bg-black z-50 ${
						isExiting ? 'animate-slide-out' : 'animate-slide-in'
					}`}>
					<div className="relative w-full h-full max-w-7xl aspect-video">
						<iframe
							width="100%"
							height="100%"
							src={VideoSrc}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>

					<button onClick={closeVideo} className="absolute top-6 right-6 text-white text-3xl" aria-label="Close video">
						<RxCross1 />
					</button>
				</div>
			)}
		</div>
	)
}
