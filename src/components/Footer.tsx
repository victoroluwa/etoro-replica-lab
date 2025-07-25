import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube 
} from "lucide-react";

export const Footer = () => {
  const footerSections = [
    {
      title: "Trade & Invest",
      links: [
        "Stocks",
        "ETFs", 
        "Crypto",
        "Commodities",
        "Indices",
        "Copy Trading"
      ]
    },
    {
      title: "Learn",
      links: [
        "Trading Academy",
        "Market Analysis",
        "Economic Calendar",
        "Trading Strategies",
        "Webinars",
        "Tutorials"
      ]
    },
    {
      title: "Company",
      links: [
        "About eToro",
        "Careers",
        "News & Updates",
        "Investor Relations",
        "Corporate Social Responsibility",
        "Contact Us"
      ]
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Customer Service",
        "Trading Fees",
        "Security",
        "Regulations",
        "Status Page"
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-etoro-dark text-white">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-etoro-green">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-etoro-green transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="text-2xl font-bold text-etoro-green">
              eToro
            </div>
            <p className="text-gray-400 text-sm max-w-md text-center md:text-left">
              The world's leading social trading platform, enabling millions to invest and trade with confidence.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-etoro-green hover:bg-gray-800"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <Separator className="bg-gray-700 my-8" />

        {/* Legal Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-etoro-green transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-etoro-green transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-etoro-green transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-etoro-green transition-colors">
              Risk Disclosure
            </a>
          </div>
          <div className="text-center md:text-right">
            <p>© 2024 eToro. All rights reserved.</p>
          </div>
        </div>

        {/* Risk Warning */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong>Risk Warning:</strong> Trading and investing involve risk, including the potential loss of capital. 
            Past performance is not indicative of future results. Please consider your investment objectives and risk tolerance before trading.
          </p>
        </div>
      </div>
    </footer>
  );
};