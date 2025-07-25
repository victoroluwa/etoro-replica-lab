import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  PieChart 
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Trading",
      description: "Trade anywhere with our award-winning mobile app. Access all features on the go.",
      badge: "Most Popular"
    },
    {
      icon: Users,
      title: "Social Trading",
      description: "Copy successful traders automatically. Learn from millions of investors worldwide.",
      badge: "New"
    },
    {
      icon: TrendingUp,
      title: "7,000+ Instruments",
      description: "Invest in stocks, crypto, ETFs, commodities, and more from global markets.",
      badge: null
    },
    {
      icon: Shield,
      title: "Regulated & Secure",
      description: "Your investments are protected by top-tier security and regulatory compliance.",
      badge: null
    },
    {
      icon: Globe,
      title: "Global Markets",
      description: "Access markets from around the world with real-time data and instant execution.",
      badge: null
    },
    {
      icon: PieChart,
      title: "Portfolio Management",
      description: "Track performance, analyze trends, and optimize your investment strategy.",
      badge: null
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything you need to{" "}
            <span className="text-etoro-green">invest smarter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join millions of users who trust eToro for their investment journey. 
            From beginner-friendly tools to advanced trading features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm"
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                      <feature.icon className="h-12 w-12 text-etoro-green group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    {feature.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-etoro-green transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-card rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-etoro-green">35M+</div>
              <div className="text-muted-foreground">Registered Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-etoro-green">7,000+</div>
              <div className="text-muted-foreground">Trading Instruments</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-etoro-green">140+</div>
              <div className="text-muted-foreground">Countries Supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};