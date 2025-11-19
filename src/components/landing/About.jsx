import React from "react";
import { Sparkles, Heart, Award, Target } from "lucide-react";

export default function About({ isDark, theme }) {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2"
        style={{ backgroundColor: `${theme.accent}10` }}
      />
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl -translate-y-1/2"
        style={{ backgroundColor: `${theme.accent}08` }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          {/* Left column */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  backgroundColor: `${theme.accent}15`,
                  border: `1px solid ${theme.accent}30`,
                }}
              >
                <Sparkles
                  className="w-4 h-4"
                  strokeWidth={1.5}
                  style={{ color: theme.accent }}
                />
                <span className="text-sm" style={{ color: theme.accent }}>
                  About Quagnitia
                </span>
              </div>
            </div>

            {/* Title */}
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "Poppins, sans-serif", color: theme.text }}
            >
              Quagnitia Systems Pvt. Ltd.
            </h2>

            {/* Description */}
            <div
              className="space-y-4 leading-relaxed text-base"
              style={{ color: theme.muted }}
            >
              <p>
                Our name embodies our mission:{" "}
                <span className="font-semibold" style={{ color: theme.accent }}>
                  Qualis
                </span>{" "}
                (quality) +{" "}
                <span className="font-semibold" style={{ color: theme.accent }}>
                  Agnito
                </span>{" "}
                (knowledge) = Quagnitia. With 24+ years delivering enterprise
                software, we've evolved into a specialized blockchain and mobile
                development powerhouse.
              </p>

              <p>
                Our pivot to Web3 combines deep technical expertise with
                battle-tested engineering practices. We serve{" "}
                <span className="font-semibold" style={{ color: theme.accent }}>
                  global clients
                </span>{" "}
                across DeFi, NFTs, gaming and enterprise applications—building
                secure, scalable systems that drive real-world adoption.
              </p>

              <p>
                Guided by our philosophy{" "}
                <span
                  className="italic font-semibold"
                  style={{ color: theme.accent }}
                >
                  "Growing Together"
                </span>
                , we believe success is shared: when our customers thrive, our
                company, co-workers and community flourish.
              </p>
            </div>

            {/* Values */}
            <div className="flex flex-wrap gap-3 pt-4 justify-center lg:justify-start">
              {["Quality", "Knowledge", "Agility", "Innovation"].map(
                (value, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: `${theme.accent}15`,
                      border: `1px solid ${theme.accent}30`,
                      color: theme.accent,
                    }}
                  >
                    {value}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div
              className="p-8 rounded-2xl backdrop-blur-sm"
              style={{
                background: `linear-gradient(135deg, ${theme.accent}15, ${theme.accent}08)`,
                border: `1px solid ${theme.border}`,
              }}
            >
              <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                <Heart
                  className="w-6 h-6"
                  strokeWidth={1.5}
                  style={{ color: theme.accent }}
                />
                <p
                  className="text-2xl font-bold"
                  style={{
                    color: theme.text,
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Our Philosophy
                </p>
              </div>

              <p
                className="text-2xl font-bold leading-relaxed"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${theme.accent}, ${theme.text})`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Growing Together
              </p>

              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: theme.muted }}
              >
                Customer · Company · Co-worker · Community
              </p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="p-6 rounded-xl backdrop-blur-sm text-center lg:text-left"
                style={{
                  backgroundColor: theme.card,
                  border: `1px solid ${theme.border}`,
                }}
              >
                <Award
                  className="w-8 h-8 mb-3 mx-auto lg:mx-0"
                  strokeWidth={1.5}
                  style={{ color: theme.accent }}
                />
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: theme.text }}
                >
                  24+
                </div>
                <div className="text-sm" style={{ color: theme.muted }}>
                  Years in Software
                </div>
              </div>

              <div
                className="p-6 rounded-xl backdrop-blur-sm text-center lg:text-left"
                style={{
                  backgroundColor: theme.card,
                  border: `1px solid ${theme.border}`,
                }}
              >
                <Target
                  className="w-8 h-8 mb-3 mx-auto lg:mx-0"
                  strokeWidth={1.5}
                  style={{ color: theme.accent }}
                />
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: theme.text }}
                >
                  100%
                </div>
                <div className="text-sm" style={{ color: theme.muted }}>
                  Client Satisfaction
                </div>
              </div>

              <div
                className="p-6 rounded-xl backdrop-blur-sm col-span-2 text-center lg:text-left"
                style={{
                  backgroundColor: theme.card,
                  border: `1px solid ${theme.border}`,
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="text-2xl font-bold mb-1"
                      style={{ color: theme.accent }}
                    >
                      Global
                    </div>
                    <div className="text-sm" style={{ color: theme.muted }}>
                      Worldwide Delivery
                    </div>
                  </div>

                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${theme.accent}30, ${theme.accent}15)`,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${theme.accent}, ${theme.text})`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
