import { Header } from '@/components/shared/header';

export default function AuthLayout({
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
