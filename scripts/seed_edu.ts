import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

async function seedEdu() {
  console.log('Seeding EDU data...');
  
  // 1. Lấy tenant
  const { data: tenants, error: tenantErr } = await supabase.from('tenants').select('id').limit(1);
  if (tenantErr || !tenants?.length) {
    console.error('Không tìm thấy tenant');
    return;
  }
  const tenantId = tenants[0].id;
  console.log('Sử dụng tenant:', tenantId);

  // 2. Tạo khóa học (Courses)
  console.log('Tạo khóa học...');
  const coursesData = [
    { tenant_id: tenantId, name: 'Lập trình Fullstack Next.js', description: 'Khóa học Next.js từ cơ bản đến nâng cao.', price: 15000000, status: 'active' },
    { tenant_id: tenantId, name: 'IELTS Intensive 7.0+', description: 'Khóa luyện thi IELTS mục tiêu 7.0+', price: 12500000, status: 'active' },
    { tenant_id: tenantId, name: 'Tiếng Anh Giao Tiếp Người Đi Làm', description: 'Giao tiếp công sở tự tin trong 3 tháng.', price: 6000000, status: 'active' }
  ];

  const { data: createdCourses, error: crsErr } = await supabase
    .from('crm_courses')
    .insert(coursesData)
    .select();
  
  if (crsErr) {
    console.error('Lỗi tạo khóa học:', crsErr);
    return;
  }
  console.log(`Đã tạo ${createdCourses.length} khóa học.`);

  // 3. Lấy 1 giáo viên (User)
  const { data: users } = await supabase.from('users').select('id').eq('tenant_id', tenantId).limit(1);
  const teacherId = users?.[0]?.id;

  // 4. Tạo lớp học (Classes)
  console.log('Tạo lớp học...');
  const classesData = [
    { tenant_id: tenantId, course_id: createdCourses[0].id, teacher_id: teacherId, name: 'K1 - Next.js Tối 2-4-6', schedule_desc: 'Tối 2-4-6 (19:00 - 21:00)', google_meet_link: 'https://meet.google.com/abc-xyz', status: 'ongoing' },
    { tenant_id: tenantId, course_id: createdCourses[0].id, teacher_id: teacherId, name: 'K2 - Next.js Tối 3-5-7', schedule_desc: 'Tối 3-5-7 (19:00 - 21:00)', status: 'upcoming' },
    { tenant_id: tenantId, course_id: createdCourses[1].id, name: 'IELTS T7-CN', schedule_desc: 'Sáng T7, CN (8:30 - 11:30)', status: 'ongoing' }
  ];

  const { data: createdClasses, error: clsErr } = await supabase
    .from('crm_classes')
    .insert(classesData)
    .select();

  if (clsErr) {
    console.error('Lỗi tạo lớp học:', clsErr);
    return;
  }
  console.log(`Đã tạo ${createdClasses.length} lớp học.`);

  // 5. Tạo contacts (Học viên mẫu)
  console.log('Tạo contacts mẫu...');
  const contactsData = [
    { tenant_id: tenantId, name: 'Nguyễn Văn A', phone: '0901234567', email: 'nva@example.com' },
    { tenant_id: tenantId, name: 'Trần Thị B', phone: '0987654321', email: 'ttb@example.com' },
    { tenant_id: tenantId, name: 'Lê Hoàng C', phone: '0912345678', email: 'lhc@example.com' },
    { tenant_id: tenantId, name: 'Phạm Văn D', phone: '0934567890', email: 'pvd@example.com' },
    { tenant_id: tenantId, name: 'Hoàng Thị E', phone: '0978123456', email: 'hte@example.com' }
  ];

  const { data: createdContacts, error: ctErr } = await supabase
    .from('crm_contacts')
    .insert(contactsData)
    .select();
  
  if (ctErr) {
    console.error('Lỗi tạo contacts:', ctErr);
    return;
  }
  console.log(`Đã tạo ${createdContacts.length} contacts.`);

  // 6. Tạo Enrollments (Ghi danh)
  console.log('Tạo enrollments...');
  const enrollmentsData = [
    { tenant_id: tenantId, contact_id: createdContacts[0].id, class_id: createdClasses[0].id, payment_status: 'paid', amount_paid: 15000000, status: 'active' },
    { tenant_id: tenantId, contact_id: createdContacts[1].id, class_id: createdClasses[0].id, payment_status: 'partial', amount_paid: 5000000, status: 'active' },
    { tenant_id: tenantId, contact_id: createdContacts[2].id, class_id: createdClasses[1].id, payment_status: 'pending', amount_paid: 0, status: 'active' },
    { tenant_id: tenantId, contact_id: createdContacts[3].id, class_id: createdClasses[2].id, payment_status: 'paid', amount_paid: 12500000, status: 'active' },
    { tenant_id: tenantId, contact_id: createdContacts[4].id, class_id: createdClasses[2].id, payment_status: 'partial', amount_paid: 10000000, status: 'dropped' },
  ];

  const { error: enrErr } = await supabase
    .from('crm_enrollments')
    .insert(enrollmentsData);
    
  if (enrErr) {
    console.error('Lỗi tạo enrollments:', enrErr);
    return;
  }
  console.log(`Đã tạo ${enrollmentsData.length} enrollments.`);

  console.log('✅ SEED THÀNH CÔNG!');
}

seedEdu().catch(console.error);
