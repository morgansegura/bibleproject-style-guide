import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({
	children,
	className,
	href,
	onClick,
	title,
	to,
	style,
	...restProps
}) => {
	return (
		<React.Fragment>
			{href && (
				<a
					href={href}
					title={title}
					className={className}
					{...restProps}>
					{children}
				</a>
			)}
			{onClick && (
				<div
					onClick={onClick}
					data-title={title}
					className={className}
					{...restProps}>
					{children}
				</div>
			)}
			{to && (
				<NavLink
					to={to}
					data-title={title}
					className={className}
					{...restProps}>
					{children}
				</NavLink>
			)}
		</React.Fragment>
	)
}

export default NavItem
