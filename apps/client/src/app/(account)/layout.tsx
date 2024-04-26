import { Header } from '@/components/shared/header';

export default function AccountLayout({
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
