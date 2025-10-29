import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const planets = [
  { color: "bg-indigo-400", size: "w-4 h-4", orbit: 150, duration: 30 },
  { color: "bg-sky-400", size: "w-3 h-3", orbit: 100, duration: 45 },
  { color: "bg-fuchsia-500", size: "w-2.5 h-2.5", orbit: 70, duration: 35 },
];

const generateStars = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
  }));

export default function FixedBackgroundAnimation() {
  const [fallingStars, setFallingStars] = useState([]);
  const [allStars] = useState(generateStars(60));
  const [showMeteor, setShowMeteor] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const numToFall = Math.floor(Math.random() * 3) + 1;
      const selected = [];
      for (let i = 0; i < numToFall; i++) {
        const randomStar =
          allStars[Math.floor(Math.random() * allStars.length)];
        selected.push({
          ...randomStar,
          key: `${randomStar.id}-${Date.now()}-${i}`,
        });
      }
      setFallingStars((prev) => [...prev, ...selected]);
      setTimeout(() => setFallingStars((prev) => prev.slice(numToFall)), 4000);
    }, 5000);
    return () => clearInterval(interval);
  }, [allStars]);

  useEffect(() => {
    const meteorTimer = setInterval(() => {
      setShowMeteor(true);
      setTimeout(() => setShowMeteor(false), 1500);
    }, 12000);
    return () => clearInterval(meteorTimer);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      {/* Nebula Blurs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[180px] bg-indigo-600/15 dark:bg-indigo-500/15"
        style={{ top: "30%", left: "10%" }}
        animate={{ opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[160px] bg-sky-500/15 dark:bg-sky-400/15"
        style={{ top: "60%", left: "70%" }}
        animate={{ opacity: [0.12, 0.24, 0.12] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* Glowing Core */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full blur-3xl bg-indigo-400/25 dark:bg-indigo-400/20"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Orbit Rings */}
      {[300, 400, 500].map((size, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-indigo-400/10 dark:border-indigo-300/10"
          style={{
            top: "50%",
            left: "50%",
            width: `${size}px`,
            height: `${size}px`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 60 + i * 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Orbiting Planets */}
      {planets.map((p, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{ rotate: 360 }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className={`${p.size} ${p.color} absolute rounded-full ring-2 ring-white/10 shadow-lg`}
            style={{
              top: `-${p.orbit / 2}px`,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </motion.div>
      ))}

      {/* Static Twinkling Stars */}
      {allStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white/70"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: 0.3,
          }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Random Falling Stars */}
      {fallingStars.map((star) => (
        <React.Fragment key={star.key}>
          <motion.div
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.size + 2}px`,
              height: `${star.size + 2}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              zIndex: 2,
            }}
            initial={{ y: 0, opacity: 0.8, scale: 1 }}
            animate={{ y: 200, opacity: [0.8, 0.4, 0], scale: [1, 1.35] }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full blur-[6px] opacity-40 bg-indigo-300"
            style={{
              width: `${(star.size + 2) * 0.8}px`,
              height: "60px",
              top: `${star.top}%`,
              left: `${star.left}%`,
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
            initial={{ y: 0, opacity: 0.35 }}
            animate={{ y: 200, opacity: [0.35, 0.2, 0] }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          />
        </React.Fragment>
      ))}

      {/* Shooting Meteor */}
      {showMeteor && (
        <motion.div
          className="absolute rounded-full blur-sm bg-gradient-to-br from-white via-indigo-300 to-transparent"
          style={{
            width: "2px",
            height: "160px",
            top: `${Math.random() * 10}%`,
            left: `${Math.random() * 90}%`,
            zIndex: 5,
            transform: "rotate(0deg)",
            opacity: 0.7,
          }}
          initial={{ y: 0, x: 0, opacity: 0.7 }}
          animate={{ y: 500, x: 500, opacity: [0.7, 0.3, 0] }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
      )}
    </div>
  );
}
