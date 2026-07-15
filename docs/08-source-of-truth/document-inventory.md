# Source Of Truth - Document Inventory

Cap nhat: 2026-07-15.

File nay phan loai tai lieu hien co de developer va AI coding agent biet nen doc gi truoc, tai lieu nao chi con gia tri tham khao, va tai lieu nao co the don dep sau.

## Tai lieu bat buoc doc

| File | Trang thai | Muc dich |
|---|---|---|
| `docs/08-source-of-truth/project-architecture.md` | Bat buoc | Kien truc runtime hien tai cua `taviweb` |
| `docs/08-source-of-truth/template-gallery-rules.md` | Bat buoc khi sua kho giao dien | Quy tac catalog, sidebar, route kho giao dien |
| `docs/08-source-of-truth/demo-renderer-rules.md` | Bat buoc khi sua `/demo/[place_id]` | Quy tac Supabase leads, mock data, Facebook link, fallback |
| `docs/08-source-of-truth/ai-change-protocol.md` | Bat buoc cho AI/developer | Quy trinh sua code an toan |
| `docs/08-source-of-truth/document-inventory.md` | Bat buoc khi don dep docs | Phan loai tai lieu |

## Tai lieu nen giu lam tham khao

| Folder | Ly do giu |
|---|---|
| `docs/00-overview` | Boi canh kinh doanh va muc tieu ban dau |
| `docs/01-design-system` | Nguyen tac design system ban dau, huu ich khi lam template moi |
| `docs/02-data` | Mo ta schema va data mapping ban dau |
| `docs/03-builder-agent` | Dinh huong Builder Agent/outreach ve sau |
| `docs/04-templates` | Spec 15 nganh ban dau, huu ich khi tao template moi |
| `docs/05-prompts/stitch-ai` | Prompt thiet ke UI bang Stitch AI |
| `docs/05-prompts/studio-ai` | Prompt tao code bang Studio AI |
| `docs/06-implementation` | Huong dan Next.js/Supabase/Vercel ban dau |
| `docs/07-quality-control` | Checklist review design/content/legal |
| `docs/HDSD` | Prompt ready-to-use va huong dan thao tac voi AI tools |

## Tai lieu khong con la nguon su that runtime

Cac folder sau khong nen dung de quyet dinh kien truc hien tai neu noi dung mau thuan voi `docs/08-source-of-truth`:

| Folder/file | Ly do |
|---|---|
| `docs/00-overview` | Duoc viet truoc khi tich hop `software` vao `taviweb` |
| `docs/01-design-system` | La design system chung ban dau, khong phan anh 100% CSS hien tai |
| `docs/02-data` | Co the chua cap nhat day du viec field `website` dang tam dung nhu Facebook link |
| `docs/03-builder-agent` | Builder Agent/outreach chua phai runtime dang chay trong app |
| `docs/04-templates` | Spec nganh, khong phai source code template that |
| `docs/05-prompts` | Prompt tao template, khong phai tai lieu runtime |
| `docs/06-implementation` | Mot so cau truc ban dau da thay doi sau khi import 15 template Studio AI |
| `docs/HDSD/prompt-studio-*.md` | Prompt da dung de tao template; khong nen doc nhu source of truth sau khi code da co |

## Tai lieu co the don dep sau

Khong nen xoa ngay neu chua backup, nhung co the chuyen vao `docs/archive` hoac gop lai:

| Nhom | De xuat |
|---|---|
| `docs/HDSD/prompt-studio-*-ready.md` | Chuyen vao `docs/archive/prompts/studio-ready` sau khi 15 template da on dinh |
| `docs/HDSD/prompt-studio-final.md` | Giu 1 ban duy nhat lam prompt mau, cac ban nganh co the archive |
| `docs/05-prompts/studio-ai` | Giu neu con dung Studio AI tao template moi; neu khong, archive |
| `docs/05-prompts/stitch-ai` | Giu neu con dung Stitch AI tao design moi; neu khong, archive |
| `docs/06-implementation/*.md` | Nen gop cac phan dung vao `08-source-of-truth`, phan cu archive |

## Tai lieu khong nen xoa

- `docs/08-source-of-truth/*`
- `docs/07-quality-control/legal-data-policy.md`
- `docs/02-data/database-schema.md`
- `docs/02-data/business-data-schema.md`
- `docs/03-builder-agent/outreach-workflow.md`

Ly do: cac file nay van huu ich cho phap ly, schema va giai doan Builder Agent/outreach sau nay.

## Quy tac khi cap nhat tai lieu

- Neu code runtime thay doi, cap nhat `docs/08-source-of-truth` trong cung task.
- Neu tai lieu cu mau thuan voi `08-source-of-truth`, uu tien `08-source-of-truth`.
- Khi xoa/archive docs cu, phai ghi ro trong commit/ghi chu nhom file nao duoc di chuyen.
