import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LogoDefault, LogoIcon, NavigationHeader } from '..'

import { IoSearch } from 'react-icons/io5'
import { CgMenuLeftAlt } from 'react-icons/cg'

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false)
	const [toggleSearch, setToggleSearch] = useState(false)

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu)
		console.log('Menu is: ', toggleMenu ? 'closed' : 'open')
	}
	const handleToggleSearch = () => {
		setToggleSearch(!toggleSearch)
		console.log('Search is: ', toggleSearch ? 'closed' : 'open')
	}

	return (
		<header className='p-4 bg-white grid grid-cols-4 gap-12 flex items-center'>
			<div className='col-span-1'>
				<IoSearch
					className='cursor-pointer text-3xl lg:hidden hover:text-bpblue ease-out duration-300'
					onClick={() => handleToggleSearch()}
				/>
				<Link className='hidden lg:block' to='/'>
					<div className=''>
						<LogoDefault className='h-9' />
					</div>
				</Link>
			</div>
			<div className='col-span-2 flex justify-center'>
				<Link className='md:hidden' to='/'>
					<LogoIcon className='w-10' />
				</Link>
				<Link className='hidden md:block lg:hidden' to='/'>
					<LogoDefault className='h-12' />
				</Link>
				<NavigationHeader className='hidden justify-center text-sm space-x-12 lg:flex font-semibold' />
			</div>
			<div className='col-span-1 flex justify-end space-x-4'>
				<IoSearch
					className='cursor-pointer text-3xl hidden lg:block hover:text-bpblue ease-out duration-300'
					onClick={() => handleToggleSearch()}
				/>
				<CgMenuLeftAlt
					className='cursor-pointer text-3xl lg:hidden hover:text-bpblue ease-out duration-300'
					onClick={() => handleToggleMenu()}
				/>
			</div>
		</header>
	)
}

export default Header
