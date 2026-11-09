export interface NavItem {
  label: string;
  href: string;
  index: string;
}

export interface ProgramItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  environment: string;
  progression: string;
  cadence: string;
  image: {
    src: string;
    alt: string;
    caption: string;
    aspect: "wide" | "portrait";
  };
}

export interface WhyPillar {
  index: string;
  title: string;
  emphasis: string;
  description: string;
  detail: string;
}

export interface MembershipTier {
  id: string;
  index: string;
  name: string;
  tagline: string;
  monthlyPriceUsd: number;
  billingNote: string;
  featured?: boolean;
  badge?: string;
  description: string;
  includes: string[];
  idealFor: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface MembershipComparisonRow {
  feature: string;
  category: string;
  foundation: string;
  allRound: string;
  performance: string;
}

export interface CoachingPrinciple {
  index: string;
  title: string;
  summary: string;
  application: string;
}

export const SITE_META = {
  brandName: "AMIT ATHLETIC CLUB",
  monogram: "AAC",
  tagline: "Strength. Movement. Intention.",
  conceptLocation: "Denver, Colorado — Concept Location",
  districtNote: "RiNo / Lower Downtown Architectural Study — Denver, CO",
  conceptHours: [
    { days: "Monday – Friday", hours: "05:30 – 21:30 MST" },
    { days: "Saturday – Sunday", hours: "07:00 – 19:00 MST" },
  ],
  disclosure:
    "AMIT ATHLETIC CLUB is a fictional fitness brand created as a portfolio demonstration. No physical club, memberships, or services are offered.",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { index: "01", label: "The Club", href: "#club" },
  { index: "02", label: "Programs", href: "#programs" },
  { index: "03", label: "Why AAC", href: "#why-us" },
  { index: "04", label: "Membership", href: "#membership" },
  { index: "05", label: "Coaching", href: "#coaching" },
];

export const HERO_LEDGER = [
  {
    label: "Core Disciplines",
    value: "Strength, Functional, Mobility, Small-Group",
  },
  {
    label: "Training Audience",
    value: "Foundational Beginners to Experienced Lifters",
  },
  {
    label: "Architectural Ethos",
    value: "Daylit Platforms, Uncluttered Floor Lanes",
  },
  {
    label: "Concept Market",
    value: "Denver, Colorado (Portfolio Demonstration)",
  },
] as const;

export const PROGRAMS: ProgramItem[] = [
  {
    id: "strength-conditioning",
    index: "01",
    title: "Strength & Conditioning",
    subtitle: "Progressive resistance and structured energy-system development.",
    category: "Barbell & Free-Weight Floor",
    description:
      "Built around fundamental compound lifts—squat, hinge, press, and pull—paired with measured conditioning intervals. Sessions emphasize technical repeatability, controlled tempo, and sustainable load progression rather than maximal exhaustion.",
    environment:
      "Dedicated power racks, calibrated bumper plates, dumbbell bays, and ergometers arranged with generous working clearances.",
    progression:
      "Accessible entry variations for newcomers learning barbell mechanics alongside percentage and RPE frameworks for experienced lifters.",
    cadence: "Self-directed floor access & structured 60-minute blocks",
    image: {
      src: "/images/program-strength-conditioning.jpg",
      alt: "Athlete performing an overhead barbell press at a black steel power rack against a dark architectural masonry wall",
      caption: "FIG. 02A — BARBELL & RACK BAY",
      aspect: "wide",
    },
  },
  {
    id: "functional-training",
    index: "02",
    title: "Functional Training",
    subtitle: "Multi-planar athleticism, loaded carries, and work capacity.",
    category: "Turf & Conditioning Lane",
    description:
      "Translates raw gym strength into real-world movement capability. Programming integrates kettlebells, heavy ropes, sled work, rotational core stability, and unilateral control so the body moves as an integrated unit.",
    environment:
      "Acoustic rubber transition zones bordering an open synthetic turf lane equipped for carries, sled drives, and dynamic footwork.",
    progression:
      "Scaled by movement complexity and external load—allowing every athlete to master deceleration, balance, and power transfer.",
    cadence: "Open turf lane & 50-minute athletic conditioning circuits",
    image: {
      src: "/images/program-functional-training.jpg",
      alt: "Heavy conditioning battle ropes laid along the boundary between black rubber gym flooring and green functional training turf",
      caption: "FIG. 02B — TURF & CONDITIONING LANE",
      aspect: "portrait",
    },
  },
  {
    id: "mobility-recovery",
    index: "03",
    title: "Mobility & Recovery",
    subtitle: "Joint health, end-range control, and nervous-system downregulation.",
    category: "Daylit Movement Studio",
    description:
      "Recovery is treated as a primary training discipline, not an afterthought. Sessions combine active joint articulation, loaded stretching, breath-ledparasympathetic recovery, and postural restoration to support heavy training weeks.",
    environment:
      "Quiet, naturally lit studio space isolated from weight-floor acoustics, outfitted with dense mats, cork blocks, and mobility tools.",
    progression:
      "Adaptable for stiff beginners restoring baseline range of motion or seasoned athletes maintaining hip, thoracic, and shoulder longevity.",
    cadence: "Daily 45-minute guided restoration & open recovery hours",
    image: {
      src: "/images/program-mobility-recovery.jpg",
      alt: "Minimalist movement and recovery studio with neutral mats, cork blocks, warm architectural cove lighting, and floor-to-ceiling windows looking out onto greenery",
      caption: "FIG. 02C — DAYLIT RECOVERY STUDIO",
      aspect: "portrait",
    },
  },
  {
    id: "small-group-training",
    index: "04",
    title: "Small-Group Training",
    subtitle: "Attentive coaching within a focused cohort of up to eight athletes.",
    category: "Coached Cohort Sessions",
    description:
      "Combines the technical oversight of private coaching with the shared cadence of a small group. Capped cohorts ensure every participant receives individualized form adjustments, appropriate weight selection, and structured pacing.",
    environment:
      "Dedicated floor lanes pre-configured for each cohort so transitions between strength stations and conditioning segments remain seamless.",
    progression:
      "Four-week progressive training blocks where coaches track movement benchmarks and adapt exercises to individual anatomy.",
    cadence: "Scheduled 55-minute cohorts across morning, midday, and evening",
    image: {
      src: "/images/program-small-group.jpg",
      alt: "Overhead view of two athletes fist-bumping beside loaded barbells on numbered rubber gym floor lanes after a training set",
      caption: "FIG. 02D — COACHED COHORT LANES",
      aspect: "wide",
    },
  },
];

export const WHY_PILLARS: WhyPillar[] = [
  {
    index: "01",
    title: "Quality Coaching",
    emphasis: "Precision over volume.",
    description:
      "Coaching at AAC centers on clear biomechanical cueing, intelligent load management, and attentive floor presence. Rather than shouting generic encouragement over loud music, instruction focuses on posture, bracing, and movement intent.",
    detail: "Movement-first instruction across open floor and small-group sessions",
  },
  {
    index: "02",
    title: "Purposeful Training Environments",
    emphasis: "Architecture that supports focus.",
    description:
      "Every square foot is zoned to eliminate friction: unobstructed barbell platforms, clear sightlines, balanced natural and warm artificial lighting, and acoustic separation between heavy lifting bays and the recovery studio.",
    detail: "Distinct spatial zoning for strength, turf conditioning, and restoration",
  },
  {
    index: "03",
    title: "Approachable Progression",
    emphasis: "Built for your starting point.",
    description:
      "Whether stepping onto a lifting platform for the first time or refining years of strength training, programming follows transparent, logical steps. Every movement includes foundational regressions and advanced loading options.",
    detail: "Structured onboarding and clear exercise progressions for all levels",
  },
  {
    index: "04",
    title: "Strength, Movement & Long-Term Wellbeing",
    emphasis: "Capability that compounds over decades.",
    description:
      "We measure training success by how well you move both inside and outside the club. By pairing resistance training with joint mobility and aerobic conditioning, the curriculum prioritizes durable, lifelong physical autonomy.",
    detail: "Balanced integration of force production, work capacity, and recovery",
  },
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "foundation",
    index: "TIER 01",
    name: "Foundation Access",
    tagline: "Independent training across all strength, turf, and recovery zones.",
    monthlyPriceUsd: 195,
    billingNote: "Illustrative USD monthly rate · No long-term contract in concept model",
    description:
      "Designed for self-directed lifters and consistent beginners who want unhurried access to an architecturally calm strength floor, functional turf lane, and recovery studio.",
    includes: [
      "Full operating-hours access to the Barbell Floor & Functional Turf Lane",
      "Open-hours access to the Daylit Mobility & Recovery Studio",
      "Initial 45-minute movement & equipment orientation session",
      "Locker room amenities, towel service, and gear storage during visits",
    ],
    idealFor: "Independent athletes & newcomers following their own training cadence",
    ctaLabel: "Review Coaching Philosophy",
    ctaHref: "#coaching",
  },
  {
    id: "all-round",
    index: "TIER 02",
    name: "Club All-Round",
    tagline: "Complete club access paired with Small-Group & Mobility programming.",
    monthlyPriceUsd: 265,
    billingNote: "Illustrative USD monthly rate · Primary all-round club tier",
    featured: true,
    badge: "Most Complete Balance",
    description:
      "Our signature membership uniting open-floor freedom with structured weekly Small-Group Training cohorts and guided Mobility & Recovery sessions.",
    includes: [
      "Everything in Foundation Access across all club training zones",
      "Unlimited guided Mobility & Recovery studio sessions",
      "Up to 3 coached Small-Group Training cohort sessions per week",
      "Quarterly 30-minute training progression & movement review",
      "Priority booking window for cohort time slots (M2 preview structure)",
    ],
    idealFor: "Members seeking structured weekly coaching alongside open-floor access",
    ctaLabel: "Explore Training Disciplines",
    ctaHref: "#programs",
  },
  {
    id: "performance",
    index: "TIER 03",
    name: "Performance & Coaching",
    tagline: "Unrestricted cohort access with individualized programming oversight.",
    monthlyPriceUsd: 385,
    billingNote: "Illustrative USD monthly rate · Comprehensive coached tier",
    description:
      "For dedicated enthusiasts who want seamless integration between unlimited small-group training, custom strength programming, and regular one-on-one technique reviews.",
    includes: [
      "Everything in Club All-Round with unrestricted Small-Group cohorts",
      "Two monthly 1-on-1 coaching & technique refinement sessions",
      "Individualized 4-week progressive strength & conditioning plan",
      "Dedicated locker allocation and recovery studio priority access",
    ],
    idealFor: "Athletes wanting ongoing individualized programming and technical feedback",
    ctaLabel: "Read Coaching Standards",
    ctaHref: "#coaching",
  },
];

export const MEMBERSHIP_COMPARISON: MembershipComparisonRow[] = [
  {
    feature: "Barbell & Strength Floor Access",
    category: "Facility",
    foundation: "Full Hours",
    allRound: "Full Hours",
    performance: "Full Hours",
  },
  {
    feature: "Functional Turf & Conditioning Lane",
    category: "Facility",
    foundation: "Full Hours",
    allRound: "Full Hours",
    performance: "Full Hours",
  },
  {
    feature: "Guided Mobility & Recovery Sessions",
    category: "Programming",
    foundation: "Open Studio Hours",
    allRound: "Unlimited Classes",
    performance: "Unlimited Classes",
  },
  {
    feature: "Small-Group Training Cohorts (Max 8)",
    category: "Programming",
    foundation: "Add-On Eligible",
    allRound: "Up to 3 / Week",
    performance: "Unlimited",
  },
  {
    feature: "Movement Orientation & Progression Check-Ins",
    category: "Coaching",
    foundation: "Initial Orientation",
    allRound: "Quarterly Review",
    performance: "2× Monthly 1-on-1",
  },
];

export const COACHING_PRINCIPLES: CoachingPrinciple[] = [
  {
    index: "01",
    title: "Observation Before Prescription",
    summary:
      "Every athlete brings a distinct movement history, limb proportion, and daily recovery state.",
    application:
      "Before adding external load, coaching begins by observing hinge, squat, overhead reach, and rotational control—adapting bar path and stance to fit the individual's anatomy rather than forcing a rigid template.",
  },
  {
    index: "02",
    title: "Unified Technical Language",
    summary:
      "Clear, concise cues that carry across the strength floor, turf lane, and mobility studio.",
    application:
      "Whether bracing for a deadlift, stabilizing a kettlebell carry, or breathing through thoracic extension, our methodology uses consistent, jargon-free mechanical principles that beginners grasp immediately.",
  },
  {
    index: "03",
    title: "Autonomy Through Understanding",
    summary:
      "Good coaching builds capable, self-reliant athletes—not dependence.",
    application:
      "We explain the intent behind tempo, rest intervals, and exercise selection so members understand how to regulate effort, recognize technical fatigue, and train with confidence.",
  },
];
