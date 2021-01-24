import React from 'react'

import {
	LayoutSection,
	SectionDisplay,
	HeroSimpleCentered,
} from '../../../components'
import { codeHeroSimple } from '../../../data'

const FooterSection = () => {
	const breadcrumbs = [
		{
			id: 0,
			title: 'Marketing',
			to: '/components#marketingSections',
		},
		{
			id: 1,
			title: 'Page Sections',
			to: '/components#elementSections',
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

export default FooterSection
