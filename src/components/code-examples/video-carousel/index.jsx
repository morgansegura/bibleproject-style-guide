import React from 'react'

import { CardVertical } from '../..'

const VideoCarousel = () => {
	const videoCards = [
		{
			id: 0,
			className: 'bg-pinegreen text-white',
			superTitle: 'Character of God Series',
			title: 'Loyal Love',
			image:
				'https://dma9sdczpu5q0.cloudfront.net/media/Explore%20Images/ws_cog/cog-loyal%20love_standard.png?q=65&fit=max&w=600',
		},
		{
			id: 1,
			className: 'bg-caramel text-white',
			superTitle: 'Visual Commentaries',
			title: 'Genesis 1',
			image:
				'https://dma9sdczpu5q0.cloudfront.net/media/Explore%20Images/ws_cog/cog-loyal%20love_standard.png?q=65&fit=max&w=600',
		},
		{
			id: 2,
			className: 'bg-lavendar text-white',
			superTitle: 'Character of God Series',
			title: 'Slow to Anger',
			image:
				'https://dma9sdczpu5q0.cloudfront.net/media/Explore%20Images/ws_cog/cog-loyal%20love_standard.png?q=65&fit=max&w=600',
		},
		{
			id: 3,
			className: 'bg-cranberry text-white',
			superTitle: 'Themes',
			title: 'The Test',
			image:
				'https://dma9sdczpu5q0.cloudfront.net/media/Explore%20Images/ws_cog/cog-loyal%20love_standard.png?q=65&fit=max&w=600',
		},
		{
			id: 4,
			className: 'bg-royalblue text-white',
			superTitle: 'Character of God Series',
			title: 'Grace',
			image:
				'https://dma9sdczpu5q0.cloudfront.net/media/Explore%20Images/ws_cog/cog-loyal%20love_standard.png?q=65&fit=max&w=600',
		},
		{
			id: 4,
			className: 'bg-royalblue text-white',
			superTitle: 'Character of God Series',
			title: 'Grace',
			image:
				'https://dma9sdczpu5q0.cloudfront.net/media/Explore%20Images/ws_cog/cog-loyal%20love_standard.png?q=65&fit=max&w=600',
		},
	]
	return (
		<div className='flex space-x-3 overflow-scroll'>
			{videoCards.map(({ id, className, superTitle, title, image }) => (
				<CardVertical
					key={id}
					className={`p-4 rounded-md relative overflow-hidden w-48 h-video-card ${className}`}
					superTitle={superTitle}
					title={title}>
					<div className='absolute bottom-0 right-0 w-36'>
						<img src={image} alt={title} />
					</div>
				</CardVertical>
			))}
		</div>
	)
}

export default VideoCarousel
