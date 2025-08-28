import Link from "next/link";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

export default function Home() {
  const cards = [
    { t: "Data Center Services", d: "Colocation & Cloud." },
    { t: "Cloud Secure", d: "SaaS, IaaS, DRaaS, BaaS." },
    { t: "Business Communications", d: "UCaaS & SIP Trunking." },
  ];

  return (
    <section className="py-10">
      <Reveal><div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-slate-600">
        Trusted by enterprise teams
      </div></Reveal>

      <Reveal delay={0.05}>
        <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
          The Philippines’ First and Leading Managed IT Services Provider
        </h1>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-4 text-slate-600 max-w-2xl">
          Secure in-country Data Center & Cloud services so your team can focus on shipping.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-6 flex gap-3">
          <Link href="/contact" className="px-5 py-3 rounded-xl bg-sky-600 text-white transition hover:shadow-lg hover:-translate-y-0.5">
            Book a consult
          </Link>
          <Link href="/services" className="px-5 py-3 rounded-xl border transition hover:bg-slate-50">
            Explore services
          </Link>
        </div>
      </Reveal>

      {/* Stagger the cards */}
      <motion.div
        className="mt-10 grid md:grid-cols-3 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {cards.map((c) => (
          <Reveal key={c.t}>
            <div className="rounded-2xl border p-6 transition hover:shadow-lg hover:-translate-y-1">
              <div className="font-semibold">{c.t}</div>
              <p className="text-slate-600 mt-2">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </motion.div>
    </section>
  );
}
