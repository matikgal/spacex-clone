import AnimatedLink from './AnimatedLink'
import { Fade as Hamburger } from 'hamburger-react'
import { useState } from 'react'

export default function NavBar2() {
	const [isOpen, setOpen] = useState(false)

	const navlists = [
		{ name: 'mission', link: '/' },
		{ name: 'launches', link: '/' },
		{ name: 'careers', link: '/' },
		{ name: 'updates', link: '/' },
		{ name: 'shop', link: '/' },
	]
	return (
		<div className="bg-transparent fixed text-white z-50 py-4 w-full">
			<div className="relative ">
				<div className="flex  container w-full  mx-auto xl:justify-start xl:px-10  justify-center">
					<svg
						version="1.1"
						x="0px"
						y="0px"
						viewBox="0 0 400 50"
						aria-hidden="true"
						className="h-4 lg:h-8 w-auto fill-current text-white  ml-6 xl:mb-1 ">
						<title>SpaceX Logo</title>
						<g className="letter_s">
							<path d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5 c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"></path>
						</g>
						<g className="letter_p">
							<path d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4 c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"></path>
						</g>
						<g className="letter_a">
							<polygon points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3"></polygon>
						</g>
						<g className="letter_c">
							<path d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3 c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"></path>
						</g>
						<g className="letter_e">
							<polygon points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5"></polygon>
							<rect x="219.9" y="18.6" width="41.9" height="5.4"></rect>
						</g>
						<g className="letter_x">
							<path d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"></path>
							<path d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z"></path>
						</g>
						<g className="letter_swoosh">
							<path d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"></path>
						</g>
					</svg>
					<nav className="hidden xl:flex uppercase font-semibold text-sm gap-x-5 items-end flex-wrap ">
						<AnimatedLink href="">falcon heavy</AnimatedLink>
						<AnimatedLink href="">dragon</AnimatedLink>
						<AnimatedLink href="">starship</AnimatedLink>
						<AnimatedLink href="">falcon 9</AnimatedLink>
						<AnimatedLink href="">human spaceflight</AnimatedLink>
						<AnimatedLink href="">rideshare</AnimatedLink>
						<AnimatedLink href="">starshield</AnimatedLink>
						<AnimatedLink href="">starlink</AnimatedLink>
					</nav>
				</div>
				<div className="flex items-center lg: absolute top-0 right-0 h-full  pr-3 xl:mt-2">
					<AnimatedLink href="" className="hidden xl:block mt-1 uppercase font-semibold text-sm mr-3">
						shop
					</AnimatedLink>
					<div className="mt-1 mr-5 z-30">
						<Hamburger toggled={isOpen} toggle={setOpen} direction="right" size={18} />
					</div>
				</div>
				<div
					className={`fixed inset-0 bg-black transition-opacity duration-300 ${
						isOpen ? 'opacity-55' : 'opacity-0 pointer-events-none'
					}`}></div>
				<div
					className={`fixed top-0 right-0 h-screen w-[350px] bg-black text-white transition-transform duration-300 ${
						isOpen ? 'translate-x-0' : 'translate-x-full'
					}`}>
					{' '}
					<div className="flex flex-col items-end space-y-4 mt-20 px-12 w-full uppercase text-sm font-medium leading-5">
						{navlists.map((navlist, index) => (
							<a href="#" className="w-full flex flex-col items-end hover:text-gray-400 duration-300" key={index}>
								{navlist.name}
								<hr className="w-full h-[1px] bg-gray-700 border-0 mt-2 hover:none" />
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
