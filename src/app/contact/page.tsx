"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";

const faqs = [
  {
    question: "How can I support Hope of Light?",
    answer:
      "You can explore our donation options, volunteer opportunities, and programs to learn how you may contribute to our mission.",
  },
  {
    question: "Can I volunteer with your organization?",
    answer:
      "Yes. Visit our Volunteer page to explore possible opportunities and submit your interest. We will need to confirm available roles and arrangements.",
  },
  {
    question: "How can I learn about your programs?",
    answer:
      "Visit our Programs and Impact pages to learn about our focus areas and intended goals. Contact us if you need more information.",
  },
  {
    question: "When will I receive a response?",
    answer:
      "We aim to respond to enquiries as soon as possible. Response times will depend on the team's availability. This demo form does not send messages yet.",
  },
];

const contactItems = [
  {
    icon: Mail,
    title: "Email us",
    value: "hello@hopeoflight.org",
    detail: "For general questions and enquiries",
    href: "mailto:hello@hopeoflight.org",
  },
  {
    icon: Phone,
    title: "Call our team",
    value: "Contact details coming soon",
    detail: "Phone support details will be published here",
    href: null,
  },
  {
    icon: MapPin,
    title: "Our location",
    value: "Location details coming soon",
    detail: "Official office address will be added here",
    href: null,
  },
];

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General enquiry");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#FAF6F3] text-[#34372D]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#C1B2A4]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#555B46]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#555B46]/15 bg-white/70 px-4 py-2 text-sm font-medium text-[#555B46]">
                <MessageCircle size={16} className="text-[#BF4C21]" />
                We would love to hear from you
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
                Every meaningful connection{" "}
                <span className="font-serif italic text-[#BF4C21]">
                  starts here.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#68685E] sm:text-lg">
                Have a question, an idea, or a desire to help? Reach out to
                Hope of Light. We welcome conversations about community,
                collaboration, volunteering, and making a difference together.
              </p>

              <a
                href="#contact-form"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#555B46] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#424737]"
              >
                Send us a message
                <ArrowDownRight size={18} />
              </a>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#E8DED4] p-7 sm:p-10 lg:p-9">
              <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-[#555B46]/15" />
              <div className="absolute -right-2 -top-2 h-24 w-24 rounded-full border border-[#555B46]/15" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#555B46] text-white">
                  <Heart size={26} />
                </div>

                <p className="mt-8 font-serif text-2xl leading-relaxed sm:text-3xl">
                  “A conversation can be the beginning of something
                  extraordinary.”
                </p>

                <div className="mt-8 h-px bg-[#555B46]/20" />

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#68685E]">
                  Hope of Light
                </p>
                <p className="mt-2 text-sm text-[#68685E]">
                  Compassion · Community · Possibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BF4C21]">
              Get in touch
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              We are here to listen.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#77776D]">
              Choose the most convenient way to contact us. Official contact
              details can be added when they are confirmed.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {contactItems.map((item) => {
              const Icon = item.icon;

              const content = (
                <div className="flex h-full flex-col rounded-[1.5rem] border border-[#E8E0D8] bg-[#FAF6F3] p-6 transition hover:-translate-y-1 hover:shadow-md sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAE0D6] text-[#555B46]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 break-words text-sm font-medium text-[#555B46]">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#77776D]">
                    {item.detail}
                  </p>
                  {item.href && (
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#BF4C21]">
                      Contact us
                      <ArrowRight size={16} />
                    </span>
                  )}
                </div>
              );

              return item.href ? (
                <a key={item.title} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form and side information */}
      <section id="contact-form" className="scroll-mt-8 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BF4C21]">
              Start a conversation
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Tell us what is on your mind.
            </h2>

            <p className="mt-5 leading-8 text-[#68685E]">
              Whether you want to ask a question, explore a partnership, or
              learn more about our work, we welcome your message.
            </p>

            <div className="mt-9 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAE0D6] text-[#555B46]">
                  <ShieldCheck size={21} />
                </div>
                <div>
                  <h3 className="font-semibold">Respectful communication</h3>
                  <p className="mt-1 text-sm leading-6 text-[#77776D]">
                    Share only the information needed for your enquiry. Do not
                    submit passwords, payment details, or other sensitive data.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAE0D6] text-[#555B46]">
                  <Heart size={21} />
                </div>
                <div>
                  <h3 className="font-semibold">Interested in helping?</h3>
                  <p className="mt-1 text-sm leading-6 text-[#77776D]">
                    Discover ways to contribute your time or support our
                    mission.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                    <Link
                      href="/volunteer"
                      className="text-sm font-semibold text-[#BF4C21] hover:underline"
                    >
                      Volunteer
                    </Link>
                    <Link
                      href="/donate"
                      className="text-sm font-semibold text-[#BF4C21] hover:underline"
                    >
                      Donate
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[1.75rem] border border-[#E8E0D8] bg-white p-5 shadow-sm sm:p-9"
          >
            <h3 className="text-2xl font-semibold tracking-tight">
              Send us a message
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#77776D]">
              Complete the form below. This is currently a frontend
              demonstration and will not send your message.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-[#34372D]"
                >
                  Your name *
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    setSubmitted(false);
                  }}
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-[#DCD3CA] bg-[#FAF6F3]/60 px-4 py-3.5 text-sm outline-none transition placeholder:text-[#A19A90] focus:border-[#555B46] focus:ring-2 focus:ring-[#555B46]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-[#34372D]"
                >
                  Email address *
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubmitted(false);
                  }}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-[#DCD3CA] bg-[#FAF6F3]/60 px-4 py-3.5 text-sm outline-none transition placeholder:text-[#A19A90] focus:border-[#555B46] focus:ring-2 focus:ring-[#555B46]/10"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="subject"
                className="text-sm font-semibold text-[#34372D]"
              >
                What would you like to discuss? *
              </label>
              <select
                id="subject"
                required
                value={subject}
                onChange={(event) => {
                  setSubject(event.target.value);
                  setSubmitted(false);
                }}
                className="mt-2 w-full rounded-xl border border-[#DCD3CA] bg-[#FAF6F3]/60 px-4 py-3.5 text-sm outline-none transition focus:border-[#555B46] focus:ring-2 focus:ring-[#555B46]/10"
              >
                <option>General enquiry</option>
                <option>Volunteering</option>
                <option>Donation question</option>
                <option>Partnership opportunity</option>
                <option>Program information</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-[#34372D]"
              >
                Your message *
              </label>
              <textarea
                id="message"
                required
                minLength={10}
                maxLength={3000}
                rows={5}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  setSubmitted(false);
                }}
                placeholder="Write your message here..."
                className="mt-2 w-full resize-y rounded-xl border border-[#DCD3CA] bg-[#FAF6F3]/60 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-[#A19A90] focus:border-[#555B46] focus:ring-2 focus:ring-[#555B46]/10"
              />
              <p className="mt-2 text-right text-xs text-[#77776D]">
                {message.length}/3000 characters
              </p>
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#555B46] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#424737] focus:outline-none focus:ring-2 focus:ring-[#555B46] focus:ring-offset-2"
            >
              Submit message
              <Send size={17} />
            </button>

            {submitted && (
              <div
                role="status"
                className="mt-5 rounded-xl border border-[#D8DFD0] bg-[#EEF2E9] p-4"
              >
                <p className="flex items-center gap-2 font-semibold text-[#424737]">
                  <CheckCircle2 size={19} />
                  Form demonstration completed
                </p>
                <p className="mt-2 text-sm leading-6 text-[#555B46]">
                  Your form passed the browser's required-field checks, but
                  your message has not been sent or saved. A backend API or
                  secure form service must be connected to deliver it.
                </p>
              </div>
            )}

            <p className="mt-5 text-center text-xs leading-5 text-[#77776D]">
              By submitting, you acknowledge that this demo does not transmit
              or store your information.
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BF4C21]">
              A few answers
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Frequently asked questions.
            </h2>
            <p className="mt-5 leading-7 text-[#77776D]">
              Looking for something specific? These quick answers may help
              you find the right next step.
            </p>
            <Link
              href="/programs"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#BF4C21] hover:underline"
            >
              Explore our programs
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="divide-y divide-[#E8E0D8] border-y border-[#E8E0D8]">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-semibold marker:hidden">
                  <span>{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DCD3CA] text-[#555B46] transition group-open:rotate-45 group-open:bg-[#555B46] group-open:text-white">
                    <span className="text-xl font-normal">+</span>
                  </span>
                </summary>
                <p className="max-w-2xl pr-8 pt-4 text-sm leading-7 text-[#77776D]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-[#EAE0D6] p-7 sm:p-12 lg:flex-row lg:items-center lg:p-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#BF4C21]">
              Make your next step count
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Hope grows when we come together.
            </h2>
            <p className="mt-4 leading-7 text-[#68685E]">
              Discover how you can take part in a more caring, connected
              community.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 rounded-full bg-[#555B46] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#424737]"
            >
              Join as a volunteer
              <ArrowRight size={17} />
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full border border-[#555B46]/25 px-6 py-4 text-sm font-semibold text-[#555B46] transition hover:bg-white/60"
            >
              Donate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}