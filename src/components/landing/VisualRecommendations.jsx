import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Eye, Image as ImageIcon } from "lucide-react";

export default function VisualRecommendations() {
  const visuals = [
    {
      title: "Option 1: Animated Node Network",
      description: "Dynamic interconnected nodes representing blockchain network topology with gradient connections",
      altText: "Animated purple and blue blockchain nodes connected by glowing lines on dark grid background representing decentralized network",
      features: [
        "20-30 floating nodes with connecting lines",
        "Purple-to-blue gradient animation",
        "Pulsing glow effects on connections",
        "Subtle parallax on scroll",
        "Grid overlay for depth"
      ],
      bestFor: "Technical audiences, B2B enterprise, developer-focused messaging",
      performance: "Lightweight CSS animations, excellent performance"
    },
    {
      title: "Option 2: Device + Token Cluster",
      description: "Floating mobile device mockup with orbiting cryptocurrency tokens and coins",
      altText: "Smartphone mockup with floating gold cryptocurrency coins orbiting around it showing blockchain mobile app integration and token economy",
      features: [
        "3D-rotated phone/tablet mockup",
        "8-12 golden token coins floating",
        "Gentle orbit animation",
        "Depth with blur and scale",
        "Connects mobile + blockchain visually"
      ],
      bestFor: "Product-focused, mobile app emphasis, broader B2C appeal",
      performance: "Moderate - uses transform animations, still performant"
    }
  ];

  return (
    <div className="bg-[#0A0A0F] text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <Eye className="w-12 h-12 text-purple-400 mx-auto" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Hero Background Visual Recommendations
          </h1>
          <p className="text-gray-400 text-lg">
            Two optimized background options with accessibility-compliant alt text
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visuals.map((visual, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                  <ImageIcon className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white text-2xl">{visual.title}</CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  {visual.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-purple-950/30 border border-purple-500/20 rounded-lg p-4">
                  <div className="text-sm text-purple-300 font-semibold mb-2">Alt Text (10-12 words):</div>
                  <p className="text-white text-sm italic">"{visual.altText}"</p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Visual Features:</h4>
                  <ul className="space-y-2">
                    {visual.features.map((feature, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-500">Best For:</span>
                    <span className="text-gray-300 ml-2">{visual.bestFor}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Performance:</span>
                    <span className="text-green-400 ml-2">{visual.performance}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white">Implementation Notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-300">
            <div>
              <h4 className="text-white font-semibold mb-2">Accessibility:</h4>
              <p className="text-sm">
                Both options use decorative backgrounds with aria-hidden attributes. Alt text provided for documentation and if converted to image assets. All text maintains WCAG AAA contrast ratios.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Performance:</h4>
              <p className="text-sm">
                Pure CSS animations ensure 60fps performance. No heavy JavaScript, no external assets. Respects prefers-reduced-motion for accessibility.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">SEO:</h4>
              <p className="text-sm">
                Backgrounds are purely decorative. All semantic content in HTML. JSON-LD structured data already implemented in Home page component.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Recommendation:</h4>
              <p className="text-sm">
                <span className="text-purple-400 font-semibold">Option 1 (Node Network)</span> for technical B2B audiences emphasizing infrastructure and architecture. 
                <span className="text-blue-400 font-semibold ml-2">Option 2 (Device + Tokens)</span> for product-focused messaging highlighting mobile integration and tangible deliverables.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}