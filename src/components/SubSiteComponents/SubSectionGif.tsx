export default function SubSectionGif() {
	return (
		<div className="bg-black h-screen w-screen flex items-center justify-center">
			<div className="flex flex-col md:flex-row justify-around items-center gap-x-10  w-full container ">
				<video
					src="../../../public/img/rocketgif.mp4"
					loop
					muted
					autoPlay
					className="flex-shrink-0 px-10 md:px-0 w-full md:w-3/6 lg:w-3/6 h-auto object-cover max-w-[750px]"></video>

				<div className="flex-shrink-0 w-full md:w-2/6 text-white px-10 md:px-0 pt-10 md:p-2 ">
					<h1 className="text-4xl w-1/2 md:text-3xl lg:text-5xl font-bold mb-4 uppercase ">Unmatched Performance</h1>
					<p className=" leading-relaxed w-5/6 md:w-full">
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
