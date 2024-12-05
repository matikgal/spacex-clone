import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import AnimatedButton from '../AnimatedButton'

export default function SubSectionCarousel() {
	const images = [
		{
			src: 'https://www.spacex.com/static/images/falcon-heavy/FH_1.jpg',
			description: 'Falcon Heavy vertical at Kennedy Space Center',
		},
		{
			src: 'https://www.spacex.com/static/images/falcon-heavy/FH_2.jpg',
			description: 'Falcon Heavy takes off from Pad 39A at Kennedy Space Center',
		},
		{
			src: 'https://www.spacex.com/static/images/falcon-heavy/FH_3.jpg',
			description: 'Falcon Heavy carries Arabsat-6A to orbit',
		},
		{
			src: 'https://www.spacex.com/static/images/falcon-heavy/FH_4.jpg',
			description: "Falcon Heavy's side boosters land at LZ-1 and LZ-2 at Cape Canaveral",
		},
		{
			src: 'https://www.spacex.com/static/images/falcon-heavy/FH_5.jpg',
			description: 'Falcon Heavy lifts off from Pad 39A at Kennedy Space Center',
		},
		{
			src: 'https://www.spacex.com/static/images/falcon-heavy/FH_6.jpg',
			description: 'Falcon Heavy lifts off from Pad 39A at Kennedy Space Center',
		},
		{
			src: 'https://www.spacex.com/static/images/falcon-heavy/FH_7.jpg',
			description: 'All 27 Merlin engines lit on Falcon Heavy',
		},
		{
			src: 'https://www.spacex.com/static/images/falcon-heavy/FH_8.jpg',
			description: 'Falcon Heavy lifts off from Pad 39A at Kennedy Space Center',
		},
		{
			src: 'https://www.spacex.com/static/images/falcon-heavy/FH_9.jpg',
			description: 'Falcon Heavy lifts off from Pad 39A at Kennedy Space Center',
		},
		{
			src: 'https://www.spacex.com/static/images/falcon-heavy/FH_10.jpg',
			description: "Falcon Heavy's side boosters land at LZ-1 and LZ-2 at Cape Canaveral",
		},
	]

	const [currentIndex, setCurrentIndex] = useState(0)

	const handlePrev = () => {
		setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
	}

	const handleNext = () => {
		setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
	}

	return (
		<div className="relative w-screen h-auto bg-black overflow-hidden pt-10">
			<div
				className="w-screen h-auto flex transition-transform duration-500 ease-in-out"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
				{images.map((image, index) => (
					<img
						key={index}
						src={image.src}
						alt={`Image ${index + 1}`}
						className="w-screen h-auto object-contain flex-shrink-0"
					/>
				))}
			</div>

			<div className=" bottom-0 w-full bg-black bg-opacity-75 text-white flex items-center justify-between px-8 py-4">
				<button
					onClick={handlePrev}
					className="text-white text-3xl font-bold hover:text-gray-300"
					aria-label="Previous Image">
					<IoIosArrowBack />
				</button>

				<p className="text-xs sm:text-sm text-center  font-medium">{images[currentIndex].description}</p>

				<button
					onClick={handleNext}
					className="text-white text-3xl font-bold hover:text-gray-300"
					aria-label="Next Image">
					<IoIosArrowForward />
				</button>
			</div>
			<div className="flex flex-col items-center mb-20">
				<div className="w-[1px] bg-white h-[150px] my-10"></div>
				<p className="text-gray-400 text-sm my-2 text-center">
					For information about our launch services, contact
					<a href="" className="text-white pl-1">
						sales@spacex.com
					</a>
				</p>
				<AnimatedButton href="" children="download user's guide" />
			</div>
		</div>
	)
}
