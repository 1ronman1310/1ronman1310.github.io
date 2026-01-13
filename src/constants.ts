import { LabInfo, Member, NewsItem, Publication, ResearchArea, Role } from './types';

// ==========================================
// 1. LAB INFORMATION (Modify here)
// ==========================================
export const LAB_INFO: LabInfo = {
  name: "Integrated Photonics & Intelligence Lab",
  university: "University of Technology",
  description: "Bridging the gap between nanophotonic devices and artificial intelligence. We design next-generation optical chips for computing and sensing.",
  address: "Room 404, Building C, 123 Science Drive, Tech City",
  email: "contact@ipl-lab.edu"
};

// ==========================================
// 2. TEAM MEMBERS (Modify here)
// ==========================================
// To add a photo: Upload it to GitHub public folder or use an external URL.
export const MEMBERS: Member[] = [
  // Principal Investigator
  {
    id: 'pi-1',
    name: 'Dr. Jiawei Wang', // 修改名字
    role: Role.PI,
    bio: 'Principal Investigator. Leading research in integrated photonics and AI hardware.',
    image: 'public/images/wjw.jpg', // 修改照片链接
    email: 'wangjw7@hit.edu.cn',
    links: {
      googleScholar: 'https://scholar.google.com/citations?hl=zh-CN&user=_6oPUfYAAAAJ',
      twitter: '#',
      website: '#'
    }
  },
  
  // PhD Students
  {
    id: 'phd-1',
    name: 'Jin Li',
    role: Role.PHD,
    bio: 'Researching silicon photonics.',
    image: 'public/images/lj.jpg',
    email: 'student.a@univ.edu'
  },
  {
    id: 'phd-2',
    name: 'Yaoming Wei',
    role: Role.PHD,
    bio: 'Researching silicon photonics.',
    image: '/images/wym.jpg',
    email: 'student.b@univ.edu'
  },
  {
    id: 'phd-3',
    name: 'Xiujie Dou',
    role: Role.PHD,
    bio: 'Researching silicon photonics.',
    image: '/images/dxj.jpg',
    email: 'student.c@univ.edu'
  },

  // Master Students
  {
    id: 'ms-1',
    name: 'Kexun Wu',
    role: Role.MASTER,
    bio: 'Researching silicon photonics.',
    image: '/images/wkx.jpg',
    email: 'student.d@univ.edu'
  },
  {
    id: 'ms-2',
    name: 'Xuecheng Yan',
    role: Role.MASTER,
    bio: 'Researching silicon photonics.',
    image: '/images/yxc.jpg',
    email: 'student.e@univ.edu'
  },
  {
    id: 'ms-3',
    name: 'Yiyin Xiao',
    role: Role.MASTER,
    bio: 'Researching silicon photonics.',
    image: '/images/xyy.jpg',
    email: 'student.e@univ.edu'
  },
  {
    id: 'ms-4',
    name: 'Mingfu',
    role: Role.MASTER,
    bio: 'Researching silicon photonics.',
    image: '/images/mf.jpg',
    email: 'student.e@univ.edu'
  },
    {
    id: 'ms-5',
    name: 'Shuhan Chen',
    role: Role.MASTER,
    bio: 'Researching silicon photonics.',
    image: '/images/csh.jpg',
    email: 'student.e@univ.edu'
  },

  // Alumni
  {
    id: 'alumni-1',
    name: 'Jiaqi Zhao',
    role: Role.ALUMNI,
    bio: 'Researching silicon photonics.',
    image: 'https://picsum.photos/400/400?random=6',
  },
  {
    id: 'alumni-2',
    name: 'Jingjiang Li',
    role: Role.ALUMNI,
    bio: 'Researching silicon photonics.',
    image: '/images/ljj.jpg',
    email: 'student.d@univ.edu'
  },
  {
    id: 'alumni-3',
    name: 'Mingquan Deng',
    role: Role.ALUMNI,
    bio: 'Researching silicon photonics.',
    image: '/images/dmq.jpg',
    email: 'student.e@univ.edu'
  },

];

// ==========================================
// 3. NEWS (Modify here)
// ==========================================
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
    title: 'Dr. Hu received the Early Career Award',
    description: 'Recognizing outstanding contributions to the field of integrated photonics.'
  },
  {
    id: 'n3',
    date: '2023-11-20',
    title: 'Two papers accepted to CLEO 2024',
    description: 'Congratulations to our students for their hard work on silicon photonics.'
  }
];

// ==========================================
// 4. RESEARCH AREAS (Modify here)
// ==========================================
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

// ==========================================
// 5. PUBLICATIONS (Modify here)
// ==========================================
// To generate more, just copy-paste the object inside the array.
export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'Integrated Optical Tensor Cores for Neural Networks',
    authors: ['Student A', 'Jianqi Hu'],
    venue: 'Nature Electronics',
    year: 2024,
    highlight: true,
    links: { pdf: '#', code: '#' }
  },
  {
    id: 'p2',
    title: 'Inverse Design of Nanophotonic Structures using Diffusion Models',
    authors: ['Student B', 'Jianqi Hu'],
    venue: 'Nature Communications',
    year: 2023,
    highlight: true,
    links: { pdf: '#', project: '#' }
  },
  {
    id: 'p3',
    title: 'High-bandwidth Silicon Photonic Modulators',
    authors: ['Student C', 'Jianqi Hu'],
    venue: 'OFC 2023',
    year: 2023,
    highlight: true,
    links: { pdf: '#' }
  },
  {
    id: 'p4',
    title: 'Scalable Optical Computing Architectures',
    authors: ['Student A', 'Jianqi Hu'],
    venue: 'IEEE JSTQE',
    year: 2022,
    highlight: false,
    links: { pdf: '#', code: '#' }
  },
  {
    id: 'p5',
    title: 'Low-loss Waveguides for Mid-Infrared Sensing',
    authors: ['Student D', 'Jianqi Hu'],
    venue: 'Optics Express',
    year: 2022,
    highlight: false,
    links: { pdf: '#' }
  }
];