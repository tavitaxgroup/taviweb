-- ==============================================================================
-- KỊCH BẢN PHÂN LOẠI 46.406 LEADS TRONG DATABASE SANG 3 MẪU WEBSITE B2B CỐT LÕI
-- Hệ thống: TAVIWEB (Supabase / PostgreSQL)
-- Bảng: leads | Cột đích: industry
-- 
-- LƯU Ý ĐẶC BIỆT QUAN TRỌNG:
-- Toàn bộ bảng 'leads' hiện có 59.135 dòng với 16 giá trị industry khác nhau:
-- 1. 'dang_phat_trien': ĐÚNG 46.406 lead B2B cần phân loại sang 3 mẫu mới.
-- 2. 15 ngành nghề còn lại (12.729 lead): ĐÃ CÓ sẵn template hoạt động chuẩn chỉ
--    (cong_ty_xay_dung: 7.897, nha_hang: 1.442, noi_that: 1.289, nha_khoa: 624,...)
-- => Script này CHỈ CẬP NHẬT các lead có industry = 'dang_phat_trien', 
--    TUYỆT ĐỐI KHÔNG GHI ĐÈ lên 12.729 lead của 15 ngành nghề đã có!
-- ==============================================================================

-- BƯỚC 1: SAO LƯU DỮ LIỆU CŨ TRƯỚC KHI THAY ĐỔI (ĐẢM BẢO AN TOÀN 100%)
-- Tạo cột sao lưu nếu chưa tồn tại
ALTER TABLE leads ADD COLUMN IF NOT EXISTS industry_backup text;

-- Ghi nhận lại giá trị ban đầu cho nhóm 'dang_phat_trien'
UPDATE leads 
SET industry_backup = industry 
WHERE industry = 'dang_phat_trien' AND industry_backup IS NULL;

-- ------------------------------------------------------------------------------
-- BƯỚC 2: CẬP NHẬT PHÂN LOẠI 46.406 LEADS THÀNH 3 NHÓM MỚI
-- ------------------------------------------------------------------------------

-- 1. NHÓM 2: b2b_product (Showroom B2B, Thiết Bị Kỹ Thuật, Máy Móc & Phân Phối)
-- Dự kiến: ~14.259 DN (chiếm ~30.7%)
-- Tiêu chí: Thương mại, Phân phối, Thiết bị, Máy móc, Vật tư, Xuất nhập khẩu, Nông sản,
--           Thực phẩm, Y tế - Dược phẩm, Cơ khí, Sản xuất, Gia công, Vật liệu, Hóa chất...
UPDATE leads
SET industry = 'b2b_product'
WHERE industry = 'dang_phat_trien'
  AND unaccent(lower(name)) ~* '\y(thuong mai|phan phoi|thiet bi|may moc|vat tu|xuat nhap khau|imex|xnk|nong san|thuc pham|thuy san|hai san|duoc pham|y te|vat tu y te|co khi|che tao|san xuat|gia cong|vat lieu|vat lieu xay dung|vlxd|hoa chemical|hoa chat|nhom kinh|dien may|thiet bi dien|phu tung|cong nghiep|may mac|det may|go|bao bi)\y';

-- 2. NHÓM 3: lead_generation (Tăng Trưởng Nóng, Dịch Vụ Khách Hàng, Đào Tạo & Chuyển Đổi Cao)
-- Dự kiến: ~2.062 DN (chiếm ~4.4%)
-- Tiêu chí: Truyền thông, Quảng cáo, Sự kiện, Đào tạo, Du học, Du lịch, Dịch vụ nhanh,
--           Vận tải hành khách, Taxi, Cứu hộ, Sửa chữa, Vệ sinh, Thẩm mỹ, Làm đẹp...
UPDATE leads
SET industry = 'lead_generation'
WHERE industry = 'dang_phat_trien'
  AND unaccent(lower(name)) ~* '\y(truyen thong|quang cao|su kien|media|marketing|agency|dao tao|day nghe|hoc lai xe|du hoc|ngoai ngu|tieng anh|du lich|tour|travel|lu hanh|van tai hanh khach|xe khach|taxi|cuu ho|sua chua|bao tri|dien lanh|ve sinh|giat ui|chuyen nha|boc xep|bao ve|an ninh|studio|chup anh|lam dep|tham my|spa|massage|toc|salon)\y';

-- 3. NHÓM 1: corporate_profile (Hồ Sơ Năng Lực Doanh Nghiệp B2B Đa Ngành)
-- Dự kiến: ~30.085 DN (chiếm ~64.8%)
-- Toàn bộ các doanh nghiệp 'dang_phat_trien' còn lại sẽ vào nhóm Corporate Profile
UPDATE leads
SET industry = 'corporate_profile'
WHERE industry = 'dang_phat_trien';

-- ------------------------------------------------------------------------------
-- BƯỚC 3: KIỂM TRA THỐNG KÊ KẾT QUẢ PHÂN BỔ TRÊN TOÀN BỘ 59.135 DÒNG
-- ------------------------------------------------------------------------------
SELECT 
    industry,
    COUNT(*) as total_leads,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM leads), 2) as percentage
FROM leads
GROUP BY industry
ORDER BY total_leads DESC;

-- ------------------------------------------------------------------------------
-- LỆNH HOÀN NGUYÊN (ROLLBACK) TRONG TRƯỜNG HỢP CẦN KHÔI PHỤC DỮ LIỆU BAN ĐẦU:
-- UPDATE leads SET industry = industry_backup WHERE industry_backup = 'dang_phat_trien';
-- ------------------------------------------------------------------------------
