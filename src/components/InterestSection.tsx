import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, Clock } from "lucide-react";

export const InterestSection = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-etoro-green">Earn up to</span>
                <br />
                <span className="text-etoro-green">4.3%*</span> annual interest
              </h2>
              <p className="text-lg text-muted-foreground">
                Start receiving monthly interest payments straight to your cash balance, with no commitment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/login">
                <Button variant="etoro" size="lg" className="px-8">
                  Join eToro
                </Button>
              </a>
              <Button variant="outline" size="lg" className="px-8">
                Learn More
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              *Credit and other risks apply, please read the Terms and Conditions
            </p>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            <Card className="shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-etoro-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Competitive Rates</h3>
                    <p className="text-muted-foreground">
                      Earn up to 4.3% annual interest on your uninvested cash balance with no minimum amount required.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Shield className="h-8 w-8 text-etoro-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Secure & Protected</h3>
                    <p className="text-muted-foreground">
                      Your funds are protected by top-tier financial institutions and regulatory frameworks.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-8 w-8 text-etoro-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Monthly Payments</h3>
                    <p className="text-muted-foreground">
                      Receive your interest payments directly to your account balance every month, automatically.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};