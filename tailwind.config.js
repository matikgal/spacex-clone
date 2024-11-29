module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '600px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
			animation: {
				'bounce-and-fade': 'bounce 2s infinite, fade 6s infinite',
			},
			keyframes: {
				fade: {
					'0%, 100%': { opacity: 0 },
					'50%': { opacity: 1 },
				},
			},
		},
	},
	plugins: [require('tailwindcss-animated')],
}
