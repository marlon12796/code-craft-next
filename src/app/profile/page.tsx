'use client';
import { useUser } from '@clerk/nextjs';
import { usePaginatedQuery, useQuery } from 'convex/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { api } from '@api/_generated/api';
import NavigationHeader from '@/components/NavigationHeader';
import ProfileHeader from './_components/ProfileHeader/ProfileHeader';
import ProfileHeaderSkeleton from './_components/ProfileHeaderSkeleton';
import { ChevronRight, Code, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import CodeBlock from './_components/CodeBlock';
import { StarsTab } from './_components/Tabs/StarsTab';
import { MenuTabs, type MenuTabsTypes } from './_components/Tabs/MenuTabs';

const ProfilePage = () => {
	const router = useRouter();
	const { user, isLoaded } = useUser();
	const [activeTab, setActiveTab] = useState<MenuTabsTypes>('executions');

	const userStats = useQuery(api.codeExecutions.getUserStats, {
		userId: user?.id ?? '',
	});
	const {
		results: executions,
		status: executionStatus,
		isLoading: isLoadingExecutions,
		loadMore,
	} = usePaginatedQuery(
		api.codeExecutions.getUserExecutions,
		{
			userId: user?.id ?? '',
		},
		{ initialNumItems: 5 }
	);
	const userData = useQuery(api.users.getUser, { userId: user?.id ?? '' });

	const onChangeActiveTab = (tab: MenuTabsTypes) => {
		setActiveTab(tab);
	};

	const handleLoadMore = () => {
		if (executionStatus === 'CanLoadMore') loadMore(5);
	};

	if (!user && isLoaded) return router.push('/');

	return (
		<div className='min-h-screen bg-[#0a0a0f]'>
			<NavigationHeader />

			<div className='max-w-7xl mx-auto px-4 py-12'>
				{/* Profile Header */}

				{userStats && userData && <ProfileHeader userStats={userStats} userData={userData} user={user!} />}

				{(userStats === undefined || !isLoaded) && <ProfileHeaderSkeleton />}

				{/* Main content */}
				<div
					className='bg-gradient-to-br from-[#12121a] to-[#1a1a2e] rounded-3xl shadow-2xl 
        shadow-black/50 border border-gray-800/50 backdrop-blur-xl overflow-hidden'
				>
					{/* Tabs */}
					<MenuTabs onChangeActiveTab={onChangeActiveTab} activeTab={activeTab} />

					{/* Tab content */}
					<AnimatePresence mode='wait'>
						<motion.div
							key={activeTab}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.2 }}
							className='p-6'
						>
							{/* ACTIVE TAB IS EXECUTIONS: */}
							{activeTab === 'executions' && (
								<div className='space-y-6'>
									{executions?.map((execution) => (
										<div
											key={execution._id}
											className='group rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/50'
										>
											<div className='flex items-center justify-between p-4 bg-black/30 border border-gray-800/50 rounded-t-xl'>
												<div className='flex items-center gap-4'>
													<div className='relative'>
														<div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity' />
														<Image
															src={'/' + execution.language + '.png'}
															alt=''
															className='rounded-lg relative z-10 object-cover'
															width={40}
															height={40}
														/>
													</div>
													<div className='space-y-1'>
														<div className='flex items-center gap-2'>
															<span className='text-sm font-medium text-white'>{execution.language.toUpperCase()}</span>
															<span className='text-xs text-gray-400'>•</span>
															<span className='text-xs text-gray-400'>{new Date(execution._creationTime).toLocaleString()}</span>
														</div>
														<div className='flex items-center gap-2'>
															<span
																className={`text-xs px-2 py-0.5 rounded-full ${
																	execution.error ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'
																}`}
															>
																{execution.error ? 'Error' : 'Success'}
															</span>
														</div>
													</div>
												</div>
											</div>

											<div className='p-4 bg-black/20 rounded-b-xl border border-t-0 border-gray-800/50'>
												<CodeBlock code={execution.code} language={execution.language} />

												{(execution.output || execution.error) && (
													<div className='mt-4 p-4 rounded-lg bg-black/40'>
														<h4 className='text-sm font-medium text-gray-400 mb-2'>Output</h4>
														<pre className={`text-sm ${execution.error ? 'text-red-400' : 'text-green-400'}`}>
															{execution.error || execution.output}
														</pre>
													</div>
												)}
											</div>
										</div>
									))}

									{isLoadingExecutions ? (
										<div className='text-center py-12'>
											<Loader2 className='w-12 h-12 text-gray-600 mx-auto mb-4 animate-spin' />
											<h3 className='text-lg font-medium text-gray-400 mb-2'>Loading code executions...</h3>
										</div>
									) : (
										executions.length === 0 && (
											<div className='text-center py-12'>
												<Code className='w-12 h-12 text-gray-600 mx-auto mb-4' />
												<h3 className='text-lg font-medium text-gray-400 mb-2'>No code executions yet</h3>
												<p className='text-gray-500'>Start coding to see your execution history!</p>
											</div>
										)
									)}

									{/* Load More Button */}
									{executionStatus === 'CanLoadMore' && (
										<div className='flex justify-center mt-8'>
											<button
												onClick={handleLoadMore}
												className='px-6 py-3 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg flex items-center gap-2 
                        transition-colors'
											>
												Load More
												<ChevronRight className='w-4 h-4' />
											</button>
										</div>
									)}
								</div>
							)}
							{/* ACTIVE TAB IS STARS: */}
							{activeTab === 'starred' && <StarsTab />}
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
};
export default ProfilePage;
