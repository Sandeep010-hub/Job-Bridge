import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, 
  UserPlus, 
  Upload, 
  Sparkles, 
  Share2, 
  Search, 
  MessageSquare,
  Handshake,
  CheckCircle,
  Users,
  Building
} from 'lucide-react';

const HowItWorks = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [studentStepsRef, studentStepsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [recruiterStepsRef, recruiterStepsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const studentSteps = [
    {
      icon: UserPlus,
      title: "Create Your Account",
      description: "Sign up with your university email and create your professional profile with basic information about your background and interests.",
      details: ["University verification", "Profile setup", "Skill preferences"]
    },
    {
      icon: Upload,
      title: "Upload Your Projects",
      description: "Add your best projects with GitHub repositories, live demos, detailed descriptions, and the technologies you used.",
      details: ["GitHub integration", "Live demo links", "Tech stack tagging", "Project descriptions"]
    },
    {
      icon: Sparkles,
      title: "AI Enhancement",
      description: "Our AI analyzes your projects and generates compelling summaries that highlight your key skills and achievements.",
      details: ["Automated skill extraction", "Project summaries", "Achievement highlighting", "Skill recommendations"]
    },
    {
      icon: Share2,
      title: "Share & Get Discovered",
      description: "Share your professional profile URL and get discovered by recruiters actively looking for your specific skills.",
      details: ["Shareable profile URL", "SEO optimization", "Recruiter visibility", "Analytics tracking"]
    }
  ];

  const recruiterSteps = [
    {
      icon: UserPlus,
      title: "Create Recruiter Account",
      description: "Sign up with your company email and set up your recruiter profile with company information and hiring needs.",
      details: ["Company verification", "Recruiter profile", "Hiring preferences"]
    },
    {
      icon: Search,
      title: "Search & Filter Talent",
      description: "Use advanced search filters to find candidates by tech stack, university, project type, and experience level.",
      details: ["Advanced filtering", "Skill-based search", "University filters", "Project complexity"]
    },
    {
      icon: MessageSquare,
      title: "Connect with Candidates",
      description: "Review project portfolios and connect directly with promising candidates through our messaging system.",
      details: ["Project review", "Direct messaging", "Interview scheduling", "Team collaboration"]
    },
    {
      icon: Handshake,
      title: "Make Great Hires",
      description: "Evaluate candidates based on real work and make informed hiring decisions with comprehensive project insights.",
      details: ["Code quality assessment", "Project complexity analysis", "Skill verification", "Hiring analytics"]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "For Students",
      points: [
        "Showcase real projects, not just grades",
        "Get discovered by top tech companies",
        "Professional portfolio in minutes",
        "AI-powered skill highlighting",
        "Direct recruiter connections"
      ]
    },
    {
      icon: Building,
      title: "For Recruiters",
      points: [
        "See actual code and project quality",
        "Reduce time-to-hire significantly",
        "Access pre-screened candidates",
        "Advanced search and filtering",
        "Team collaboration tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-poppins">
              How JobBridge
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                connects talent
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              A simple, powerful platform that bridges the gap between student talent and recruiting needs through real project showcases
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/student/register">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 text-lg font-semibold group">
                  Start as Student
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/recruiter/register">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-2 hover:bg-green-50 dark:hover:bg-green-950/20">
                  Start as Recruiter
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Journey */}
      <section ref={studentStepsRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={studentStepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20 rounded-full mb-6">
              <Users className="h-8 w-8 text-violet-600 dark:text-violet-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
              For Students: Showcase Your Talent
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Transform your projects into a professional portfolio that gets you noticed
            </p>
          </motion.div>

          <div className="space-y-16">
            {studentSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={studentStepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {index + 1}
                    </div>
                    <step.icon className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/20 dark:to-purple-950/20 rounded-lg p-6 h-64 flex items-center justify-center">
                        <step.icon className="h-24 w-24 text-violet-600 dark:text-violet-400 opacity-50" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiter Journey */}
      <section ref={recruiterStepsRef} className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={recruiterStepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full mb-6">
              <Building className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
              For Recruiters: Discover Real Talent
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find and evaluate candidates based on actual work, not just resumes
            </p>
          </motion.div>

          <div className="space-y-16">
            {recruiterSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={recruiterStepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {index + 1}
                    </div>
                    <step.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-6 h-64 flex items-center justify-center">
                        <step.icon className="h-24 w-24 text-blue-600 dark:text-blue-400 opacity-50" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
              Benefits for Everyone
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              JobBridge creates value for both students and recruiters through our unique approach
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                        index === 0 
                          ? 'bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20' 
                          : 'bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20'
                      }`}>
                        <benefit.icon className={`h-6 w-6 ${
                          index === 0 ? 'text-violet-600 dark:text-violet-400' : 'text-blue-600 dark:text-blue-400'
                        }`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-poppins">
                        {benefit.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {benefit.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              Ready to get started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join the platform that's revolutionizing how students and recruiters connect through real project showcases
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/student/register">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Join as Student
                </Button>
              </Link>
              <Link to="/recruiter/register">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold">
                  Join as Recruiter
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

export default HowItWorks;