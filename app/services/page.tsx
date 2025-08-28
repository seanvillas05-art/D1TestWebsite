export const metadata = { title: "Services — DataOne Asia PH" };

const services = [
  { title: "Data Center Services", blurb: "Secure Colocation & flexible Cloud." },
  { title: "Cloud Secure", blurb: "SaaS, IaaS, DRaaS, BaaS." },
  { title: "Business Communications", blurb: "UCaaS & SIP Trunking." },
  { title: "IT Leasing", blurb: "Flexible access to modern hardware." },
  { title: "Connectivity Services", blurb: "Reliable enterprise connectivity." },
];

export default function Services() {
  return (
    <div className="py-10">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Explore our services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {services.map(s => (
          <div key={s.title} className="rounded-2xl border p-6">
            <div className="font-semibold">{s.title}</div>
            <p className="text-slate-600 mt-2">{s.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
