import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Target, Zap } from "lucide-react";

interface AchievementBadgeProps {
  title: string;
  description: string;
  type: 'learning' | 'trading' | 'streak' | 'special';
  earned: boolean;
  progress?: number;
  maxProgress?: number;
}

const achievementIcons = {
  learning: BookOpen,
  trading: TrendingUp,
  streak: Zap,
  special: Award
};

const achievementColors = {
  learning: 'text-primary',
  trading: 'text-secondary',
  streak: 'text-accent',
  special: 'text-purple-500'
};

import { BookOpen, TrendingUp } from "lucide-react";

export function AchievementBadge({
  title,
  description,
  type,
  earned,
  progress = 0,
  maxProgress = 100
}: AchievementBadgeProps) {
  const Icon = achievementIcons[type];
  const iconColor = achievementColors[type];
  
  return (
    <Card className={`transition-all duration-300 hover:scale-105 ${
      earned 
        ? 'bg-gradient-primary shadow-primary border-primary/20' 
        : 'opacity-60 hover:opacity-80'
    }`}>
      <CardContent className="p-4 text-center">
        <div className={`w-12 h-12 mx-auto mb-3 rounded-full ${
          earned ? 'bg-white/20' : 'bg-muted'
        } flex items-center justify-center`}>
          <Icon className={`h-6 w-6 ${earned ? 'text-white' : iconColor}`} />
        </div>
        
        <h4 className={`font-semibold text-sm mb-1 ${
          earned ? 'text-white' : 'text-foreground'
        }`}>
          {title}
        </h4>
        
        <p className={`text-xs mb-3 ${
          earned ? 'text-white/80' : 'text-muted-foreground'
        }`}>
          {description}
        </p>
        
        {!earned && maxProgress && (
          <div className="space-y-1">
            <div className="w-full bg-muted h-1 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${(progress / maxProgress) * 100}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              {progress}/{maxProgress}
            </p>
          </div>
        )}
        
        {earned && (
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            <Star className="h-3 w-3 mr-1" />
            Earned
          </Badge>
        )}
      </CardContent>
    </Card>
  );
}