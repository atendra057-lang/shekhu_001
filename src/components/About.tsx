"use client";

import React from "react";
import { AboutBackgroundMap } from "./CartographicIllustrations";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      className="section-offwhite"
      style={{
        paddingTop: "var(--spacing-section)",
        paddingBottom: "var(--spacing-section)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background map */}
      <AboutBackgroundMap
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="container-content" style={{ position: "relative", zIndex: 2 }}>
        <div ref={ref} style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>
          {/* Section number */}
          <div className="section-number" style={{ marginBottom: "1rem" }}>
            II — About
          </div>

          {/* Heading */}
          <h2
            className="heading-section"
            style={{
              maxWidth: "600px",
              marginBottom: "3rem",
            }}
          >
            Understanding cities through space, systems, and evidence.
          </h2>

          <div className="section-divider" style={{ marginBottom: "3rem" }} />

          {/* Two-column text layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
            className="md:!grid-cols-2"
          >
            <div>
              <p className="text-body" style={{ marginBottom: "1.5rem" }}>
                Abhishek Maurya is an urban-planning professional with experience
                in urban development planning, master planning, zonal planning,
                geospatial analysis, surveying, and infrastructure-related project
                documentation.
              </p>
              <p className="text-body">
                His professional assignments have included work associated with
                urban development plans, AMRUT 2.0 water supply projects,
                water-body rejuvenation, and urban flood-mitigation initiatives.
              </p>
            </div>
            <div>
              <p className="text-body" style={{ marginBottom: "1.5rem" }}>
                His technical experience includes GIS mapping, preparation of
                town and topographic maps, surveying, spatial analysis, and
                Detailed Project Report preparation.
              </p>
              <p className="text-body">
                He brings together planning knowledge, technical documentation,
                and communication skills developed through professional
                assignments involving urban infrastructure, public-sector
                planning initiatives, and coordination with different
                stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
