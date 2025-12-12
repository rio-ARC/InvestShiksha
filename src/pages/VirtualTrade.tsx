import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PortfolioSummary } from "@/components/trading/portfolio-summary";
import { Header } from "@/components/ui/header";
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Search,
  ShoppingCart,
  Banknote,
  Clock,
  Activity
} from "lucide-react";

const VirtualTrade = () => {
  const [searchSymbol, setSearchSymbol] = useState("");

  const watchlistStocks = [
    { symbol: "RELIANCE", name: "Reliance Industries", price: 2845.50, change: 45.30, changePercent: 1.62 },
    { symbol: "TCS", name: "Tata Consultancy Services", price: 3654.80, change: -28.20, changePercent: -0.76 },
    { symbol: "HDFCBANK", name: "HDFC Bank", price: 1523.40, change: 12.80, changePercent: 0.85 },
    { symbol: "INFY", name: "Infosys", price: 1456.90, change: -15.60, changePercent: -1.06 },
    { symbol: "ICICIBANK", name: "ICICI Bank", price: 945.70, change: 8.30, changePercent: 0.89 },
  ];

  const recentTrades = [
    { symbol: "RELIANCE", type: "BUY", quantity: 10, price: 2800.00, time: "10:30 AM" },
    { symbol: "TCS", type: "SELL", quantity: 5, price: 3680.00, time: "Yesterday" },
    { symbol: "HDFCBANK", type: "BUY", quantity: 15, price: 1510.00, time: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BarChart3 className="h-8 w-8 text-secondary" />
            <h1 className="text-3xl font-bold">Virtual Trading</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practice trading with ₹1,00,000 virtual capital in real market conditions.
            Build your confidence before investing real money.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Portfolio Summary */}
          <div className="lg:col-span-1">
            <PortfolioSummary
              totalValue={102450}
              todayChange={2450}
              todayChangePercent={2.45}
              cash={25000}
              investments={77450}
            />
          </div>

          {/* Trading Interface */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search & Quick Trade */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Quick Trade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <Label htmlFor="symbol">Stock Symbol</Label>
                    <Input
                      id="symbol"
                      placeholder="e.g., RELIANCE, TCS"
                      value={searchSymbol}
                      onChange={(e) => setSearchSymbol(e.target.value)}
                    />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      type="number"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Banknote className="mr-2 h-4 w-4" />
                    Sell
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Watchlist */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Market Watchlist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {watchlistStocks.map((stock, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div>
                        <div className="font-semibold">{stock.symbol}</div>
                        <div className="text-sm text-muted-foreground truncate max-w-[200px]">
                          {stock.name}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">₹{stock.price.toLocaleString('en-IN')}</div>
                        <div className="flex items-center gap-1">
                          {stock.change >= 0 ? (
                            <TrendingUp className="h-3 w-3 text-secondary" />
                          ) : (
                            <TrendingDown className="h-3 w-3 text-destructive" />
                          )}
                          <span className={`text-sm ${
                            stock.change >= 0 ? 'text-secondary' : 'text-destructive'
                          }`}>
                            {stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Trades */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Recent Trades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTrades.map((trade, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <Badge variant={trade.type === 'BUY' ? 'default' : 'secondary'}>
                          {trade.type}
                        </Badge>
                        <div>
                          <div className="font-semibold">{trade.symbol}</div>
                          <div className="text-sm text-muted-foreground">
                            {trade.quantity} shares @ ₹{trade.price.toLocaleString('en-IN')}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {trade.time}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTrade;