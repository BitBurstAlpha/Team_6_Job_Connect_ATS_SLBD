import { AccountSetupForm } from '@/components/forms/accountSetup.form';

export default function CreateAccount() {
    return (
        <div className="w-full bg-gradient-to-b p-5 py-24 from-blue-200/20 via-green-300/20 to-indigo-300/20">
            <div className="max-w-screen-md mx-auto p-10 rounded-xl bg-white shadow-md bg-white-10">
                <div>
                    <h1 className="text-3xl font-semibold">
                        Create an Client Account
                    </h1>
                </div>
            </div>

            <div className="max-w-screen-md mx-auto mt-5 p-10 rounded-xl bg-white shadow-md bg-white-10">
                <div>
                    <p className="text-lg font-semibold mb-5">
                        You haven&apos;t posted a job before, so you&apos;ll
                        need to create an client account.
                    </p>

                    <AccountSetupForm />
                </div>
            </div>
        </div>
    );
}
