"use client";

import React, { useState, useEffect } from "react";
import { Header } from "../../Header";
import { Footer } from "../../Footer";
import { HomeScreen } from "../../HomeScreen";
import { CapabilitiesScreen } from "../../CapabilitiesScreen";
import { ProjectsScreen } from "../../ProjectsScreen";
import { PhilosophyScreen } from "../../PhilosophyScreen";
import { ContactScreen } from "../../ContactScreen";
import { CaseStudyModal } from "../../CaseStudyModal";
import { ClientVaultModal } from "../../ClientVaultModal";
import { type CaseStudy } from "../../../data/advisoryData";

interface CorporateProfileTemplateProps {
  data: any;
}

export default function CorporateProfileTemplate({ data }: CorporateProfileTemplateProps) {
  const [currentPath, setCurrentPath] = useState<string>("trang-chu");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isVaultOpen, setIsVaultOpen] = useState<boolean>(false);
  const [isVaultUnlocked, setIsVaultUnlocked] = useState<boolean>(false);

  const business = data?.business || {};

  // Sync with window.location.hash if present
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        const hash = window.location.hash.replace("#", "");
        if (["trang-chu", "nang-luc", "du-an", "tu-tuong", "lien-he"].includes(hash)) {
          setCurrentPath(hash);
        }
      };

      if (window.location.hash) {
        handleHashChange();
      }

      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    if (typeof window !== "undefined") {
      window.location.hash = path;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-full flex flex-col bg-[#faf9f6] text-[#1a1c1a] antialiased selection:bg-[#dce2cc] selection:text-[#181d10] font-['Be_Vietnam_Pro',sans-serif]">
      {/* Fixed Institutional Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenVault={() => setIsVaultOpen(true)}
        isVaultUnlocked={isVaultUnlocked}
        business={business}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-1">
        {currentPath === "trang-chu" && (
          <HomeScreen
            onNavigate={navigateTo}
            onOpenCaseStudy={(study: CaseStudy) => setSelectedCaseStudy(study)}
          />
        )}

        {currentPath === "nang-luc" && (
          <CapabilitiesScreen
            onNavigate={navigateTo}
          />
        )}

        {currentPath === "du-an" && (
          <ProjectsScreen
            onNavigate={navigateTo}
            onOpenCaseStudy={(study: CaseStudy) => setSelectedCaseStudy(study)}
          />
        )}

        {currentPath === "tu-tuong" && (
          <PhilosophyScreen
            onNavigate={navigateTo}
          />
        )}

        {currentPath === "lien-he" && (
          <ContactScreen
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Monographic Editorial Footer */}
      <Footer onNavigate={navigateTo} business={business} />

      {/* Case Study Full Dossier Modal */}
      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onNavigateContact={() => navigateTo("lien-he")}
      />

      {/* Confidential Client Vault Modal */}
      <ClientVaultModal
        isOpen={isVaultOpen}
        onClose={() => setIsVaultOpen(false)}
        isUnlocked={isVaultUnlocked}
        setIsUnlocked={setIsVaultUnlocked}
        onNavigateContact={() => {
          setIsVaultOpen(false);
          navigateTo("lien-he");
        }}
      />
    </div>
  );
}
