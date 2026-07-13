import React from "react";
import {
  Plane,
  Map,
  ShieldCheck,
  Hotel,
  HeartHandshake,
  Car,
  ArrowUpRight,
} from "lucide-react";

const SERVICES_DATA = [
  { icon: Map, title: "Tour Packages" },
  { icon: Plane, title: "Flight Tickets" },
  { icon: ShieldCheck, title: "Visa & Passport" },
  { icon: Hotel, title: "Hotels" },
  { icon: HeartHandshake, title: "Insurance" },
  { icon: Car, title: "Cab Service" },
];

export default function Services() {
  return (
    <section className="bg-[#f8fbfc] py-8 px-4">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-cyan-50 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-cyan-600">
            What We Offer
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-[#026fc5] leading-tight">
            Premium Travel Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Everything you need for a smooth and memorable journey under one
            roof.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {SERVICES_DATA.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:bg-[#103f49] group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-5 text-[15px] font-bold text-[#103f49]">
                  {item.title}
                </h3>

                <div className="mt-4 flex justify-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}