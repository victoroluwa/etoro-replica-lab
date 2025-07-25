import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import heroPhones from "@/assets/hero-phones.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-etoro-light-gray to-background">
      {/* Main Content */}
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Announcement Badge */}
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
            US users please click here to be directed to the eToro US website.
          </Badge>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Yep, it's{" "}
              <span className="text-etoro-green">all in one app</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Join 35M users worldwide and invest in 7,000+ instruments with advanced trading tools
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
            <a href="/login">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Join eToro
              </Button>
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center lg:justify-start space-x-6 pt-8">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">TrustScore 4.2</span>
            </div>
            <div className="text-sm text-muted-foreground">
              28,030 reviews
            </div>
          </div>

          {/* Awards */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <Badge variant="secondary" className="px-3 py-1">
              Best Trading Platform - Forbes Advisor 2024
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              Best UK Online Broker - Forbes Advisor 2024
            </Badge>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative lg:order-last order-first">
          <div className="relative">
            <img
              src={heroPhones}
              alt="eToro mobile app interface"
              className="w-full h-auto max-w-lg mx-auto object-contain drop-shadow-2xl"
            />
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-etoro-green/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-etoro-green/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
    </section>
  );
};