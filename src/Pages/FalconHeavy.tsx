import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import SubSectionHeader from '../components/SubSiteComponents/SubSectionHeader'
import SubSectionVideo from '../components/SubSiteComponents/SubSectionVideo'
import SubSectionGif from '../components/SubSiteComponents/SubSectionGif'

export default function FalconHeavy() {
	return (
		<div className="font-roboto flex flex-col items-center overflow-hidden">
			<NavBar />
			<SubSectionHeader
				title="falcon heavy"
				subtitle="over 5 million lbs of thrust"
				mediaSrc="https://www.spacex.com/static/images/backgrounds/fh_feature.jpg"
				altText="Rocket engine"
			/>
			<SubSectionVideo
				VideoSrc="https://www.youtube.com/embed/A0FZIwabctw?autoplay=1"
				bgSrc="https://www.spacex.com/static/images/backgrounds/fh_video.jpg"
				altBgSrc="Tesla in space"
				subtitle="video"
				title="falcon heavy first flight"
			/>
			<SubSectionGif />
			<Footer />
		</div>
	)
}
