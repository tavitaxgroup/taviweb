# Database Schema

## Bảng `businesses`
Bảng `businesses` là nguồn dữ liệu chính để render demo và điều phối outreach.

```sql
create table businesses (
  id uuid primary key default gen_random_uuid(),
  place_id text unique not null,
  industry text not null,
  status text default 'new',
  name text not null,
  formatted_address text,
  formatted_phone_number text,
  website text,
  image_url text,
  rating numeric,
  user_ratings_total integer,
  facebook_url text,
  facebook_followers integer,
  facebook_email text,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  demo_url text,
  demo_status text default 'pending',
  template_key text,
  outreach_status text default 'not_sent',
  zalo_sent_at timestamptz,
  email_sent_at timestamptz,
  notes text
);
```

## Phân loại field
| Field | Bắt buộc | Nhóm | Dùng cho website | Dùng outreach | Nội bộ |
|---|---|---|---:|---:|---:|
| `id` | Có | identity | Không | Không | Có |
| `place_id` | Có | identity | Có | Có | Có |
| `industry` | Có | classification | Có | Có | Có |
| `status` | Không | management | Không | Có | Có |
| `name` | Có | business | Có | Có | Có |
| `formatted_address` | Không | business | Có | Có | Không |
| `formatted_phone_number` | Không | contact | Có | Có | Không |
| `website` | Không | contact | Có | Có | Không |
| `image_url` | Không | media | Có | Không | Không |
| `rating` | Không | trust | Có | Có | Không |
| `user_ratings_total` | Không | trust | Có | Có | Không |
| `facebook_url` | Không | social | Có | Có | Không |
| `facebook_followers` | Không | social | Có | Có | Không |
| `facebook_email` | Không | contact | Có | Có | Không |
| `demo_url` | Không | demo | Có | Có | Có |
| `demo_status` | Không | demo | Không | Có | Có |
| `template_key` | Không | demo | Có | Không | Có |
| `outreach_status` | Không | outreach | Không | Có | Có |
| `zalo_sent_at` | Không | outreach | Không | Có | Có |
| `email_sent_at` | Không | outreach | Không | Có | Có |
| `notes` | Không | management | Không | Có | Có |

## Index đề xuất
```sql
create index businesses_place_id_idx on businesses(place_id);
create index businesses_demo_status_idx on businesses(demo_status);
create index businesses_industry_idx on businesses(industry);
create index businesses_outreach_status_idx on businesses(outreach_status);
```

## Không ghi đè dữ liệu nguồn
Builder Agent không tự sửa `name`, `phone`, `rating`, `website` trừ khi có workflow enrichment riêng. Agent chỉ nên cập nhật:
- `template_key`
- `demo_url`
- `demo_status`
- `outreach_status`
- `zalo_sent_at`
- `email_sent_at`
- `notes`
- `updated_at`
