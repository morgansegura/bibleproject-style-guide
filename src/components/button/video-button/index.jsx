import React from 'react'

const VideoButton = props => {
	return (
		<div
			onClick={props.onClick}
			style={props.style}
			className={`cursor-pointer group flex items-center ${props.className}`}
			textDisplay='white'>
			<div
				className={`fill-current border-2 flex items-center justify-center w-15 h-15 text-lg rounded-full border-${
					props.buttonColor ? props.buttonColor : 'black'
				}
                text-${
					props.iconColor ? props.iconColor : 'black'
				} transform group-hover:scale-110 transition-transform ease-out duration-300`}>
				<span className='ml-1'>{props.icon}</span>
			</div>
			<p
				className={`text-xl ml-6 font-normal text-${
					props.textColor ? props.textColor : 'black'
				}`}>
				{props.children}
			</p>
		</div>
	)
}

export default VideoButton
