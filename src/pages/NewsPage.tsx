import React, { useEffect } from 'react';
import Section from '../components/Section';
import { NEWS } from '../constants';
import { Calendar } from 'lucide-react';

const NewsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-white">
      <Section id="all-news" title="Lab News" subtitle="Updates from our research group.">
        <div className="max-w-4xl mx-auto space-y-12">
          {NEWS.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="md:w-32 flex-shrink-0 text-apple-subtext font-medium text-sm pt-1">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  {item.date}
                </div>
              </div>
              <div className="flex-1 pb-8 border-b border-gray-100 last:border-0">
                <h3 className="text-xl font-semibold text-apple-dark mb-2">{item.title}</h3>
                <p className="text-apple-subtext leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default NewsPage;