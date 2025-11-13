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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, Mail } from "lucide-react";

export default function ContactModal({ open, onOpenChange, isDark, theme }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    summary: ""
  });
  const [gdprConsent, setGdprConsent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!gdprConsent) {
      setError("Please accept the privacy policy to continue.");
      return;
    }

    const subject = `New Contact Request - ${formData.budget || "Budget Not Specified"}`;
    const body = `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Budget Range: ${formData.budget || "Not specified"}

Project Summary:
${formData.summary}

GDPR Consent: Yes
Submitted: ${new Date().toLocaleString()}
    `.trim();

    const mailtoLink = `mailto:info@quagnitia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", budget: "", summary: "" });
      setGdprConsent(false);
      setError("");
      onOpenChange(false);
    }, 500);
  };

  const modalTheme = theme || { bg: '#0D1722', text: '#F4F7FA', muted: '#9AA7B2', accent: '#1EB2A6', card: 'rgba(30, 178, 166, 0.05)', border: 'rgba(30, 178, 166, 0.2)' };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-md"
        style={{
          backgroundColor: modalTheme.bg,
          border: `1px solid ${modalTheme.border}`,
          color: modalTheme.text,
          borderRadius: '16px'
        }}
      >
        <DialogHeader>
          <DialogTitle 
            className="text-2xl"
            style={{ 
              background: `linear-gradient(135deg, ${modalTheme.accent}, #16958A)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Schedule a Free Consultation
          </DialogTitle>
          <DialogDescription style={{ color: modalTheme.muted }}>
            Tell us about your project and we'll get back to you within 48 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" style={{ color: modalTheme.text }}>Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
              style={{
                backgroundColor: `${modalTheme.accent}08`,
                border: `1px solid ${modalTheme.border}`,
                color: modalTheme.text,
                borderRadius: '8px'
              }}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" style={{ color: modalTheme.text }}>Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              style={{
                backgroundColor: `${modalTheme.accent}08`,
                border: `1px solid ${modalTheme.border}`,
                color: modalTheme.text,
                borderRadius: '8px'
              }}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" style={{ color: modalTheme.text }}>Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Your company name"
              style={{
                backgroundColor: `${modalTheme.accent}08`,
                border: `1px solid ${modalTheme.border}`,
                color: modalTheme.text,
                borderRadius: '8px'
              }}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget" style={{ color: modalTheme.text }}>Budget Range</Label>
            <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
              <SelectTrigger 
                style={{
                  backgroundColor: `${modalTheme.accent}08`,
                  border: `1px solid ${modalTheme.border}`,
                  color: modalTheme.text,
                  borderRadius: '8px'
                }}
              >
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent style={{ backgroundColor: modalTheme.bg, border: `1px solid ${modalTheme.border}`, color: modalTheme.text }}>
                <SelectItem value="<$10k">Less than $10,000</SelectItem>
                <SelectItem value="$10k-$25k">$10,000 - $25,000</SelectItem>
                <SelectItem value="$25k-$50k">$25,000 - $50,000</SelectItem>
                <SelectItem value="$50k-$100k">$50,000 - $100,000</SelectItem>
                <SelectItem value="$100k+">$100,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="summary" style={{ color: modalTheme.text }}>Project Summary * (140 chars max)</Label>
            <Textarea
              id="summary"
              required
              maxLength={140}
              rows={3}
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              placeholder="Brief description of your project..."
              className="resize-none"
              style={{
                backgroundColor: `${modalTheme.accent}08`,
                border: `1px solid ${modalTheme.border}`,
                color: modalTheme.text,
                borderRadius: '8px'
              }}
            />
            <div className="text-xs text-right" style={{ color: modalTheme.muted }}>
              {formData.summary.length}/140 characters
            </div>
          </div>

          <div className="flex items-start gap-3 pt-2">
            <Checkbox 
              id="gdpr" 
              checked={gdprConsent}
              onCheckedChange={(checked) => {
                setGdprConsent(checked);
                setError("");
              }}
              style={{ borderColor: modalTheme.border }}
            />
            <label htmlFor="gdpr" className="text-sm leading-relaxed cursor-pointer" style={{ color: modalTheme.muted }}>
              I agree to the processing of my personal data in accordance with the privacy policy and GDPR regulations.
            </label>
          </div>

          {error && (
            <div 
              className="p-3 rounded-lg text-sm"
              style={{
                backgroundColor: '#EF444420',
                border: '1px solid #EF444440',
                color: '#EF4444'
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
              color: '#FFFFFF',
              borderRadius: '8px',
              border: 'none'
            }}
          >
            <Mail className="w-5 h-5 mr-2" strokeWidth={1.5} />
            Send via Email
            <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}