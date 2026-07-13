# Data Mapping Rules

## Mapping từ `businesses` sang `DemoPageData`
| Supabase field | DemoPageData path | Transform |
|---|---|---|
| `place_id` | `business.placeId` | giữ nguyên |
| `name` | `business.name`, `hero.title`, `seo.title` | sanitize text |
| `industry` | `business.industry`, `template.industryLabel` | normalize |
| `formatted_address` | `business.address`, `contact.address`, `contact.mapQuery` | fallback `name` nếu thiếu |
| `formatted_phone_number` | `business.phone`, `contact.phone`, CTA | normalize phone URL |
| `website` | `business.website` | dùng trong footer nếu có |
| `image_url` | `hero.image`, `gallery[0]` | validate URL |
| `rating` | `trust.rating` | chỉ hiển thị nếu >= 1 |
| `user_ratings_total` | `trust.reviewCount` | chỉ hiển thị nếu > 0 |
| `facebook_url` | `business.facebookUrl`, `contact.facebookUrl` | validate URL |
| `facebook_followers` | `trust.followers` | format `2.5K` |
| `facebook_email` | `business.email`, `contact.email` | validate email |
| `template_key` | `template.key` | nếu null thì route theo industry |

## Pseudo-code mapper
```ts
function buildDemoPageData(business: Business): DemoPageData {
  const templateKey = business.template_key ?? routeTemplateByIndustry(business.industry)
  const defaults = getTemplateDefaults(templateKey)
  const phone = normalizePhone(business.formatted_phone_number)
  const image = validUrl(business.image_url)
    ? business.image_url
    : defaults.fallbackHeroImage

  return {
    business: mapBusiness(business),
    template: defaults.template,
    hero: buildHero(business, defaults, image),
    trust: buildTrust(business),
    about: buildAbout(business, defaults),
    services: defaults.services,
    gallery: buildGallery(business, defaults),
    reviews: buildReviews(business, defaults),
    contact: buildContact(business, phone),
    seo: buildSeo(business, templateKey)
  }
}
```

## Quy tắc sanitize
- Trim khoảng trắng.
- Loại bỏ HTML/script.
- Không hiển thị email/phone nếu format bất thường.
- Không tự chế review như review thật; fallback phải ghi nguồn `fallback`.

## Quy tắc `demo_url`
```ts
demo_url = `${PUBLIC_SITE_URL}/demo/${encodeURIComponent(place_id)}`
```

Ví dụ:
```txt
https://builder-demo.vercel.app/demo/ChIJ123
```
