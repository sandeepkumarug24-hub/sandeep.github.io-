export const PORTFOLIO_DATA = {
  // 1. Hero Section Details
  hero: {
    name: "Sandeep Kumar",
    title: "Software Engineer & Lifelong Learner",
    bio: "Welcome to my digital space. I build web applications, solve algorithms, and continuously explore new technologies. This space serves as an archive of my skills, projects, and study accounts.",
    resumeLink: "#", // Add your Google Drive / Dropbox link here
    contactText: "Get In Touch",
    contactEmail: "mailto:youremail@example.com"
  },

  // 2. Study Accounts & Profiles
  studyAccounts: [
    { platform: "GitHub", url: "https://github.com/sandeepkumarug24-hub", icon: "github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/sandeep-kumar-296715363/", icon: "linkedin" },
    { platform: "LeetCode", url: "https://leetcode.com/u/sandeeppp_55/", icon: "leetcode" },
    
  ],

  // 3. Technical Skills
  skills: [
    { category: "Languages", items: ["JavaScript", "Python", "Java", "C++", "TypeScript"] },
    { category: "Web Technologies", items: ["React", "HTML5", "CSS3", "Node.js", "Express", "Tailwind CSS"] },
    { category: "Tools & Databases", items: ["Git", "MongoDB", "SQL", "Docker", "VS Code"] },
    { category: "Machine Learning", items: ["TensorFlow", "PyTorch", "Pandas", "Scikit-Learn"] }
  ],

  // 4. Projects Showcase
  projects: [
    {
      title: "Campus Medical Support System",
      description: "A comprehensive platform connecting students with doctors in real-time for immediate medical assistance.",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveLink: "#",
      repoLink: "#"
    },
    {
      title: "Diabetes prediction ",
      description: "A machine learning nodel which predicts chances of you being diabetic.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveLink: "#",
      repoLink: "#"
    }
  ],

  // 5. Certifications & Achievements
  certificates: [
    {
      title: "Building LLM models using Prompt engineering",
      issuer: "NVIDIA",
      date: "march 2026",
      link: "https://drive.google.com/file/d/1GlmFXY8BmPX-iNphzr2bTpFejjNJdy6Q/view?usp=drive_link"
    }
    
  ]
};
