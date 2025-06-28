import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { MapPin, Calendar, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const StudentProfile = () => {
  const { id } = useParams();
  
  // Mock student data - in real app, this would be fetched based on ID
  const student = {
    id: 1,
    name: "Sarah Chen",
    email: "sarah.chen@university.edu",
    university: "Massachusetts Institute of Technology",
    major: "Computer Science",
    graduationYear: "2025",
    location: "Boston, MA",
    bio: "Passionate full-stack developer with experience in React, Node.js, and machine learning. I love building applications that solve real-world problems and have a positive impact on users' lives.",
    skills: ["React", "Node.js", "Python", "TypeScript", "MongoDB", "AWS", "Machine Learning", "Docker"],
    githubUrl: "https://github.com/sarahchen",
    linkedinUrl: "https://linkedin.com/in/sarahchen",
    portfolioUrl: "https://sarahchen.dev",
    joinedDate: "2024-01-15",
    profileViews: 1234,
    projectViews: 5678
  };

  const projects = [
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
      studentName: "Sarah Chen",
      githubUrl: "https://github.com/sarahchen/image-classifier"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      techStack: ["Vue", "Firebase", "Node.js", "Socket.io"],
      category: "Web",
      studentName: "Sarah Chen",
      githubUrl: "https://github.com/sarahchen/taskapp",
      liveUrl: "https://taskmanager-pro.netlify.app"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`} />
                    <AvatarFallback className="text-2xl">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h1 className="text-2xl font-bold text-gray-900">{student.name}</h1>
                  <p className="text-gray-600">{student.major}</p>
                  <p className="text-sm text-gray-500">{student.university}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {student.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Graduating {student.graduationYear}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <Button className="w-full bg-brand-gradient hover:opacity-90">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Student
                  </Button>
                  
                  <div className="flex gap-2">
                    {student.githubUrl && (
                      <a href={student.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </Button>
                      </a>
                    )}
                    {student.linkedinUrl && (
                      <a href={student.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                      </a>
                    )}
                  </div>
                  
                  {student.portfolioUrl && (
                    <a href={student.portfolioUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Portfolio Website
                      </Button>
                    </a>
                  )}
                </div>

                {/* Profile Stats */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Profile Stats</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Profile Views:</span>
                      <span className="font-medium">{student.profileViews.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Project Views:</span>
                      <span className="font-medium">{student.projectViews.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Projects:</span>
                      <span className="font-medium">{projects.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Joined:</span>
                      <span className="font-medium">{new Date(student.joinedDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">{student.bio}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Skills & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {student.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Projects Section */}
            <Card>
              <CardHeader>
                <CardTitle>Projects ({projects.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-6">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default StudentProfile;