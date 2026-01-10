import React, { useEffect } from 'react';
import Section from '../components/Section';
import TeamMember from '../components/TeamMember';
import { MEMBERS } from '../constants';
import { Role, Member } from '../types';

const TeamPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pi = MEMBERS.find(m => m.role === Role.PI);
  const phdStudents = MEMBERS.filter(m => m.role === Role.PHD);
  const masterStudents = MEMBERS.filter(m => m.role === Role.MASTER);
  const alumni = MEMBERS.filter(m => m.role === Role.ALUMNI);

  // Reusable card component to ensure consistency across all groups
  const StudentCard = ({ member, showBio = true, showEmail = true }: { member: Member, showBio?: boolean, showEmail?: boolean }) => (
    <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow h-full border border-transparent hover:border-gray-100">
       <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mb-4 flex-shrink-0 shadow-sm">
         <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
       </div>
       <h4 className="font-semibold text-lg text-apple-dark">{member.name}</h4>
       <p className="text-xs text-apple-subtext uppercase tracking-wide mt-1 mb-3">{member.role}</p>
       
       {showBio && member.bio && (
         <p className="text-sm text-gray-500 mb-4 flex-grow leading-relaxed px-2">{member.bio}</p>
       )}
       
       {showEmail && member.email && (
           <a href={`mailto:${member.email}`} className="text-apple-blue text-sm hover:underline mt-auto font-medium">
               {member.email}
           </a>
       )}
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-white">
      <Section id="full-team" title="Our Team" subtitle="The researchers and students who make it happen.">
        
        {/* Principal Investigator */}
        {pi && (
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-apple-dark mb-8 border-b border-gray-100 pb-2">Principal Investigator</h3>
            <TeamMember member={pi} />
          </div>
        )}

        {/* PhD Students */}
        {phdStudents.length > 0 && (
          <div className="mb-20">
             <h3 className="text-2xl font-semibold text-apple-dark mb-8 border-b border-gray-100 pb-2">PhD Students</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {phdStudents.map(member => (
                 <StudentCard key={member.id} member={member} />
               ))}
             </div>
          </div>
        )}

        {/* Master Students */}
        {masterStudents.length > 0 && (
          <div className="mb-20">
             <h3 className="text-2xl font-semibold text-apple-dark mb-8 border-b border-gray-100 pb-2">Master Students</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {masterStudents.map(member => (
                 <StudentCard key={member.id} member={member} />
               ))}
             </div>
          </div>
        )}

        {/* Alumni */}
        {alumni.length > 0 && (
          <div className="mb-12">
             <h3 className="text-2xl font-semibold text-apple-dark mb-8 border-b border-gray-100 pb-2">Alumni</h3>
             {/* Alumni displayed in a slightly denser grid but with same colored card style. Bio and Email are hidden. */}
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               {alumni.map(member => (
                 <StudentCard key={member.id} member={member} showBio={false} showEmail={false} />
               ))}
             </div>
          </div>
        )}

      </Section>
    </div>
  );
};

export default TeamPage;