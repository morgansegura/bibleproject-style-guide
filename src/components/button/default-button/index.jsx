import React from 'react'
import { Link } from 'react-router-dom'

const VideoButton = ({
	children,
	className,
	href,
	onClick,
	to,
	style,
	...otherProps
}) => {
	return (
		<React.Fragment>
			{to && (
				<Link
					to={to}
					style={style}
					className={`cursor-pointer group flex items-center ${className}`}
					{...otherProps}>
					{children}
				</Link>
			)}
			{href && (
				<a
					href={href}
					style={style}
					className={`cursor-pointer group flex items-center ${className}`}
					{...otherProps}>
					{children}
				</a>
			)}
			{onClick && (
				<div
					onClick={onClick}
					style={style}
					className={`cursor-pointer group flex items-center ${className}`}
					{...otherProps}>
					{children}
				</div>
			)}
		</React.Fragment>
	)
}

export default VideoButton
