import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { SectionCode, SectionView } from '..'

const SectionDisplay = ({ itemTitle, bgcolor, code, language, view }) => {
	const [toggleView, setToggleView] = useState(true)
	const [copyCode, setCopyCode] = useState(false)
	const handleToggleView = bool => {
		setToggleView(bool)
	}

	const handleCopyCode = () => {
		setCopyCode(true)
		const timer = setTimeout(() => {
			setCopyCode(false)
		}, 1000)
		clearInterval(timer)
	}

	return (
		<div className='relative border-b border-t border-gray-200 sm:border sm:rounded-lg overflow-hidden'>
			<div className='px-4 py-2 border-b border-gray-200 flex justify-between items-center bg-white sm:py-4 sm:px-6 sm:items-baseline'>
				<div className='flex-shrink min-w-0 flex items-center'>
					<h3 className='flex-shrink min-w-0 font-regular text-base md:text-lg leading-snug truncate'>
						<a href='#component-b9bcab4538776a17fff93d18f82a8272'>
							{itemTitle}
						</a>
					</h3>
				</div>
				<div className='ml-4 flex flex-shrink-0 items-center'>
					<div className='flex items-center text-sm sm:hidden'>
						<button
							type='button'
							onClick={() => setToggleView(!toggleView)}
							className='inline-block rounded-lg font-medium leading-none py-3 px-3 focus:outline-none text-gray-400 hover:text-gray-600 focus:text-gray-600'>
							<svg
								className='h-5 w-5'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path
									fillRule='evenodd'
									d='M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
									clipRule='evenodd'></path>
							</svg>
						</button>
					</div>
					<div className='hidden sm:flex items-center text-sm md:text-base'>
						<button
							onClick={() => handleToggleView(true)}
							type='button'
							className={`inline-block rounded-lg font-medium leading-none py-2 px-3 focus:outline-none trasition ease-out duration-300 ${
								toggleView
									? 'bg-bpblue text-white'
									: 'bg-gray-200 text-gray-500 hover:bg-bpblue hover:text-bpblue hover:bg-opacity-25'
							}`}>
							Preview
						</button>
						<button
							onClick={() => handleToggleView(false)}
							type='button'
							className={`ml-2 inline-block rounded-lg font-medium leading-none py-2 px-3 focus:outline-none trasition ease-out duration-300 ${
								toggleView
									? 'bg-gray-200 text-gray-500 hover:bg-bpblue hover:text-bpblue hover:bg-opacity-25'
									: 'bg-bpblue text-white'
							}`}>
							Code
						</button>
						<textarea
							readOnly=''
							className='sr-only whitespace-pre-wrap'
							aria-hidden='false'
							x-ref='htmlClipboardCode'
							tabIndex='-1'></textarea>
					</div>
					<div className='hidden sm:flex sm:items-center'>
						<div className='pl-4 pr-4 self-stretch'>
							<div className='h-full border-l border-gray-200'></div>
						</div>
						<CopyToClipboard
							text={code}
							onCopy={() => handleCopyCode()}>
							<div className='relative'>
								<div
									className={`cursor-pointer absolute right-0 mt-2 -mr-4 font-semibold flex items-center justify-center text-xs text-green-500 transition-all ease-out duration-300 ${
										copyCode
											? 'opacity-100 z-1'
											: 'opacity-0 z-1'
									}`}>
									Copied!
								</div>
								<button
									type='button'
									className={`relative cursor-pointer focus:outline-none mt-1 z-1 text-gray-400 hover:text-gray-500 transition-all ease-out duration-300 ${
										copyCode ? 'opacity-0 -z-1' : ''
									}`}>
									<svg
										className='h-5 w-5'
										fill='currentColor'
										viewBox='0 0 20 20'>
										<title>Copy</title>
										<path d='M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z'></path>
										<path d='M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z'></path>
									</svg>
								</button>
							</div>
						</CopyToClipboard>
					</div>
				</div>
			</div>
			<div className='relative bg-gray-500'>
				{toggleView && <SectionView bgcolor={bgcolor} view={view} />}
				{!toggleView && (
					<SectionCode className='' language={language} code={code} />
				)}
			</div>
		</div>
	)
}

export default SectionDisplay
