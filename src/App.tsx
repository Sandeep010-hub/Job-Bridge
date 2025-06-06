
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StudentDashboard from "./pages/StudentDashboard";
import UploadProject from "./pages/UploadProject";
import ExploreProjects from "./pages/ExploreProjects";
import ProjectDetails from "./pages/ProjectDetails";
import StudentLogin from "./pages/StudentLogin";
import StudentRegister from "./pages/StudentRegister";
import RecruiterLogin from "./pages/RecruiterLogin";
import RecruiterRegister from "./pages/RecruiterRegister";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/upload" element={<UploadProject />} />
          <Route path="/explore" element={<ExploreProjects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/register" element={<StudentRegister />} />
          <Route path="/recruiter/login" element={<RecruiterLogin />} />
          <Route path="/recruiter/register" element={<RecruiterRegister />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
