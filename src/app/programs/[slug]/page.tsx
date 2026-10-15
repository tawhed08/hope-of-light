
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Heart,
  HandHeart,
  Users,
} from "lucide-react";

const programs = {
  education: {
    number: "01",
    category: "Education & Learning",
    title: "Education for Every Child",
    subtitle:
      "Every child deserves the opportunity to learn, grow, and build a brighter future.",
    description:
      "Education opens doors to opportunity. Our education initiative aims to support children from underserved communities by improving access to learning resources and creating a supportive learning environment.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Children learning together in a classroom",
    color: "#555B46",
    icon: BookOpen,
    focus: [
      "Learning materials and school supplies",
      "Educational support for underserved children",
      "Community learning activities",
      "Encouraging school participation",
    ],
    approach:
      "We aim to work alongside families, educators, and local communities to understand children's learning needs and develop practical support initiatives.",
    goal: "Make learning opportunities more accessible to every child.",
  },
  "community-care": {
    number: "02",
    category: "Community Support",
    title: "Care That Reaches Everyone",
    subtitle:
      "A stronger community begins when we look after one another.",
    description:
      "Our community care initiative focuses on supporting vulnerable individuals and families. We aim to connect people with essential resources while encouraging compassion, dignity, and community participation.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Community volunteers supporting people",
    color: "#BF4C21",
    icon: HandHeart,
    focus: [
      "Support for vulnerable families",
      "Essential household supplies",
      "Community outreach initiatives",
      "Volunteer-led assistance",
    ],
    approach:
      "We aim to identify community needs through local engagement and coordinate support in a respectful, responsible, and transparent way.",
    goal: "Help create more caring, connected, and resilient communities.",
  },
  "food-and-essentials": {
    number: "03",
    category: "Food & Essential Needs",
    title: "Meeting Essential Needs",
    subtitle:
      "Small acts of kindness can help families face difficult times.",
    description:
      "Access to food and basic necessities is essential for everyday well-being. This initiative aims to support families facing hardship through organized community assistance and essential supply distribution.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Community food and essential support initiative",
    color: "#8A745F",
    icon: Heart,
    focus: [
      "Food assistance for families in need",
      "Distribution of essential supplies",
      "Community donation drives",
      "Emergency household support",
    ],
    approach:
      "We aim to coordinate donations, assess needs carefully, and distribute available resources fairly while respecting the dignity of every recipient.",
    goal: "Help families access essential resources during challenging times.",
  },
  "youth-empowerment": {
    number: "04",
    category: "Skills & Development",
    title: "Empowering the Next Generation",
    subtitle:
      "When young people have opportunities, entire communities can move forward.",
    description:
      "Young people bring energy, creativity, and new ideas to society. Our youth empowerment initiative aims to create opportunities for learning, volunteering, personal development, and practical skills building.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Young people learning and working together",
    color: "#555B46",
    icon: Users,
    focus: [
      "Youth volunteering opportunities",
      "Skills development activities",
      "Leadership and teamwork",
      "Community engagement projects",
    ],
    approach:
      "We aim to encourage young people to participate in meaningful community projects and explore opportunities to develop useful skills and confidence.",
    goal: "Help young people become confident contributors to their communities.",
  },
} as const;

type ProgramSlug = keyof typeof programs;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(programs).map((slug) => ({ slug }));
}

export default async function ProgramDetailsPage({ params }: PageProps) {
  const { slug } = await params;

  if (!Object.prototype.hasOwnProperty.call(programs, slug)) {
    notFound();
  }

  const program = programs[slug as ProgramSlug];
  const Icon = program.icon;

  return (
    <main className="min-h-screen bg-[#FAF6F3] text-[#292B25]">
      {/* Hero */}
      <section className="px-5 pb-16 pt-10 sm:px-8 sm:pb-20 lg:px-12 lg:pt-14">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#555B46] transition hover:gap-3"
          >
            <ArrowLeft size={17} />
            All Programs
          </Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: program.color }}
                >
                  <Icon size={21} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#777668]">
                  {program.category}
                </span>
              </div>

              <p className="mb-4 text-sm font-medium tracking-[0.25em] text-[#BF4C21]">
                OUR PROGRAM / {program.number}
              </p>

              <h1 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
                {program.title}
                <span className="text-[#BF4C21]">.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#68695F]">
                {program.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/volunteer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#555B46] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#414635]"
                >
                  Become a Volunteer
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8CEC3] px-6 py-3.5 text-sm font-semibold transition hover:bg-white"
                >
                  Support Our Work
                  <Heart size={16} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-[#C1B2A4]/40 sm:-right-5 sm:-top-5" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#E7DED5]">
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-5 max-w-[260px] rounded-2xl bg-white p-5 shadow-lg sm:bottom-6 sm:-left-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A745F]">
                  Our shared purpose
                </p>
                <p className="mt-2 text-lg font-semibold leading-snug">
                  {program.goal}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About this program */}
      <section className="border-y border-[#E6DDD4] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
              WHY IT MATTERS
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Meaningful change starts with understanding.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#68695F] sm:text-lg">
              {program.description}
            </p>
            <p className="mt-5 text-base leading-8 text-[#68695F]">
              At Hope of Light, we believe that lasting progress grows from
              empathy, community participation, and responsible action. Every
              initiative should respond to real needs and respect the people it
              aims to support.
            </p>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
              OUR FOCUS
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Where we hope to make a difference.
            </h2>
            <p className="mt-5 leading-7 text-[#68695F]">
              Our approach is built around practical actions, community
              collaboration, and a commitment to treating people with dignity.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {program.focus.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-[#E5DBD1] bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-sm font-semibold text-[#BF4C21]">
                  0{index + 1}
                </span>
                <div className="mt-6">
                  <CheckCircle2 size={23} className="text-[#555B46]" />
                </div>
                <p className="mt-4 font-medium leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#555B46] text-white md:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E4C7B5]">
              OUR APPROACH
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Working together, one step at a time.
            </h2>
            <p className="mt-6 leading-8 text-white/75">
              {program.approach}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-semibold transition hover:gap-3"
            >
              Learn about our mission
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="flex min-h-[280px] flex-col justify-center bg-[#454A38] p-8 sm:p-12 lg:p-16">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              <Heart size={26} />
            </div>
            <p className="text-2xl font-medium leading-relaxed sm:text-3xl">
              “A little kindness can become a light that reaches far beyond us.”
            </p>
            <p className="mt-5 text-sm text-white/60">
              The Hope of Light philosophy
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#EDE4DA] px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
            BE PART OF THE CHANGE
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Hope grows when we share it.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#68695F]">
            Give your time, share your skills, or support our mission. Every
            meaningful contribution begins with a willing heart.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 rounded-full bg-[#BF4C21] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#A43E19]"
            >
              Join as a Volunteer
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-full border border-[#C1B2A4] px-7 py-3.5 text-sm font-semibold transition hover:bg-white/70"
            >
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
