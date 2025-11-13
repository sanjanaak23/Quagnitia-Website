import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer({ isDark, theme }) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer 
      className="py-16 px-4"
      style={{
        backgroundColor: isDark ? '#0A0D12' : '#E8EEF3',
        borderTop: `1px solid ${theme.border}`
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 
              className="text-2xl font-bold"
              style={{ 
                background: `linear-gradient(135deg, ${theme.accent}, #16958A)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              Quagnitia Systems
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: theme.muted }}>
              Full-stack blockchain and mobile development company building the future of decentralized innovation.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a 
                  key={i}
                  href={i === 3 ? "mailto:info@quagnitia.com" : "#"} 
                  className="w-10 h-10 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: theme.card,
                    border: `1px solid ${theme.border}`
                  }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: theme.muted }} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: theme.text }}>Services</h4>
            <ul className="space-y-3">
              {['Token Launches', 'DeFi Platforms', 'DAO Architecture', 'NFT Marketplaces', 'Web3 Gaming', 'Mobile & Web Apps'].map((item, i) => (
                <li key={i}>
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ color: theme.muted }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: theme.text }}>Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Our Process', id: 'process' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Contact', id: 'contact' }
              ].map((item, i) => (
                <li key={i}>
                  <button 
                    onClick={() => scrollToSection(item.id)} 
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ color: theme.muted }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: theme.text }}>Resources</h4>
            <ul className="space-y-3">
              {['Blog', 'Case Studies', 'Whitepaper', 'Documentation', 'Privacy Policy', 'Terms of Service'].map((item, i) => (
                <li key={i}>
                  <a 
                    href="#" 
                    className="text-sm hover:opacity-70 transition-opacity"
                    style={{ color: theme.muted }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8" style={{ borderTop: `1px solid ${theme.border}` }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: theme.muted }}>
              © {currentYear} Quagnitia Systems Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-sm italic" style={{ color: theme.muted }}>
              Growing Together · Customer · Company · Co-worker · Community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}