import React from 'react'

import { LayoutSection, SectionDisplay } from '../../../shared/components'
import { Footer } from '../../../components'
import { codeFooter } from '../../../data'

const FooterElement = () => {
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
		<LayoutSection title='Footers' breadcrumbs={breadcrumbs}>
			<SectionDisplay language='js' code={codeFooter} view={<Footer />} />
		</LayoutSection>
	)
}

export default FooterElement
