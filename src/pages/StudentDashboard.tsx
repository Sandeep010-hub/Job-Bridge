import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import SkillMatcher from '@/components/SkillMatcher';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Home, Upload, User, BarChart3, MessageSquare, Eye, TrendingUp } from 'lucide-react';

const StudentSidebar = () => {
  const items = [
    {
      title: "Dashboard",
      url: "/student/dashboard",
      icon: Home,
    },
    {
      title: "Upload Project",
      url: "/student/upload",
      icon: Upload,
    },
    {
      title: "Analytics",
      url: "/student/analytics",
      icon: BarChart3,
    },
    {
      title: "Messages",
      url: "/student/messages",
      icon: MessageSquare,
    },
    {
      title: "Edit Profile",
      url: "/student/profile",
      icon: User,
    },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Student Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

const StudentDashboard = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "E-commerce React App",
      description: "Full-stack e-commerce application with cart functionality, payment integration, and admin dashboard.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web",
      studentName: "John Doe",
      githubUrl: "https://github.com/johndoe/ecommerce",
      liveUrl: "https://myecommerce.vercel.app"
    },
    {
      id: 2,
      title: "ML Image Classifier",
      description: "Deep learning model for image classification using CNN architecture with 95% accuracy on test data.",
      techStack: ["Python", "TensorFlow", "Flask", "OpenCV"],
      category: "AI",
      studentName: "John Doe",
      githubUrl: "https://github.com/johndoe/image-classifier"
    }
  ]);

  const userSkills = ["React", "Node.js", "Python", "TypeScript", "MongoDB"];

  const stats = [
    {
      title: "Total Projects",
      value: projects.length.toString(),
      icon: Upload,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Profile Views",
      value: "1,234",
      icon: Eye,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Project Views",
      value: "5,678",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Recruiter Contacts",
      value: "8",
      icon: MessageSquare,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  const handleEdit = (projectId: number) => {
    console.log('Edit project:', projectId);
  };

  const handleDelete = (projectId: number) => {
    console.log('Delete project:', projectId);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <StudentSidebar />
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <SidebarTrigger />
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                    <p className="text-gray-600">Manage and showcase your technical projects</p>
                  </div>
                </div>
                <Link to="/student/upload">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Upload New Project
                  </Button>
                </Link>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                          <stat.icon className={`h-6 w-6 ${stat.color}`} />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{stat.title}</h3>
                          <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Projects Section */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>My Projects ({projects.length})</span>
                        <Link to="/student/upload">
                          <Button size="sm" variant="outline">
                            <Upload className="h-4 w-4 mr-2" />
                            Add Project
                          </Button>
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {projects.length > 0 ? (
                        <div className="space-y-6">
                          {projects.map((project) => (
                            <ProjectCard
                              key={project.id}
                              {...project}
                              showActions={true}
                              onEdit={() => handleEdit(project.id)}
                              onDelete={() => handleDelete(project.id)}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <div className="text-gray-400 mb-4">
                            <Upload className="mx-auto h-12 w-12" />
                          </div>
                          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
                          <p className="text-gray-600 mb-4">Start by uploading your first project to showcase your skills</p>
                          <Link to="/student/upload">
                            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                              Upload Your First Project
                            </Button>
                          </Link>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Skill Matcher */}
                  <SkillMatcher userSkills={userSkills} />

                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Link to="/student/upload">
                        <Button className="w-full" variant="outline">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Project
                        </Button>
                      </Link>
                      <Link to="/student/profile">
                        <Button className="w-full" variant="outline">
                          <User className="h-4 w-4 mr-2" />
                          Edit Profile
                        </Button>
                      </Link>
                      <Link to="/explore">
                        <Button className="w-full" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Explore Projects
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Profile viewed by Google recruiter</span>
                          <span className="text-gray-400">2h ago</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">E-commerce project liked</span>
                          <span className="text-gray-400">5h ago</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">New message from recruiter</span>
                          <span className="text-gray-400">1d ago</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
      
      <Footer />
    </div>
  );
};

export default StudentDashboard;