import { api } from '@api/_generated/api';
import { Id } from '@api/_generated/dataModel';
import SnippetLoadingSkeleton from './_components/SnippetLoadingSkeleton';
import NavigationHeader from '@/components/NavigationHeader';
import { Clock, Code, MessageSquare, User } from 'lucide-react';

import CopyButton from './_components/CopyButton';
import Comments from './_components/Comments';
import Image from 'next/image';
import { ConvexHttpClient } from 'convex/browser';
import { EditorSnippet } from './_components/EditorSnippet';

const SnippetDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
	const snippetId = (await params).id;
	const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
	const snippet = await convex.query(api.snippets.getSnippetById, {
		snippetId: snippetId as Id<'snippets'>,
	});
	const comments = await convex.query(api.snippets.getComments, { snippetId: snippetId as Id<'snippets'> });

	return snippet !== undefined ? (
		<div className='min-h-screen bg-[#0a0a0f]'>
			<NavigationHeader />

			<main className='max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12'>
				<div className='max-w-[1200px] mx-auto'>
					{/* Header */}
					<div className='bg-[#121218] border border-[#ffffff0a] rounded-2xl p-6 sm:p-8 mb-6 backdrop-blur-xl'>
						<div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6'>
							<div className='flex items-center gap-4'>
								<div className='flex items-center justify-center size-12 rounded-xl bg-[#ffffff08] p-2.5'>
									<Image
										src={`/${snippet.language}.png`}
										alt={`${snippet.language} logo`}
										className='w-full h-full object-contain'
										width={65}
										height={65}
									/>
								</div>
								<div>
									<h1 className='text-xl sm:text-2xl font-semibold text-white mb-2'>{snippet.title}</h1>
									<div className='flex flex-wrap items-center gap-x-4 gap-y-2 text-sm'>
										<div className='flex items-center gap-2 text-[#8b8b8d]'>
											<User className='w-4 h-4' />
											<span>{snippet.userName}</span>
										</div>
										<div className='flex items-center gap-2 text-[#8b8b8d]'>
											<Clock className='w-4 h-4' />
											<span>{new Date(snippet._creationTime).toLocaleDateString()}</span>
										</div>
										<div className='flex items-center gap-2 text-[#8b8b8d]'>
											<MessageSquare className='w-4 h-4' />
											<span>{comments?.length} comments</span>
										</div>
									</div>
								</div>
							</div>
							<div className='inline-flex items-center px-3 py-1.5 bg-[#ffffff08] text-[#808086] rounded-lg text-sm font-medium'>
								{snippet.language}
							</div>
						</div>
					</div>

					{/* Code Editor */}
					<div className='mb-8 rounded-2xl overflow-hidden border border-[#ffffff0a] bg-[#121218]'>
						<div className='flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[#ffffff0a]'>
							<div className='flex items-center gap-2 text-[#808086]'>
								<Code className='w-4 h-4' />
								<span className='text-sm font-medium'>Source Code</span>
							</div>
							<CopyButton code={snippet.code} />
						</div>
						<EditorSnippet snippet={snippet} />
					</div>

					<Comments snippetId={snippet._id} />
				</div>
			</main>
		</div>
	) : (
		<SnippetLoadingSkeleton />
	);
};
export default SnippetDetailPage;
