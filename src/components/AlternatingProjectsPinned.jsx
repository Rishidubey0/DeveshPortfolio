//src/components/AlternatingProjectsPinned.jsx
import AlternatingProjectsPinned from "./ProjectsSection";

const items = [
  {
    id: "balloon-dekor",
    live: "https://balloon-dekor-client.vercel.app/",
    codePanel: {
      title: "Balloon Dekor — Details",
      subtitle: "live • colorful",
      badge: "MERN • Hostinger+Render",
      lines: [
        <span key="1">
          <span className="text-fuchsia-400">const</span>{" "}
          <span className="text-emerald-300">project</span>{" "}
          <span className="text-slate-300">=</span>{" "}
          <span className="text-cyan-300">{"{"}</span>
        </span>,
        <span key="2" className="pl-2">
          <span className="text-slate-400">name</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-amber-300">'Balloon Dekor'</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="3" className="pl-2">
          <span className="text-slate-400">domain</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "Party balloons • Event decor • E‑commerce"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="4" className="pl-2">
          <span className="text-slate-400">frontend</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "React • Tailwind • SPA routing"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="5" className="pl-2">
          <span className="text-slate-400">backend</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "Node.js • Express • REST APIs"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="6" className="pl-2">
          <span className="text-slate-400">features</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-cyan-300">[</span>
          <span className="text-slate-200">
            "Categories","Cart","Wishlist","Coupons","Checkout","Order tracking"
          </span>
          <span className="text-cyan-300">]</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="7" className="pl-2">
          <span className="text-slate-400">auth</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "Social login • Email OTP • JWT • RBAC"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="8" className="pl-2">
          <span className="text-slate-400">media</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "Cloudinary images & transformations"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="9" className="pl-2">
          <span className="text-slate-400">hosting</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "Frontend: Hostinger • Backend: Render"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="10">
          <span className="text-cyan-300">{"}"}</span>
          <span className="text-slate-300">;</span>
        </span>,
      ],
      chips: [
        "React",
        "Tailwind",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "OTP",
        "Social Login",
        "Cloudinary",
      ],
    },
    shotsPanel: {
      badge: "Screens",
      subtitle: "images only",
      title: "Balloon Dekor UI",
      shots: [
        { src: "/balone.png", caption: "Home — events & featured decor" },
        { src: "/balone2.png", caption: "All Product — bundles & add‑ons" },
        {
          src: "/balone3.png",
          caption: "Admin — orders & inventory (screenshot)",
        },
      ],
    },
  },
  {
    id: "loanyfy",
    live: "https://www.loanyfy.com/",
    codePanel: {
      title: "Loanyfy — Details",
      subtitle: "live • colorful",
      badge: "MERN • Hostinger+Render",
      lines: [
        <span key="1">
          <span className="text-fuchsia-400">const</span>{" "}
          <span className="text-emerald-300">project</span>{" "}
          <span className="text-slate-300">=</span>{" "}
          <span className="text-cyan-300">{"{"}</span>
        </span>,
        <span key="2" className="pl-2">
          <span className="text-slate-400">domain</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-amber-300">'Business Loans'</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="3" className="pl-2">
          <span className="text-slate-400">frontend</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "React • Tailwind • SPA routing"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="4" className="pl-2">
          <span className="text-slate-400">backend</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "Node.js • Express • REST APIs"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="5" className="pl-2">
          <span className="text-slate-400">flows</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-cyan-300">[</span>
          <span className="text-slate-200">
            "Application","Validation","Admin review","Chatbot"
          </span>
          <span className="text-cyan-300">]</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="6" className="pl-2">
          <span className="text-slate-400">auth</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">"JWT • Role‑based access"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="7" className="pl-2">
          <span className="text-slate-400">storage</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">"MongoDB • S3 (documents)"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="8" className="pl-2">
          <span className="text-slate-400">hosting</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "Frontend: Hostinger • Backend: Render"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="9">
          <span className="text-cyan-300">{"}"}</span>
          <span className="text-slate-300">;</span>
        </span>,
      ],
      chips: [
        "React",
        "Tailwind",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "S3",
        "CI/CD",
      ],
    },
    shotsPanel: {
      badge: "Screens",
      subtitle: "images only",
      title: "Loanyfy UI",
      shots: [
        { src: "/loanyfy.png", caption: "Home — Landing" },
        { src: "/loanyfprodcut.png", caption: "Loans — Product list" },
        { src: "/Loanyfychatbot.png", caption: "Support — Chatbot" },
      ],
    },
  },
];

export default function ProjectsPage() {
  return <AlternatingProjectsPinned items={items} />;
}
