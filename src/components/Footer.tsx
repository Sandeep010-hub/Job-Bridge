
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JB</span>
              </div>
              <span className="text-xl font-bold">JobBridge</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Connecting talented students with innovative recruiters through real project showcases.
              Build your portfolio, discover opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Students</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/student/register" className="text-gray-400 hover:text-white transition-colors">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/student/upload" className="text-gray-400 hover:text-white transition-colors">
                  Upload Project
                </Link>
              </li>
              <li>
                <Link to="/student/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Recruiters</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/recruiter/register" className="text-gray-400 hover:text-white transition-colors">
                  Join Platform
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-gray-400 hover:text-white transition-colors">
                  Discover Talent
                </Link>
              </li>
              <li>
                <Link to="/recruiter/login" className="text-gray-400 hover:text-white transition-colors">
                  Recruiter Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 JobBridge. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
