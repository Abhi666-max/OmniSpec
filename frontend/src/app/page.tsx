import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import AuroraBackground from "@/components/AuroraBackground";
import Hero from "@/components/Hero";
import Dropzone from "@/components/Dropzone";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-hidden selection:bg-white/20 selection:text-white cursor-none">
        <Cursor />
        <AuroraBackground />
        <Header />
        
        {/* Page Content */}
        <div className="relative z-10 flex flex-col items-center w-full">
          <Hero />
          <Dropzone />
          <BentoGrid />
        </div>
        
        <Footer />
      </main>
    </SmoothScroll>
  );
}
