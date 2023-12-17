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
      description: 'Full stack movie application.',
      imageUrl: ["../images/favorietefilm1.png", "../images/favorietefilm2.png", "../images/favorietefilm3.png", "../images/favorietefilm4.png", "../images/favorietefilm5.png"],
      skillImages: ['../icons/React.png', '../icons/mongodb.png',],
      content: 'Full stack movie app, the user gets a list of popular movies and can search for them too. They can add the movie to a watchlist and in the watchlist they can mark the movie as watched and they can give it a score This was an Expert Lab project made for school.',
      githubUrl: "https://github.com/JarnoPauwels/ExpertLab-FavorieteFilm",
      category: 'Web',
    },
    {
      id: 'ReactMapApp',
      title: 'React Native Map App',
      description: 'A mapp app made in React Native',
      imageUrl: ["../images/reactmapapp.jpg", ],
      skillImages: ['../icons/React.png',],
      content: 'One page map app made in React Native using google maps. The user can see their location, custom points of interest and the map turns with the user. This was an Expert Lab project made for school.',
      githubUrl: "https://github.com/JarnoPauwels/ExpertLab-ReactNativeMapApp",
      category: 'Web',
    },
    {
      id: 'SecretSantaApp',
      title: 'Secret Santa App',
      description: 'A digital Secret Santa',
      imageUrl: ["../images/secretsanta1.jpg", "../images/secretsanta2.jpg"],
      skillImages: ['../icons/React.png', ],
      content: 'A digital Secret Santa! Users can add participants and the app will choose who they have to buy a present for! This was an Expert Lab project made for school.',
      githubUrl: "https://github.com/JarnoPauwels/ExpertLab-SecretSanta",
      category: 'Web',
    },
    {
      id: 'DynamicTransitions',
      title: 'Dynamic Transitions',
      description: 'Website about the history of different sports made to learn animation libraries',
      imageUrl: ["../images/dyntrans1.png", "../images/dyntrans2.png", "../images/dyntrans3.png", "../images/dyntrans4.png"],
      skillImages: ['../icons/React.png', ],
      content: 'This website is about the history of different sports, this was an Expert Lab project where the point was to learn how to implement and use animations and animation libraries such as GSAP and Framer Motion.',
      githubUrl: "https://github.com/JarnoPauwels/ExpertLab-DynamicTransitions",
      category: 'Web',
    },
    {
      id: 'LoanApplication',
      title: 'Medialab Loan Application',
      description: 'Loan Application for the schools medialab',
      imageUrl: ["../images/loanapp1.png", "../images/loanapp2.png", "../images/loanapp3.png", "../images/loanapp4.png" , "../images/loanapp5.png", "../images/loanapp6.png"],
      skillImages: ['../icons/kotlin.png', '../icons/springboot.png', '../icons/vue.png', '../icons/mysql.png',],
      content: 'Loan Application for the schools medialab. Users can register and log in. They can then see a list of all the items and their details that are available in the medialab, they can then lend an item. There is also the Admin Dashboard where an admin can manage the users, the items and the loans. This project was made in collaboration with another student.' ,
      githubUrl: "https://github.com/EHB-MCT/dev4-course-project-quinn-jarno-1/tree/main",
      category: 'Web',
    },
    {
      id: 'Poster',
      title: 'Product Poster',
      description: 'Poster made for design class off a fictional product',
      imageUrl: ["../images/poster.png", "../images/posterlogo.png", ],
      skillImages: ['../icons/photoshop.png', '../icons/illustrator.png',],
      content: 'A poster made for design class off a fictional product based of off the keywords water and jaws',
      githubUrl: "",
      category: 'Design',
    },
    {
      id: 'DataVisualization',
      title: 'Data Visualization',
      description: 'My personal portfolio website built using React and TypeScript.',
      imageUrl: ["../images/marvelvis.png", ],
      skillImages: ['../icons/illustrator.png',],
      content: 'Data visualization inspired by designer Frederica Fragapane. The graph shows how many Marvel characters have lived or died throughout the years and whether they were bad, good or neutral. This project was made in collaboration with another student.',
      githubUrl: "",
      category: 'Design',
    },
  ];
  
  export default projects;
  