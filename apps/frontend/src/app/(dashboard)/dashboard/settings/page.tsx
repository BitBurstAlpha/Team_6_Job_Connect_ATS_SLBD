import { AvatarUpload } from '@/components/avatarUpload';
import { ChangePasswordForm } from '@/components/forms/changePassword';

export default function Settings() {
    return (
        <div className="space-y-4">
            <AvatarUpload />
            <ChangePasswordForm />
        </div>
    );
}
