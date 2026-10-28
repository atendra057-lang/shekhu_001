"use client";

import React, { useState, useEffect, useCallback } from "react";
import { siteConfig } from "@/data/siteConfig";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMenuOpen(false);
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    },
    []
  );

  return (
    <>
      <header
        id="site-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          transition: "all 0.3s ease",
          backgroundColor: isScrolled ? "rgba(250, 249, 245, 0.95)" : "transparent",
          backdropFilter: isScrolled ? "blur(8px)" : "none",
          borderBottom: isScrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        }}
      >
        <div className="container-wide">
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "4.5rem",
            }}
            aria-label="Main navigation"
          >
            {/* Monogram / Name */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                textDecoration: "none",
              }}
              aria-label="Go to top"
            >
              {/* AM Monogram */}
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  backgroundColor: "var(--color-navy)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--color-offwhite)",
                    letterSpacing: "0.06em",
                  }}
                >
                  AM
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "var(--color-navy)",
                  letterSpacing: "0.03em",
                }}
                className="hidden md:inline"
              >
                {siteConfig.name}
              </span>
            </a>

            {/* Desktop Navigation */}
            <div
              className="hidden md:flex"
              style={{
                alignItems: "center",
                gap: "2rem",
              }}
            >
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "var(--color-secondary-text)",
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                    transition: "color 0.2s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-navy)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-secondary-text)")
                  }
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="btn-contact"
                style={{ fontSize: "0.75rem" }}
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "44px",
                height: "44px",
                background: "none",
                border: "none",
                cursor: "pointer",
                gap: "5px",
                padding: 0,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  backgroundColor: "var(--color-navy)",
                  transition: "all 0.3s ease",
                  transform: isMenuOpen
                    ? "rotate(45deg) translate(2.5px, 2.5px)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  backgroundColor: "var(--color-navy)",
                  transition: "all 0.3s ease",
                  opacity: isMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  backgroundColor: "var(--color-navy)",
                  transition: "all 0.3s ease",
                  transform: isMenuOpen
                    ? "rotate(-45deg) translate(2.5px, -2.5px)"
                    : "none",
                }}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`mobile-nav-overlay ${isMenuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Close button inside overlay */}
        <button
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            width: "44px",
            height: "44px",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <line x1="2" y1="2" x2="18" y2="18" stroke="#F3F0E9" strokeWidth="1.5" />
            <line x1="18" y1="2" x2="2" y2="18" stroke="#F3F0E9" strokeWidth="1.5" />
          </svg>
        </button>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
          aria-label="Mobile navigation"
        >
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                fontWeight: 400,
                color: "var(--color-offwhite)",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.2s ease",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn-contact"
            style={{ marginTop: "1rem" }}
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </>
  );
}
