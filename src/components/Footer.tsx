import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 dark:bg-gray-200 dark:text-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 dark:text-gray-900">Ahmad Daloon</h3>
            <p className="text-gray-400 max-w-md mx-auto dark:text-gray-600">
              Full Stack Developer passionate about creating exceptional web experiences
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8 dark:border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0 dark:text-gray-600">
                © {currentYear} Ahmad Daloon. All rights reserved.
              </p>
              
              <div className="flex items-center text-gray-400 dark:text-gray-600">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" />
                <span>and lots of coffee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;