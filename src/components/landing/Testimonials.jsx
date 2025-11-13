import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Eric Chan",
    role: "GKN Aerospace Transparency Systems",
    content: "From the start of the project, the team was very professional and knowledgeable. ... they produced a brilliant product.",
    outcome: "Delivered on time; competitive pricing.",
    rating: 5,
    avatar: "EC"
  },
  {
    name: "Carl Ledesma",
    role: "AUTOFOTO Express, Inc.",
    content: "All of your people seem possess gentle disposition, which encourages growth...",
    outcome: "Strong business alignment.",
    rating: 5,
    avatar: "CL"
  },
  {
    name: "Mark Lawrence",
    role: "Privity Ventures, Inc.",
    content: "We devised a unique software product ... Quagnitia delivered.",
    outcome: "Built a previously thought impossible solution.",
    rating: 5,
    avatar: "ML"
  }
];

const clients = [
  { name: "GKN Aerospace", abbrev: "GKN" },
  { name: "AUTOFOTO Express", abbrev: "AUTO" },
  { name: "Privity Ventures", abbrev: "PV" }
];

export default function Testimonials({ isDark, theme }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96"
        style={{
          background: `linear-gradient(to bottom, ${theme.accent}10, transparent)`
        }}
      />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif', color: theme.text }}
          >
            Client Success Stories
          </h2>
          <p className="text-lg" style={{ color: theme.muted }}>
            Trusted by innovators worldwide
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group px-6 py-3 rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
              style={{
                backgroundColor: theme.card,
                border: `1px solid ${theme.border}`
              }}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${theme.accent}30, ${theme.accent}15)`
                  }}
                >
                  <span className="text-xs font-bold" style={{ color: theme.accent }}>{client.abbrev}</span>
                </div>
                <span 
                  className="text-sm font-medium transition-colors"
                  style={{ color: theme.muted }}
                >
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <Card 
            className="backdrop-blur-sm overflow-hidden"
            style={{
              backgroundColor: theme.card,
              border: `1px solid ${theme.border}`,
              borderRadius: '16px'
            }}
          >
            <CardContent className="p-8 md:p-12">
              <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <Quote className="w-12 h-12 mb-6" style={{ color: `${theme.accent}50` }} strokeWidth={1.5} />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" style={{ fill: theme.accent, color: theme.accent }} strokeWidth={1.5} />
                  ))}
                </div>

                <blockquote 
                  className="text-xl md:text-2xl leading-relaxed mb-6 font-medium"
                  style={{ color: theme.text }}
                >
                  "{currentTestimonial.content}"
                </blockquote>

                <div 
                  className="rounded-lg px-4 py-3 mb-8"
                  style={{
                    backgroundColor: `${theme.accent}15`,
                    border: `1px solid ${theme.accent}30`
                  }}
                >
                  <div className="text-sm font-semibold mb-1" style={{ color: theme.accent }}>Outcome:</div>
                  <div className="text-sm" style={{ color: theme.text }}>{currentTestimonial.outcome}</div>
                </div>

                <div className="flex items-center gap-4">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      background: `linear-gradient(135deg, ${theme.accent}, #16958A)`
                    }}
                  >
                    {currentTestimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-lg" style={{ color: theme.text }}>{currentTestimonial.name}</div>
                    <div className="text-sm" style={{ color: theme.muted }}>{currentTestimonial.role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              disabled={isAnimating}
              className="backdrop-blur-sm"
              style={{
                border: `1px solid ${theme.border}`,
                backgroundColor: theme.card,
                color: theme.text,
                borderRadius: '8px'
              }}
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: index === currentIndex ? '32px' : '8px',
                    height: '8px',
                    backgroundColor: index === currentIndex ? theme.accent : `${theme.accent}30`
                  }}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              disabled={isAnimating}
              className="backdrop-blur-sm"
              style={{
                border: `1px solid ${theme.border}`,
                backgroundColor: theme.card,
                color: theme.text,
                borderRadius: '8px'
              }}
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}