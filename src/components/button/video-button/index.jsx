import React from 'react'

const VideoButton = ({
	buttonColor,
	children,
	className,
	icon,
	iconColor,
	onClick,
	textColor,
	style,
}) => {
	return (
		<div
			onClick={onClick}
			style={style}
			className={`cursor-pointer group flex items-center ${className}`}>
			<div
				className={`fill-current border-2 flex items-center justify-center w-15 h-15 text-lg rounded-full border-${
					buttonColor ? buttonColor : 'black'
				}
                text-${
					iconColor ? iconColor : 'black'
				} transform group-hover:scale-110 transition-transform ease-out duration-300`}>
				<span className='ml-1'>{icon}</span>
			</div>
			<p
				className={`text-xl ml-6 font-normal text-${
					textColor ? textColor : 'black'
				}`}>
				{children}
			</p>
		</div>
	)
}

export default VideoButton
