import React from 'react'

const SectionGrid = ({ children, title }) => {
	return (
		<div className='mt-6 grid grid-cols-1 gap-y-8'>
			<div className='border-t border-gray-200 pt-8 grid grid-cols-1 gap-y-6 lg:grid-cols-4 lg:gap-5'>
				<div>
					<h3 className='text-lg font-medium tracking-tight text-gray-900'>
						{title}
					</h3>
				</div>
				<div className='grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6 md:grid-cols-3 lg:col-span-3'>
					{children}
				</div>
			</div>
		</div>
	)
}

export default SectionGrid
