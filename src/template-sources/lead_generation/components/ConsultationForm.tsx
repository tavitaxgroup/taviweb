import React, { useState } from 'react';
import { validateConsultationForm } from '../utils/calculator';

interface ConsultationFormProps {
  selectedServicePreset?: string;
  notesPreset?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  selectedServicePreset,
  notesPreset,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(
    selectedServicePreset || 'Tư vấn & Hoạch định chiến lược không gian'
  );
  const [notes, setNotes] = useState(notesPreset || '');
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string; service?: string }>({});

  // Sync if preset changes
  React.useEffect(() => {
    if (selectedServicePreset) {
      setService(selectedServicePreset);
    }
  }, [selectedServicePreset]);

  React.useEffect(() => {
    if (notesPreset) {
      setNotes(notesPreset);
    }
  }, [notesPreset]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateConsultationForm({ fullName, phone, service });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const refCode = `OGN-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionId(refCode);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setNotes('');
  };

  return (
    <section className="w-full px-5 lg:px-16 py-12 lg:py-24 bg-[#fcf9f8]" id="tu-van">
      <div className="max-w-2xl mx-auto border border-[#c4c5da] p-6 lg:p-12 bg-[#ffffff] shadow-[4px_4px_0px_#1c1b1b]">
        <div className="mb-6 lg:mb-8">
          <span className="font-mono-code text-[11px] uppercase text-[#ac2e00] tracking-widest block mb-1 font-bold">
            [ KHỞI TẠO TƯ VẤN ]
          </span>
          <h2 className="font-syne text-2xl lg:text-3xl uppercase text-[#1c1b1b] tracking-tight mb-2 font-bold">
            Gửi Yêu Cầu Tư Vấn Nhanh
          </h2>
          <p className="font-body text-sm text-[#44423c]">
            Chuyên gia sẽ liên hệ phản hồi phương án sơ bộ trong vòng 24 giờ làm việc.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 bg-[#f6f3f2] border-2 border-[#0038ff] shadow-[2px_2px_0px_#1c1b1b] text-center space-y-4 animate-in fade-in">
            <div className="w-12 h-12 bg-[#0038ff] text-white rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-2xl">done</span>
            </div>
            <div>
              <span className="font-mono-code text-xs uppercase tracking-wider text-[#ac2e00] font-bold block mb-1">
                YÊU CẦU ĐÃ ĐƯỢC TIẾP NHẬN THÀNH CÔNG
              </span>
              <h3 className="font-syne text-xl font-bold uppercase text-[#1c1b1b]">
                Cảm ơn Quý Khách, {fullName}!
              </h3>
            </div>
            <p className="font-body text-xs text-[#44423c] max-w-md mx-auto">
              Mã hồ sơ tư vấn của bạn là{' '}
              <strong className="font-mono-code text-[#0038ff] bg-white px-2 py-0.5 border border-[#c4c5da]">
                {submissionId}
              </strong>
              . KTS Trưởng của Origin Studio tại chi nhánh gần nhất sẽ liên hệ trực tiếp qua số <strong>{phone}</strong> trong vòng 24h.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 border border-[#1c1b1b] font-mono-code text-xs uppercase hover:bg-white transition-colors"
              >
                Gửi yêu cầu khác
              </button>
            </div>
          </div>
        ) : (
          <form className="flex flex-col gap-4 lg:gap-6" onSubmit={handleSubmit} noValidate>
            {/* Customer Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="customer-name"
                className="font-mono-code text-[11px] uppercase text-[#1c1b1b] font-semibold"
              >
                Họ và tên khách hàng *
              </label>
              <input
                id="customer-name"
                className={`w-full border p-3 font-body text-sm text-[#1c1b1b] bg-[#fcf9f8] focus:outline-none transition-colors ${
                  errors.fullName
                    ? 'border-[#ba1a1a] focus:border-[#ba1a1a]'
                    : 'border-[#e5e2e1] focus:border-[#0038ff]'
                }`}
                placeholder="Nguyễn Văn A"
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                }}
                required
              />
              {errors.fullName && (
                <span className="font-mono-code text-xs text-[#ba1a1a] mt-0.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.fullName}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="customer-phone"
                className="font-mono-code text-[11px] uppercase text-[#1c1b1b] font-semibold"
              >
                Số điện thoại liên hệ *
              </label>
              <input
                id="customer-phone"
                className={`w-full border p-3 font-body text-sm text-[#1c1b1b] bg-[#fcf9f8] focus:outline-none transition-colors ${
                  errors.phone
                    ? 'border-[#ba1a1a] focus:border-[#ba1a1a]'
                    : 'border-[#e5e2e1] focus:border-[#0038ff]'
                }`}
                placeholder="09xx xxx xxx"
                type="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                }}
                required
              />
              {errors.phone && (
                <span className="font-mono-code text-xs text-[#ba1a1a] mt-0.5 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Service dropdown */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="customer-service"
                className="font-mono-code text-[11px] uppercase text-[#1c1b1b] font-semibold"
              >
                Nhu cầu dịch vụ *
              </label>
              <select
                id="customer-service"
                className="w-full border border-[#e5e2e1] p-3 font-body text-sm text-[#1c1b1b] bg-[#fcf9f8] focus:outline-none focus:border-[#0038ff] transition-colors cursor-pointer"
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="Tư vấn & Hoạch định chiến lược không gian">
                  Tư vấn & Hoạch định chiến lược không gian
                </option>
                <option value="Thiết kế trải nghiệm thương hiệu & không gian">
                  Thiết kế trải nghiệm thương hiệu & không gian
                </option>
                <option value="Thi công trọn gói & giám sát vận hành">
                  Thi công trọn gói & giám sát vận hành
                </option>
                <option value="Tư vấn toàn diện từ A-Z (Chìa khoá trao tay)">
                  Tư vấn toàn diện từ A-Z (Chìa khoá trao tay)
                </option>
              </select>
            </div>

            {/* Optional note from calculator preset */}
            {notes && (
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="customer-notes"
                  className="font-mono-code text-[11px] uppercase text-[#1c1b1b] font-semibold"
                >
                  Thông tin dự toán đính kèm
                </label>
                <textarea
                  id="customer-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full border border-[#e5e2e1] p-2.5 font-mono-code text-xs text-[#1c1b1b] bg-[#f6f3f2] focus:outline-none focus:border-[#0038ff]"
                />
              </div>
            )}

            <button
              className="inline-flex items-center justify-center bg-[#0038ff] text-white font-mono-code text-xs uppercase py-3.5 px-6 hover:bg-[#ac2e00] transition-colors shadow-[3px_3px_0px_#1c1b1b] mt-2 cursor-pointer active:translate-x-0.5 active:translate-y-0.5 font-bold"
              type="submit"
            >
              Gửi Yêu Cầu Tư Vấn
            </button>
            <span className="font-mono-code text-xs text-center text-[#44423c] mt-1">
              Cam kết bảo mật thông tin tuyệt đối.
            </span>
          </form>
        )}
      </div>
    </section>
  );
};
