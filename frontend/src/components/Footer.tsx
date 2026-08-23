"use client";
import Image from "next/image";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#0284C7]/20 bg-white/90 backdrop-blur-xl pt-16 pb-8 mt-24 relative z-10 sci-fi-box rounded-none shadow-[0_-10px_30px_rgba(2,132,199,0.05)]">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 relative rounded-sm overflow-hidden border border-[#0284C7]/30 hud-glow shadow-[0_0_15px_rgba(2,132,199,0.1)] bg-[#0284C7]/5">
              <Image src="/logo.jpg" alt="OmniSpec Logo" fill className="object-cover opacity-90 mix-blend-multiply" />
            </div>
            <span className="font-heading font-bold text-lg tracking-widest text-[#0284C7] uppercase hud-glow">[ OmniSpec ]</span>
          </div>
          <p className="text-[#0F172A]/70 text-[10px] uppercase tracking-[0.2em] font-heading mb-8 leading-relaxed font-bold">
            Universal Product Intelligence Engine for Industrial Commerce. Designed for absolute precision.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/abhi666-max" className="text-[#0284C7]/70 hover:text-[#0284C7] hover:hud-glow transition-all"><GithubIcon className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/abhijeet-kangane/" className="text-[#0284C7]/70 hover:text-[#0284C7] hover:hud-glow transition-all"><LinkedinIcon className="w-5 h-5" /></a>
            <a href="http://x.com/abhijeet_037" className="text-[#0284C7]/70 hover:text-[#0284C7] hover:hud-glow transition-all"><TwitterIcon className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/abhijeet.037/" className="text-[#0284C7]/70 hover:text-[#0284C7] hover:hud-glow transition-all"><InstagramIcon className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-heading text-[#EA580C] mb-6 hud-gold-glow">Product</h4>
          <ul className="space-y-4 text-[11px] uppercase tracking-widest font-heading text-[#0284C7]/80 font-bold">
            <li><a href="#" className="hover:text-[#0284C7] hover:hud-glow transition-all">[ Features ]</a></li>
            <li><a href="#" className="hover:text-[#0284C7] hover:hud-glow transition-all">[ Integrations ]</a></li>
            <li><a href="#" className="hover:text-[#0284C7] hover:hud-glow transition-all">[ Pricing ]</a></li>
            <li><a href="#" className="hover:text-[#0284C7] hover:hud-glow transition-all">[ Changelog ]</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-heading text-[#EA580C] mb-6 hud-gold-glow">Resources</h4>
          <ul className="space-y-4 text-[11px] uppercase tracking-widest font-heading text-[#0284C7]/80 font-bold">
            <li><a href="#" className="hover:text-[#0284C7] hover:hud-glow transition-all">[ Documentation ]</a></li>
            <li><a href="#" className="hover:text-[#0284C7] hover:hud-glow transition-all">[ API Reference ]</a></li>
            <li><a href="#" className="hover:text-[#0284C7] hover:hud-glow transition-all">[ Blog ]</a></li>
            <li><a href="#" className="hover:text-[#0284C7] hover:hud-glow transition-all">[ Community ]</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-heading text-[#EA580C] mb-6 hud-gold-glow">Company</h4>
          <ul className="space-y-4 text-[11px] uppercase tracking-widest font-heading text-[#0284C7]/80 font-bold">
            <li><a href="#" className="hover:text-[#0284C7] hover:hud-glow transition-all">[ About ]</a></li>
            <li><a href="#" className="hover:text-[#0284C7] hover:hud-glow transition-all">[ Customers ]</a></li>
            <li><a href="#" className="hover:text-[#0284C7] hover:hud-glow transition-all">[ Careers ]</a></li>
            <li><a href="#" className="hover:text-[#0284C7] hover:hud-glow transition-all">[ Contact ]</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-8 border-t border-[#0284C7]/20 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#0F172A]/60 text-[10px] uppercase tracking-widest font-heading font-bold">
          © 2026 OmniSpec Inc. Designed & Engineered by Abhijeet Kangane.
        </p>
        <div className="flex gap-6 text-[10px] uppercase font-heading text-[#0284C7]/70 tracking-widest font-bold">
          <a href="#" className="hover:text-[#0284C7] hover:hud-glow transition-all">Privacy</a>
          <a href="#" className="hover:text-[#0284C7] hover:hud-glow transition-all">Terms</a>
        </div>
      </div>
    </footer>
  );
}
