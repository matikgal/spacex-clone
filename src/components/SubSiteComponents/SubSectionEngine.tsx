import { useState } from 'react'

export default function SubSectionEngine() {
	const [selectedMode, setSelectedMode] = useState<'seaLevel' | 'vacuum'>('seaLevel')

	const engineData = {
		seaLevel: {
			background: '../../../img/falconenginge.jpg',
			info: 'Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use RP-1 and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.',
			text: {
				thrust: ['845 kN', '190,000 lbf'],
			},
		},
		vacuum: {
			background: '../../../img/falconenginge2.jpg',
			info: 'Merlin Vacuum features a larger exhaust section and a significantly larger expansion nozzle to maximize the engine’s efficiency in the vacuum of space. Its combustion chamber is regeneratively cooled, while the expansion nozzle is radiatively cooled. At full power, the Merlin Vacuum engine operates with the greatest efficiency ever for an American-made hydrocarbon rocket engine.',
			text: {
				thrust: ['981 kN', '220,500 lbf'],
			},
		},
	}

	const currentData = engineData[selectedMode]

	return (
		<div className="relative w-screen md:h-screen overflow-hidden text-white">
			<img
				src={currentData.background}
				alt={`${selectedMode} background`}
				className="md:absolute inset-0 md:w-full h-screen object-cover w-auto"
			/>

			<div className="bg-black md:container mx-auto  relative z-10 w-full h-full flex flex-col justify-end sm:justify-center sm:items-start px-4 sm:px-16 md:bg-transparent">
				<h4 className="text-sm uppercase sm:text-lg tracking-wider">Engines</h4>
				<h2 className="text-3xl sm:text-4xl font-bold mb-6 uppercase">Merlin</h2>

				<div className="flex space-x-4 mb-6 text-sm">
					<button
						onClick={() => setSelectedMode('seaLevel')}
						className={`uppercase font-semibold ${selectedMode === 'seaLevel' ? 'text-white' : 'text-gray-400'}`}>
						Sea Level
					</button>
					<p className="text-gray-400">|</p>
					<button
						onClick={() => setSelectedMode('vacuum')}
						className={`uppercase font-semibold ${selectedMode === 'vacuum' ? 'text-white' : 'text-gray-400'}`}>
						Vacuum
					</button>
				</div>

				<div className="w-full max-w-xl space-y-4">
					<p className="leading-relaxed text-sm sm:text-base mb-8">{currentData.info}</p>
					<div className="flex justify-between text-xs sm:text-sm">
						<p className="font-semibold uppercase">Propellant</p>
						<div className="flex space-x-2 font-bold">
							<p>LOX</p>
							<p className="text-gray-400">/ RP-1</p>
						</div>
					</div>
					<hr className="border-gray-400 " />
					<div className="flex justify-between text-xs sm:text-sm">
						<p className="font-semibold uppercase">Thrust</p>
						<div className="flex space-x-2 font-bold">
							<p>{currentData.text.thrust[0]}</p>
							<p className="text-gray-400">{currentData.text.thrust[1]}</p>
						</div>
					</div>
					<hr className="border-gray-400" />
				</div>
			</div>
		</div>
	)
}
