'use client'; // Error boundaries must be Client Components

import NavigationHeader from '@/components/NavigationHeader';
import Link from 'next/link';
import Image from 'next/image';
export default function Error() {
	const sections = [
		{
			title: 'Pricing',
			description: 'Unlock the full potential of CodeMagic.',
			href: '/pricing',
		},
		{
			title: 'Snippets',
			description: 'Access community-driven code snippets to speed up your development.',

			href: '/snippets',
		},
	];

	return (
		<section className=''>
			<div className='max-w-[1800px] mx-auto p-4'>
				<NavigationHeader />
				<div className='grid grid-cols-1 px-6 mx-auto gap-4 py-8 lg:flex lg:items-center lg:gap-12 lg:grid-cols-2'>
					<div className='w-full lg:w-1/2'>
						<p className='text-base font-medium text-blue-300 dark:text-blue-400'>500 - Internal Server Error</p>
						<h1 className='mt-3 text-4xl font-semibold text-gray-200 md:text-5xl'>Something went wrong</h1>
						<p className='mt-4 text-gray-500 dark:text-gray-400'>
							Oops! It looks like there was a problem on our end. Please try again later.
						</p>

						<div className='flex items-center mt-6 gap-x-3'>
							<Link
								href='/'
								className='flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='size-5 rtl:rotate-180'
								>
									<path strokeLinecap='round' strokeLinejoin='round' d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18' />
								</svg>
								<span>Go back</span>
							</Link>

							<Link
								href='/'
								className='w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600'
							>
								Take me home
							</Link>
						</div>

						{/* Renderizado dinámico de las secciones */}
						<div className='mt-10 space-y-6'>
							{sections.map((section, index) => (
								<div key={index}>
									<Link
										href={section.href}
										className='inline-flex items-center text-sm text-blue-500 gap-x-2 dark:text-blue-400 hover:underline'
									>
										<span className='text-base'>{section.title}</span>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='size-5 rtl:rotate-180'
										>
											<path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' />
										</svg>
									</Link>
									<p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>{section.description}</p>
								</div>
							))}
						</div>
					</div>
					{/* Imagen */}
					<div className='relative w-full  mt-8 md:flex md:justify-end lg:w-1/2 lg:mt-0'>
						<Image width={500} height={500} alt='notFound image' src={'/500-error.png'} />
					</div>
				</div>
			</div>
		</section>
	);
}
