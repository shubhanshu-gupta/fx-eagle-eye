import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, Info } from "lucide-react";

const alerts = [
  {
    type: "info",
    currency: "USD",
    message: "No immediate treasury action required",
    description: "Federal Reserve policy stance remains consistent with expectations",
  },
  {
    type: "warning",
    currency: "BRL, MXN",
    message: "Monitor for further escalation",
    description: "Commodity price volatility may impact LATAM currency positions",
  },
  {
    type: "success",
    currency: "JPY, KRW",
    message: "Positive outlook maintained",
    description: "APAC trade developments support regional currency stability",
  },
];

export const ActionAlerts = () => {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertCircle className="h-5 w-5 text-warning" />;
      case "success":
        return <CheckCircle className="h-5 w-5 text-success" />;
      default:
        return <Info className="h-5 w-5 text-accent" />;
    }
  };

  const getAlertStyle = (type: string) => {
    switch (type) {
      case "warning":
        return "border-l-warning bg-warning/5";
      case "success":
        return "border-l-success bg-success/5";
      default:
        return "border-l-accent bg-accent/5";
    }
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Action / Alert Section</CardTitle>
        <CardDescription>
          Treasury recommendations based on current developments
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert, index) => (
          <Card key={index} className={`border-l-4 ${getAlertStyle(alert.type)}`}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="mt-0.5">{getAlertIcon(alert.type)}</div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="font-mono">
                      {alert.currency}
                    </Badge>
                    <h4 className="font-semibold text-foreground">{alert.message}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{alert.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};
