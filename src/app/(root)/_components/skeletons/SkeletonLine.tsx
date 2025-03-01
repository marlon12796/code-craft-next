export const SkeletonLine = () => {
	return (
		<div className='flex items-center gap-4 mb-3'>
			<div className='w-12 h-4 bg-white/5 rounded' />
			<div className='h-4 bg-white/5 rounded' style={{ width: `${Math.random() * 60 + 20}%` }} />
		</div>
	);
};
