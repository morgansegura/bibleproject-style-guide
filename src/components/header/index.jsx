import React from 'react'

const Header = ({ children }) => {
	return (
		<div className='fixed z-10 w-full py-3 border-b bg-white bg-opacity-75 border-gray-200'>
			<div className='flex items-center justify-between mx-auto px-8'>
				{children}
			</div>
		</div>
	)
}

export default Header
