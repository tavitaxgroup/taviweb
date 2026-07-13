# Next.js Structure

## Cấu trúc đề xuất
```txt
src/
  app/
    demo/
      [place_id]/
        page.tsx
        loading.tsx
        not-found.tsx
  components/
    demo/
      DemoTemplateRenderer.tsx
      sections/
        DemoNavbar.tsx
        DemoHero.tsx
        TrustBar.tsx
        AboutSection.tsx
        ServicesSection.tsx
        GallerySection.tsx
        WhyChooseUsSection.tsx
        ReviewsSection.tsx
        ContactCTASection.tsx
        DemoFooter.tsx
      templates/
        DentalTemplate.tsx
        SpaTemplate.tsx
        AestheticClinicTemplate.tsx
        GeneralClinicTemplate.tsx
        HairSalonTemplate.tsx
        LawFirmTemplate.tsx
        EnglishCenterTemplate.tsx
        CleaningServiceTemplate.tsx
        InteriorDesignTemplate.tsx
        ConstructionCompanyTemplate.tsx
        FineDiningRestaurantTemplate.tsx
        CafeTemplate.tsx
        WeddingStudioTemplate.tsx
        GymFitnessTemplate.tsx
        AutoGarageTemplate.tsx
  lib/
    supabase/
      server.ts
      types.ts
    demo/
      buildDemoPageData.ts
      templateRouter.ts
      templateDefaults.ts
      fallbackRules.ts
      seo.ts
  types/
    demo.ts
```

## Nguyên tắc tổ chức
- `app/demo/[place_id]/page.tsx` chỉ fetch, map và render.
- Component section không fetch Supabase.
- Template theo ngành chỉ quyết định theme, tone và thứ tự section, không thay skeleton.
- Business logic mapping nằm trong `lib/demo`.

## Registry
```ts
export const templateRegistry = {
  dental: DentalTemplate,
  spa: SpaTemplate,
  "aesthetic-clinic": AestheticClinicTemplate,
  "general-clinic": GeneralClinicTemplate,
  "hair-salon": HairSalonTemplate,
  "law-firm": LawFirmTemplate,
  "english-center": EnglishCenterTemplate,
  "cleaning-service": CleaningServiceTemplate,
  "interior-design": InteriorDesignTemplate,
  "construction-company": ConstructionCompanyTemplate,
  "fine-dining-restaurant": FineDiningRestaurantTemplate,
  cafe: CafeTemplate,
  "wedding-studio": WeddingStudioTemplate,
  "gym-fitness": GymFitnessTemplate,
  "auto-garage": AutoGarageTemplate
}
```
