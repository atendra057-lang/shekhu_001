"use client";

import React from "react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState<number>(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--color-navy-deep)",
        borderTop: "1px solid var(--color-border-dark)",
        padding: "3.5rem 0 2.5rem 0",
        color: "var(--color-offwhite)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle dark cartographic continuation in footer */}
      <div
        aria-hidden="true"
        className="section-map-fade"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/maps/dark-urban-network.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          opacity: 0.22,
          pointerEvents: "none",
        }}
      />

      <div className="container-content" style={{ position: "relative", zIndex: 2 }}>
        {/* Top footer row */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "space-between",
            marginBottom: "3rem",
          }}
          className="md:!flex-row md:!items-center"
        >
          {/* Identity & Monogram */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: "2.25rem",
                height: "2.25rem",
                backgroundColor: "var(--color-navy)",
                border: "1px solid var(--color-border-dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.875rem",
                  color: "var(--color-offwhite)",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                AM
              </span>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                {siteConfig.name}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-body)",
                  color: "var(--color-sage-light)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {siteConfig.title}
              </div>
            </div>
          </div>

          {/* Navigation link group */}
          <nav
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
            aria-label="Footer navigation"
          >
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                style={{
                  fontSize: "0.8125rem",
                  fontFamily: "var(--font-body)",
                  color: "rgba(243, 240, 233, 0.75)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                className="hover:!text-offwhite"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "var(--color-border-dark)",
            marginBottom: "2rem",
          }}
        />

        {/* Bottom copyright & attribution */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "flex-start",
            justifyContent: "space-between",
            fontSize: "0.75rem",
            color: "rgba(243, 240, 233, 0.5)",
            fontFamily: "var(--font-body)",
          }}
          className="sm:!flex-row sm:!items-center"
        >
          <div>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ width: "1.5rem", height: "1px", backgroundColor: "var(--color-sage)" }} />
            <span>Urban Planning Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
