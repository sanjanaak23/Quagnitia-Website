import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Which blockchain networks do you support?",
    answer: "We support Ethereum, Binance Smart Chain, Polygon, Solana, Avalanche, Arbitrum, Optimism, and custom EVM-compatible chains. We can also develop on emerging networks based on your specific requirements."
  },
  {
    question: "Do you provide smart contract audits?",
    answer: "Yes, we conduct comprehensive internal security audits for all smart contracts. We also coordinate with leading third-party audit firms for additional verification on high-value projects to ensure maximum security."
  },
  {
    question: "What is the typical timeline for a project?",
    answer: "An MVP token launch takes 2–6 weeks including smart contract development, testing, and deployment. Full DeFi platforms with complex features require 8–20+ weeks depending on scope, integrations, and audit requirements."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer fixed-price project quotes with milestone-based payments, or flexible monthly retainer models for ongoing development. Pricing depends on project complexity, timeline, blockchain network, and support needs. Contact us for a customized proposal."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Absolutely. We provide comprehensive post-launch support including 24/7 monitoring, performance optimization, security patching, feature upgrades, and emergency response. Support packages can be customized to your specific requirements and SLA needs."
  },
  {
    question: "What about NDAs and intellectual property rights?",
    answer: "Yes, we sign NDAs before any project discussion. Clients retain full intellectual property rights to all deliverables including smart contracts, source code, documentation, and designs. Your IP is protected throughout the engagement."
  }
];

export default function FAQ({ isDark, theme }) {
  return (
    <section id="faq" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'Poppins, sans-serif', color: theme.text }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg" style={{ color: theme.muted }}>
            Get answers to common questions about our services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="rounded-xl px-6 backdrop-blur-sm"
              style={{
                backgroundColor: theme.card,
                border: `1px solid ${theme.border}`
              }}
            >
              <AccordionTrigger 
                className="text-left transition-colors py-6 hover:no-underline"
                style={{ color: theme.text }}
              >
                <span style={{ fontFamily: 'Poppins, sans-serif' }}>{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent 
                className="leading-relaxed pb-6"
                style={{ color: theme.muted }}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}