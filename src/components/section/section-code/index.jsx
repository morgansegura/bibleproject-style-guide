import React, { useEffect } from 'react'
import Prism from 'prismjs'
import '../../../assets/styles/prism.css'

const SectionCode = ({ className, code, language }) => {
	useEffect(() => {
		setTimeout(() => Prism.highlightAll(), 0)
	}, [])
	return (
		<pre component='pre' className={className}>
			<code className={`language-${language}`}>{code}</code>
		</pre>
	)
}

export default SectionCode
