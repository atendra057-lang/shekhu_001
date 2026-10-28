"use client";

import React, { useState } from "react";
import { experience } from "@/data/professional";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Experience() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(1); // Default expand NCPE since it has many items

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
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
            VII — Career History
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
              Professional experience across urban planning practice.
            </h2>
            <p className="text-body" style={{ maxWidth: "600px" }}>
              A career record spanning corporate infrastructure consultancy, statutory development
              authorities, public-sector housing initiatives, and ongoing urban planning assignments.
            </p>
          </div>

          <div className="section-divider" style={{ marginBottom: "3.5rem" }} />

          {/* Refined Editorial Timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {experience.map((entry, index) => {
              const isCurrent = index === 0;
              const isExpanded = expandedIndex === index || entry.responsibilities.length <= 4;
              const hasManyItems = entry.responsibilities.length > 4;

              return (
                <div
                  key={index}
                  className="card-elevated"
                  style={{
                    padding: "2.25rem 2.5rem",
                    backgroundColor: isCurrent ? "var(--color-offwhite)" : "var(--color-paper)",
                    borderLeft: isCurrent ? "4px solid var(--color-navy)" : "1px solid var(--color-border)",
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Header Row: Role, Organization, Location, Period */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      marginBottom: "1.75rem",
                    }}
                    className="md:!flex-row md:!items-baseline md:!justify-between"
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          marginBottom: "0.25rem",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.75rem",
                            color: "var(--color-navy)",
                            fontWeight: 600,
                            lineHeight: 1.2,
                          }}
                        >
                          {entry.role}
                        </h3>
                        {isCurrent && (
                          <span
                            style={{
                              padding: "0.2rem 0.6rem",
                              backgroundColor: "var(--color-navy)",
                              color: "var(--color-offwhite)",
                              fontSize: "0.6875rem",
                              fontFamily: "var(--font-body)",
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              fontWeight: 500,
                            }}
                          >
                            Current
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          fontSize: "1.0625rem",
                          color: "var(--color-sage-deep)",
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                        }}
                      >
                        {entry.organisation}
                        {entry.location && ` · ${entry.location}`}
                      </div>
                    </div>

                    {/* Period badge */}
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "var(--color-secondary-text)",
                        letterSpacing: "0.04em",
                        fontWeight: 500,
                        backgroundColor: "rgba(16, 40, 59, 0.05)",
                        padding: "0.35rem 0.875rem",
                        alignSelf: "flex-start",
                      }}
                    >
                      {entry.period}
                    </div>
                  </div>

                  {/* Documented Responsibilities */}
                  <div style={{ marginBottom: "1rem" }}>
                    <div
                      style={{
                        fontSize: "0.6875rem",
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--color-secondary-text)",
                        marginBottom: "1rem",
                      }}
                    >
                      Documented Scope & Assignments
                    </div>

                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.75rem",
                      }}
                    >
                      {(isExpanded
                        ? entry.responsibilities
                        : entry.responsibilities.slice(0, 3)
                      ).map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.75rem",
                            fontSize: "0.9375rem",
                            lineHeight: 1.6,
                            color: "var(--color-dark-text)",
                          }}
                        >
                          <span
                            style={{
                              color: "var(--color-sage-deep)",
                              fontSize: "1.125rem",
                              lineHeight: 1,
                              marginTop: "0.2rem",
                            }}
                          >
                            ·
                          </span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expand/Collapse Toggle if many items */}
                    {hasManyItems && (
                      <button
                        onClick={() => toggleExpand(index)}
                        style={{
                          marginTop: "1.25rem",
                          background: "none",
                          border: "none",
                          padding: 0,
                          fontSize: "0.8125rem",
                          fontFamily: "var(--font-body)",
                          fontWeight: 600,
                          color: "var(--color-navy)",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                        }}
                      >
                        {isExpanded ? "Show fewer responsibilities ↑" : `Show all ${entry.responsibilities.length} assignments ↓`}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
