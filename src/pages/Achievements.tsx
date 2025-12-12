import { AchievementBadge } from "@/components/gamification/achievement-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Header } from "@/components/ui/header";
import { Award, Trophy, Target, Zap, Star } from "lucide-react";

const Achievements = () => {
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
      title: "Market Explorer",
      description: "Explored 5 different stock sectors",
      type: 'special' as const,
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
    },
    {
      title: "Portfolio Builder",
      description: "Create a diversified portfolio with 10+ stocks",
      type: 'trading' as const,
      earned: false,
      progress: 6,
      maxProgress: 10
    },
    {
      title: "Quiz Master",
      description: "Score 90% or higher in 5 quizzes",
      type: 'learning' as const,
      earned: false,
      progress: 2,
      maxProgress: 5
    },
    {
      title: "Risk Manager",
      description: "Complete risk management module",
      type: 'special' as const,
      earned: false,
      progress: 3,
      maxProgress: 8
    }
  ];

  const earnedAchievements = achievements.filter(a => a.earned);
  const totalAchievements = achievements.length;
  const completionRate = Math.round((earnedAchievements.length / totalAchievements) * 100);

  const stats = [
    { icon: Trophy, label: "Total Earned", value: earnedAchievements.length, color: "text-yellow-500" },
    { icon: Target, label: "In Progress", value: achievements.filter(a => !a.earned && a.progress).length, color: "text-blue-500" },
    { icon: Zap, label: "Current Streak", value: "4 days", color: "text-orange-500" },
    { icon: Star, label: "Total Points", value: "2,450", color: "text-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-8 w-8 text-accent" />
            <h1 className="text-3xl font-bold">Your Achievements</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track your progress and celebrate milestones on your financial learning journey.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-muted/50 flex items-center justify-center`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Overall Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Achievement Completion</span>
              <span className="text-sm text-muted-foreground">{earnedAchievements.length}/{totalAchievements}</span>
            </div>
            <Progress value={completionRate} className="mb-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Keep learning to unlock more achievements!</span>
              <span>{completionRate}% Complete</span>
            </div>
          </CardContent>
        </Card>

        {/* Achievements Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6">All Achievements</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <AchievementBadge key={index} {...achievement} />
            ))}
          </div>
        </div>

        {/* Achievement Categories */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Award className="h-5 w-5" />
                Learning Badges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Lessons Completed</span>
                  <Badge variant="secondary">7/10</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Modules Finished</span>
                  <Badge>3</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Quiz Master</span>
                  <Badge variant="outline">2/5</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-secondary">
                <Trophy className="h-5 w-5" />
                Trading Badges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Trades Executed</span>
                  <Badge>15</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Portfolio Value</span>
                  <Badge variant="secondary">₹1.02L</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Profit Days</span>
                  <Badge variant="outline">8/12</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Zap className="h-5 w-5" />
                Streak Badges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Current Streak</span>
                  <Badge>4 days</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Longest Streak</span>
                  <Badge variant="secondary">12 days</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Weekly Goals</span>
                  <Badge variant="outline">3/4</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Achievements;