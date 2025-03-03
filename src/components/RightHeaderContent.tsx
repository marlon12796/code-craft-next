'use client';
import HeaderProfileBtn from '@/app/(root)/_components/HeaderProfileBtn';
import { SignedOut } from '@clerk/nextjs';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const RightHeaderContent = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);
	return (
		isClient && (
			<div className='flex items-center gap-4'>
				<SignedOut>
					<Link
						href='/pricing'
						className='flex items-center gap-2 px-4 py-1.5 rounded-lg border border-amber-500/20
                 hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10 
                to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 transition-all 
                duration-300'
					>
						<Sparkles className='w-4 h-4 text-amber-400 hover:text-amber-300' />
						<span className='text-sm font-medium text-amber-400/90 hover:text-amber-300'>Pro</span>
					</Link>
				</SignedOut>

				<HeaderProfileBtn />
			</div>
		)
	);
};
