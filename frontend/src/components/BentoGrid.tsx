"use client";
import { Zap, ShieldCheck, FileText, BarChart3, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface BentoGridProps {
  goldenRecord?: any;
  speed?: string;
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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function BentoGrid({ goldenRecord, speed }: BentoGridProps) {
  
  const bentoItems = goldenRecord ? [
    {
      title: "Triangulation Status",
      description: "Cross-referencing URL, PDF, and DB.",
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      colSpan: "col-span-1 md:col-span-2",
      value: goldenRecord.triangulation_status || "Verified Match",
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
      colSpan: "col-span-1 md:col-span-2",
      value: `${goldenRecord.confidence_score}%` || "0%",
    },
  ] : defaultItems;

  return (
    <div className="w-full h-full">
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
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {bentoItems.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-2xl border border-[#222] bg-black/40 backdrop-blur-xl transition-all duration-300 relative overflow-hidden group hover:bg-white/5 hover:border-[#444] ${item.colSpan}`}
          >
            <div className="flex items-start justify-between mb-8 relative z-10">
              <div className="p-3 bg-black rounded-full border border-[#333]">
                {item.icon}
              </div>
            </div>
            
            <div className="relative z-10">
              <p className="text-4xl md:text-5xl font-mono tracking-tighter mb-3 text-white">
                {item.value}
              </p>
              <h3 className="text-xs uppercase tracking-widest font-sans text-[#888] mb-1">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
