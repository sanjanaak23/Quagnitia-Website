import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import HeroVariantA from "../components/landing/HeroVariantA";
import HeroVariantB from "../components/landing/HeroVariantB";
import VisualRecommendations from "../components/landing/VisualRecommendations";
import { Eye, Code } from "lucide-react";

export default function HeroComparison() {
  return (
    <div className="bg-[#0A0A0F] min-h-screen">
      <div className="bg-white/5 border-b border-white/10 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Hero Section Variants</h1>
          <p className="text-gray-400">Compare heading options and background visuals for Quagnitia Systems landing page</p>
        </div>
      </div>

      <Tabs defaultValue="variant-a" className="w-full">
        <div className="bg-[#0A0A0F] border-b border-white/10 sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <TabsList className="bg-white/5 border border-white/10 my-4">
              <TabsTrigger value="variant-a" className="data-[state=active]:bg-purple-600">
                <Code className="w-4 h-4 mr-2" />
                Variant A: "Idea to Coin"
              </TabsTrigger>
              <TabsTrigger value="variant-b" className="data-[state=active]:bg-blue-600">
                <Code className="w-4 h-4 mr-2" />
                Variant B: "Build Web3"
              </TabsTrigger>
              <TabsTrigger value="visuals" className="data-[state=active]:bg-green-600">
                <Eye className="w-4 h-4 mr-2" />
                Visual Guide
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="variant-a" className="m-0">
          <div className="relative">
            <div className="absolute top-4 right-4 z-50 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              H1: "From Idea to Coin — Enterprise Blockchain & Mobile Apps"
            </div>
            <HeroVariantA />
          </div>
          <div className="bg-white/5 border-t border-white/10 py-8">
            <div className="container mx-auto px-4 max-w-4xl">
              <h3 className="text-white text-xl font-bold mb-4">Variant A Analysis</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">Strengths:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Clear value proposition: "Idea → Coin"</li>
                    <li>• Appeals to enterprise clients</li>
                    <li>• Journey-focused messaging</li>
                    <li>• Professional, consultative tone</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Best For:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• B2B enterprise clients</li>
                    <li>• Startup founders with concepts</li>
                    <li>• Full-service engagement focus</li>
                    <li>• Consultative sales approach</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="variant-b" className="m-0">
          <div className="relative">
            <div className="absolute top-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
              H1: "Build Web3 Products: Token Launches, DeFi, NFTs & Mobile Games"
            </div>
            <HeroVariantB />
          </div>
          <div className="bg-white/5 border-t border-white/10 py-8">
            <div className="container mx-auto px-4 max-w-4xl">
              <h3 className="text-white text-xl font-bold mb-4">Variant B Analysis</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">Strengths:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Specific service keywords (SEO-friendly)</li>
                    <li>• Product-category focused</li>
                    <li>• Appeals to technical founders</li>
                    <li>• Clear service differentiation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Best For:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Web3-native clients</li>
                    <li>• Specific product needs (DeFi, NFT)</li>
                    <li>• SEO for service categories</li>
                    <li>• Gaming/entertainment sector</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="visuals" className="m-0">
          <VisualRecommendations />
        </TabsContent>
      </Tabs>
    </div>
  );
}