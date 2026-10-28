"use client";

import React from "react";
import { education } from "@/data/professional";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Education() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="education"
      className="section-paper"
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
            IX — Academic Qualifications
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
              Academic foundations in urban planning and technology.
            </h2>
            <p className="text-body" style={{ maxWidth: "600px" }}>
              Formal higher education grounding spatial planning theory, technical infrastructure,
              and regional development methodologies.
            </p>
          </div>

          <div className="section-divider" style={{ marginBottom: "3.5rem" }} />

          {/* Two-Card Editorial Layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
            className="md:!grid-cols-2"
          >
            {education.map((item, index) => (
              <div
                key={index}
                className="card-elevated"
                style={{
                  padding: "2.5rem 2rem",
                  backgroundColor: "var(--color-paper)",
                  borderTop: "3px solid var(--color-navy)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {/* Abbreviation Badge */}
                  <div
                    style={{
                      display: "inline-block",
                      padding: "0.25rem 0.75rem",
                      backgroundColor: "var(--color-offwhite)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-sage-deep)",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {item.abbreviation}
                  </div>

                  {/* Degree Name */}
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      lineHeight: 1.25,
                      color: "var(--color-navy)",
                      fontWeight: 600,
                      marginBottom: "0.875rem",
                    }}
                  >
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <div
                    style={{
                      fontSize: "1.0625rem",
                      color: "var(--color-secondary-text)",
                      fontFamily: "var(--font-body)",
                      lineHeight: 1.5,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {item.institution}
                  </div>
                </div>

                {/* Decorative scale mark */}
                <div
                  style={{
                    paddingTop: "1.25rem",
                    borderTop: "1px dashed var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontFamily: "var(--font-body)",
                      color: "var(--color-sage)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Formal Urban Planning Degree
                  </span>
                  <div
                    style={{
                      width: "1rem",
                      height: "1px",
                      backgroundColor: "var(--color-sage)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
