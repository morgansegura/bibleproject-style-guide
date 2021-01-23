import React from 'react'
import { Link } from 'react-router-dom'

const SectionItem = ({ count, badge, image, title, to }) => {
	return (
		<Link to={to} className='block group'>
			<figure>
				<div className='relative rounded overflow-hidden transition transform duration-150 ease-in-out'>
					<img className='w-full h-auto' src={image} alt={title} />
					<div className='absolute inset-0 flex items-center justify-center text-center rounded-md border-gray-300 opacity-15 border'></div>
					<div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition ease-in-out duration-150'></div>
				</div>
				<figcaption className='mt-3'>
					<p className='flex items-baseline text-sm font-medium text-gray-900'>
						<span> Hero Sections</span>
						{badge && (
							<span className='inline ml-2 bg-yellow-100 rounded-full px-2 py-0.5 text-xs tracking-wide uppercase font-semibold flex-shrink-0'>
								<span className='text-yellow-700'>New</span>
							</span>
						)}
					</p>
					<p className='text-sm text-gray-500'>
						{count} component{count > 1 && 's'}
					</p>
				</figcaption>
			</figure>
		</Link>
	)
}

export default SectionItem
