const yearsOfExperience = calculateExperience(2020);
export const HEAD_CONTENT = `Hey there! I'm a Frontend Developer with ${yearsOfExperience} years of hands-on experience, passionate about creating beautiful and functional interfaces across various frontend technologies like React and Next.js. I specialize in developing scalable and maintainable frontends that offer exceptional user experiences and robust functionality`;
export const PROJECTS = [
  {
    title: "Showfindr",
    url: "https://showfindr.co/",
    image: "https://i.imgur.com/aRqvzR4.png",
    description:
      "A full-stack application providing users with a seamless, mobile-first experience for discovering, comparing, and instantly booking tickets for live events (music, sports, theater). The project emphasized performance and intuitive user flows across the entire platform.",
    technologies: ["tailwind", "Nextjs", "Expressjs"],
  },
  {
    title: "Demicare",
    url: "https://www.demicare.skin/",
    image: "https://i.imgur.com/326JnBE.jpeg",
    description:
      "A fully functional  innovative solution that helps brands connect with their customers on a deeper level, offering real-time deep skin analysis and personalized recommendations through their skincare journey",
    technologies: ["tailwind", "Nextjs", "GeminiAi", "Nest.js"],
  },
  {
    title: "Reward Clan",
    url: "https://app.rewardclan.com/",
    image: "https://i.imgur.com/6SKbL6Y.jpeg",

    description:
      "A dynamic reward wheel creation and management platform, allowing users to easily configure, customize and deploy interactive reward systems for their events and promotions.",
    technologies: ["Tailwind", "Nextjs"],
  },
  {
    title: "Tripplug",
    url: "https://www.tripplug.com/",
    image: "https://i.imgur.com/KJJbhhD.jpeg",

    description:
      "This web application serves as a comprehensive online platform enabling users to search, compare, book, and manage various travel services (flights, hotels, vacation packages, car rentals, visa assistance, etc.) from multiple providers, offering a seamless and secure booking experience.",
    technologies: ["HTML", "CSS", "Tailwind", "Nextjs", "Amadeus API"],
  },
  // {
  //   title: "Celeb Beauty Clinics",
  //   url: "https://celebbeautyclinics.com/",
  //   image: "https://i.imgur.com/O0O7uGg.jpeg",

  //   description:
  //     "A  medical spa offering advanced aesthetic treatments. The primary goal was to create a digital presence that effectively communicates the spa's blend of luxurious relaxation and medical-grade services, attracting new clients while providing existing ones with easy access to information",
  //   technologies: ["HTML", "CSS", "Reactjs", "Tailwind"],
  // },
];

export const EXPERIENCES = [
  {
    year: "2025 - present",
    role: "Frontend Developer",
    company: "Casava Microinsurance Limited",
    description: `Creating a seamless and intuitive user experience for all of the company's digital products. , Building web applications for policy administration and management, utilizing React and Typescript. Collaborated with product managers and UX/UI designers to define technical requirementsand translate design concepts into high-quality code. Drove performance optimization initiatives, resulting in a 40% improvement in page loadtimesFrontend`,
    technologies: ["Javascript", "Typescript", "React.js", "Next.js"],
  },
  {
    year: "2024 - 2025",
    role: "Frontend Developer",
    company: "Hoops Technologies",
    description: `Engineered a dynamic reward wheel creation and management dashboard, enabling users toeasily configure and deploy interactive reward systems for diverse campaigns, utilizing React and Typescript. Collaborated with product managers and UX/UI designers to define technical requirementsand translate design concepts into high-quality code. Drove performance optimization initiatives, resulting in a 40% improvement in page loadtimesFrontend`,
    technologies: ["Javascript", "Typescript", "React.js", "Next.js"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Revent Technologies",
    description: `Contributed to the development of a core banking solution using Reactjs and Typescript.implemented a micro-frontend architecture thereby improving scalability and maintainability.Developed and maintained comprehensive unit and integration tests using Jest and ReactTesting Library, ensuring high code quality.`,
    technologies: [
      "HTML",
      "CSS",
      "Reactjs",
      "ExpressJs",
      "Tailwind",
      "Jest",
      "Typescript",
    ],
  },
  {
    year: "2020 - 2025",
    role: "Full Stack Developer",
    company: "ALML GROUP",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: [
      "HTML",
      "CSS",
      "Reactjs",
      "Node.js",
      "tailwind",
      "postgres",
      "expressjs",
    ],
  },
];

export const CONTACT = {
  address: "33, powerline street Egbeda , Lagos, Nigeria",
  phoneNo: "+2348067702441",
  email: "princewillowoh18@gmail.com",
};

function calculateExperience(startYear: number) {
  const currentYear = new Date().getFullYear(); // Gets the current year
  return currentYear - startYear;
}
