"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { projects, projectCategories, ProjectCategory, PortfolioProject } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ProjectIllustration } from "./CartographicIllustrations";

// General capabilities representing the planning disciplines when projects are undergoing publication clearance
const capabilityShowcases = [
  {
    slug: "master-zonal-planning",
    title: "Master & Zonal Development Planning",
    category: "Master & Zonal Planning" as ProjectCategory,
    visualKey: "master-plan",
    summary:
      "Formulating spatial frameworks for coordinated urban growth, area-level development controls, land-use zoning, and alignment of community infrastructure.",
    planningContext:
      "Translating broader municipal planning directives into granular, zone-level spatial regulations, development envelopes, and infrastructure networks.",
    keyFocus: [
      "Land-use zoning & development controls",
      "Urban growth boundary coordination",
      "Area-level spatial relationship analysis",
      "Infrastructure alignment integration",
    ],
  },
  {
    slug: "water-infrastructure-amrut",
    title: "Urban Water Supply Infrastructure",
    category: "Water Infrastructure" as ProjectCategory,
    visualKey: "water-supply",
    summary:
      "Spatial mapping, topographic surveying, and analytical baseline preparation supporting urban water supply networks under national urban missions.",
    planningContext:
      "Leveraging high-precision settlement mapping and topographic analysis to establish spatial foundations for distribution networks and pressure zones.",
    keyFocus: [
      "Town & topographic base mapping",
      "Settlement pattern spatial analysis",
      "DPR preparation for urban local bodies",
      "Water distribution network planning",
    ],
  },
  {
    slug: "waterway-canal-rejuvenation",
    title: "Urban Water-Body & Canal Rejuvenation",
    category: "Water Infrastructure" as ProjectCategory,
    visualKey: "water-body",
    summary:
      "Physical surveys and spatial analysis of urban canals and water bodies to understand interface conditions with surrounding urban fabric.",
    planningContext:
      "Establishing baseline physical conditions of waterways, riparian buffer zones, and adjoining land-use patterns to guide environmental planning interventions.",
    keyFocus: [
      "Urban canal corridor surveys",
      "Riparian buffer spatial analysis",
      "Adjoining land-use interface mapping",
      "Detailed project documentation",
    ],
  },
  {
    slug: "urban-flood-mitigation",
    title: "Urban Flood Mitigation & Drainage Planning",
    category: "Flood Mitigation" as ProjectCategory,
    visualKey: "flood",
    summary:
      "Technical project documentation and spatial analysis examining relationships between topography, natural drainage pathways, and urban settlements.",
    planningContext:
      "Analyzing elevation variation, low-lying catchment zones, and drainage pathways to support planning and technical documentation for flood mitigation.",
    keyFocus: [
      "Topographic variation analysis",
      "Drainage corridor mapping",
      "Urban catchment spatial evaluation",
      "DPR preparation for mitigation schemes",
    ],
  },
  {
    slug: "housing-layouts-property",
    title: "Housing Layouts & Beneficiary Planning",
    category: "Housing & Development" as ProjectCategory,
    visualKey: "housing",
    summary:
      "Housing layout analysis, spatial cluster organization, beneficiary categorisation, and allotment documentation under public housing programmes.",
    planningContext:
      "Connecting housing supply frameworks with spatial layout standards, community amenities, and administrative property allotment workflows.",
    keyFocus: [
      "Residential layout analysis",
      "Beneficiary spatial categorization",
      "Plot allocation documentation",
      "Town-planning guideline adherence",
    ],
  },
  {
    slug: "township-topographic-mapping",
    title: "Township Layout & Topographic Mapping",
    category: "Housing & Development" as ProjectCategory,
    visualKey: "township",
    summary:
      "Preparation of comprehensive topographic survey maps and planned township layout designs adhering to statutory town-planning standards.",
    planningContext:
      "Establishing baseline contours, arterial sector grids, and land-use plot allocations for planned residential townships.",
    keyFocus: [
      "Topographic base survey mapping",
      "Township sector grid layout",
      "Civic amenity & green space zoning",
      "Town-planning regulation compliance",
    ],
  },
];

export default function SelectedWork() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Check for any public-approved projects in data layer
  const approvedProjects = useMemo(() => {
    return projects.filter((p) => p.approvedForPublic);
  }, []);

  // Filter approved projects if any exist
  const filteredApproved = useMemo(() => {
    if (selectedCategory === "All") return approvedProjects;
    return approvedProjects.filter((p) => p.category === selectedCategory);
  }, [approvedProjects, selectedCategory]);

  // Filter general capability showcases
  const filteredCapabilities = useMemo(() => {
    if (selectedCategory === "All") return capabilityShowcases;
    return capabilityShowcases.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="work"
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
            IV — Selected Work & Planning Practice
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            <h2 className="heading-section" style={{ maxWidth: "680px" }}>
              Planning practice across urban development systems.
            </h2>
            <p className="text-body" style={{ maxWidth: "640px" }}>
              Explore core project assignments and spatial planning capabilities spanning master
              planning, infrastructure mapping, water management, and urban development.
            </p>
          </div>

          {/* Category Filters */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "3rem",
            }}
            role="tablist"
            aria-label="Filter projects by planning domain"
          >
            <button
              onClick={() => setSelectedCategory("All")}
              style={{
                padding: "0.5rem 1.25rem",
                fontSize: "0.8125rem",
                fontFamily: "var(--font-body)",
                fontWeight: selectedCategory === "All" ? 600 : 400,
                letterSpacing: "0.03em",
                backgroundColor: selectedCategory === "All" ? "var(--color-navy)" : "var(--color-paper)",
                color: selectedCategory === "All" ? "var(--color-offwhite)" : "var(--color-secondary-text)",
                border: "1px solid",
                borderColor: selectedCategory === "All" ? "var(--color-navy)" : "var(--color-border)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              All Domains
            </button>
            {projectCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "0.5rem 1.25rem",
                    fontSize: "0.8125rem",
                    fontFamily: "var(--font-body)",
                    fontWeight: isSelected ? 600 : 400,
                    letterSpacing: "0.03em",
                    backgroundColor: isSelected ? "var(--color-navy)" : "var(--color-paper)",
                    color: isSelected ? "var(--color-offwhite)" : "var(--color-secondary-text)",
                    border: "1px solid",
                    borderColor: isSelected ? "var(--color-navy)" : "var(--color-border)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* If Approved Public Projects Exist, render full project case studies */}
          {approvedProjects.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "2.5rem",
                marginBottom: "4rem",
              }}
              className="lg:!grid-cols-2"
            >
              {filteredApproved.map((project: PortfolioProject) => (
                <article
                  key={project.slug}
                  className="card-elevated"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    backgroundColor: "var(--color-paper)",
                  }}
                >
                  {/* Cartographic Art Cover */}
                  <div
                    style={{
                      height: "220px",
                      backgroundColor: "var(--color-offwhite)",
                      borderBottom: "1px solid var(--color-border)",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <ProjectIllustration visualKey={project.visualKey} className="w-full h-full object-cover" />
                    <span
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        padding: "0.25rem 0.75rem",
                        backgroundColor: "var(--color-navy)",
                        color: "var(--color-offwhite)",
                        fontSize: "0.6875rem",
                        fontFamily: "var(--font-body)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Content Body */}
                  <div style={{ padding: "2rem", display: "flex", flexDirection: "column", flex: 1 }}>
                    {project.location && (
                      <div
                        style={{
                          fontSize: "0.75rem",
                          fontFamily: "var(--font-body)",
                          color: "var(--color-sage-deep)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {project.location}
                      </div>
                    )}

                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.625rem",
                        lineHeight: 1.25,
                        color: "var(--color-navy)",
                        fontWeight: 600,
                        marginBottom: "1rem",
                      }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-body" style={{ fontSize: "0.9375rem", marginBottom: "1.5rem", flex: 1 }}>
                      {project.summary}
                    </p>

                    <div style={{ paddingTop: "1.25rem", borderTop: "1px solid var(--color-border)" }}>
                      <Link
                        href={`/work/${project.slug}`}
                        className="btn-secondary"
                        style={{ width: "100%", justifyContent: "center" }}
                      >
                        View Case Study
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Practice & Domain Capabilities Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
            className="md:!grid-cols-2 lg:!grid-cols-3"
          >
            {filteredCapabilities.map((showcase) => (
              <div
                key={showcase.slug}
                className="card-elevated"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "var(--color-paper)",
                  overflow: "hidden",
                }}
              >
                {/* Cartographic Visual Header */}
                <div
                  style={{
                    height: "170px",
                    backgroundColor: "rgba(243, 240, 233, 0.7)",
                    borderBottom: "1px solid var(--color-border)",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <ProjectIllustration visualKey={showcase.visualKey} className="w-full h-full object-cover" />
                  <span
                    style={{
                      position: "absolute",
                      top: "0.75rem",
                      left: "0.75rem",
                      padding: "0.25rem 0.625rem",
                      backgroundColor: "var(--color-navy)",
                      color: "var(--color-offwhite)",
                      fontSize: "0.6875rem",
                      fontFamily: "var(--font-body)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {showcase.category}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
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
                    {showcase.title}
                  </h3>

                  <p
                    className="text-body"
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {showcase.summary}
                  </p>

                  {/* Planning focus bullet list */}
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "1.25rem",
                      borderTop: "1px dashed var(--color-border)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.6875rem",
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--color-sage-deep)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Technical & Planning Focus
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {showcase.keyFocus.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.5rem",
                            fontSize: "0.8125rem",
                            color: "var(--color-secondary-text)",
                            marginBottom: "0.35rem",
                            lineHeight: 1.45,
                          }}
                        >
                          <span style={{ color: "var(--color-sage-deep)", marginTop: "2px" }}>·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial Confidentiality & Inquiries Notice */}
          <div
            style={{
              marginTop: "3.5rem",
              padding: "1.75rem 2rem",
              backgroundColor: "var(--color-paper)",
              border: "1px solid var(--color-border)",
              borderLeft: "3px solid var(--color-sage)",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.125rem",
                color: "var(--color-navy)",
                fontWeight: 600,
              }}
            >
              Institutional Planning Dossiers & Case Studies
            </div>
            <p
              className="text-body"
              style={{
                fontSize: "0.875rem",
                margin: 0,
                color: "var(--color-secondary-text)",
              }}
            >
              In accordance with project confidentiality and public-sector client clearance
              guidelines, specific institutional deliverables, technical drawings, and DPR documentation
              are presented during professional interviews or shared upon verification. To discuss
              assignments in detail, please reach out via the{" "}
              <a
                href="#contact"
                style={{
                  color: "var(--color-navy)",
                  textDecoration: "underline",
                  fontWeight: 500,
                }}
              >
                contact section
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
