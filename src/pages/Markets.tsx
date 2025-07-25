import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  TrendingUp, 
  TrendingDown, 
  Star,
  Bell,
  BarChart3,
  DollarSign,
  Euro,
  PoundSterling
} from "lucide-react";

export const Markets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const forexPairs = [
    { symbol: "EUR/USD", price: 1.0875, change: 0.0023, changePercent: 0.21, volume: "2.1B" },
    { symbol: "GBP/USD", price: 1.2645, change: -0.0045, changePercent: -0.35, volume: "1.8B" },
    { symbol: "USD/JPY", price: 149.85, change: 0.75, changePercent: 0.50, volume: "1.9B" },
    { symbol: "AUD/USD", price: 0.6723, change: 0.0012, changePercent: 0.18, volume: "1.2B" },
    { symbol: "USD/CHF", price: 0.8945, change: -0.0008, changePercent: -0.09, volume: "950M" },
    { symbol: "NZD/USD", price: 0.6012, change: 0.0034, changePercent: 0.57, volume: "780M" },
  ];

  const cryptoPairs = [
    { symbol: "BTC/USD", price: 43250.50, change: 1250.30, changePercent: 2.98, volume: "890M" },
    { symbol: "ETH/USD", price: 2634.75, change: -45.25, changePercent: -1.69, volume: "560M" },
    { symbol: "ADA/USD", price: 0.4875, change: 0.0125, changePercent: 2.63, volume: "340M" },
    { symbol: "SOL/USD", price: 98.45, change: 3.25, changePercent: 3.41, volume: "280M" },
  ];

  const stocks = [
    { symbol: "AAPL", price: 195.50, change: 2.30, changePercent: 1.19, volume: "45M" },
    { symbol: "TSLA", price: 238.85, change: -5.15, changePercent: -2.11, volume: "38M" },
    { symbol: "GOOGL", price: 142.75, change: 1.85, changePercent: 1.31, volume: "28M" },
    { symbol: "AMZN", price: 155.20, change: -0.80, changePercent: -0.51, volume: "32M" },
  ];

  const filteredForex = forexPairs.filter(pair => 
    pair.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCrypto = cryptoPairs.filter(pair => 
    pair.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredStocks = stocks.filter(stock => 
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const MarketRow = ({ item, showCurrency = false }: { item: any, showCurrency?: boolean }) => (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          {showCurrency ? (
            <div className="w-10 h-10 rounded-full bg-etoro-green/10 flex items-center justify-center">
              {item.symbol.includes('EUR') && <Euro className="h-5 w-5 text-etoro-green" />}
              {item.symbol.includes('GBP') && <PoundSterling className="h-5 w-5 text-etoro-green" />}
              {item.symbol.includes('USD') && <DollarSign className="h-5 w-5 text-etoro-green" />}
              {!item.symbol.includes('EUR') && !item.symbol.includes('GBP') && !item.symbol.includes('USD') && 
                <BarChart3 className="h-5 w-5 text-etoro-green" />}
            </div>
          ) : (
            <div className="w-10 h-10 rounded-full bg-etoro-green/10 flex items-center justify-center">
              <span className="text-xs font-bold text-etoro-green">
                {item.symbol.substring(0, 2)}
              </span>
            </div>
          )}
        </div>
        <div>
          <div className="font-semibold">{item.symbol}</div>
          <div className="text-sm text-muted-foreground">Vol: {item.volume}</div>
        </div>
      </div>
      
      <div className="text-right">
        <div className="font-semibold">${item.price.toLocaleString()}</div>
        <div className={`text-sm flex items-center ${
          item.change >= 0 ? 'text-etoro-green' : 'text-destructive'
        }`}>
          {item.change >= 0 ? (
            <TrendingUp className="h-3 w-3 mr-1" />
          ) : (
            <TrendingDown className="h-3 w-3 mr-1" />
          )}
          {item.change >= 0 ? '+' : ''}{item.changePercent}%
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm">
          <Star className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm">
          <Bell className="h-4 w-4" />
        </Button>
        <Button variant="etoro" size="sm">
          Trade
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Markets</h1>
            <Badge variant="secondary">Live Data</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search markets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container py-6">
        {/* Market Summary */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Major Pairs</CardTitle>
              <TrendingUp className="h-4 w-4 text-etoro-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">+2 trending up</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Crypto</CardTitle>
              <BarChart3 className="h-4 w-4 text-etoro-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">+3 trending up</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Stocks</CardTitle>
              <TrendingUp className="h-4 w-4 text-etoro-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">+2 trending up</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Volume</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5B</div>
              <p className="text-xs text-muted-foreground">24h trading volume</p>
            </CardContent>
          </Card>
        </div>

        {/* Markets Tabs */}
        <Tabs defaultValue="forex" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="forex">Forex</TabsTrigger>
            <TabsTrigger value="crypto">Crypto</TabsTrigger>
            <TabsTrigger value="stocks">Stocks</TabsTrigger>
          </TabsList>

          <TabsContent value="forex">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Euro className="h-5 w-5" />
                  Foreign Exchange
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredForex.map((pair, index) => (
                    <MarketRow key={index} item={pair} showCurrency={true} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="crypto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Cryptocurrencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredCrypto.map((pair, index) => (
                    <MarketRow key={index} item={pair} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stocks">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Top Stocks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredStocks.map((stock, index) => (
                    <MarketRow key={index} item={stock} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Economic Calendar Preview */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Economic Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <BarChart3 className="h-12 w-12 text-etoro-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Economic Events</h3>
              <p className="text-muted-foreground">
                Real-time economic calendar and market-moving events will be available with backend integration.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};