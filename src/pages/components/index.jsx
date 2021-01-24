import React from 'react'

import { LayoutGrid, SectionGrid, SectionItem } from '../../components'
import { componentSectionsData } from '../../data'

const Components = () => {
	return (
		<LayoutGrid>
			<div className='max-w-8xl mx-auto grid grid-cols-1 gap-y-16 px-4 py-4 sm:px-6 sm:py-12 lg:px-8'>
				{componentSectionsData.map(({ id, title, block }) => (
					<div id={id} key={id}>
						<div className='pb-2'>
							<div className='h-5'></div>
						</div>
						<h2
							id='marketingSections'
							className='text-2xl font-semibold tracking-tight font-display text-gray-900 sm:text-3xl'>
							{title}
						</h2>
						{block.map(({ id, title, section, sectionId }) => (
							<SectionGrid
								sectionId={sectionId}
								title={title}
								id={id}
								key={id}>
								{section.map(
									({
										id,
										count,
										badge,
										image,
										title,
										to,
									}) => (
										<SectionItem
											key={id}
											id={id}
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
