"use client";
import { motion } from "framer-motion";
import { CheckCircle2, CircleDashed, ChevronRight, FileText, XCircle } from "lucide-react";

export interface CatalogItem {
  id: string;
  name: string;
  source_type: "PDF" | "URL";
  source_url: string;
  status: "Pending" | "Processing" | "Enriched" | "Needs Review" | "Approved" | "Rejected";
  goldenRecord?: Record<string, unknown>;
  speed?: string;
}

interface CatalogTableProps {
  items: CatalogItem[];
  onItemClick: (item: CatalogItem) => void;
  selectedId?: string;
}

export default function CatalogTable({ items, onItemClick, selectedId }: CatalogTableProps) {
  return (
    <div className="w-full h-full flex flex-col bg-white/90 hud-border sci-fi-box overflow-hidden shadow-[0_4px_30px_rgba(2,132,199,0.05)] backdrop-blur-md">
      <div className="flex-1 overflow-auto custom-scrollbar">
        <table className="w-full text-left text-sm text-[#0F172A] relative">
          <thead className="text-[11px] uppercase bg-[#F8FAFC] text-[#0284C7] font-heading font-bold border-b border-[#0284C7]/20 sticky top-0 z-10 shadow-[0_4px_20px_rgba(2,132,199,0.05)]">
            <tr>
              <th className="px-6 py-4 tracking-widest typewriter-text">[ SKU NAME ]</th>
              <th className="px-6 py-4 tracking-widest typewriter-text">[ SOURCE ]</th>
              <th className="px-6 py-4 tracking-widest typewriter-text">[ STATUS ]</th>
              <th className="px-6 py-4 tracking-widest text-right typewriter-text">[ ACTION ]</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#0284C7]/10">
            {items.map((item, idx) => {
              const isSelected = selectedId === item.id;
              
              return (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => onItemClick(item)}
                  className={`group cursor-pointer transition-all duration-300 ${
                    isSelected ? "bg-[#0284C7]/10 shadow-[inset_0_0_20px_rgba(2,132,199,0.1)]" : "hover:bg-[#0284C7]/5"
                  }`}
                >
                  <td className="px-6 py-4 font-heading font-bold text-[#0F172A] tracking-wide flex items-center gap-3">
                    <FileText className={`w-4 h-4 transition-colors ${isSelected ? "text-[#0284C7]" : "text-[#0284C7]/50 group-hover:text-[#0284C7]"}`} />
                    <span className={isSelected ? "text-[#0284C7]" : ""}>{item.name}</span>
                  </td>
                  <td className="px-6 py-4 font-mono font-bold text-xs text-[#0284C7]/80">
                    {item.source_url}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 font-heading tracking-wider text-[11px] uppercase">
                      {item.status === "Pending" && (
                        <>
                          <CircleDashed className="w-4 h-4 text-[#EA580C]" />
                          <span className="text-[#EA580C] font-bold hud-gold-glow">Missing Data</span>
                        </>
                      )}
                      {item.status === "Processing" && (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          >
                            <CircleDashed className="w-4 h-4 text-[#0284C7]" />
                          </motion.div>
                          <span className="text-[#0284C7] font-bold hud-glow">AI Extracting...</span>
                        </>
                      )}
                      {item.status === "Enriched" && (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                          <span className="text-[#0284C7] font-bold hud-glow">Verified Record</span>
                        </>
                      )}
                      {item.status === "Needs Review" && (
                        <>
                          <CircleDashed className="w-4 h-4 text-[#EA580C]" />
                          <span className="text-[#EA580C] font-bold hud-gold-glow">Needs Review</span>
                        </>
                      )}
                      {item.status === "Approved" && (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                          <span className="text-[#0284C7] font-bold hud-glow">Approved</span>
                        </>
                      )}
                      {item.status === "Rejected" && (
                        <>
                          <XCircle className="w-4 h-4 text-red-500" />
                          <span className="text-red-500 font-bold">Rejected</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <ChevronRight className={`w-4 h-4 inline-block transition-transform ${isSelected ? "translate-x-1 text-[#0284C7]" : "text-[#0284C7]/40 group-hover:text-[#0284C7]"}`} />
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
