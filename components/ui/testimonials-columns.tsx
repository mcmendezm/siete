"use client";
import React from "react";
import { motion } from "framer-motion";

export type TestimonialItem = {
  text: string;
  name: string;
  role: string;
  company?: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, role, company }, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl border border-ink/10 bg-cream-warm shadow-lg shadow-primary/5 max-w-xs w-full"
              >
                <p className="text-sm text-ink-soft leading-relaxed italic">"{text}"</p>
                <div className="mt-5 pt-4 border-t border-ink/10">
                  <p className="font-semibold text-primary text-sm">{name}</p>
                  <p className="text-xs text-ink-mute leading-relaxed">
                    {role}{company ? ` · ${company}` : ""}
                  </p>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};
