import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, Shield, Gavel, Palette, Gamepad2, Smartphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Coins,
    title: "Token & Coin Launches (Any Network)",
    description: "Smart contract development, tokenomics, audits, liquidity setup and CEX/DEX listing guidance across EVM & non-EVM chains.",
    anchor: "/services/token-launch"
  },
  {
    icon: Shield,
    title: "DeFi Platform Development",
    description: "AMMs, staking, lending, yield strategies, oracle integration and security-first architecture for production-grade DeFi.",
    anchor: "/services/defi"
  },
  {
    icon: Gavel,
    title: "DAO Architecture & Governance",
    description: "Token governance, multi-sig, voting modules, on-chain proposals and treasury management for decentralized organizations.",
    anchor: "/services/dao"
  },
  {
    icon: Palette,
    title: "NFT Marketplaces & Ecosystems",
    description: "Minting, royalties, storefronts, IP protection and cross-chain bridges for creator & enterprise marketplaces.",
    anchor: "/services/nft"
  },
  {
    icon: Gamepad2,
    title: "Web3 Gaming & Mobile Integration",
    description: "Play-to-earn mechanics, wallet SDKs, in-game assets as NFTs, on-chain item ownership and mobile game integration.",
    anchor: "/services/web3-gaming"
  },
  {
    icon: Smartphone,
    title: "Enterprise Mobile & Web Apps",
    description: "Scalable backend, API design, responsive UI/UX, Web3 wallet integration and post-launch support.",
    anchor: "/services/apps"
  }
];

export default function Services({ isDark, theme }) {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif', color: theme.text }}
          >
            Core Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: theme.muted }}>
            End-to-end blockchain and mobile development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 transition-all duration-300 flex flex-col"
              style={{
                backgroundColor: theme.card,
                border: `1px solid ${theme.border}`,
                borderRadius: '12px'
              }}
            >
              <CardHeader className="space-y-4 flex-1">
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundColor: `${theme.accent}20`,
                    border: `1px solid ${theme.accent}40`
                  }}
                >
                  <service.icon 
                    className="w-8 h-8" 
                    strokeWidth={1.5}
                    style={{ color: theme.accent }}
                  />
                </div>
                <CardTitle 
                  className="text-xl leading-tight"
                  style={{ color: theme.text, fontFamily: 'Poppins, sans-serif' }}
                >
                  {service.title}
                </CardTitle>
                <CardDescription 
                  className="leading-relaxed"
                  style={{ color: theme.muted }}
                >
                  {service.description}
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <Button
                  variant="ghost"
                  className="w-full group/btn"
                  style={{
                    color: theme.accent,
                    borderRadius: '8px'
                  }}
                  onClick={() => window.location.hash = service.anchor}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" strokeWidth={1.5} />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}