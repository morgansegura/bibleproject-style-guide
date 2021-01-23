import React from 'react'

const Hero = ({ children, className }) => {
	return (
		<div className={`w-full mx-auto min-h-full ${className}`}>
			{children}
		</div>
	)
}

export default Hero
