"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ContactMapBackground } from "./CartographicIllustrations";

export default function Contact() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteConfig.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="section-dark"
      style={{
        paddingTop: "var(--spacing-section)",
        paddingBottom: "var(--spacing-section)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dark Cartographic Background */}
      <ContactMapBackground className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40" />

      <div className="container-content" style={{ position: "relative", zIndex: 2 }}>
        <div
          ref={ref}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
            maxWidth: "760px",
          }}
        >
          {/* Section Number */}
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.875rem",
              color: "var(--color-sage-light)",
              letterSpacing: "0.05em",
              marginBottom: "1rem",
            }}
          >
            XI — Contact & Inquiries
          </div>

          {/* Heading */}
          <h2
            className="heading-display-light"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            Let's connect on urban planning.
          </h2>

          {/* Supporting Copy */}
          <p
            className="text-body-light"
            style={{
              fontSize: "clamp(1.0625rem, 2vw, 1.25rem)",
              lineHeight: 1.7,
              marginBottom: "3rem",
              maxWidth: "620px",
            }}
          >
            For professional enquiries, planning-related discussions, and opportunities to collaborate.
          </p>

          <div
            style={{
              width: "100%",
              height: "1px",
              background: "linear-gradient(90deg, var(--color-border-dark) 0%, rgba(42, 62, 79, 0.4) 100%)",
              marginBottom: "3rem",
            }}
          />

          {/* Contact Details Card */}
          <div
            style={{
              backgroundColor: "rgba(16, 40, 59, 0.8)",
              border: "1px solid var(--color-border-dark)",
              padding: "2.5rem 2rem",
              backdropFilter: "blur(6px)",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
            className="sm:!flex-row sm:!items-center sm:!justify-between"
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  color: "var(--color-offwhite)",
                  fontWeight: 600,
                  marginBottom: "0.25rem",
                }}
              >
                {siteConfig.name}
              </div>
              <div
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--color-sage-light)",
                  fontFamily: "var(--font-body)",
                  marginBottom: "1rem",
                }}
              >
                {siteConfig.title} · {siteConfig.employer}
              </div>

              {/* Functional Phone Number */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <a
                  href={siteConfig.phoneTel}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    color: "var(--color-offwhite)",
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                  }}
                  className="hover:!text-sage-light"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href={siteConfig.phoneTel}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  backgroundColor: "var(--color-sage-deep)",
                  color: "var(--color-paper)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                className="hover:!bg-sage"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M2.5 3.5a1 1 0 011-1h2a1 1 0 011 .8 7.2 7.2 0 00.5 1.7 1 1 0 01-.3 1L5.5 7.2a9.6 9.6 0 003.3 3.3l1.2-1.2a1 1 0 011-.3c.6.1 1.2.3 1.7.5a1 1 0 01.8 1v2a1 1 0 01-1 1A11.5 11.5 0 012.5 3.5z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
                Call Now
              </a>

              <button
                onClick={handleCopyPhone}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.75rem",
                  backgroundColor: "transparent",
                  color: "var(--color-offwhite)",
                  border: "1px solid var(--color-border-dark)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                className="hover:!border-sage hover:!text-sage-light"
              >
                {copied ? "Copied to Clipboard!" : "Copy Phone Number"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
