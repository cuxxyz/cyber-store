"use client";
import { motion } from "framer-motion";
import { Terminal, Shield, Lock, FileText } from "lucide-react";
import Navbar from "../components/navbar";
import StarBackground from "../components/star-background";
import { GlobePulse } from "../components/ui/cobe-globe-pulse";

export default function Home() {
  return (
    <main className="min-h-screen relative text-slate-200">
      <StarBackground />
      <Navbar />
      
      <section id="home" className="relative z-10 pt-32 pb-20 max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-400 tracking-wider">SECURED NETWORK</span>
          </div>
          <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight mb-6">
            <span className="block text-white">ROOT_ACCESS</span>
            <span className="block text-cyan-400 glow-text mt-2">GRANTED.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-lg mb-8 font-mono">
            Platform terpercaya untuk Kebutuhan Script Premium, Nokos, dan Pterodactyl dengan full protect cybersecurity.
          </p>
          <a href="#store" className="inline-flex items-center gap-2 bg-cyan-500 text-black font-bold font-mono px-6 py-3 rounded-md shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            <Terminal className="w-5 h-5" /> Explore Store
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="w-full lg:w-1/2 flex justify-center relative">
          <div className="w-[350px] h-[350px] lg:w-[500px] lg:h-[500px]">
            <GlobePulse />
          </div>
        </motion.div>
      </section>

      <section id="terms" className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-cyan-500">
          <div className="flex items-center gap-4 mb-8">
            <FileText className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl font-bold font-mono text-white">Syarat & Kebijakan Privasi</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
              <Lock className="w-6 h-6 text-cyan-400 mb-4" />
              <h3 className="text-white font-bold mb-2 font-mono">100% Full Protect</h3>
              <p className="text-sm">Data transaksi dienkripsi. Segala bentuk penyalahgunaan script untuk kegiatan ilegal akan ditindak tegas.</p>
            </div>
            <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
              <Shield className="w-6 h-6 text-cyan-400 mb-4" />
              <h3 className="text-white font-bold mb-2 font-mono">Zero-Log Policy</h3>
              <p className="text-sm">Kami menjamin data pribadi (Email, Log, No HP) tidak akan pernah dijual atau didistribusikan.</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="relative z-10 border-t border-gray-900 bg-black/80 py-8 text-center text-gray-500 font-mono text-sm">
        &copy; 2024 CyberStore Network. All rights reserved.
      </footer>
    </main>
  );
}