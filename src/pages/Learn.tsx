import { ProgressCard } from "@/components/learning/progress-card";
import { Header } from "@/components/ui/header";
import { BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

const Learn = () => {
  const { t } = useTranslation();
  const learningModules = [
    {
      title: t('modules.marketBasics'),
      progress: 85,
      timeSpent: "2h 30m",
      level: t('levels.beginner'),
      achievements: 3,
      isActive: true
    },
    {
      title: t('modules.technicalAnalysis'),
      progress: 45,
      timeSpent: "1h 15m",
      level: t('levels.intermediate'),
      achievements: 1,
      isActive: false
    },
    {
      title: t('modules.portfolioManagement'),
      progress: 20,
      timeSpent: "30m",
      level: t('levels.advanced'),
      achievements: 0,
      isActive: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">{t('dashboard.learningModules')}</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('dashboard.structuredCurriculum')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningModules.map((module, index) => (
            <ProgressCard key={index} {...module} />
          ))}
          
          <ProgressCard
            title={t('modules.mutualFunds')}
            progress={0}
            timeSpent="0m"
            level={t('levels.intermediate')}
            achievements={0}
          />
          <ProgressCard
            title={t('modules.derivatives')}
            progress={0}
            timeSpent="0m"
            level={t('levels.advanced')}
            achievements={0}
          />
          <ProgressCard
            title={t('modules.riskManagement')}
            progress={0}
            timeSpent="0m"
            level={t('levels.advanced')}
            achievements={0}
          />
          <ProgressCard
            title={t('modules.stockAnalysis')}
            progress={0}
            timeSpent="0m"
            level={t('levels.intermediate')}
            achievements={0}
          />
          <ProgressCard
            title={t('modules.tradingPsychology')}
            progress={0}
            timeSpent="0m"
            level={t('levels.advanced')}
            achievements={0}
          />
          <ProgressCard
            title={t('modules.financialPlanning')}
            progress={0}
            timeSpent="0m"
            level={t('levels.beginner')}
            achievements={0}
          />
        </div>
      </div>
    </div>
  );
};

export default Learn;