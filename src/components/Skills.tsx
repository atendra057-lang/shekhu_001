"use client";

import React from "react";
import { technicalSkills } from "@/data/professional";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Skills() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="skills"
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
            VIII — Technical Competencies
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
              Technical toolsets, geospatial software, and documentation capabilities.
            </h2>
            <p className="text-body" style={{ maxWidth: "600px" }}>
              Practical proficiency across GIS platforms, computer-aided drafting, topographic
              surveying, and statutory planning documentation.
            </p>
          </div>

          <div className="section-divider" style={{ marginBottom: "3.5rem" }} />

          {/* 4 Skill Categories Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
            className="md:!grid-cols-2 lg:!grid-cols-4"
          >
            {technicalSkills.map((category, index) => (
              <div
                key={category.category}
                className="card-elevated"
                style={{
                  padding: "2rem 1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "var(--color-paper)",
                }}
              >
                {/* Category header */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      fontSize: "0.6875rem",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-sage-deep)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Tool Domain 0{index + 1}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.375rem",
                      color: "var(--color-navy)",
                      fontWeight: 600,
                      lineHeight: 1.25,
                    }}
                  >
                    {category.category}
                  </h3>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "var(--color-border)",
                    marginBottom: "1.5rem",
                  }}
                />

                {/* Skill badges / pills list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      style={{
                        padding: "0.625rem 0.875rem",
                        backgroundColor: "var(--color-offwhite)",
                        border: "1px solid var(--color-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                          color: "var(--color-dark-text)",
                        }}
                      >
                        {skill}
                      </span>
                      <div
                        style={{
                          width: "0.375rem",
                          height: "0.375rem",
                          borderRadius: "50%",
                          backgroundColor: "var(--color-sage)",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
