const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

 const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "%", label: "Satisfied Clients" },
  { value: 13, suffix: "+", label: "Completed Projects" },
  { value: 6, suffix: "+", label: "Known Technology" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/cisco.svg",
  },
  {
    imgPath: "/images/logos/gamedeveloper.svg",
  },
  {
    imgPath: "/images/logos/github.svg",
  },
  {
    imgPath: "/images/logos/itchdotio.svg",
  },
  {
    imgPath: "/images/logos/git.svg",
  },
  {
    imgPath: "/images/logos/unity.svg",
  },
 
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Game Developer",
    modelPath: "/models/unity_3d_logo.glb",
    scale: 0.4,
    rotation: [0, 0, 0],
    position: [0 ,-2.5 ,0],
  },
];

const expCards = [
  {
    review:
      "Shashank brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/logos/OasisInfo.jpeg",
    logoPath: "/images/logos/OasisInfo.jpeg",
    title: "Frontend Developer Intern",
    date: "June 2023 - September 2023 ",
    responsibilities: [
      "Developed responsive and dynamic interfaces using React.js, improving user interaction by 30%.",
      "Integrated REST APIs and implemented optimized state management using React hooks.",
      "Collaborated with developers and designers to deliver production ready features.",
    ],
  },
  {
    review:
      "Shashank is fast learner. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/logos/cisco-color.svg",
    logoPath: "/images/logos/cisco-color.svg",
    title: "Cybersecurity Intern",
    date: "May 2024 - Jun 2024",
    responsibilities: [
      "Completed a structured program by Cisco Netwroking Academy on Python for Cybersecurity",
      "Learned fundamentals of network security, cryptography and secure communication protocols",
      "Gained hands-on experience in identifying culnerabilities and writing basic security script in Python",
    ],
  },
  {
    review:
      "Worked as an Individual developer were developed 6 projects while learning UNITY.",
    imgPath: "/images/logos/unity-color.svg",
    logoPath: "/images/logos/unity-color.svg",
    title: "Unity Developer",
    date: "March 2023 - August 2025",
    responsibilities:[
      "Developed multiple applications using Unity 3D and 2D",
      "Created multiple games on different domains ex:- storybased games, endless runner, FPS games",
      "Improved frame rate stability by 20% through physics optimizations and animation tuning.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "itchdotio",
    url: "https://shashank-shekhar-singh.itch.io/",
    imgPath: "/images/itchdotio.png",
  },
  {
    name: "Github",
    url: "https://github.com/Shashank2125",
    imgPath: "/images/Github.png",
  },
  {
    name: "x",
    url: "https://x.com/Shashankss_1",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/shashank-shekhar-singh-39a60a258/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
