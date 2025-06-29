import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Search, 
  Filter, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Target,
  CheckCircle,
  Play,
  Star,
  Building,
  Zap
} from 'lucide-react';

const ForRecruiters = () => {
  const features = [
    {
      icon: Search,
      title: "Advanced Search & Filters",
      description: "Find candidates by tech stack, university, project type, and experience level with powerful search tools"
    },
    {
      icon: Target,
      title: "Skill-Based Matching",
      description: "See real implementations of skills through actual projects, not just keywords on a resume"
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Connect directly with candidates through our platform with built-in messaging and scheduling"
    },
    {
      icon: BarChart3,
      title: "Recruitment Analytics",
      description: "Track your recruitment metrics, candidate engagement, and hiring pipeline performance"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share candidate profiles with your team and collaborate on hiring decisions seamlessly"
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Get AI-generated candidate summaries and skill assessments to make faster decisions"
    }
  ];

  const benefits = [
    "Access to 2,500+ verified student profiles",
    "See real projects, not just resumes",
    "Advanced filtering by skills & tech stack",
    "Direct candidate communication",
    "Team collaboration tools",
    "Recruitment analytics dashboard"
  ];

  const companies = [
    { name: "Google" },
    { name: "Microsoft" },
    { name: "Meta" },
    { name: "Apple" },
    { name: "Amazon" },
    { name: "Netflix" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Technical Recruiter",
      company: "Google",
      content: "JobBridge has revolutionized how we discover talent. Seeing actual projects gives us so much more insight than traditional resumes.",
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Head of Engineering Recruitment",
      company: "Meta",
      content: "The quality of candidates on JobBridge is exceptional. We've hired 15 amazing engineers through the platform this year.",
      avatar: "MC"
    }
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
                Discover talent through
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                  real projects
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Skip the resume screening. See what candidates can actually build. 
                Connect with the next generation of tech talent through their work.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/recruiter/register">
                  <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold group">
                    Start Recruiting
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
                      <Search className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">Talent Search</span>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">
                    Live Preview
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">Sarah Chen</h3>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-500 ml-1">4.9</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">MIT • Full Stack Developer</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      <Badge variant="secondary" className="text-xs">React</Badge>
                      <Badge variant="secondary" className="text-xs">Python</Badge>
                      <Badge variant="secondary" className="text-xs">AI/ML</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">5 projects</span>
                      <Button size="sm" className="h-6 text-xs bg-brand-gradient">View Profile</Button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">Alex Rodriguez</h3>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-500 ml-1">4.8</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Stanford • Blockchain Developer</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      <Badge variant="secondary" className="text-xs">Solidity</Badge>
                      <Badge variant="secondary" className="text-xs">Web3</Badge>
                      <Badge variant="secondary" className="text-xs">React</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">3 projects</span>
                      <Button size="sm" className="h-6 text-xs bg-brand-gradient">View Profile</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-gray-600 mb-8">
              Trusted by leading tech companies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {companies.map((company, index) => (
                <div key={company.name} className="flex items-center justify-center">
                  <div className="w-24 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-semibold text-gray-600">
                      {company.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful recruiting tools for modern teams
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to find, evaluate, and hire the best technical talent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="h-full hover:shadow-lg transition-all duration-300 hover-scale group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <feature.icon className="h-6 w-6 text-blue-600" />
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why top companies choose JobBridge
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See the difference when you can evaluate candidates based on real work, not just resumes.
              </p>
              
              <div className="space-y-4">
                {[
                  "Reduce time-to-hire by 60% with pre-screened candidates",
                  "See actual code quality and project complexity",
                  "Access to top university talent nationwide",
                  "Built-in collaboration tools for hiring teams",
                  "Comprehensive analytics and reporting"
                ].map((benefit, index) => (
                  <div key={benefit} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                  <div className="text-sm text-gray-600">Faster hiring</div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Candidate quality</div>
                </Card>
              </div>
              <div className="space-y-6 mt-8">
                <Card className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2.5K+</div>
                  <div className="text-sm text-gray-600">Active candidates</div>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">150+</div>
                  <div className="text-sm text-gray-600">Partner companies</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What recruiters are saying
            </h2>
            <p className="text-xl text-gray-600">
              See how JobBridge is transforming technical recruitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-blue-600">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to find your next hire?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 150+ companies already using JobBridge to discover and hire exceptional technical talent
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/recruiter/register">
              <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/explore">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600 px-8 py-4 text-lg font-semibold">
                Browse Talent
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForRecruiters;