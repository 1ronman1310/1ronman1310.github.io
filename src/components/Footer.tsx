import React from 'react';
import { LAB_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-apple-dark text-white py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <h4 className="text-lg font-bold mb-2">{LAB_INFO.name}</h4>
          <p className="text-gray-400 text-sm">{LAB_INFO.university}</p>
          <p className="text-gray-400 text-sm mt-4 max-w-xs">{LAB_INFO.address}</p>
        </div>
        
        <div className="flex flex-col gap-2">
          <h5 className="font-semibold text-sm text-gray-300 uppercase tracking-wider">Contact</h5>
          <a href={`mailto:${LAB_INFO.email}`} className="text-gray-400 hover:text-white text-sm transition-colors">
            {LAB_INFO.email}
          </a>
        </div>

        <div className="flex flex-col gap-2">
           <h5 className="font-semibold text-sm text-gray-300 uppercase tracking-wider">Links</h5>
           <a href="https://github.com" className="text-gray-400 hover:text-white text-sm transition-colors">GitHub</a>
           <a href="https://scholar.google.com" className="text-gray-400 hover:text-white text-sm transition-colors">Google Scholar</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} {LAB_INFO.name}. All rights reserved. Built with React & Tailwind.
      </div>
    </footer>
  );
};

export default Footer;