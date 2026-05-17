"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";

const lines = [
  { prompt: "onika@devops:~$", command: "whoami", delay: 0 },
  { prompt: "", command: "Onika Sileku — DevOps & IT Systems Engineer", delay: 400, isOutput: true },
  { prompt: "onika@devops:~$", command: "cat skills.txt | head -6", delay: 900 },
  { prompt: "", command: "→ Azure Database Administration", delay: 1300, isOutput: true },
  { prompt: "", command: "→ SQL & VBA Automation", delay: 1500, isOutput: true },
  { prompt: "", command: "→ MySQL Performance Tuning", delay: 1700, isOutput: true },
  { prompt: "", command: "→ IT Support & Infrastructure", delay: 1900, isOutput: true },
  { prompt: "", command: "→ Vue.js & Full Stack Development", delay: 2100, isOutput: true },
  { prompt: "onika@devops:~$", command: "echo $STATUS", delay: 2600 },
  { prompt: "", command: "✓ Open to DevOps & Cloud Engineering roles", delay: 3000, isOutput: true, isSuccess: true },
  { prompt: "onika@devops:~$", command: "_", delay: 3400, isCursor: true },
];

export function TerminalComponent() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timers = lines.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay + 200)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="glass rounded-xl overflow-hidden border border-white/8 shadow-glass font-mono text-sm">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6 bg-surface/80">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-1.5 ml-2 text-text-muted text-xs">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>onika@devops — zsh</span>
        </div>
      </div>

      {/* Terminal body */}
      <div className="p-5 space-y-1 min-h-[280px]">
        {lines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-start gap-2"
          >
            {line.prompt && (
              <span className="text-gold shrink-0 select-none">{line.prompt}</span>
            )}
            <span
              className={
                line.isSuccess
                  ? "text-emerald-400"
                  : line.isOutput
                  ? "text-text-secondary"
                  : "text-text-primary"
              }
            >
              {line.isCursor ? (
                <span className="terminal-cursor" />
              ) : (
                line.command
              )}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
