export interface ProjectData {
    id: string;
    title: string;
    description: string;
    imageUrl: string[];
    skillImages: string[];
    content: string;
    githubUrl: string;
    category: string; 
  }
  
  const projects: ProjectData[] = [
    {
      id: 'MovieApp',
      title: 'Movie App',
      description: 'My personal portfolio website built using React and TypeScript.',
      imageUrl: ["../images/favorietefilm1.png", "../images/favorietefilm2.png", "../images/favorietefilm3.png", "../images/favorietefilm4.png", "../images/favorietefilm5.png"],
      skillImages: ['../icons/React.png', '../icons/mongodb.png',],
      content: 'This is a detailed description of the project...',
      githubUrl: "https://github.com/JarnoPauwels/ExpertLab-FavorieteFilm",
      category: 'Web',
    },
    {
      id: 'ReactMapApp',
      title: 'React Native Map App',
      description: 'My personal portfolio website built using React and TypeScript.',
      imageUrl: ["../images/reactmapapp.jpg", ],
      skillImages: ['../icons/React.png',],
      content: 'This is a detailed description of the project...',
      githubUrl: "https://github.com/JarnoPauwels/ExpertLab-ReactNativeMapApp",
      category: 'Web',
    },
    {
      id: 'SecretSantaApp',
      title: 'Secret Santa App',
      description: 'My personal portfolio website built using React and TypeScript.',
      imageUrl: ["../images/secretsanta1.jpg", "../images/secretsanta2.jpg"],
      skillImages: ['../icons/React.png', ],
      content: 'This is a detailed description of the project...',
      githubUrl: "https://github.com/JarnoPauwels/ExpertLab-SecretSanta",
      category: 'Web',
    },
    {
      id: 'DynamicTransitions',
      title: 'Dynamic Transitions',
      description: 'My personal portfolio website built using React and TypeScript.',
      imageUrl: ["../images/dyntrans1.png", "../images/dyntrans2.png", "../images/dyntrans3.png", "../images/dyntrans4.png"],
      skillImages: ['../icons/React.png', ],
      content: 'This is a detailed description of the project...',
      githubUrl: "https://github.com/JarnoPauwels/ExpertLab-DynamicTransitions",
      category: 'Web',
    },
    {
      id: 'LoanApplication',
      title: 'Medialab Loan Application',
      description: 'My personal portfolio website built using React and TypeScript.',
      imageUrl: ["../images/loanapp1.png", "../images/loanapp2.png", "../images/loanapp3.png", "../images/loanapp4.png" , "../images/loanapp5.png", "../images/loanapp6.png"],
      skillImages: ['../icons/kotlin.png', '../icons/springboot.png', '../icons/vue.png', '../icons/mysql.png',],
      content: 'This is a detailed description of the project...',
      githubUrl: "https://github.com/EHB-MCT/dev4-course-project-quinn-jarno-1/tree/main",
      category: 'Web',
    },
    {
      id: 'Poster',
      title: 'Product Poster',
      description: 'My personal portfolio website built using React and TypeScript.',
      imageUrl: ["../images/poster.png", "../images/posterlogo.png", ],
      skillImages: ['../icons/photoshop.png', '../icons/illustrator.png',],
      content: 'This is a detailed description of the project...',
      githubUrl: "",
      category: 'Design',
    },
    {
      id: 'DataVisualisation',
      title: 'Data Visualisation',
      description: 'My personal portfolio website built using React and TypeScript.',
      imageUrl: ["../images/marvelvis.png", ],
      skillImages: ['../icons/illustrator.png',],
      content: 'This is a detailed description of the project...',
      githubUrl: "",
      category: 'Design',
    },
  ];
  
  export default projects;
  