import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Duong Nam Truong | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'vi', // e.g: en, es, fr, jp
  description: `Hi there! I'm a Fullstack Javascript Developer`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi, I'm`,
  name: 'Duong Nam Truong',
  subtitle: 'The Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'A Full Stack Developer with over 2 years experience in Javascript, MERN.',
  paragraphTwo:
    'Learning new languages and technologies is what I am passionate about (I self-taught Reactjs with 3 weeks). I am considered a team-player because I like to help other and tend to work well within groups. I can also do some mentoring tasks and do code reviewing for other team members.',
  paragraphThree: 'I am also the owner of an IT blog: laptrinhbanthan.com.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'alert-humg.jpg',
    title: 'Alert HUMG Chatbot',
    info:
      'Designed and implemented Chatbot for the Hanoi University of Mining and Geology to help students view class schedules, exam schedules, test scores and automatically remind them daily.',
    info2: 'Technologies used: Nodejs, Facebook API, Puppeteer, ExpressJS, MongoDB.',
    url: 'https://m.me/alertHUMG',
    repo: 'https://github.com/namtruongdev/Chatbot-Alert-HUMG', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'laptrinhbanthan.jpg',
    title: 'Lap Trinh Ban Than Blog',
    info:
      'Lap Trinh Ban Than is a IT blog created by me to share my programming and life experiences.',
    info2: 'Technologies used: Reactjs, Gatsby, GraphQL.',
    url: 'https://laptrinhbanthan.com',
    repo: 'https://github.com/namtruongdev/Lap-Trinh-Ban-Than-Blog-React', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'etraining.jpg',
    title: 'ETraining',
    info:
      'ETraining is an online education website designed and implemented to help people practice vocabulary through flashcards and practice grammar.',
    info2: 'Technologies used: PugJS, Gulp, Bootstrap, Sass, Javascript.',
    url: 'https://etraining-edu.firebaseapp.com/',
    repo: 'https://github.com/namtruongdev/etraining', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hi@duongnamtruong.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'telegram',
      url: 'https://t.me/truongduong99',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/truongduongg99',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/truongduong99',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/namtruongdev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
