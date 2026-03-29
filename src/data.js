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
    { platform: "GitHub", url: "https://github.com/your-username", icon: "github" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/your-profile", icon: "linkedin" },
    { platform: "LeetCode", url: "https://leetcode.com/your-username", icon: "leetcode" },
    { platform: "Codeforces", url: "https://codeforces.com/profile/your-username", icon: "codeforces" }
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
      title: "Configuration Converter Tool",
      description: "A utility web app to convert configuration files between different formats easily.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveLink: "#",
      repoLink: "#"
    }
  ],

  // 5. Certifications & Achievements
  certificates: [
    {
      title: "Advanced React Patterns",
      issuer: "Frontend Masters",
      date: "2024",
      link: "#"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "#"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2023",
      link: "#"
    }
  ]
};
