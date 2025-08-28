"use client";
import { useState } from "react";

export const metadata = { title: "Contact — DataOne Asia PH" };

export default function Contact() {
  const [msg, setMsg] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg("Thanks! We’ll contact you shortly.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="py-10">
      <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Book a consult</h1>
      <p className="mt-2 text-slate-600">Or call (02) 3491 7300</p>

      <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-2 gap-4 rounded-2xl border p-6">
        <label className="block">Name<input name="name" required className="mt-1 w-full border rounded-xl px-3 py-2" /></label>
        <label className="block">Company<input name="company" required className="mt-1 w-full border rounded-xl px-3 py-2" /></label>
        <label className="block md:col-span-2">Work Email<input type="email" name="email" required className="mt-1 w-full border rounded-xl px-3 py-2" /></label>
        <label className="block md:col-span-2">What do you need?<textarea name="need" rows={5} required className="mt-1 w-full border rounded-xl px-3 py-2" /></label>
        <div className="md:col-span-2"><button className="px-5 py-3 rounded-xl bg-sky-600 text-white">Send</button></div>
        {msg && <div className="md:col-span-2 text-slate-600">{msg}</div>}
      </form>
    </div>
  );
}
