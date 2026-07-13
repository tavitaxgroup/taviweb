# Supabase Integration

## Environment variables
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=https://builder-demo.vercel.app
```

## Server client
Chỉ dùng service role ở server/agent. Client route demo chỉ cần đọc public hoặc dùng server component.

```ts
import { createClient } from "@supabase/supabase-js"

export function createSupabaseServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}
```

## Fetch theo place_id
```ts
export async function getBusinessByPlaceId(placeId: string) {
  const supabase = createSupabaseServerClient()
  const { data, error } = await supabase
    .from("businesses")
    .select("*")
    .eq("place_id", placeId)
    .single()

  if (error) throw error
  return data
}
```

## RLS gợi ý
Nếu demo public, nên tạo view chỉ chứa field được phép render:

```sql
create view public_demo_businesses as
select
  place_id, industry, name, formatted_address, formatted_phone_number,
  website, image_url, rating, user_ratings_total,
  facebook_url, facebook_followers, facebook_email,
  demo_url, demo_status, template_key
from businesses
where demo_status in ('ready', 'approved', 'sent');
```

## Update từ Builder Agent
Agent nên dùng service role và chỉ update field demo/outreach, không sửa dữ liệu nguồn.
