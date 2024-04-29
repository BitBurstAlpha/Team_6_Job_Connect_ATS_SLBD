'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ChangeEvent, useRef, useState } from 'react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Icons } from './icons';
import { Button } from './ui/button';
import axios from 'axios';
import { client } from '@api/client.apis';
import { toast } from 'sonner';
import { useSession } from '@/context/useSession';

export const AvatarUpload = () => {
    const { refetch, user } = useSession();

    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<string | ArrayBuffer | null>(
        user ? user.avatar : '',
    );

    const handleChangeClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    setImage(reader.result);
                    setAvatarFile(file);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageUpload = async () => {
        const formData = new FormData();

        formData.append('avatar', avatarFile as any);

        try {
            await axios.patch(client.avatarUploadApi, formData, {
                withCredentials: true,
            });

            await refetch();

            toast.success('avatar upload successful 🎉');
        } catch (err) {
            toast.error('error while uploading avatar');
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Avatar </CardTitle>
                <CardDescription>
                    You can change avatar any time
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                <div onClick={handleChangeClick}>
                    {image ? (
                        <Avatar className="w-28 h-28">
                            <AvatarImage
                                className="object-cover"
                                src={image as string}
                            />
                        </Avatar>
                    ) : (
                        <div className="w-28 h-28 border rounded-full border-dashed border-primary flex justify-center items-center">
                            <Icons.ImageUpload className="h-10 w-10" />
                        </div>
                    )}

                    <input
                        onChange={handleImageChange}
                        className="hidden"
                        type="file"
                        ref={inputRef}
                    />
                </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
                <Button
                    className="ml-auto"
                    type="submit"
                    onClick={handleImageUpload}
                >
                    Save
                </Button>
            </CardFooter>
        </Card>
    );
};