import {} from "lucide-react";

export const personalInfo = {
  name: "anas ashraf",
  title: "full stack developer",
  email: "7amdishehab@gmail.com",
  phone: "+201127882821",
  location: "Kafr El-Sheikh, Egypt",
  github: "https://github.com/AnasAfawzy",
  linkedin: "https://www.linkedin.com/in/anasnaguib/",
  about: `Full Stack Web Developer specializing in PHP, Laravel, and ERP systems with expertise in building 
scalable, high-performance web applications. Skilled in backend development, database management, and 
system architecture. Passionate about creating robust solutions that transform complex business 
requirements into seamless digital experiences. Experienced in leading backend teams and delivering 
enterprise-level applications.`,
};

export const skills = {
  frontend: [
    "HTML5",
    "HTML",
    "CSS3",
    "CSS",
    "JavaScript",
    "AJAX",
    "jQuery",
    "Bootstrap",
    "Blade",
  ],
  backend: [
    "PHP",
    "Laravel",
    "MySQL",
    "SQL",
    "Databases",
    "REST APIs",
    "RESTful APIs",
    "Server Side",
    "Back-End Web Development",
    "MVC Architecture",
    "Database Design",
    "API Development",
    "Server Management",
    "Apache",
    "PhpMyAdmin",
    "Object-Oriented Programming (OOP)",
    "ERP Software",
    "Full-Stack Development",
    "Web Development",
    "Business Requirements",
  ],
  tools: [
    "Git & GitHub",
    "Composer",
    "Postman",
    "MySQL Workbench",
    "Visual Studio Code",
    "Linux",
    "Apache/Nginx",
    "Google Maps",
    "Google Drive",
    "Selenium",
    "Selenium WebDriver",
    "Python",
    "Web Scraping",
    "Data Scraping",
    "Data Scraping Service",
  ],
  cs: [
    "Data Structures & Algorithms",
    "Design Patterns",
    "Database Fundamentals",
    "Object-Oriented Programming",
  ],
  soft: [
    "Agile Collaboration",
    "Technical Communication",
    "Problem Solving",
    "Adaptability",
    "Detail-Oriented",
    "Time Management",
    "Teamwork",
    "Self-Learning",
    "Critical Thinking",
    "Attention to Detail",
  ],
};

export const projects = [
  {
    title: "Albarqawy System",
    description:
      "A comprehensive ERP system specifically designed for contractors, built with Laravel and modern web technologies. Features advanced project management, financial tracking, and business process automation for construction and engineering companies.",
    tech: [
      "PHP",
      "Laravel",
      "MySQL",
      "REST APIs",
      "Bootstrap",
      "JavaScript",
      "jQuery",
    ],
    github: "https://admin-albarqawy.brmjatech.uk/login",
    demo: "https://admin-albarqawy.brmjatech.uk/login",
    image: "/images/albarqway.png",
    details:
      "Developed a robust admin panel system with comprehensive user management, real-time data analytics, and secure authentication. Implemented RESTful APIs for seamless data integration and optimized database queries for high performance.",
  },
];

export const experience = [
  {
    role: "Backend Team Leader",
    company: "Brmja Tech",
    duration: "May 2025 – Present",
    points: [
      "Leading backend development team in building scalable ERP systems and web applications using PHP and Laravel.",
      "Architecting and implementing robust database structures and API endpoints for enterprise-level applications.",
      "Collaborating with cross-functional teams to translate business requirements into technical solutions.",
      "Mentoring junior developers and establishing coding standards and best practices for the team.",
      "Optimizing application performance and ensuring system reliability and security.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Freelance / Self-Employed",
    duration: "2014 – Present",
    points: [
      "Developed and deployed custom web applications using PHP, Laravel, and modern frontend technologies.",
      "Built and maintained ERP systems for various clients, handling complex business logic and data management.",
      "Collaborated directly with clients to understand requirements and deliver tailored solutions.",
      "Implemented secure authentication systems, payment gateways, and third-party API integrations.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Management Information Systems",
  university: "Almadina Academy",
  duration: "Sep 2022 – Jun 2026 (Expected)",
  details:
    "Focusing on Information Systems, Database Management, Business Analysis, and Enterprise Resource Planning (ERP) systems.",
};

export const certifications = [
  "PHP & Laravel Backend Development | Advanced Web Applications",
  "MySQL Database Design & Optimization | Enterprise Systems",
  "RESTful API Development & Integration | Microservices Architecture",
  "ERP Systems Implementation & Customization | Business Process Automation",
  "Laravel Framework Mastery | MVC Architecture & Best Practices",
  "Backend Security & Performance Optimization | Scalable Applications",
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
];

export const heroContent = {
  intro: "Hi, I am",
  description:
    "Specializing in building high-performance, scalable web applications with PHP Laravel and ERP systems. I transform complex requirements into seamless digital experiences.",
  btnProject: "View Projects",
  btnContact: "Let's Talk",
};

export const aboutContent = {
  badge: "Hello There",
  titlePrefix: "I'm",
  highlights: [
    { label: "Fast", desc: "Performance first" },
    { label: "Clean", desc: "Maintainable code" },
    { label: "Responsive", desc: "Mobile optimized" },
    { label: "Dynamic", desc: "Interactive UI" },
  ],
  skillsTitle: "Technical Skills",
  skillsDesc: "My stack for building digital experiences",
};

export const experienceContent = {
  badge: "Career Profile",
  title: "My Journey",
  workTitle: "Work Experience",
  educationTitle: "Education",
  achievementsTitle: "Achievements",
};

export const projectsContent = {
  badge: "Portfolio",
  title: "Featured Projects",
  description: "Explore my latest work and technical experiments.",
  btnDetails: "View Details",
  btnGithub: "GitHub",
  btnDemo: "Live Demo",
};

export const contactContent = {
  badge: "Get in Touch",
  title: "Contact Me",
  subtitle: "Let's work together!",
  description:
    "I'm currently available for freelance projects and open to full-time opportunities. If you have an idea or need help with your project, feel free to reach out!",
  btnSend: "Send Message",
  formEmail: "Email Address",
  formMessage: "Your Message",
  successTitle: "Message Sent!",
  successDesc: "Thanks for reaching out! I'll get back to you soon.",
};
