export default function Starlink() {
	return (
		<div className="relative w-screen h-screen overflow-hidden">
			<video className="absolute inset-0 w-full h-full object-cover" loop muted autoPlay playsInline>
				<source
					src="https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_6_West_Drone_20241119_website_H_email_aebad7e040.mp4"
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>
			{/* https://sxcontent9668.azureedge.us/cms-assets/assets/Star6_76_112624_DSC_8978_desktop_4497307c1c.jpg */}
			<div className="absolute inset-0 flex justify-end flex-col text-white">
				<div className="container mx-auto px-16 pb-36 ">
					<h4 className="text-xl  font-normal mb-2 uppercase tracking-wide">Recent Launch</h4>
					<h2 className="text-5xl font-bold  tracking-tight uppercase ">
						Starship's sixth <br /> flight test
					</h2>
					<button className=" mt-7 border-2 py-4 px-12 uppercase font-medium text-sm"> rewatch</button>
				</div>
			</div>
		</div>
	)
}
