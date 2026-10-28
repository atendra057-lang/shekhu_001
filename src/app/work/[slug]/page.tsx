import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects, getProjectBySlug, getPublicProjects, PortfolioProject } from "@/data/projects";
import { ProjectIllustration } from "@/components/CartographicIllustrations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  // Return all potential slugs so Next.js build validation succeeds
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Abhishek Maurya",
    };
  }

  return {
    title: `${project.title} | Abhishek Maurya — Urban Planner`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // Strictly enforce the prompt's publication permission rule
  if (!project || !project.approvedForPublic) {
    notFound();
  }

  const publicProjects = getPublicProjects();
  const currentIndex = publicProjects.findIndex((p) => p.slug === slug);
  const nextProject =
    publicProjects.length > 1
      ? publicProjects[(currentIndex + 1) % publicProjects.length]
      : null;

  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "var(--color-paper)",
          paddingTop: "6rem",
          paddingBottom: "5rem",
        }}
      >
        <article className="container-content">
          {/* Breadcrumb navigation */}
          <div style={{ marginBottom: "2.5rem" }}>
            <Link
              href="/#work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--color-sage-deep)",
                fontSize: "0.875rem",
                fontFamily: "var(--font-body)",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              Back to Selected Work
            </Link>
          </div>

          {/* Header Metadata */}
          <header style={{ marginBottom: "3rem" }}>
            <div className="section-number" style={{ marginBottom: "0.75rem" }}>
              Case Study — {project.category}
            </div>

            <h1
              className="heading-display"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                lineHeight: 1.15,
                color: "var(--color-navy)",
                marginBottom: "1.5rem",
                maxWidth: "850px",
              }}
            >
              {project.title}
            </h1>

            {/* Project metadata pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                padding: "1.25rem 0",
                borderTop: "1px solid var(--color-border)",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {project.location && (
                <div>
                  <div className="text-label" style={{ marginBottom: "0.25rem" }}>Location</div>
                  <div style={{ fontSize: "0.9375rem", color: "var(--color-dark-text)", fontWeight: 500 }}>
                    {project.location}
                  </div>
                </div>
              )}
              {project.organisation && (
                <div>
                  <div className="text-label" style={{ marginBottom: "0.25rem" }}>Organisation</div>
                  <div style={{ fontSize: "0.9375rem", color: "var(--color-dark-text)", fontWeight: 500 }}>
                    {project.organisation}
                  </div>
                </div>
              )}
              {project.role && (
                <div>
                  <div className="text-label" style={{ marginBottom: "0.25rem" }}>Role</div>
                  <div style={{ fontSize: "0.9375rem", color: "var(--color-dark-text)", fontWeight: 500 }}>
                    {project.role}
                  </div>
                </div>
              )}
              {project.period && (
                <div>
                  <div className="text-label" style={{ marginBottom: "0.25rem" }}>Period</div>
                  <div style={{ fontSize: "0.9375rem", color: "var(--color-dark-text)", fontWeight: 500 }}>
                    {project.period}
                  </div>
                </div>
              )}
              <div>
                <div className="text-label" style={{ marginBottom: "0.25rem" }}>Discipline</div>
                <div style={{ fontSize: "0.9375rem", color: "var(--color-dark-text)", fontWeight: 500 }}>
                  {project.category}
                </div>
              </div>
            </div>
          </header>

          {/* Substantial Cartographic Cover Illustration */}
          <div
            style={{
              width: "100%",
              height: "360px",
              backgroundColor: "var(--color-offwhite)",
              border: "1px solid var(--color-border)",
              position: "relative",
              overflow: "hidden",
              marginBottom: "3.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ProjectIllustration visualKey={project.visualKey} className="w-full h-full object-cover" />
            <div
              className="scale-bar"
              style={{
                position: "absolute",
                bottom: "1rem",
                right: "1.5rem",
                backgroundColor: "rgba(250, 249, 245, 0.85)",
                padding: "0.35rem 0.75rem",
              }}
            >
              Illustrative Planning Diagram
            </div>
          </div>

          {/* Case Study Detailed Content Structure */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3.5rem",
            }}
            className="lg:!grid-cols-3"
          >
            {/* Main Narrative (2 cols) */}
            <div className="lg:!col-span-2" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {/* Executive Summary */}
              <section>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    color: "var(--color-navy)",
                    marginBottom: "1rem",
                  }}
                >
                  Overview & Scope
                </h2>
                <p className="text-body" style={{ fontSize: "1.0625rem", lineHeight: 1.75 }}>
                  {project.summary}
                </p>
              </section>

              {/* Planning Context */}
              {project.planningContext && (
                <section>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      color: "var(--color-navy)",
                      marginBottom: "1rem",
                    }}
                  >
                    Planning Context
                  </h2>
                  <p className="text-body" style={{ fontSize: "1.0625rem", lineHeight: 1.75 }}>
                    {project.planningContext}
                  </p>
                </section>
              )}

              {/* Documented Contributions */}
              {project.documentedContribution && project.documentedContribution.length > 0 && (
                <section>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.75rem",
                      color: "var(--color-navy)",
                      marginBottom: "1rem",
                    }}
                  >
                    Documented Technical Contribution
                  </h2>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {project.documentedContribution.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.75rem",
                          padding: "1rem 1.25rem",
                          backgroundColor: "var(--color-offwhite)",
                          borderLeft: "2px solid var(--color-sage-deep)",
                          fontSize: "0.9375rem",
                          color: "var(--color-dark-text)",
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{ color: "var(--color-sage-deep)", fontWeight: 600 }}>0{idx + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Sidebar (1 col) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* Relevant Concepts Box */}
              {project.relevantConcepts && project.relevantConcepts.length > 0 && (
                <div
                  style={{
                    padding: "1.75rem",
                    backgroundColor: "var(--color-offwhite)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div className="text-label" style={{ marginBottom: "1rem" }}>
                    Relevant Concepts
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {project.relevantConcepts.map((concept, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: "0.35rem 0.75rem",
                          backgroundColor: "var(--color-paper)",
                          border: "1px solid var(--color-border)",
                          fontSize: "0.8125rem",
                          fontFamily: "var(--font-body)",
                          color: "var(--color-dark-text)",
                        }}
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Confidentiality Notice */}
              <div
                style={{
                  padding: "1.5rem",
                  border: "1px dashed var(--color-border)",
                  fontSize: "0.8125rem",
                  color: "var(--color-secondary-text)",
                  lineHeight: 1.6,
                }}
              >
                <div style={{ fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.25rem" }}>
                  Institutional Review Notice
                </div>
                Presented in accordance with public-sector planning documentation clearance. Project
                deliverables and technical appendices remain subject to client verification protocols.
              </div>
            </div>
          </div>

          {/* Navigation to next project */}
          {nextProject && (
            <div
              style={{
                marginTop: "5rem",
                paddingTop: "2.5rem",
                borderTop: "1px solid var(--color-border)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div className="text-label">Next Project</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-navy)" }}>
                  {nextProject.title}
                </div>
              </div>
              <Link href={`/work/${nextProject.slug}`} className="btn-secondary">
                View Project
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </Link>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
