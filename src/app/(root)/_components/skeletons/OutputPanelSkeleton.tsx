import { Terminal } from 'lucide-react';

export const OutputPanelSkeleton = () => {
	return (
		<div className='relative bg-[#181825] rounded-xl p-4 ring-1 ring-gray-800/50'>
			{/* Header */}
			<div className='flex items-center justify-between mb-3'>
				<div className='flex items-center gap-2'>
					<div className='flex items-center justify-center w-6 h-6 rounded-lg bg-[#1e1e2e] ring-1 ring-gray-800/50'>
						<Terminal className='w-4 h-4 text-blue-400/50' />
					</div>
					<div className='w-16 h-4 bg-white/5 rounded' />
				</div>
			</div>

			{/* Output Area Skeleton */}
			<div className='relative'>
				<div className='absolute inset-0 bg-gradient-to-b from-[#1e1e2e] to-[#1a1a2e] rounded-xl -z-10' />
				<div className='relative bg-[#1e1e2e]/50 backdrop-blur-sm border border-[#313244] rounded-xl p-4 h-[600px]'>
					<div className='flex items-center justify-center h-full'>
						<div className='text-center'>
							<div className='w-12 h-12 mx-auto mb-4 bg-white/5 rounded-xl' />
							<div className='w-48 h-4 mx-auto bg-white/5 rounded' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
