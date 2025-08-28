import Link from "next/link";

export default function Home() {
  return (
    <section className="py-10">
      <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-slate-600">
        Trusted by enterprise teams
      </div>

      <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
        The Philippines’ First and Leading Managed IT Services Provider
      </h1>

      <p className="mt-4 text-slate-600 max-w-2xl">
        Secure in-country Data Center & Cloud services so your team can focus on shipping.
      </p>

      <div className="mt-6 flex gap-3">
        <Link href="/contact" className="px-5 py-3 rounded-xl bg-sky-600 text-white">Book a consult</Link>
        <Link href="/services" className="px-5 py-3 rounded-xl border">Explore services</Link>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {[
          { t: "Data Center Services", d: "Colocation & Cloud." },
          { t: "Cloud Secure", d: "SaaS, IaaS, DRaaS, BaaS." },
          { t: "Business Communications", d: "UCaaS & SIP Trunking." },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border p-6">
            <div className="font-semibold">{c.t}</div>
            <p className="text-slate-600 mt-2">{c.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
