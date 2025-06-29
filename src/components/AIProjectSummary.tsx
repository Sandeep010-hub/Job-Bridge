import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Copy, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AIProjectSummaryProps {
  projectTitle: string;
  projectDescription: string;
  techStack: string[];
  onSummaryGenerated?: (summary: string, skills: string[]) => void;
}

const AIProjectSummary = ({ 
  projectTitle, 
  projectDescription, 
  techStack, 
  onSummaryGenerated 
}: AIProjectSummaryProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [summary, setSummary] = useState('');
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([]);
  const { toast } = useToast();

  const generateSummary = async () => {
    setIsGenerating(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock AI-generated summary
    const mockSummary = `This ${projectTitle.toLowerCase()} demonstrates strong full-stack development capabilities with modern web technologies. The project showcases proficiency in ${techStack.slice(0, 2).join(' and ')}, implementing key features like user authentication, data management, and responsive design. The architecture follows best practices with clean code organization and efficient database design. This project highlights problem-solving skills and the ability to deliver production-ready applications.`;
    
    // Mock suggested skills based on tech stack and description
    const mockSkills = [
      ...techStack,
      'Problem Solving',
      'Full Stack Development',
      'API Design',
      'Database Design',
      'User Experience'
    ].slice(0, 8);
    
    setSummary(mockSummary);
    setSuggestedSkills(mockSkills);
    setIsGenerating(false);
    
    if (onSummaryGenerated) {
      onSummaryGenerated(mockSummary, mockSkills);
    }
    
    toast({
      title: "AI Summary Generated!",
      description: "Your project summary has been created successfully.",
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary);
    toast({
      title: "Copied to clipboard",
      description: "The summary has been copied to your clipboard.",
    });
  };

  return (
    <Card className="border-2 border-dashed border-blue-200 dark:border-blue-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-blue-600" />
          AI Project Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!summary ? (
          <div className="text-center py-6">
            <Sparkles className="h-12 w-12 text-blue-600 mx-auto mb-4 opacity-50" />
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Let our AI analyze your project and generate a compelling summary that highlights your key skills and achievements.
            </p>
            <Button 
              onClick={generateSummary} 
              disabled={isGenerating}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Generating Summary...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate AI Summary
                </>
              )}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Generated Summary</h4>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={copyToClipboard}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-blue-800 dark:text-blue-200 leading-relaxed">{summary}</p>
            </div>
            
            {suggestedSkills.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Suggested Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {suggestedSkills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={generateSummary}
                disabled={isGenerating}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Regenerate
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AIProjectSummary;