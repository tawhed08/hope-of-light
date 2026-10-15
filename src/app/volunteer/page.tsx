
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Heart,
  HandHeart,
  Leaf,
  Mail,
  Users,
  Send,
  Sparkles,
} from "lucide-react";

const opportunities = [
  {
    icon: BookOpen,
    title: "Education Support",
    description:
      "Help create welcoming learning environments and support educational activities for children and young people.",
    commitment: "Flexible schedule",
    color: "bg-[#F2E7DC]",
  },
  {
    icon: Users,
    title: "Community Outreach",
    description:
      "Help connect communities with useful resources and make local outreach activities more welcoming.",
    commitment: "Project-based",
    color: "bg-[#E8EBDD]",
  },
  {
    icon: HandHeart,
    title: "Event Volunteering",
    description:
      "Support event planning, coordination, and the practical details that help community activities run smoothly.",
    commitment: "Occasional events",
    color: "bg-[#F3E3DE]",
  },
  {
    icon: Leaf,
    title: "Environmental Action",
    description:
      "Contribute to community awareness, greener spaces, and activities that encourage environmental responsibility.",
    commitment: "Flexible schedule",
    color: "bg-[#E8EBDD]",
  },
];

const steps = [
  {
    number: "01",
    title: "Introduce yourself",
    description:
      "Tell us a little about who you are, what you care about, and how you would like to help.",
  },
  {
    number: "02",
    title: "Find your fit",
    description:
      "Explore opportunities that match your interests, availability, and skills.",
  },
  {
    number: "03",
    title: "Take your first step",
    description:
      "Connect with the team to discuss suitable opportunities and next steps.",
  },
];

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
    availability: "",
    message: "",
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF6F3] text-[#292B25]">
      {/* Hero */}
      <section className="px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#DCD2C8] px-4 py-2">
              <Heart size={15} className="text-[#BF4C21]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#555B46]">
                Give Your Time. Share Your Light.
              </span>
            </div>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Be the reason someone{" "}
              <span className="font-serif italic text-[#BF4C21]">
                believes.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#68695F] sm:text-lg">
              You don&apos;t need to have everything figured out to make a
              difference. Bring your time, your kindness, and your willingness
              to help. We&apos;ll explore what we can do together.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-full bg-[#555B46] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#424735]"
              >
                Become a Volunteer
                <ArrowRight size={17} />
              </a>

              <a
                href="#opportunities"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4C8BC] px-7 py-3.5 text-sm font-semibold text-[#555B46] transition hover:bg-white"
              >
                Explore Opportunities
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#68695F]">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#BF4C21]" />
                Every skill matters
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#BF4C21]" />
                Start where you are
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -right-4 -top-5 h-28 w-28 rounded-full bg-[#D8C5B5]/50 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[#E7DED5]">
              <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1400&q=85"
                  alt="People collaborating during a community activity"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                    THE POWER OF SHOWING UP
                  </p>
                  <p className="mt-3 max-w-sm text-2xl font-semibold leading-snug sm:text-3xl">
                    A little of your time can open up new possibilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-[#E9DED3] bg-white p-4 shadow-lg sm:-left-6 sm:p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3E3DE] text-[#BF4C21]">
                <HandHeart size={22} />
              </div>
              <div>
                <p className="font-semibold text-[#292B25]">
                  Start with kindness
                </p>
                <p className="mt-1 text-xs text-[#777668]">
                  Your willingness is a beginning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="border-y border-[#E4DAD0] bg-white px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-3 sm:gap-8">
          <div className="flex items-start gap-4">
            <Clock3 className="mt-1 shrink-0 text-[#BF4C21]" size={23} />
            <div>
              <h2 className="font-semibold">Your time, your way</h2>
              <p className="mt-2 text-sm leading-6 text-[#777668]">
                Explore flexible ways to contribute based on your availability.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Sparkles className="mt-1 shrink-0 text-[#BF4C21]" size={23} />
            <div>
              <h2 className="font-semibold">Bring your strengths</h2>
              <p className="mt-2 text-sm leading-6 text-[#777668]">
                Your experience, interests, and fresh ideas can all be valuable.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Users className="mt-1 shrink-0 text-[#BF4C21]" size={23} />
            <div>
              <h2 className="font-semibold">Make it meaningful</h2>
              <p className="mt-2 text-sm leading-6 text-[#777668]">
                Work with others who want to contribute to a more caring world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section
        id="opportunities"
        className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
                FIND YOUR PLACE
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                There&apos;s more than one way to help.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#68695F]">
              Choose a starting point that feels right for you. Opportunities
              depend on program needs and availability.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {opportunities.map((opportunity) => {
              const Icon = opportunity.icon;

              return (
                <article
                  key={opportunity.title}
                  className="group flex flex-col rounded-[1.5rem] border border-[#E7DDD3] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${opportunity.color} text-[#555B46]`}
                  >
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold leading-snug">
                    {opportunity.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#777668]">
                    {opportunity.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 border-t border-[#EEE6DF] pt-5 text-xs font-medium text-[#68695F]">
                    <Clock3 size={15} className="text-[#BF4C21]" />
                    {opportunity.commitment}
                  </div>

                  <a
                    href="#apply"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#555B46] transition group-hover:gap-3"
                  >
                    I&apos;m interested
                    <ArrowRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#EDE8DF] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
              YOUR JOURNEY STARTS HERE
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Three steps. One meaningful beginning.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="border-t border-[#CFC4B7] pt-6"
              >
                <span className="font-serif text-4xl italic text-[#BF4C21]">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-[#68695F]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section
        id="apply"
        className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8EBDD] text-[#555B46]">
              <Mail size={25} />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-[#BF4C21]">
              TAKE THE FIRST STEP
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              We&apos;d love to hear from you.
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-[#68695F]">
              Tell us about yourself and how you would like to contribute.
              This form is a demo for now; submitting it will not send or save
              your information.
            </p>

            <div className="mt-9 rounded-2xl border border-[#E1D6CA] bg-white p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <Heart className="mt-1 shrink-0 text-[#BF4C21]" size={20} />
                <div>
                  <h3 className="font-semibold">Every beginning matters.</h3>
                  <p className="mt-2 text-sm leading-7 text-[#777668]">
                    You can start by sharing your interests. There is no need
                    to have all the answers before reaching out.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[#E5DBD1] bg-white p-6 sm:p-9 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E8EBDD] text-[#555B46]">
                  <CheckCircle2 size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  Thank you for your interest!
                </h3>

                <p className="mt-3 max-w-md leading-7 text-[#68695F]">
                  Your demo submission has been validated in this page, but it
                  has not been sent to Hope of Light. A backend connection is
                  needed to receive real applications.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      interest: "",
                      availability: "",
                      message: "",
                    });
                  }}
                  className="mt-7 rounded-full border border-[#D4C8BC] px-6 py-3 text-sm font-semibold text-[#555B46] transition hover:bg-[#FAF6F3]"
                >
                  Submit another demo
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-semibold">
                    Volunteer interest form
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#777668]">
                    A few details to help us understand your interests.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-[#414338]"
                    >
                      Full name <span className="text-[#BF4C21]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-[#DCD2C8] bg-[#FAF6F3]/60 px-4 py-3.5 text-sm outline-none transition placeholder:text-[#A19A90] focus:border-[#555B46] focus:ring-2 focus:ring-[#555B46]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-[#414338]"
                    >
                      Email address <span className="text-[#BF4C21]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#DCD2C8] bg-[#FAF6F3]/60 px-4 py-3.5 text-sm outline-none transition placeholder:text-[#A19A90] focus:border-[#555B46] focus:ring-2 focus:ring-[#555B46]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="mb-2 block text-sm font-medium text-[#414338]"
                  >
                    Area of interest{" "}
                    <span className="text-[#BF4C21]">*</span>
                  </label>

                  <select
                    id="interest"
                    name="interest"
                    required
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#DCD2C8] bg-[#FAF6F3]/60 px-4 py-3.5 text-sm outline-none transition focus:border-[#555B46] focus:ring-2 focus:ring-[#555B46]/10"
                  >
                    <option value="" disabled>
                      Select an opportunity
                    </option>
                    <option value="education">Education Support</option>
                    <option value="community">Community Outreach</option>
                    <option value="events">Event Volunteering</option>
                    <option value="environment">Environmental Action</option>
                    <option value="other">Other / Open to suggestions</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="availability"
                    className="mb-2 block text-sm font-medium text-[#414338]"
                  >
                    Availability <span className="text-[#BF4C21]">*</span>
                  </label>

                  <select
                    id="availability"
                    name="availability"
                    required
                    value={form.availability}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#DCD2C8] bg-[#FAF6F3]/60 px-4 py-3.5 text-sm outline-none transition focus:border-[#555B46] focus:ring-2 focus:ring-[#555B46]/10"
                  >
                    <option value="" disabled>
                      How much time can you offer?
                    </option>
                    <option value="weekly">A few hours each week</option>
                    <option value="monthly">A few hours each month</option>
                    <option value="events">Occasional events</option>
                    <option value="flexible">Flexible / To be discussed</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[#414338]"
                  >
                    Tell us a little about yourself
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={1500}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your interests, skills, or why you would like to volunteer..."
                    className="w-full resize-y rounded-xl border border-[#DCD2C8] bg-[#FAF6F3]/60 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-[#A19A90] focus:border-[#555B46] focus:ring-2 focus:ring-[#555B46]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#555B46] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#424735] sm:w-auto"
                >
                  Submit Demo Application
                  <Send size={16} />
                </button>

                <p className="text-xs leading-6 text-[#8A8379]">
                  Demo only. No information is transmitted or stored. Connect a
                  secure backend before accepting real volunteer applications.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 rounded-[1.75rem] bg-[#555B46] p-7 text-white sm:p-10 md:flex-row md:items-center lg:p-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E4C7B5]">
              LEARN MORE ABOUT US
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Let&apos;s build a brighter future together.
            </h2>
          </div>

          <Link
            href="/about"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#FAF6F3] px-7 py-3.5 text-sm font-semibold text-[#414635] transition hover:bg-white md:self-center"
          >
            About Hope of Light
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
