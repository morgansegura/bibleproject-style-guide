import React from 'react'

import { Hero, VideoButton } from '../..'

import { IoPlaySharp } from 'react-icons/io5'

const HeroSimpleCentered = () => {
	return (
		<Hero>
			<div className='text-white bg-darkslatepurple grid grid-cols-1 lg:grid-cols-2'>
				<div className='px-8 py-32 lg:pl-20 lg:px-0 '>
					<p className='text-lg mb-2'>
						<span className='font-semibold'>BibleProject</span>{' '}
						Watch
					</p>
					<h2 className='text-4xl leading-hero-h2 font-semibold mb-4 lg:max-w-lg'>
						Watch & Browse All Our Animated Videos
					</h2>
					<p className='text-base mb-10 lg:max-w-sm'>
						All of our videos are short visual explanations that
						show how the Bible is a unified story that leads to
						Jesus.
					</p>
					<VideoButton
						textColor='white'
						iconColor='white'
						buttonColor='white'
						icon={<IoPlaySharp />}
						onClick={() => console.log('video button works')}
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
	)
}

export default HeroSimpleCentered
