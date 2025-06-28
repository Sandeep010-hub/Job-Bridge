import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/AuthContext";

// Pages
import Index from "./pages/Index";
import ForStudents from "./pages/ForStudents";
import ForRecruiters from "./pages/ForRecruiters";
import HowItWorks from "./pages/HowItWorks";
import StudentDashboard from "./pages/StudentDashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import UploadProject from "./pages/UploadProject";
import ExploreProjects from "./pages/ExploreProjects";
import ProjectDetails from "./pages/ProjectDetails";
import StudentProfile from "./pages/StudentProfile";
import StudentLogin from "./pages/StudentLogin";
import StudentRegister from "./pages/StudentRegister";
import RecruiterLogin from "./pages/RecruiterLogin";
import RecruiterRegister from "./pages/RecruiterRegister";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="jobbridge-theme">
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/for-students" element={<ForStudents />} />
              <Route path="/for-recruiters" element={<ForRecruiters />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/student/dashboard" element={<StudentDashboard />} />
              <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
              <Route path="/student/upload" element={<UploadProject />} />
              <Route path="/explore" element={<ExploreProjects />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/profile/:username" element={<StudentProfile />} />
              <Route path="/student/login" element={<StudentLogin />} />
              <Route path="/student/register" element={<StudentRegister />} />
              <Route path="/recruiter/login" element={<RecruiterLogin />} />
              <Route path="/recruiter/register" element={<RecruiterRegister />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;