import React from 'react'

import { LayoutSection, SectionDisplay } from '../../../shared/components'
import { Header } from '../../../components'
import { codeHeroSimple } from '../../../data'

const HeaderElement = () => {
	const breadcrumbs = [
		{
			id: 0,
			title: 'Marketing',
			to: '/components#marketingSections',
		},
		{
			id: 1,
			title: 'Elements',
			to: '/components#elementSections',
		},
	]

	return (
		<LayoutSection title='Headers' breadcrumbs={breadcrumbs}>
			<SectionDisplay
				language='js'
				itemTitle='Header Default'
				bgcolor='bg-gray-100'
				code={codeHeroSimple}
				view={<Header />}
			/>
		</LayoutSection>
	)
}

export default HeaderElement
