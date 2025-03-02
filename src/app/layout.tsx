import type { Metadata } from 'next';
import './globals.css';
import ConvexClientProvider from '@/components/providers/ConvexClientProvider';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'react-hot-toast';
import localFont from 'next/font/local';
import Footer from '@/components/Footer';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Code Magic',
	description: 'Share and run code snippets',
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col`}
				>
					<ConvexClientProvider>{children}</ConvexClientProvider>

					<Footer />
					<Toaster />
				</body>
			</html>
		</ClerkProvider>
	);
}
