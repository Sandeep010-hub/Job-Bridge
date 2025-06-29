import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Target, TrendingUp, Award } from 'lucide-react';

interface SkillMatch {
  skill: string;
  match: number;
  demand: 'high' | 'medium' | 'low';
  projects: number;
}

interface SkillMatcherProps {
  userSkills: string[];
  targetRole?: string;
}

const SkillMatcher = ({ userSkills, targetRole = "Full Stack Developer" }: SkillMatcherProps) => {
  const [showRecommendations, setShowRecommendations] = useState(false);

  // Mock skill matching data
  const skillMatches: SkillMatch[] = [
    { skill: 'React', match: 95, demand: 'high', projects: 12 },
    { skill: 'Node.js', match: 88, demand: 'high', projects: 8 },
    { skill: 'TypeScript', match: 75, demand: 'high', projects: 6 },
    { skill: 'Python', match: 82, demand: 'medium', projects: 5 },
    { skill: 'AWS', match: 45, demand: 'high', projects: 2 },
    { skill: 'Docker', match: 30, demand: 'medium', projects: 1 }
  ];

  const recommendations = [
    { skill: 'GraphQL', reason: 'High demand for API development', priority: 'high' },
    { skill: 'Kubernetes', reason: 'Complements your Docker knowledge', priority: 'medium' },
    { skill: 'Next.js', reason: 'Popular React framework', priority: 'high' }
  ];

  const overallMatch = Math.round(skillMatches.reduce((acc, skill) => acc + skill.match, 0) / skillMatches.length);

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-blue-600" />
          Skill Match Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Match Score */}
        <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {overallMatch}%
          </div>
          <div className="text-sm text-blue-800 dark:text-blue-200">
            Match for {targetRole}
          </div>
        </div>

        {/* Skill Breakdown */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900 dark:text-white">Skill Breakdown</h4>
          {skillMatches.map((skillMatch, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {skillMatch.skill}
                  </span>
                  <Badge className={getDemandColor(skillMatch.demand)}>
                    {skillMatch.demand} demand
                  </Badge>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {skillMatch.match}%
                </span>
              </div>
              <Progress value={skillMatch.match} className="h-2" />
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Used in {skillMatch.projects} projects
              </div>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <div>
          <Button
            variant="outline"
            onClick={() => setShowRecommendations(!showRecommendations)}
            className="w-full"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            {showRecommendations ? 'Hide' : 'Show'} Skill Recommendations
          </Button>
          
          {showRecommendations && (
            <div className="mt-4 space-y-3">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {rec.skill}
                    </span>
                    <Badge variant={rec.priority === 'high' ? 'default' : 'secondary'}>
                      <Award className="h-3 w-3 mr-1" />
                      {rec.priority} priority
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {rec.reason}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillMatcher;