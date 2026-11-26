export interface NavItem {
  label: string;
  href: string;
  index: string;
}

export type ProgramCategory =
  | "Strength"
  | "Conditioning"
  | "Mobility & Recovery"
  | "Small-Group";

export type ExperienceLevel = "Beginner" | "Intermediate" | "Advanced";

export interface ProgramItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: ProgramCategory;
  categoryLabel: string;
  shortSummary: string;
  description: string;
  benefits: string[];
  experienceLevels: ExperienceLevel[];
  levelSummary: string;
  sampleDuration: string;
  trainingFocus: string;
  environment: string;
  image: {
    src: string;
    alt: string;
    caption: string;
    aspect: "wide" | "portrait";
  };
}

export interface ScheduleSession {
  id: string;
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  time: string;
  title: string;
  programId: string;
  programTitle: string;
  duration: string;
  level: string;
  coach: string;
  focus: string;
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
  annualDiscountPercent: number;
  effectiveAnnualMonthlyUsd: number;
  annualTotalUsd: number;
  annualSavingsUsd: number;
  billingNote: string;
  featured?: boolean;
  badge?: string;
  shortDescription: string;
  description: string;
  includes: string[];
  idealFor: string;
  ctaLabel: string;
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

export interface TrainerProfile {
  id: string;
  index: string;
  name: string;
  role: string;
  specialty: string;
  programId: string;
  philosophyQuote: string;
  bio: string;
  trainingFocus: string[];
  whoTheyCoach: string;
  image: {
    src: string;
    alt: string;
    caption: string;
  };
}

export interface FacilityArea {
  index: string;
  name: string;
  summary: string;
  description: string;
  highlights: string[];
}

export interface CoreValue {
  index: string;
  title: string;
  description: string;
}

export const SITE_META = {
  brandName: "AMIT ATHLETIC CLUB",
  monogram: "AAC",
  tagline: "Strength. Movement. Intention.",
  conceptLocation: "Denver, Colorado — Concept Location",
  conceptHours: [
    { days: "Monday – Friday", hours: "5:30 AM – 9:30 PM" },
    { days: "Saturday – Sunday", hours: "7:00 AM – 7:00 PM" },
  ],
  disclosure:
    "AMIT ATHLETIC CLUB is a fictional fitness brand created as a portfolio demonstration. No physical club, memberships, or services are offered.",
} as const;

export interface RouteEditorialMeta {
  route: string;
  number: string;
  pageTitle: string;
  eyebrow: string;
}

export const ROUTE_EDITORIAL_MAP: Record<string, RouteEditorialMeta> = {
  "/": {
    route: "/",
    number: "01",
    pageTitle: "Home",
    eyebrow: "01 / ALL-ROUND ATHLETIC CLUB",
  },
  "/about": {
    route: "/about",
    number: "02",
    pageTitle: "About",
    eyebrow: "02 / THE CLUB & PHILOSOPHY",
  },
  "/programs": {
    route: "/programs",
    number: "03",
    pageTitle: "Programs",
    eyebrow: "03 / PROGRAMS & TRAINING",
  },
  "/memberships": {
    route: "/memberships",
    number: "04",
    pageTitle: "Memberships",
    eyebrow: "04 / MEMBERSHIP PLANS & ACCESS",
  },
  "/trainers": {
    route: "/trainers",
    number: "05",
    pageTitle: "Trainers",
    eyebrow: "05 / MEET YOUR COACHES",
  },
  "/contact": {
    route: "/contact",
    number: "06",
    pageTitle: "Contact",
    eyebrow: "06 / CONTACT & INQUIRIES",
  },
};

export function getRouteEditorialMeta(pathname: string): RouteEditorialMeta {
  const normalized = pathname === "" ? "/" : pathname;
  return (
    ROUTE_EDITORIAL_MAP[normalized] || {
      route: normalized,
      number: "01",
      pageTitle: "Club",
      eyebrow: `01 / ${SITE_META.brandName}`,
    }
  );
}

export const NAV_ITEMS: NavItem[] = [
  { index: "01", label: "Home", href: "/" },
  { index: "02", label: "About", href: "/about" },
  { index: "03", label: "Programs", href: "/programs" },
  { index: "04", label: "Memberships", href: "/memberships" },
  { index: "05", label: "Trainers", href: "/trainers" },
  { index: "06", label: "Contact", href: "/contact" },
];

export const HERO_LEDGER = [
  {
    label: "Core Disciplines",
    value: "Strength, Conditioning, Mobility, Small-Group",
  },
  {
    label: "Who We Welcome",
    value: "First-Time Lifters to Experienced Athletes",
  },
  {
    label: "Training Atmosphere",
    value: "Natural Light, Spacious Floor, Unhurried Pace",
  },
  {
    label: "Training Standard",
    value: "Movement Mastery, Attentive Coaching, Capped Access",
  },
] as const;

export const PROGRAM_CATEGORIES: ProgramCategory[] = [
  "Strength",
  "Conditioning",
  "Mobility & Recovery",
  "Small-Group",
];

export const EXPERIENCE_LEVELS: ExperienceLevel[] = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: "strength-conditioning",
    index: "01",
    title: "Strength & Conditioning",
    subtitle: "Progressive barbell and free-weight training built around lasting technique.",
    category: "Strength",
    categoryLabel: "Barbell & Free-Weight Floor",
    shortSummary:
      "Master foundational compound lifts—squat, hinge, press, and pull—paired with paced conditioning in a calm, well-equipped weight room.",
    description:
      "Our signature strength program focuses on fundamental compound movements—squat, hinge, press, and pull—combined with structured conditioning intervals. Rather than chasing exhaustion, sessions emphasize repeatable form, steady progress, and choosing weights that match how you feel that day.",
    benefits: [
      "Build full-body strength and bone density with structured progressive overload",
      "Learn confident barbell and dumbbell setup with clear, approachable coaching cues",
      "Develop sustainable aerobic and anaerobic conditioning without burnout",
    ],
    experienceLevels: ["Beginner", "Intermediate", "Advanced"],
    levelSummary: "All Levels (Beginners to Experienced Lifters)",
    sampleDuration: "60 minutes",
    trainingFocus: "Compound Lifts, Tempo Control & Energy Systems",
    environment:
      "Spacious lifting platforms, power racks, calibrated plates, and full dumbbell bays with plenty of room to work.",
    image: {
      src: "/images/program-strength-conditioning.jpg",
      alt: "Athlete performing an overhead barbell press at a black steel power rack",
      caption: "Strength & Conditioning Floor",
      aspect: "wide",
    },
  },
  {
    id: "functional-training",
    index: "02",
    title: "Functional Training",
    subtitle: "Athletic movement, loaded carries, and real-world conditioning.",
    category: "Conditioning",
    categoryLabel: "Turf & Conditioning Lane",
    shortSummary:
      "Translate gym strength into everyday athleticism through kettlebells, sleds, heavy ropes, and multi-directional movement.",
    description:
      "Functional Training connects gym strength to how your body moves in daily life and sport. Using kettlebells, sleds, battle ropes, medicine balls, and bodyweight drills, sessions build core stability, single-leg balance, and cardiovascular stamina.",
    benefits: [
      "Improve balance, coordination, and multi-directional agility",
      "Build resilient core and grip strength through loaded carries and sled work",
      "Boost heart health and work capacity with adaptable interval pacing",
    ],
    experienceLevels: ["Beginner", "Intermediate", "Advanced"],
    levelSummary: "All Levels (Scaled by Load & Movement Complexity)",
    sampleDuration: "50 minutes",
    trainingFocus: "Kettlebells, Sled Work, Carries & Athletic Stamina",
    environment:
      "Dedicated synthetic turf lane bordered by shock-absorbing rubber flooring for dynamic drills and carries.",
    image: {
      src: "/images/program-functional-training.jpg",
      alt: "Heavy conditioning battle ropes resting along the edge of a green functional training turf lane",
      caption: "Functional Turf & Conditioning Lane",
      aspect: "portrait",
    },
  },
  {
    id: "mobility-recovery",
    index: "03",
    title: "Mobility & Recovery",
    subtitle: "Joint health, guided stretching, and unhurried restoration.",
    category: "Mobility & Recovery",
    categoryLabel: "Calm Recovery Studio",
    shortSummary:
      "Restore range of motion, ease stiffness, and support recovery between heavier training days in a quiet, sunlit studio.",
    description:
      "We treat recovery as an essential part of training, not an afterthought. Held in a quiet room away from the weight floor, these sessions blend active joint mobility, guided mat stretching, foam rolling, and unhurried breathing to ease tension and keep your joints moving freely.",
    benefits: [
      "Relieve hip, shoulder, and upper-back stiffness from desk work or heavy lifting",
      "Expand active range of motion so squats, presses, and carries feel smoother",
      "Downshift stress and improve recovery between strength sessions",
    ],
    experienceLevels: ["Beginner", "Intermediate"],
    levelSummary: "Beginner & Intermediate (Foundational Restoration)",
    sampleDuration: "45 minutes",
    trainingFocus: "Joint Mobility, Mat Stretching & Breath-Led Recovery",
    environment:
      "Quiet, naturally lit studio space isolated from weight-room noise and stocked with cushioned mats and blocks.",
    image: {
      src: "/images/program-mobility-recovery.jpg",
      alt: "Participants seated on studio yoga mats performing guided forward-fold hamstring stretches in natural daylight",
      caption: "Guided Studio Mobility & Stretching",
      aspect: "portrait",
    },
  },
  {
    id: "small-group-training",
    index: "04",
    title: "Small-Group Training",
    subtitle: "Personal coaching attention inside a motivating group of up to eight.",
    category: "Small-Group",
    categoryLabel: "Coached Cohort Sessions",
    shortSummary:
      "Train alongside a small group of up to eight members with a dedicated coach guiding your form, weights, and progression.",
    description:
      "Small-Group Training brings together the individualized feedback of personal coaching and the energy of a consistent group. Capped at eight participants per session, your coach watches every set, helps adjust weights or exercise variations on the spot, and keeps your training progressing week to week.",
    benefits: [
      "Capped at 8 participants so you always receive personal form coaching",
      "Follow a structured 4-week training block without having to plan your own workouts",
      "Exercises tailored on the spot for beginners or experienced lifters",
    ],
    experienceLevels: ["Beginner", "Intermediate", "Advanced"],
    levelSummary: "All Levels (Individualized Within Each Cohort)",
    sampleDuration: "55 minutes",
    trainingFocus: "Coached Full-Body Strength & Paced Conditioning",
    environment:
      "Pre-equipped training lanes so you never have to wait for a rack, barbell, or set of dumbbells.",
    image: {
      src: "/images/program-small-group.jpg",
      alt: "Overhead view of two training partners fist-bumping beside loaded barbells on marked gym floor lanes",
      caption: "Small-Group Cohort Floor",
      aspect: "wide",
    },
  },
];

export const SCHEDULE_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export const WEEKLY_SCHEDULE: ScheduleSession[] = [
  {
    id: "mon-0630",
    day: "Monday",
    time: "6:30 AM",
    title: "Foundational Barbell — Lower Body & Hinge",
    programId: "strength-conditioning",
    programTitle: "Strength & Conditioning",
    duration: "60 min",
    level: "All Levels",
    coach: "Marcus Vance",
    focus: "Squat & deadlift mechanics with accessory core work",
  },
  {
    id: "mon-1200",
    day: "Monday",
    time: "12:00 PM",
    title: "Midday Turf Conditioning & Carries",
    programId: "functional-training",
    programTitle: "Functional Training",
    duration: "50 min",
    level: "All Levels",
    coach: "Elena Rostova",
    focus: "Kettlebell complexes, sled pushes, and aerobic pacing",
  },
  {
    id: "mon-1730",
    day: "Monday",
    time: "5:30 PM",
    title: "Small-Group Strength Cohort (Max 8)",
    programId: "small-group-training",
    programTitle: "Small-Group Training",
    duration: "55 min",
    level: "All Levels",
    coach: "Maya Lin",
    focus: "Coached full-body strength progression",
  },
  {
    id: "tue-0700",
    day: "Tuesday",
    time: "7:00 AM",
    title: "Small-Group Morning Cohort (Max 8)",
    programId: "small-group-training",
    programTitle: "Small-Group Training",
    duration: "55 min",
    level: "All Levels",
    coach: "Maya Lin",
    focus: "Upper-body pressing, rows, and conditioning intervals",
  },
  {
    id: "tue-1230",
    day: "Tuesday",
    time: "12:30 PM",
    title: "Hip & Thoracic Mobility Reset",
    programId: "mobility-recovery",
    programTitle: "Mobility & Recovery",
    duration: "45 min",
    level: "Beginner / Intermediate",
    coach: "Soren Lindqvist",
    focus: "Desk-posture relief, shoulder opening, and hip rotation",
  },
  {
    id: "tue-1800",
    day: "Tuesday",
    time: "6:00 PM",
    title: "Athletic Engine & Rope Conditioning",
    programId: "functional-training",
    programTitle: "Functional Training",
    duration: "50 min",
    level: "Intermediate / Advanced",
    coach: "Elena Rostova",
    focus: "Multi-directional footwork, heavy ropes, and erg intervals",
  },
  {
    id: "wed-0630",
    day: "Wednesday",
    time: "6:30 AM",
    title: "Barbell Upper Body & Overhead Press",
    programId: "strength-conditioning",
    programTitle: "Strength & Conditioning",
    duration: "60 min",
    level: "All Levels",
    coach: "Marcus Vance",
    focus: "Strict press, bench variations, and upper-back strength",
  },
  {
    id: "wed-1730",
    day: "Wednesday",
    time: "5:30 PM",
    title: "Evening Unwind — Mat Stretching & Breath",
    programId: "mobility-recovery",
    programTitle: "Mobility & Recovery",
    duration: "45 min",
    level: "Beginner / Intermediate",
    coach: "Soren Lindqvist",
    focus: "Hamstring lengthening, spinal decompression, and recovery",
  },
  {
    id: "thu-0700",
    day: "Thursday",
    time: "7:00 AM",
    title: "Small-Group Strength & Stamina (Max 8)",
    programId: "small-group-training",
    programTitle: "Small-Group Training",
    duration: "55 min",
    level: "All Levels",
    coach: "Maya Lin",
    focus: "Single-leg strength, dumbbell presses, and rowers",
  },
  {
    id: "thu-1730",
    day: "Thursday",
    time: "5:30 PM",
    title: "Kettlebell & Sled Power Circuit",
    programId: "functional-training",
    programTitle: "Functional Training",
    duration: "50 min",
    level: "All Levels",
    coach: "Elena Rostova",
    focus: "Loaded carries, rotational core work, and sled drives",
  },
  {
    id: "fri-0630",
    day: "Friday",
    time: "6:30 AM",
    title: "Full-Body Compound Lifts & Tempo",
    programId: "strength-conditioning",
    programTitle: "Strength & Conditioning",
    duration: "60 min",
    level: "All Levels",
    coach: "Marcus Vance",
    focus: "Front squats, pulls, and controlled conditioning finishers",
  },
  {
    id: "fri-1630",
    day: "Friday",
    time: "4:30 PM",
    title: "End-of-Week Joint Restoration",
    programId: "mobility-recovery",
    programTitle: "Mobility & Recovery",
    duration: "45 min",
    level: "Beginner / Intermediate",
    coach: "Soren Lindqvist",
    focus: "Full-body mat stretching and tissue recovery",
  },
  {
    id: "sat-0900",
    day: "Saturday",
    time: "9:00 AM",
    title: "Weekend Small-Group Cohort (Max 8)",
    programId: "small-group-training",
    programTitle: "Small-Group Training",
    duration: "55 min",
    level: "All Levels",
    coach: "Maya Lin",
    focus: "Partner-paced strength stations and turf conditioning",
  },
  {
    id: "sun-1000",
    day: "Sunday",
    time: "10:00 AM",
    title: "Sunday Morning Mobility & Recovery",
    programId: "mobility-recovery",
    programTitle: "Mobility & Recovery",
    duration: "45 min",
    level: "Beginner / Intermediate",
    coach: "Soren Lindqvist",
    focus: "Guided stretching and calm preparation for the week ahead",
  },
];

export const WHY_PILLARS: WhyPillar[] = [
  {
    index: "01",
    title: "Attentive, Practical Coaching",
    emphasis: "Guidance over noise.",
    description:
      "Our coaches focus on clear, helpful feedback—showing you how to set your posture, choose the right weight, and move safely without shouting over loud music.",
    detail: "Supportive instruction across open gym hours and small-group classes",
  },
  {
    index: "02",
    title: "Calm, Purposeful Spaces",
    emphasis: "Room to focus.",
    description:
      "We organize the floor so you never feel crowded: generous lifting platforms, an open turf lane for conditioning, and a quiet, sunlit room dedicated to stretching and recovery.",
    detail: "Dedicated areas for lifting, turf movement, and quiet recovery",
  },
  {
    index: "03",
    title: "Welcoming to Every Level",
    emphasis: "Start where you are.",
    description:
      "Whether you are picking up a barbell for the very first time or refining years of training, every workout includes straightforward starting options and clear ways to progress.",
    detail: "Personal orientation session included with every membership",
  },
  {
    index: "04",
    title: "Built for Long-Term Wellbeing",
    emphasis: "Strength that lasts.",
    description:
      "Real fitness is about how well you move and feel outside the gym. By balancing strength work with cardiovascular stamina and joint mobility, we help you build capability for decades.",
    detail: "Balanced emphasis on strength, stamina, and joint health",
  },
];

export const ANNUAL_DISCOUNT_PERCENT = 20;

export function calculateAnnualDiscount(
  monthlyPriceUsd: number,
  discountPercent: number = ANNUAL_DISCOUNT_PERCENT
): {
  effectiveMonthlyRate: number;
  annualTotal: number;
  annualSavings: number;
} {
  const effectiveMonthlyRate = Math.round(
    monthlyPriceUsd * (1 - discountPercent / 100)
  );
  const annualTotal = effectiveMonthlyRate * 12;
  const annualSavings = monthlyPriceUsd * 12 - annualTotal;
  return { effectiveMonthlyRate, annualTotal, annualSavings };
}

type MembershipTierSeed = Omit<
  MembershipTier,
  "effectiveAnnualMonthlyUsd" | "annualTotalUsd" | "annualSavingsUsd"
>;

function buildMembershipTier(seed: MembershipTierSeed): MembershipTier {
  const { effectiveMonthlyRate, annualTotal, annualSavings } =
    calculateAnnualDiscount(seed.monthlyPriceUsd, seed.annualDiscountPercent);

  return {
    ...seed,
    effectiveAnnualMonthlyUsd: effectiveMonthlyRate,
    annualTotalUsd: annualTotal,
    annualSavingsUsd: annualSavings,
  };
}

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  buildMembershipTier({
    id: "foundation",
    index: "PLAN 01",
    name: "Foundation Access",
    tagline: "Open-gym access across all strength, turf, and recovery spaces.",
    monthlyPriceUsd: 195,
    annualDiscountPercent: ANNUAL_DISCOUNT_PERCENT,
    billingNote: "Illustrative USD pricing · Portfolio concept",
    shortDescription:
      "Full open-floor access to the weight room, turf lane, and recovery studio, plus a personal welcome orientation.",
    description:
      "Ideal for independent lifters and consistent beginners who want unhurried access to our strength platforms, functional turf lane, and recovery studio on their own schedule.",
    includes: [
      "Full operating-hours access to the Strength Floor & Functional Turf Lane",
      "Open-studio access to the Mobility & Recovery Room",
      "Complimentary 45-minute welcome movement & equipment orientation",
      "Locker room access, towel service, and day lockers",
    ],
    idealFor: "Self-directed gym-goers & newcomers training at their own pace",
    ctaLabel: "Inquire About Foundation",
  }),
  buildMembershipTier({
    id: "all-round",
    index: "PLAN 02",
    name: "Club All-Round",
    tagline: "Open-gym freedom combined with Small-Group & Mobility classes.",
    monthlyPriceUsd: 265,
    annualDiscountPercent: ANNUAL_DISCOUNT_PERCENT,
    billingNote: "Illustrative USD pricing · Most popular balance",
    featured: true,
    badge: "Recommended",
    shortDescription:
      "Complete open-floor access plus unlimited Mobility classes and up to three coached Small-Group sessions each week.",
    description:
      "Our signature membership combining open-floor access with structured weekly Small-Group Training cohorts and guided Mobility & Recovery classes.",
    includes: [
      "Everything in Foundation Access across all club training areas",
      "Unlimited guided Mobility & Recovery studio classes",
      "Up to 3 coached Small-Group Training sessions per week (max 8 per class)",
      "Quarterly 1-on-1 progress check-in and program refresh with a coach",
      "7-day advance class reservation window",
    ],
    idealFor: "Members who want structured weekly coaching alongside open-gym access",
    ctaLabel: "Inquire About Club All-Round",
  }),
  buildMembershipTier({
    id: "performance",
    index: "PLAN 03",
    name: "Performance & Coaching",
    tagline: "Unlimited group classes paired with personal coaching check-ins.",
    monthlyPriceUsd: 385,
    annualDiscountPercent: ANNUAL_DISCOUNT_PERCENT,
    billingNote: "Illustrative USD pricing · Full coaching support",
    shortDescription:
      "Unlimited Small-Group and Mobility classes paired with twice-monthly 1-on-1 coaching sessions and custom programming.",
    description:
      "Designed for members who want unlimited small-group training, a personalized four-week training plan, and regular one-on-one coaching sessions to refine technique.",
    includes: [
      "Everything in Club All-Round with unlimited Small-Group classes",
      "Two monthly 1-on-1 personal coaching & technique sessions",
      "Customized 4-week strength and conditioning plan tailored to your goals",
      "Dedicated overnight locker and priority class scheduling",
    ],
    idealFor: "Members seeking ongoing personal programming and hands-on coaching",
    ctaLabel: "Inquire About Performance",
  }),
];

export const MEMBERSHIP_COMPARISON: MembershipComparisonRow[] = [
  {
    feature: "Strength Floor & Free-Weight Access",
    category: "Club Access",
    foundation: "All Open Hours",
    allRound: "All Open Hours",
    performance: "All Open Hours",
  },
  {
    feature: "Functional Turf & Conditioning Lane",
    category: "Club Access",
    foundation: "All Open Hours",
    allRound: "All Open Hours",
    performance: "All Open Hours",
  },
  {
    feature: "Mobility & Recovery Studio",
    category: "Classes & Recovery",
    foundation: "Open Mat Hours",
    allRound: "Unlimited Classes",
    performance: "Unlimited Classes",
  },
  {
    feature: "Small-Group Training (Max 8 Athletes)",
    category: "Classes & Recovery",
    foundation: "Single-Class Pass Eligible",
    allRound: "Up to 3 Classes / Week",
    performance: "Unlimited Classes",
  },
  {
    feature: "Welcome Movement & Equipment Orientation",
    category: "Coaching",
    foundation: "1× Welcome Session",
    allRound: "1× Welcome Session",
    performance: "1× Welcome Session",
  },
  {
    feature: "1-on-1 Coaching & Progress Reviews",
    category: "Coaching",
    foundation: "Optional Add-On",
    allRound: "Quarterly Check-In",
    performance: "2× Monthly 1-on-1 Sessions",
  },
  {
    feature: "Custom 4-Week Training Program",
    category: "Coaching",
    foundation: "—",
    allRound: "—",
    performance: "Included",
  },
  {
    feature: "Towel Service & Locker Amenities",
    category: "Amenities",
    foundation: "Day Lockers",
    allRound: "Day Lockers",
    performance: "Dedicated Locker",
  },
];

export const COACHING_PRINCIPLES: CoachingPrinciple[] = [
  {
    index: "01",
    title: "Listen & Observe First",
    summary:
      "Every member arrives with a different training background, schedule, and starting point.",
    application:
      "Before suggesting weights or exercises, our coaches take time to understand your goals and watch how you move—adapting exercises to fit your body rather than forcing a one-size-fits-all routine.",
  },
  {
    index: "02",
    title: "Clear, Approachable Cueing",
    summary:
      "Practical instruction that makes sense whether it is your first week or your tenth year.",
    application:
      "We skip confusing jargon in favor of simple, direct cues that help you feel stable under a barbell, balanced during kettlebell work, and relaxed during recovery.",
  },
  {
    index: "03",
    title: "Confidence That Lasts",
    summary:
      "Good coaching helps you feel capable and independent on the gym floor.",
    application:
      "We explain the 'why' behind your warmup, rest periods, and weight choices so you build lasting confidence every time you step into the club.",
  },
];

export const TRAINERS: TrainerProfile[] = [
  {
    id: "marcus-vance",
    index: "COACH 01",
    name: "Marcus Vance",
    role: "Lead Strength & Barbell Coach",
    specialty: "Strength & Conditioning",
    programId: "strength-conditioning",
    philosophyQuote:
      "Strength training should make you feel more capable in everyday life, never beaten down.",
    bio: "Marcus leads AAC's barbell and free-weight curriculum. His coaching focuses on helping beginners feel comfortable at the squat rack while guiding experienced lifters through steady, injury-free strength progressions.",
    trainingFocus: [
      "Squat, deadlift, and overhead press technique",
      "Approachable barbell onboarding for first-time lifters",
      "Paced strength cycles and sustainable load management",
    ],
    whoTheyCoach:
      "Newcomers learning foundational barbell lifts and experienced lifters refining technique.",
    image: {
      src: "/images/trainer-strength.jpg",
      alt: "Athlete setting up under a barbell at a squat rack",
      caption: "Barbell Setup & Alignment",
    },
  },
  {
    id: "elena-rostova",
    index: "COACH 02",
    name: "Elena Rostova",
    role: "Functional Conditioning Coach",
    specialty: "Functional Training",
    programId: "functional-training",
    philosophyQuote:
      "True conditioning is about control, balance, and steady energy—not just moving fast.",
    bio: "Elena designs our turf and athletic conditioning sessions. She specializes in kettlebell mechanics, loaded carries, and multi-directional movement that build real-world stamina and core stability.",
    trainingFocus: [
      "Kettlebell swing, clean, and carry mechanics",
      "Sled work, battle ropes, and aerobic interval pacing",
      "Single-leg balance and rotational core stability",
    ],
    whoTheyCoach:
      "Recreational athletes, runners, and members looking to build stamina and agility.",
    image: {
      src: "/images/trainer-functional.jpg",
      alt: "Athlete performing a strict pull-up on an athletic rig",
      caption: "Conditioning & Rig Work",
    },
  },
  {
    id: "soren-lindqvist",
    index: "COACH 03",
    name: "Soren Lindqvist",
    role: "Mobility & Recovery Specialist",
    specialty: "Mobility & Recovery",
    programId: "mobility-recovery",
    philosophyQuote:
      "When your joints move freely, every lift feels lighter and recovery happens faster.",
    bio: "Soren oversees the Mobility & Recovery studio. His sessions help members undo stiffness from desk work and heavy training through guided stretching, joint mobility drills, and calm breathwork.",
    trainingFocus: [
      "Hip, ankle, and thoracic spine mobility",
      "Guided mat stretching and post-workout downregulation",
      "Warmup preparation for comfortable squatting and pressing",
    ],
    whoTheyCoach:
      "Anyone experiencing everyday stiffness or looking to stay mobile alongside strength work.",
    image: {
      src: "/images/coaching-mobility-detail.jpg",
      alt: "Athlete practicing seated hamstring stretching on studio mats in natural window light",
      caption: "Studio Mobility & Recovery",
    },
  },
  {
    id: "maya-lin",
    index: "COACH 04",
    name: "Maya Lin",
    role: "Small-Group Training Director",
    specialty: "Small-Group Training",
    programId: "small-group-training",
    philosophyQuote:
      "A great small group gives you the focus of personal coaching and the energy of good company.",
    bio: "Maya coordinates AAC's eight-person training cohorts. She excels at tailoring a shared workout to eight different bodies—making sure every participant has the right exercise variation and weight.",
    trainingFocus: [
      "Individualized exercise scaling within small groups",
      "Full-body progressive strength and conditioning blocks",
      "Supportive, unhurried pacing for mixed-experience cohorts",
    ],
    whoTheyCoach:
      "Members who enjoy structured group energy without losing personal coaching attention.",
    image: {
      src: "/images/trainer-small-group.jpg",
      alt: "Athlete selecting dumbbells from a free-weight rack",
      caption: "Small-Group Weight Selection",
    },
  },
];

export const ABOUT_FACILITIES: FacilityArea[] = [
  {
    index: "AREA 01",
    name: "The Barbell & Free-Weight Floor",
    summary: "Spacious lifting platforms, power racks, and precision free weights.",
    description:
      "Anchored by natural daylight and generous walkways, the main strength floor gives every lifter room to work without feeling rushed. Racks and platforms are arranged so beginners practicing form and experienced lifters working through heavier sets share a calm, respectful environment.",
    highlights: [
      "Dedicated power racks and cushioned lifting platforms",
      "Full dumbbell bays and calibrated bumper plates",
      "Rowers, ski ergs, and air bikes for structured intervals",
    ],
  },
  {
    index: "AREA 02",
    name: "The Functional Turf Lane",
    summary: "Open synthetic turf built for carries, sleds, kettlebells, and footwork.",
    description:
      "Running alongside the strength floor, our turf lane is designed for dynamic, full-body movement. Shock-absorbing transitions make it easy to move between kettlebell complexes, heavy rope intervals, sled drives, and athletic warmup drills.",
    highlights: [
      "Open turf lane for sled pushes, pulls, and farmer's carries",
      "Kettlebells, medicine balls, and battle ropes",
      "Uncluttered floor space for bodyweight and balance drills",
    ],
  },
  {
    index: "AREA 03",
    name: "The Mobility & Recovery Studio",
    summary: "A quiet, sunlit room separated from the sound of the weight floor.",
    description:
      "Recovery requires a different pace. Acoustically separated from the main gym floor, our recovery studio features warm lighting, cushioned mats, cork blocks, and foam rollers for guided stretching classes and quiet post-workout cooldowns.",
    highlights: [
      "Sound-buffered studio for calm stretching and breathwork",
      "Dense recovery mats, yoga blocks, straps, and rollers",
      "Open mat hours throughout the day plus daily guided classes",
    ],
  },
  {
    index: "AREA 04",
    name: "Small-Group & Coaching Bays",
    summary: "Pre-equipped training stations for cohorts of up to eight members.",
    description:
      "Small-Group sessions take place in dedicated bays where every participant has their own rack, bench, and weight selection ready before class begins—eliminating equipment bottlenecks so coaches can focus entirely on teaching.",
    highlights: [
      "Individual stations for up to 8 participants per cohort",
      "Clear sightlines for attentive coaching and form feedback",
      "Seamless flow between strength sets and conditioning",
    ],
  },
];

export const ABOUT_VALUES: CoreValue[] = [
  {
    index: "01",
    title: "Intention Over Intensity",
    description:
      "A great workout is measured by quality movement and steady progress, not by how exhausted you feel walking out the door.",
  },
  {
    index: "02",
    title: "Respect for Every Starting Point",
    description:
      "First-time gym-goers and lifelong athletes deserve the same thoughtful equipment, clear instruction, and welcoming atmosphere.",
  },
  {
    index: "03",
    title: "Calm by Design",
    description:
      "Natural light, organized equipment, and reasonable volume levels help you focus on your training and leave feeling restored.",
  },
  {
    index: "04",
    title: "Sustainable Longevity",
    description:
      "We pair resistance training with joint mobility and recovery so the strength you build supports your life for decades.",
  },
];
