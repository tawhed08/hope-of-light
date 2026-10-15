import Link from "next/link";

const programs = [
  {
    number: "01",
    title: "Education for All",
    description:
      "Helping children access learning opportunities and build a brighter future.",
    href: "/programs/education",
    accent: "bg-[#E9E4D8]",
  },
  {
    number: "02",
    title: "Community Care",
    description:
      "Supporting families and creating stronger, more caring communities.",
    href: "/programs/community-care",
    accent: "bg-[#E8D7CA]",
  },
  {
    number: "03",
    title: "Food & Essentials",
    description:
      "Connecting people in need with essential resources and compassionate care.",
    href: "/programs/food-and-essentials",
    accent: "bg-[#DFE2D6]",
  },
  {
    number: "04",
    title: "Youth Empowerment",
    description:
      "Encouraging young people to discover their potential and create change.",
    href: "/programs/youth-empowerment",
    accent: "bg-[#F0E2D8]",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#FAF6F3] text-[#292B25]">
      {/* HERO */}
      <section className="relative flex min-h-[680px] items-center overflow-hidden bg-[#292D24] md:min-h-[760px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#20251E]/90 via-[#20251E]/65 to-[#20251E]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#20251E]/50 via-transparent to-[#20251E]/10" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#D8B49A]" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/90">
                Hope begins with kindness
              </span>
            </div>

            <h1 className="text-5xl font-medium leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Together, we can
              <span className="mt-2 block font-serif italic text-[#E5C6B5]">
                make a difference.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/80 md:text-lg">
              Every person deserves hope, care, and the opportunity to thrive.
              Join us in creating meaningful change for communities in need.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="inline-flex items-center gap-3 rounded-full bg-[#BF4C21] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#A83E1C]"
              >
                Make a difference <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center gap-3 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore our work <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-16 flex items-center gap-4 text-sm text-white/70">
              <span className="h-px w-12 bg-[#E5C6B5]" />
              Small acts of kindness. A brighter world.
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden text-xs uppercase tracking-[0.25em] text-white/60 md:block">
          Hope of Light · Making change together
        </div>
      </section>

      {/* INTRODUCTION / MISSION */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
              Our mission
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
              A little hope can change{" "}
              <span className="font-serif italic text-[#777C66]">
                everything.
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-8 text-[#66685E]">
              At Hope of Light, we believe meaningful change begins when people
              come together with compassion and purpose. We work to support
              individuals and families facing challenges and help create
              opportunities for a better tomorrow.
            </p>

            <p className="mt-5 text-base leading-8 text-[#77786E]">
              Through education, community support, essential resources, and
              youth empowerment, we aim to turn kindness into lasting impact.
            </p>

            <Link
              href="/about"
              className="group mt-8 inline-flex w-fit items-center gap-3 border-b border-[#BF4C21]/40 pb-2 text-sm font-semibold text-[#BF4C21] transition-colors hover:border-[#BF4C21]"
            >
              Get to know us
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-white px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
                What we do
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
                Hope in action.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-[#77786E]">
                We focus on practical ways to support people, strengthen
                communities, and open doors to new opportunities.
              </p>
            </div>

            <Link
              href="/programs"
              className="group inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#BF4C21]"
            >
              All our programs
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <Link
                key={program.number}
                href={program.href}
                className="group flex min-h-[310px] flex-col rounded-2xl border border-[#E8E2DB] bg-[#FAF6F3] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#C1B2A4] hover:shadow-xl hover:shadow-[#555B46]/5"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${program.accent} text-sm font-semibold text-[#555B46]`}
                >
                  {program.number}
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-tight">
                  {program.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#77786E]">
                  {program.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-8 text-sm font-semibold text-[#BF4C21]">
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
              Why it matters
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Change starts when we{" "}
              <span className="font-serif italic text-[#777C66]">
                care enough.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-[#77786E]">
              Real change is built through consistent care, shared
              responsibility, and people who believe that a better future is
              possible. Every contribution, every hour, and every act of
              kindness can help move that future closer.
            </p>

            <Link
              href="/impact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#555B46] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#424737]"
            >
              Discover our impact
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#555B46] p-8 text-[#FAF6F3] sm:p-12 md:p-14">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/15"
            />
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/15"
            />

            <span className="relative text-5xl text-[#E5C6B5]">“</span>

            <blockquote className="relative mt-4 font-serif text-3xl leading-snug sm:text-4xl">
              The smallest act of kindness can become someone else’s reason to
              hope.
            </blockquote>

            <div className="relative mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#E5C6B5]" />
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                The spirit of Hope of Light
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DONATE CTA */}
      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#E9E4D8] px-7 py-16 sm:px-12 md:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#555B46]/15"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-14 h-52 w-52 rounded-full border border-[#555B46]/15"
          />

          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
              Be part of the change
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Your kindness can light the way.
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-[#66685E]">
              Whether you donate, volunteer, or share our mission, you can help
              bring hope to someone who needs it.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="inline-flex items-center gap-3 rounded-full bg-[#BF4C21] px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#A83E1C]"
              >
                Support our mission <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/volunteer"
                className="inline-flex items-center gap-3 rounded-full border border-[#555B46]/30 px-7 py-4 text-sm font-semibold text-[#555B46] transition-colors hover:bg-white/60"
              >
                Become a volunteer <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM FOOTER */}
      <footer className="relative overflow-hidden border-t border-[#555B46]/20 bg-[#555B46] text-[#FAF6F3]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10"
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">
            <div className="lg:col-span-4">
              <Link
                href="/"
                aria-label="Hope of Light home"
                className="group inline-flex items-center gap-3"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FAF6F3] text-2xl text-[#BF4C21] transition-transform duration-300 group-hover:rotate-12">
                  ✳
                </span>
                <span>
                  <span className="block text-xl font-semibold tracking-tight">
                    Hope of Light
                  </span>
                  <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-white/60">
                    Bringing hope. Creating change.
                  </span>
                </span>
              </Link>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
                We believe every act of kindness can create a brighter future.
                Together, we can bring hope, care, and meaningful change to
                communities in need.
              </p>

              <Link
                href="/donate"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#BF4C21] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#A83E1C] hover:shadow-lg hover:shadow-black/10"
              >
                Make a difference <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="lg:col-span-2 lg:col-start-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C6B5]">
                Explore
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-white/70">
                {[
                  { label: "Home", href: "/" },
                  { label: "About us", href: "/about" },
                  { label: "Our programs", href: "/programs" },
                  { label: "Our impact", href: "/impact" },
                  { label: "Stories", href: "/stories" },
                  { label: "Gallery", href: "/gallery" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2 transition-colors duration-200 hover:text-white"
                    >
                      <span className="h-px w-0 bg-[#E5C6B5] transition-all duration-300 group-hover:w-3" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C6B5]">
                Get involved
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-white/70">
                {[
                  { label: "Donate", href: "/donate" },
                  { label: "Volunteer", href: "/volunteer" },
                  { label: "Contact us", href: "/contact" },
                  { label: "Our impact", href: "/impact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2 transition-colors duration-200 hover:text-white"
                    >
                      <span className="h-px w-0 bg-[#E5C6B5] transition-all duration-300 group-hover:w-3" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C6B5]">
                Stay connected
              </h2>
              <p className="mt-6 text-sm leading-7 text-white/70">
                Have an idea, want to volunteer, or looking to support our
                mission? We would love to hear from you.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#E5C6B5]"
              >
                Let&apos;s talk <span aria-hidden="true">↗</span>
              </Link>
              <div className="mt-6">
                <Link
                  href="/volunteer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-xs font-medium text-white/85 transition-all duration-300 hover:border-[#E5C6B5] hover:bg-white/10 hover:text-white"
                >
                  Become a volunteer <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/15 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>
             © 2026 Hope of Light. All rights reserved.
            </p>
            <p className="text-white/70">
              Made with <span className="text-[#E5A58B]">♥</span> for a
              brighter world.
            </p>
            <Link
              href="/contact"
              className="w-fit transition-colors hover:text-white"
            >
              Get in touch ↗
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}