module.exports = {
	content: ['index.html'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins'],
				satisfy: ['Satisfy']
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				}
			}
		},
	},
	plugins: [],
}