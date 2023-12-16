export interface ProjectData {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    skillImages: string[];
    content: string;
    category: string; // Add the category property
  }
  
  const projects: ProjectData[] = [
    {
      id: 'PortfolioWebsite',
      title: 'Portfolio Website',
      description: 'My personal portfolio website built using React and TypeScript.',
      imageUrl: 'https://placehold.co/400',
      skillImages: ["https://placehold.co/400", "https://placehold.co/400"],
      content: 'This is a detailed description of the project...',
      category: 'Web',
    },
    {
      id: 'PortfolioWebsite',
      title: 'Portfolio Website',
      description: 'My personal portfolio website built using React and TypeScript.',
      imageUrl: 'https://placehold.co/400',
      skillImages: ["https://placehold.co/400", "https://placehold.co/400"],
      content: 'This is a detailed description of the project...',
      category: 'Web',
    },
    {
      id: 'PortfolioWebsite',
      title: 'Portfolio Website',
      description: 'My personal portfolio website built using React and TypeScript.',
      imageUrl: 'https://placehold.co/400',
      skillImages: ["https://placehold.co/400", "https://placehold.co/400"],
      content: 'This is a detailed description of the project...',
      category: 'Web',
    },
    {
      id: 'TaskManagerApp',
      title: 'Task Manager App',
      description: 'An application for managing tasks and to-dos.',
      imageUrl: 'https://placehold.co/400',
      skillImages: ["https://placehold.co/400", "https://placehold.co/400"],
      content: 'This is a detailed description of the project...',
      category: 'Design',
    },
    {
      id: 'TaskManagerApp',
      title: 'Task Manager App 2',
      description: 'An application for managing tasks and to-dos.',
      imageUrl: 'https://placehold.co/400',
      skillImages: ["https://placehold.co/400", "https://placehold.co/400"],
      content: 'This is a detailed description of the project...',
      category: 'Design',
    },
    {
      id: 'TaskManagerApp',
      title: 'Task Manager App 3',
      description: 'An application for managing tasks and to-dos.',
      imageUrl: 'https://placehold.co/400',
      skillImages: ["https://placehold.co/400", "https://placehold.co/400"],
      content: 'This is a detailed description of the project...',
      category: 'Design',
    },
    {
      id: 'TaskManagerApp',
      title: 'Task Manager App 4',
      description: 'An application for managing tasks and to-dos.',
      imageUrl: 'https://placehold.co/400',
      skillImages: ["https://placehold.co/400", "https://placehold.co/400"],
      content: 'This is a detailed description of the project...',
      category: 'Design',
    },
    {
      id: 'TaskManagerApp',
      title: 'Task Manager App 5',
      description: 'An application for managing tasks and to-dos.',
      imageUrl: 'https://placehold.co/400',
      skillImages: ["https://placehold.co/400", "https://placehold.co/400"],
      content: 'This is a detailed description of the project...',
      category: 'Design',
    },
    // Add more projects as needed
  ];
  
  export default projects;
  