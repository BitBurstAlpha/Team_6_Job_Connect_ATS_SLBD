import { Header } from '@/components/shared/header';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <Header />
            {children}
        </section>
    );
}