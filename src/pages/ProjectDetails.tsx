import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectAnalytics from '@/components/ProjectAnalytics';
import RecruiterMessaging from '@/components/RecruiterMessaging';
import { ArrowLeft, Github, ExternalLink, User, Calendar, Heart, Share2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const ProjectDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();

  // Mock project data - in real app, this would be fetched based on ID
  const project = {
    id: 1,
    title: "E-commerce React App",
    description: "This is a comprehensive full-stack e-commerce application built with modern web technologies. The project features a complete shopping cart system, secure payment integration with Stripe, user authentication, and an admin dashboard for inventory management.\n\nKey features include:\n• User registration and authentication\n• Product catalog with search and filtering\n• Shopping cart functionality\n• Secure checkout with Stripe integration\n• Order history and tracking\n• Admin dashboard for product management\n• Responsive design for all devices\n\nThe application follows React best practices, uses modern hooks, and implements proper state management. The backend is built with Node.js and Express, using MongoDB for data persistence.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT", "Tailwind CSS"],
    category: "Web Development",
    studentName: "Sarah Chen",
    studentEmail: "sarah.chen@university.edu",
    studentBio: "Computer Science student at MIT with a passion for full-stack development and user experience design.",
    githubUrl: "https://github.com/sarahchen/ecommerce",
    liveUrl: "https://myecommerce.vercel.app",
    createdAt: "2024-01-15",
    views: 1234,
    likes: 89,
    comments: 12,
    recruiterViews: 45,
    lastViewed: "2 hours ago",
    trending: true,
    aiSummary: "This e-commerce application demonstrates exceptional full-stack development skills with React and Node.js. The project showcases advanced features like payment integration, user authentication, and admin functionality. The clean code architecture and modern development practices highlight strong problem-solving abilities and attention to detail."
  };

  const relatedProjects = [
    {
      id: 2,
      title: "React Task Manager",
      description: "A collaborative task management app with real-time updates...",
      studentName: "Mike Johnson",
      techStack: ["React", "Firebase", "Socket.io"]
    },
    {
      id: 3,
      title: "Vue E-learning Platform",
      description: "Online learning platform with video streaming and quizzes...",
      studentName: "Emma Davis",
      techStack: ["Vue.js", "Node.js", "PostgreSQL"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/explore" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Explore
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(project.createdAt).toLocaleDateString()}
                      </div>
                      <div>{project.views} views</div>
                      <div className="flex items-center">
                        <Heart className="h-4 w-4 mr-1" />
                        {project.likes} likes
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-sm">
                      {project.category}
                    </Badge>
                    {project.trending && (
                      <Badge className="bg-orange-100 text-orange-800">
                        🔥 Trending
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4 mb-6">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        View Code
                      </Button>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  <Button variant="outline" className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* AI Summary */}
                {project.aiSummary && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Project Summary</h3>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800 leading-relaxed">{project.aiSummary}</p>
                    </div>
                  </div>
                )}

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Description</h3>
                  <div className="prose max-w-none">
                    {project.description.split('\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Projects */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedProjects.map((relatedProject) => (
                    <Card key={relatedProject.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2">{relatedProject.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{relatedProject.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {relatedProject.techStack.slice(0, 3).map((tech, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">by {relatedProject.studentName}</span>
                          <Link to={`/project/${relatedProject.id}`}>
                            <Button size="sm" variant="outline">View</Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Student Info */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {project.studentName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{project.studentName}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.studentEmail}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{project.studentBio}</p>
                </div>

                <div className="space-y-3">
                  <Link to={`/profile/${project.studentName.toLowerCase().replace(' ', '-')}`}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      <User className="h-4 w-4 mr-2" />
                      View Full Profile
                    </Button>
                  </Link>
                  
                  {user?.role === 'recruiter' && (
                    <Button variant="outline" className="w-full">
                      Contact Student
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Project Analytics */}
            <ProjectAnalytics
              projectId={project.id}
              views={project.views}
              likes={project.likes}
              comments={project.comments}
              recruiterViews={project.recruiterViews}
              lastViewed={project.lastViewed}
              trending={project.trending}
            />

            {/* Recruiter Messaging */}
            {user?.role === 'recruiter' && (
              <RecruiterMessaging
                studentId="student-1"
                studentName={project.studentName}
              />
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;