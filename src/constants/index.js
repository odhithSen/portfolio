import {
  mobile,
  backend,
  creator,
  web,
  github,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  arduino,
  asgardeo,
  axios,
  ballerina,
  choreo,
  degitalOcean,
  fusion,
  gitHub,
  githubActions,
  graphQl,
  java,
  kubernetes,
  mysql,
  postman,
  python,
  rLang,
  solidWorks,
  vite,
  threejs,
  OPRobotics,
  L3DP,
  WSO2,
  appStore,
  emailManager,
  ema,
  travel,
  costlytical,
  hashvault,
  failsafeVm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "research",
    title: "Research",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Entrepreneur",
    icon: backend,
  },
  {
    title: "Robotics Engineer",
    icon: mobile,
  },
  {
    title: "3D Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },

  {
    name: "ballerina",
    icon: ballerina,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "rLang",
    icon: rLang,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "axios",
    icon: axios,
  },
  {
    name: "graphQl",
    icon: graphQl,
  },
  {
    name: "vite",
    icon: vite,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "gitHub",
    icon: gitHub,
  },
  {
    name: "githubActions",
    icon: githubActions,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "choreo",
    icon: choreo,
  },
  {
    name: "asgardeo",
    icon: asgardeo,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "degitalOcean",
    icon: degitalOcean,
  },
  {
    name: "arduino",
    icon: arduino,
  },
  {
    name: "fusion",
    icon: fusion,
  },
  {
    name: "solidWorks",
    icon: solidWorks,
  },
  {
    name: "figma",
    icon: figma,
  },

  // add ml related technologies here
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "WSO2",
    company_website: "https://wso2.com",
    icon: WSO2,
    iconBg: "#FFFFFF",
    date: "July 2022 - July 2023",
    points: [
      "Completed a one-year internship in the Internal Apps team at WSO2.",
      "I mainly worked on developing features for various internal applications, including the internal Travel App, Expense Management App, and the WSO2 App Store.",
      "Collaborated with cross-functional teams including Finance, Infrastructure, and HR",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Co-founder",
    company_name: "Lanka 3D Printing",
    company_website: "https://lanka3dprinting.com",
    icon: L3DP,
    iconBg: "#6C6C6C",
    date: "Jan 2019 - Present",
    points: [
      "co-founded Lanka 3D Printing, a company based in Colombo, Sri Lanka, specializing in 3D printing and industrial designing.",
      "Designed and developed 3D models for a variety of industries, including automotive, medical, and consumer goods.",
      "Developed the company's website.",
    ],
  },
  {
    title: "Robotics Engineer",
    company_name: "OP Robotics",
    company_website: "https://oprobotics.com",
    icon: OPRobotics,
    iconBg: "#FFFFFF",
    date: "Jan 2014 - Jan 2019",
    points: [
      "Engineered and built robots from scratch for different applications, focusing on both hardware and software components.",
      "Developed robust and efficient circuits, enhancing the robots' performance and reliability.",
      "Gained hands-on experience in robotics engineering, circuit design, mechanical design, and competitive robotics.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "WSO2 App Store",
    description:
      "This project aimed to revamp the existing dashboard listing app to create the new app store.",

    tags: [
      {
        name: "Ballerina",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Asgardeo",
        color: "orange-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: appStore,
    link: "https://apps.wso2.com/",
    icon: WSO2,
    iconBg: "white-gradient",
  },
  {
    name: " WSO2 Travel App",
    description:
      "This project was focused on creating a new REST service to add travel-related invoices to the NetSuite SOR and to integrate the concept of funding source split for travel invoices.",

    tags: [
      {
        name: "Ballerina",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "SuiteScript",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: travel,
    link: "https://travel.wso2.com/",
    icon: WSO2,
    iconBg: "white-gradient",
  },
  {
    name: "WSO2 Expense Management App",
    description:
      "This project was focused on integrating the funding source split concept for travel and credit card expense claims. ",

    tags: [
      {
        name: "Ballerina",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "SuiteScript",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: ema,
    link: "https://ema.wso2.com/",
    icon: WSO2,
    iconBg: "white-gradient",
  },
  {
    name: "WSO2 Email Group Manager",
    description:
      "This project focused on modernising the front end of the existing Email Group Manager App to create version 2 of the application.",

    tags: [
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Asgardeo",
        color: "orange-text-gradient",
      },
    ],
    image: emailManager,
    link: "https://email-group-manager.wso2.com/",
    icon: WSO2,
    iconBg: "white-gradient",
  },
  {
    name: "Costlytical",
    description:
      "“Costlytical” is a cost-estimation system for the 3D printing industry, that automatically generates quotations for 3D models uploaded by customers. It is capable of analyzing the 3D models and producing an accurate quotation within several seconds.",
    tags: [
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "Express",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: costlytical,
    link: "https://github.com/opulence-2021",
    icon: github,
    iconBg: "black-gradient",
  },
  {
    name: "HashVault",
    description:
      "“HashVault” is an all-in-one locally installed password manager that keeps users' passwords and other sensitive information and credentials safe for all at the convenience of a single master key.",
    tags: [
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "JavaFX",
        color: "pink-text-gradient",
      },
    ],
    image: hashvault,
    link: "https://github.com/opulence-2021",
    icon: github,
    iconBg: "black-gradient",
  },
];

const research = [
  {
    name: "VM Failure Prediction Using Real-time Anomaly Detection",
    description:
      "Predicting Virtual Machine failure due to hardware/software faults by analyzing the host logs, hypervisor logs and server resource usage data in real-time using a machine learning-based approach.",

    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "orange-text-gradient",
      },
      {
        name: "Keras",
        color: "blue-text-gradient",
      },
    ],
    image: failsafeVm,
    link: "https://github.com/opulence-2021",
    icon: github,
    iconBg: "black-gradient",
  },
];

export { services, technologies, experiences, testimonials, projects, research };
