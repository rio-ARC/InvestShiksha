import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ProgressCardProps {
  title: string;
  progress: number;
  timeSpent: string;
  level: string;
  achievements: number;
  isActive?: boolean;
}

export function ProgressCard({
  title,
  progress,
  timeSpent,
  level,
  achievements,
  isActive = false
}: ProgressCardProps) {
  const { t } = useTranslation();
  return (
    <Card className={`transition-all duration-300 hover:shadow-elevated hover:scale-[1.02] ${
      isActive ? 'ring-2 ring-primary shadow-primary' : ''
    }`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2 text-foreground">{title}</h3>
            <Badge variant={isActive ? "default" : "secondary"} className="mb-3">
              {level}
            </Badge>
          </div>
          <BookOpen className={`h-6 w-6 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
        </div>
        
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>{t('common.progress')}</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{timeSpent}</span>
            </div>
            <div className="flex items-center gap-1 text-accent">
              <Trophy className="h-4 w-4" />
              <span>{achievements} {t('common.achievements')}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}