export default function NavBar() {
	return (
		<div className="bg-black flex py-8 px-10 fixed w-full">
			<div className="flex  container items-center justify-center">
				<nav className="text-white flex font-bold uppercase space-x-5">
					<a href="">falcon 9</a>
					<a href="">falcon heavy</a>
					<a href="">dragon</a>
					<a href="">starship</a>
					<a href="">human spaceflight</a>
					<a href="">rideshare</a>
					<a href="">starshield</a>
					<a href="">starlink</a>
				</nav>
			</div>
			<div className="uppercase font-bold text-white flex ml-auto items-center">
				<a href="">shop</a>
			</div>
		</div>
	)
}
