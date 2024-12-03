export default function SubSectionGif() {
	return (
		<div className="bg-black h-screen w-screen flex items-center justify-center">
			<div className="flex justify-center items-center space-x-4 w-full container px-12 ">
				<video
					src="../../../public/img/rocketgif.mp4"
					loop
					muted
					autoPlay
					className="flex-shrink-0 w-full md:w-4/6 h-auto object-cover max-w-[800px]"></video>

				<div className="flex-shrink-0 w-full md:w-2/6 text-white  p-2 ">
					<h1 className="md:text-3xl lg:text-5xl font-bold mb-4 uppercase ">Unmatched Performance</h1>
					<p className=" leading-relaxed w-full ">
						With more than 5 million pounds of thrust at liftoff, Falcon Heavy is one of the most capable rockets
						flying. By comparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at
						full power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers,
						luggage and fuel—to orbit.
					</p>
				</div>
			</div>
		</div>
	)
}
