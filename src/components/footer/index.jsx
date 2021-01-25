import React from 'react'
import { LogoIcon } from '../../shared/components'

import {
	FaFacebookF,
	FaInstagram,
	FaPinterest,
	FaTwitter,
	FaSpotify,
	FaYoutube,
} from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { DefaultButton } from '../button'

const Footer = () => {
	return (
		<div className='w-full bg-bpblack px-8'>
			<div className='max-w-6xl mx-auto text-white pb-20 lg:pb-30 grid grid-cols-1 lg:grid-cols-5 gap-x-20'>
				<div className='pt-20 lg:pt-30 max-w-sm lg:col-span-2'>
					<h5 className='text-2xl lg:text-3xl font-semibold mb-8'>
						Stay Updated
					</h5>
					<p className=''></p>
					<input
						className='py-6 outline-none bg-transparent border-b-2 border-white w-full placeholder-white mb-12 focus:placeholder-opacity-25 transition-all ease-out duration-300'
						placeholder='Your Email'
					/>
					<div className='flex'>
						<DefaultButton
							className='bg-white text-black text-sm font-semibold justify-center py-4 px-8 hover:opacity-75 transition ease-out duration-300'
							onClick={() => console.log('Guest Subcribed')}>
							Subscribe
						</DefaultButton>
					</div>
				</div>
				<div class='footer-links pt-20 lg:pt-30 max-w-sm lg:col-span-1'>
					<h5 className='text-2xl lg:text-3xl font-semibold mb-8'>
						More Info:
					</h5>
					<nav className='footer-nav text-base flex flex-col space-y-3'>
						<a
							href='/tours/'
							className=' hover:text-bpseagreen transition ease-out duration-300'>
							Studio Visits
						</a>
						<a
							href='/careers/'
							className=' hover:text-bpseagreen transition ease-out duration-300'>
							Careers
						</a>
						<a
							href='/press/'
							className=' hover:text-bpseagreen transition ease-out duration-300'>
							Press Contact
						</a>
						<a
							href='/brand/'
							className=' hover:text-bpseagreen transition ease-out duration-300'>
							Brand Guidelines
						</a>
						<a
							href='/privacy/'
							className=' hover:text-bpseagreen transition ease-out duration-300'>
							Privacy Policy
						</a>
						<a
							href='/terms/'
							className=' hover:text-bpseagreen transition ease-out duration-300'>
							Terms of Use
						</a>
						<a
							href='/contact/'
							className=' hover:text-bpseagreen transition ease-out duration-300'>
							Contact Us
						</a>
						<a
							href='/support/'
							className=' hover:text-bpseagreen transition ease-out duration-300'>
							Get Support
						</a>
						<a
							href='/contact/'
							className=' hover:text-bpseagreen transition ease-out duration-300'>
							<span>Report a Bug</span>
						</a>
					</nav>
				</div>
				<div className='pt-20 lg:pt-30 max-w-sm lg:col-span-2'>
					<LogoIcon className='w-14' />
					<p className='text-2.5xl lg:text-3xl leading-9 pt-5'>
						Helping people experience the Bible as a unified story
						that leads to Jesus
					</p>
					<nav class='footer-social flex space-x-5 mt-12'>
						<a
							href='https://www.youtube.com/user/jointhebibleproject/'
							target='_blank'
							rel='noreferrer noopener'
							title='BibleProject on Youtube'>
							<FaYoutube className='fill-current w-5 h-5' />
						</a>
						<a
							href='https://www.facebook.com/jointhebibleproject/'
							target='_blank'
							rel='noreferrer noopener'
							title='BibleProject on Facebook'>
							<FaFacebookF className='fill-current w-5 h-5' />
						</a>
						<a
							href='https://twitter.com/bibleproject'
							target='_blank'
							rel='noreferrer noopener'
							title='BibleProject on Twitter'>
							<FaTwitter className='fill-current w-5 h-5' />
						</a>
						<a
							href='https://www.instagram.com/thebibleproject'
							target='_blank'
							rel='noreferrer noopener'
							title='BibleProject on Instagram'>
							<FaInstagram className='fill-current w-5 h-5' />
						</a>
						<a
							href='https://www.pinterest.com/thebibleproject/'
							target='_blank'
							rel='noreferrer noopener'
							title='BibleProject on Pinterest'>
							<FaPinterest className='fill-current w-5 h-5' />
						</a>
						<a
							href='https://open.spotify.com/show/6f2oD3RtQY1rOeyfF2OeOa/'
							target='_blank'
							rel='noreferrer noopener'
							title='BibleProject on Spotify'>
							<FaSpotify className='fill-current w-5 h-5' />
						</a>
						<a
							href='https://www.tiktok.com/@bibleproject/'
							target='_blank'
							rel='noreferrer noopener'
							title='BibleProject on Tiktok'>
							<SiTiktok className='fill-current w-5 h-5' />
						</a>
					</nav>
				</div>
			</div>
			<div className='text-gray-300 pb-5 text-sm'>
				&copy; Copyright {new Date().getFullYear()} BibleProject.
			</div>
		</div>
	)
}

export default Footer
