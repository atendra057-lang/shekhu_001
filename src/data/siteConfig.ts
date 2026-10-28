export const siteConfig = {
  name: "Abhishek Maurya",
  title: "Urban Planner",
  employer: "Stesalit Private Limited",
  phone: "+91 93346 44204",
  phoneTel: "tel:+919334644204",
  // Email and LinkedIn will be added when provided
  email: null as string | null,
  linkedin: null as string | null,
  headline: "Planning cities with spatial clarity.",
  subHeadline:
    "An urban-planning professional working across master planning, zonal development, geospatial analysis, infrastructure planning, and technical project documentation.",
  focusAreas: ["Master Planning", "GIS & Spatial Analysis", "Urban Infrastructure"],
  meta: {
    title: "Abhishek Maurya | Urban Planner",
    description:
      "Explore the professional portfolio of Abhishek Maurya, an urban planner with experience in master planning, zonal development, GIS mapping, spatial analysis, and urban infrastructure planning.",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Selected Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
