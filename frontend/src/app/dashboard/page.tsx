"use client";
import AuroraBackground from "@/components/AuroraBackground";
import Cursor from "@/components/Cursor";
import Sidebar from "@/components/Sidebar";
import DashboardOverview from "@/components/DashboardOverview";
import CatalogTable, { CatalogItem } from "@/components/CatalogTable";
import EnrichmentPanel from "@/components/EnrichmentPanel";
import Dropzone from "@/components/Dropzone";
import BentoGrid from "@/components/BentoGrid";
import { useState } from "react";
import { Play, Download } from "lucide-react";

const initialCatalog: CatalogItem[] = [
  { id: "1", name: "Centrifugal Water Pump CX-500", source_type: "URL", source_url: "supplier-a.com/cx-500", status: "Pending" },
  { id: "2", name: "Stainless Steel Fastener M12", source_type: "PDF", source_url: "spec_sheet_m12.pdf", status: "Pending" },
  { id: "3", name: "3-Phase Induction Motor 5HP", source_type: "URL", source_url: "motors.inc/3ph-5hp", status: "Pending" },
  { id: "4", name: "Heavy Duty Conveyor Belt 20m", source_type: "PDF", source_url: "conveyor_specs.pdf", status: "Pending" },
  { id: "5", name: "Hydraulic Valve V-200", source_type: "URL", source_url: "valves.co/v-200", status: "Pending" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [catalog, setCatalog] = useState<CatalogItem[]>(initialCatalog);
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null);

  // For Manual Validation Tab
  const [goldenRecord, setGoldenRecord] = useState<Record<string, unknown> | null>(null);
  const [speed, setSpeed] = useState<string>("0s");

  const [isEnriching, setIsEnriching] = useState(false);

  const exportToCSV = () => {
    const headers = ["SKU ID", "Product Name", "Source", "Status", "Taxonomy", "Confidence Score"];
    const rows = catalog.map(item => {
      const taxonomy = item.goldenRecord?.taxonomy_unspsc as string || "N/A";
      const conf = item.goldenRecord?.confidence_score as string || "N/A";
      return [item.id, item.name, item.source_type, item.status, taxonomy, conf]
        .map(v => `"${v}"`).join(",");
    });
    
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "omnispec_shopify_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBulkEnrichment = async () => {
    setIsEnriching(true);

    // Process one by one for visual effect
    for (let i = 0; i < catalog.length; i++) {
      // 1. Set status to processing
      setCatalog(prev => prev.map((item, idx) =>
        idx === i ? { ...item, status: "Processing" } : item
      ));

      // Update selected item if it's the one currently being processed
      setSelectedItem(prev => prev?.id === catalog[i].id ? { ...prev, status: "Processing" } : prev);

      try {
        // 2. Call our fast demo API
        const res = await fetch("http://localhost:8000/api/extract/demo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ product_hint: catalog[i].name }),
        });
        const data = await res.json();

        // 3. Set status based on HITL logic
        const confidence = parseFloat(data.golden_record?.confidence_score) || 100;
        const newStatus = confidence < 95 ? "Needs Review" : "Approved";

        const enrichedItem: CatalogItem = {
          ...catalog[i],
          status: newStatus,
          goldenRecord: data.golden_record,
          speed: data.extraction_speed,
        };

        setCatalog(prev => prev.map((item, idx) => idx === i ? enrichedItem : item));

        // Update selected item to show the new data instantly
        setSelectedItem(prev => prev?.id === enrichedItem.id ? enrichedItem : prev);

      } catch (error) {
        console.error(error);
        // Fallback on error
        setCatalog(prev => prev.map((item, idx) =>
          idx === i ? { ...item, status: "Pending" } : item
        ));
      }
    }

    setIsEnriching(false);
  };

  const handleApprove = (id: string) => {
    setCatalog(prev => prev.map(item => 
      item.id === id ? { ...item, status: "Approved" } : item
    ));
    setSelectedItem(prev => prev?.id === id ? { ...prev, status: "Approved" } : prev);
  };

  const handleReject = (id: string) => {
    setCatalog(prev => prev.map(item => 
      item.id === id ? { ...item, status: "Rejected" } : item
    ));
    setSelectedItem(prev => prev?.id === id ? { ...prev, status: "Rejected" } : prev);
  };

  return (
    <main className="relative min-h-screen bg-black overflow-hidden selection:bg-white/20 selection:text-white cursor-none flex">
      <Cursor />

      {/* Background stays everywhere */}
      <div className="fixed inset-0 z-0">
        <AuroraBackground />
      </div>

      {/* App Shell: Left Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* App Shell: Main Content Area */}
      <div className="relative z-10 flex-1 ml-64 p-8 min-h-screen flex flex-col">

        {/* Render Tab Content based on Sidebar selection */}
        {activeTab === "overview" && (
          <DashboardOverview />
        )}

        {activeTab === "catalog" && (
          <div className="w-full h-full flex flex-col">
            <div className="flex justify-between items-end mb-8 border-b border-[#222] pb-6">
              <div>
                <h1 className="text-3xl font-sans font-medium text-white tracking-tight">Catalog Management</h1>
                <p className="text-sm font-sans text-[#888] mt-2">Manage and enrich your raw supplier data into Golden Records.</p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={exportToCSV}
                  className="flex items-center gap-2 border border-[#333] text-white px-6 py-3 rounded-full font-sans font-medium text-sm hover:bg-white/5 transition-colors"
                >
                  <Download className="w-4 h-4 text-[#888]" />
                  Export CSV
                </button>

                <button
                  onClick={handleBulkEnrichment}
                  disabled={isEnriching}
                  className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-sans font-medium text-sm hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isEnriching ? (
                    <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  ) : (
                    <Play className="w-4 h-4 fill-black" />
                  )}
                  Run Bulk Enrichment
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 min-h-0">
              <div className="lg:col-span-7 h-full overflow-hidden">
                <CatalogTable
                  items={catalog}
                  onItemClick={(item) => setSelectedItem(item)}
                  selectedId={selectedItem?.id}
                />
              </div>
              <div className="lg:col-span-5 h-full overflow-hidden">
                <EnrichmentPanel item={selectedItem} onApprove={handleApprove} onReject={handleReject} />
              </div>
            </div>
          </div>
        )}

        {activeTab === "validation" && (
          <div className="w-full h-full flex flex-col">
            <div className="mb-8">
              <h1 className="text-3xl font-sans font-medium text-white tracking-tight">AI Validation Rules (Manual)</h1>
              <p className="text-sm font-sans text-[#888] mt-2">Manually drop a single PDF or URL to validate the pipeline extraction.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
              <div className="lg:col-span-4 h-full flex flex-col">
                <Dropzone onResult={(data) => {
                  setGoldenRecord(data.golden_record);
                  setSpeed(data.extraction_speed);
                }} />
              </div>
              <div className="lg:col-span-8 flex flex-col gap-8 h-full overflow-y-auto custom-scrollbar pr-2">
                <BentoGrid goldenRecord={goldenRecord} speed={speed} />
                
                {goldenRecord && (
                  <div className="w-full min-h-[300px] bg-[#0A0A0A] border border-[#222] rounded-2xl overflow-hidden flex flex-col mb-8">
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
                        <span className="text-blue-400">  &quot;data&quot;</span>: {JSON.stringify(goldenRecord, null, 4).replace(/^{/, '').replace(/}$/, '')}
                        <span className="text-pink-400">{`}`}</span>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
