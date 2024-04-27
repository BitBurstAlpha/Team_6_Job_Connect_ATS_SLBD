'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { ToolBar } from './Toolbar';
import { cn } from '@/lib/utils';

interface ITipTap {
    description: string;
    onChange: (richText: string) => void;
}

const TipTap = ({ description, onChange }: ITipTap) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: description,
        editorProps: {
            attributes: {
                class: cn(
                    '[&_ul]:list-disc [&_ul]:ml-6 [&_ol]:ml-6 [&_ol]:list-decimal [&_h2]:font-semibold [&_h1]:font-bold [&_h2]:text-lg [&_h1]:text-xl  w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[150px]',
                ),
            },
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML());
        },
    });

    return (
        <div className="space-y-2 ">
            <ToolBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
};

export default TipTap;
