export default function Footer() {
	return (
		<div className="bg-black py-4 sm:py-6 w-full">
			<div className="flex flex-col sm:flex-row items-center justify-center text-white text-xs sm:text-sm uppercase tracking-tighter gap-5 sm:gap-x-10 px-5">
				<p>SPACEX 2024</p>
				<div className="flex gap-4 sm:gap-10">
					<a href="#" className="font-semibold hover:text-[#828282] duration-300">
						privacy policy
					</a>
					<a href="#" className="font-semibold hover:text-[#828282] duration-300">
						suppliers
					</a>
				</div>
			</div>
		</div>
	)
}
