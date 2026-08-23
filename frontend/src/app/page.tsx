import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import JarvisBackground from "@/components/JarvisBackground";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-hidden selection:bg-white/20 selection:text-white cursor-none">
        <Cursor />
        <JarvisBackground />
        <Header />
        
        {/* Page Content */}
        <div className="relative z-10 flex flex-col items-center w-full min-h-screen justify-center">
          <Hero />
        </div>
        
        <Footer />
      </main>
    </SmoothScroll>
  );
}
