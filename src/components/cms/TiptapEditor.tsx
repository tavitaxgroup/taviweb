'use client';

import { useEffect, useRef, useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Youtube from '@tiptap/extension-youtube';
import {
  Bold,
  Italic,
  Strikethrough,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Image as ImageIcon,
  Video as YoutubeIcon,
  Loader2,
} from 'lucide-react';
import toast from 'react-hot-toast';

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok && data.url) {
        editor.chain().focus().setImage({ src: data.url }).run();
        toast.success('Đã chèn hình ảnh vào bài viết.');
      } else {
        toast.error('Lỗi tải ảnh lên: ' + (data.error || 'Unknown error'));
      }
    } catch (err) {
      console.error(err);
      toast.error('Lỗi kết nối khi tải ảnh.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const addImage = () => {
    const confirmUpload = window.confirm(
      'Tải ảnh từ máy tính lên?\n(Chọn OK để tải file, Cancel để dán URL ảnh)'
    );
    if (confirmUpload) {
      fileInputRef.current?.click();
    } else {
      const url = window.prompt('Nhập URL hình ảnh:');
      if (url) {
        editor.chain().focus().setImage({ src: url }).run();
      }
    }
  };

  const addYoutubeVideo = () => {
    const url = window.prompt('Nhập đường dẫn video YouTube:');
    if (url) {
      editor.commands.setYoutubeVideo({
        src: url,
        width: 640,
        height: 360,
      });
    }
  };

  const btnClass =
    'p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors';
  const activeClass = 'bg-slate-900 text-white hover:bg-slate-800';

  return (
    <div className="flex flex-wrap items-center gap-1 px-3 py-2 border-b border-slate-100 bg-white/95 backdrop-blur-md sticky top-0 z-10">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`${btnClass} ${editor.isActive('bold') ? activeClass : ''}`}
        title="In đậm"
      >
        <Bold className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`${btnClass} ${editor.isActive('italic') ? activeClass : ''}`}
        title="In nghiêng"
      >
        <Italic className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`${btnClass} ${editor.isActive('strike') ? activeClass : ''}`}
        title="Gạch ngang"
      >
        <Strikethrough className="w-4 h-4" />
      </button>

      <div className="w-px h-4 bg-slate-200 mx-1" />

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${btnClass} ${
          editor.isActive('heading', { level: 1 }) ? activeClass : ''
        }`}
        title="Tiêu đề lớn (H1)"
      >
        <Heading1 className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${btnClass} ${
          editor.isActive('heading', { level: 2 }) ? activeClass : ''
        }`}
        title="Tiêu đề mục (H2)"
      >
        <Heading2 className="w-4 h-4" />
      </button>

      <div className="w-px h-4 bg-slate-200 mx-1" />

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${btnClass} ${editor.isActive('bulletList') ? activeClass : ''}`}
        title="Danh sách chấm"
      >
        <List className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${btnClass} ${editor.isActive('orderedList') ? activeClass : ''}`}
        title="Danh sách đánh số"
      >
        <ListOrdered className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${btnClass} ${editor.isActive('blockquote') ? activeClass : ''}`}
        title="Trích dẫn"
      >
        <Quote className="w-4 h-4" />
      </button>

      <div className="w-px h-4 bg-slate-200 mx-1" />

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageUpload}
        className="hidden"
      />

      <button
        type="button"
        onClick={addImage}
        disabled={isUploading}
        className={btnClass}
        title="Chèn hình ảnh"
      >
        {isUploading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <ImageIcon className="w-4 h-4" />
        )}
      </button>
      <button
        type="button"
        onClick={addYoutubeVideo}
        className={btnClass}
        title="Chèn video YouTube"
      >
        <YoutubeIcon className="w-4 h-4" />
      </button>

      <div className="w-px h-4 bg-slate-200 mx-1 ml-auto" />

      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className={`${btnClass} disabled:opacity-30`}
        title="Hoàn tác"
      >
        <Undo className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className={`${btnClass} disabled:opacity-30`}
        title="Làm lại"
      >
        <Redo className="w-4 h-4" />
      </button>
    </div>
  );
};

export default function TiptapEditor({ content, onChange }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Youtube.configure({
        inline: false,
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class:
          'prose prose-slate max-w-none focus:outline-none px-6 py-5 min-h-[460px] prose-headings:font-semibold prose-headings:tracking-tight prose-p:leading-relaxed prose-img:rounded-xl',
      },
    },
    onUpdate: ({ editor }: { editor: any }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && content && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
