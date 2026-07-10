"use client";
import { ShieldAlert, LogIn, UserPlus } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldAlert className="text-cyan-400 w-6 h-6" />
          <span className="font-mono font-bold text-lg text-white tracking-widest">
            CYBER<span className="text-cyan-400 glow-text">STORE</span>
          </span>
        </div>
        <div className="hidden md:flex gap-4">
          <button className="flex items-center gap-2 text-cyan-400 font-mono text-sm border border-cyan-400/50 px-4 py-2 rounded-md">
            <LogIn className="w-4 h-4" /> Login
          </button>
          <button className="flex items-center gap-2 bg-cyan-500 text-black font-bold font-mono text-sm px-4 py-2 rounded-md glow-text">
            <UserPlus className="w-4 h-4" /> Daftar
          </button>
        </div>
      </div>
    </nav>
  );
            }
