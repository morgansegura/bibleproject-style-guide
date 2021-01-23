import React from 'react'

import { Layout, SectionGrid, SectionItem } from '../../components'
import { componentSectionsData } from '../../data'
// import { VideoButton } from '../../components/button'
// import { IoPlaySharp } from 'react-icons/io5'

const Components = () => {
	return (
		<Layout>
			<div className='pt-16'>
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
										({
											count,
											badge,
											image,
											title,
											to,
										}) => (
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
					{/*
				<Hero className='px-8'>
					<div className='text-white bg-darkslatepurple grid grid-cols-2'>
						<div className='pl-20 py-32'>
							<p className='text-lg mb-2'>
								<span className='font-semibold'>
									BibleProject
								</span>{' '}
								Watch
							</p>
							<h2 className='text-4xl leading-hero-h2 font-semibold mb-4 lg:max-w-lg'>
								Watch & Browse All Our Animated Videos
							</h2>
							<p className='text-base mb-10 lg:max-w-sm'>
								All of our videos are short visual explanations
								that show how the Bible is a unified story that
								leads to Jesus.
							</p>
							<VideoButton
								textColor='white'
								iconColor='white'
								buttonColor='white'
								icon={<IoPlaySharp />}
								onClick={() =>
									console.log('video button works')
								}
								className=''>
								<span className='font-semibold'>
									Learn about our video library
								</span>
							</VideoButton>
						</div>
						<div
							className='bg-no-repeat bg-right-bottom bg-cover'
							style={{
								backgroundImage:
									'url("//dma9sdczpu5q0.cloudfront.net/media/explore-v2/Book%20Collections/Book%20Collections/book-collections_rich.jpg?q=65&fit=max&w=1600")',
							}}>
							<img
								className='aspect-ratio'
								src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
								alt='Aspect Ratio GIF'
								title='Aspect Ratio GIF'
							/>
						</div>
					</div>
				</Hero>
				*/}
				</div>
			</div>
		</Layout>
	)
}

export default Components
