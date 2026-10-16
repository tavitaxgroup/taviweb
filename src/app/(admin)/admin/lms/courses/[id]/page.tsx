'use client';

import { useState, useEffect, use, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Loader2, Image as ImageIcon, UploadCloud } from 'lucide-react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import CurriculumBuilder from '@/components/lms/CurriculumBuilder';
import { useAuth } from '@/modules/crm/contexts/AuthContext';
import toast from 'react-hot-toast';

export default function CourseEditor({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { user } = useAuth();
  const { id } = use(params);
  const isNew = id === 'new';
  
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [price, setPrice] = useState('0');
  const [status, setStatus] = useState('draft');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [activeTab, setActiveTab] = useState<'info'|'curriculum'>('info');
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (!isNew) {
      loadCourse();
    }
  }, [id]);

  const loadCourse = async () => {
    setIsLoading(true);
    try {
      const { data } = await supabase
        .from('courses')
        .select('*')
        .eq('id', id)
        .single();
        
      if (data) {
        setTitle(data.title || '');
        setSlug(data.slug || '');
        setDescription(data.description || '');
        setThumbnailUrl(data.thumbnail_url || '');
        setPrice(data.price?.toString() || '0');
        setStatus(data.status || 'draft');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const generateSlug = (text: string) => {
    return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (isNew) {
      setSlug(generateSlug(newTitle));
    }
  };

  const handleThumbnailUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/upload', { method: 'POST', body: formData });
      const data = await res.json();
      if (res.ok && data.url) {
        setThumbnailUrl(data.url);
        toast.success('Đã tải ảnh bìa lên!');
      } else {
        toast.error(data.error || 'Lỗi tải ảnh');
      }
    } catch (err) {
      toast.error('Lỗi kết nối khi tải ảnh');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleSave = async () => {
    if (!title || !slug) {
      toast.error('Vui lòng nhập Tên khóa học và Slug hợp lệ!');
      return;
    }
    
    setIsSaving(true);
    try {
      if (!user?.tenant_id) throw new Error('Phiên đăng nhập hết hạn');
      
      const courseData = {
        title,
        slug,
        description,
        thumbnail_url: thumbnailUrl,
        price: parseFloat(price) || 0,
        status,
        tenant_id: user.tenant_id
      };
      
      if (isNew) {
        const { data, error } = await supabase.from('courses').insert([courseData]).select().single();
        if (error) throw error;
        toast.success('Đã tạo khóa học mới! Hãy thêm chương trình học.');
        router.push(`/admin/lms/courses/${data.id}`);
      } else {
        const { error } = await supabase.from('courses').update(courseData).eq('id', id);
        if (error) throw error;
        toast.success('Đã lưu thông tin khóa học!');
      }
    } catch (e: any) {
      console.error(e);
      toast.error('Lỗi khi lưu khóa học: ' + e.message);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="p-8 flex justify-center items-center h-[50vh]"><Loader2 className="w-8 h-8 animate-spin text-indigo-600" /></div>;
  }

  return (
    <div className="p-8 max-w-5xl mx-auto animate-in fade-in duration-500">
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/admin/lms" className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </Link>
          <h1 className="text-2xl font-bold text-slate-800">
            {isNew ? 'Thêm khóa học mới' : 'Chỉnh sửa Khóa học'}
          </h1>
        </div>
        
        <div className="flex items-center gap-3">
          <select 
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-indigo-500 font-medium text-slate-700"
          >
            <option value="draft">Bản nháp (Đóng)</option>
            <option value="published">Đang mở bán</option>
          </select>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            Lưu thông tin
          </button>
        </div>
      </div>

      {/* Tabs */}
      {!isNew && (
        <div className="flex border-b border-slate-200 mb-6 gap-6">
          <button 
            onClick={() => setActiveTab('info')}
            className={`pb-3 font-bold text-sm transition-colors border-b-2 ${activeTab === 'info' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
          >
            Thông tin cơ bản
          </button>
          <button 
            onClick={() => setActiveTab('curriculum')}
            className={`pb-3 font-bold text-sm transition-colors border-b-2 ${activeTab === 'curriculum' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
          >
            Chương trình học (Curriculum)
          </button>
        </div>
      )}

      {activeTab === 'info' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Tên khóa học</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="Ví dụ: Lập trình ReactJS từ cơ bản đến nâng cao"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 text-lg font-medium"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Đường dẫn (Slug)</label>
                <input 
                  type="text" 
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-indigo-500 text-sm font-mono text-slate-600"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Mô tả ngắn</label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <label className="block text-sm font-bold text-slate-700 mb-2">Học phí (VNĐ)</label>
              <input 
                type="number" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0"
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-indigo-500 text-lg font-bold text-slate-800"
              />
              <p className="text-xs text-slate-400 mt-2">Nhập 0 nếu là khóa học miễn phí.</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <label className="block text-sm font-bold text-slate-700 mb-2">Ảnh bìa (Thumbnail)</label>
              {thumbnailUrl ? (
                <div className="relative mb-3 rounded-lg overflow-hidden border border-slate-200 aspect-video">
                  <img src={thumbnailUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                  <button onClick={() => setThumbnailUrl('')} className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-md text-xs font-bold shadow">Xóa ảnh</button>
                </div>
              ) : (
                <div className="aspect-video bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center mb-3">
                  <ImageIcon className="w-8 h-8 text-slate-300 mb-2" />
                  <span className="text-sm text-slate-400">Chưa có ảnh bìa</span>
                </div>
              )}
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={thumbnailUrl}
                  onChange={(e) => setThumbnailUrl(e.target.value)}
                  placeholder="Dán URL hình ảnh..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-indigo-500 text-sm"
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleThumbnailUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="shrink-0 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors flex items-center justify-center"
                  title="Tải ảnh lên từ máy tính"
                >
                  {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <CurriculumBuilder courseId={id} />
        </div>
      )}
    </div>
  );
}
