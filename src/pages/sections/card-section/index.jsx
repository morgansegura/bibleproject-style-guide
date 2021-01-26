import React from 'react'

import { LayoutSection, SectionDisplay } from '../../../shared/components'
import { VideoCarousel } from '../../../components'
import { codeHeroSimple } from '../../../data'

const CardSection = () => {
	const breadcrumbs = [
		{
			id: 0,
			title: 'Marketing',
			to: '/components#marketingSections',
		},
		{
			id: 1,
			title: 'Page Sections',
			to: '/components#pageSections',
		},
	]

	return (
		<LayoutSection title='Hero Sections' breadcrumbs={breadcrumbs}>
			<SectionDisplay
				language='js'
				itemTitle='Video Card'
				bgcolor=''
				code={codeHeroSimple}
				view={<VideoCarousel />}
			/>
		</LayoutSection>
	)
}

export default CardSection
