import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "", dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-24 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-apple-gray' : 'bg-white'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-apple-dark mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-apple-subtext max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;