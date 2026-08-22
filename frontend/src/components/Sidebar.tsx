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
    <div className="w-64 h-screen border-r border-[#222] bg-[#050505] flex flex-col fixed left-0 top-0 z-40 pt-6">
      
      {/* Sidebar Header (App Title) */}
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#333]">
          <Image src="/logo.jpg" alt="OmniSpec Logo" width={32} height={32} className="object-cover" />
        </div>
        <span className="font-sans font-medium text-lg tracking-tight text-white">OmniSpec</span>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 flex flex-col gap-2">
        <p className="text-xs uppercase tracking-widest text-[#555] font-sans px-2 mb-2">Core Pipeline</p>
        
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg font-sans text-sm transition-colors ${
              activeTab === item.id 
                ? "bg-white/10 text-white font-medium" 
                : "text-[#888] hover:bg-white/5 hover:text-[#ccc]"
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-[#222]">
        <Link href="/" className="w-full flex items-center gap-3 px-3 py-2 rounded-lg font-sans text-sm text-[#888] hover:bg-white/5 hover:text-white transition-colors">
          <LogOut className="w-4 h-4" />
          Exit Console
        </Link>
      </div>

    </div>
  );
}
