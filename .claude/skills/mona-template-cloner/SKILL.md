---
name: mona-template-cloner
description: Autonomous 6-step agent workflow for discovering, capturing, rebuilding, testing, visually comparing, and refining website templates from Mona Media (https://mona.media/mau-website/) into TaviWeb's multi-industry render engine.
---

# Mona Template Cloner & Render Engine Agent Skill

See `.agents/skills/mona-template-cloner/SKILL.md` for the full 6-step protocol:
1. Vào mẫu (`scripts/mona-cloner/fetch-reference.mjs`)
2. Chụp mẫu gốc & Phân tích bố cục (`public/templates/<slug>/reference-original.*`)
3. Xây lại theo cơ chế Render (`src/template-sources/<templateKey>/` + `adaptClonedTemplateData`)
4. Kiểm thử & Chụp bản build (`scripts/mona-cloner/verify-and-capture.mjs` + `npm run typecheck`)
5. Đối chiếu & Điều chỉnh cho giống (So sánh ảnh gốc vs ảnh render và tinh chỉnh UI)
6. Kiểm thử hoàn thiện (Cập nhật `.webp` chuẩn vào `public/assets/anh-template/` và `templateCatalog.ts`)
