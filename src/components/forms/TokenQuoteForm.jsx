import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Mail, Send } from "lucide-react";

export default function TokenQuoteForm({ open, onOpenChange, isDark, theme }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    chain: "",
    tokenType: "",
    supply: "",
    launchDate: "",
  });
  const [gdprConsent, setGdprConsent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!gdprConsent) {
      setError("Please accept the privacy policy to continue.");
      return;
    }

    const subject = `Token Launch Quote Request - ${formData.chain} ${formData.tokenType}`;
    const body = `
New Token Launch Quote Request

Name: ${formData.name}
Email: ${formData.email}

Project Details:
------------------
Blockchain: ${formData.chain}
Token Type: ${formData.tokenType}
Expected Supply: ${formData.supply}
Desired Launch Date: ${formData.launchDate}

GDPR Consent: Yes
Submitted: ${new Date().toLocaleString()}
    `.trim();

    const mailtoLink = `mailto:info@quagnitia.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        chain: "",
        tokenType: "",
        supply: "",
        launchDate: "",
      });
      setGdprConsent(false);
      setError("");
      onOpenChange(false);
    }, 500);
  };

  const modalTheme = theme || {
    bg: "#0D1722",
    text: "#F4F7FA",
    muted: "#9AA7B2",
    accent: "#1EB2A6",
    card: "rgba(30, 178, 166, 0.05)",
    border: "rgba(30, 178, 166, 0.2)",
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-md"
        style={{
          backgroundColor: modalTheme.bg,
          border: `1px solid ${modalTheme.border}`,
          color: modalTheme.text,
          borderRadius: "16px",
        }}
      >
        <DialogHeader>
          <DialogTitle
            className="text-2xl"
            style={{
              background: `linear-gradient(135deg, ${modalTheme.accent}, ${modalTheme.text})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Request Token Launch Quote
          </DialogTitle>
          <DialogDescription style={{ color: modalTheme.muted }}>
            Provide your token requirements and get a detailed quote within 48
            hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" style={{ color: modalTheme.text }}>
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
                backgroundColor: `${modalTheme.accent}08`,
                border: `1px solid ${modalTheme.border}`,
                color: modalTheme.text,
                borderRadius: "8px",
              }}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" style={{ color: modalTheme.text }}>
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
                backgroundColor: `${modalTheme.accent}08`,
                border: `1px solid ${modalTheme.border}`,
                color: modalTheme.text,
                borderRadius: "8px",
              }}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="chain" style={{ color: modalTheme.text }}>
              Chain Preference *
            </Label>
            <Select
              required
              value={formData.chain}
              onValueChange={(value) =>
                setFormData({ ...formData, chain: value })
              }
            >
              <SelectTrigger
                style={{
                  backgroundColor: `${modalTheme.accent}08`,
                  border: `1px solid ${modalTheme.border}`,
                  color: modalTheme.text,
                  borderRadius: "8px",
                }}
              >
                <SelectValue placeholder="Select blockchain" />
              </SelectTrigger>
              <SelectContent
                style={{
                  backgroundColor: modalTheme.bg,
                  border: `1px solid ${modalTheme.border}`,
                  color: modalTheme.text,
                }}
              >
                <SelectItem value="Ethereum">Ethereum</SelectItem>
                <SelectItem value="Binance Smart Chain">
                  Binance Smart Chain
                </SelectItem>
                <SelectItem value="Polygon">Polygon</SelectItem>
                <SelectItem value="Solana">Solana</SelectItem>
                <SelectItem value="Avalanche">Avalanche</SelectItem>
                <SelectItem value="Arbitrum">Arbitrum</SelectItem>
                <SelectItem value="Optimism">Optimism</SelectItem>
                <SelectItem value="Other/Custom">Other/Custom Chain</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tokenType" style={{ color: modalTheme.text }}>
              Token Type *
            </Label>
            <Select
              required
              value={formData.tokenType}
              onValueChange={(value) =>
                setFormData({ ...formData, tokenType: value })
              }
            >
              <SelectTrigger
                style={{
                  backgroundColor: `${modalTheme.accent}08`,
                  border: `1px solid ${modalTheme.border}`,
                  color: modalTheme.text,
                  borderRadius: "8px",
                }}
              >
                <SelectValue placeholder="Select token standard" />
              </SelectTrigger>
              <SelectContent
                style={{
                  backgroundColor: modalTheme.bg,
                  border: `1px solid ${modalTheme.border}`,
                  color: modalTheme.text,
                }}
              >
                <SelectItem value="ERC-20">ERC-20 (Ethereum)</SelectItem>
                <SelectItem value="BEP-20">BEP-20 (BSC)</SelectItem>
                <SelectItem value="SPL">SPL (Solana)</SelectItem>
                <SelectItem value="FA2">FA2 (Tezos)</SelectItem>
                <SelectItem value="ERC-721">ERC-721 (NFT)</SelectItem>
                <SelectItem value="ERC-1155">ERC-1155 (Multi-token)</SelectItem>
                <SelectItem value="Custom">Custom Implementation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="supply" style={{ color: modalTheme.text }}>
              Expected Supply *
            </Label>
            <Input
              id="supply"
              required
              value={formData.supply}
              onChange={(e) =>
                setFormData({ ...formData, supply: e.target.value })
              }
              placeholder="e.g., 1,000,000 or 1B"
              style={{
                backgroundColor: `${modalTheme.accent}08`,
                border: `1px solid ${modalTheme.border}`,
                color: modalTheme.text,
                borderRadius: "8px",
              }}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="launchDate" style={{ color: modalTheme.text }}>
              Desired Launch Date *
            </Label>
            <Input
              id="launchDate"
              type="date"
              required
              value={formData.launchDate}
              onChange={(e) =>
                setFormData({ ...formData, launchDate: e.target.value })
              }
              style={{
                backgroundColor: `${modalTheme.accent}08`,
                border: `1px solid ${modalTheme.border}`,
                color: modalTheme.text,
                borderRadius: "8px",
              }}
            />
          </div>

          <div className="flex items-start gap-3 pt-2">
            <Checkbox
              id="gdpr-token"
              checked={gdprConsent}
              onCheckedChange={(checked) => {
                setGdprConsent(checked);
                setError("");
              }}
              style={{ borderColor: modalTheme.border }}
            />
            <label
              htmlFor="gdpr-token"
              className="text-sm leading-relaxed cursor-pointer"
              style={{ color: modalTheme.muted }}
            >
              I agree to the processing of my personal data in accordance with
              the privacy policy and GDPR regulations.
            </label>
          </div>

          {error && (
            <div
              className="p-3 rounded-lg text-sm"
              style={{
                backgroundColor: "#EF444420",
                border: "1px solid #EF444440",
                color: "#EF4444",
              }}
            >
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full py-6 group"
            style={{
              backgroundColor: modalTheme.accent,
              color: "#FFFFFF",
              borderRadius: "8px",
              border: "none",
            }}
          >
            <Mail className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Send via Email
            <Send
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
              strokeWidth={1.5}
            />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
