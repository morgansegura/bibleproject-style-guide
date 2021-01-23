module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				darkslatepurple: '#5e4b7d',
			},
			screens: {
				tv: '141rem',
			},
			spacing: {
				15: '3.75rem',
			},
			minWidth: {
				tv: '160rem',
			},
			maxWidth: {
				tv: '141rem',
			},
			fontFamily: {
				sans: [
					'Graphik',
					'"Helventica Neue"',
					'Helvetica',
					'Arial',
					'sans-serif',
				],
				body: [
					'Graphik',
					'"Helventica Neue"',
					'Helvetica',
					'Arial',
					'sans-serif',
				],
			},
			lineHeight: {
				'hero-h2': '1.35294',
			},
		},
	},
	variants: {
		extend: {
			scale: ['focus-within', 'hover'],
		},
	},
	plugins: [],
}
