
import BentoGrid from "@/components/BentoGrid";
import { CatalogItem } from "@/components/CatalogTable";

import { useState } from "react";
import { Check, X, FileSearch } from "lucide-react";

interface EnrichmentPanelProps {
  item: CatalogItem | null;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
}

export default function EnrichmentPanel({ item, onApprove, onReject }: EnrichmentPanelProps) {
  const [showSource, setShowSource] = useState(false);
  if (!item) {
    return null;
  }

  return (
      <div
        className="h-full flex flex-col gap-6 overflow-y-auto pr-4 custom-scrollbar"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#0284C7]/30 shrink-0">
          <div>
            <h2 className="text-2xl font-heading font-bold text-[#0F172A] mb-1 tracking-widest uppercase typewriter-text">[ {item.name} ]</h2>
            <p className="text-xs font-mono text-[#0284C7]/80 font-bold typewriter-text">{item.source_url}</p>
          </div>
          <div className="px-3 py-1.5 rounded-sm bg-[#0284C7]/10 border border-[#0284C7]/30 text-[#0284C7] text-[10px] uppercase tracking-[0.2em] font-heading font-bold hud-glow">
            {item.status}
          </div>
        </div>

        {item.status === "Pending" ? (
          <div className="flex-1 flex flex-col items-center justify-center border border-[#EA580C]/30 border-dashed sci-fi-box bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(234,88,12,0.05)]">
            <div className="w-12 h-12 rounded-sm bg-[#EA580C]/10 border border-[#EA580C]/50 flex items-center justify-center mb-4 hud-gold-glow">
              <span className="text-2xl text-[#EA580C]">⚠️</span>
            </div>
            <h3 className="text-[#EA580C] font-heading font-bold uppercase tracking-widest mb-2 hud-gold-glow typewriter-text">Data Incomplete</h3>
            <p className="text-[#EA580C]/80 text-[10px] uppercase tracking-widest max-w-[250px] text-center font-heading font-bold">Run the Bulk Enrichment Pipeline to generate the Golden Record for this SKU.</p>
          </div>
        ) : item.status === "Processing" ? (
          <div className="flex-1 flex flex-col items-center justify-center border border-[#0284C7]/30 border-dashed sci-fi-box bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(2,132,199,0.05)]">
            <div className="w-12 h-12 rounded-full border-t-2 border-r-2 border-[#0284C7] animate-spin mb-4 shadow-[0_0_15px_rgba(2,132,199,0.5)]"></div>
            <h3 className="text-[#0284C7] font-heading font-bold uppercase tracking-widest hud-glow">Grok AI is thinking...</h3>
          </div>
        ) : (
          <>
            {item.status === "Needs Review" && (
              <div className="flex items-center justify-between p-4 bg-[#EA580C]/10 border border-[#EA580C]/30 rounded-sm">
                <div>
                  <h4 className="text-[#EA580C] font-heading font-bold tracking-widest uppercase text-sm hud-gold-glow">Human Review Required</h4>
                  <p className="text-[#EA580C]/80 text-[10px] uppercase font-heading tracking-wider mt-1 font-bold">Confidence score is below 95%. Please verify.</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => onReject && onReject(item.id)}
                    className="p-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 hover:border-red-500 text-red-500 rounded-sm transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onApprove && onApprove(item.id)}
                    className="p-2 bg-[#0284C7]/10 hover:bg-[#0284C7]/20 border border-[#0284C7]/30 hover:border-[#0284C7] text-[#0284C7] rounded-sm transition-all"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-2">
              <h3 className="text-[#0F172A] font-heading font-bold uppercase tracking-widest">Explainable AI (XAI)</h3>
              <button 
                onClick={() => setShowSource(!showSource)}
                className="flex items-center gap-1.5 text-[10px] font-heading tracking-[0.2em] uppercase text-[#0284C7]/80 hover:text-[#0284C7] font-bold transition-colors"
              >
                <FileSearch className="w-3.5 h-3.5" />
                {showSource ? "Hide Source Text" : "View Source Text"}
              </button>
            </div>

            {showSource && (
              <div className="p-4 bg-white/90 hud-border sci-fi-box text-sm text-[#0F172A]/90 font-mono leading-relaxed relative overflow-hidden group shrink-0 shadow-[0_4px_20px_rgba(2,132,199,0.05)]">
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] uppercase tracking-widest text-[#0284C7]/50 font-heading font-bold">Source Snippet</span>
                </div>
                <p>
                  ... {item.name.split(' ')[0]} model 
                  <span className="bg-[#0284C7]/10 text-[#0284C7] border border-[#0284C7]/50 px-1 mx-1 rounded-sm cursor-crosshair hover:bg-[#0284C7]/20 transition-colors shadow-[0_0_10px_rgba(2,132,199,0.1)] font-bold" title="Mapped to: Product Name">
                    {item.name}
                  </span> 
                  features a robust 
                  <span className="bg-[#EA580C]/10 text-[#EA580C] border border-[#EA580C]/50 px-1 mx-1 rounded-sm cursor-crosshair hover:bg-[#EA580C]/20 transition-colors shadow-[0_0_10px_rgba(234,88,12,0.1)] font-bold" title="Mapped to: Material">
                    industry-standard construction
                  </span> 
                  suitable for various applications. It operates with a max pressure of 
                  <span className="bg-red-500/10 text-red-600 border border-red-500/50 px-1 mx-1 rounded-sm cursor-crosshair hover:bg-red-500/20 transition-colors shadow-[0_0_10px_rgba(248,113,113,0.1)] font-bold" title="Mapped to: Max Pressure">
                    150 PSI
                  </span> 
                  and adheres strictly to 
                  <span className="bg-purple-500/10 text-purple-600 border border-purple-500/50 px-1 mx-1 rounded-sm cursor-crosshair hover:bg-purple-500/20 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.1)] font-bold" title="Mapped to: Taxonomy">
                    {item.goldenRecord?.taxonomy_unspsc as string || 'UNSPSC'}
                  </span> 
                  standards.
                </p>
              </div>
            )}

            <BentoGrid goldenRecord={item.goldenRecord} speed={item.speed} compact={true} />
            
            <div className="flex flex-col gap-4 p-5 bg-white/90 hud-border sci-fi-box relative overflow-hidden shrink-0 shadow-[0_4px_20px_rgba(2,132,199,0.05)]">
              <div className="absolute left-[29px] top-12 bottom-8 w-[2px] bg-[#0284C7]/20"></div>
              <h3 className="text-[11px] font-heading font-bold tracking-[0.2em] uppercase text-[#0F172A] mb-2">[ Audit Trail / Lineage ]</h3>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="mt-1 w-3 h-3 rounded-full bg-white border-2 border-[#0284C7]/40"></div>
                <div>
                  <p className="text-xs font-heading font-bold tracking-widest uppercase text-[#0F172A]/70">Data Ingested</p>
                  <p className="text-[10px] font-mono text-[#0284C7]/60 uppercase mt-0.5 font-bold">Source: {item.source_type}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="mt-1 w-3 h-3 rounded-full bg-white border-2 border-[#0284C7]/40"></div>
                <div>
                  <p className="text-xs font-heading font-bold tracking-widest uppercase text-[#0F172A]/70">Parsed by PyMuPDF Engine</p>
                  <p className="text-[10px] font-mono text-[#0284C7]/60 uppercase mt-0.5 font-bold">Time: ~0.02s</p>
                </div>
              </div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="mt-1 w-3 h-3 rounded-full bg-[#0284C7] border-2 border-white shadow-[0_0_10px_rgba(2,132,199,0.5)]"></div>
                <div>
                  <p className="text-xs font-heading font-bold tracking-widest uppercase text-[#0284C7] hud-glow">Extracted via Grok (LLaMA 3)</p>
                  <p className="text-[10px] font-mono text-[#0284C7]/80 uppercase mt-0.5 font-bold">Speed: {item.speed}</p>
                </div>
              </div>
              {(item.status === "Approved" || item.status === "Rejected") && (
                <div className="flex items-start gap-4 relative z-10">
                  <div className={`mt-1 w-3 h-3 rounded-full border-2 border-white ${item.status === "Approved" ? "bg-[#0284C7] shadow-[0_0_10px_rgba(2,132,199,0.5)]" : "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"}`}></div>
                  <div>
                    <p className={`text-xs font-heading font-bold tracking-widest uppercase ${item.status === "Approved" ? "text-[#0284C7] hud-glow" : "text-red-500"}`}>Human {item.status}</p>
                    <p className="text-[10px] font-mono text-[#0284C7]/60 uppercase mt-0.5 font-bold">Role: Data Steward</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex-1 min-h-[300px] bg-white/90 hud-border sci-fi-box overflow-hidden flex flex-col shadow-[0_4px_20px_rgba(2,132,199,0.05)]">
              <div className="px-6 py-4 border-b border-[#0284C7]/20 flex justify-between items-center bg-[#F8FAFC]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-sm bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-sm bg-[#EA580C]/20 border border-[#EA580C]/50"></div>
                  <div className="w-3 h-3 rounded-sm bg-[#0284C7]/20 border border-[#0284C7]/50"></div>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#0284C7] font-heading font-bold hud-glow">golden_record.json</span>
              </div>
              <div className="p-6 overflow-auto flex-1">
                <pre className="text-sm text-[#0F172A] font-mono leading-relaxed whitespace-pre-wrap break-words font-semibold">
                  <span className="text-pink-600">{`{`}</span>{"\n"}
                  <span className="text-[#0284C7]">  &quot;status&quot;</span>: <span className="text-[#EA580C]">&quot;Verified&quot;</span>,{"\n"}
                  <span className="text-[#0284C7]">  &quot;data&quot;</span>: {JSON.stringify(item.goldenRecord, null, 4).replace(/^{/, '').replace(/}$/, '')}
                  <span className="text-pink-600">{`}`}</span>
                </pre>
              </div>
            </div>
          </>
        )}
      </div>
  );
}
