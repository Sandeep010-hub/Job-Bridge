
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Home, Upload, User } from 'lucide-react';

const StudentSidebar = () => {
  const items = [
    {
      title: "My Projects",
      url: "/student/dashboard",
      icon: Home,
    },
    {
      title: "Upload Project",
      url: "/student/upload",
      icon: Upload,
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
                    <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
                    <p className="text-gray-600">Manage and showcase your technical projects</p>
                  </div>
                </div>
                <Link to="/student/upload">
                  <Button className="bg-brand-gradient hover:opacity-90">
                    Upload New Project
                  </Button>
                </Link>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Projects</h3>
                  <p className="text-3xl font-bold text-violet-600">{projects.length}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile Views</h3>
                  <p className="text-3xl font-bold text-blue-600">1,234</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Recruiter Contacts</h3>
                  <p className="text-3xl font-bold text-green-600">8</p>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.length > 0 ? (
                  projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      {...project}
                      showActions={true}
                      onEdit={() => handleEdit(project.id)}
                      onDelete={() => handleDelete(project.id)}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <div className="text-gray-400 mb-4">
                      <Upload className="mx-auto h-12 w-12" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
                    <p className="text-gray-600 mb-4">Start by uploading your first project to showcase your skills</p>
                    <Link to="/student/upload">
                      <Button className="bg-brand-gradient hover:opacity-90">
                        Upload Your First Project
                      </Button>
                    </Link>
                  </div>
                )}
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
