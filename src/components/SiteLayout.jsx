"use client";
import { Particles } from "./Particles";

export default function SiteLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      {/* Particles Background */}
      <Particles
        className="fixed inset-0 -z-50" 
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 -z-40 bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-neutral-900/10" />
      
      <div className="relative z-10"> 
        {children}
      </div>
    </div>
  );
}