import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LAB_INFO } from '../constants';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (target: string, isSection: boolean) => {
    setIsOpen(false);

    if (isSection) {
      const elementId = target.replace('#', '');
      
      if (location.pathname === '/') {
        // We are already on home, just scroll
        scrollToSection(elementId);
      } else {
        // We are on another page, go home first then scroll
        navigate('/');
        // Use a small timeout to allow the Home component to mount
        setTimeout(() => {
          scrollToSection(elementId);
        }, 100);
      }
    } else {
      // It's a route path (e.g., '/news')
      navigate(target);
      window.scrollTo(0, 0);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Account for fixed header height approx 64px
      const headerOffset = 64; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', target: '#home', type: 'section' },
    { name: 'News', target: '/news', type: 'page' },
    { name: 'Research', target: '#research', type: 'section' },
    { name: 'Publications', target: '/publications', type: 'page' },
    { name: 'Team', target: '#team', type: 'section' },
    { name: 'Contact', target: '#contact', type: 'section' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen || location.pathname !== '/' ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => handleNavigation('#home', true)}
              className={`text-xl font-semibold tracking-tight transition-colors ${
                !scrolled && !isOpen && location.pathname === '/' ? 'text-white' : 'text-apple-dark'
              }`}
            >
              {LAB_INFO.name}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.target, link.type === 'section')}
                className={`text-sm font-medium transition-colors duration-200 ${
                  !scrolled && location.pathname === '/' 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-apple-text hover:text-apple-blue'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${!scrolled && !isOpen && location.pathname === '/' ? 'text-white' : 'text-apple-text'} hover:text-apple-blue focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.target, link.type === 'section')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-apple-text hover:bg-gray-50 hover:text-apple-blue"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;