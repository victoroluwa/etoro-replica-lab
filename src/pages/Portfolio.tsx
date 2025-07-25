import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  PieChart, 
  TrendingUp, 
  TrendingDown, 
  DollarSign,
  Target,
  Clock,
  BarChart3,
  Plus,
  Minus
} from "lucide-react";

export const Portfolio = () => {
  const [totalValue] = useState(25750.85);
  const [dayChange] = useState(456.78);
  const [dayChangePercent] = useState(1.81);

  const positions = [
    {
      symbol: "EUR/USD",
      type: "BUY",
      quantity: 10000,
      avgPrice: 1.0823,
      currentPrice: 1.0875,
      value: 10875,
      pnl: 520,
      pnlPercent: 4.8,
      allocation: 42.3
    },
    {
      symbol: "BTC/USD",
      type: "BUY",
      quantity: 0.25,
      avgPrice: 41200,
      currentPrice: 43250,
      value: 10812.50,
      pnl: 512.50,
      pnlPercent: 4.98,
      allocation: 42.0
    },
    {
      symbol: "AAPL",
      type: "BUY",
      quantity: 20,
      avgPrice: 190.50,
      currentPrice: 195.50,
      value: 3910,
      pnl: 100,
      pnlPercent: 2.62,
      allocation: 15.2
    },
    {
      symbol: "GBP/JPY",
      type: "SELL",
      quantity: 5000,
      avgPrice: 189.45,
      currentPrice: 188.92,
      value: -944.60,
      pnl: 26.50,
      pnlPercent: 0.28,
      allocation: 0.5
    }
  ];

  const riskMetrics = [
    { label: "Portfolio Risk", value: "Medium", color: "bg-yellow-500" },
    { label: "Sharpe Ratio", value: "1.45", color: "bg-etoro-green" },
    { label: "Max Drawdown", value: "8.2%", color: "bg-red-500" },
    { label: "Win Rate", value: "67%", color: "bg-etoro-green" }
  ];

  const performanceData = [
    { period: "1D", return: 1.81, benchmark: 0.45 },
    { period: "1W", return: 3.24, benchmark: 1.23 },
    { period: "1M", return: 8.67, benchmark: 2.45 },
    { period: "3M", return: 15.23, benchmark: 6.78 },
    { period: "YTD", return: 24.56, benchmark: 12.34 },
    { period: "1Y", return: 28.90, benchmark: 15.67 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Portfolio</h1>
            <Badge variant="secondary">Real-time</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </Button>
            <Button variant="etoro">
              <Plus className="h-4 w-4 mr-2" />
              Add Position
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-6">
        {/* Portfolio Summary */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Portfolio value</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Change</CardTitle>
              {dayChange >= 0 ? 
                <TrendingUp className="h-4 w-4 text-etoro-green" /> :
                <TrendingDown className="h-4 w-4 text-destructive" />
              }
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${dayChange >= 0 ? 'text-etoro-green' : 'text-destructive'}`}>
                {dayChange >= 0 ? '+' : ''}${dayChange.toFixed(2)}
              </div>
              <p className={`text-xs ${dayChange >= 0 ? 'text-etoro-green' : 'text-destructive'}`}>
                {dayChange >= 0 ? '+' : ''}{dayChangePercent}%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Positions</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{positions.length}</div>
              <p className="text-xs text-muted-foreground">Active trades</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total P&L</CardTitle>
              <TrendingUp className="h-4 w-4 text-etoro-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-etoro-green">
                +${positions.reduce((sum, pos) => sum + pos.pnl, 0).toFixed(2)}
              </div>
              <p className="text-xs text-etoro-green">
                +{(positions.reduce((sum, pos) => sum + pos.pnl, 0) / totalValue * 100).toFixed(2)}%
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="positions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="positions">Positions</TabsTrigger>
            <TabsTrigger value="allocation">Allocation</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="positions">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Current Positions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {positions.map((position, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-etoro-green/10 flex items-center justify-center">
                            <span className="text-xs font-bold text-etoro-green">
                              {position.symbol.substring(0, 3)}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold">{position.symbol}</div>
                          <div className="text-sm text-muted-foreground">
                            {position.type} • {position.quantity.toLocaleString()} @ ${position.avgPrice}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="font-semibold">${Math.abs(position.value).toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Current Value</div>
                      </div>
                      
                      <div className="text-right">
                        <div className={`font-semibold ${position.pnl >= 0 ? 'text-etoro-green' : 'text-destructive'}`}>
                          {position.pnl >= 0 ? '+' : ''}${position.pnl.toFixed(2)}
                        </div>
                        <div className={`text-sm ${position.pnl >= 0 ? 'text-etoro-green' : 'text-destructive'}`}>
                          {position.pnl >= 0 ? '+' : ''}{position.pnlPercent}%
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Button variant="destructive" size="sm">Close</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="allocation">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    Asset Allocation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {positions.map((position, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{position.symbol}</span>
                          <span className="text-sm text-muted-foreground">{position.allocation}%</span>
                        </div>
                        <Progress value={position.allocation} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Allocation by Asset Class</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Forex</span>
                        <span className="text-sm text-muted-foreground">42.8%</span>
                      </div>
                      <Progress value={42.8} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Crypto</span>
                        <span className="text-sm text-muted-foreground">42.0%</span>
                      </div>
                      <Progress value={42.0} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Stocks</span>
                        <span className="text-sm text-muted-foreground">15.2%</span>
                      </div>
                      <Progress value={15.2} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Performance vs Benchmark
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {performanceData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                      <div className="font-medium">{data.period}</div>
                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Portfolio</div>
                          <div className="font-semibold text-etoro-green">+{data.return}%</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Benchmark</div>
                          <div className="font-semibold">+{data.benchmark}%</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Outperformance</div>
                          <div className="font-semibold text-etoro-green">
                            +{(data.return - data.benchmark).toFixed(2)}%
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="risk">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Risk Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {riskMetrics.map((metric, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{metric.label}</span>
                        <Badge variant="secondary" className="font-semibold">
                          {metric.value}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risk Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-etoro-green/10 rounded-lg">
                      <h4 className="font-semibold text-etoro-green mb-2">Portfolio Health</h4>
                      <p className="text-sm text-muted-foreground">
                        Your portfolio shows good diversification across asset classes with moderate risk exposure.
                      </p>
                    </div>
                    <div className="p-4 bg-yellow-500/10 rounded-lg">
                      <h4 className="font-semibold text-yellow-600 mb-2">Recommendations</h4>
                      <p className="text-sm text-muted-foreground">
                        Consider reducing crypto allocation to improve risk-adjusted returns.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};