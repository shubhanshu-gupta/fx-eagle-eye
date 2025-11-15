import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExternalLink } from "lucide-react";

const mockNewsData = [
  {
    category: "Central Bank Policy",
    headline: "Federal Reserve signals potential rate pause amid inflation concerns",
    region: "Global",
    currencies: ["USD", "EUR", "GBP"],
    source: "Reuters",
    date: "2024-01-15",
    impact: "Potential strengthening of USD in short term; monitor for policy pivot signals",
  },
  {
    category: "Geopolitical/Trade",
    headline: "APAC trade agreement negotiations show positive momentum",
    region: "APAC",
    currencies: ["CNY", "JPY", "KRW"],
    source: "Bloomberg",
    date: "2024-01-15",
    impact: "Regional currency stability expected; reduced volatility in APAC FX pairs",
  },
  {
    category: "Commodity/Energy Shock",
    headline: "Oil prices surge on Middle East supply concerns",
    region: "Global",
    currencies: ["BRL", "MXN", "CLP"],
    source: "Financial Times",
    date: "2024-01-14",
    impact: "LATAM commodity exporters may see currency appreciation; monitor energy-dependent economies",
  },
];

const categoryColors: Record<string, string> = {
  "Central Bank Policy": "bg-primary/10 text-primary border-primary/20",
  "Geopolitical/Trade": "bg-accent/10 text-accent border-accent/20",
  "Commodity/Energy Shock": "bg-warning/10 text-warning border-warning/20",
  "Regulatory/Structural": "bg-success/10 text-success border-success/20",
};

export const NewsTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Structured News Analysis</CardTitle>
        <CardDescription>
          Material developments with long-term FX implications from credible sources
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Headline / Event</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Currencies</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Impact Statement</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockNewsData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Badge variant="outline" className={categoryColors[item.category]}>
                      {item.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium max-w-xs">
                    {item.headline}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{item.region}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {item.currencies.map((currency) => (
                        <Badge key={currency} variant="outline" className="text-xs">
                          {currency}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <span>{item.source}</span>
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                      <div className="text-xs text-muted-foreground">{item.date}</div>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-md text-sm text-muted-foreground">
                    {item.impact}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
