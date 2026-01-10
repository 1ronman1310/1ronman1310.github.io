import React from 'react';
import { Member, Role } from '../types';
import { Github, Globe, Mail, BookOpen } from 'lucide-react';

const TeamMember: React.FC<{ member: Member }> = ({ member }) => {
  const isPI = member.role === Role.PI;

  return (
    <div className={`flex flex-col ${isPI ? 'md:flex-row md:items-center md:gap-8 bg-white p-6 rounded-2xl border border-gray-100' : 'items-center text-center'}`}>
      <div className={`relative overflow-hidden ${isPI ? 'w-32 h-32 md:w-48 md:h-48' : 'w-24 h-24'} rounded-full bg-gray-100 mb-4 ${isPI ? 'md:mb-0' : ''}`}>
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className={isPI ? 'flex-1 text-center md:text-left' : ''}>
        <h3 className={`font-semibold text-apple-dark ${isPI ? 'text-2xl' : 'text-lg'}`}>{member.name}</h3>
        <p className="text-apple-blue text-sm font-medium mb-2">{member.role}</p>
        
        {isPI && (
          <p className="text-apple-subtext mb-4 max-w-xl text-sm leading-relaxed">
            {member.bio}
          </p>
        )}
        
        <div className={`flex gap-3 ${isPI ? 'justify-center md:justify-start' : 'justify-center'} mt-2`}>
          {member.email && (
            <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-apple-dark transition-colors" title="Email">
              <Mail size={16} />
            </a>
          )}
          {member.links?.googleScholar && (
             <a href={member.links.googleScholar} className="text-gray-400 hover:text-apple-dark transition-colors" title="Google Scholar">
             <BookOpen size={16} />
           </a>
          )}
          {member.links?.github && (
            <a href={member.links.github} className="text-gray-400 hover:text-apple-dark transition-colors" title="GitHub">
              <Github size={16} />
            </a>
          )}
          {member.links?.website && (
            <a href={member.links.website} className="text-gray-400 hover:text-apple-dark transition-colors" title="Website">
              <Globe size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;