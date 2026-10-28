import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import SelectedWork from "@/components/SelectedWork";
import Approach from "@/components/Approach";
import Highlights from "@/components/Highlights";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import AcademicProjects from "@/components/AcademicProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-dark-text">
      {/* Global Navigation */}
      <Header />

      <main className="flex-1">
        {/* Section 1: Hero — Split Editorial & Cartographic Atlas */}
        <Hero />

        {/* Section 2: About — Understanding Cities through Space & Evidence */}
        <About />

        {/* Section 3: Professional Expertise — 6 Planning Domains */}
        <Expertise />

        {/* Section 4: Selected Work & Planning Practice */}
        <SelectedWork />

        {/* Section 5: Professional Approach — From Evidence to Planning Decisions */}
        <Approach />

        {/* Section 6: Practice Highlights — Verified Contribution Areas */}
        <Highlights />

        {/* Section 7: Career History Timeline */}
        <Experience />

        {/* Section 8: Technical Skills & Geospatial Tools */}
        <Skills />

        {/* Section 9: Formal Educational Qualifications */}
        <Education />

        {/* Section 10: Academic Planning Studios & NOSPlan Involvement */}
        <AcademicProjects />

        {/* Section 11: Contact & Professional Inquiries */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
