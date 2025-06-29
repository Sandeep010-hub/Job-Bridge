import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Upload, 
  Sparkles, 
  Share2, 
  TrendingUp, 
  Code, 
  Users, 
  Award,
  CheckCircle,
  Play
} from 'lucide-react';

const ForStudents = () => {
  const features = [
    {
      icon: Upload,
      title: "Easy Project Upload",
      description: "Upload your projects with GitHub repos, live demos, and detailed descriptions in minutes"
    },
    {
      icon: Sparkles,
      title: "AI-Powered Summaries",
      description: "Our AI analyzes your projects and generates compelling summaries that highlight your key skills"
    },
    {
      icon: Share2,
      title: "Shareable Profiles",
      description: "Get a beautiful, professional profile URL to share with recruiters and on your resume"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Track profile views, project engagement, and recruiter interest with detailed analytics"
    },
    {
      icon: Users,
      title: "Direct Recruiter Contact",
      description: "Receive direct messages from recruiters interested in your projects and skills"
    },
    {
      icon: Award,
      title: "Skill Verification",
      description: "Showcase verified skills through real project implementations and code quality"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Sign up with your university email and create your professional profile"
    },
    {
      number: "02",
      title: "Upload Projects",
      description: "Add your best projects with GitHub links, live demos, and detailed descriptions"
    },
    {
      number: "03",
      title: "AI Enhancement",
      description: "Let our AI generate compelling summaries and suggest skill tags for your projects"
    },
    {
      number: "04",
      title: "Share & Get Discovered",
      description: "Share your profile and get discovered by top recruiters looking for your skills"
    }
  ];

  const benefits = [
    "Stand out with real project showcases",
    "Get discovered by top tech companies",
    "Professional portfolio in minutes",
    "AI-powered skill highlighting",
    "Direct recruiter connections",
    "Track your profile performance"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Showcase your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  coding brilliance
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Transform your projects into a professional portfolio that gets you noticed by top tech recruiters. 
                Let your code speak for itself.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/student/register">
                  <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold group">
                    Build My Portfolio
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600 px-8 py-4 text-lg font-semibold group">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={benefit} className="flex items-center text-sm text-white/80">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
                      <Code className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Student Dashboard</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    Live Preview
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">AI Task Manager</h3>
                      <Badge variant="secondary">React</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Smart task management with AI prioritization...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">234 views</span>
                      <Button size="sm" className="h-6 text-xs bg-brand-gradient">View Project</Button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">E-commerce Platform</h3>
                      <Badge variant="secondary">Vue.js</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Full-stack e-commerce with payment integration...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">189 views</span>
                      <Button size="sm" className="h-6 text-xs bg-brand-gradient">View Project</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to showcase your talent
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help students create compelling portfolios that get results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="h-full hover:shadow-lg transition-all duration-300 hover-scale group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-200 transition-colors">
                    <feature.icon className="h-6 w-6 text-violet-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get started in 4 simple steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From signup to getting discovered by recruiters in just a few minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-violet-200 to-purple-200 transform -translate-x-1/2" />
                )}
                
                <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg relative z-10">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to showcase your projects?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students who have already landed their dream jobs through JobBridge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/student/register">
              <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Create Free Portfolio
              </Button>
            </Link>
            <Link to="/explore">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600 px-8 py-4 text-lg font-semibold">
                View Examples
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForStudents;