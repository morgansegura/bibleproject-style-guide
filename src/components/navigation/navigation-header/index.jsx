import React, { useState } from 'react'
import { GoChevronDown } from 'react-icons/go'

import { NavItem } from '..'

const NavigationHeader = ({ children, className, style, ...restProps }) => {
	const [toggleMenu, setToggleMenu] = useState(false)

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu)
	}

	const linkData = [
		{
			id: 0,
			to: '/',
			title: 'Listen to Podcasts',
			label: 'Podcast',
		},
		{
			id: 1,
			to: '/',
			title: 'Bible Studies',
			label: 'Bible Study',
		},
		{
			id: 2,
			to: '/',
			title: 'BibleProject Blog',
			label: 'Blog',
		},
		{
			id: 3,
			to: '/',
			title: 'Give',
			label: 'Give',
		},
	]

	return (
		<nav className={className} style={style} {...restProps}>
			<NavItem
				onClick={() => handleToggleMenu()}
				data-title=''
				className='cursor-pointer flex items-center hover:text-bpblue ease-out duration-300'>
				Watch{' '}
				<GoChevronDown
					className={`text-lg ml-2 transform transition-transform ease-out duration-300 ${
						toggleMenu && 'rotate-180'
					}`}
				/>
			</NavItem>
			{linkData.map(({ id, label, title, to }) => (
				<NavItem
					key={id}
					to={to}
					data-title={title}
					className='hover:text-bpblue ease-out duration-300'>
					{label}
				</NavItem>
			))}

			{children}
		</nav>
	)
}

export default NavigationHeader
