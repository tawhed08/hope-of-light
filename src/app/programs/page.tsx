
import Link from "next/link";

const programs = [
  {
    number: "01",
    category: "Education",
    title: "A brighter future starts with learning.",
    description:
      "Help children access learning opportunities, educational resources and the support they need to reach their potential.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85",
    slug: "education",
    tone: "bg-[#E9E3D7]",
  },
  {
    number: "02",
    category: "Community Care",
    title: "Care that reaches those who need it.",
    description:
      "Connect vulnerable families with practical support, essential resources and a community that cares.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=85",
    slug: "community-care",
    tone: "bg-[#E8D7CA]",
  },
  {
    number: "03",
    category: "Food & Essentials",
    title: "Meeting essential needs with dignity.",
    description:
      "Support access to food and everyday essentials while helping families move towards greater stability.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=85",
    slug: "food-and-essentials",
    tone: "bg-[#DDE0D2]",
  },
  {
    number: "04",
    category: "Youth Empowerment",
    title: "Helping young people find their path.",
    description:
      "Encourage young people to build confidence, develop practical skills and explore new opportunities.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=85",
    slug: "youth-empowerment",
    tone: "bg-[#E5DCCF]",
  },
];

export default function ProgramsPage() {
  return (
    <main className="overflow-hidden bg-[#FAF6F3] text-[#34392D]">
      {/* Hero */}
      <section className="px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#BF4C21]" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#BF4C21]">
                  What we do
                </p>
              </div>

              <h1 className="max-w-4xl text-5xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Small steps.
                <br />
                <span className="font-serif italic text-[#BF4C21]">
                  Meaningful change.
                </span>
              </h1>
            </div>

            <div className="pb-2 lg:pl-8">
              <p className="text-base leading-8 text-[#77766C] sm:text-lg">
                Every community has its own needs and its own strengths. Our
                programs are designed to connect people with support,
                resources and opportunities for a brighter future.
              </p>

              <Link
                href="/volunteer"
                className="mt-6 inline-flex items-center gap-3 border-b border-[#BF4C21] pb-2 text-sm font-semibold text-[#555B46] transition hover:text-[#BF4C21]"
              >
                Be part of the change <span>↗</span>
              </Link>
            </div>
          </div>

          {/* Intro image */}
          <div className="relative mt-12 overflow-hidden rounded-3xl sm:mt-16">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1800&q=85"
              alt="Children and community members sharing a moment of hope"
              className="h-[300px] w-full object-cover sm:h-[430px] lg:h-[500px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#25291F]/75 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E7C3A8]">
                One mission, many possibilities
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-medium leading-tight sm:text-5xl">
                Hope grows when we grow together.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Program cards */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#BF4C21]">
                Our focus areas
              </p>
              <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
                Where hope takes shape.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[#77766C]">
              Explore the areas where we aim to make a meaningful difference.
              Each journey begins with people and their needs.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.slug}
                className="group overflow-hidden rounded-3xl border border-[#E8DFD6] bg-white/60 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <Link
                  href={`/programs/${program.slug}`}
                  aria-label={`Explore ${program.category}`}
                  className="block overflow-hidden"
                >
                  <div className={`relative ${program.tone}`}>
                    <img
                      src={program.image}
                      alt={program.category}
                      className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-[1.04] sm:h-[300px]"
                    />

                    <span className="absolute left-5 top-5 rounded-full bg-[#FAF6F3]/95 px-4 py-2 text-xs font-semibold text-[#555B46]">
                      {program.category}
                    </span>

                    <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FAF6F3] text-xl text-[#555B46] transition group-hover:bg-[#BF4C21] group-hover:text-white">
                      ↗
                    </span>
                  </div>
                </Link>

                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#BF4C21]">
                    PROGRAM {program.number}
                  </p>

                  <h3 className="mt-4 max-w-lg text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
                    {program.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#77766C]">
                    {program.description}
                  </p>

                  <Link
                    href={`/programs/${program.slug}`}
                    className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#555B46] transition hover:text-[#BF4C21]"
                  >
                    Explore this program <span>↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#555B46] px-5 py-20 text-[#FAF6F3] sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D9B49A]">
              Our approach
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              People first.
              <br />
              Always.
            </h2>
          </div>

          <div>
            <p className="text-xl leading-relaxed text-white/85 sm:text-2xl">
              Lasting change begins when we listen to communities, work
              alongside people and create opportunities with dignity.
            </p>

            <div className="mt-8 grid gap-6 border-t border-white/20 pt-7 sm:grid-cols-3">
              <div>
                <span className="text-sm text-[#D9B49A]">01</span>
                <h3 className="mt-2 text-lg font-medium">Listen</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Understand local needs.
                </p>
              </div>

              <div>
                <span className="text-sm text-[#D9B49A]">02</span>
                <h3 className="mt-2 text-lg font-medium">Collaborate</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Build solutions together.
                </p>
              </div>

              <div>
                <span className="text-sm text-[#D9B49A]">03</span>
                <h3 className="mt-2 text-lg font-medium">Empower</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Create future opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl bg-[#E9E3D7] p-8 sm:p-12 lg:flex-row lg:items-center lg:p-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#BF4C21]">
              Make a difference
            </p>

            <h2 className="mt-4 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              There is room for you in this story.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-[#6F7165]">
              Give your time, share your skills or help support work that
              brings people closer to a brighter future.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/volunteer"
              className="rounded-full bg-[#555B46] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#34392D]"
            >
              Volunteer ↗
            </Link>

            <Link
              href="/donate"
              className="rounded-full border border-[#555B46]/30 px-6 py-4 text-sm font-medium text-[#34392D] transition hover:bg-white/50"
            >
              Donate ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
