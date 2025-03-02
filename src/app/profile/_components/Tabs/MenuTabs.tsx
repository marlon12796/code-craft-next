import { motion } from 'framer-motion';
import { ListVideo, Star } from 'lucide-react';
export type MenuTabsTypes = 'executions' | 'starred';
export const MenuTabs = ({
	activeTab,
	onChangeActiveTab,
}: {
	activeTab: MenuTabsTypes;
	onChangeActiveTab: (tab: MenuTabsTypes) => void;
}) => {
	const TABS = [
		{
			id: 'executions',
			label: 'Code Executions',
			icon: ListVideo,
		},
		{
			id: 'starred',
			label: 'Starred Snippets',
			icon: Star,
		},
	];
	return (
		<div className='border-b border-gray-800/50'>
			<div className='flex space-x-1 p-4'>
				{TABS.map((tab) => (
					<button
						key={tab.id}
						onClick={() => onChangeActiveTab(tab.id as MenuTabsTypes)}
						className={`group flex items-center gap-2 px-6 py-2.5 rounded-lg transition-all duration-200 relative overflow-hidden ${
							activeTab === tab.id ? 'text-blue-400' : 'text-gray-400 hover:text-gray-300'
						}`}
					>
						{activeTab === tab.id && (
							<motion.div
								layoutId='activeTab'
								className='absolute inset-0 bg-blue-500/10 rounded-lg'
								transition={{
									type: 'spring',
									bounce: 0.2,
									duration: 0.6,
								}}
							/>
						)}
						<tab.icon className='w-4 h-4 relative z-10' />
						<span className='text-sm font-medium relative z-10'>{tab.label}</span>
					</button>
				))}
			</div>
		</div>
	);
};
