"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { HeroMapIllustration } from "./CartographicIllustrations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--color-paper)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "4.5rem",
      }}
    >
      <div className="container-wide" style={{ width: "100%", position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            alignItems: "center",
          }}
          className="md:!grid-cols-hero"
        >
          {/* Text Content */}
          <div
            style={{
              paddingTop: "2rem",
              paddingBottom: "2rem",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            {/* Label */}
            <div className="text-label" style={{ marginBottom: "1.5rem" }}>
              {siteConfig.focusAreas.join(" · ")}
            </div>

            {/* Name */}
            <h1
              className="heading-display hero-name"
              style={{ marginBottom: "0.75rem" }}
            >
              {siteConfig.name}
            </h1>

            {/* Title */}
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                color: "var(--color-sage-deep)",
                fontWeight: 400,
                marginBottom: "1rem",
              }}
            >
              {siteConfig.title}
            </div>

            {/* Employer */}
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "var(--color-secondary-text)",
                marginBottom: "1.75rem",
                letterSpacing: "0.02em",
              }}
            >
              {siteConfig.employer}
            </div>

            {/* Headline */}
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                lineHeight: 1.3,
                color: "var(--color-navy)",
                fontWeight: 400,
                fontStyle: "italic",
                marginBottom: "1.25rem",
                maxWidth: "480px",
              }}
            >
              {siteConfig.headline}
            </p>

            {/* Supporting text */}
            <p
              className="text-body"
              style={{
                maxWidth: "460px",
                marginBottom: "2.5rem",
              }}
            >
              {siteConfig.subHeadline}
            </p>

            {/* Actions */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <button
                className="btn-primary"
                onClick={() => handleScrollTo("work")}
              >
                Explore Selected Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
              <button
                className="btn-secondary"
                onClick={() => handleScrollTo("contact")}
              >
                Get in Touch
              </button>
            </div>

            {/* Scale bar decorative */}
            <div className="scale-bar" style={{ marginTop: "3rem" }}>
              Urban Planning Portfolio
            </div>
          </div>

          {/* Cartographic Illustration */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "520px",
              }}
            >
              {/* Map frame border */}
              <div
                style={{
                  position: "absolute",
                  inset: "-8px",
                  border: "1px solid var(--color-border)",
                  opacity: 0.5,
                  pointerEvents: "none",
                }}
              />
              <HeroMapIllustration
                className="w-full h-auto"
              />
              {/* Corner tick marks */}
              <svg
                style={{ position: "absolute", top: "-12px", left: "-12px" }}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <line x1="0" y1="8" x2="16" y2="8" stroke="var(--color-sage)" strokeWidth="0.5" opacity="0.4" />
                <line x1="8" y1="0" x2="8" y2="16" stroke="var(--color-sage)" strokeWidth="0.5" opacity="0.4" />
              </svg>
              <svg
                style={{ position: "absolute", bottom: "-12px", right: "-12px" }}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <line x1="0" y1="8" x2="16" y2="8" stroke="var(--color-sage)" strokeWidth="0.5" opacity="0.4" />
                <line x1="8" y1="0" x2="8" y2="16" stroke="var(--color-sage)" strokeWidth="0.5" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
