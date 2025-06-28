import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [stepsRef, stepsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-950/20 dark:to-purple-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-poppins">
                Showcase your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                  coding brilliance
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Transform your projects into a professional portfolio that gets you noticed by top tech recruiters. 
                Let your code speak for itself.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/student/register">
                  <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 px-8 py-4 text-lg font-semibold group">
                    Build My Portfolio
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold group">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 10 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {benefit}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Code className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">Student Dashboard</span>
                  </div>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    Live Preview
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900 dark:text-white">AI Task Manager</h3>
                      <Badge variant="secondary">React</Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Smart task management with AI prioritization...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">234 views</span>
                      <Button size="sm" className="h-6 text-xs">View Project</Button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900 dark:text-white">E-commerce Platform</h3>
                      <Badge variant="secondary">Vue.js</Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Full-stack e-commerce with payment integration...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">189 views</span>
                      <Button size="sm" className="h-6 text-xs">View Project</Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
              Everything you need to showcase your talent
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Powerful features designed to help students create compelling portfolios that get results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white font-poppins">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={stepsRef} className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
              Get started in 4 simple steps
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From signup to getting discovered by recruiters in just a few minutes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-violet-200 to-purple-200 dark:from-violet-800 dark:to-purple-800 transform -translate-x-1/2" />
                )}
                
                <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg relative z-10">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white font-poppins">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForStudents;