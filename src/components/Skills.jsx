import React from "react";
import { motion } from "framer-motion";
// npm i react-icons
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiTailwindcss,
  // Replace SiAmazonaws with specific AWS services that exist in react-icons:
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

// Then use:
// <SiAmazonec2 /> and <SiAmazons3 /> instead of <SiAmazonaws />

const container = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Bar = ({ value }) => (
  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
    <div
      className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-500"
      style={{ width: `${value}%` }}
    />
  </div>
);

// Compact item with hover micro-interaction
const ListItem = ({ icon: Icon, label, hint, color = "text-slate-300" }) => (
  <motion.div
    whileHover={{ y: -2, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 420, damping: 22, mass: 0.5 }}
    className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 motion-reduce:transform-none"
  >
    <div className="flex items-center gap-2">
      <Icon className={`h-[18px] w-[18px] ${color}`} />
      <span className="text-[13px] text-slate-200">{label}</span>
    </div>
    {hint ? <span className="text-[11px] text-slate-400">{hint}</span> : null}
  </motion.div>
);

const SectionHeader = ({ title, badgeText, badgeTone = "emerald" }) => {
  const tones = {
    emerald: "bg-emerald-500/18 text-emerald-300 ring-emerald-400/25",
    indigo: "bg-indigo-500/18 text-indigo-300 ring-indigo-400/25",
    cyan: "bg-cyan-500/18 text-cyan-300 ring-cyan-400/25",
    fuchsia: "bg-fuchsia-500/18 text-fuchsia-300 ring-fuchsia-400/25",
  };
  const tone = tones[badgeTone] || tones.emerald;
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[17px] font-semibold">{title}</h3>
        {badgeText ? (
          <span
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${tone}`}
          >
            {badgeText}
          </span>
        ) : null}
      </div>
      <div className="mt-3 h-px w-full bg-white/10" />
    </div>
  );
};

const SkillsAndTools = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full text-white"
      id="skills"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        {/* Header */}
        <motion.div variants={card} className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Skills & Tools
          </h2>
          <p className="mt-2 text-[14.5px] leading-6 text-slate-300/90">
            MERN‑first delivery with dependable deployments across AWS,
            Hostinger, Render, and Vercel.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* MERN Core */}
          <motion.div
            variants={card}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg"
          >
            <SectionHeader
              title="MERN Core"
              badgeText="Primary"
              badgeTone="emerald"
            />

            <div className="grid grid-cols-2 gap-2.5 mb-5">
              <ListItem
                icon={SiMongodb}
                label="MongoDB"
                color="text-emerald-400"
              />
              <ListItem icon={SiExpress} label="Express" />
              <ListItem icon={SiReact} label="React" color="text-cyan-400" />
              <ListItem
                icon={SiNodedotjs}
                label="Node.js"
                color="text-green-400"
              />
              <ListItem
                icon={SiRedux}
                label="Redux / RTK"
                color="text-fuchsia-400"
              />
              <ListItem
                icon={SiTailwindcss}
                label="Tailwind"
                color="text-sky-400"
              />
            </div>

            <div className="space-y-3">
              <div>
                <div className="mb-1 flex items-center justify-between text-[12px] text-slate-300">
                  <span>Frontend (React)</span>
                  <span>90%</span>
                </div>
                <Bar value={90} />
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between text-[12px] text-slate-300">
                  <span>Backend (Node + Express)</span>
                  <span>88%</span>
                </div>
                <Bar value={88} />
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between text-[12px] text-slate-300">
                  <span>Database (MongoDB)</span>
                  <span>86%</span>
                </div>
                <Bar value={86} />
              </div>
            </div>
          </motion.div>

          {/* Platforms & Hosting */}
          <motion.div
            variants={card}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg"
          >
            <SectionHeader
              title="Platforms & Hosting"
              badgeText="Deploy"
              badgeTone="indigo"
            />

            <div className="grid grid-cols-2 gap-2.5 mb-5">
              <ListItem
                icon={SiAmazons3}
                label="AWS"
                hint="EC2 • S3"
                color="text-amber-400"
              />
              <ListItem
                icon={SiHostinger}
                label="Hostinger"
                hint="Shared • VPS"
                color="text-purple-400"
              />
              <ListItem
                icon={SiRender}
                label="Render"
                hint="Web • DB"
                color="text-cyan-300"
              />
              <ListItem
                icon={SiVercel}
                label="Vercel"
                hint="Next • Edge"
                color="text-white"
              />
              <ListItem
                icon={SiDocker}
                label="Docker"
                hint="Images • Compose"
                color="text-sky-400"
              />
            </div>

            <div className="space-y-3">
              <div>
                <div className="mb-1 flex items-center justify-between text-[12px] text-slate-300">
                  <span>Deployment Workflow</span>
                  <span>85%</span>
                </div>
                <Bar value={85} />
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between text-[12px] text-slate-300">
                  <span>CI/CD & Environments</span>
                  <span>80%</span>
                </div>
                <Bar value={80} />
              </div>
            </div>
          </motion.div>

          {/* APIs & Integrations */}
          <motion.div
            variants={card}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg"
          >
            <SectionHeader
              title="APIs & Integrations"
              badgeText="Services"
              badgeTone="cyan"
            />

            <div className="grid grid-cols-2 gap-2.5 mb-5">
              <ListItem
                icon={SiJsonwebtokens}
                label="JWT / Auth"
                color="text-amber-300"
              />
              <ListItem
                icon={SiCloudinary}
                label="Cloudinary"
                color="text-sky-300"
              />
              <ListItem
                icon={SiPostman}
                label="Postman / APIs"
                color="text-orange-400"
              />
              <ListItem
                icon={SiTypescript}
                label="Type Safety"
                color="text-blue-400"
              />
            </div>

            <div className="space-y-3">
              <div>
                <div className="mb-1 flex items-center justify-between text-[12px] text-slate-300">
                  <span>Auth & Security</span>
                  <span>84%</span>
                </div>
                <Bar value={84} />
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between text-[12px] text-slate-300">
                  <span>Media & Storage</span>
                  <span>82%</span>
                </div>
                <Bar value={82} />
              </div>
            </div>
          </motion.div>

          {/* Tooling & UX */}
          <motion.div
            variants={card}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg"
          >
            <SectionHeader
              title="Tooling & UX"
              badgeText="Delivery"
              badgeTone="fuchsia"
            />

            <div className="grid grid-cols-2 gap-2.5 mb-5">
              <ListItem
                icon={SiPostman}
                label="API Testing"
                color="text-orange-400"
              />
              <ListItem
                icon={SiTailwindcss}
                label="Tailwind UI"
                color="text-sky-400"
              />
              <ListItem
                icon={SiReact}
                label="Framer Motion"
                color="text-cyan-400"
              />
              <ListItem
                icon={SiTypescript}
                label="TypeScript (in‑progress)"
                color="text-blue-400"
              />
            </div>

            <div className="space-y-3">
              <div>
                <div className="mb-1 flex items-center justify-between text-[12px] text-slate-300">
                  <span>DX & Testing</span>
                  <span>78%</span>
                </div>
                <Bar value={78} />
              </div>
              <div>
                <div className="mb-1 flex items-center justify-between text-[12px] text-slate-300">
                  <span>UI/UX Delivery</span>
                  <span>83%</span>
                </div>
                <Bar value={83} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Confidence legend */}
        <div className="mt-8 flex items-center gap-3 text-[12px] text-slate-400">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          <span>High</span>
          <span className="inline-block h-2 w-2 rounded-full bg-indigo-400 ml-4" />
          <span>Strong</span>
          <span className="inline-block h-2 w-2 rounded-full bg-slate-400 ml-4" />
          <span>Working</span>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsAndTools;
