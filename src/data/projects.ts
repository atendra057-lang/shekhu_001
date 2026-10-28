export type PortfolioProject = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location?: string;
  organisation?: string;
  role?: string;
  period?: string;
  summary: string;
  documentedContribution: string[];
  planningContext?: string;
  relevantConcepts?: string[];
  visualKey: VisualKey;
  approvedForPublic: boolean;
};

export type ProjectCategory =
  | "Master & Zonal Planning"
  | "GIS & Mapping"
  | "Water Infrastructure"
  | "Flood Mitigation"
  | "Housing & Development";

export type VisualKey =
  | "zonal"
  | "master-plan"
  | "water-supply"
  | "water-body"
  | "flood"
  | "regional"
  | "housing"
  | "township";

export const projects: PortfolioProject[] = [
  {
    slug: "ayodhya-zonal-development-plan",
    title: "Ayodhya Zonal Development Plan",
    category: "Master & Zonal Planning",
    location: "Ayodhya, Uttar Pradesh",
    organisation: "Stesalit Private Limited",
    summary:
      "Current assignment involving zonal development planning — organising area-level development through spatial relationships, land use, infrastructure, and development controls.",
    documentedContribution: [
      "Contributing to zonal development planning for Ayodhya as part of the current team assignment.",
    ],
    planningContext:
      "Zonal development planning translates the broad directions of a master plan into area-specific proposals. It examines spatial relationships between existing settlement patterns, infrastructure networks, open spaces, and projected growth to guide development at a finer grain than city-wide master planning.",
    relevantConcepts: [
      "Zonal development planning",
      "Land-use organisation",
      "Development controls",
      "Area-level spatial analysis",
    ],
    visualKey: "zonal",
    approvedForPublic: false,
  },
  {
    slug: "supaul-madhepura-master-plans",
    title: "Supaul & Madhepura Master Plans",
    category: "Master & Zonal Planning",
    location: "Bihar",
    organisation: "Stesalit Private Limited",
    summary:
      "Current assignments involving master planning for coordinated urban growth and spatial development across two Bihar towns.",
    documentedContribution: [
      "Contributing to master-planning assignments for Supaul and Madhepura as part of the current team.",
    ],
    planningContext:
      "Master planning establishes the long-term spatial framework for urban growth. It coordinates land use, transportation networks, infrastructure, open spaces, and development patterns to guide how a city or town develops over a defined planning horizon.",
    relevantConcepts: [
      "Master planning",
      "Urban growth coordination",
      "Land-use zoning",
      "Infrastructure networks",
    ],
    visualKey: "master-plan",
    approvedForPublic: false,
  },
  {
    slug: "amrut-water-supply-telangana",
    title: "AMRUT 2.0 Water Supply Projects",
    category: "Water Infrastructure",
    location: "Telangana, India",
    organisation: "NCPE Infrastructure India Pvt. Ltd.",
    summary:
      "Mapping, surveying, and analytical work supporting AMRUT 2.0 water supply planning across Telangana.",
    documentedContribution: [
      "Preparation of town maps.",
      "Preparation of topographic maps.",
      "Surveying.",
      "Analysis supporting AMRUT 2.0 water supply projects across Telangana.",
    ],
    planningContext:
      "Reliable spatial information — town maps, topographic surveys, and settlement-pattern analysis — provides the foundation for urban water-supply planning. Understanding the existing physical and spatial context helps planners and engineers make informed decisions about infrastructure alignment and service coverage.",
    relevantConcepts: [
      "Town mapping",
      "Topographic surveying",
      "Urban water-supply planning",
      "AMRUT 2.0",
    ],
    visualKey: "water-supply",
    approvedForPublic: false,
  },
  {
    slug: "water-body-rejuvenation-vijayawada",
    title: "Water-Body Rejuvenation",
    category: "Water Infrastructure",
    location: "Vijayawada, Andhra Pradesh",
    summary:
      "Surveying and analytical work supporting water-body rejuvenation projects involving urban canals.",
    documentedContribution: [
      "Surveys supporting water-body rejuvenation projects.",
      "Analytical work related to urban canal systems.",
    ],
    planningContext:
      "Urban water-body rejuvenation requires an understanding of the physical conditions of waterways and their relationship with surrounding development. Survey data and spatial analysis help establish the baseline conditions needed for planning interventions.",
    relevantConcepts: [
      "Water-body rejuvenation",
      "Urban canal systems",
      "Survey and spatial analysis",
      "Urban waterway planning",
    ],
    visualKey: "water-body",
    approvedForPublic: false,
  },
  {
    slug: "amrut-dpr-manipur",
    title: "AMRUT 2.0 DPR Preparation — Manipur",
    category: "Water Infrastructure",
    location: "Manipur, India",
    summary:
      "Preparation of Detailed Project Reports for water supply networks and water-body rejuvenation projects for urban local bodies.",
    documentedContribution: [
      "Preparation of DPRs for water supply networks for urban local bodies in Manipur.",
      "Preparation of DPRs for water-body rejuvenation projects.",
    ],
    planningContext:
      "Detailed Project Reports translate infrastructure planning intent into structured technical documentation. A DPR typically covers project justification, technical design parameters, cost estimates, and implementation frameworks — providing the basis for administrative and financial approval.",
    relevantConcepts: [
      "DPR preparation",
      "Water supply network planning",
      "Technical project documentation",
      "Urban infrastructure proposals",
    ],
    visualKey: "water-supply",
    approvedForPublic: false,
  },
  {
    slug: "urban-flood-mitigation",
    title: "Urban Flood Mitigation",
    category: "Flood Mitigation",
    location: "Ayodhya & Lucknow, Uttar Pradesh",
    summary:
      "Preparation of Detailed Project Reports for urban flood-mitigation projects.",
    documentedContribution: [
      "Preparation of DPRs for urban flood-mitigation projects in Ayodhya and Lucknow.",
    ],
    planningContext:
      "Urban flood mitigation involves understanding the relationship between topography, drainage systems, urban development patterns, and water flow. Technical project documentation captures the spatial and engineering analysis needed to plan drainage improvements and flood-management infrastructure.",
    relevantConcepts: [
      "Urban flood mitigation",
      "Drainage infrastructure",
      "DPR preparation",
      "Topographic analysis",
    ],
    visualKey: "flood",
    approvedForPublic: false,
  },
  {
    slug: "state-development-fund-telangana",
    title: "State Development Fund Support",
    category: "Housing & Development",
    location: "Telangana, India",
    organisation: "NCPE Infrastructure India Pvt. Ltd.",
    summary:
      "Supporting developmental works for various urban local bodies under the State Development Fund.",
    documentedContribution: [
      "Supported developmental works for urban local bodies in Telangana under the State Development Fund.",
    ],
    visualKey: "regional",
    approvedForPublic: false,
  },
  {
    slug: "pmay-housing-uttar-pradesh",
    title: "PMAY Housing & Property Allotment",
    category: "Housing & Development",
    location: "Uttar Pradesh, India",
    role: "Freelance Planner",
    period: "June 2018–May 2019",
    summary:
      "Housing-layout analysis, beneficiary categorisation, and property allotment support under PMAY.",
    documentedContribution: [
      "Analysed housing layouts.",
      "Categorised beneficiaries.",
      "Supported property allotment activities across Uttar Pradesh.",
    ],
    planningContext:
      "Housing-related planning work involves understanding residential layouts, identifying eligible beneficiaries, and supporting the administrative processes that connect housing supply with demand under government programmes.",
    relevantConcepts: [
      "Housing layout analysis",
      "Beneficiary categorisation",
      "Property allotment",
      "PMAY",
    ],
    visualKey: "housing",
    approvedForPublic: false,
  },
  {
    slug: "township-layout-bhopal",
    title: "Township Layout & Topographic Mapping",
    category: "Housing & Development",
    location: "Bhopal, Madhya Pradesh",
    organisation: "Bhopal Development Authority",
    role: "Intern",
    period: "May–July 2016",
    summary:
      "Early professional experience preparing topographic maps and township layout plans.",
    documentedContribution: [
      "Prepared topographic maps.",
      "Prepared township layout plans using town-planning guidelines.",
    ],
    visualKey: "township",
    approvedForPublic: false,
  },
];

export const projectCategories: ProjectCategory[] = [
  "Master & Zonal Planning",
  "GIS & Mapping",
  "Water Infrastructure",
  "Flood Mitigation",
  "Housing & Development",
];

export function getPublicProjects(): PortfolioProject[] {
  return projects.filter((p) => p.approvedForPublic);
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return projects.find((p) => p.slug === slug && p.approvedForPublic);
}
