import NavBar from '../components/Navbar'

import DynamicSection from '../components/DynamicSection'
import Footer from '../components/Footer'

export default function MainPage() {
	const sections = [
		{
			title: `Starship's Sixth \nFlight Test`,
			subtitle: 'Recent Launch',
			mediaType: 'video',
			mediaSrc:
				'https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_6_West_Drone_20241119_website_H_email_aebad7e040.mp4',
			btnSrc: '/falcon-heavy',
		},
		{
			title: `Starlink Mission`,
			subtitle: 'Recent Launch',
			mediaType: 'image',
			mediaSrc: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Star6_76_112624_DSC_8978_desktop_4497307c1c.jpg',
			btnSrc: '/falcon-heavy',
		},
		{
			title: `Starlink Mission`,
			subtitle: 'Recent Launch',
			mediaType: 'image',
			mediaSrc:
				'https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_G9_13_Lompoc_Streak_4380_Desktop_4e380e83cf.jpg',
			btnSrc: '/falcon-heavy',
		},
		{
			title: `Starlink Mission`,
			subtitle: 'Recent Launch',
			mediaType: 'image',
			mediaSrc: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Star12_1_112524_DSC_8918_desktop_36eb0bfa85.jpg',
			btnSrc: '/falcon-heavy',
		},
		{
			title: `ADVANCING HUMAN \nSPACEFLIGHT`,
			subtitle: '',
			mediaType: 'image',
			mediaSrc: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Eva_Suit_Desktop_alternate_1cf9bae18e.jpg',
			btnSrc: '/falcon-heavy',
		},
		{
			title: `TO MAKE LIFE \nMULTIPLANETARY`,
			subtitle: '',
			mediaType: 'image',
			mediaSrc: 'https://sxcontent9668.azureedge.us/cms-assets/assets/make_life_multiplanetary_desktop_3fa7cff73c.jpg',
			btnSrc: '/falcon-heavy',
		},
	]
	return (
		<div className="font-roboto flex flex-col items-center overflow-hidden">
			<NavBar />

			{sections.map((section, index) => (
				<DynamicSection
					key={index}
					title={section.title}
					subtitle={section.subtitle}
					mediaType={section.mediaType}
					mediaSrc={section.mediaSrc}
					btnSrc={section.btnSrc}
				/>
			))}
			<Footer />
		</div>
	)
}
