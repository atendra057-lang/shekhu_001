"use client";

import React from "react";
import { expertiseDomains } from "@/data/professional";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  ExpertiseBackgroundMap,
  MasterPlanGraphic,
  GISLayersGraphic,
  WaterInfraGraphic,
  ZonalPlanningGraphic,
  FloodMitigationGraphic,
  DPRDocumentationGraphic,
  RegionalCoordinationGraphic,
} from "./CartographicIllustrations";

const cardMapTextures = [
  { src: "/maps/land-use-zoning.svg", pos: "right top" },
  { src: "/maps/gis-spatial-boundaries.svg", pos: "center" },
  { src: "/maps/waterway-infrastructure.svg", pos: "left center" },
  { src: "/maps/topographic-contours.svg", pos: "right bottom" },
  { src: "/maps/neighbourhood-layout.svg", pos: "center top" },
  { src: "/maps/urban-street-network.svg", pos: "right center" },
];

export default function Expertise() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const renderDomainGraphic = (index: number) => {
    switch (index) {
      case 0:
        return <ZonalPlanningGraphic className="w-full h-28 object-cover" />;
      case 1:
        return <GISLayersGraphic className="w-full h-28 object-cover" />;
      case 2:
        return <WaterInfraGraphic className="w-full h-28 object-cover" />;
      case 3:
        return <FloodMitigationGraphic className="w-full h-28 object-cover" />;
      case 4:
        return <MasterPlanGraphic className="w-full h-28 object-cover" />;
      case 5:
        return <RegionalCoordinationGraphic className="w-full h-28 object-cover" />;
      default:
        return <DPRDocumentationGraphic className="w-full h-28 object-cover" />;
    }
  };

  return (
    <section
      id="expertise"
      className="section-paper"
      style={{
        paddingTop: "var(--spacing-section)",
        paddingBottom: "var(--spacing-section)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle section-wide GIS & Spatial Boundary Map Watermark */}
      <ExpertiseBackgroundMap />

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

          {/* 6 Planning Domains with bespoke GIS & cartographic layers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
            className="md:!grid-cols-2 lg:!grid-cols-3"
          >
            {expertiseDomains.map((domain, index) => {
              const bgTex = cardMapTextures[index % cardMapTextures.length];

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
                    backgroundColor: "rgba(250, 249, 245, 0.94)",
                    borderTop:
                      index === 0 || index === 1
                        ? "2px solid var(--color-navy)"
                        : undefined,
                  }}
                >
                  {/* Subtle printed map watermark in upper card surface */}
                  <div
                    className="card-map-watermark"
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "75%",
                      height: "65%",
                      backgroundImage: `url('${bgTex.src}')`,
                      backgroundSize: "cover",
                      backgroundPosition: bgTex.pos,
                      opacity: 0.14,
                      pointerEvents: "none",
                    }}
                  />

                  {/* Top metadata row & copy */}
                  <div style={{ position: "relative", zIndex: 1 }}>
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
                        marginBottom: "1.5rem",
                      }}
                    >
                      {domain.description}
                    </p>
                  </div>

                  {/* Domain-specific cartographic diagram strip */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      marginTop: "auto",
                      paddingTop: "1rem",
                      borderTop: "1px dashed var(--color-border)",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "rgba(243, 240, 233, 0.55)",
                        border: "1px solid rgba(208, 205, 197, 0.6)",
                        overflow: "hidden",
                      }}
                    >
                      {renderDomainGraphic(index)}
                    </div>
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
