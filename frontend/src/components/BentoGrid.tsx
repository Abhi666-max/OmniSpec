"use client";
import { Zap, ShieldCheck, FileText, BarChart3, ChevronRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface BentoGridProps {
  goldenRecord?: Record<string, unknown>;
  speed?: string;
  compact?: boolean;
}

const defaultItems = [
  {
    title: "Triangulation Status",
    description: "Cross-referencing URL, PDF, and DB.",
    icon: <ShieldCheck className="w-5 h-5 text-[#0284C7]" />,
    colSpan: "col-span-1 md:col-span-2",
    value: "Awaiting Data",
  },
  {
    title: "Extraction Speed",
    description: "Average parsing time per document.",
    icon: <Zap className="w-5 h-5 text-[#0284C7]/60" />,
    colSpan: "col-span-1",
    value: "--",
  },
  {
    title: "Taxonomy Mapping",
    description: "Auto-classified via UNSPSC.",
    icon: <FileText className="w-5 h-5 text-[#0284C7]/60" />,
    colSpan: "col-span-1",
    value: "Pending",
  },
  {
    title: "AI Confidence Score",
    description: "Self-evaluated extraction precision.",
    icon: <BarChart3 className="w-5 h-5 text-[#EA580C]" />,
    colSpan: "col-span-1 md:col-span-2",
    value: "--",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function BentoGrid({ goldenRecord, speed, compact = false }: BentoGridProps) {
  
  const bentoItems = goldenRecord ? [
    {
      title: "Triangulation Status",
      description: "Cross-referencing URL, PDF, and DB.",
      icon: <ShieldCheck className="w-5 h-5 text-[#0284C7]" />,
      colSpan: compact ? "col-span-1 sm:col-span-2" : "col-span-1 md:col-span-2",
      value: (goldenRecord.triangulation_status as string) || "Verified Match",
    },
    {
      title: "Extraction Speed",
      description: "Average parsing time per document.",
      icon: <Zap className="w-5 h-5 text-[#0284C7]/60" />,
      colSpan: "col-span-1",
      value: speed || "0.0s",
    },
    {
      title: "Taxonomy Mapping",
      description: "Auto-classified via UNSPSC.",
      icon: <FileText className="w-5 h-5 text-[#0284C7]/60" />,
      colSpan: "col-span-1",
      value: goldenRecord.taxonomy_unspsc || "Pending",
    },
    {
      title: "AI Confidence Score",
      description: "Self-evaluated extraction precision.",
      icon: <BarChart3 className="w-5 h-5 text-[#EA580C]" />,
      colSpan: compact ? "col-span-1 sm:col-span-2" : "col-span-1 md:col-span-2",
      value: `${goldenRecord.confidence_score}%` || "0%",
    },
  ] : defaultItems;

  return (
    <div className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-between mb-6"
      >
        <div>
          <h2 className="text-xl font-heading font-bold tracking-widest uppercase text-[#0F172A] mb-1 typewriter-text">
            [ Golden Record Analytics ]
          </h2>
          <p className="text-[#0284C7]/80 text-[10px] uppercase tracking-[0.2em] font-heading font-bold typewriter-text">Real-time structured intelligence</p>
        </div>
        <button className="text-[10px] uppercase tracking-[0.2em] font-heading text-[#0284C7]/80 hover:text-[#0284C7] font-bold flex items-center gap-1 transition-colors">
          View Raw Logs <ChevronRight className="w-3 h-3" />
        </button>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className={`grid gap-4 ${compact ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}
      >
        {bentoItems.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className={`p-6 sci-fi-box hud-border bg-white/90 backdrop-blur-xl transition-all duration-300 relative overflow-hidden group hover:bg-[#0284C7]/5 hover:border-[#0284C7] hover:shadow-[0_0_20px_rgba(2,132,199,0.2)] flex flex-col justify-between min-h-[160px] shadow-[0_4px_20px_rgba(2,132,199,0.05)] ${item.colSpan}`}
          >
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="p-3 bg-white rounded-full border border-[#0284C7]/30 group-hover:border-[#0284C7]/60 group-hover:shadow-[0_0_15px_rgba(2,132,199,0.3)] transition-all">
                {item.icon}
              </div>
            </div>
            
            <div className="relative z-10 mt-auto">
              <p className={`font-heading font-bold tracking-widest uppercase mb-1 text-[#0284C7] truncate transition-all typewriter-text ${String(item.value).length > 12 ? 'text-xl' : String(item.value).length > 8 ? 'text-2xl' : 'text-3xl md:text-4xl'}`}>
                {item.value}
              </p>
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-heading font-bold text-[#0F172A]/70 typewriter-text">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
