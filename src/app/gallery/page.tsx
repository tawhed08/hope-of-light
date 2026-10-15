
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Camera,
  Heart,
  Images,
} from "lucide-react";

const categories = [
  "All Moments",
  "Education",
  "Community",
  "Volunteers",
  "Nature",
] as const;

type Category = (typeof categories)[number];

const galleryItems: {
  id: number;
  title: string;
  category: Exclude<Category, "All Moments">;
  image: string;
  alt: string;
  size: "large" | "normal";
}[] = [
  {
    id: 1,
    title: "A place to learn and grow",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
    alt: "Children learning together in a classroom",
    size: "large",
  },
  {
    id: 2,
    title: "The power of community",
    category: "Community",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=85",
    alt: "People joining a community support activity",
    size: "normal",
  },
  {
    id: 3,
    title: "Young minds, new possibilities",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
    alt: "Students learning in a classroom",
    size: "normal",
  },
  {
    id: 4,
    title: "Together makes a difference",
    category: "Volunteers",
    image:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=85",
    alt: "People gathered for a collaborative community activity",
    size: "large",
  },
  {
    id: 5,
    title: "Small acts of kindness",
    category: "Community",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=85",
    alt: "People participating in a charitable community activity",
    size: "normal",
  },
  {
    id: 6,
    title: "A greener tomorrow",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",
    alt: "Sunlight filtering through a green forest",
    size: "normal",
  },
  {
    id: 7,
    title: "Learning beyond the classroom",
    category: "Volunteers",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=85",
    alt: "Young people learning and working together",
    size: "normal",
  },
  {
    id: 8,
    title: "Room for every possibility",
    category: "Nature",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85",
    alt: "Warm morning sunlight across a natural landscape",
    size: "large",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All Moments");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All Moments") {
      return galleryItems;
    }

    return galleryItems.filter(
      (item) => item.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF6F3] text-[#292B25]">
      {/* Hero */}
      <section className="px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.7fr] lg:gap-16">
            <div>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#DCD2C8] px-4 py-2">
                <Camera size={15} className="text-[#BF4C21]" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#555B46]">
                  A Window Into Our World
                </span>
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Moments that tell a story of{" "}
                <span className="font-serif italic text-[#BF4C21]">
                  hope.
                </span>
              </h1>
            </div>

            <div className="pb-1">
              <p className="text-base leading-8 text-[#68695F] sm:text-lg">
                Every meaningful journey is made of little moments. Explore
                the themes, people, and possibilities that inspire the Hope
                of Light mission.
              </p>

              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#555B46] transition hover:gap-3"
              >
                Discover our mission
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Featured image */}
          <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-[#E7DED5]">
            <div className="relative aspect-[16/9] max-h-[600px] min-h-[260px] sm:aspect-[2/1]">
              <Image
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=2000&q=90"
                alt="People working together in a community setting"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10 lg:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                  THE SPIRIT OF TOGETHERNESS
                </p>

                <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
                  Every little effort can help light the way.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                  A shared vision for a kinder, more connected world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
                THE GALLERY
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                A collection of possibilities.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#68695F]">
              Browse the gallery by theme. These photographs are illustrative
              stock images, not verified records of Hope of Light activities.
            </p>
          </div>

          {/* Category filter */}
          <div className="mt-8 flex gap-2 overflow-x-auto pb-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`shrink-0 rounded-full border px-5 py-3 text-sm font-medium transition ${
                    isActive
                      ? "border-[#555B46] bg-[#555B46] text-white"
                      : "border-[#D8CEC3] bg-white text-[#555B46] hover:border-[#555B46]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Responsive image grid */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, index) => (
              <article
                key={item.id}
                className={`group overflow-hidden rounded-[1.5rem] bg-white ${
                  activeCategory === "All Moments" && item.size === "large"
                    ? "lg:col-span-2"
                    : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-[#E7DED5] ${
                    activeCategory === "All Moments" &&
                    item.size === "large"
                      ? "aspect-[5/3] lg:aspect-[16/9]"
                      : "aspect-[5/4]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes={
                      activeCategory === "All Moments" &&
                      item.size === "large"
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                    <div className="text-white">
                      <span className="inline-block rounded-full bg-white/20 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        {item.category}
                      </span>

                      <h3 className="mt-3 text-xl font-semibold leading-snug sm:text-2xl">
                        {item.title}
                      </h3>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#555B46] transition group-hover:-rotate-45">
                      <ArrowRight size={18} />
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between px-5 py-4 text-xs text-[#777668]">
                  <span>HOPE OF LIGHT · VISUAL INSPIRATION</span>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="py-16 text-center text-[#68695F]">
              No images found in this category.
            </p>
          )}

          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-[#777668]">
            <Images size={17} />
            <span>
              Showing {filteredItems.length}{" "}
              {filteredItems.length === 1 ? "image" : "images"}
            </span>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="border-y border-[#E4DAD0] bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
              BEHIND EVERY IMAGE
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Real stories deserve to be told with care.
            </h2>
          </div>

          <p className="leading-8 text-[#68695F]">
            As Hope of Light develops its community programs, this gallery can
            grow to include original photographs, project updates, and
            approved stories from real activities. We believe every person
            deserves dignity, privacy, and respect in the way their story is
            shared.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#555B46] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            <Heart size={25} />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#E4C7B5]">
            BE PART OF SOMETHING MEANINGFUL
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            The next chapter begins with you.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-white/75">
            Bring your time, skills, and compassion to a community that
            believes in the power of helping one another.
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

          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/55">
            <Images size={15} />
            Hope of Light · Bringing Hope. Creating Change.
          </div>
        </div>
      </section>
    </main>
  );
}
