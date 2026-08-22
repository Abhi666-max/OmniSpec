"use client";
import Image from "next/image";

const GithubIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const TwitterIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#222] bg-[#000] pt-24 pb-8 mt-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 relative rounded-full overflow-hidden border border-[#333]">
              <Image src="/logo.jpg" alt="OmniSpec Logo" fill className="object-cover" />
            </div>
            <span className="font-sans font-medium tracking-tight text-white">OmniSpec</span>
          </div>
          <p className="text-[#888] text-sm font-sans mb-8 leading-relaxed">
            Universal Product Intelligence Engine for Industrial Commerce. Designed for absolute precision.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/abhi666-max" className="text-[#888] hover:text-white transition-colors"><GithubIcon className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/in/abhijeet-kangane/" className="text-[#888] hover:text-white transition-colors"><LinkedinIcon className="w-4 h-4" /></a>
            <a href="http://x.com/abhijeet_037" className="text-[#888] hover:text-white transition-colors"><TwitterIcon className="w-4 h-4" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-widest font-sans text-white mb-6">Product</h4>
          <ul className="space-y-4 text-sm font-sans text-[#888]">
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-sans text-white mb-6">Resources</h4>
          <ul className="space-y-4 text-sm font-sans text-[#888]">
            <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-sans text-white mb-6">Company</h4>
          <ul className="space-y-4 text-sm font-sans text-[#888]">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Customers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-8 border-t border-[#111] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#555] text-xs font-sans tracking-wide">
          © 2026 OmniSpec Inc. Designed & Engineered by Abhijeet Kangane.
        </p>
        <div className="flex gap-6 text-xs font-sans text-[#555] tracking-wide">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
