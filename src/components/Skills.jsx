import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiTailwindcss,
  SiAmazonec2,
  SiAmazons3,
  SiDocker,
  SiHostinger,
  SiRender,
  SiVercel,
  SiJsonwebtokens,
  SiCloudinary,
  SiPostman,
  SiTypescript,
} from "react-icons/si";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SpotlightItem({ icon: Icon, label, hint, color = "text-slate-300" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={itemAnim}
      className="group relative border border-white/10 bg-slate-900/50 overflow-hidden rounded-xl px-4 py-3 hover:border-white/20 transition-colors"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
            <Icon className={`h-5 w-5 ${color}`} />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
              {label}
            </div>
          </div>
        </div>
        {hint && (
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
            {hint}
          </span>
        )}
      </div>
    </motion.div>
  );
}

const SectionHeader = ({ title, badgeText, badgeTone = "emerald" }) => {
  const tones = {
    emerald: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    indigo: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
    cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    fuchsia: "text-fuchsia-400 bg-fuchsia-400/10 border-fuchsia-400/20",
  };
  const tone = tones[badgeTone] || tones.emerald;

  return (
    <div className="mb-6 flex items-center justify-between">
      <h3 className="text-lg font-semibold text-white/90">{title}</h3>
      {badgeText && (
        <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium border ${tone}`}>
          {badgeText}
        </span>
      )}
    </div>
  );
};

const SkillsAndTools = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden" id="skills">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[100px] opacity-50" />

      <div className="relative z-10 mx-auto max-w-[1300px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-4">
            Tech Stack & Tools
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit designed for building scalable, high-performance web applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* MERN Core */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6 md:p-8 backdrop-blur-sm">
            <SectionHeader title="MERN Core" badgeText="Primary Stack" badgeTone="emerald" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <SpotlightItem icon={SiMongodb} label="MongoDB" color="text-emerald-500" hint="Database" />
              <SpotlightItem icon={SiExpress} label="Express.js" color="text-slate-200" hint="Backend" />
              <SpotlightItem icon={SiReact} label="React" color="text-cyan-400" hint="Frontend" />
              <SpotlightItem icon={SiNodedotjs} label="Node.js" color="text-green-500" hint="Runtime" />
              <SpotlightItem icon={SiRedux} label="Redux Toolkit" color="text-purple-500" hint="State" />
              <SpotlightItem icon={SiTailwindcss} label="Tailwind CSS" color="text-sky-400" hint="Style" />
            </div>
          </div>

          {/* Cloud & Deployment */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6 md:p-8 backdrop-blur-sm">
            <SectionHeader title="Cloud & DevOps" badgeText="Infrastructure" badgeTone="indigo" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <SpotlightItem icon={SiAmazons3} label="AWS S3" color="text-amber-500" hint="Storage" />
              <SpotlightItem icon={SiDocker} label="Docker" color="text-blue-500" hint="Container" />
              <SpotlightItem icon={SiVercel} label="Vercel" color="text-white" hint="Deploy" />
              <SpotlightItem icon={SiHostinger} label="Hostinger" color="text-indigo-400" hint="Hosting" />
              <SpotlightItem icon={SiRender} label="Render" color="text-cyan-300" hint="PaaS" />
              <SpotlightItem icon={SiAmazonec2} label="AWS EC2" color="text-orange-500" hint="Compute" />
            </div>
          </div>

          {/* Tools & Utilities */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/[0.05] p-6 md:p-8 backdrop-blur-sm md:col-span-2">
            <SectionHeader title="Tools & Utilities" badgeText="Workflow" badgeTone="fuchsia" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <SpotlightItem icon={SiTypescript} label="TypeScript" color="text-blue-400" hint="Learning" />
              <SpotlightItem icon={SiJsonwebtokens} label="JWT Auth" color="text-pink-500" />
              <SpotlightItem icon={SiCloudinary} label="Cloudinary" color="text-blue-500" />
              <SpotlightItem icon={SiPostman} label="Postman" color="text-orange-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsAndTools;
