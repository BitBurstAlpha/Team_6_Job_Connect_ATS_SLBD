import Image from 'next/image';
import Link from 'next/link';

export const Logo = ({ link }: { link?: string }) => {
    const baseLink = link ?? '/dashboard';

    return (
        <Link href={baseLink}>
            <Image
                src="/logo.png"
                alt="LSBU Logo"
                className="h-auto w-auto"
                width={80}
                height={50}
                priority
            />
        </Link>
    );
};
