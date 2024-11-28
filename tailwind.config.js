module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
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
