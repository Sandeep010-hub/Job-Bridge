import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart, MessageSquare, TrendingUp, Users, Calendar } from 'lucide-react';

interface ProjectAnalyticsProps {
  projectId: number;
  views: number;
  likes: number;
  comments: number;
  recruiterViews: number;
  lastViewed: string;
  trending?: boolean;
}

const ProjectAnalytics = ({
  views,
  likes,
  comments,
  recruiterViews,
  lastViewed,
  trending = false
}: ProjectAnalyticsProps) => {
  const stats = [
    {
      icon: Eye,
      label: 'Total Views',
      value: views.toLocaleString(),
      color: 'text-blue-600'
    },
    {
      icon: Heart,
      label: 'Likes',
      value: likes.toLocaleString(),
      color: 'text-red-500'
    },
    {
      icon: MessageSquare,
      label: 'Comments',
      value: comments.toLocaleString(),
      color: 'text-green-600'
    },
    {
      icon: Users,
      label: 'Recruiter Views',
      value: recruiterViews.toLocaleString(),
      color: 'text-purple-600'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Project Analytics</span>
          {trending && (
            <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300">
              <TrendingUp className="h-3 w-3 mr-1" />
              Trending
            </Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <stat.icon className={`h-5 w-5 mx-auto mb-1 ${stat.color}`} />
              <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Calendar className="h-4 w-4 mr-2" />
          Last viewed: {lastViewed}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectAnalytics;