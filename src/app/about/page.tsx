
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Compassion first",
    description:
      "We listen, understand and respond to people with dignity, kindness and respect.",
  },
  {
    number: "02",
    title: "Community led",
    description:
      "We work alongside local communities because lasting change begins with their voices.",
  },
  {
    number: "03",
    title: "Impact that lasts",
    description:
      "We focus on meaningful opportunities that help people build brighter futures.",
  },
];

const milestones = [
  {
    number: "01",
    title: "Listen",
    text: "Understand the real needs of each community.",
  },
  {
    number: "02",
    title: "Connect",
    text: "Bring people, resources and ideas together.",
  },
  {
    number: "03",
    title: "Empower",
    text: "Create opportunities for people to thrive.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#FAF6F3] text-[#34392D]">
      {/* Hero */}
      <section className="px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12 lg:pb-28 lg:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#BF4C21]" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#BF4C21]">
                Get to know us
              </p>
            </div>

            <h1 className="max-w-2xl text-5xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              A little hope can change{" "}
              <span className="font-serif italic text-[#BF4C21]">
                everything.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#6F7165] sm:text-lg">
              We believe every person deserves the chance to live with dignity,
              discover their potential and build a future filled with possibility.
              That belief is at the heart of Hope of Light.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full bg-[#555B46] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#34392D]"
              >
                Explore our work <span className="ml-3">↗</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#D8CEC3] px-7 py-4 text-sm font-medium transition hover:border-[#555B46]"
              >
                Get in touch
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4 border-t border-[#E5DDD4] pt-6">
              <div className="flex -space-x-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FAF6F3] bg-[#C1B2A4] text-sm">
                  ♡
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FAF6F3] bg-[#D9B49A] text-sm">
                  ✳
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FAF6F3] bg-[#A9AE96] text-sm">
                  ♥
                </span>
              </div>

              <p className="text-sm leading-6 text-[#77766C]">
                Every act of kindness helps
                <br className="hidden sm:block" /> build a brighter tomorrow.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-[#E9D8C9] sm:-right-8 sm:-top-8 sm:h-44 sm:w-44" />

            <div className="relative overflow-hidden rounded-t-[48%] rounded-b-2xl bg-[#DDD2C5]">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85"
                alt="Children sharing a joyful moment together"
                className="h-[430px] w-full object-cover sm:h-[560px]"
              />
            </div>

            <div className="absolute -bottom-5 left-4 max-w-[245px] rounded-2xl bg-white p-5 shadow-xl sm:-left-7 sm:bottom-7 sm:p-6">
              <span className="text-3xl text-[#BF4C21]">✳</span>
              <p className="mt-2 font-serif text-xl italic text-[#555B46]">
                Kindness makes room for hope.
              </p>
            </div>

            <span className="absolute -right-2 bottom-12 hidden text-5xl text-[#BF4C21] sm:block">
              ✳
            </span>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#555B46] px-5 py-20 text-[#FAF6F3] sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D9B49A]">
              Our purpose
            </p>
            <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
              Why we exist.
            </h2>
          </div>

          <div>
            <p className="text-2xl leading-relaxed tracking-tight sm:text-3xl sm:leading-relaxed">
              We are here to help create a world where{" "}
              <span className="font-serif italic text-[#E7C3A8]">
                opportunity is shared,
              </span>{" "}
              communities are supported and no one has to face hardship alone.
            </p>

            <p className="mt-7 max-w-2xl leading-8 text-white/70">
              Through community support, education and meaningful partnerships,
              Hope of Light aims to connect people with the resources and
              opportunities they need to move forward.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#BF4C21]">
                What guides us
              </p>
              <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
                Our values, in action.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[#77766C]">
              Our values shape how we listen, how we work and how we show up
              for the people around us.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-[#E8DFD6] bg-white/60 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg sm:p-9"
              >
                <span className="text-sm font-medium text-[#BF4C21]">
                  {item.number} / 03
                </span>

                <div className="my-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#EDE8DE] text-2xl text-[#555B46] transition group-hover:bg-[#555B46] group-hover:text-white">
                  {item.number === "01"
                    ? "♡"
                    : item.number === "02"
                      ? "✳"
                      : "↗"}
                </div>

                <h3 className="text-2xl font-medium">{item.title}</h3>

                <p className="mt-4 leading-7 text-[#77766C]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-[#EDE6DC] lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#BF4C21]">
              How we make a difference
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Real change begins with people.
            </h2>

            <p className="mt-6 leading-8 text-[#6F7165]">
              We believe meaningful progress happens when communities have a
              voice, people work together and support reaches those who need it.
              Our approach is built around understanding needs and helping
              create practical, lasting opportunities.
            </p>

            <Link
              href="/impact"
              className="mt-8 inline-flex w-fit items-center gap-3 border-b border-[#BF4C21] pb-2 text-sm font-semibold text-[#555B46]"
            >
              Discover our approach <span>↗</span>
            </Link>
          </div>

          <div className="min-h-[320px] bg-[#D5C5B5]">
            <img
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=85"
              alt="Community members working together to support others"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="mb-9">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#BF4C21]">
              Our approach
            </p>
            <h2 className="mt-4 text-3xl font-medium sm:text-4xl">
              From listening to lasting change.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {milestones.map((item) => (
              <div
                key={item.number}
                className="border-t border-[#D9CEC2] pt-5"
              >
                <span className="text-sm text-[#BF4C21]">
                  {item.number}
                </span>
                <h3 className="mt-4 text-2xl font-medium">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#77766C]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#C1B2A4] px-7 py-14 text-center sm:px-12 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#555B46]">
            There is a place for you here
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-tight sm:text-6xl">
            Be part of something that matters.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#4F5047]">
            Your time, your voice and your generosity can help make a difference.
            Let&apos;s create brighter possibilities together.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/volunteer"
              className="rounded-full bg-[#555B46] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#34392D]"
            >
              Become a volunteer ↗
            </Link>

            <Link
              href="/donate"
              className="rounded-full border border-[#555B46]/40 px-7 py-4 text-sm font-medium text-[#34392D] transition hover:bg-white/30"
            >
              Support our mission
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
