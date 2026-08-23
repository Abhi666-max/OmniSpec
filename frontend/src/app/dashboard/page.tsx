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
import { Play } from "lucide-react";

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

        // 3. Set status to Enriched with Golden Record
        const enrichedItem: CatalogItem = {
          ...catalog[i],
          status: "Enriched",
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 h-[70vh]">
              <div className="lg:col-span-7 h-full">
                <CatalogTable
                  items={catalog}
                  onItemClick={(item) => setSelectedItem(item)}
                  selectedId={selectedItem?.id}
                />
              </div>
              <div className="lg:col-span-5 h-full">
                <EnrichmentPanel item={selectedItem} />
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
              <div className="lg:col-span-8 flex flex-col gap-8 h-full">
                <BentoGrid goldenRecord={goldenRecord} speed={speed} />
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
