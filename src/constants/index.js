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
    amazon,
    starbucks,
    trendyol,
    spotify,
    cisco,
   pino,
    threejs,
    portfolio,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Trendyol",
      icon: trendyol,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining software applications that meet business requirements..",
        "Working closely with other developers, stakeholders, and clients.",
        "Designing, developing, and deploying software solutions.",
        "Writing clean, maintainable code and ensure software applications are scalable and reliable.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Spotify",
      icon: spotify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Designing and creating visually appealing websites.",
        "Working closely with clients to understand their requirements.",
        "Developing creative solutions that meet client needs.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Amazon",
      icon: amazon,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Designing, developing, and maintaining front-end and back-end applications.",
        "Working closely with other developers, product managers, and stakeholders.",
        "Ensuring applications are scalable, secure, and user-friendly."
      ,
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "As a React developer, their ability to build complex UI components and efficiently manage state using modern JavaScript techniques was invaluable to our team's success.",
      name: "Hatice Karaca",
      designation: "CFO",
      company: "Trendyol",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
      "This software engineer demonstrated exceptional problem-solving skills and a strong attention to detail, consistently delivering high-quality code that exceeded our expectations.",
      name: "Mevlüt Uysal",
      designation: "COO",
      company: "Amazon",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
      "Our JavaScript developer's expertise in modern web development frameworks and libraries allowed us to create dynamic and responsive web applications that exceeded our clients' expectations.",
      name: "Büşra Tekin",
      designation: "Manager",
      company: "Spotify",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Portfolio",
      description:
        "Example Web-based platform that allows users to have access to your portfolio ",
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
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "System Network",
      description:
        "Designing a company network system",
      tags: [
        {
          name: "cisco",
          color: "blue-text-gradient",
        },
        {
          name: "network",
          color: "green-text-gradient",
        },
        {
          name: "security",
          color: "pink-text-gradient",
        },
      ],
      image: cisco,
      source_code_link: "https://github.com/",
    },
    {
      name: "Food Ordering System",
      description:
        "An ordering food web project is a web-based application that allows users to order food online from their favorite restaurants. This type of project typically includes a user interface that displays menus, prices, and delivery options for each restaurant",
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
      image: pino,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };