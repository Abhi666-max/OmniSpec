"use client";
import { ShieldCheck, Zap, Database } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="w-full h-full flex flex-col gap-8 overflow-y-auto custom-scrollbar pr-4 pb-12">
      <div>
        <h1 className="text-3xl font-heading font-bold text-[#0F172A] tracking-widest uppercase typewriter-text">System Overview</h1>
        <p className="text-sm font-sans text-[#0F172A]/70 mt-2 tracking-wide typewriter-text font-semibold">Real-time metrics for J.A.R.V.I.S. Core Intelligence.</p>
      </div>

      {/* Top Notch Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 sci-fi-box hud-border bg-white/90 backdrop-blur-md flex flex-col relative overflow-hidden group shadow-[0_4px_20px_rgba(2,132,199,0.05)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0284C7]/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-[#0284C7]/20 transition-all"></div>
          <div className="w-10 h-10 rounded-sm bg-[#0284C7]/10 border border-[#0284C7]/30 flex items-center justify-center mb-4">
            <Database className="w-5 h-5 text-[#0284C7]" />
          </div>
          <p className="text-4xl font-heading font-bold text-[#0F172A] tracking-wider mb-1">5,000</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#0284C7] font-heading font-bold">Total SKUs Processed</p>
        </div>
        
        <div className="p-6 sci-fi-box hud-border bg-white/90 backdrop-blur-md flex flex-col relative overflow-hidden group shadow-[0_4px_20px_rgba(234,88,12,0.05)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#EA580C]/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-[#EA580C]/20 transition-all"></div>
          <div className="w-10 h-10 rounded-sm bg-[#EA580C]/10 border border-[#EA580C]/30 flex items-center justify-center mb-4">
            <ShieldCheck className="w-5 h-5 text-[#EA580C]" />
          </div>
          <p className="text-4xl font-heading font-bold text-[#EA580C] tracking-wider mb-1 hud-gold-glow">98.5%</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#EA580C] font-heading font-bold">Triangulation Success</p>
        </div>

        <div className="p-6 sci-fi-box hud-border bg-white/90 backdrop-blur-md flex flex-col relative overflow-hidden group shadow-[0_4px_20px_rgba(2,132,199,0.05)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#0284C7]/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-[#0284C7]/20 transition-all"></div>
          <div className="w-10 h-10 rounded-sm bg-[#0284C7]/10 border border-[#0284C7]/30 flex items-center justify-center mb-4">
            <Zap className="w-5 h-5 text-[#0284C7]" />
          </div>
          <p className="text-4xl font-heading font-bold text-[#0F172A] tracking-wider mb-1">~0.8s</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#0284C7] font-heading font-bold">Avg. Extraction Speed</p>
        </div>

        {/* Business Value (ROI) Stats */}
        <div className="p-6 sci-fi-box hud-border bg-white/90 backdrop-blur-md flex flex-col relative overflow-hidden shadow-[0_4px_20px_rgba(234,88,12,0.05)]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#EA580C]/10 blur-2xl rounded-full -mr-8 -mt-8"></div>
          <p className="text-3xl font-heading font-bold text-[#EA580C] tracking-wider mb-1 hud-gold-glow">450 hrs</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#EA580C] font-heading font-bold">Manual Entry Time Saved</p>
          <p className="text-[10px] uppercase tracking-widest text-[#0F172A]/50 font-heading mt-auto pt-4 font-bold">Calculated at 15 mins / SKU manually vs AI.</p>
        </div>

        <div className="p-6 sci-fi-box hud-border bg-white/90 backdrop-blur-md flex flex-col relative overflow-hidden shadow-[0_4px_20px_rgba(234,88,12,0.05)]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#EA580C]/10 blur-2xl rounded-full -mr-8 -mt-8"></div>
          <p className="text-3xl font-heading font-bold text-[#EA580C] tracking-wider mb-1 hud-gold-glow">$12,500</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#EA580C] font-heading font-bold">Estimated Cost Saved</p>
          <p className="text-[10px] uppercase tracking-widest text-[#0F172A]/50 font-heading mt-auto pt-4 font-bold">Assuming $30/hr operational data entry cost.</p>
        </div>

        <div className="p-6 sci-fi-box hud-border bg-white/90 backdrop-blur-md flex flex-col relative overflow-hidden shadow-[0_4px_20px_rgba(248,113,113,0.05)]">
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 blur-2xl rounded-full -mr-8 -mt-8"></div>
          <p className="text-3xl font-heading font-bold text-red-500 tracking-wider mb-1">$2.40</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-red-500 font-heading font-bold">Grok API Cost Incurred</p>
          <p className="text-[10px] uppercase tracking-widest text-[#0F172A]/50 font-heading mt-auto pt-4 font-bold">Using LLaMA 3 70B on Groq (Ultra-low latency).</p>
        </div>
      </div>

      {/* Visual Taxonomy Graph (Hackathon Feature) */}
      <div className="flex-1 sci-fi-box hud-border bg-white/90 backdrop-blur-md p-8 flex flex-col relative overflow-hidden min-h-[350px] shadow-[0_4px_20px_rgba(2,132,199,0.05)]">
        <div className="mb-2 z-10">
          <h2 className="text-xl font-heading font-bold text-[#0F172A] tracking-widest uppercase">Taxonomy Knowledge Graph (Live)</h2>
          <p className="text-sm text-[#0F172A]/70 mt-1 font-semibold">Real-time classification of ingested supplier data into industry standard hierarchies.</p>
        </div>
        
        <div className="flex-1 flex items-center justify-start pl-12 relative z-10 overflow-x-auto custom-scrollbar pt-8">
          
          <div className="flex items-center">
            {/* Root Node */}
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div className="w-16 h-16 rounded-full bg-[#0284C7]/10 border-2 border-[#0284C7]/50 text-[#0284C7] flex items-center justify-center shadow-[0_0_30px_rgba(2,132,199,0.2)] backdrop-blur-md animate-[pulse_4s_ease-in-out_infinite]">
                <Database className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-[#0284C7] bg-white border border-[#0284C7]/30 px-3 py-1 rounded-sm hud-glow">Core Engine</span>
            </div>

            {/* Connecting line to categories */}
            <div className="w-16 h-[2px] bg-[#0284C7]/30 shadow-[0_0_10px_rgba(2,132,199,0.2)]"></div>

            <div className="flex flex-col gap-16 relative">
              {/* Vertical connector for categories */}
              <div className="absolute left-0 top-[20px] bottom-[20px] w-[2px] bg-[#0284C7]/30 shadow-[0_0_10px_rgba(2,132,199,0.2)]"></div>

              {/* Category 1: Industrial */}
              <div className="flex items-center relative">
                <div className="w-8 h-[2px] bg-[#0284C7]/30 shadow-[0_0_10px_rgba(2,132,199,0.2)]"></div>
                <div className="flex flex-col items-center gap-2 group mr-8 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#0284C7]/40 flex items-center justify-center group-hover:border-[#0284C7] group-hover:shadow-[0_0_20px_rgba(2,132,199,0.3)] transition-all">
                    <span className="text-[#0284C7] font-heading font-bold text-lg">IND</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 relative">
                  <div className="absolute left-[-32px] top-[14px] bottom-[14px] w-[2px] bg-[#0284C7]/30 shadow-[0_0_10px_rgba(2,132,199,0.2)]"></div>
                  
                  <div className="flex items-center relative group">
                    <div className="w-8 h-[2px] bg-[#0284C7]/30 shadow-[0_0_10px_rgba(2,132,199,0.2)] absolute left-[-32px] group-hover:bg-[#0284C7]"></div>
                    <div className="px-4 py-2 rounded-sm bg-white border border-[#0284C7]/30 text-[11px] uppercase tracking-widest text-[#0284C7] font-heading font-bold hover:text-white hover:bg-[#0284C7] hover:border-[#0284C7] hover:shadow-[0_0_15px_rgba(2,132,199,0.3)] transition-all cursor-pointer whitespace-nowrap">
                      Fasteners & Hardware
                    </div>
                  </div>
                  <div className="flex items-center relative group">
                    <div className="w-8 h-[2px] bg-[#0284C7]/30 shadow-[0_0_10px_rgba(2,132,199,0.2)] absolute left-[-32px] group-hover:bg-[#0284C7]"></div>
                    <div className="px-4 py-2 rounded-sm bg-white border border-[#0284C7]/30 text-[11px] uppercase tracking-widest text-[#0284C7] font-heading font-bold hover:text-white hover:bg-[#0284C7] hover:border-[#0284C7] hover:shadow-[0_0_15px_rgba(2,132,199,0.3)] transition-all cursor-pointer whitespace-nowrap">
                      Pumps & Hydraulics
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 2: Electrical */}
              <div className="flex items-center relative">
                <div className="w-8 h-[2px] bg-[#0284C7]/30 shadow-[0_0_10px_rgba(2,132,199,0.2)]"></div>
                <div className="flex flex-col items-center gap-2 group mr-8 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-[#EA580C]/40 flex items-center justify-center group-hover:border-[#EA580C] group-hover:shadow-[0_0_20px_rgba(234,88,12,0.3)] transition-all">
                    <span className="text-[#EA580C] font-heading font-bold text-lg">ELE</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 relative">
                  <div className="flex items-center relative group">
                    <div className="w-8 h-[2px] bg-[#0284C7]/30 shadow-[0_0_10px_rgba(2,132,199,0.2)] absolute left-[-32px] group-hover:bg-[#EA580C] group-hover:shadow-[0_0_10px_rgba(234,88,12,0.5)]"></div>
                    <div className="px-4 py-2 rounded-sm bg-white border border-[#EA580C]/30 text-[11px] uppercase tracking-widest text-[#EA580C] font-heading font-bold hover:text-white hover:bg-[#EA580C] hover:border-[#EA580C] hover:shadow-[0_0_15px_rgba(234,88,12,0.3)] transition-all cursor-pointer whitespace-nowrap">
                      Motors & Drives
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
