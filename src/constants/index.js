
export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];



export const myProjects = [

  {
    title: 'Brainly: Your Intelligent Second Brain for Curated Digital Knowledge',
    desc: 'Organize, Retrieve, and Enrich Your Digital World ,Brainly empowers you to effortlessly capture, organize, and rediscover valuable content from tweets, YouTube videos, articles, and essential links',
    subdesc:
      'Save tweets, YouTube videos, and links with one click via browser extensions or mobile apps. Automatically tag, categorize, Brainly maps relationships between saved content, helping you uncover patterns and build knowledge networks',
    href: '',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/brainly.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongo.png',
      },
    ],
  },

  {
    title: 'Podcastr - AI Podcast Platform',
    desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
    href: '',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  const getResponsiveProp = (mobileVal, tabletVal, desktopVal) => {
    return isSmall ? mobileVal : isMobile ? mobileVal : isTablet ? tabletVal : desktopVal;
  };

  return {
    HackerRoom: {
      scale: getResponsiveProp(3, 2.8, 4),
      position: getResponsiveProp(
        [-0.3, -4, 0.3],
        [-0.3, -5, 0.3],
        [-0.3, -9, 0.3]
      ),
      rotation: [0, 5, 0]
    },
    TypeLogo: {
      position: getResponsiveProp(
        [-4.6, -8.5, 0],
        [-10, -4.7, 2],
        [-15, -9, 3]
      ),
      rotation: [0, Math.PI/4, 0]
    },
    ReactLogo: {
      position: getResponsiveProp(
        [3.8, 5.2, 5],
        [10, 5.6, 5],
        [15, 5, 5]
      ),
      scale: getResponsiveProp(0.5, 0.6, 0.8)
    },
    StyleKeyBoard: {
      position: getResponsiveProp(
        [4, -6.5, 5],
        [10, -3.5, 5],
        [15, -8, 5]
      ),
      scale: getResponsiveProp(0.5, 0.6, 0.8),
      rotation: [1, 7, 0]
    },
    SolLogo: {
      position: getResponsiveProp(
        [-3.5, 1.5, 5],
        [-5, 2.5, 3],
        [-7, 1, 1.5]
      ),
      scale: getResponsiveProp(0.7, 0.8, 1.2),
      rotation: [1.1, Math.PI/6, 0]
    },
    NodeLogo: {
      position: getResponsiveProp(
        [3.4, 0, 5],
        [5, -1, 3],
        [7, -3, 1]
      ),
      scale: getResponsiveProp(3, 4, 5.3),
      rotation: [0, 0, -0.5]
    },
    Cube: {
      position: getResponsiveProp(
        [-4, 6, 5],
        [-10, 6, 5],
        [-16, 5, 5]
      ),
      scale: getResponsiveProp(0.6, 0.8, 1)
    }
  };
};
