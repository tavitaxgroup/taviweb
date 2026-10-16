import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

async function seedLeads() {
  const tenant_id = '6064025b-7fe4-4840-a27f-2d5da65e15fa';
  const saleIds = [
    '092f9a28-3b7a-4b3b-bbe2-deb443e1198b', // sale1
    '1b0bcf2d-1eae-4041-9860-35b73f4a98ed', // sale2
    '4e234dcd-4339-4452-b1a7-e2ce30789bef'  // sale3
  ];

  const { data: pipelines } = await supabase.from('crm_pipelines').select('id').eq('tenant_id', tenant_id).limit(1);
  if (!pipelines?.length) {
    console.error('Không tìm thấy pipeline!');
    return;
  }
  
  const { data: stages } = await supabase.from('crm_stages').select('id').eq('pipeline_id', pipelines[0].id).order('order', { ascending: true }).limit(1);
  const firstStageId = stages?.[0]?.id;

  console.log('Bắt đầu tạo leads...');
  let totalCreated = 0;

  for (let i = 0; i < saleIds.length; i++) {
    const saleId = saleIds[i];
    const saleNum = i + 1;
    console.log(`Đang tạo 100 leads cho Sale ${saleNum}...`);
    
    // Create 100 contacts first
    const contactsData = [];
    for (let j = 1; j <= 100; j++) {
      contactsData.push({
        tenant_id: tenant_id,
        name: `Khách hàng tiềm năng ${j} của Sale ${saleNum}`,
        phone: `09${Math.floor(Math.random() * 100000000).toString().padStart(8, '0')}`,
        email: `lead${j}_sale${saleNum}@example.com`,
        source: 'facebook'
      });
    }

    const { data: createdContacts, error: contactErr } = await supabase
      .from('crm_contacts')
      .insert(contactsData)
      .select('id, name');

    if (contactErr || !createdContacts) {
      console.error(`Lỗi khi tạo contacts cho Sale ${saleNum}:`, contactErr);
      continue;
    }

    // Create 100 deals for these contacts
    const dealsData = createdContacts.map((contact, index) => ({
      tenant_id: tenant_id,
      contact_id: contact.id,
      stage_id: firstStageId,
      assignee_id: saleId,
      title: `Tư vấn cho ${contact.name}`,
      value: Math.floor(Math.random() * 5 + 1) * 1000000 // 1M to 5M
    }));

    const { data: createdDeals, error: dealErr } = await supabase
      .from('crm_deals')
      .insert(dealsData)
      .select('id');

    if (dealErr) {
      console.error(`Lỗi khi tạo deals cho Sale ${saleNum}:`, dealErr);
    } else {
      console.log(`Tạo thành công ${createdDeals?.length} leads (deals) cho Sale ${saleNum}`);
      totalCreated += createdDeals?.length || 0;
    }
  }

  console.log(`✅ Hoàn thành! Đã tạo tổng cộng ${totalCreated} leads.`);
}

seedLeads().catch(console.error);
