
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Search } from 'lucide-react';

const ExploreProjects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTech, setSelectedTech] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['All', 'Web', 'Mobile', 'AI/ML', 'Data Science', 'DevOps', 'IoT', 'Game Dev', 'Blockchain'];
  const techStacks = ['All', 'React', 'Python', 'JavaScript', 'Java', 'Node.js', 'TypeScript', 'Vue', 'Angular'];

  const mockProjects = [
    {
      id: 1,
      title: "E-commerce React App",
      description: "Full-stack e-commerce application with cart functionality, payment integration, and admin dashboard. Built with modern React patterns and best practices.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web",
      studentName: "Sarah Chen",
      githubUrl: "https://github.com/sarahchen/ecommerce",
      liveUrl: "https://myecommerce.vercel.app"
    },
    {
      id: 2,
      title: "ML Image Classifier",
      description: "Deep learning model for image classification using CNN architecture with 95% accuracy on test data. Includes data preprocessing and model optimization.",
      techStack: ["Python", "TensorFlow", "Flask", "OpenCV"],
      category: "AI/ML",
      studentName: "Alex Rodriguez",
      githubUrl: "https://github.com/alexr/image-classifier"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and progress tracking.",
      techStack: ["Vue", "Firebase", "Node.js", "Socket.io"],
      category: "Web",
      studentName: "Mike Johnson",
      githubUrl: "https://github.com/mikej/taskapp",
      liveUrl: "https://taskmanager-pro.netlify.app"
    },
    {
      id: 4,
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency price tracking application with portfolio management, alerts, and market analysis tools.",
      techStack: ["React", "TypeScript", "Chart.js", "CoinGecko API"],
      category: "Web",
      studentName: "Emma Davis",
      githubUrl: "https://github.com/emmad/crypto-tracker",
      liveUrl: "https://crypto-track-pro.vercel.app"
    },
    {
      id: 5,
      title: "Weather Prediction Model",
      description: "Machine learning model for weather prediction using historical weather data and advanced forecasting algorithms.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      category: "AI/ML",
      studentName: "David Kim",
      githubUrl: "https://github.com/davidk/weather-ml"
    },
    {
      id: 6,
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile application for fitness tracking with workout plans, progress monitoring, and social features.",
      techStack: ["React Native", "Firebase", "Redux", "Expo"],
      category: "Mobile",
      studentName: "Lisa Wang",
      githubUrl: "https://github.com/lisaw/fitness-tracker"
    }
  ];

  const filteredProjects = mockProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.studentName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || project.category === selectedCategory;
    
    const matchesTech = !selectedTech || selectedTech === 'All' || 
                       project.techStack.some(tech => tech.toLowerCase().includes(selectedTech.toLowerCase()));
    
    return matchesSearch && matchesCategory && matchesTech;
  });

  const projectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const displayedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedTech('');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Student Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing projects built by talented students from around the world
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedTech} onValueChange={setSelectedTech}>
              <SelectTrigger>
                <SelectValue placeholder="Tech Stack" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {techStacks.map((tech) => (
                  <SelectItem key={tech} value={tech}>
                    {tech}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
          
          {/* Active Filters */}
          {(searchQuery || selectedCategory || selectedTech) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {searchQuery && (
                <Badge variant="secondary">
                  Search: {searchQuery}
                </Badge>
              )}
              {selectedCategory && selectedCategory !== 'All' && (
                <Badge variant="secondary">
                  Category: {selectedCategory}
                </Badge>
              )}
              {selectedTech && selectedTech !== 'All' && (
                <Badge variant="secondary">
                  Tech: {selectedTech}
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {displayedProjects.length} of {filteredProjects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="mx-auto h-12 w-12" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search filters to find more projects</p>
              <Button variant="outline" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? "bg-brand-gradient" : ""}
              >
                {page}
              </Button>
            ))}
            
            <Button
              variant="outline"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ExploreProjects;
