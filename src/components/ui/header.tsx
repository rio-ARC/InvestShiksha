import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/language-selector";
import { IndianRupee } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <IndianRupee className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">InvestShiksha</h1>
              <p className="text-xs text-muted-foreground">SEBI Financial Education</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-1">
              <Link to="/">
                <Button
                  variant={isActive("/") ? "default" : "ghost"}
                  size="sm"
                >
                  {t('nav.dashboard')}
                </Button>
              </Link>
              <Link to="/learn">
                <Button
                  variant={isActive("/learn") ? "default" : "ghost"}
                  size="sm"
                >
                  {t('nav.learn')}
                </Button>
              </Link>
              <Link to="/virtual-trade">
                <Button
                  variant={isActive("/virtual-trade") ? "default" : "ghost"}
                  size="sm"
                >
                  {t('nav.virtualTrade')}
                </Button>
              </Link>
              <Link to="/achievements">
                <Button
                  variant={isActive("/achievements") ? "default" : "ghost"}
                  size="sm"
                >
                  {t('nav.achievements')}
                </Button>
              </Link>
            </nav>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};