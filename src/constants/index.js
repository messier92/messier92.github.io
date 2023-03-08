import {
    mobile,
    backend,
    creator,
    web,
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    AWS,
    FullStack,
    Unity,
    Blockchain,
    NTU,
    Cardiff,
    STEngg,
    NCS,
    CPP,
    CSharp,
    Python,
    Java,
    Solidity,
    Github,
    LinkedIn,
    Credly,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack",
      icon: FullStack,
    },
    {
      title: "Cloud",
      icon: AWS,
    },
    {
      title: "Games",
      icon: Unity,
    },
    {
      title: "Blockchain",
      icon: Blockchain,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: CPP,
    },
    {
      name: "C#",
      icon: CSharp,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Solidity",
      icon: Solidity,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "docker",
      icon: docker,
    },  
  ];

  const contactLinks = [
    {
      name: "Github",
      icon: Github,
      link: "https://github.com/messier92"
    },
    {
      name: "LinkedIn",
      icon: LinkedIn,
      link: "https://linkedin.com/in/han-long-eugene-goh-773724b5"
    },
    {
      name: "Credly",
      icon: Credly,
      link: "https://www.credly.com/users/han-long-eugene-goh/badges"
    },
  ]
  
  const experiences = [
    {
      company_name: "Nanyang Technological University, Singapore",
      title: "Bachelor of Engineering (Bioengineering) with Honours",
      icon: NTU,
      iconBg: "#383E56",
      date: "Aug 2015 - Aug 2018",
      points: [
        "Internship at A*STAR, where I developed an application using MATLAB for the purpose of image analysis and post-processing of photoacoustic images",
        "Utilized software such as MATLAB and Origin for my Final Year Project - Microorganism Detection using Raman Spectroscopy and C-ICA",
        "Completed a course in Big Data Analytics using R and obtained a 'Certificate of Performance'",
      ],
    },
    {
      company_name: "Cardiff University, UK",
      title: "MSc. in Computing, Distinction",
      icon: Cardiff,
      iconBg: "#E6DEDD",
      date: "Sep 2018 - Sep 2019",
      points: [
        "Modules taken: Web Application Development, Object-Oriented Programming with Java, Information Modelling and Database Systems, Data Visualization, Software Engineering and Python",
        "Obtained Distinction for my Dissertation topic - Image Analysis of Museum Insect Drawers; Using Python and related libraries to track and detect the amount of specimens in an image and text recognition of labels",
      ],
    },
    {
      company_name: "ST Engineering Eletronics",
      title: "Software Engineer",
      icon: STEngg,
      iconBg: "#383E56",
      date: "Dec 2019 - Sep 2021",
      points: [
        "Refactored and optimized plugins written in C++ for a proprietary gaming application. Performed code migration and upgrading, to ensure usability and functionality of the plugins across different C++ versions",
        "Developed the user interface of an in-house VoIP software using C# WPF and Telerik, adhering to the Model-View-ViewController software architecture",
        "Created a custom video game user interface with CRUD functionalities using Unity that allows for touch input and simple calculations to be integrated with the company's proprietary gaming application over UDP",
      ],
    },
    {
      company_name: "NCS Pte Ltd",
      title: "Software Engineer",
      icon: NCS,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - Present",
      points: [
        "Developed and maintained a full-stack web application using React, NodeJS, GraphQL, and MySQL for the purpose of COVID-19 contact tracing",
        "Implemented features such as pagination and performed the optimization of SQL queries to provide a faster response time and a more seamless digital experience",
        "Provide L1-L3 support for a data intermediary project hosted on Amazon Web Services. Developed containerized applications managed on EC2 instances, ECS and Lambda functions for processing data from various sources",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Eugene is a creative and critical thinker with high standards for himself. He has constantly been able to identify problems early and sharply within the administrative system and come up with ingenious solutions to improve it.",
      name: "COL Teo Wee Hong",
      designation: "COMD",
      company: "Singapore Armed Forces, Armour Training Institute",
      link: "https://drive.google.com/file/d/1nl0eABN2Sz7HzBS427B6CGymOd2dpnnL/view?usp=share_link"
    },
    {
      testimonial:
        "Eugene is good at communication. Even though sometimes the requests and comments to him were quite harsh and demanding, he was always willing to accept the challenge and try his best to get the job done.",
      name: "Dr Bi Renzhe",
      designation: "Research Fellow",
      company: "A*STAR",
      link: "https://drive.google.com/file/d/19zytXxKayDRwpqVhSxHH1YMyMmJG8RVh/view?usp=share_link"
    },
    {
      testimonial:
        "Eugene is hard working, energetic, conscientious, and goes about his work in a methodical manner. In addition, he is able to fluently discuss and explain his work - often at great length!",
      name: "Prof. Paul Rosin",
      designation: "Professor of Computer Vision",
      company: "Cardiff University",
      link: "https://drive.google.com/file/d/1qC9ch8lSe4bQpXyaZiU1xnpuMLOpzP0k/view?usp=sharing"
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, contactLinks };
  