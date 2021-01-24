import React from 'react'

import { LayoutGrid, SectionGrid, SectionItem } from '../../components'
import { componentSectionsData } from '../../data'

const Components = () => {
	return (
		<LayoutGrid>
			<div className='max-w-8xl mx-auto grid grid-cols-1 gap-y-16 px-4 py-4 sm:px-6 sm:py-12 lg:px-8'>
				{componentSectionsData.map(({ id, title, block }) => (
					<div id={id} key={id}>
						<div class='pb-2'>
							<div class='h-5'></div>
						</div>
						<h2 className='text-2xl font-semibold tracking-tight font-display text-gray-900 sm:text-3xl'>
							{title}
						</h2>
						{block.map(({ title, section }) => (
							<SectionGrid title={title}>
								{section.map(
									({ count, badge, image, title, to }) => (
										<SectionItem
											count={count}
											badge={badge}
											image={image}
											title={title}
											to={to}
										/>
									)
								)}
							</SectionGrid>
						))}
					</div>
				))}
			</div>
		</LayoutGrid>
	)
}

export default Components
