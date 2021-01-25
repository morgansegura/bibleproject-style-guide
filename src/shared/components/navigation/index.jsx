import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<div>
			<NavLink
				className='text-sm hover:text-bpblue transition ease-out duration-300'
				to='/components'>
				Components
			</NavLink>
		</div>
	)
}

export default Navigation
