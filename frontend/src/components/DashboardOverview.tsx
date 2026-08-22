"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Database } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-sans font-medium text-white tracking-tight">Platform Overview</h1>
        <p className="text-sm font-sans text-[#888] mt-2">Real-time metrics for OmniSpec AI Product Intelligence.</p>
      </div>

      {/* Top Notch Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border border-[#222] bg-[#0A0A0A] rounded-2xl flex flex-col">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-[#333] flex items-center justify-center mb-4">
            <Database className="w-5 h-5 text-white" />
          </div>
          <p className="text-3xl font-mono text-white tracking-tighter mb-1">5</p>
          <p className="text-xs uppercase tracking-widest text-[#888] font-sans">Total SKUs Processed</p>
        </div>
        
        <div className="p-6 border border-[#222] bg-[#0A0A0A] rounded-2xl flex flex-col">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-[#333] flex items-center justify-center mb-4">
            <ShieldCheck className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-3xl font-mono text-white tracking-tighter mb-1">100%</p>
          <p className="text-xs uppercase tracking-widest text-[#888] font-sans">Triangulation Success</p>
        </div>

        <div className="p-6 border border-[#222] bg-[#0A0A0A] rounded-2xl flex flex-col">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-[#333] flex items-center justify-center mb-4">
            <Zap className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-3xl font-mono text-white tracking-tighter mb-1">~0.01s</p>
          <p className="text-xs uppercase tracking-widest text-[#888] font-sans">Avg. Extraction Speed</p>
        </div>
      </div>

      {/* System Health / Message */}
      <div className="flex-1 border border-[#222] bg-black/40 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
        <h3 className="text-xl font-sans font-medium text-white mb-2">System is Healthy</h3>
        <p className="text-[#888] text-sm max-w-md">OmniSpec is actively monitoring inputs. Navigate to the <strong>Scalable Catalog Engine</strong> in the sidebar to run the bulk AI pipeline.</p>
      </div>
    </div>
  );
}
