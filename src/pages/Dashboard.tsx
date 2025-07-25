import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  Activity,
  Bell,
  Settings,
  User,
  Wallet,
  BarChart3
} from "lucide-react";

export const Dashboard = () => {
  const [balance] = useState(12350.75);
  const [equity] = useState(12580.32);
  const [profit] = useState(229.57);
  const [profitPercent] = useState(1.85);

  const openTrades = [
    { pair: "EUR/USD", type: "BUY", amount: 1000, profit: 45.23, profitPercent: 2.1 },
    { pair: "GBP/JPY", type: "SELL", amount: 1500, profit: -12.45, profitPercent: -0.8 },
    { pair: "USD/CHF", type: "BUY", amount: 800, profit: 67.89, profitPercent: 3.2 },
  ];

  const recentTrades = [
    { pair: "AUD/USD", type: "SELL", amount: 1200, profit: 89.45, date: "2024-01-15", status: "Closed" },
    { pair: "EUR/GBP", type: "BUY", amount: 900, profit: -23.12, date: "2024-01-14", status: "Closed" },
    { pair: "USD/JPY", type: "BUY", amount: 1100, profit: 156.78, date: "2024-01-13", status: "Closed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-etoro-green">eToro</h1>
            <Badge variant="secondary">Dashboard</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
              <span className="ml-2">John Doe</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-6">
        {/* Account Summary */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Account Balance</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${balance.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Available for trading</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Equity</CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${equity.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Current portfolio value</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's P&L</CardTitle>
              {profit >= 0 ? 
                <TrendingUp className="h-4 w-4 text-etoro-green" /> :
                <TrendingDown className="h-4 w-4 text-destructive" />
              }
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${profit >= 0 ? 'text-etoro-green' : 'text-destructive'}`}>
                {profit >= 0 ? '+' : ''}${profit.toFixed(2)}
              </div>
              <p className={`text-xs ${profit >= 0 ? 'text-etoro-green' : 'text-destructive'}`}>
                {profit >= 0 ? '+' : ''}{profitPercent}%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Trades</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{openTrades.length}</div>
              <p className="text-xs text-muted-foreground">Active positions</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="positions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="positions">Open Positions</TabsTrigger>
            <TabsTrigger value="history">Trade History</TabsTrigger>
            <TabsTrigger value="markets">Markets</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="positions">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Open Positions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {openTrades.map((trade, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="font-semibold">{trade.pair}</div>
                          <div className="text-sm text-muted-foreground">
                            {trade.type} • ${trade.amount.toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-semibold ${trade.profit >= 0 ? 'text-etoro-green' : 'text-destructive'}`}>
                          {trade.profit >= 0 ? '+' : ''}${trade.profit.toFixed(2)}
                        </div>
                        <div className={`text-sm ${trade.profit >= 0 ? 'text-etoro-green' : 'text-destructive'}`}>
                          {trade.profit >= 0 ? '+' : ''}{trade.profitPercent}%
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="destructive" size="sm">Close</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Trade History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTrades.map((trade, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="font-semibold">{trade.pair}</div>
                          <div className="text-sm text-muted-foreground">
                            {trade.type} • ${trade.amount.toLocaleString()} • {trade.date}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-semibold ${trade.profit >= 0 ? 'text-etoro-green' : 'text-destructive'}`}>
                          {trade.profit >= 0 ? '+' : ''}${trade.profit.toFixed(2)}
                        </div>
                        <Badge variant={trade.status === 'Closed' ? 'secondary' : 'default'}>
                          {trade.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="markets">
            <Card>
              <CardHeader>
                <CardTitle>Live Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <TrendingUp className="h-12 w-12 text-etoro-green mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Live Market Data</h3>
                  <p className="text-muted-foreground">
                    Real-time market data will be available once backend integration is complete.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis">
            <Card>
              <CardHeader>
                <CardTitle>Market Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-12 w-12 text-etoro-green mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Technical Analysis</h3>
                  <p className="text-muted-foreground">
                    Advanced charting and technical analysis tools coming soon.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};