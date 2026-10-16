const { Client } = require('pg');

async function assignLeads() {
  const connectionString = process.env.DATABASE_URL || "postgresql://postgres.llposvgrqjsrqktahrtw:SwZczgd%21q%233%2Fn.5@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres";
  const client = new Client({ connectionString });
  
  try {
    await client.connect();
    console.log('Connected to PG');
    
    // 1. Delete fake leads created earlier
    await client.query(`
      DELETE FROM crm_deals WHERE title LIKE 'Tư vấn cho Khách hàng tiềm năng % của Sale %';
    `);
    await client.query(`
      DELETE FROM crm_contacts WHERE name LIKE 'Khách hàng tiềm năng % của Sale %';
    `);
    console.log('Xóa các lead giả đã tạo...');

    // 2. Lấy 3 tài khoản sale 1, 2, 3
    const saleIds = [
      '092f9a28-3b7a-4b3b-bbe2-deb443e1198b', // sale1
      '1b0bcf2d-1eae-4041-9860-35b73f4a98ed', // sale2
      '4e234dcd-4339-4452-b1a7-e2ce30789bef'  // sale3
    ];

    // Reset leads that might have been partially assigned or we just find fresh ones
    // Lấy 300 leads chưa được assign
    const res = await client.query(`
      SELECT id FROM leads 
      WHERE assigned_to IS NULL 
      LIMIT 300;
    `);

    const unassignedLeadIds = res.rows.map(r => r.id);
    console.log(`Tìm thấy ${unassignedLeadIds.length} leads chưa assign từ tổng 6000 leads.`);

    if (unassignedLeadIds.length < 300) {
       console.log('Không đủ 300 leads chưa assign!');
       // Nếu không đủ, có thể cần unassign bớt hoặc lấy thêm, nhưng thường là đủ
    }

    let assignedCount = [0, 0, 0];

    for (let i = 0; i < unassignedLeadIds.length; i++) {
      const saleIndex = i % 3; // Chia đều: sale1, sale2, sale3, sale1, sale2...
      const saleId = saleIds[saleIndex];
      
      await client.query(`
        UPDATE leads SET assigned_to = $1 WHERE id = $2
      `, [saleId, unassignedLeadIds[i]]);
      
      assignedCount[saleIndex]++;
    }

    console.log(`Đã chia leads: Sale 1 (${assignedCount[0]}), Sale 2 (${assignedCount[1]}), Sale 3 (${assignedCount[2]})`);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.end();
  }
}

assignLeads();
