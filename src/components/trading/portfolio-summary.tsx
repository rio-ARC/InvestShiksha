import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, PieChart } from "lucide-react";

interface PortfolioSummaryProps {
  totalValue: number;
  todayChange: number;
  todayChangePercent: number;
  cash: number;
  investments: number;
}

export function PortfolioSummary({
  totalValue,
  todayChange,
  todayChangePercent,
  cash,
  investments
}: PortfolioSummaryProps) {
  const isPositive = todayChange >= 0;
  
  return (
    <Card className="bg-gradient-card backdrop-blur-sm">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <PieChart className="h-5 w-5" />
          Virtual Portfolio
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Value</p>
            <p className="text-2xl font-bold">₹{totalValue.toLocaleString('en-IN')}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1">
              {isPositive ? (
                <TrendingUp className="h-4 w-4 text-secondary" />
              ) : (
                <TrendingDown className="h-4 w-4 text-destructive" />
              )}
              <span className={`font-semibold ${
                isPositive ? 'text-secondary' : 'text-destructive'
              }`}>
                ₹{Math.abs(todayChange).toLocaleString('en-IN')}
              </span>
            </div>
            <Badge variant={isPositive ? "default" : "destructive"} className="text-xs">
              {isPositive ? '+' : ''}{todayChangePercent.toFixed(2)}%
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Cash</p>
              <p className="font-semibold">₹{cash.toLocaleString('en-IN')}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Invested</p>
              <p className="font-semibold">₹{investments.toLocaleString('en-IN')}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}