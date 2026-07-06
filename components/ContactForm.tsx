"use client";

import { useState } from "react";
import { services } from "@/lib/data";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const required = ["name", "phone", "email", "service", "area", "message"];
    if (required.some((field) => !String(data.get(field) || "").trim())) {
      setStatus("error");
      return;
    }
    setStatus("success");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={submit} className="grid min-w-0 w-full gap-4 rounded-lg border border-slate-200 bg-white p-6 shadow-premium">
      <div className="grid min-w-0 gap-4 md:grid-cols-2">
        <input required name="name" placeholder="Name" className="min-w-0 w-full rounded border border-slate-300 px-4 py-3" />
        <input required name="phone" placeholder="Phone" className="min-w-0 w-full rounded border border-slate-300 px-4 py-3" />
        <input required type="email" name="email" placeholder="Email" className="min-w-0 w-full rounded border border-slate-300 px-4 py-3" />
        <select required name="service" className="min-w-0 w-full rounded border border-slate-300 px-4 py-3">
          <option value="">Service Needed</option>
          {services.map(([slug, title]) => <option key={slug}>{title}</option>)}
        </select>
      </div>
      <input required name="area" placeholder="Area/Postcode" className="min-w-0 w-full rounded border border-slate-300 px-4 py-3" />
      <textarea required name="message" placeholder="Message" rows={5} className="min-w-0 w-full rounded border border-slate-300 px-4 py-3" />
      <button className="min-w-0 w-full rounded bg-obri-blue px-5 py-3 font-black text-white hover:bg-blue-800" type="submit">Send Enquiry</button>
      {status === "success" ? <p className="rounded bg-green-50 p-3 text-sm font-bold text-green-800">Thanks. Your enquiry is ready to connect to an email or backend API.</p> : null}
      {status === "error" ? <p className="rounded bg-red-50 p-3 text-sm font-bold text-red-800">Please complete every field before sending.</p> : null}
    </form>
  );
}
