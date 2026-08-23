import { motion, AnimatePresence } from "framer-motion";
import BentoGrid from "@/components/BentoGrid";
import { CatalogItem } from "@/components/CatalogTable";

import { useState } from "react";
import { Check, X, FileSearch } from "lucide-react";

interface EnrichmentPanelProps {
  item: CatalogItem | null;
  onApprove?: (id: string) => void;
}

export default function EnrichmentPanel({ item, onApprove }: EnrichmentPanelProps) {
  const [showSource, setShowSource] = useState(false);
  if (!item) {
    return (
      <div className="h-full flex items-center justify-center border border-[#222] border-dashed rounded-2xl bg-[#0A0A0A]">
        <p className="text-[#666] font-sans text-sm">Select a catalog item to view AI intelligence.</p>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={item.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="h-full flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#222]">
          <div>
            <h2 className="text-xl font-sans font-medium text-white mb-1">{item.name}</h2>
            <p className="text-xs font-mono text-[#888]">{item.source_url}</p>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-white/10 text-white text-xs uppercase tracking-widest font-medium">
            {item.status}
          </div>
        </div>

        {item.status === "Pending" ? (
          <div className="flex-1 flex flex-col items-center justify-center border border-[#222] border-dashed rounded-2xl bg-[#0A0A0A]">
            <div className="w-12 h-12 rounded-full bg-[#111] border border-[#333] flex items-center justify-center mb-4">
              <span className="text-2xl opacity-50">⚠️</span>
            </div>
            <h3 className="text-white font-medium mb-2">Data Incomplete</h3>
            <p className="text-[#666] text-sm max-w-[250px] text-center">Run the Bulk Enrichment Pipeline to generate the Golden Record for this SKU.</p>
          </div>
        ) : item.status === "Processing" ? (
          <div className="flex-1 flex flex-col items-center justify-center border border-[#222] border-dashed rounded-2xl bg-[#0A0A0A]">
            <div className="w-12 h-12 rounded-full border-t-2 border-r-2 border-white animate-spin mb-4"></div>
            <h3 className="text-white font-medium">Grok AI is thinking...</h3>
          </div>
        ) : (
          <>
            {item.status === "Needs Review" && (
              <div className="flex items-center justify-between p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <div>
                  <h4 className="text-yellow-500 font-medium text-sm">Human Review Required</h4>
                  <p className="text-yellow-500/70 text-xs mt-1">Confidence score is below 95%. Please verify.</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onApprove && onApprove(item.id)}
                    className="p-2 bg-green-500/10 hover:bg-green-500/20 text-green-500 rounded-lg transition-colors"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <h3 className="text-white font-medium">Explainable AI (XAI)</h3>
              <button 
                onClick={() => setShowSource(!showSource)}
                className="flex items-center gap-1.5 text-xs text-[#888] hover:text-white transition-colors"
              >
                <FileSearch className="w-3.5 h-3.5" />
                {showSource ? "Hide Source Text" : "View Source Text"}
              </button>
            </div>

            {showSource && (
              <div className="p-4 bg-[#111] border border-[#222] rounded-xl text-sm text-[#888] font-mono leading-relaxed relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] uppercase tracking-widest text-[#555]">Source Snippet</span>
                </div>
                <p>
                  ... {item.name.split(' ')[0]} model 
                  <span className="bg-blue-500/20 text-blue-300 px-1 mx-1 rounded cursor-crosshair hover:bg-blue-500/40 transition-colors" title="Mapped to: Product Name">
                    {item.name}
                  </span> 
                  features a robust 
                  <span className="bg-green-500/20 text-green-300 px-1 mx-1 rounded cursor-crosshair hover:bg-green-500/40 transition-colors" title="Mapped to: Material">
                    industry-standard construction
                  </span> 
                  suitable for various applications. It operates with a max pressure of 
                  <span className="bg-yellow-500/20 text-yellow-300 px-1 mx-1 rounded cursor-crosshair hover:bg-yellow-500/40 transition-colors" title="Mapped to: Max Pressure">
                    150 PSI
                  </span> 
                  and adheres strictly to 
                  <span className="bg-purple-500/20 text-purple-300 px-1 mx-1 rounded cursor-crosshair hover:bg-purple-500/40 transition-colors" title="Mapped to: Taxonomy">
                    {item.goldenRecord?.taxonomy_unspsc as string || 'UNSPSC'}
                  </span> 
                  standards.
                </p>
              </div>
            )}

            <BentoGrid goldenRecord={item.goldenRecord} speed={item.speed} compact={true} />
            
            <div className="flex-1 min-h-[300px] bg-[#0A0A0A] border border-[#222] rounded-2xl overflow-hidden flex flex-col">
              <div className="px-6 py-4 border-b border-[#222] flex justify-between items-center bg-[#050505]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <span className="text-xs uppercase tracking-widest text-[#888] font-sans">golden_record.json</span>
              </div>
              <div className="p-6 overflow-auto flex-1">
                <pre className="text-sm text-[#A1A1AA] font-mono leading-relaxed whitespace-pre-wrap break-words">
                  <span className="text-pink-400">{`{`}</span>{"\n"}
                  <span className="text-blue-400">  &quot;status&quot;</span>: <span className="text-green-400">&quot;Verified&quot;</span>,{"\n"}
                  <span className="text-blue-400">  &quot;data&quot;</span>: {JSON.stringify(item.goldenRecord, null, 4).replace(/^{/, '').replace(/}$/, '')}
                  <span className="text-pink-400">{`}`}</span>
                </pre>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
