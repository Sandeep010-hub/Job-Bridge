
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { X, ArrowLeft } from 'lucide-react';

const UploadProject = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: [] as string[],
    githubUrl: '',
    liveUrl: '',
    category: ''
  });

  const [currentTech, setCurrentTech] = useState('');

  const categories = [
    'Web Development',
    'Mobile App',
    'AI/Machine Learning',
    'Data Science',
    'DevOps',
    'IoT',
    'Game Development',
    'Blockchain',
    'Desktop Application',
    'Other'
  ];

  const popularTechs = [
    'React', 'Vue', 'Angular', 'Node.js', 'Python', 'JavaScript', 'TypeScript',
    'Java', 'C++', 'Go', 'Rust', 'Swift', 'Kotlin', 'MongoDB', 'PostgreSQL',
    'MySQL', 'Docker', 'Kubernetes', 'AWS', 'Firebase', 'TensorFlow', 'PyTorch'
  ];

  const handleAddTech = (tech: string) => {
    if (tech && !formData.techStack.includes(tech)) {
      setFormData(prev => ({
        ...prev,
        techStack: [...prev.techStack, tech]
      }));
    }
    setCurrentTech('');
  };

  const handleRemoveTech = (techToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      techStack: prev.techStack.filter(tech => tech !== techToRemove)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.category || formData.techStack.length === 0) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Project Uploaded Successfully!",
        description: "Your project has been added to your portfolio",
      });
      navigate('/student/dashboard');
    }, 2000);
  };

  const handleReset = () => {
    setFormData({
      title: '',
      description: '',
      techStack: [],
      githubUrl: '',
      liveUrl: '',
      category: ''
    });
    setCurrentTech('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link 
            to="/student/dashboard" 
            className="inline-flex items-center text-violet-600 hover:text-violet-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Upload New Project</CardTitle>
            <p className="text-gray-600">Showcase your technical skills by sharing your latest project</p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Title */}
              <div>
                <Label htmlFor="title" className="text-sm font-medium text-gray-700">
                  Project Title *
                </Label>
                <Input
                  id="title"
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter your project title"
                  className="mt-1"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                  Project Description *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe your project, its features, and what problems it solves..."
                  rows={4}
                  className="mt-1"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Category *
                </Label>
                <Select 
                  value={formData.category} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select project category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Tech Stack */}
              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Tech Stack * {formData.techStack.length > 0 && `(${formData.techStack.length} selected)`}
                </Label>
                
                <div className="mt-1 space-y-3">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      value={currentTech}
                      onChange={(e) => setCurrentTech(e.target.value)}
                      placeholder="Type a technology..."
                      className="flex-1"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddTech(currentTech);
                        }
                      }}
                    />
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => handleAddTech(currentTech)}
                    >
                      Add
                    </Button>
                  </div>
                  
                  {/* Popular technologies */}
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Popular technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {popularTechs.map((tech) => (
                        <button
                          key={tech}
                          type="button"
                          onClick={() => handleAddTech(tech)}
                          className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                          disabled={formData.techStack.includes(tech)}
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Selected technologies */}
                  {formData.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {formData.techStack.map((tech) => (
                        <Badge key={tech} variant="default" className="flex items-center gap-1">
                          {tech}
                          <button
                            type="button"
                            onClick={() => handleRemoveTech(tech)}
                            className="ml-1 hover:bg-red-100 rounded-full p-0.5"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* GitHub URL */}
              <div>
                <Label htmlFor="githubUrl" className="text-sm font-medium text-gray-700">
                  GitHub Repository URL *
                </Label>
                <Input
                  id="githubUrl"
                  type="url"
                  value={formData.githubUrl}
                  onChange={(e) => setFormData(prev => ({ ...prev, githubUrl: e.target.value }))}
                  placeholder="https://github.com/username/project"
                  className="mt-1"
                  required
                />
              </div>

              {/* Live Demo URL */}
              <div>
                <Label htmlFor="liveUrl" className="text-sm font-medium text-gray-700">
                  Live Demo URL (Optional)
                </Label>
                <Input
                  id="liveUrl"
                  type="url"
                  value={formData.liveUrl}
                  onChange={(e) => setFormData(prev => ({ ...prev, liveUrl: e.target.value }))}
                  placeholder="https://your-project-demo.com"
                  className="mt-1"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  type="submit" 
                  className="bg-brand-gradient hover:opacity-90 flex-1"
                  disabled={isLoading}
                >
                  {isLoading ? 'Uploading...' : 'Upload Project'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleReset}
                  className="flex-1"
                >
                  Reset Form
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default UploadProject;
