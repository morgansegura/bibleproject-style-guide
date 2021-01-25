import React from 'react'

const SectionView = ({ bgcolor, view }) => {
	return <div className={`p-6 ${bgcolor ? bgcolor : 'bg-white'}`}>{view}</div>
}

export default SectionView
