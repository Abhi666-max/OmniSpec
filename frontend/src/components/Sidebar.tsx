"use client";
import { Activity, Database, Sparkles, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: <Activity className="w-4 h-4" /> },
    { id: "catalog", label: "Scalable Catalog Engine", icon: <Database className="w-4 h-4" /> },
    { id: "validation", label: "AI Validation Rules", icon: <Sparkles className="w-4 h-4" /> },
  ];

  return (
    <div className="w-64 h-screen border-r border-[#0284C7]/20 bg-white/90 backdrop-blur-md flex flex-col fixed left-0 top-0 z-40 pt-6">
      
      {/* Sidebar Header (App Title) */}
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-sm overflow-hidden hud-border flex items-center justify-center bg-[#0284C7]/10">
          <Image src="/logo.jpg" alt="OmniSpec Logo" width={32} height={32} className="object-cover opacity-90 mix-blend-multiply" />
        </div>
        <span className="font-heading font-bold text-xl tracking-wider text-[#0284C7] hud-glow uppercase">[ OmniSpec ]</span>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 flex flex-col gap-2">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#0F172A]/70 font-heading px-2 mb-2 typewriter-text font-bold">Core Pipeline</p>
        
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 sci-fi-box font-heading tracking-wide text-sm transition-all duration-300 font-bold ${
              activeTab === item.id 
                ? "bg-[#0284C7]/10 text-[#0284C7] hud-border hud-glow shadow-[0_0_15px_rgba(2,132,199,0.1)]" 
                : "text-[#0F172A]/70 hover:bg-[#0284C7]/5 hover:text-[#0284C7] hover:hud-glow hover:border-[#0284C7]/30 border border-transparent"
            }`}
          >
            {item.icon}
            <span className="uppercase">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-[#0284C7]/20">
        <Link href="/" className="w-full flex items-center gap-3 px-3 py-2 sci-fi-box font-heading uppercase tracking-wide text-sm font-bold text-[#EA580C]/80 hover:bg-[#EA580C]/10 hover:text-[#EA580C] hover:border-[#EA580C]/50 border border-transparent transition-all">
          <LogOut className="w-4 h-4" />
          System Override
        </Link>
      </div>

    </div>
  );
}
