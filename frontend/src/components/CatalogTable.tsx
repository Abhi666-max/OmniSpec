"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, CircleDashed, ChevronRight, FileText } from "lucide-react";

export interface CatalogItem {
  id: string;
  name: string;
  source_type: "PDF" | "URL";
  source_url: string;
  status: "Pending" | "Processing" | "Enriched";
  goldenRecord?: any;
  speed?: string;
}

interface CatalogTableProps {
  items: CatalogItem[];
  onItemClick: (item: CatalogItem) => void;
  selectedId?: string;
}

export default function CatalogTable({ items, onItemClick, selectedId }: CatalogTableProps) {
  return (
    <div className="w-full bg-[#0A0A0A] border border-[#222] rounded-2xl overflow-hidden shadow-2xl">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-[#A1A1AA]">
          <thead className="text-xs uppercase bg-[#050505] text-[#888] border-b border-[#222]">
            <tr>
              <th className="px-6 py-4 font-medium tracking-widest">SKU Name</th>
              <th className="px-6 py-4 font-medium tracking-widest">Source</th>
              <th className="px-6 py-4 font-medium tracking-widest">Status</th>
              <th className="px-6 py-4 font-medium tracking-widest text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#222]">
            {items.map((item, idx) => {
              const isSelected = selectedId === item.id;
              
              return (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => onItemClick(item)}
                  className={`group cursor-pointer transition-colors duration-200 ${
                    isSelected ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                >
                  <td className="px-6 py-4 font-medium text-white flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#555]" />
                    {item.name}
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-[#888]">
                    {item.source_url}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {item.status === "Pending" && (
                        <>
                          <CircleDashed className="w-4 h-4 text-orange-500" />
                          <span className="text-orange-500 font-medium">Missing Data</span>
                        </>
                      )}
                      {item.status === "Processing" && (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          >
                            <CircleDashed className="w-4 h-4 text-blue-500" />
                          </motion.div>
                          <span className="text-blue-500 font-medium">AI Extracting...</span>
                        </>
                      )}
                      {item.status === "Enriched" && (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <span className="text-green-500 font-medium">Verified Record</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <ChevronRight className={`w-4 h-4 inline-block transition-transform ${isSelected ? "translate-x-1 text-white" : "text-[#555] group-hover:text-white"}`} />
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
