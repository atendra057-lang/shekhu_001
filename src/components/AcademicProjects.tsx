"use client";

import React from "react";
import { academicProjects, participation } from "@/data/professional";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AcademicProjects() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="academic"
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
            X — Academic Planning Focus & National Participation
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
              Academic planning studios and national professional involvement.
            </h2>
            <p className="text-body" style={{ maxWidth: "600px" }}>
              Core studio project domains completed during planning education alongside
              participation in the National Organisation of Students of Planning (NOSPlan).
            </p>
          </div>

          <div className="section-divider" style={{ marginBottom: "3.5rem" }} />

          {/* Two Columns: Academic Studios (Left) & NOSPlan Participation (Right) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
            className="lg:!grid-cols-2"
          >
            {/* Column 1: Academic Planning Studios */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    color: "var(--color-navy)",
                    fontWeight: 600,
                  }}
                >
                  Academic Planning Studio Areas
                </span>
                <div style={{ flex: 1, height: "1px", backgroundColor: "var(--color-border)" }} />
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1rem",
                }}
                className="sm:!grid-cols-2"
              >
                {academicProjects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="card-elevated"
                    style={{
                      padding: "1.25rem 1.5rem",
                      backgroundColor: "var(--color-paper)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.875rem",
                        color: "var(--color-sage-deep)",
                        fontWeight: 600,
                      }}
                    >
                      0{idx + 1}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                        color: "var(--color-navy)",
                      }}
                    >
                      {proj.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: NOSPlan Participation */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    color: "var(--color-navy)",
                    fontWeight: 600,
                  }}
                >
                  National Participation (NOSPlan)
                </span>
                <div style={{ flex: 1, height: "1px", backgroundColor: "var(--color-border)" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {participation.map((part, idx) => (
                  <div
                    key={idx}
                    className="card-elevated"
                    style={{
                      padding: "1.25rem 1.75rem",
                      backgroundColor: "var(--color-paper)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.25rem",
                          color: "var(--color-navy)",
                          fontWeight: 600,
                          marginBottom: "0.25rem",
                        }}
                      >
                        {part.event}
                      </div>
                      <div
                        style={{
                          fontSize: "0.875rem",
                          fontFamily: "var(--font-body)",
                          color: "var(--color-secondary-text)",
                        }}
                      >
                        National Organisation of Students of Planning
                      </div>
                    </div>

                    <span
                      style={{
                        padding: "0.3rem 0.75rem",
                        backgroundColor: "var(--color-offwhite)",
                        border: "1px solid var(--color-border)",
                        fontSize: "0.8125rem",
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        color: "var(--color-sage-deep)",
                      }}
                    >
                      {part.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
