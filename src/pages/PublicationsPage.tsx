import React, { useEffect } from 'react';
import Section from '../components/Section';
import { PUBLICATIONS } from '../constants';
import { FileText, Code, ExternalLink } from 'lucide-react';

const PublicationsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <Section id="all-publications" title="Publications" subtitle="Full list of our conference and journal papers.">
        <div className="max-w-5xl mx-auto space-y-8">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="group flex flex-col sm:flex-row gap-4 sm:items-baseline border-b border-gray-100 pb-6 last:border-0">
              <span className="text-sm font-bold text-apple-subtext w-12 flex-shrink-0">{pub.year}</span>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-apple-dark group-hover:text-apple-blue transition-colors">
                  {pub.title}
                </h4>
                <p className="text-apple-subtext text-base mt-2">
                  {pub.authors.map((author, index) => (
                    <span key={index} className={author.includes("Doe") ? "font-semibold text-apple-dark" : ""}>
                      {author}{index < pub.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <div className="flex items-center gap-4 mt-3 text-sm font-medium uppercase tracking-wide">
                  <span className="text-apple-dark bg-gray-100 px-3 py-1 rounded">{pub.venue}</span>
                  {pub.links?.pdf && (
                    <a href={pub.links.pdf} className="flex items-center gap-1 text-apple-blue hover:underline">
                      <FileText size={14} /> PDF
                    </a>
                  )}
                  {pub.links?.code && (
                    <a href={pub.links.code} className="flex items-center gap-1 text-apple-blue hover:underline">
                      <Code size={14} /> Code
                    </a>
                  )}
                  {pub.links?.project && (
                    <a href={pub.links.project} className="flex items-center gap-1 text-apple-blue hover:underline">
                      <ExternalLink size={14} /> Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default PublicationsPage;