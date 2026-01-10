import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ResearchCard from '../components/ResearchCard';
import TeamMember from '../components/TeamMember';
import { MEMBERS, NEWS, PUBLICATIONS, RESEARCH_AREAS, LAB_INFO } from '../constants';
import { Role } from '../types';
import { Calendar, FileText, Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Filter for Current Members (exclude Alumni)
  const pi = MEMBERS.find(m => m.role === Role.PI);
  const currentStudents = MEMBERS.filter(m => m.role !== Role.PI && m.role !== Role.ALUMNI);

  // Filtered lists for Home page
  const recentNews = NEWS.slice(0, 3);
  const recentPubs = PUBLICATIONS.slice(0, 5);

  return (
    <>
      <Hero />

      {/* News Section */}
      <Section id="news" title="Latest News">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentNews.map((item) => (
            <div key={item.id} className="border-l-2 border-apple-blue pl-4 py-1 hover:bg-gray-50 transition-colors rounded-r-lg p-2">
              <div className="flex items-center gap-2 text-xs text-apple-subtext mb-1 font-medium uppercase tracking-wide">
                <Calendar size={12} />
                {item.date}
              </div>
              <h3 className="text-lg font-medium text-apple-dark mb-1 line-clamp-2">{item.title}</h3>
              <p className="text-sm text-apple-subtext leading-relaxed line-clamp-3">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-right">
          <Link to="/news" className="inline-flex items-center text-apple-blue font-medium hover:underline text-sm">
            More Information <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </Section>

      {/* Research Section */}
      <Section 
        id="research" 
        title="Research Areas" 
        subtitle="We investigate fundamental problems in intelligence and their application to real-world challenges."
        dark
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESEARCH_AREAS.map(area => (
            <ResearchCard key={area.id} area={area} />
          ))}
        </div>
      </Section>

      {/* Publications Section */}
      <Section id="publications" title="Selected Publications" subtitle="Our recent highlights.">
        <div className="space-y-6">
          {recentPubs.map((pub) => (
            <div key={pub.id} className="group flex flex-col sm:flex-row gap-4 sm:items-baseline border-b border-gray-100 pb-4 last:border-0">
              <span className="text-sm font-bold text-apple-subtext w-12 flex-shrink-0">{pub.year}</span>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-apple-dark group-hover:text-apple-blue transition-colors">
                  {pub.title}
                </h4>
                <p className="text-apple-subtext text-sm mt-1">
                  {pub.authors.map((author, index) => (
                    <span key={index} className={author.includes("Doe") ? "font-semibold text-apple-dark" : ""}>
                      {author}{index < pub.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs font-medium uppercase tracking-wide">
                  <span className="text-apple-dark bg-gray-100 px-2 py-0.5 rounded">{pub.venue}</span>
                  {pub.links?.pdf && (
                    <a href={pub.links.pdf} className="flex items-center gap-1 text-apple-blue hover:underline">
                      <FileText size={12} /> PDF
                    </a>
                  )}
                  {pub.links?.code && (
                    <a href={pub.links.code} className="flex items-center gap-1 text-apple-blue hover:underline">
                      <Code size={12} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
            <Link 
              to="/publications" 
              className="px-6 py-2 rounded-full border border-gray-300 text-apple-dark font-medium hover:bg-gray-50 transition-colors"
            >
                View All Publications
            </Link>
        </div>
      </Section>

      {/* Team Section */}
      <Section id="team" title="Our Team" subtitle="Meet the people behind the research." dark>
        {/* PI Highlight */}
        <div className="mb-16">
          {pi && <TeamMember member={pi} />}
        </div>
        
        {/* Current Students Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 max-w-6xl mx-auto">
          {currentStudents.map(member => (
            <div key={member.id} className="w-40 flex flex-col items-center text-center group">
               <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-gray-200 mb-3 shadow-sm group-hover:shadow-md transition-shadow">
                 <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
               </div>
               <h4 className="font-semibold text-apple-dark text-sm md:text-base">{member.name}</h4>
               <p className="text-xs text-apple-subtext uppercase tracking-wide mt-1">{member.role}</p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-16 flex justify-center">
            <Link 
              to="/team" 
              className="px-8 py-3 rounded-full bg-white border border-gray-200 shadow-sm text-apple-dark font-medium hover:bg-gray-50 hover:shadow-md transition-all active:scale-95"
            >
                View Full Team & Alumni
            </Link>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Join Us">
        <div className="bg-apple-dark text-white rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-32 bg-blue-500 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-2xl font-bold mb-4">Prospective Students</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        We are always looking for self-motivated students. 
                        If you are interested in joining the lab, please read our recent papers and send an email with your CV.
                    </p>
                    <a 
                        href={`mailto:${LAB_INFO.email}`} 
                        className="inline-block bg-white text-apple-dark px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                    >
                        Apply Now
                    </a>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-gray-700 pt-8 md:pt-0 md:pl-12">
                     <h3 className="text-2xl font-bold mb-4">Visit Us</h3>
                     <p className="text-gray-300 mb-2">{LAB_INFO.university}</p>
                     <p className="text-gray-300 mb-6">{LAB_INFO.address}</p>
                     <p className="text-gray-300">Email: {LAB_INFO.email}</p>
                </div>
            </div>
        </div>
      </Section>
    </>
  );
};

export default Home;