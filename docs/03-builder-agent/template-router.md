# Template Router

## Nhiệm vụ
Chuyển `industry` raw thành `template_key` chuẩn.

## Template keys
| Template key | Ngành |
|---|---|
| `dental` | Nha khoa |
| `spa` | Spa thẩm mỹ |
| `aesthetic-clinic` | Thẩm mỹ viện |
| `general-clinic` | Phòng khám đa khoa |
| `hair-salon` | Hair salon |
| `law-firm` | Văn phòng luật |
| `english-center` | Trung tâm tiếng Anh |
| `cleaning-service` | Vệ sinh công nghiệp |
| `interior-design` | Thiết kế nội thất |
| `construction-company` | Xây dựng |
| `fine-dining-restaurant` | Nhà hàng sang trọng |
| `cafe` | Quán cafe |
| `wedding-studio` | Studio ảnh cưới |
| `gym-fitness` | Gym fitness |
| `auto-garage` | Garage ô tô |

## Industry aliases
| Raw keyword | Template key |
|---|---|
| `nha khoa`, `dentist`, `dental clinic` | `dental` |
| `spa`, `massage`, `chăm sóc da` | `spa` |
| `thẩm mỹ viện`, `aesthetic`, `clinic beauty` | `aesthetic-clinic` |
| `phòng khám`, `clinic`, `đa khoa` | `general-clinic` |
| `salon`, `hair`, `tiệm tóc` | `hair-salon` |
| `luật`, `law`, `attorney` | `law-firm` |
| `english`, `ielts`, `toeic`, `anh ngữ` | `english-center` |
| `vệ sinh`, `cleaning`, `janitorial` | `cleaning-service` |
| `nội thất`, `interior` | `interior-design` |
| `xây dựng`, `construction`, `contractor` | `construction-company` |
| `restaurant`, `fine dining`, `nhà hàng` | `fine-dining-restaurant` |
| `cafe`, `coffee`, `cà phê` | `cafe` |
| `wedding`, `studio cưới`, `ảnh cưới` | `wedding-studio` |
| `gym`, `fitness`, `yoga` | `gym-fitness` |
| `garage`, `auto repair`, `sửa ô tô` | `auto-garage` |

## Pseudo-code
```ts
function routeTemplateByIndustry(industry: string): string {
  const value = normalizeVietnamese(industry).toLowerCase()
  for (const rule of INDUSTRY_RULES) {
    if (rule.keywords.some(keyword => value.includes(keyword))) {
      return rule.templateKey
    }
  }
  return "general-service"
}
```

## Khi không match
MVP có thể fallback về template dịch vụ chung, nhưng nếu chưa có template đó thì cập nhật:
```txt
demo_status = failed
notes = "Unknown industry: {industry}"
```
