import {
    it,
    cyber,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    knowBe4,
    duo,
    windows11,
    developmentHomesInc,
    diamondGraphicsLLC,
    labelTracking,
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
      icon: reactjs,
    },
    {
      title: "IT Support Specialist",
      icon: it,
    },
    {
      title: "Cyber Security",
      icon: cyber,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
    {
      name: "windows",
      icon: windows11,
    },
    {
      name: "knowBe4",
      icon: knowBe4,
    },
    {
      name: "duo",
      icon: duo,
    },
  ];
  
  const experiences = [

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
    },
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
      name: "Labels Tracking System",
      description:
        "Development of a label tracking system that allows you track, add, take labels with logs and users login."
        ,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: labelTracking,
      source_code_link: "https://github.com/DGI-bakeralshaban/label-tracking-2",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };