import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import Providers from './providers';
import { getServerSession } from '@/lib/session';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'LSBU Client',
    description: 'ATS Client WebApp',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession();

    return (
        <html lang="en">
            <Providers session={session}>
                <body className={inter.className}>
                    {children}
                    <Toaster />
                </body>
            </Providers>
        </html>
    );
}
