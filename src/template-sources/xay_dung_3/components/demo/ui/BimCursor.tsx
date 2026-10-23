"use client";

import React, { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR =
  "a, button, .bim-service-box, .bim-team-card, .bim-portfolio-strip-item, .bim-blog-card, .bim-contact-card, .cursor-pointer";

/**
 * BIM signature dual-circle cursor.
 * Positions are written straight to the DOM (no React re-render per frame)
 * and both circles are centred on the pointer via translate(-50%, -50%).
 */
export function BimCursor() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Desktop pointers only
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const inner = innerRef.current;
    const outer = outerRef.current;
    if (!inner || !outer) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let frame = 0;

    const place = (el: HTMLElement, x: number, y: number) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const loop = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      place(outer, currentX, currentY);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      place(inner, targetX, targetY);
      inner.dataset.visible = "true";
      outer.dataset.visible = "true";
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const hovering = !!target?.closest(HOVER_SELECTOR);
      inner.classList.toggle("cursor-hover", hovering);
      outer.classList.toggle("cursor-hover", hovering);
    };

    const onLeave = () => {
      inner.dataset.visible = "false";
      outer.dataset.visible = "false";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={outerRef} className="cursor-outer" data-visible="false" aria-hidden="true" />
      <div ref={innerRef} className="cursor-inner" data-visible="false" aria-hidden="true" />
    </>
  );
}
