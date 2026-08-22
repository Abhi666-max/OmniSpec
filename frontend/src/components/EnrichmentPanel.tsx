import { motion, AnimatePresence } from "framer-motion";
import BentoGrid from "@/components/BentoGrid";
import { CatalogItem } from "@/components/CatalogTable";

interface EnrichmentPanelProps {
  item: CatalogItem | null;
}

export default function EnrichmentPanel({ item }: EnrichmentPanelProps) {
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
        className="h-full flex flex-col gap-6"
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
            <BentoGrid goldenRecord={item.goldenRecord} speed={item.speed} />
            
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
                <pre className="text-sm text-[#A1A1AA] font-mono leading-relaxed">
                  <span className="text-pink-400">{`{`}</span>{"\n"}
                  <span className="text-blue-400">  "status"</span>: <span className="text-green-400">"Verified"</span>,{"\n"}
                  <span className="text-blue-400">  "data"</span>: {JSON.stringify(item.goldenRecord, null, 4).replace(/^{/, '').replace(/}$/, '')}
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
