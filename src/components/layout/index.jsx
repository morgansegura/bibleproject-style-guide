import React from 'react'

import { LogoDefault, LogoIcon } from '../../components/logo'
import { Header, Navigation } from '..'

const Layout = ({ children }) => {
	return (
		<div>
			<Header>
				<LogoDefault className='h-8' />
				<Navigation />
			</Header>
			{children}
		</div>
	)
}

export default Layout
