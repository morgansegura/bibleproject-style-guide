module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				darkslatepurple: '#5e4b7d',
				bpblue: '#00B3E5',
				bpseagreen: '#4d8b94',
				bpblack: '#010101',
			},
			zIndex: {
				1: '1',
				'-1': '-1',
			},
			fontSize: {
				'2.5xl': '1.7rem',
			},
			opacity: {
				15: '1.5',
			},
			screens: {
				tv: '141rem',
			},
			spacing: {
				15: '3.75rem',
				30: '7.5rem',
			},
			minWidth: {
				tv: '160rem',
			},
			maxWidth: {
				tv: '141rem',
				'8xl': '90rem',
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
			opacity: ['hover'],
		},
	},
	plugins: [],
}
