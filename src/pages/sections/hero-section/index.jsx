import React from 'react'

import { LayoutSection, SectionDisplay } from '../../../shared/components'
import { HeroSimpleCentered } from '../../../components'
import { codeHeroSimple } from '../../../data'

const HeroSection = () => {
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
				itemTitle='Two Column with right image.'
				bgcolor=''
				code={codeHeroSimple}
				view={<HeroSimpleCentered />}
			/>
		</LayoutSection>
	)
}

export default HeroSection
