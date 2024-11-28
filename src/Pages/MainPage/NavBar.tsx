import AnimatedLink from '../../components/AnimatedLink'
import { Fade as Hamburger } from 'hamburger-react'
import { useState } from 'react'

export default function NavBar() {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className="fixed w-full z-20">
			{/* Navbar */}
			<div className="flex py-8 px-10 bg-transparent">
				<div className="flex container items-end justify-center">
					<nav className="text-white flex font-bold uppercase space-x-5 text-sm">
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
				<div className="uppercase font-bold text-white flex ml-auto items-center text-sm gap-x-5">
					<AnimatedLink href="">shop</AnimatedLink>
					<div className="relative z-30 border">
						<Hamburger toggled={isOpen} toggle={setOpen} direction="right" size={18} />
					</div>
				</div>
			</div>

			<div
				className={`fixed inset-0 bg-black transition-opacity duration-300 ${
					isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
				}`}
				onClick={() => setOpen(false)}></div>

			<div
				className={`fixed top-0 right-0 h-screen w-64 bg-black text-white transition-transform duration-300 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}>
				<div className="flex flex-col items-end  space-y-4 mt-14 px-10 border w-max ">
					<AnimatedLink href="#">Menu Item 1</AnimatedLink>
					<AnimatedLink href="#">Menu Item 2</AnimatedLink>
					<AnimatedLink href="#">Menu Item 3</AnimatedLink>
					<AnimatedLink href="#">Menu Item 4</AnimatedLink>
				</div>
			</div>
		</div>
	)
}
