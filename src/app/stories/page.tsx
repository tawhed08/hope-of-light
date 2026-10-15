
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Heart,
  Sprout,
} from "lucide-react";

const stories = [
  {
    category: "Education",
    title: "A brighter future begins with the chance to learn",
    description:
      "Access to learning resources can help children explore their potential, develop confidence, and imagine new possibilities.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Children learning together in a classroom",
    number: "01",
    href: "/programs/education",
  },
  {
    category: "Community Care",
    title: "The difference we can make when we care together",
    description:
      "When neighbours, volunteers, and community partners work together, practical support becomes a shared responsibility.",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "People participating in a community support activity",
    number: "02",
    href: "/programs/community-care",
  },
  {
    category: "Youth Empowerment",
    title: "Small opportunities can inspire big ambitions",
    description:
      "Learning new skills, sharing ideas, and contributing to community projects can help young people grow with purpose.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Young people learning and working together",
    number: "03",
    href: "/programs/youth-empowerment",
  },
];

export default function StoriesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF6F3] text-[#292B25]">
      {/* Hero */}
      <section className="px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#DCD2C8] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#BF4C21]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#555B46]">
                  Stories of Hope
                </span>
              </div>

              <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Every person has a story worth{" "}
                <span className="font-serif italic text-[#BF4C21]">
                  sharing.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#68695F] sm:text-lg">
                Behind every meaningful change is a human story. Explore the
                ideas, experiences, and acts of kindness that inspire our
                vision for a more caring world.
              </p>

              <Link
                href="#stories"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#555B46] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#414635]"
              >
                Explore the Stories
                <ArrowDownRight size={17} />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-[#C1B2A4]/50" />

              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#E7DED5]">
                <Image
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1400&q=85"
                  alt="People coming together for a community initiative"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-5 right-4 max-w-[270px] rounded-2xl bg-white p-5 shadow-lg sm:bottom-6 sm:-right-6 sm:p-6">
                <Heart size={24} className="text-[#BF4C21]" />
                <p className="mt-3 text-lg font-semibold leading-snug">
                  Kindness connects us all.
                </p>
                <p className="mt-2 text-sm leading-6 text-[#68695F]">
                  A shared belief at the heart of Hope of Light.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-y border-[#E4DAD0] bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-[0.7fr_1.3fr] md:items-center md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
              WHY STORIES MATTER
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Beyond the numbers, there are people.
            </h2>
          </div>

          <p className="text-base leading-8 text-[#68695F] sm:text-lg">
            Social impact is about more than activities and resources. It is
            also about listening, understanding different experiences, and
            recognizing the dignity and potential of every person. We want
            this space to share meaningful stories with care, honesty, and
            respect.
          </p>
        </div>
      </section>

      {/* Featured story */}
      <section id="stories" className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
                THE BIGGER PICTURE
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                Stories that move us forward.
              </h2>
            </div>
            <span className="rounded-full border border-[#D8CEC3] px-4 py-2 text-xs font-medium text-[#68695F]">
              Editorial highlights
            </span>
          </div>

          <article className="grid overflow-hidden rounded-[2rem] bg-[#555B46] text-white md:grid-cols-2">
            <div className="relative min-h-[300px] bg-[#E7DED5] md:min-h-[470px]">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=85"
                alt="Community members taking part in a charitable initiative"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E4C7B5]">
                A SHARED PURPOSE
              </p>

              <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                A little light can change the way we see tomorrow.
              </h3>

              <p className="mt-5 leading-8 text-white/75">
                Strong communities grow when people listen to one another,
                share what they can, and work toward a future where more
                people have opportunities to thrive.
              </p>

              <div className="mt-8 border-t border-white/20 pt-6">
                <p className="text-sm text-white/60">
                  An introduction to the values behind our work
                </p>
                <Link
                  href="/about"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3"
                >
                  Discover our mission
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Story cards */}
      <section className="bg-[#EDE5DC] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
              EXPLORE OUR THEMES
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Different paths. One shared hope.
            </h2>
            <p className="mt-5 leading-7 text-[#68695F]">
              Discover the themes that shape our mission and the kind of
              positive change we hope to encourage.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <article
                key={story.number}
                className="group overflow-hidden rounded-[1.5rem] border border-[#E1D6CB] bg-[#FAF6F3] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={story.href} className="block">
                  <div className="relative aspect-[5/4] overflow-hidden bg-[#E7DED5]">
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[#FAF6F3] px-3 py-1.5 text-xs font-semibold text-[#555B46]">
                      {story.category}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#BF4C21]">
                      STORY THEME / {story.number}
                    </p>

                    <h3 className="mt-4 text-2xl font-semibold leading-snug tracking-tight">
                      {story.title}
                    </h3>

                    <p className="mt-4 leading-7 text-[#68695F]">
                      {story.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#555B46] transition group-hover:gap-3">
                      Explore this program
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm leading-6 text-[#777668]">
            These sections present illustrative themes, not verified
            beneficiary testimonials or reports of completed projects.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
              STORIES WITH INTEGRITY
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Every voice deserves respect.
            </h2>

            <p className="mt-6 leading-8 text-[#68695F]">
              We believe stories should be shared responsibly. Real
              testimonials and community experiences should be published only
              with appropriate permission and accurate context.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 rounded-2xl border border-[#E5DBD1] bg-white p-6">
              <BookOpen className="mt-1 shrink-0 text-[#555B46]" size={23} />
              <div>
                <h3 className="text-lg font-semibold">Honest storytelling</h3>
                <p className="mt-2 leading-7 text-[#68695F]">
                  Share experiences and project updates with clear, truthful
                  descriptions.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-[#E5DBD1] bg-white p-6">
              <Heart className="mt-1 shrink-0 text-[#BF4C21]" size={23} />
              <div>
                <h3 className="text-lg font-semibold">Dignity and empathy</h3>
                <p className="mt-2 leading-7 text-[#68695F]">
                  Respect people's privacy, choices, and dignity in every
                  story we share.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-[#E5DBD1] bg-white p-6">
              <Sprout className="mt-1 shrink-0 text-[#555B46]" size={23} />
              <div>
                <h3 className="text-lg font-semibold">Learning together</h3>
                <p className="mt-2 leading-7 text-[#68695F]">
                  Use feedback and real experiences to help shape more
                  thoughtful community initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#555B46] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E4C7B5]">
            BECOME PART OF THE STORY
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Together, we can inspire a brighter tomorrow.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-white/75">
            Share your time, contribute your skills, or help support
            community-focused initiatives through Hope of Light.
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
