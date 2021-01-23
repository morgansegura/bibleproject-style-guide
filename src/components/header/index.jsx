import React from 'react'

const Header = ({ children }) => {
	return (
		<div className='py-4 border border-gray-200 mb-8'>
			<div className='flex items-center justify-between max-w-6xl mx-auto px-8'>
				{children}
			</div>
		</div>
	)
}

export default Header
