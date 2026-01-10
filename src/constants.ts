import { LabInfo, Member, NewsItem, Publication, ResearchArea, Role } from './types';

export const LAB_INFO: LabInfo = {
  name: "Integrated Photonics & Intelligence Lab",
  university: "University of Technology",
  description: "Bridging the gap between nanophotonic devices and artificial intelligence. We design next-generation optical chips for computing and sensing.",
  address: "Room 404, Building C, 123 Science Drive, Tech City",
  email: "contact@ipl-lab.edu"
};

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: '2024-05-15',
    title: 'Breakthrough in On-chip Optical Computing',
    description: 'Our latest work on photonic tensor cores was published in Nature Electronics.'
  },
  {
    id: 'n2',
    date: '2024-02-10',
    title: 'Prof. Doe received the Early Career Award',
    description: 'Recognizing outstanding contributions to the field of integrated photonics.'
  },
  {
    id: 'n3',
    date: '2023-11-20',
    title: 'Two papers accepted to CLEO 2024',
    description: 'Congratulations to our students for their hard work on silicon photonics.'
  },
  {
    id: 'n4',
    date: '2023-09-01',
    title: 'New Grant Awarded',
    description: 'We received a $2M grant to study optical neural networks.'
  },
  {
    id: 'n5',
    date: '2023-08-15',
    title: 'Welcome new PhD students',
    description: 'The lab continues to grow with 3 new members.'
  }
];

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'r1',
    title: 'Optical Neural Networks',
    description: 'Developing high-speed, energy-efficient optical hardware for deep learning acceleration.',
    image: 'https://images.unsplash.com/photo-1620052136008-012563a6286f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'r2',
    title: 'Silicon Photonics',
    description: 'Designing large-scale integrated photonic circuits for data communication and sensing.',
    image: 'https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'r3',
    title: 'Inverse Design',
    description: 'Using AI and optimization algorithms to design novel nanophotonic structures.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop'
  }
];

// Helper to generate students
const generateStudents = (): Member[] => {
  const students: Member[] = [];
  // Modified to include Alumni for demonstration
  const roles = [
    Role.PHD, Role.PHD, Role.PHD, Role.PHD, 
    Role.MASTER, Role.MASTER, Role.MASTER, 
    Role.ALUMNI, Role.ALUMNI, Role.ALUMNI
  ];
  
  for (let i = 0; i < roles.length; i++) {
    students.push({
      id: `s${i}`,
      name: `Member Name ${i+1}`,
      role: roles[i],
      bio: 'Researching integrated circuits.',
      image: `https://picsum.photos/400/400?random=${20+i}`,
      email: roles[i] !== Role.ALUMNI ? `student${i+1}@univ.edu` : undefined
    });
  }
  return students;
};

export const MEMBERS: Member[] = [
  {
    id: 'm1',
    name: 'Dr. John Doe',
    role: Role.PI,
    bio: 'Associate Professor of Electrical Engineering. PhD from MIT. Leading research in integrated photonics and AI hardware.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop', // Professional headshot look
    email: 'john.doe@univ.edu',
    links: {
      googleScholar: '#',
      twitter: '#',
      website: '#'
    }
  },
  ...generateStudents()
];

// Generating more publications for demonstration
const extraPubs: Publication[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `ep${i}`,
  title: `Advanced Photonic Integrated Circuits for High-Speed Computing Vol. ${i+1}`,
  authors: ['Student Name', 'John Doe'],
  venue: i % 2 === 0 ? 'Nature Photonics' : 'Optica',
  year: 2021 - i,
  highlight: false,
  links: { pdf: '#' }
}));

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'Integrated Optical Tensor Cores for Neural Networks',
    authors: ['Jane Smith', 'John Doe'],
    venue: 'Nature Electronics',
    year: 2024,
    highlight: true,
    links: { pdf: '#', code: '#' }
  },
  {
    id: 'p2',
    title: 'Inverse Design of Nanophotonic Structures using Diffusion Models',
    authors: ['Michael Chen', 'John Doe'],
    venue: 'Nature Communications',
    year: 2023,
    highlight: true,
    links: { pdf: '#', project: '#' }
  },
  {
    id: 'p3',
    title: 'High-bandwidth Silicon Photonic Modulators',
    authors: ['Student Three', 'John Doe'],
    venue: 'OFC 2023',
    year: 2023,
    highlight: true,
    links: { pdf: '#' }
  },
  {
    id: 'p4',
    title: 'Scalable Optical Computing Architectures',
    authors: ['Sarah Johnson', 'John Doe'],
    venue: 'IEEE JSTQE',
    year: 2022,
    highlight: false,
    links: { pdf: '#', code: '#' }
  },
  {
    id: 'p5',
    title: 'Low-loss Waveguides for Mid-Infrared Sensing',
    authors: ['Bob Brown', 'John Doe'],
    venue: 'Optics Express',
    year: 2022,
    highlight: false,
    links: { pdf: '#' }
  },
  ...extraPubs
];