import { time } from "console";
import { link } from "fs";

export const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Work Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Bringing ideas to reality, one line of code at a time",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/helloworld.png",
      spareImg: "",
    },
    {
      id: 2,
      title: 'CS @ Western University', 
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center items-center",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently grinding NeetCode 150",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Always happy to chat about new opportunities",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "W5 - Western Entrepreneurship Website",
      des: "Deployed and designed Western Entrepreneurship website alongside UI Design team.",
      img: "/w5.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fig.svg"],
      link: "https://w5entrepreneurs.ca/",
    },
    {
      id: 2,
      title: "ChatBot AI",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fig.svg",],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Developer Intern",
      time: "May 2024 - Aug 2024",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/propel.png",
    },
    {
      id: 2,
      title: "Product Operations Analyst",
      time: "Apr 2024 - Aug 2024",
      desc: "Designed and developed mobile app features and formulated a US Market Expansion strategy.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/hottakes.jpeg",
    },
    {
      id: 3,
      title: "Pro-Bono Consultant",
      time: "2023-2024",
      desc: "Formulated Go-To Strategy for 10mm VC backed Startup developing an AI assistant.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/bagelai.jpeg",
    },
    {
      id: 4,
      title: "Freelance Developer",
      time: "2023-2024",
      desc: "Developed and maintained user applications using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/barryxinpaul",
    },
    {
      id: 2,
      img: "/insta.svg",
      link: "https://www.instagram.com/barryxpaul/",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/barryxpaul/",
    },
  ];