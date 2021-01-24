import heroSections from '../../assets/images/sections-hero-sections.svg'
import headerSections from '../../assets/images/sections-header-sections.svg'
import footerSections from '../../assets/images/sections-footer-sections.svg'

export const componentSectionsData = [
	{
		id: 0,
		title: 'Marketing',
		block: [
			{
				id: 0,
				title: 'Page Sections',
				sectionId: 'pageSections',
				section: [
					{
						id: 0,
						title: 'Hero Sections',
						image: heroSections,
						to: '/marketing/components/sections/heroes',
						count: 1,
						badge: true,
					},
				],
			},
			{
				id: 1,
				title: 'Elements',
				sectionId: 'elementSections',
				section: [
					{
						id: 0,
						title: 'Headers',
						image: headerSections,
						to: '/marketing/components/elements/headers',
						count: 1,
						badge: true,
					},
					{
						id: 1,
						title: 'Footers',
						image: footerSections,
						to: '/marketing/components/elements/footers',
						count: 1,
						badge: true,
					},
				],
			},
			{
				id: 2,
				title: 'Page Examples',
				sectionId: 'pageExamples',
				section: [
					{
						id: 0,
						title: 'Home Screens',
						image: headerSections,
						to: '/',
						count: 10,
						badge: false,
					},
				],
			},
		],
	},
]
