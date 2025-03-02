import { UserResource } from '@clerk/types';
import { Zap } from 'lucide-react';
import { UserDataTypes } from './profileHeaderTypes';
import Image from 'next/image';
export const AvatarProfileHeader = ({ user, userData }: { user: UserResource; userData: UserDataTypes }) => {
	return (
		<div className='relative group'>
			<div
				className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full 
          blur-xl opacity-50 group-hover:opacity-75 transition-opacity'
			/>
			<Image
				src={user.imageUrl}
				alt='Profile'
				className='w-24 h-24 rounded-full border-4 border-gray-800/50 relative z-10 group-hover:scale-105 transition-transform'
				width={150}
				height={150}
			/>
			{userData.isPro && (
				<div
					className='absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-purple-600 p-2
             rounded-full z-20 shadow-lg animate-pulse'
				>
					<Zap className='w-4 h-4 text-white' />
				</div>
			)}
		</div>
	);
};
