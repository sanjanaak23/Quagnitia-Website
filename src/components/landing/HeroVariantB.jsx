import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText } from "lucide-react";

export default function HeroVariantB() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Device + Token Cluster Background - Option 2 */}
      <div className="absolute inset-0 bg-[#0A0A0F]">
        {/* Floating device mockups */}
        <div 
          className="absolute right-10 top-1/4 w-64 h-96 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl border border-white/10 backdrop-blur-sm transform rotate-12"
          style={{ 
            transform: `rotate(12deg) translateY(${scrollY * 0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="absolute inset-4 bg-[#0A0A0F]/50 rounded-2xl" />
        </div>
        
        {/* Token cluster - floating coins */}
        <div className="absolute left-10 top-1/3 w-96 h-96">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400/30 to-orange-500/30 border-2 border-yellow-400/50 backdrop-blur-sm flex items-center justify-center"
              style={{
                left: `${(i % 3) * 40}%`,
                top: `${Math.floor(i / 3) * 35}%`,
                animation: `tokenFloat ${4 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300/50 to-orange-400/50" />
            </div>
          ))}
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#0A0A0F] to-blue-900/20" />
      <div 
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-t from-purple-600/20 to-transparent blur-2xl"
        style={{ transform: `translateX(-50%) translateY(${scrollY * -0.1}px)` }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Micro-tagline */}
          <div className="text-sm text-purple-300/80 font-medium tracking-wide">
            Growing Together · Customer · Company · Co-worker · Community
          </div>

          {/* Main heading - Option B */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Build Web3 Products:
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Token Launches, DeFi,
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              NFTs & Mobile Games
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Full-stack blockchain engineering, secure token launches, DAO governance and mobile app integration — <span className="text-purple-400 font-semibold">Pune-based team</span>, <span className="text-blue-400 font-semibold">global delivery</span>.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 px-8 py-6 text-lg group shadow-lg shadow-purple-500/30"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-6 text-lg backdrop-blur-sm"
            >
              <FileText className="w-5 h-5 mr-2" />
              Request Token Quote
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm">Blockchain Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm">Networks Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm">Global Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>

      <style jsx>{`
        @keyframes tokenFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% {
            transform: translateY(-15px) rotate(5deg) scale(1.05);
          }
          66% {
            transform: translateY(10px) rotate(-5deg) scale(0.95);
          }
        }
      `}</style>
    </section>
  );
}