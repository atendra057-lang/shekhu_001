"use client";

import React from "react";
import { professionalHighlights } from "@/data/professional";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Highlights() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="highlights"
      className="section-offwhite"
      style={{
        paddingTop: "var(--spacing-section)",
        paddingBottom: "var(--spacing-section)",
        position: "relative",
      }}
    >
      <div className="container-content">
        <div
          ref={ref}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Section Number & Heading */}
          <div className="section-number" style={{ marginBottom: "1rem" }}>
            VI — Practice Highlights
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "3.5rem",
            }}
          >
            <h2 className="heading-section" style={{ maxWidth: "700px" }}>
              Professional experience across urban development systems.
            </h2>
            <p className="text-body" style={{ maxWidth: "600px" }}>
              Contribution-based professional foundations developed across regional master planning,
              water infrastructure missions, flood mitigation, and housing programs.
            </p>
          </div>

          <div className="section-divider" style={{ marginBottom: "3.5rem" }} />

          {/* Editorial Grid of Highlights */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.5rem",
            }}
            className="md:!grid-cols-2 lg:!grid-cols-3"
          >
            {professionalHighlights.map((highlight, index) => (
              <div
                key={index}
                className="card-elevated"
                style={{
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "var(--color-paper)",
                  borderLeft: "3px solid var(--color-navy)",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.125rem",
                      color: "var(--color-sage-deep)",
                      fontWeight: 500,
                      marginBottom: "0.75rem",
                    }}
                  >
                    0{index + 1}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      lineHeight: 1.4,
                      color: "var(--color-navy)",
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {highlight}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "1.5rem",
                    width: "2rem",
                    height: "1px",
                    backgroundColor: "var(--color-border)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
