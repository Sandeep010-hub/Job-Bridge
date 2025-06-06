
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JB</span>
              </div>
              <span className="text-xl font-bold text-gray-900">JobBridge</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/explore" className="text-gray-600 hover:text-violet-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Explore Projects
              </Link>
              <Link to="/student/dashboard" className="text-gray-600 hover:text-violet-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/student/login">
              <Button variant="outline" size="sm">Student Login</Button>
            </Link>
            <Link to="/recruiter/login">
              <Button variant="outline" size="sm">Recruiter Login</Button>
            </Link>
            <Link to="/student/register">
              <Button size="sm" className="bg-brand-gradient hover:opacity-90">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 bg-white">
              <Link
                to="/explore"
                className="text-gray-600 hover:text-violet-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore Projects
              </Link>
              <Link
                to="/student/dashboard"
                className="text-gray-600 hover:text-violet-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  <Link to="/student/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full">Student Login</Button>
                  </Link>
                  <Link to="/recruiter/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" size="sm" className="w-full">Recruiter Login</Button>
                  </Link>
                  <Link to="/student/register" onClick={() => setIsMenuOpen(false)}>
                    <Button size="sm" className="w-full bg-brand-gradient hover:opacity-90">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
