"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HeroMapIllustration } from "./CartographicIllustrations";

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
        paddingTop: "5.5rem",
        paddingBottom: "4rem",
      }}
    >
      {/* Large-scale Urban Planning & Street Network Background Watermark */}
      <HeroMapIllustration />

      <div className="container-wide" style={{ width: "100%", position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="lg:!grid-cols-2"
        >
          {/* Text Content */}
          <div
            style={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            {/* Focus areas pill label */}
            <div className="text-label" style={{ marginBottom: "1.5rem" }}>
              {siteConfig.focusAreas.join(" · ")}
            </div>

            {/* Name */}
            <h1
              className="heading-display hero-name"
              style={{ marginBottom: "0.5rem" }}
            >
              {siteConfig.name}
            </h1>

            {/* Title */}
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.375rem, 3vw, 1.875rem)",
                color: "var(--color-sage-deep)",
                fontWeight: 500,
                marginBottom: "0.75rem",
              }}
            >
              {siteConfig.title}
            </div>

            {/* Current Employer */}
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "var(--color-secondary-text)",
                marginBottom: "2rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {siteConfig.employer}
            </div>

            {/* Headline */}
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3.2vw, 2.125rem)",
                lineHeight: 1.25,
                color: "var(--color-navy)",
                fontWeight: 500,
                fontStyle: "italic",
                marginBottom: "1.5rem",
                maxWidth: "520px",
              }}
            >
              "{siteConfig.headline}"
            </p>

            {/* Supporting text */}
            <p
              className="text-body"
              style={{
                maxWidth: "480px",
                marginBottom: "2.5rem",
                fontSize: "1.0625rem",
              }}
            >
              {siteConfig.subHeadline}
            </p>

            {/* Call to action buttons */}
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

            {/* Scale bar decorative element */}
            <div className="scale-bar" style={{ marginTop: "3rem" }}>
              Urban Planning Portfolio · Spatial Clarity
            </div>
          </div>

          {/* Hero Portrait with Architectural / Cartographic Frame */}
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
                maxWidth: "480px",
              }}
            >
              {/* Offset cartographic sheet plate behind portrait */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: "-26px -22px -22px -26px",
                  backgroundColor: "rgba(243, 240, 233, 0.55)",
                  backgroundImage: "url('/maps/land-use-zoning.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "1px dashed rgba(129, 144, 122, 0.35)",
                  opacity: 0.45,
                  pointerEvents: "none",
                }}
              />

              {/* Outer architectural registration frame */}
              <div
                style={{
                  position: "absolute",
                  inset: "-14px",
                  border: "1px solid var(--color-border)",
                  backgroundColor: "rgba(250, 249, 245, 0.35)",
                  opacity: 0.85,
                  pointerEvents: "none",
                }}
              />

              {/* Corner registration ticks */}
              <svg
                style={{ position: "absolute", top: "-20px", left: "-20px" }}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <line x1="0" y1="10" x2="20" y2="10" stroke="var(--color-sage)" strokeWidth="0.8" opacity="0.6" />
                <line x1="10" y1="0" x2="10" y2="20" stroke="var(--color-sage)" strokeWidth="0.8" opacity="0.6" />
              </svg>

              <svg
                style={{ position: "absolute", top: "-20px", right: "-20px" }}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <line x1="0" y1="10" x2="20" y2="10" stroke="var(--color-sage)" strokeWidth="0.8" opacity="0.6" />
                <line x1="10" y1="0" x2="10" y2="20" stroke="var(--color-sage)" strokeWidth="0.8" opacity="0.6" />
              </svg>

              <svg
                style={{ position: "absolute", bottom: "-20px", left: "-20px" }}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <line x1="0" y1="10" x2="20" y2="10" stroke="var(--color-sage)" strokeWidth="0.8" opacity="0.6" />
                <line x1="10" y1="0" x2="10" y2="20" stroke="var(--color-sage)" strokeWidth="0.8" opacity="0.6" />
              </svg>

              <svg
                style={{ position: "absolute", bottom: "-20px", right: "-20px" }}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <line x1="0" y1="10" x2="20" y2="10" stroke="var(--color-sage)" strokeWidth="0.8" opacity="0.6" />
                <line x1="10" y1="0" x2="10" y2="20" stroke="var(--color-sage)" strokeWidth="0.8" opacity="0.6" />
              </svg>

              {/* Portrait Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "3/4",
                  overflow: "hidden",
                  backgroundColor: "var(--color-navy)",
                  border: "1px solid var(--color-navy)",
                  boxShadow: "0 16px 40px rgba(16, 40, 59, 0.14)",
                }}
              >
                <Image
                  src="/abhishek-maurya.jpg"
                  alt="Abhishek Maurya — Urban Planner"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                  priority
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />

                {/* Subtle base vignette */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(9, 29, 45, 0.7) 0%, rgba(9, 29, 45, 0.1) 30%, transparent 60%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Floating caption card */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.25rem",
                    left: "1.25rem",
                    right: "1.25rem",
                    padding: "1rem 1.25rem",
                    backgroundColor: "rgba(16, 40, 59, 0.92)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(216, 213, 204, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.125rem",
                        color: "var(--color-offwhite)",
                        fontWeight: 600,
                        lineHeight: 1.2,
                        marginBottom: "0.2rem",
                      }}
                    >
                      Abhishek Maurya
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.75rem",
                        color: "var(--color-sage-light)",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      Urban Planner · Stesalit Private Limited
                    </div>
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.6875rem",
                      color: "rgba(243, 240, 233, 0.6)",
                      letterSpacing: "0.08em",
                      textAlign: "right",
                      borderLeft: "1px solid rgba(216, 213, 204, 0.2)",
                      paddingLeft: "0.875rem",
                    }}
                  >
                    PLANNING<br />STUDIO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
