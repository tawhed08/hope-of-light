"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  ShieldCheck,
  GraduationCap,
  Utensils,
  Stethoscope,
  Users,
  HandHeart,
} from "lucide-react";

const donationAmounts = [500, 1000, 2000, 5000];

const purposes = [
  {
    title: "Education",
    description: "Help children access learning opportunities and school supplies.",
    icon: GraduationCap,
  },
  {
    title: "Food & Essentials",
    description: "Support families with essential food and daily necessities.",
    icon: Utensils,
  },
  {
    title: "Health & Wellbeing",
    description: "Help communities access essential health support.",
    icon: Stethoscope,
  },
  {
    title: "Where Needed Most",
    description: "Let us direct your contribution to our most urgent priorities.",
    icon: Users,
  },
];

const formatAmount = (amount: number) =>
  new Intl.NumberFormat("en-BD", {
    maximumFractionDigits: 0,
  }).format(amount);

export default function Page() {
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [purpose, setPurpose] = useState("Where Needed Most");
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const finalAmount =
    customAmount.trim() !== "" ? Number(customAmount) : amount;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!Number.isFinite(finalAmount) || finalAmount < 1) {
      setMessage("Please enter a valid donation amount.");
      setSubmitted(false);
      return;
    }

    setMessage(
      "This is a demonstration form. No payment has been processed and no personal information has been sent or saved. Connect a secure payment gateway and backend to accept real donations.",
    );
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#FAF6F3] text-[#34372D]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#C1B2A4]/20 blur-3xl" />
        <div className="absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-[#555B46]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#555B46]/15 bg-white/70 px-4 py-2 text-sm font-medium text-[#555B46]">
              <Heart size={16} className="text-[#BF4C21]" />
              Give hope. Create change.
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              Your kindness can{" "}
              <span className="font-serif italic text-[#BF4C21]">
                change a life.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#68685E] sm:text-lg">
              Every contribution is an opportunity to bring people closer to a
              brighter future. Join Hope of Light in supporting communities
              through care, opportunity, and compassion.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#donation-form"
                className="inline-flex items-center gap-3 rounded-full bg-[#555B46] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#424737]"
              >
                Make a donation
                <ArrowRight size={18} />
              </a>

              <Link
                href="/impact"
                className="inline-flex items-center gap-2 rounded-full border border-[#555B46]/25 px-7 py-4 text-sm font-semibold text-[#555B46] transition hover:bg-white"
              >
                Explore our impact
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#555B46]/15 pt-6">
              <div className="flex items-center gap-2 text-sm text-[#68685E]">
                <ShieldCheck size={19} className="text-[#555B46]" />
                Responsible giving
              </div>
              <div className="flex items-center gap-2 text-sm text-[#68685E]">
                <Heart size={18} className="text-[#BF4C21]" />
                Community first
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-10 z-10 hidden rounded-2xl bg-white p-4 shadow-xl sm:block md:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3E8DE] text-[#BF4C21]">
                  <HandHeart size={23} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Every gift matters</p>
                  <p className="mt-1 text-xs text-[#77776D]">
                    Every act of kindness counts
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#D9CBBE]">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=85"
                alt="Children sharing a joyful moment outdoors"
                className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[560px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                  A little kindness
                </p>
                <p className="mt-3 max-w-md font-serif text-2xl leading-snug sm:text-3xl">
                  Can help open the door to a brighter tomorrow.
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-[#77776D]">
              Illustrative photography. This image does not represent a
              verified Hope of Light project.
            </p>
          </div>
        </div>
      </section>

      {/* Donation form */}
      <section
        id="donation-form"
        className="scroll-mt-8 bg-white py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BF4C21]">
              Make a difference
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Choose your contribution
            </h2>
            <p className="mt-5 leading-7 text-[#77776D]">
              Choose an amount and the area you would like to support. Your
              generosity can help make meaningful opportunities possible.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.72fr] lg:gap-12">
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.75rem] border border-[#E8E0D8] bg-[#FAF6F3] p-5 sm:p-9"
            >
              {/* Frequency */}
              <div>
                <label className="text-sm font-semibold">
                  How often would you like to give?
                </label>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {(["once", "monthly"] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFrequency(option)}
                      aria-pressed={frequency === option}
                      className={`rounded-xl border px-4 py-4 text-sm font-semibold transition ${
                        frequency === option
                          ? "border-[#555B46] bg-[#555B46] text-white"
                          : "border-[#DCD3CA] bg-white text-[#555B46] hover:border-[#555B46]"
                      }`}
                    >
                      {option === "once" ? "Give once" : "Give monthly"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount */}
              <div className="mt-8">
                <label className="text-sm font-semibold">
                  Select your donation amount
                </label>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {donationAmounts.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => {
                        setAmount(value);
                        setCustomAmount("");
                      }}
                      aria-pressed={customAmount === "" && amount === value}
                      className={`rounded-xl border px-3 py-4 text-sm font-semibold transition ${
                        customAmount === "" && amount === value
                          ? "border-[#BF4C21] bg-[#BF4C21] text-white"
                          : "border-[#DCD3CA] bg-white text-[#555B46] hover:border-[#BF4C21]"
                      }`}
                    >
                      ৳{formatAmount(value)}
                    </button>
                  ))}
                </div>

                <label
                  htmlFor="customAmount"
                  className="mt-5 block text-sm font-medium text-[#555B46]"
                >
                  Or enter a custom amount (BDT)
                </label>

                <div className="mt-2 flex items-center rounded-xl border border-[#DCD3CA] bg-white px-4 focus-within:border-[#555B46]">
                  <span className="text-lg font-semibold text-[#555B46]">
                    ৳
                  </span>
                  <input
                    id="customAmount"
                    type="number"
                    min="1"
                    step="1"
                    inputMode="numeric"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(event) => setCustomAmount(event.target.value)}
                    className="w-full bg-transparent px-3 py-4 text-sm outline-none"
                  />
                </div>
              </div>

              {/* Purpose */}
              <div className="mt-8">
                <label className="text-sm font-semibold">
                  Where would you like to help?
                </label>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {purposes.map((item) => {
                    const Icon = item.icon;
                    const selected = purpose === item.title;

                    return (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => setPurpose(item.title)}
                        aria-pressed={selected}
                        className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                          selected
                            ? "border-[#555B46] bg-[#555B46]/5 ring-1 ring-[#555B46]/20"
                            : "border-[#E3DAD1] bg-white hover:border-[#A9A28F]"
                        }`}
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                            selected
                              ? "bg-[#555B46] text-white"
                              : "bg-[#F0E8DF] text-[#555B46]"
                          }`}
                        >
                          <Icon size={20} />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold">
                            {item.title}
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-[#77776D]">
                            {item.description}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Donor details */}
              <div className="mt-8 border-t border-[#E3DAD1] pt-8">
                <h3 className="text-lg font-semibold">Your details</h3>
                <p className="mt-2 text-sm leading-6 text-[#77776D]">
                  Enter your details for this demonstration. A real donation
                  flow should collect only the information required to process
                  and acknowledge a contribution.
                </p>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="donorName"
                      className="text-sm font-medium"
                    >
                      Full name
                    </label>
                    <input
                      id="donorName"
                      type="text"
                      autoComplete="name"
                      required
                      value={donorName}
                      onChange={(event) => setDonorName(event.target.value)}
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-[#DCD3CA] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#555B46]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-[#DCD3CA] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#555B46]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#BF4C21] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#A73E19] focus:outline-none focus:ring-2 focus:ring-[#BF4C21] focus:ring-offset-2"
              >
                Continue with ৳{formatAmount(
                  Number.isFinite(finalAmount) && finalAmount >= 0
                    ? finalAmount
                    : 0,
                )}
                {frequency === "monthly" ? " / month" : ""}
                <ArrowRight size={18} />
              </button>

              {submitted && message && (
                <div
                  role="status"
                  className="mt-5 rounded-xl border border-[#D8DFD0] bg-[#EEF2E9] p-4 text-sm leading-6 text-[#424737]"
                >
                  <p className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 size={18} />
                    Demo form submitted
                  </p>
                  <p className="mt-2">{message}</p>
                </div>
              )}

              {!submitted && message && (
                <p role="alert" className="mt-4 text-sm text-red-700">
                  {message}
                </p>
              )}

              <p className="mt-5 text-center text-xs leading-5 text-[#77776D]">
                Demo only. No payment will be taken. No information is
                transmitted or stored by this form.
              </p>
            </form>

            {/* Donation summary */}
            <aside className="flex flex-col gap-6">
              <div className="rounded-[1.75rem] bg-[#555B46] p-6 text-white sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                  <Heart size={23} />
                </div>

                <p className="mt-7 text-sm text-white/70">Your contribution</p>
                <p className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                  ৳{formatAmount(
                    Number.isFinite(finalAmount) && finalAmount >= 0
                      ? finalAmount
                      : 0,
                  )}
                </p>
                <p className="mt-2 text-sm text-white/75">
                  {frequency === "monthly"
                    ? "A recurring monthly contribution"
                    : "A one-time contribution"}
                </p>

                <div className="my-7 h-px bg-white/20" />

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                  Your chosen focus
                </p>
                <p className="mt-3 text-xl font-semibold">{purpose}</p>

                <p className="mt-3 text-sm leading-7 text-white/75">
                  Your contribution can support work aligned with this focus.
                  Specific outcomes depend on available resources and active
                  programs.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-[#E8E0D8] bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={23} className="text-[#555B46]" />
                  <h3 className="text-lg font-semibold">Give with confidence</h3>
                </div>

                <ul className="mt-5 space-y-4">
                  {[
                    "Clear information about the purpose of giving",
                    "Responsible use of contributions",
                    "Transparent communication about real projects",
                    "Secure payment processing when enabled",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[#555B46]"
                      />
                      <span className="text-sm leading-6 text-[#68685E]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 rounded-xl bg-[#FAF6F3] p-4 text-xs leading-6 text-[#77776D]">
                  These are intended principles, not a claim of independent
                  certification or an existing payment-security setup.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Impact cards */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BF4C21]">
                The power of giving
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Small acts.
                <br />
                Lasting possibilities.
              </h2>
            </div>

            <p className="max-w-xl leading-8 text-[#68685E] lg:justify-self-end">
              Meaningful change starts with people coming together. Your
              generosity can help create access to resources, strengthen
              communities, and make room for new opportunities.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {purposes.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.5rem] border border-[#E4DBD2] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0E8DF] text-[#555B46]">
                      <Icon size={23} />
                    </div>
                    <span className="font-serif text-2xl text-[#C1B2A4]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#77776D]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <p className="mt-5 text-xs leading-5 text-[#77776D]">
            These are areas of intended support, not verified outcomes or
            guarantees that a particular donation amount will deliver a
            specific result.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#EAE0D6]">
          <div className="grid items-center gap-8 p-7 sm:p-12 lg:grid-cols-[1fr_auto] lg:p-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BF4C21]">
                Together, we can do more
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Be part of something meaningful.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-[#68685E]">
                Not ready to donate? You can still help by volunteering your
                time, sharing our mission, or learning about the work we hope
                to do.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:flex-col">
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#555B46] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#424737]"
              >
                Become a volunteer
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#555B46]/25 px-6 py-4 text-sm font-semibold text-[#555B46] transition hover:bg-white/70"
              >
                Contact our team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}