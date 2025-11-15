import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  AlertTriangle, 
  Globe, 
  Clock,
  RefreshCw,
  ChevronRight
} from "lucide-react";
import { NewsTable } from "@/components/NewsTable";
import { ActionAlerts } from "@/components/ActionAlerts";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const lastUpdated = new Date().toLocaleString();

  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  // Mock data for demonstration
  const executiveSummary = `Global FX markets showed heightened volatility as central bank policy divergence intensified. 
  The Federal Reserve's hawkish stance on interest rates continues to strengthen USD positions, while emerging market 
  currencies in LATAM face pressure from commodity price fluctuations. APAC region currencies remain stable amid 
  regional trade agreements showing positive momentum.`;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">FX News Monitor</h1>
              <p className="text-muted-foreground">Real-time currency market intelligence for treasury operations</p>
            </div>
            <Button onClick={handleRefresh} disabled={isLoading}>
              <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh Data
            </Button>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            Last updated: {lastUpdated}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Active Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3</div>
              <p className="text-xs text-muted-foreground mt-1">Requires monitoring</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Globe className="h-4 w-4 text-accent" />
                Regions Covered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2</div>
              <p className="text-xs text-muted-foreground mt-1">APAC & LATAM</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-warning" />
                Risk Level
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="outline" className="text-warning border-warning">Medium</Badge>
              <p className="text-xs text-muted-foreground mt-2">Monitor closely</p>
            </CardContent>
          </Card>
        </div>

        {/* Executive Summary */}
        <Card className="mb-8 border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Executive Summary
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </CardTitle>
            <CardDescription>Today's key macro developments</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">{executiveSummary}</p>
          </CardContent>
        </Card>

        {/* Action Alerts */}
        <ActionAlerts />

        {/* News Table */}
        <NewsTable />
      </div>
    </div>
  );
};

export default Dashboard;
