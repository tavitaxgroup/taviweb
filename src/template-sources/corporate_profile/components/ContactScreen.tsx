import React, { useState } from 'react';
import { OFFICES, type OfficeLocation } from '../data/advisoryData';
import {
  validateInquiryForm,
  generateAdvisoryRef,
  type InquiryFormData,
} from '../utils/advisory';

interface ContactScreenProps {
  onNavigate: (path: string) => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onNavigate }) => {
  const [selectedOffice, setSelectedOffice] = useState<OfficeLocation>(OFFICES[2]); // Hanoi default

  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    organization: '',
    role: '',
    jurisdiction: 'hanoi',
    practice: 'advisory',
    briefScope: '',
    requiresNda: true,
  });

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateInquiryForm(formData);

    if (!result.isValid) {
      setFormErrors(result.errors);
      return;
    }

    setFormErrors({});
    const refCode = generateAdvisoryRef(formData.jurisdiction, formData.practice);
    setSubmittedRef(refCode);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFormData({
      fullName: '',
      email: '',
      organization: '',
      role: '',
      jurisdiction: 'hanoi',
      practice: 'advisory',
      briefScope: '',
      requiresNda: true,
    });
  };

  return (
    <div className="flex flex-col w-full bg-[#faf9f6]">
      {/* Top Header */}
      <section className="w-full px-5 md:px-16 pt-12 pb-8 border-b border-[#c7c7c0]/30">
        <div className="w-full flex justify-between items-baseline pb-4">
          <div className="flex items-center gap-3">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-black font-semibold">
              04 / TRAO ĐỔI HỢP TÁC
            </span>
            <span className="text-[#c7c7c0]">—</span>
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#464742]">
              TIẾP NHẬN HỒ SƠ THẨM ĐỊNH SƠ BỘ
            </span>
          </div>
          <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium hidden sm:inline-block">
            GIAO THỨC BẢO MẬT ĐA TÀI PHÁN
          </span>
        </div>

        <div className="max-w-4xl pt-4 space-y-4">
          <h1 className="font-display-xl text-[40px] md:text-[54px] lg:text-[62px] text-black tracking-tight leading-[1.05]">
            Khởi đầu từ sự cẩn trọng và chuẩn mực.
          </h1>
          <p className="font-body-lg text-[18px] text-[#464742] font-light leading-relaxed max-w-2xl">
            Mọi yêu cầu tư vấn đều được bảo hộ bởi thỏa thuận bảo mật song phương (Bilateral NDA) trước khi tiến hành rà soát chuyên sâu.
          </p>
        </div>
      </section>

      {/* Offices Network Selector */}
      <section className="w-full px-5 md:px-16 py-8 border-b border-[#c7c7c0]/30 bg-[#f4f3f0]/60">
        <div className="w-full pb-4">
          <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
            MẠNG LƯỚI VĂN PHÒNG ĐIỀU PHỐI QUỐC TẾ
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFICES.map((office) => {
            const isSelected = selectedOffice.city === office.city;
            return (
              <div
                key={office.city}
                onClick={() => {
                  setSelectedOffice(office);
                  setFormData((prev) => ({
                    ...prev,
                    jurisdiction:
                      office.city === 'Zurich'
                        ? 'zurich'
                        : office.city === 'Tokyo'
                        ? 'tokyo'
                        : 'hanoi',
                  }));
                }}
                className={`p-6 border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-black bg-white shadow-sm'
                    : 'border-[#c7c7c0]/40 bg-[#faf9f6] hover:bg-[#efeeeb]'
                }`}
              >
                <div className="flex justify-between items-baseline mb-3">
                  <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium">
                    {office.coordinates}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                  )}
                </div>

                <h3 className="font-headline-sm text-[22px] text-black font-normal mb-1">
                  {office.city}, {office.country}
                </h3>

                <p className="font-label-sm text-[11px] text-[#5a614f] mb-3">
                  {office.status}
                </p>

                <p className="font-body-sm text-[13px] text-[#464742] mb-3 leading-relaxed">
                  {office.address}
                </p>

                <div className="pt-3 border-t border-[#c7c7c0]/30 flex flex-col space-y-1 text-[12px] font-body-sm">
                  <div className="flex justify-between">
                    <span className="text-[#777871]">Điện thoại:</span>
                    <span className="font-medium text-black">{office.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#777871]">Thư điện tử:</span>
                    <span className="font-medium text-black">{office.directEmail}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Intake Form Section */}
      <section className="w-full px-5 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Column: Form Details & Instructions (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-medium block">
              QUY TRÌNH TIẾP NHẬN HỒ SƠ CỐ VẤN
            </span>
            <h2 className="font-display-lg text-[32px] md:text-[38px] text-black leading-tight">
              Khởi tạo phiên điều trần sơ bộ
            </h2>
            <p className="font-body-md text-[15px] text-[#464742] font-light leading-relaxed">
              Các phiên thẩm định ban đầu được tổ chức hoàn toàn bảo mật và không ràng buộc nghĩa vụ tài chính. Thời gian phản hồi tiêu chuẩn cho hồ sơ doanh nghiệp là 24 giờ làm việc.
            </p>

            <div className="p-6 bg-[#f4f3f0] border border-[#c7c7c0]/40 space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[20px] text-[#5a614f] shrink-0 mt-0.5">
                  verified_user
                </span>
                <div className="space-y-1">
                  <p className="font-label-md text-[12px] text-black uppercase font-semibold">
                    Cam kết bảo mật cấp I (Strict NDA)
                  </p>
                  <p className="font-body-sm text-[13px] text-[#464742] font-light leading-relaxed">
                    Mọi trao đổi và tài liệu gửi tới Monogram được pháp luật Thụy Sĩ bảo hộ theo nguyên tắc bảo mật nghề nghiệp tư vấn độc lập.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-t border-[#c7c7c0]/30 pt-3">
                <span className="material-symbols-outlined text-[20px] text-[#5a614f] shrink-0 mt-0.5">
                  corporate_fare
                </span>
                <div className="space-y-1">
                  <p className="font-label-md text-[12px] text-black uppercase font-semibold">
                    Đối tượng tiếp nhận phù hợp
                  </p>
                  <p className="font-body-sm text-[13px] text-[#464742] font-light leading-relaxed">
                    Chủ tịch HĐQT, Tổng Giám đốc điều hành, Giám đốc Tài chính hoặc người được ủy quyền chính thức từ văn phòng gia tộc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form or Submitted Receipt (7 cols) */}
          <div className="md:col-span-7">
            {submittedRef ? (
              /* Success Receipt View */
              <div className="bg-[#f4f3f0] border-2 border-black p-8 md:p-10 space-y-6 animate-fadeIn">
                <div className="flex justify-between items-start border-b border-[#c7c7c0]/40 pb-4">
                  <div>
                    <span className="font-label-sm text-[11px] uppercase tracking-widest text-[#5a614f] font-semibold">
                      TIẾP NHẬN HỒ SƠ THÀNH CÔNG
                    </span>
                    <h3 className="font-headline-sm text-[24px] text-black font-normal mt-1">
                      Mã hồ sơ lưu trữ: {submittedRef}
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-[32px] text-[#5a614f]">
                    check_circle
                  </span>
                </div>

                <div className="space-y-3 font-body-md text-[14px] text-[#1a1c1a]">
                  <p>
                    Kính gửi <strong>{formData.fullName}</strong> ({formData.role} — {formData.organization}),
                  </p>
                  <p className="text-[#464742] leading-relaxed">
                    Hồ sơ yêu cầu tư vấn thể chế của quý vị đã được mã hóa và chuyển tiếp trực tiếp tới Văn phòng Điều phối Đối tác Cấp cao tại <strong>{selectedOffice.city}</strong>.
                  </p>
                  {formData.requiresNda && (
                    <p className="p-3 bg-[#e9e8e5] border-l-2 border-[#5a614f] text-[13px] text-[#181d10]">
                      Dự thảo Thỏa thuận Bảo mật Song phương (Mutual NDA) theo mẫu Thụy Sĩ sẽ được gửi tới hòm thư <strong>{formData.email}</strong> trong vòng 04 giờ làm việc.
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-[#c7c7c0]/40 flex flex-wrap justify-between items-center gap-4">
                  <div className="text-[12px] text-[#464742]">
                    Đường dây chuyên trách: <strong className="text-black">{selectedOffice.phone}</strong>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2 border border-[#c7c7c0] text-black font-label-md text-[11px] uppercase tracking-wider hover:border-black cursor-pointer"
                    >
                      Gửi thêm yêu cầu
                    </button>
                    <button
                      onClick={() => onNavigate('du-an')}
                      className="px-5 py-2 bg-black text-white font-label-md text-[11px] uppercase tracking-wider hover:bg-[#5a614f] cursor-pointer"
                    >
                      Khám phá Case Studies
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Executive Intake Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-[#faf9f6] border border-[#c7c7c0]/50 p-6 md:p-10 space-y-6"
              >
                <div className="space-y-1 pb-2 border-b border-[#c7c7c0]/30">
                  <h3 className="font-headline-sm text-[20px] text-black font-normal">
                    Biểu mẫu thẩm định nhu cầu tư vấn
                  </h3>
                  <p className="font-body-sm text-[12px] text-[#777871]">
                    Vui lòng điền đầy đủ thông tin đại diện pháp lý để đảm bảo việc phân bổ đối tác phù hợp.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="font-label-sm text-[11px] uppercase tracking-wider text-black block">
                      Họ và tên người đại diện *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="VD: TS. Nguyễn Trọng Bình"
                      className={`w-full bg-[#f4f3f0] border px-3 py-2.5 font-body-sm text-[14px] text-black focus:outline-none ${
                        formErrors.fullName ? 'border-red-600 bg-red-50/30' : 'border-[#c7c7c0]/60 focus:border-black'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="font-label-sm text-[11px] text-red-600 pt-0.5">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Corporate Email */}
                  <div className="space-y-1">
                    <label className="font-label-sm text-[11px] uppercase tracking-wider text-black block">
                      Thư điện tử công vụ *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="binh.nguyen@corporation.vn"
                      className={`w-full bg-[#f4f3f0] border px-3 py-2.5 font-body-sm text-[14px] text-black focus:outline-none ${
                        formErrors.email ? 'border-red-600 bg-red-50/30' : 'border-[#c7c7c0]/60 focus:border-black'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="font-label-sm text-[11px] text-red-600 pt-0.5">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Organization */}
                  <div className="space-y-1">
                    <label className="font-label-sm text-[11px] uppercase tracking-wider text-black block">
                      Tập đoàn / Thể chế / Đơn vị *
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Tên pháp nhân doanh nghiệp"
                      className={`w-full bg-[#f4f3f0] border px-3 py-2.5 font-body-sm text-[14px] text-black focus:outline-none ${
                        formErrors.organization ? 'border-red-600 bg-red-50/30' : 'border-[#c7c7c0]/60 focus:border-black'
                      }`}
                    />
                    {formErrors.organization && (
                      <p className="font-label-sm text-[11px] text-red-600 pt-0.5">{formErrors.organization}</p>
                    )}
                  </div>

                  {/* Role / Position */}
                  <div className="space-y-1">
                    <label className="font-label-sm text-[11px] uppercase tracking-wider text-black block">
                      Chức danh điều hành
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="Chủ tịch HĐQT / Tổng Giám đốc / Giám đốc Đầu tư"
                      className="w-full bg-[#f4f3f0] border border-[#c7c7c0]/60 px-3 py-2.5 font-body-sm text-[14px] text-black focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Practice Area */}
                  <div className="space-y-1">
                    <label className="font-label-sm text-[11px] uppercase tracking-wider text-black block">
                      Lĩnh vực can thiệp trọng tâm
                    </label>
                    <select
                      value={formData.practice}
                      onChange={(e) => setFormData({ ...formData, practice: e.target.value as any })}
                      className="w-full bg-[#f4f3f0] border border-[#c7c7c0]/60 px-3 py-2.5 font-body-sm text-[14px] text-black focus:outline-none focus:border-black"
                    >
                      <option value="advisory">01 / Cố vấn chiến lược cấp cao (Executive Strategy)</option>
                      <option value="operations">02 / Chuyển đổi số &amp; Vận hành (Operations &amp; Tech)</option>
                      <option value="capital">03 / Tái cấu trúc vốn &amp; M&amp;A (Capital &amp; Deal)</option>
                      <option value="governance">04 / Quản trị rủi ro &amp; Tuân thủ (Governance &amp; Risk)</option>
                    </select>
                  </div>

                  {/* Regional Jurisdiction */}
                  <div className="space-y-1">
                    <label className="font-label-sm text-[11px] uppercase tracking-wider text-black block">
                      Văn phòng thụ lý ưu tiên
                    </label>
                    <select
                      value={formData.jurisdiction}
                      onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value as any })}
                      className="w-full bg-[#f4f3f0] border border-[#c7c7c0]/60 px-3 py-2.5 font-body-sm text-[14px] text-black focus:outline-none focus:border-black"
                    >
                      <option value="hanoi">Hà Nội (Trung tâm Châu Á - Thái Bình Dương)</option>
                      <option value="zurich">Zurich (Trụ sở Thụy Sĩ &amp; Châu Âu)</option>
                      <option value="tokyo">Tokyo (Thị trường Vốn &amp; Bắc Á)</option>
                    </select>
                  </div>
                </div>

                {/* Brief Scope */}
                <div className="space-y-1">
                  <label className="font-label-sm text-[11px] uppercase tracking-wider text-black block">
                    Khái quát bối cảnh thách thức &amp; Kỳ vọng can thiệp *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.briefScope}
                    onChange={(e) => setFormData({ ...formData, briefScope: e.target.value })}
                    placeholder="Tóm tắt tình huống chiến lược hiện tại (VD: kế hoạch tái cấu trúc chuỗi cung ứng, thương vụ M&A quy mô dự kiến, xung đột chuyển giao thế hệ...)"
                    className={`w-full bg-[#f4f3f0] border px-3 py-2.5 font-body-sm text-[14px] text-black focus:outline-none ${
                      formErrors.briefScope ? 'border-red-600 bg-red-50/30' : 'border-[#c7c7c0]/60 focus:border-black'
                    }`}
                  />
                  {formErrors.briefScope && (
                    <p className="font-label-sm text-[11px] text-red-600 pt-0.5">{formErrors.briefScope}</p>
                  )}
                </div>

                {/* NDA Requirement Checkbox */}
                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="requiresNda"
                    checked={formData.requiresNda}
                    onChange={(e) => setFormData({ ...formData, requiresNda: e.target.checked })}
                    className="w-4 h-4 text-black border-[#c7c7c0] focus:ring-black accent-black cursor-pointer"
                  />
                  <label htmlFor="requiresNda" className="font-body-sm text-[13px] text-[#1a1c1a] cursor-pointer">
                    Yêu cầu kích hoạt Thỏa thuận Bảo mật Song phương (Mutual NDA) trước phiên làm việc đầu tiên
                  </label>
                </div>

                {/* Submit button */}
                <div className="pt-4 border-t border-[#c7c7c0]/30 flex justify-between items-center">
                  <span className="font-label-sm text-[11px] text-[#777871]">
                    * Trường thông tin bắt buộc
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-black text-white px-8 py-3.5 font-label-md text-[12px] uppercase tracking-wider hover:bg-[#5a614f] transition-colors cursor-pointer"
                  >
                    <span>Gửi hồ sơ thẩm định kín</span>
                    <span className="material-symbols-outlined text-[16px]">lock</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
