import { NavLink } from "@/components/NavLink";
import { BarChart3, Settings as SettingsIcon } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-foreground">FX Monitor</span>
            </div>
            
            <div className="hidden sm:flex items-center gap-1">
              <NavLink
                to="/"
                className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                activeClassName="text-foreground bg-secondary"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/settings"
                className="px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors flex items-center gap-2"
                activeClassName="text-foreground bg-secondary"
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
