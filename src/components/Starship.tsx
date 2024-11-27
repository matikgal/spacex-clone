export default function Starship() {
	return (
		<div>
			{/* <video aria-hidden="true" data-content-video="true" poster="https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_06_Launch_Snchz_Tracking_20241119_DSC_05744_website_H_61b601fd9d.jpg" muted="" playsinline="" loop="" autoplay="">
        <source type="video/mp4" src="https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_6_West_Drone_20241119_website_H_email_aebad7e040.mp4">
      </video> */}
			<video className="h-screen w-screen " controls autoPlay muted aria-hidden="true">
				<source
					src="https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_6_West_Drone_20241119_website_H_email_aebad7e040.mp4"
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>
		</div>
	)
}
