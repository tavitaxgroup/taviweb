"use client";

import React, { useState, useEffect } from "react";
import { Header } from "../../Header";
import { HeroSection } from "../../HeroSection";
import { CategorySection } from "../../CategorySection";
import { FeaturedProductsSection } from "../../FeaturedProductsSection";
import { ServicesSection } from "../../ServicesSection";
import { DealerSection } from "../../DealerSection";
import { FinalCtaSection } from "../../FinalCtaSection";
import { Footer } from "../../Footer";
import { CatalogScreen } from "../../CatalogScreen";
import { ServicesScreen } from "../../ServicesScreen";
import { DealersScreen } from "../../DealersScreen";
import { ProductDetailModal } from "../../ProductDetailModal";
import { CadDownloadModal } from "../../CadDownloadModal";
import { QuoteModal } from "../../QuoteModal";
import { DealerModal } from "../../DealerModal";
import { ComparisonModal } from "../../ComparisonModal";
import { Equipment, EQUIPMENT_CATALOG } from "../../../data/equipment";

interface B2BProductTemplateProps {
  data: any;
}

export default function B2BProductTemplate({ data }: B2BProductTemplateProps) {
  const [currentScreen, setCurrentScreen] = useState<"showroom" | "catalog" | "services" | "dealers">("showroom");
  const [catalogCategory, setCatalogCategory] = useState<string>("all");

  // Modals state
  const [detailProduct, setDetailProduct] = useState<Equipment | null>(null);
  const [cadProduct, setCadProduct] = useState<Equipment | null>(null);
  const [quoteProduct, setQuoteProduct] = useState<Equipment | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isDealerOpen, setIsDealerOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);

  // Comparison tray
  const [comparisonList, setComparisonList] = useState<Equipment[]>([]);

  const business = data?.business || {};

  // Check URL query parameters for testability / direct linking (e.g. ?screen=catalog)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const screenParam = params.get("screen");
      if (screenParam && ["showroom", "catalog", "services", "dealers"].includes(screenParam)) {
        setCurrentScreen(screenParam as any);
      }
    }
  }, []);

  const handleToggleComparison = (product: Equipment) => {
    setComparisonList((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), product];
      }
      return [...prev, product];
    });
  };

  const handleOpenQuoteWithProduct = (product?: Equipment) => {
    setQuoteProduct(product || EQUIPMENT_CATALOG[0]);
    setIsQuoteOpen(true);
  };

  const handleSelectCategoryFromHome = (categoryId: "robotics" | "motion" | "laser" | "all") => {
    setCatalogCategory(categoryId);
    setCurrentScreen("catalog");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const heroCncProduct = EQUIPMENT_CATALOG.find((e: Equipment) => e.id === "cnc-5x-continuous") || EQUIPMENT_CATALOG[2];
  const laserProduct = EQUIPMENT_CATALOG.find((e: Equipment) => e.id === "fl-8000") || EQUIPMENT_CATALOG[0];
  const roboticsProduct = EQUIPMENT_CATALOG.find((e: Equipment) => e.id === "vr-25") || EQUIPMENT_CATALOG[1];

  return (
    <div className="min-h-screen bg-[#121316] text-[#e3e2e6] flex flex-col selection:bg-[#f45b1c] selection:text-white font-['Hanken_Grotesk',sans-serif]">
      {/* Fixed Navigation Header */}
      <Header
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        onOpenQuote={() => handleOpenQuoteWithProduct()}
        comparisonCount={comparisonList.length}
        onOpenComparison={() => setIsComparisonOpen(true)}
        business={business}
      />

      {/* Main Content Area (padding-top 80px for fixed header) */}
      <main className="w-full pt-20 flex-1">
        {currentScreen === "showroom" && (
          <div className="flex flex-col w-full">
            {/* 1. Hero Workstation Section */}
            <HeroSection
              onOpenQuote={() => handleOpenQuoteWithProduct(heroCncProduct)}
              onExploreCategories={() => {
                const el = document.getElementById("categories");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              onInspectHeroMachine={() => setDetailProduct(heroCncProduct)}
            />

            {/* 2. Categorized Equipment Hierarchy */}
            <CategorySection onSelectCategory={handleSelectCategoryFromHome} />

            {/* 3. Featured Active Inventory Products */}
            <FeaturedProductsSection
              laserProduct={laserProduct}
              roboticsProduct={roboticsProduct}
              onSelectProductForQuote={handleOpenQuoteWithProduct}
              onOpenCadModal={(prod: Equipment) => setCadProduct(prod)}
              onViewProductDetail={(prod: Equipment) => setDetailProduct(prod)}
            />

            {/* 4. Infrastructure & Engineering Services */}
            <ServicesSection
              onOpenCadLibrary={() => {
                setCurrentScreen("services");
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              onOpenConsultation={() => handleOpenQuoteWithProduct()}
            />

            {/* 5. Dealer Partnership Section */}
            <DealerSection onOpenDealerRegister={() => setIsDealerOpen(true)} />

            {/* 6. Dual-Path Action Section */}
            <FinalCtaSection
              onOpenQuote={() => handleOpenQuoteWithProduct()}
              onOpenDealerRegister={() => setIsDealerOpen(true)}
            />
          </div>
        )}

        {currentScreen === "catalog" && (
          <CatalogScreen
            initialCategory={catalogCategory}
            onSelectProductForQuote={handleOpenQuoteWithProduct}
            onOpenCadModal={(prod: Equipment) => setCadProduct(prod)}
            onViewProductDetail={(prod: Equipment) => setDetailProduct(prod)}
            comparisonList={comparisonList}
            onToggleComparison={handleToggleComparison}
            onOpenComparisonModal={() => setIsComparisonOpen(true)}
          />
        )}

        {currentScreen === "services" && (
          <ServicesScreen
            onOpenCadModal={(prod: Equipment) => setCadProduct(prod)}
            onOpenQuote={() => handleOpenQuoteWithProduct()}
          />
        )}

        {currentScreen === "dealers" && (
          <DealersScreen
            onOpenDealerRegister={() => setIsDealerOpen(true)}
            onOpenQuote={() => handleOpenQuoteWithProduct()}
          />
        )}
      </main>

      {/* Technical Exhibition Footer */}
      <Footer onNavigate={setCurrentScreen} business={business} />

      {/* Modal: Full Equipment Technical Dossier */}
      <ProductDetailModal
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
        onOpenQuote={() => {
          const prod = detailProduct;
          setDetailProduct(null);
          handleOpenQuoteWithProduct(prod || undefined);
        }}
        onOpenCad={() => {
          const prod = detailProduct;
          setDetailProduct(null);
          setCadProduct(prod);
        }}
      />

      {/* Modal: STEP / IGES CAD Direct Download */}
      <CadDownloadModal
        product={cadProduct}
        onClose={() => setCadProduct(null)}
      />

      {/* Modal: Interactive 3-Step RFQ Generator */}
      {isQuoteOpen && (
        <QuoteModal
          initialProduct={quoteProduct}
          onClose={() => setIsQuoteOpen(false)}
        />
      )}

      {/* Modal: Authorized Dealer Application */}
      {isDealerOpen && (
        <DealerModal
          onClose={() => setIsDealerOpen(false)}
        />
      )}

      {/* Modal: 3-Way Technical Specification Comparison Matrix */}
      {isComparisonOpen && (
        <ComparisonModal
          items={comparisonList}
          onClose={() => setIsComparisonOpen(false)}
          onRemoveItem={(prodId: string) =>
            setComparisonList((prev) => prev.filter((p) => p.id !== prodId))
          }
          onSelectForQuote={(prod: Equipment) => {
            setIsComparisonOpen(false);
            handleOpenQuoteWithProduct(prod);
          }}
        />
      )}
    </div>
  );
}
