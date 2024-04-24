import Image from 'next/image';
import { LoginForm } from '@/components/forms/login.form';

export default function Login() {
    return (
        <div className="bg-gradient-to-b from-blue-200/20 via-green-300/20 to-indigo-300/20 pt-10 px-10">
            <div className="flex  mx-auto max-w-screen-2xl items-center px-10 justify-center w-full">
                <div className="w-1/2">
                    <Image
                        src="/images/login_img.png"
                        alt="login_img"
                        width={844}
                        height={785}
                        priority
                    />
                </div>

                <LoginForm />
            </div>
        </div>
    );
}
