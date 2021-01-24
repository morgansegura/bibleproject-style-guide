import React from 'react'
import { Link } from 'react-router-dom'

import { Header, LogoDefault, Navigation } from '../../'

const LayoutGrid = ({ children }) => {
	return (
		<div>
			<Header>
				<Link to='/'>
					<LogoDefault className='h-8' />
				</Link>
				<Navigation />
			</Header>
			<main className='pt-24 max-w-8xl px-8 mx-auto'>{children}</main>
		</div>
	)
}

export default LayoutGrid
