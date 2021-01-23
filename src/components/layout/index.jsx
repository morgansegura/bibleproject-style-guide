import React from 'react'

import { Header, Navigation } from '..'

const Layout = ({ children }) => {
	return (
		<div>
			<Header>
				<Navigation />
			</Header>
			{children}
		</div>
	)
}

export default Layout
