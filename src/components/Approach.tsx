"use client";

import React from "react";
import { approachSteps } from "@/data/professional";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Approach() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="approach"
      className="section-paper"
      style={{
        paddingTop: "var(--spacing-section)",
        paddingBottom: "var(--spacing-section)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle topographic & spatial framework watermark along edges */}
      <div
        aria-hidden="true"
        className="map-watermark-layer section-map-edges"
        style={{
          backgroundImage: "url('/maps/topographic-contours.svg')",
          backgroundSize: "cover",
          backgroundPosition: "left bottom",
          opacity: 0.22,
          transform: "scaleX(-1)",
        }}
      />

      <div className="container-content" style={{ position: "relative", zIndex: 2 }}>
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
            V — Professional Approach
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "3.5rem",
            }}
          >
            <h2 className="heading-section" style={{ maxWidth: "680px" }}>
              From spatial understanding to planning decisions.
            </h2>
            <p className="text-body" style={{ maxWidth: "600px" }}>
              A methodical framework connecting physical context, geospatial evidence, and
              rigorous technical documentation to guide urban planning interventions.
            </p>
          </div>

          <div className="section-divider" style={{ marginBottom: "3.5rem" }} />

          {/* 4 Interconnected Framework Stages */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.5rem",
              position: "relative",
            }}
            className="md:!grid-cols-2 lg:!grid-cols-4"
          >
            {approachSteps.map((step, index) => (
              <div
                key={step.number}
                className="card-elevated"
                style={{
                  padding: "2rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  backgroundColor: "var(--color-paper)",
                }}
              >
                {/* Connecting arrow indicator between steps on desktop */}
                {index < 3 && (
                  <div
                    style={{
                      display: "none",
                      position: "absolute",
                      right: "-0.875rem",
                      top: "2.5rem",
                      zIndex: 2,
                      width: "1.5rem",
                      height: "1.5rem",
                      backgroundColor: "var(--color-navy)",
                      color: "var(--color-offwhite)",
                      borderRadius: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.625rem",
                    }}
                    className="lg:!flex"
                    aria-hidden="true"
                  >
                    →
                  </div>
                )}

                <div>
                  {/* Step number badge */}
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      color: "var(--color-sage-deep)",
                      fontWeight: 500,
                      marginBottom: "1.25rem",
                      lineHeight: 1,
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Step title */}
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.375rem",
                      lineHeight: 1.25,
                      color: "var(--color-navy)",
                      fontWeight: 600,
                      marginBottom: "0.875rem",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Step description */}
                  <p
                    className="text-body"
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.65,
                      color: "var(--color-secondary-text)",
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Sub-graphic indicator */}
                <div
                  style={{
                    marginTop: "1.5rem",
                    paddingTop: "1rem",
                    borderTop: "1px dashed var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      backgroundColor: "var(--color-sage)",
                      borderRadius: "50%",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontFamily: "var(--font-body)",
                      color: "var(--color-sage-deep)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Stage {step.number}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
