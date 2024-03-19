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
    developmentHomesInc,
    diamondGraphicsLLC,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Frontend Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "IT Support Specialist",
      icon: backend,
    },
    {
      title: "Cyber Security",
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
      title: "Technology Support Associate",
      company_name: "Development Homes Inc",
      icon: developmentHomesInc,
      iconBg: "#383E56",
      date: "November 2021 - July 2022",
      points: [
        "Provide support to a variety of clients including HR, Nurses, Finances, and C-suite executives.",
        "Provide Help Desk support via phone/email to the employees in a timely manner.",
        "Diagnose and solve computer, laptop, tablet, and phone hardware and software problems.",
        "Create new AD accounts for users, manage permissions, and deactivate retired accounts for old employees based on HR requests.",
        "Setup Windows laptops, Desktops, tablets, printers, and phones for employees, manage inventory, and provide training on these devices as needed.",
        "Communicate with various vendors and provide recommendations based on the company's needs and budget.",
        "Setup and provide support to VoIP system including setup of the phone number, speed dial, location, and general maintenance to the system.",
        "Working with various departments to approve and deploy Snipe-IT to better manage our inventory and provide a higher level of security.",
        "Maintaining DHI's website by working with the CEO on various designs and content ideas.",
        "Management of the company and its multisite firewall and add exceptions of it as needed.",
      ],
    },
    {
      title: "IT Support Technician",
      company_name: "Diamond Graphics LLC",
      icon: diamondGraphicsLLC,
      iconBg: "#E6DEDD",
      date: "November 2022 - Present",
      points: [
        "Led the KnowBe4 campaign within the organization to increase cybersecurity awareness dropping phishing-prone users from 50.1%to7.1%",
        "Deployment and management of Docker Server with several web-based applications to streamline various IT processes.",
        "Deployment and management of custom DNS server to limit internet access to important security updates on specialty equipment.",
        "Development of a label tracking system to improve our internal processes resulting in higher yields and lower error rates",
        "Management of domain-joined devices through Active Directory, Mobile Device Management,and Apple Business Manager.",
        "Provided high-quality support services and adhere to SLA standards set by the organization",
        "Developed a knowledge base for IT processes and currently expanding into other departments based on user feedback and ticket reports.",

      ],
    }
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
  
  export { services, technologies, experiences, testimonials, projects };