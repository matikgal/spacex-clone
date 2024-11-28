import { IoIosArrowDown } from 'react-icons/io'
import AnimatedButton from '../../components/AnimatedButton'

export default function Starship() {
	return (
		<div className="relative w-screen h-screen overflow-hidden">
			<video className="absolute inset-0 w-full h-full object-cover" loop muted /*autoPlay*/ playsInline>
				<source
					src="https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_6_West_Drone_20241119_website_H_email_aebad7e040.mp4"
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>

			<div className="absolute inset-0 flex justify-end flex-col text-white">
				<div className="container mx-auto px-16 pb-36">
					<h4 className="text-xl font-normal mb-2 uppercase tracking-wide animate-fade-up ">Recent Launch</h4>
					<h2 className="text-5xl font-bold tracking-tight uppercase animate-fade-up animate-delay-150">
						Starship's sixth <br /> flight test
					</h2>

					<AnimatedButton href="">rewatch</AnimatedButton>
				</div>
			</div>

			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-and-fade">
				<IoIosArrowDown size={42} className="text-white" />
			</div>
		</div>
	)
}
