
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Heart,
  HandHeart,
  Sprout,
  Users,
  CheckCircle2,
} from "lucide-react";

const impactAreas = [
  {
    number: "01",
    title: "Education & Opportunity",
    description:
      "Help create opportunities for children to learn, develop confidence, and work toward a brighter future.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Children learning and studying together",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Community Care",
    description:
      "Support initiatives that respond to local needs and help vulnerable individuals and families.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Volunteers participating in community support",
    icon: HandHeart,
  },
  {
    number: "03",
    title: "Essential Support",
    description:
      "Help communities access essential supplies and practical assistance during challenging times.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "People participating in a charitable community initiative",
    icon: Heart,
  },
];

const principles = [
  {
    number: "01",
    title: "Understand the need",
    description:
      "Listen to communities and learn about the challenges people face before planning an initiative.",
  },
  {
    number: "02",
    title: "Take thoughtful action",
    description:
      "Bring volunteers, resources, and community partners together to respond to identified needs.",
  },
  {
    number: "03",
    title: "Learn and improve",
    description:
      "Review activities, listen to feedback, and communicate progress honestly with supporters.",
  },
];

export default function ImpactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF6F3] text-[#292B25]">
      {/* Hero */}
      <section className="px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#DCD2C8] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#BF4C21]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#555B46]">
                  Our Impact & Purpose
                </span>
              </div>

              <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Every act of care can create{" "}
                <span className="font-serif italic text-[#BF4C21]">
                  lasting hope.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#68695F] sm:text-lg">
                At Hope of Light, we believe meaningful change begins with
                people. Through education, community care, and essential
                support, we aim to help build a future filled with dignity,
                opportunity, and hope.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 rounded-full bg-[#555B46] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#414635]"
                >
                  Explore Our Programs
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D8CEC3] px-6 py-3.5 text-sm font-semibold transition hover:bg-white"
                >
                  Our Mission
                  <ArrowDownRight size={17} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-[#C1B2A4]/40 sm:-right-6 sm:-top-6" />

              <div className="relative aspect-[4/5] max-h-[620px] overflow-hidden rounded-[2rem] bg-[#E7DED5]">
                <Image
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1400&q=85"
                  alt="People coming together to support a community initiative"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-white/70 bg-white/95 p-5 shadow-lg sm:bottom-7 sm:left-[-28px] sm:right-auto sm:max-w-[300px] sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#BF4C21]">
                  What guides us
                </p>
                <p className="mt-2 text-xl font-semibold leading-snug">
                  People first. Purpose always.
                </p>
                <p className="mt-2 text-sm leading-6 text-[#68695F]">
                  Every initiative should begin with empathy and respect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="border-y border-[#E4DAD0] bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3 md:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#BF4C21]">
              OUR PURPOSE
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Hope that leads to action.
            </h2>
          </div>

          <p className="leading-8 text-[#68695F]">
            We aim to connect compassion with practical community initiatives
            that respond to real needs and create opportunities for positive
            change.
          </p>

          <p className="leading-8 text-[#68695F]">
            We believe trust grows through responsible action, honest
            communication, and meaningful relationships with the communities
            we serve.
          </p>
        </div>
      </section>

      {/* Impact areas */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
                WHERE WE FOCUS
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Change begins with the things that matter.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[#68695F]">
              Our programs are designed around important community needs and
              the belief that everyone deserves a chance to thrive.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {impactAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.number}
                  className="group overflow-hidden rounded-[1.5rem] border border-[#E5DBD1] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-[#E7DED5]">
                    <Image
                      src={area.image}
                      alt={area.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full bg-[#FAF6F3] px-3 py-1.5 text-xs font-semibold text-[#555B46]">
                      {area.number}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F0EAE2] text-[#555B46]">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                      {area.title}
                    </h3>

                    <p className="mt-3 min-h-[84px] leading-7 text-[#68695F]">
                      {area.description}
                    </p>

                    <Link
                      href="/programs"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#555B46] transition group-hover:gap-3"
                    >
                      Explore our programs
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we approach impact */}
      <section className="bg-[#EDE5DC] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
              OUR APPROACH
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Good intentions deserve thoughtful action.
            </h2>

            <p className="mt-6 leading-8 text-[#68695F]">
              Creating meaningful impact is an ongoing process. We aim to
              understand needs, take responsible action, and keep improving
              through community feedback and reflection.
            </p>

            <div className="mt-8 flex items-start gap-3">
              <Sprout className="mt-1 shrink-0 text-[#555B46]" size={23} />
              <p className="text-sm leading-7 text-[#555B46]">
                Our long-term vision is to build initiatives that are
                community-informed, responsible, and focused on sustainable
                progress.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="flex gap-5 rounded-2xl border border-[#D8CEC3] bg-[#FAF6F3] p-5 sm:gap-7 sm:p-7"
              >
                <span className="pt-1 text-sm font-semibold text-[#BF4C21]">
                  {principle.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold">
                    {principle.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[#68695F]">
                    {principle.description}
                  </p>
                </div>

                <CheckCircle2
                  className="ml-auto mt-1 shrink-0 text-[#555B46]"
                  size={21}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community quote */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E9DFD4] text-[#BF4C21]">
            <Users size={26} />
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
            THE POWER OF COMMUNITY
          </p>

          <blockquote className="mt-5 text-3xl font-medium leading-snug tracking-tight sm:text-5xl">
            “The greatest change begins when we choose to care for one another.”
          </blockquote>

          <p className="mt-6 text-sm text-[#777668]">
            The spirit behind Hope of Light
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#555B46] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            <Heart size={26} />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#E4C7B5]">
            BE PART OF THE STORY
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Your kindness can help light the way.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-white/75">
            Join our community of people who believe that compassion can
            inspire action and help create a better tomorrow.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FAF6F3] px-7 py-3.5 text-sm font-semibold text-[#414635] transition hover:bg-white"
            >
              Become a Volunteer
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Support Our Mission
              <Heart size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
