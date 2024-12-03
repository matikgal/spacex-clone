module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '600px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
			animation: {
				'bounce-and-fade': 'bounce 2s infinite, fade 6s infinite',
				'slide-in': 'slideIn 0.5s ease-out forwards',
				'slide-out': 'slideOut 0.5s ease-out forwards',
			},
			keyframes: {
				fade: {
					'0%, 100%': { opacity: 0 },
					'50%': { opacity: 1 },
				},
				slideIn: {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideOut: {
					'0%': { transform: 'translateY(0)', opacity: '1' },
					'100%': { transform: 'translateY(-100%)', opacity: '0' },
				},
			},
		},
	},
	plugins: [require('tailwindcss-animated')],
}
