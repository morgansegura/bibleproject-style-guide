import React from 'react'
import { Link } from 'react-router-dom'

import { Header, LogoDefault, Navigation } from '../../'

const LayoutSection = ({ children, title, breadcrumbs }) => {
	return (
		<div>
			<Header>
				<Link to='/'>
					<LogoDefault className='h-8' />
				</Link>
				<Navigation />
			</Header>
			<main className='pt-24 max-w-8xl px-8 mx-auto'>
				<div className='py-4 sm:py-12'>
					<div className='pb-4'>
						<div className='pb-2'>
							<nav className='flex items-center text-sm font-medium'>
								{breadcrumbs &&
									breadcrumbs.map(({ id, title, to }) => (
										<React.Fragment key={id}>
											<a
												href={to}
												className='text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out'>
												{title}
											</a>
											{id < breadcrumbs.length - 1 && (
												<svg
													className='flex-shrink-0 mx-2 h-5 w-5 text-gray-400'
													fill='currentColor'
													viewBox='0 0 20 20'>
													<path
														fillRule='evenodd'
														d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
														clipRule='evenodd'></path>
												</svg>
											)}
										</React.Fragment>
									))}
							</nav>
						</div>
						<h2 className='text-2xl font-semibold font-display text-gray-900 sm:text-3xl'>
							{title}
						</h2>
					</div>
					{children}
				</div>
			</main>
		</div>
	)
}

export default LayoutSection
