"use client";

import React from "react";
import { expertiseDomains } from "@/data/professional";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  MasterPlanGraphic,
  GISLayersGraphic,
  WaterInfraGraphic,
  ZonalPlanningGraphic,
} from "./CartographicIllustrations";

export default function Expertise() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="expertise"
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
            III — Professional Expertise
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
              Planning expertise, grounded in spatial understanding.
            </h2>
            <p className="text-body" style={{ maxWidth: "580px" }}>
              Core areas of professional capability across urban development, spatial
              analysis, technical project documentation, and inter-stakeholder coordination.
            </p>
          </div>

          <div className="section-divider" style={{ marginBottom: "3.5rem" }} />

          {/* Varied Grid Layout: Featured Large Domains + Structured Secondary Domains */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
            className="md:!grid-cols-2 lg:!grid-cols-3"
          >
            {expertiseDomains.map((domain, index) => {
              // Asymmetric composition with integrated cartographic visuals for specific domains
              const hasIllustration = index === 0 || index === 1 || index === 2 || index === 4;

              return (
                <div
                  key={domain.number}
                  className="card-elevated"
                  style={{
                    padding: "2.25rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                    borderTop: index === 0 || index === 1 ? "2px solid var(--color-navy)" : undefined,
                  }}
                >
                  {/* Top metadata row */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "1.75rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.5rem",
                          fontWeight: 500,
                          color: "var(--color-sage-deep)",
                        }}
                      >
                        {domain.number}
                      </span>
                      <div
                        style={{
                          width: "2.5rem",
                          height: "1px",
                          backgroundColor: "var(--color-border)",
                        }}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.5rem",
                        lineHeight: 1.25,
                        color: "var(--color-navy)",
                        fontWeight: 600,
                        marginBottom: "1rem",
                      }}
                    >
                      {domain.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-body"
                      style={{
                        fontSize: "0.9375rem",
                        lineHeight: 1.65,
                        marginBottom: hasIllustration ? "1.5rem" : "0",
                      }}
                    >
                      {domain.description}
                    </p>
                  </div>

                  {/* Cartographic visual motif for spatial domains */}
                  {index === 0 && (
                    <div
                      style={{
                        marginTop: "1.5rem",
                        paddingTop: "1.25rem",
                        borderTop: "1px dashed var(--color-border)",
                      }}
                    >
                      <ZonalPlanningGraphic className="w-full h-24 object-contain" />
                    </div>
                  )}

                  {index === 1 && (
                    <div
                      style={{
                        marginTop: "1.5rem",
                        paddingTop: "1.25rem",
                        borderTop: "1px dashed var(--color-border)",
                      }}
                    >
                      <GISLayersGraphic className="w-full h-24 object-contain" />
                    </div>
                  )}

                  {index === 2 && (
                    <div
                      style={{
                        marginTop: "1.5rem",
                        paddingTop: "1.25rem",
                        borderTop: "1px dashed var(--color-border)",
                      }}
                    >
                      <WaterInfraGraphic className="w-full h-24 object-contain" />
                    </div>
                  )}

                  {index === 4 && (
                    <div
                      style={{
                        marginTop: "1.5rem",
                        paddingTop: "1.25rem",
                        borderTop: "1px dashed var(--color-border)",
                      }}
                    >
                      <MasterPlanGraphic className="w-full h-24 object-contain" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
