import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact({ isDark, theme }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New Contact Form Submission - ${
      formData.service || "General Inquiry"
    }`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Service Interest: ${formData.service || "Not specified"}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:info@quagnitia.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    }, 500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: `${theme.accent}15` }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: `${theme.accent}10` }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "Poppins, sans-serif", color: theme.text }}
              >
                Let's Build Together
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: theme.muted }}
              >
                Ready to transform your blockchain vision into reality? Get in
                touch with our expert team.
              </p>
            </div>

            <div className="space-y-6">
              <div
                className="flex items-start gap-4 p-6 rounded-xl backdrop-blur-sm"
                style={{
                  backgroundColor: theme.card,
                  border: `1px solid ${theme.border}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${theme.accent}20, ${theme.accent}10)`,
                    border: `1px solid ${theme.accent}30`,
                  }}
                >
                  <Mail
                    className="w-6 h-6"
                    strokeWidth={1.5}
                    style={{ color: theme.accent }}
                  />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: theme.text }}
                  >
                    Email Us
                  </h3>
                  <a
                    href="mailto:info@quagnitia.co.in"
                    className="hover:opacity-70 transition-opacity"
                    style={{ color: theme.muted }}
                  >
                    info@quagnitia.co.in
                  </a>
                </div>
              </div>

              <div
                className="flex items-start gap-4 p-6 rounded-xl backdrop-blur-sm"
                style={{
                  backgroundColor: theme.card,
                  border: `1px solid ${theme.border}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${theme.accent}20, ${theme.accent}10)`,
                    border: `1px solid ${theme.accent}30`,
                  }}
                >
                  <MessageSquare
                    className="w-6 h-6"
                    strokeWidth={1.5}
                    style={{ color: theme.accent }}
                  />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: theme.text }}
                  >
                    Response Time
                  </h3>
                  <p style={{ color: theme.muted }}>
                    Within 24 hours on business days
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div
            className="rounded-2xl p-8 backdrop-blur-sm"
            style={{
              backgroundColor: theme.card,
              border: `1px solid ${theme.border}`,
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" style={{ color: theme.text }}>
                  Name *
                </Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your full name"
                  style={{
                    backgroundColor: `${theme.accent}08`,
                    border: `1px solid ${theme.border}`,
                    color: theme.text,
                    borderRadius: "8px",
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" style={{ color: theme.text }}>
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  style={{
                    backgroundColor: `${theme.accent}08`,
                    border: `1px solid ${theme.border}`,
                    color: theme.text,
                    borderRadius: "8px",
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" style={{ color: theme.text }}>
                  Company
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Your company name"
                  style={{
                    backgroundColor: `${theme.accent}08`,
                    border: `1px solid ${theme.border}`,
                    color: theme.text,
                    borderRadius: "8px",
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" style={{ color: theme.text }}>
                  Service Interest
                </Label>
                <Input
                  id="service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  placeholder="e.g., Token Launch, DeFi Platform, NFT Marketplace"
                  style={{
                    backgroundColor: `${theme.accent}08`,
                    border: `1px solid ${theme.border}`,
                    color: theme.text,
                    borderRadius: "8px",
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" style={{ color: theme.text }}>
                  Message *
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your project..."
                  className="resize-none"
                  style={{
                    backgroundColor: `${theme.accent}08`,
                    border: `1px solid ${theme.border}`,
                    color: theme.text,
                    borderRadius: "8px",
                  }}
                />
              </div>

              <Button
                type="submit"
                className="w-full py-6 text-lg group"
                style={{
                  backgroundColor: theme.accent,
                  color: "#FFFFFF",
                  borderRadius: "8px",
                  border: "none",
                }}
              >
                <Mail className="w-5 h-5 mr-2" strokeWidth={1.5} />
                Send Message
                <Send
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  strokeWidth={1.5}
                />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
