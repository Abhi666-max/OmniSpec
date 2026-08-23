"use client";
import { ShieldCheck, Zap, Database } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="w-full h-full flex flex-col gap-8 overflow-y-auto custom-scrollbar pr-4 pb-12">
      <div>
        <h1 className="text-3xl font-sans font-medium text-white tracking-tight">Platform Overview</h1>
        <p className="text-sm font-sans text-[#888] mt-2">Real-time metrics for OmniSpec AI Product Intelligence.</p>
      </div>

      {/* Top Notch Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Performance Stats */}
        <div className="p-6 border border-[#222] bg-[#0A0A0A] rounded-2xl flex flex-col">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-[#333] flex items-center justify-center mb-4">
            <Database className="w-5 h-5 text-white" />
          </div>
          <p className="text-3xl font-mono text-white tracking-tighter mb-1">5,000</p>
          <p className="text-xs uppercase tracking-widest text-[#888] font-sans">Total SKUs Processed</p>
        </div>
        
        <div className="p-6 border border-[#222] bg-[#0A0A0A] rounded-2xl flex flex-col">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-[#333] flex items-center justify-center mb-4">
            <ShieldCheck className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-3xl font-mono text-white tracking-tighter mb-1">98.5%</p>
          <p className="text-xs uppercase tracking-widest text-[#888] font-sans">Triangulation Success</p>
        </div>

        <div className="p-6 border border-[#222] bg-[#0A0A0A] rounded-2xl flex flex-col">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-[#333] flex items-center justify-center mb-4">
            <Zap className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-3xl font-mono text-white tracking-tighter mb-1">~0.8s</p>
          <p className="text-xs uppercase tracking-widest text-[#888] font-sans">Avg. Extraction Speed</p>
        </div>

        {/* Business Value (ROI) Stats */}
        <div className="p-6 border border-[#222] bg-[#0A0A0A] rounded-2xl flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 blur-2xl rounded-full -mr-8 -mt-8"></div>
          <p className="text-3xl font-mono text-white tracking-tighter mb-1 text-green-400">450 hrs</p>
          <p className="text-xs uppercase tracking-widest text-[#888] font-sans">Manual Entry Time Saved</p>
          <p className="text-xs text-[#555] font-sans mt-auto pt-4">Calculated at 15 mins / SKU manually vs AI.</p>
        </div>

        <div className="p-6 border border-[#222] bg-[#0A0A0A] rounded-2xl flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 blur-2xl rounded-full -mr-8 -mt-8"></div>
          <p className="text-3xl font-mono text-white tracking-tighter mb-1 text-green-400">$12,500</p>
          <p className="text-xs uppercase tracking-widest text-[#888] font-sans">Estimated Cost Saved</p>
          <p className="text-xs text-[#555] font-sans mt-auto pt-4">Assuming $30/hr operational data entry cost.</p>
        </div>

        <div className="p-6 border border-[#222] bg-[#0A0A0A] rounded-2xl flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 blur-2xl rounded-full -mr-8 -mt-8"></div>
          <p className="text-3xl font-mono text-white tracking-tighter mb-1 text-orange-400">$2.40</p>
          <p className="text-xs uppercase tracking-widest text-[#888] font-sans">Grok API Cost Incurred</p>
          <p className="text-xs text-[#555] font-sans mt-auto pt-4">Using LLaMA 3 70B on Groq (Ultra-low latency).</p>
        </div>
      </div>

      {/* Visual Taxonomy Graph (Hackathon Feature) */}
      <div className="flex-1 border border-[#222] bg-[#0A0A0A] rounded-2xl p-8 flex flex-col relative overflow-hidden min-h-[350px]">
        <div className="mb-2 z-10">
          <h2 className="text-xl font-sans font-medium text-white tracking-tight">Taxonomy Knowledge Graph (Live)</h2>
          <p className="text-sm text-[#888] mt-1">Real-time classification of ingested supplier data into industry standard hierarchies.</p>
        </div>
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

        <div className="flex-1 flex items-center justify-start pl-12 relative z-10 overflow-x-auto custom-scrollbar pt-8">
          
          <div className="flex items-center">
            {/* Root Node */}
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 text-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-md">
                <Database className="w-8 h-8" />
              </div>
              <span className="text-xs font-mono text-white bg-black px-2 py-1 rounded">OmniSpec Engine</span>
            </div>

            {/* Connecting line to categories */}
            <div className="w-16 h-px bg-[#444]"></div>

            <div className="flex flex-col gap-16 relative">
              {/* Vertical connector for categories */}
              <div className="absolute left-0 top-[20px] bottom-[20px] w-px bg-[#444]"></div>

              {/* Category 1: Industrial */}
              <div className="flex items-center relative">
                <div className="w-8 h-px bg-[#444]"></div>
                <div className="flex flex-col items-center gap-2 group mr-8 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#333] flex items-center justify-center group-hover:border-blue-500 transition-colors">
                    <span className="text-blue-500 font-bold text-lg">I</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#888] bg-black px-1 absolute -bottom-5 whitespace-nowrap">Industrial</span>
                </div>

                <div className="flex flex-col gap-4 relative">
                  <div className="absolute left-[-32px] top-[14px] bottom-[14px] w-px bg-[#444]"></div>
                  
                  <div className="flex items-center relative">
                    <div className="w-8 h-px bg-[#444] absolute left-[-32px]"></div>
                    <div className="px-4 py-2 rounded-lg bg-[#111] border border-[#222] text-xs text-[#888] font-mono hover:text-white hover:border-[#444] transition-colors cursor-pointer shadow-lg whitespace-nowrap">
                      Fasteners & Hardware
                    </div>
                  </div>
                  <div className="flex items-center relative">
                    <div className="w-8 h-px bg-[#444] absolute left-[-32px]"></div>
                    <div className="px-4 py-2 rounded-lg bg-[#111] border border-[#222] text-xs text-[#888] font-mono hover:text-white hover:border-[#444] transition-colors cursor-pointer shadow-lg whitespace-nowrap">
                      Pumps & Hydraulics
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 2: Electrical */}
              <div className="flex items-center relative">
                <div className="w-8 h-px bg-[#444]"></div>
                <div className="flex flex-col items-center gap-2 group mr-8 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#111] border border-[#333] flex items-center justify-center group-hover:border-purple-500 transition-colors">
                    <span className="text-purple-500 font-bold text-lg">E</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#888] bg-black px-1 absolute -bottom-5 whitespace-nowrap">Electrical</span>
                </div>

                <div className="flex flex-col gap-4 relative">
                  <div className="flex items-center relative">
                    <div className="w-8 h-px bg-[#444] absolute left-[-32px]"></div>
                    <div className="px-4 py-2 rounded-lg bg-[#111] border border-[#222] text-xs text-[#888] font-mono hover:text-white hover:border-[#444] transition-colors cursor-pointer shadow-lg whitespace-nowrap">
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
