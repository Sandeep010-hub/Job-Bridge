
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Bridge Talent with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
              Opportunity
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Where students showcase their best projects and recruiters discover the next generation of tech talent
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/student/register">
              <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                For Students
              </Button>
            </Link>
            <Link to="/recruiter/register">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600 px-8 py-4 text-lg font-semibold">
                For Recruiters
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose JobBridge?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The modern way to connect talent with opportunity through real project showcases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-violet-200 transition-colors">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Showcase Real Work</h3>
              <p className="text-gray-600">
                Students upload actual projects with live demos, GitHub repos, and detailed documentation
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Discovery</h3>
              <p className="text-gray-600">
                Advanced filtering by tech stack, project type, and skills to find the perfect match
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Direct Connection</h3>
              <p className="text-gray-600">
                Recruiters connect directly with talented students based on actual work and skills
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how JobBridge is transforming careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Chen</h4>
                  <p className="text-sm text-gray-600">CS Student, MIT</p>
                </div>
              </div>
              <p className="text-gray-700">
                "JobBridge helped me land my dream job at a top tech company. My React project got noticed by 5 recruiters!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Mike Rodriguez</h4>
                  <p className="text-sm text-gray-600">Recruiter, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Finally, a platform where I can see real skills. The project showcases tell me everything I need to know."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Alex Thompson</h4>
                  <p className="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "My ML project on JobBridge got me interviews at 3 startups. The platform really showcases technical depth."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bridge Your Future?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students and recruiters already using JobBridge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/student/register">
              <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Start Showcasing
              </Button>
            </Link>
            <Link to="/explore">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-violet-600 px-8 py-4 text-lg font-semibold">
                Explore Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
