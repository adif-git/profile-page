import * as image from './img/index';

const projectsData = [
  {
    id: '1',
    name: 'IT Ticket System',
    image: image.IT,
    tags: [
      'Web Development',
      'React.js',
      'Node.js',
      'Docker',
      'MongoDB',
      'Bootstrap',
    ],
    description:
      'Project I build about IT Ticket system. Ticket system is system that are used by IT support to track any hardware/software problems that submitted by user as ticket. This project build using MERN Stack (MongoDB Atlas, Express, Node.js, React.js) with Docker container. Login using passport-local authentication to generate cookies as JWT token. After login, all routes will be using JWT authentication.',
    link: 'https://it-tickets-system.herokuapp.com/',
    video: '',
    github: 'https://github.com/adif-git/IT-Tickets',
  },
  {
    id: '2',
    name: 'Goalkeeper Robot',
    image: image.Goalkeeper,
    tags: [
      'Raspberry Pi',
      'Arduino',
      'Computer Vision',
      'Embedded System',
      'C++',
    ],
    description:
      'Robot will autonomously move and follow wherever ball is moving like a goalkeeper. Developed in C++ with computer vision based on color detection.',
    link: '',
    video:
      'https://drive.google.com/file/d/1J-nxprEs1lAsyPAfUe4oy9mDJ-SHl0qu/view?usp=sharing',
    github: '',
  },
  {
    id: '3',
    name: 'Quadcopter for Vehicle Counting',
    image: image.Quadcopter,
    tags: ['Raspberry Pi', 'Computer Vision', 'Embedded System', 'C++'],
    description:
      "Build from scratch quadcopter with only purpose to count number of vehicles that are travel on road in real time using computer vision. Capable to count with approximately 60% accuracy because calculated without machine learning. Besides number of vehicles, quadcopter's altitude and video stream also will be recorded.",
    link: '',
    video:
      'https://drive.google.com/file/d/1m7gDiac_ph88rR9GnaivVQUR7A81-cin/view?usp=sharing',
    github: '',
  },
  {
    id: '4',
    name: 'Hexapod Robot',
    image: image.Hexapod,
    tags: ['Raspberry Pi', 'Arduino', 'Embedded System', 'C++', 'Python'],
    description:
      'Hexapod robot which can be remotely control through WiFi. User will control robot movement wirelessly.',
    link: '',
    video:
      'https://drive.google.com/file/d/1XmU0Hye5k8mDxEsuXnGH0R1XJnGS0aVL/view?usp=sharing',
    github: '',
  },
  {
    id: '5',
    name: 'Water Tandon',
    image: image.WaterTandon,
    tags: ['Embedded System', 'Assembly', 'AT89S51'],
    description:
      'This is my water tandon project using AT89S51 Microcontroller in Assembly Language. Sensors are used to indicate water level in the container and water level will be showed using 2 red LEDs. White LED shows on water pump behaviour.',
    link: '',
    video:
      'https://drive.google.com/file/d/1-6Y2x8fUxX5pQXpT8p4y0iOeyCPnkuoK/view?usp=sharing',
    github: 'https://github.com/adif-git/Water-Tandon',
  },
  {
    id: '6',
    name: 'Project Tracker',
    image: image.ProjectTracker,
    tags: [
      'Web Development',
      'Node.js',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'MySQL',
    ],
    description:
      "Project Tracker website for tracking your own side projects build using Node.js and MySQL as database. This website contain two main parts, Project List and Task List. Project List is a list which define your main idea when doing projects. Task list is a list of task on what will you be doing from specific project. User can change each task's status (Pending, On Progress, or Completed).",
    link: '',
    video: '',
    github: 'https://github.com/adif-git/Project-Tracker',
  },
  {
    id: '7',
    name: 'Library',
    image: image.Library,
    tags: ['Web Development', 'Django', 'HTML', 'CSS', 'Python', 'MySQL'],
    description:
      'First time on building website using Django and MySQL as backend. Authorized users have access to add, update, and delete book/author.',
    link: '',
    video: '',
    github: 'https://github.com/adif-git/library',
  },
  {
    id: '8',
    name: 'GitHub Profile Page',
    image: image.Profile,
    tags: [
      'Web Development',
      'React.js',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
    ],
    description:
      'This profile page build using React.js. Visit my GitHub page to see other projects.',
    link: 'https://adif-git.github.io/profile-page/',
    video: '',
    github: 'https://github.com/adif-git/profile-page',
  },
];

export default projectsData;
