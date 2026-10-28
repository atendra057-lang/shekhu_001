export type ExperienceEntry = {
  role: string;
  organisation: string;
  location?: string;
  period: string;
  responsibilities: string[];
  note?: string;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Urban Planner",
    organisation: "Stesalit Private Limited",
    period: "December 2025–Present",
    responsibilities: [
      "Ayodhya Zonal Development Plan.",
      "Supaul Master Plan.",
      "Madhepura Master Plan.",
    ],
  },
  {
    role: "Junior Planner",
    organisation: "NCPE Infrastructure India Pvt. Ltd.",
    location: "Hyderabad",
    period: "May 2022–November 2025",
    responsibilities: [
      "Managed customer interactions involving project kick-offs, onboarding, training, business reviews, issue resolution, and renewals while coordinating with internal teams.",
      "Prepared town and topographic maps and conducted surveys and analysis for AMRUT 2.0 water supply projects across Telangana.",
      "Conducted surveys and analysis for water-body rejuvenation projects involving Bandar, Ryves, and Eluru Canals under Vijayawada Municipal Corporation.",
      "Supported developmental works for urban local bodies in Telangana under the State Development Fund.",
      "Provided technical and advisory assistance in a matter involving layout violations.",
      "Prepared DPRs for AMRUT 2.0 water supply networks and water-body rejuvenation projects for urban local bodies in Manipur.",
      "Prepared DPRs for urban flood-mitigation projects in Ayodhya and Lucknow, Uttar Pradesh.",
    ],
  },
  {
    role: "Freelance Planner",
    organisation: "PMAY",
    location: "Lucknow",
    period: "June 2018–May 2019",
    responsibilities: [
      "Analysed housing layouts.",
      "Categorised beneficiaries.",
      "Supported property allotment activities across Uttar Pradesh.",
    ],
  },
  {
    role: "Intern",
    organisation: "Bhopal Development Authority",
    period: "May–July 2016",
    responsibilities: [
      "Prepared topographic maps.",
      "Prepared township layout plans using town-planning guidelines.",
    ],
  },
];

export type EducationEntry = {
  degree: string;
  abbreviation: string;
  institution: string;
};

export const education: EducationEntry[] = [
  {
    degree: "Master of Technology",
    abbreviation: "M.Tech",
    institution: "School of Architecture and Planning, Indore",
  },
  {
    degree: "Bachelor of Planning",
    abbreviation: "B. Planning",
    institution: "M.T. University",
  },
];

export type AcademicProject = {
  title: string;
};

export const academicProjects: AcademicProject[] = [
  { title: "Master Planning" },
  { title: "Regional Planning" },
  { title: "Zonal Planning" },
  { title: "Transportation Planning" },
  { title: "Neighbourhood Planning" },
  { title: "Highway Infrastructure (NH-206)" },
];

export type Participation = {
  event: string;
  role: string;
};

export const participation: Participation[] = [
  { event: "NOSPlan 2014", role: "Participant" },
  { event: "NOSPlan 2015", role: "Development Plan Project" },
  { event: "NOSPlan 2018", role: "Organizing Committee" },
];

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const technicalSkills: SkillCategory[] = [
  {
    category: "GIS & Spatial Analysis",
    skills: ["ArcGIS", "ERDAS IMAGINE", "GIS Mapping", "Spatial Analysis", "Surveying"],
  },
  {
    category: "Planning & Mapping",
    skills: ["AutoCAD", "Town & Topographic Mapping", "Planning Documentation"],
  },
  {
    category: "Technical Documentation",
    skills: ["DPR Preparation", "Microsoft Office"],
  },
  {
    category: "Visual Communication",
    skills: ["Photoshop"],
  },
];

export type ExpertiseDomain = {
  number: string;
  title: string;
  description: string;
};

export const expertiseDomains: ExpertiseDomain[] = [
  {
    number: "01",
    title: "Master & Zonal Planning",
    description:
      "Professional assignments in master-planning and zonal-development-planning projects — examining spatial organisation, development patterns, and urban growth.",
  },
  {
    number: "02",
    title: "GIS & Spatial Analysis",
    description:
      "GIS mapping, spatial analysis, town mapping, topographic mapping, and surveying — building the spatial evidence base for planning decisions.",
  },
  {
    number: "03",
    title: "Urban Infrastructure Planning",
    description:
      "Experience associated with water supply planning, water-body rejuvenation, and urban flood-mitigation projects.",
  },
  {
    number: "04",
    title: "DPR Preparation & Technical Documentation",
    description:
      "Preparing Detailed Project Reports for water supply, water-body rejuvenation, and flood-mitigation projects — translating planning intent into structured technical documentation.",
  },
  {
    number: "05",
    title: "Land-Use & Planning Documentation",
    description:
      "Housing layouts, township layout plans, and town-planning work — contributing to documentation that supports urban development processes.",
  },
  {
    number: "06",
    title: "Communication & Coordination",
    description:
      "Customer interactions, project kick-offs, onboarding, training, business reviews, issue resolution, and renewals — coordinating across teams and stakeholders.",
  },
];

export const approachSteps = [
  {
    number: "01",
    title: "Understand the Context",
    description:
      "Establish the planning context and the relationships between the urban area, its development patterns, and its infrastructure.",
  },
  {
    number: "02",
    title: "Examine the Spatial Evidence",
    description:
      "Use appropriate spatial information, mapping, survey findings, and analytical inputs to understand the area.",
  },
  {
    number: "03",
    title: "Develop the Planning Perspective",
    description:
      "Connect the spatial context with the relevant planning problem and the scope of the assignment.",
  },
  {
    number: "04",
    title: "Communicate the Technical Work",
    description:
      "Present the findings, planning information, or technical documentation in a clear and usable form.",
  },
];

export const professionalHighlights = [
  "Exposure to master and zonal development planning.",
  "Mapping, surveying, and analytical work supporting infrastructure planning.",
  "Preparation of DPRs for water supply and water-body rejuvenation projects.",
  "Preparation of DPRs for urban flood-mitigation projects.",
  "Housing-layout analysis and beneficiary categorisation.",
  "Technical assistance and communication with stakeholders.",
];
