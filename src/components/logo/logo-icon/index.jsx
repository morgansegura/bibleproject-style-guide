import React from 'react'

const LogoIcon = ({ className, fillIcon }) => {
	return (
		<svg
			className={className}
			fill='none'
			viewBox='0 0 48 48'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M47.516 0L23.758 4.502 0 0v39.887l9.826-1.833V48L23.81 35.385l23.706 4.502V0z'
				fill={fillIcon ? fillIcon : '#00B3E5'}></path>
		</svg>
	)
}

export default LogoIcon
