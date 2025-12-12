import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LanguageSelector } from "@/components/ui/language-selector";
import { ProgressCard } from "@/components/learning/progress-card";
import { PortfolioSummary } from "@/components/trading/portfolio-summary";
import { AchievementBadge } from "@/components/gamification/achievement-badge";
import { Header } from "@/components/ui/header";
import {
  BookOpen,
  TrendingUp,
  Users,
  Award,
  Play,
  BarChart3,
  Target,
  Lightbulb,
  IndianRupee,
  Globe
} from "lucide-react";
import heroImage from "@/assets/hero-finance-education.jpg";

const Index = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("dashboard");

  const learningModules = [
    {
      title: "Market Basics",
      progress: 85,
      timeSpent: "2h 30m",
      level: "Beginner",
      achievements: 3,
      isActive: true
    },
    {
      title: "Technical Analysis",
      progress: 45,
      timeSpent: "1h 15m", 
      level: "Intermediate",
      achievements: 1,
      isActive: false
    },
    {
      title: "Portfolio Management",
      progress: 20,
      timeSpent: "30m",
      level: "Advanced",
      achievements: 0,
      isActive: false
    }
  ];

  const achievements = [
    {
      title: "First Steps",
      description: "Completed your first lesson",
      type: 'learning' as const,
      earned: true
    },
    {
      title: "Paper Trader",
      description: "Made your first virtual trade",
      type: 'trading' as const,
      earned: true
    },
    {
      title: "Knowledge Seeker",
      description: "Complete 10 lessons",
      type: 'learning' as const,
      earned: false,
      progress: 7,
      maxProgress: 10
    },
    {
      title: "Consistent Learner",
      description: "7-day learning streak",
      type: 'streak' as const,
      earned: false,
      progress: 4,
      maxProgress: 7
    }
  ];

  const features = [
    {
      icon: Globe,
      title: t('features.multilingual.title'),
      description: t('features.multilingual.description'),
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: t('features.virtualTrading.title'),
      description: t('features.virtualTrading.description'),
      color: "text-secondary"
    },
    {
      icon: Lightbulb,
      title: t('features.aiPersonalization.title'),
      description: t('features.aiPersonalization.description'),
      color: "text-accent"
    },
    {
      icon: Award,
      title: t('features.gamifiedLearning.title'),
      description: t('features.gamifiedLearning.description'),
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-12 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Financial education in India"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero/80" />
        </div>

        <div className="relative container mx-auto px-4 text-center flex-1 flex flex-col justify-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Powered by SEBI
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t('hero.title')}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              अपना वित्तीय भविष्य बनाएं
            </span>
          </h1>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            {t('hero.subtitle')}
          </p>
        </div>

        {/* Prominent Buttons at Bottom Center */}
        <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-4 animate-scale-in">
          <Link to="/learn">
            <Button
              size="lg"
              className="bg-[#333333] text-white font-bold font-['Arial Black'] rounded-[8px] shadow-lg hover:bg-[#555555] transition-colors duration-300"
            >
              Start Learning Free
            </Button>
          </Link>
          <Link to="/virtual-trade">
            <Button
              size="lg"
              className="bg-[#333333] text-white font-bold font-['Arial Black'] rounded-[8px] shadow-lg hover:bg-[#555555] transition-colors duration-300"
            >
              Try Virtual Trading
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('features.title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elevated transition-all duration-300 animate-fade-in border-none bg-gradient-card">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-muted/50 flex items-center justify-center`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      {activeSection === "dashboard" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">{t('dashboard.welcome')}</h2>
              <p className="text-muted-foreground">{t('dashboard.continueJourney')}</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <h3 className="text-lg font-semibold mb-4">{t('dashboard.learningProgress')}</h3>
                <div className="space-y-4">
                  {learningModules.map((module, index) => (
                    <ProgressCard key={index} {...module} />
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <PortfolioSummary
                  totalValue={102450}
                  todayChange={2450}
                  todayChangePercent={2.45}
                  cash={25000}
                  investments={77450}
                />
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      {t('goals.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>{t('goals.completeLesson')}</span>
                        <Badge variant="secondary">75%</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>{t('goals.practiceTrade')}</span>
                        <Badge>{t('goals.done')}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Quiz score &gt; 80%</span>
                        <Badge variant="outline">Pending</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Achievements Section */}
      {activeSection === "achievements" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Your Achievements</h2>
              <p className="text-muted-foreground">Track your progress and celebrate milestones</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <AchievementBadge key={index} {...achievement} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Learning Section */}
      {activeSection === "learn" && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Learning Modules</h2>
              <p className="text-muted-foreground">Structured curriculum from basics to advanced topics</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningModules.map((module, index) => (
                <ProgressCard key={index} {...module} />
              ))}
              
              {/* Additional modules */}
              <ProgressCard
                title="Mutual Funds"
                progress={0}
                timeSpent="0m"
                level="Intermediate"
                achievements={0}
              />
              <ProgressCard
                title="Derivatives"
                progress={0}
                timeSpent="0m"
                level="Advanced"
                achievements={0}
              />
              <ProgressCard
                title="Risk Management"
                progress={0}
                timeSpent="0m"
                level="Advanced"
                achievements={0}
              />
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-navy text-navy-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <IndianRupee className="h-6 w-6" />
                <span className="font-bold text-lg">InvestShiksha</span>
              </div>
              <p className="text-sm text-navy-foreground/80">
                Empowering Indian investors with comprehensive financial education.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Learn</h4>
              <ul className="space-y-2 text-sm text-navy-foreground/80">
                <li>Market Basics</li>
                <li>Technical Analysis</li>
                <li>Portfolio Management</li>
                <li>Risk Assessment</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Practice</h4>
              <ul className="space-y-2 text-sm text-navy-foreground/80">
                <li>Virtual Trading</li>
                <li>Paper Trading</li>
                <li>Market Simulator</li>
                <li>Strategy Testing</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-navy-foreground/80">
                <li>Help Center</li>
                <li>Community Forum</li>
                <li>Video Tutorials</li>
                <li>Expert Guidance</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-navy-foreground/20 mt-8 pt-8 text-center text-sm text-navy-foreground/60">
            <p>© 2024 InvestShiksha - A SEBI Initiative. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;