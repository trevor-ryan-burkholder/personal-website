export type Engagement = {
  year: string;
  title: string; // anonymized sector/company descriptor (serif headline)
  sub: string; // product area (mono subtitle)
  blurb: string;
  stack: string;
};

// Anonymized per docs/positioning.md — recent work is under NDA, described
// by sector rather than client name. Specifics are kept; names are not.
export const engagements: Engagement[] = [
  {
    year: "2024",
    title: "Healthcare revenue-cycle company",
    sub: "Eligibility management suite",
    blurb:
      "Designed and built the internal eligibility verification and management suite used by billing and operations teams — complex multi-step workflows, insurance-verification API integration, and audit logging throughout.",
    stack: "React · TS",
  },
  {
    year: "2023",
    title: "Digital health platform",
    sub: "Patient tracking",
    blurb:
      "Built a patient-tracking system with server-side rendering for performance, role-based access for compliance, and real-time status updates across care-team workflows. Built to HIPAA-adjacent standards.",
    stack: "Next.js · TS",
  },
  {
    year: "2022",
    title: "Mid-size insurance carrier",
    sub: "Claims management",
    blurb:
      "Designed and built a cross-platform claims-management application — web and mobile from a shared codebase, handling the full claims lifecycle from intake through resolution. Production deployment serving internal adjusters and field agents.",
    stack: "React · React Native",
  },
];
