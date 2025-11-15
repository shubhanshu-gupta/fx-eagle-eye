import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Settings as SettingsIcon, Key, Save } from "lucide-react";

const Settings = () => {
  const [openaiKey, setOpenaiKey] = useState(localStorage.getItem("openai_key") || "");
  const [serpapiKey, setSerpapiKey] = useState(localStorage.getItem("serpapi_key") || "");
  const { toast } = useToast();

  const handleSave = () => {
    localStorage.setItem("openai_key", openaiKey);
    localStorage.setItem("serpapi_key", serpapiKey);
    toast({
      title: "Settings saved",
      description: "Your API keys have been securely stored.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <SettingsIcon className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          </div>
          <p className="text-muted-foreground">Configure your API keys for the FX News Monitoring system</p>
        </div>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              API Configuration
            </CardTitle>
            <CardDescription>
              Enter your OpenAI and SerpAPI keys to enable automated news monitoring and analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="openai">OpenAI API Key</Label>
              <Input
                id="openai"
                type="password"
                placeholder="sk-..."
                value={openaiKey}
                onChange={(e) => setOpenaiKey(e.target.value)}
                className="font-mono"
              />
              <p className="text-sm text-muted-foreground">
                Used for AI-powered news analysis and summarization
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="serpapi">SerpAPI Key</Label>
              <Input
                id="serpapi"
                type="password"
                placeholder="Your SerpAPI key..."
                value={serpapiKey}
                onChange={(e) => setSerpapiKey(e.target.value)}
                className="font-mono"
              />
              <p className="text-sm text-muted-foreground">
                Used for automated news source monitoring and data collection
              </p>
            </div>

            <Button onClick={handleSave} className="w-full sm:w-auto">
              <Save className="mr-2 h-4 w-4" />
              Save API Keys
            </Button>
          </CardContent>
        </Card>

        <Card className="mt-6 border-warning/50 bg-warning/5">
          <CardHeader>
            <CardTitle className="text-warning">Security Notice</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your API keys are stored locally in your browser and never sent to external servers except 
              when making authorized API calls to OpenAI and SerpAPI services.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
