import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { Search, Filter, Users, Eye, MessageSquare } from 'lucide-react';

const RecruiterDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const skills = ['All', 'React', 'Python', 'JavaScript', 'Java', 'Node.js', 'TypeScript', 'Vue', 'Angular'];
  const locations = ['All', 'Remote', 'New York', 'San Francisco', 'Boston', 'Seattle', 'Austin'];

  const mockStudents = [
    {
      id: 1,
      name: "Sarah Chen",
      university: "MIT",
      location: "Boston, MA",
      skills: ["React", "Node.js", "Python"],
      projects: 5,
      profileViews: 234,
      lastActive: "2 days ago",
      avatar: "SC"
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      university: "Stanford",
      location: "San Francisco, CA",
      skills: ["Python", "TensorFlow", "Machine Learning"],
      projects: 3,
      profileViews: 189,
      lastActive: "1 day ago",
      avatar: "AR"
    },
    {
      id: 3,
      name: "Mike Johnson",
      university: "UC Berkeley",
      location: "Remote",
      skills: ["Vue", "Firebase", "JavaScript"],
      projects: 4,
      profileViews: 156,
      lastActive: "3 hours ago",
      avatar: "MJ"
    }
  ];

  const mockProjects = [
    {
      id: 1,
      title: "E-commerce React App",
      description: "Full-stack e-commerce application with cart functionality, payment integration, and admin dashboard.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web",
      studentName: "Sarah Chen",
      githubUrl: "https://github.com/sarahchen/ecommerce",
      liveUrl: "https://myecommerce.vercel.app"
    },
    {
      id: 2,
      title: "ML Image Classifier",
      description: "Deep learning model for image classification using CNN architecture with 95% accuracy on test data.",
      techStack: ["Python", "TensorFlow", "Flask", "OpenCV"],
      category: "AI/ML",
      studentName: "Alex Rodriguez",
      githubUrl: "https://github.com/alexr/image-classifier"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Recruiter Dashboard</h1>
          <p className="text-gray-600">Discover talented students and their amazing projects</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold text-gray-900">1,234</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Eye className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Profile Views</p>
                  <p className="text-2xl font-bold text-gray-900">5,678</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <MessageSquare className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Messages Sent</p>
                  <p className="text-2xl font-bold text-gray-900">89</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Filter className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Saved Searches</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Find Talent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search students..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedSkill} onValueChange={setSelectedSkill}>
                <SelectTrigger>
                  <SelectValue placeholder="Skills" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {skills.map((skill) => (
                    <SelectItem key={skill} value={skill}>
                      {skill}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button className="bg-blue-600 hover:bg-blue-700">
                Search Talent
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Student Profiles */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Students</h2>
            <div className="space-y-4">
              {mockStudents.map((student) => (
                <Card key={student.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          {student.avatar}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                          <p className="text-sm text-gray-600">{student.university}</p>
                          <p className="text-sm text-gray-500">{student.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Last active: {student.lastActive}</p>
                        <p className="text-sm text-gray-500">{student.profileViews} profile views</p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {student.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{student.projects} projects</p>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          View Profile
                        </Button>
                        <Button size="sm" variant="outline">
                          Message
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Projects */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Projects</h2>
            <div className="space-y-6">
              {mockProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
            <div className="mt-6">
              <Link to="/explore">
                <Button variant="outline" className="w-full">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RecruiterDashboard;