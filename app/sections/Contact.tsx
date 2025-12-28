"use client";

import { Mail, Phone } from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function Calendar() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"theme":"light","hideEventTypeDetails":true,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="30min"
    calLink="kenstera/30min"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view","theme":"light"}}
    
    
  />;
};

export default function Contact() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          {/* Left: copy + contact details */}
          <div className="max-w-xl">
            <div className="mb-3 flex items-center text-xs text-black/50">
              <span className="uppercase tracking-widest">Contact</span>
            </div>

            <h2 className="font-serif text-4xl leading-tight tracking-tight text-black md:text-5xl">
              Let’s talk about your case.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-black/70">
              Tell us what you’re dealing with and we’ll help you understand
              next steps. You can email us, call, or book a time that works for
              you.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href="mailto:info@kenstera.com"
                className="group flex w-fit items-center gap-3 text-sm text-black/80 hover:text-black"
              >
                <span className="grid h-10 w-10 place-items-center rounded-md bg-black/[0.04] ring-1 ring-black/10">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="underline-offset-4 group-hover:underline">
                  info@kenstera.com
                </span>
              </a>

              <a
                href="tel:+12125550123"
                className="group flex w-fit items-center gap-3 text-sm text-black/80 hover:text-black"
              >
                <span className="grid h-10 w-10 place-items-center rounded-md bg-black/4 ring-1 ring-black/10">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="underline-offset-4 group-hover:underline">
                  +1 (212) 555-0123
                </span>
              </a>
            </div>

            <div className="mt-10 rounded-md border border-black/10 bg-black/2 p-5 text-xs leading-relaxed text-black/60">
              <div className="font-medium text-black/70">
                Typical response time
              </div>
              <div className="mt-1">
                Within 1 business day. For urgent matters, please call.
              </div>
            </div>
          </div>

          {/* Right: cal.com embed */}
          <div className="rounded-md border border-black/10 bg-black/2 p-2 h-101.5">
            <Calendar />
          </div>
        </div>
      </div>
    </section>
  );
}
