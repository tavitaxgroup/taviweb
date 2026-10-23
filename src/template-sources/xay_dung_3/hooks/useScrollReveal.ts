"use client";

import { useEffect } from "react";

const SELECTOR = ".bim-reveal, .bim-reveal-left, .bim-reveal-right, .bim-reveal-scale";
// Reveal duration (0.6s) + max stagger (0.24s) + buffer
const DONE_AFTER_MS = 900;

export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const timers: number[] = [];
    let pending = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR)).filter(
      (el) => !el.classList.contains("bim-revealed")
    );

    const reveal = (el: HTMLElement) => {
      if (el.classList.contains("bim-revealed")) return;
      el.classList.add("bim-revealed");
      // Once the entrance is over, clear the stagger delay so hover feels instant
      timers.push(window.setTimeout(() => el.classList.add("bim-reveal-done"), DONE_AFTER_MS));
    };

    // Fallback check (also covers fast jumps via anchor links / scrollbar drags)
    let ticking = false;
    const checkVisible = () => {
      ticking = false;
      const limit = window.innerHeight - 30;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top <= limit) {
          reveal(el);
          return false;
        }
        return true;
      });
      if (pending.length === 0) window.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(checkVisible);
      }
    };

    checkVisible();

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target as HTMLElement);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
      );
      pending.forEach((el) => observer!.observe(el));
    }

    if (pending.length > 0) window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);
}
