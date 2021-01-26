import React from 'react'

const CardVertical = ({
	children,
	className,
	title,
	superTitle,
	image,
	style,
	...restProps
}) => {
	return (
		<div
			className={`flex flex-col box-border ${className}`}
			style={style}
			{...restProps}>
			<div className='text-opacity-75 text-sm'>{superTitle}</div>
			<h5 className='font-semibold'>{title}</h5>
			{children}
		</div>
	)
}

export default CardVertical
