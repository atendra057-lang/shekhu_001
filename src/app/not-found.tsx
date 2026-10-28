import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--color-paper)",
          padding: "6rem 1.5rem",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "520px" }}>
          <div
            className="section-number"
            style={{ marginBottom: "1rem", color: "var(--color-sage-deep)" }}
          >
            404 — Document Not Found
          </div>
          <h1
            className="heading-display"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "var(--color-navy)",
              marginBottom: "1rem",
            }}
          >
            Unpublished or Restricted Portfolio Item
          </h1>
          <p
            className="text-body"
            style={{ marginBottom: "2rem", color: "var(--color-secondary-text)" }}
          >
            The requested project dossier is either private, awaiting institutional clearance, or does
            not exist in the public directory.
          </p>
          <Link href="/#work" className="btn-primary">
            Return to Portfolio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
