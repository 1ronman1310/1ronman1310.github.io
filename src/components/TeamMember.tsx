import React from 'react';
import { Member, Role } from '../types';
import { Github, Globe, Mail, BookOpen } from 'lucide-react';

// 关键词列表：这些词在 PI 介绍中会自动变蓝变粗
const HIGHLIGHT_KEYWORDS = [
  "Nature Photonics", 
  "Science Advances", 
  "Laser & Photonics Reviews", 
  "Nano Letters", 
  "ACS Nano", 
  "CLEO", 
  "SPIE Photonics West", 
  "OECC", 
  "ACP",
  "Nature Electronics"
];

const TeamMember: React.FC<{ member: Member }> = ({ member }) => {
  const isPI = member.role === Role.PI;

  // 辅助函数：处理文本，将关键词高亮，并处理换行
  const renderBio = (bio: string) => {
    // 1. 按段落分割 (\n\n 或 \n)
    const paragraphs = bio.split(/\n+/);

    return paragraphs.map((para, pIndex) => {
      // 2. 对每个段落，查找关键词并替换为 JSX
      let parts: React.ReactNode[] = [para];

      HIGHLIGHT_KEYWORDS.forEach(keyword => {
        const newParts: React.ReactNode[] = [];
        parts.forEach(part => {
          if (typeof part === 'string') {
            // 使用正则分割，保留分隔符(即关键词)
            const splitRegex = new RegExp(`(${keyword})`, 'g');
            const subParts = part.split(splitRegex);
            subParts.forEach(subPart => {
              if (subPart === keyword) {
                newParts.push(
                  <span key={`${pIndex}-${keyword}-${Math.random()}`} className="font-bold text-apple-blue">
                    {keyword}
                  </span>
                );
              } else {
                newParts.push(subPart);
              }
            });
          } else {
            newParts.push(part);
          }
        });
        parts = newParts;
      });

      return (
        <p key={pIndex} className="mb-4 text-apple-subtext leading-relaxed text-justify">
          {parts}
        </p>
      );
    });
  };

  return (
    <div className={`flex flex-col ${isPI ? 'md:flex-row md:items-start md:gap-10 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm' : 'items-center text-center'}`}>
      <div className={`relative overflow-hidden ${isPI ? 'w-40 h-40 md:w-56 md:h-56 flex-shrink-0' : 'w-24 h-24'} rounded-full bg-gray-100 mb-4 ${isPI ? 'md:mb-0' : ''}`}>
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className={isPI ? 'flex-1 text-center md:text-left' : ''}>
        <h3 className={`font-semibold text-apple-dark ${isPI ? 'text-3xl mb-1' : 'text-lg'}`}>{member.name}</h3>
        <p className={`text-apple-blue font-medium mb-4 ${isPI ? 'text-lg' : 'text-sm'}`}>{member.role}</p>
        
        {isPI && (
          <div className="text-base text-gray-600 mb-6 max-w-3xl">
            {renderBio(member.bio)}
          </div>
        )}
        
        <div className={`flex gap-4 ${isPI ? 'justify-center md:justify-start' : 'justify-center'} mt-2`}>
          {member.email && (
            <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-apple-blue transition-colors" title="Email">
              <Mail size={20} />
            </a>
          )}
          {member.links?.googleScholar && (
             <a href={member.links.googleScholar} className="text-gray-400 hover:text-apple-blue transition-colors" title="Google Scholar">
             <BookOpen size={20} />
           </a>
          )}
          {member.links?.github && (
            <a href={member.links.github} className="text-gray-400 hover:text-apple-dark transition-colors" title="GitHub">
              <Github size={20} />
            </a>
          )}
          {member.links?.website && (
            <a href={member.links.website} className="text-gray-400 hover:text-apple-blue transition-colors" title="Website">
              <Globe size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;