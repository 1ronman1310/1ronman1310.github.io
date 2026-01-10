import React from 'react';
import { ResearchArea } from '../types';

const ResearchCard: React.FC<{ area: ResearchArea }> = ({ area }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all hover:shadow-md h-full flex flex-col">
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <img 
          src={area.image} 
          alt={area.title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-apple-dark mb-3">{area.title}</h3>
        <p className="text-apple-subtext leading-relaxed flex-1">{area.description}</p>
        <div className="mt-6">
          <span className="text-apple-blue font-medium text-sm group-hover:underline">Learn more &rarr;</span>
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;