import { LabInfo, Member, NewsItem, Publication, ResearchArea, Role } from './types';

// ==========================================
// 1. LAB INFORMATION (Modify here)
// ==========================================
export const LAB_INFO: LabInfo = {
  name: "Integrated Lightwave Lab", // 修改为：Integrated Lightwave Lab
  university: "Harbin Institute of Technology (Shenzhen)", // 修改为：Harbin Institute of technology(Shenzhen)
  // 下面对应 Home 页面的 "Designing the future..." 下面的介绍文案
  description: "At the intersection of discovery and innovation,we employ integrated micro/nanophotonic platforms to probe the laws of physics and translate insights into transformative solutions for critical fields from healthcare to data security",
  address: "L1310, Information Science Building, Harbin Institute of Technology (Shenzhen), Shenzhen, China", // 修改地址
  email: "wangjw7@hit.edu.cn" // 修改联系邮箱
};

// ==========================================
// 1.1 HERO BACKGROUND IMAGE (Modify here)
// ==========================================
// Home 页面大背景图。可以使用网络链接，也可以把图片放在 public/images/ 下，然后填 '/images/bg.jpg'
export const HERO_BG_IMAGE = "public/papers/bg.png";


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
    bio: 'Wang Jiawei is currently a full professor at the Harbin Institute of Technology (Shenzhen). He received his PhD degree in Electronic & Computer Engineering from the Hong Kong University of Science and Technology in 2016. From 2016 to 2020, he was engaged in post-doctoral research at the Leibniz IFW Dresden and the Department of Electronics and Information Engineering at Chemnitz University of Technology, Germany.He has published over 70 papers in SCI-indexed journals, including Nature Photonics, Science Advances, Laser & Photonics Reviews, Nano Letters, and ACS Nano, as well as more than 20 proceedings in EI-indexed conferences such as CLEO, SPIE Photonics West, OECC, and ACP. He has also co-authored two book chapters and holds six patents.',
    image: '/images/wjw.jpg', // 修改照片链接
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
    image: '/images/lj.jpg',
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
  {
    id: 'alumni-4',
    name: 'Juntao Duan',
    role: Role.ALUMNI,
    bio: 'Researching silicon photonics.',
    image: 'https://picsum.photos/400/400?random=6',
  },
  {
    id: 'alumni-5',
    name: 'Yu Miao',
    role: Role.ALUMNI,
    bio: 'Researching silicon photonics.',
    image: 'https://picsum.photos/400/400?random=6',
  },
  {
    id: 'alumni-6',
    name: 'Yihao Chen',
    role: Role.ALUMNI,
    bio: 'Researching silicon photonics.',
    image: 'https://picsum.photos/400/400?random=6',
  },
  {
    id: 'alumni-7',
    name: 'Lan Wu',
    role: Role.ALUMNI,
    bio: 'Researching silicon photonics.',
    image: 'https://picsum.photos/400/400?random=6',
  },
  {
    id: 'alumni-8',
    name: 'Shengqi Sun',
    role: Role.ALUMNI,
    bio: 'Researching silicon photonics.',
    image: 'https://picsum.photos/400/400?random=6',
  },
];

// ==========================================
// 3. NEWS (Modify here)
// ==========================================
export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    date: '2026-01-14',
    title: 'Breakthrough in Non-Hermitian Cavity Quantum Electrodynamics',
    description: 'Our latest work of single photon sources hybridly integrated on a LNOI chip will be published in Nature Nanotechnology soon.'
  },
  {
    id: 'n2',
    date: '2025-11-05',
    title: 'Keynote talk at ACP2025',
    description: 'Jiawei will deliver a keynote talk at ACP2025. See you in Suzhou!'
  },
  {
    id: 'n3',
    date: '2025-07-01',
    title: '"Resonance trapping" via external coupling',
    description: 'A new framework unifying internal and external coupling, published in Newton! https://www.cell.com/newton/fulltext/S2950-6360(25)00163-X'
  }
];

// ==========================================
// 4. RESEARCH AREAS (Modify here)
// ==========================================
export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'r1',
    title: 'Silicon Photonics &  Thin-film Lithium Niobate Photonics',
    description: 'Exploring new designs and mechanisms, aiming for scalable, high-yield, and reliable integrated photonic devices.',
    image: 'public/research/SP.jpg'
  },
  {
    id: 'r2',
    title: 'Non-Hermitian Photonics & Topological Photonics',
    description: 'Delving into the exquisite interplay of symmetry and topology in photonics, where gain, loss, and non-reciprocity enable unprecedented optical control.',
    image: 'public/research/NH.jpg'
  },
  {
    id: 'r3',
    title: 'Optical sensing & Computing',
    description: 'Harnessing the elegance of light-matter interactions to build secure, sensitive, and AI-empowered photonic applications.',
    image: 'public/research/OC.jpg'
  }
];

// ==========================================
// 5. PUBLICATIONS (Modify here)
// ==========================================
// 如何添加下载链接：
// 1. 把你的 PDF 文件放在 public 文件夹里 (例如 public/papers/my-paper.pdf)
// 2. 将 pdf 字段设置为 '/papers/my-paper.pdf'
export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'On-chip non-Hermitian cavity quantum electrodynamics',
    authors: ['Y. Chen', 'X. Wang','Jin Li','Kexun Wu'],
    venue: 'arXiv',
    year: 2026,
    highlight: true,
    links: { 
      pdf: 'public/papers/On-chip non-Hermitian cavity quantum electrodynamics.pdf', // 示例：指向 public/papers/example-paper.pdf
      // code: 'https://github.com/your-repo/code.zip' // 示例：直接下载或指向 GitHub
    }
  },
  {
    id: 'p2',
    title: 'Reconfigurable resonance trapping in single optical microresonators',
    authors: ['Jin Li', 'M. Tang'],
    venue: 'Newton',
    year: 2025,
    highlight: true,
    links: { 
      pdf: 'public/papers/Reconfigurable resonance trapping in single optical microresonators.pdf' // 如果没有 PDF，可以留空或写 '#'
    }
  },
  {
    id: 'p3',
    title: 'Low-threshold chirality-enabled silicon photonic diode',
    authors: ['J. Li','Juntao Duan'],
    venue: 'Laser & Photonics Reviews',
    year: 2025,
    highlight: true,
    links: { pdf: 'public/papers/Low-threshold chirality-enabled silicon photonic diode.pdf' }
  },
  {
    id: 'p4',
    title: 'Electrically reconfigurable mode chirality in integrated microring resonators',
    authors: ['Yihao Chen', 'Jin Li','Juntao Duan'],
    venue: 'Laser & Photonics Reviews',
    year: 2024,
    highlight: false,
    links: { pdf: 'public/papers/Electrically reconfigurable mode chirality in integrated microring resonators.pdf',
      code: '#' 

    }
  },
  {
    id: 'p5',
    title: 'Revealing molecular diffusion dynamics in polymer microspheres by optical resonances',
    authors: ['Jiawei Wang', 'Jin Li'],
    venue: 'Science Advances',
    year: 2023,
    highlight: true,
    links: { pdf: 'public/papers/Revealing molecular diffusion dynamics in polymer microspheres by optical resonances.pdf' }
  },
  {
    id: 'p6',
    title: 'Experimental observation of Berry phases in optical Möbius ring microcavities',
    authors: ['Jiawei Wang'],
    venue: 'Nature Photonics',
    year: 2023,
    highlight: true,
    links: { 
      pdf: 'public/papers/Experimental observation of Berry phases in optical Möbius ring microcavities.pdf', // 示例：指向 public/papers/example-paper.pdf
      // code: 'https://github.com/your-repo/code.zip' // 示例：直接下载或指向 GitHub
    }
  },
  {
    id: 'p7',
    title: 'Steering directional light emission and mode chirality through post shaping of cavity geometry',
    authors: ['Jiawei Wang'],
    venue: 'Laser & Photonics Review',
    year: 2020,
    highlight: false,
    links: { 
      pdf: 'public/papers/Steering directional light emission and mode chirality through post shaping of cavity geometry.pdf' // 如果没有 PDF，可以留空或写 '#'
    }
  },
  {
    id: 'p8',
    title: 'Water nanostructures on oxide: in-situ dynamics probed by optical resonances',
    authors: ['Y. Yin', 'Jiawei Wang'],
    venue: 'Science Advances',
    year: 2019,
    highlight: false,
    links: { pdf: 'public/papers/Water nanostructures on oxide in-situ dynamics probed by optical resonances.pdf' }
  },
  {
    id: 'p9',
    title: 'Curved nanomembrane-based concentric ring cavities for supermode hybridization',
    authors: ['Jiawei Wang'],
    venue: 'Nano Letters',
    year: 2018,
    highlight: false,
    links: { pdf: 'public/papers/Curved nanomembrane-based concentric ring cavities for supermode hybridization.pdf',
      code: '#' 
      }
  },
  {
    id: 'p10',
    title: 'Silicon coupled-resonator optical-waveguide-based ———— with pixelized mode-field intensity distributions',
    authors: ['Jiawei Wang'],
    venue: 'Scientific Reports',
    year: 2014,
    highlight: false,
    links: { pdf: 'public/papers/Silicon coupled-resonator.pdf' }
  }

];