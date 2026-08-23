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
    icon: <ShieldCheck className="w-5 h-5 text-white" />,
    colSpan: "col-span-1 md:col-span-2",
    value: "Verified Match",
  },
  {
    title: "Extraction Speed",
    description: "Average parsing time per document.",
    icon: <Zap className="w-5 h-5 text-[#888]" />,
    colSpan: "col-span-1",
    value: "1.24s",
  },
  {
    title: "Taxonomy Mapping",
    description: "Auto-classified via UNSPSC.",
    icon: <FileText className="w-5 h-5 text-[#888]" />,
    colSpan: "col-span-1",
    value: "Fasteners",
  },
  {
    title: "AI Confidence Score",
    description: "Self-evaluated extraction precision.",
    icon: <BarChart3 className="w-5 h-5 text-white" />,
    colSpan: "col-span-1 md:col-span-2",
    value: "98.5%",
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
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      colSpan: compact ? "col-span-1 sm:col-span-2" : "col-span-1 md:col-span-2",
      value: (goldenRecord.triangulation_status as string) || "Verified Match",
    },
    {
      title: "Extraction Speed",
      description: "Average parsing time per document.",
      icon: <Zap className="w-5 h-5 text-[#888]" />,
      colSpan: "col-span-1",
      value: speed || "0.0s",
    },
    {
      title: "Taxonomy Mapping",
      description: "Auto-classified via UNSPSC.",
      icon: <FileText className="w-5 h-5 text-[#888]" />,
      colSpan: "col-span-1",
      value: goldenRecord.taxonomy_unspsc || "Pending",
    },
    {
      title: "AI Confidence Score",
      description: "Self-evaluated extraction precision.",
      icon: <BarChart3 className="w-5 h-5 text-white" />,
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
          <h2 className="text-2xl font-sans font-medium tracking-tight text-white mb-1">
            Golden Record Analytics
          </h2>
          <p className="text-[#888] text-xs uppercase tracking-widest font-sans">Real-time structured intelligence</p>
        </div>
        <button className="text-xs uppercase tracking-widest font-sans text-[#888] hover:text-white flex items-center gap-1 transition-colors">
          View Raw Logs <ChevronRight className="w-4 h-4" />
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
            className={`p-6 rounded-2xl border border-[#222] bg-black/40 backdrop-blur-xl transition-all duration-300 relative overflow-hidden group hover:bg-white/5 hover:border-[#444] flex flex-col justify-between min-h-[160px] ${item.colSpan}`}
          >
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="p-3 bg-black rounded-full border border-[#333]">
                {item.icon}
              </div>
            </div>
            
            <div className="relative z-10 mt-auto">
              <p className={`font-mono tracking-tighter mb-1 text-white truncate ${String(item.value).length > 12 ? 'text-xl' : String(item.value).length > 8 ? 'text-2xl' : 'text-4xl md:text-5xl'}`}>
                {item.value}
              </p>
              <h3 className="text-[10px] uppercase tracking-widest font-sans text-[#888]">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
