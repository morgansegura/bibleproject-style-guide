import React from 'react'

import {
	LayoutSection,
	SectionDisplay,
	HeroSimpleCentered,
} from '../../../components'
import { codeHeroSimple } from '../../../data'

const HeroSection = () => {
	const breadcrumbs = [
		{
			id: 0,
			title: 'Marketing',
			to: '/',
		},
		{
			id: 1,
			title: 'Page Sections',
			to: '/',
		},
	]

	return (
		<LayoutSection title='Hero Sections' breadcrumbs={breadcrumbs}>
			<SectionDisplay
				language='js'
				code={codeHeroSimple}
				view={<HeroSimpleCentered />}
			/>
		</LayoutSection>
	)
}

export default HeroSection
