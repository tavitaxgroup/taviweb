---
name: mona-template-cloner
description: Autonomous 6-step agent workflow for discovering, capturing, rebuilding, testing, visually comparing, and refining website templates from Mona Media (https://mona.media/mau-website/) into TaviWeb's multi-industry render engine.
---

# Mona Template Cloner & Render Engine Agent Skill

Use this skill whenever the user asks to clone, rebuild, or expand website templates from `https://mona.media/mau-website/` across TaviWeb's 18 industries.

## 1. Architecture & Render Engine Rules (Bắt buộc tuân thủ)

Every cloned template MUST be a `render_template` integrated into TaviWeb's dynamic render pipeline:
1. **Self-Contained Source (`src/template-sources/{templateKey}/`)**:
   - `types/demo.ts`: Extends `ClonedTemplateBaseData` from `@/lib/demo/clonedTemplateUtils`.
   - `lib/demo/data.ts`: Full Vietnamese default data (`{templateKey}DefaultData`) matching the original template's sections, copy, and industry.
   - `components/demo/templates/{TemplateName}.tsx`: Pixel-faithful React + Tailwind reconstruction of all sections from the original reference template.
   - `components/demo/DemoTemplateRenderer.tsx`: Uses `adaptClonedTemplateData(defaultData, data)` from `@/lib/demo/clonedTemplateUtils` so that:
     - Canonical mock routes (`/demo/mock-{industryKey}?template={templateKey}`) preserve the template's authentic brand design.
     - Real customer leads (`/demo/[place_id]?template={templateKey}`) automatically inject `lead.name`, `lead.phone`, `lead.email`, `lead.address`, `lead.logoUrl`, and deep `template_data` JSON overrides (dot-notation & root arrays).
     - Token Blueprint Mode (`__token_preview__`) works out of the box.
   - `index.ts`: Exports both `{TemplateName}` and `DemoTemplateRenderer`.
2. **Global Render Registration**:
   - Register in `src/components/demo/DemoTemplateRenderer.tsx` (`CLONED_TEMPLATE_RENDERERS` map).
   - Register in `src/lib/templates/templateRegistry.tsx` (dynamic import map).
   - Register in `src/lib/templates/templateCatalog.ts` under the appropriate `industryKey` (one of the 18 system `IndustryKey`s) with `type: "render_template"`, `demoUrl: "/demo/mock-{industryKey}?template={templateKey}"`, `thumbnail` & `longPreviewImage` pointing to `/assets/anh-template/{industry-folder}/{ID}-live.webp`, and **NO `priceLabel`**.

---

## 2. Quy Trình 6 Bước Tuần Tự (The 6-Step Iterative Loop)

For every template in the queue, execute these 6 steps strictly in order:

### Bước 1: Vào mẫu (Discover & Inspect)
- Query Mona Media's AJAX catalog (`action=mona_ajax_get_websites_query` or `action=mona_ajax_get_websites_search` at `https://mona.media/wp-admin/admin-ajax.php?mona-ajax`) or read `scripts/mona-cloner/catalog.json`.
- Identify the target template's `post_title`, `live` URL, `thumbnail` full-length image URL, and map it to one of the 18 `IndustryKey`s.

### Bước 2: Chụp mẫu gốc (Capture Original Reference)
- Run:
  ```bash
  node scripts/mona-cloner/fetch-reference.mjs <slug> <referenceImageUrl> [liveUrl]
  ```
- Inspect the saved `public/templates/<slug>/reference-original.{png|jpg}` visually (`read_file`) from top to bottom.
- Document every section in order: Topbar, Navbar, Hero Banner/Slider, Search/Filter/CTA bar, About/Stats, Services Grid, Projects/Products Gallery (with category tabs), Process/Features, Team/Experts, Pricing/Packages, Testimonials/Logos, News/Blog, Contact Form, Footer.

### Bước 3: Xây lại theo cơ chế Render (Rebuild in Next.js + Tailwind)
- Create `src/template-sources/<templateKey>/` with `types/demo.ts`, `lib/demo/data.ts`, `components/demo/templates/<TemplateName>.tsx`, `components/demo/DemoTemplateRenderer.tsx`, and `index.ts`.
- Match the original template's exact color palette, dark/light section rhythm, typography hierarchy, card borders/shadows, badge styles, interactive category tabs, and lead capture form.
- Register `<templateKey>` in `src/components/demo/DemoTemplateRenderer.tsx`, `src/lib/templates/templateRegistry.tsx`, and `src/lib/templates/templateCatalog.ts`.

### Bước 4: Kiểm thử lần 1 & Chụp bản build (Test & Capture Render)
- Run `npm run typecheck` (`tsc --noEmit`) and ensure 0 TypeScript errors.
- Ensure the Next.js dev server is running on port 3000, then run:
  ```bash
  node scripts/mona-cloner/verify-and-capture.mjs <industryKey> <templateKey> public/assets/anh-template/<industry-folder>/<ID>-live.webp
  ```
- Confirm:
  - HTTP 200 on `/demo/mock-<industryKey>?template=<templateKey>`
  - 0 broken images (`brokenCount === 0`)
  - Lead injection verified (`hasAnGia: true`, `hasPhone: true`)

### Bước 5: Đối chiếu & Điều chỉnh cho giống (Visual Compare & Refine)
- Visually inspect (`read_file`) both:
  1. `public/templates/<slug>/reference-original.{png|jpg}` (Original Mona template)
  2. `public/assets/anh-template/<industry-folder>/<ID>-live.png` (Our rendered output)
- Compare section-by-section:
  - Header & Hero layout, overlay contrast, CTA button colors
  - Section background alternation (white / slate / dark charcoal / brand accent banners)
  - Grid column counts (3-col vs 4-col), card aspect ratios, icon badges, and typography
  - Footer layout and contact blocks
- Edit `<TemplateName>.tsx` and `data.ts` to fix any visual discrepancies or broken/mismatched assets.

### Bước 6: Kiểm thử hoàn thiện (Final Verification)
- Re-run `node scripts/mona-cloner/verify-and-capture.mjs ...` to regenerate the final `.webp` live preview image (and remove temporary `.png` copies in `public/assets/anh-template/`).
- Run `npm run typecheck` to confirm 0 errors.
