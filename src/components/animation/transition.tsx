"use client";
import React from "react";
import { motion } from "motion/react";

export function TransitionFadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export function TransitionMoveUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="w-full"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function TransitionMoveLeft({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="w-full"
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export function TransitionMoveRight({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="w-full"
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
