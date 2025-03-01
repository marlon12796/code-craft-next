import { EditorPanelSkeleton } from './EditorPanelSkeleton';
import { OutputPanelSkeleton } from './OutputPanelSkeleton';

export const EditorViewSkeleton = () => {
	return (
		<div className='space-y-6 p-4'>
			<EditorPanelSkeleton />
			<OutputPanelSkeleton />
		</div>
	);
};
