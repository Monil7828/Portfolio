export const myProjects = [
  {
    id: 1,
    title: " Spargen – Fashion-forward E-commerce Platform",
    description:
      "A feature-rich full-stack E-commerce website for a clothing brand",
    subDescription: [
      "Built with Next.js for optimized server-side rendering and static site generation",
      "Used MongoDB for user authentication and secure data handling",
      "Stored product and order information using Firebase's Firestore",
      "Designed advanced, user-friendly UI using Tailwind CSS",
      "Integrated Stripe for secure and seamless checkout experience",
    ],
    href: "https://github.com/Monil7828/Ecommerce",
    demoUrl: "https://spargen.onrender.com/", 
    image: "/assets/projects/ecommerce1.png",
    screenshots: [
      "/assets/projects/ecommerce2.png",
      "/assets/projects/ecommerce3.png",
      "/assets/projects/ecommerce4.png",
      "/assets/projects/ecommerce5.png",
      "/assets/projects/ecommerce6.png",
      "/assets/projects/ecommerce7.png",
      "/assets/projects/ecommerce8.png",
      "/assets/projects/ecommerce9.png",
      "/assets/projects/ecommerce10.png",
      "/assets/projects/ecommerce11.png",
    ],
    features: [
      "Responsive Product Catalog with filtering and sorting",
      "Real-time Cart Management with Context API",
      "MongoDB-based Authentication with session handling",
      "Stripe Checkout with real-time payment confirmation",
      "Admin Dashboard for product and order management",
    ],
    challenges: [
      {
        title: "Combining MongoDB Auth with Firebase Data Layer",
        description:
          "Needed a cohesive strategy to link Firebase-stored data with MongoDB-authenticated users",
        solution:
          "Mapped user sessions to Firebase document structures and enforced access control via custom middleware",
      },
      {
        title: "UI Responsiveness and Performance Optimization",
        description:
          "Ensured consistent experience across devices and fast page loads",
        solution:
          "Used Next.js image optimization, dynamic imports, and Tailwind's utility-first approach for efficient styling",
      },
    ],
    lessons: [
      "Gained practical experience combining multiple backend services (MongoDB + Firebase)",
      "Improved front-end performance tuning and UI/UX design principles",
      "Learned to manage real-world e-commerce flows including payments and product management",
    ],
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/next.svg" },
      { id: 2, name: "MongoDB", path: "/assets/logos/mongo.svg" },
      { id: 3, name: "Firebase", path: "/assets/logos/firebase.svg" },
      { id: 4, name: "Stripe", path: "/assets/logos/stripe.jpg" },
      { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: " HectoClash – Real-time Competitive Math Game",
    description:
      "A competitive full-stack multiplayer math game platform featuring real-time gameplay, ranking system, and live match tracking.",
    subDescription: [
      "Built with React and Redux for scalable, component-driven architecture",
      "Implemented real-time multiplayer gameplay using Socket.IO",
      "Designed sleek, responsive UI with Tailwind CSS for smooth user interaction",
      "Integrated Elo-based rating system and turn-based timer mechanics",
      "Used Node.js and Express for the backend and session-based player management",
    ],
    href: "https://github.com/Monil7828/Hecto-Clash",
    demoUrl: "https://hectoclash-1.onrender.com/dashboard",
    image: "/assets/projects/hectoclash1.png",
    screenshots: [
      // "/assets/projects/hectoclash2.png",
      // "/assets/projects/hectoclash3.png",
      // "/assets/projects/hectoclash4.png",
      // "/assets/projects/hectoclash5.png",
    ],
    features: [
      "Real-time multiplayer expression-based math battles",
      "Dynamic problem generation ensuring unique challenges each round",
      "Live leaderboard and rating updates using Elo algorithm",
      "Turn timer, attempt tracking, and modals for win/loss/timeout states",
      "Admin dashboard for match monitoring and player data insights",
    ],
    challenges: [
      {
        title: "Synchronizing Game State Between Players",
        description:
          "Ensuring that both players see the same match status and react to events in real-time",
        solution:
          "Used Socket.IO rooms and server-side game logic to broadcast updates and maintain consistency",
      },
      {
        title: "Implementing Real-time Rating System",
        description:
          "Incorporating a fair and responsive Elo-based rating update after every match",
        solution:
          "Integrated Elo rating logic on the backend with frontend feedback for immediate user visibility",
      },
    ],
    lessons: [
      "Gained hands-on experience with Socket.IO for real-time communication",
      "Improved skills in React state management using Redux in a game setting",
      "Learned how to design fair game logic with rating, matchmaking, and feedback systems",
    ],
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Redux", path: "/assets/logos/redux.png" },
      { id: 3, name: "Socket.IO", path: "/assets/logos/socketio.png" },
      { id: 4, name: "Node.js", path: "/assets/logos/node.svg" },
      { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: " Netflix Clone – Full-Featured Streaming Web App",
    description:
      "A full-featured Netflix-inspired streaming web application with dynamic UI, authentication, and trailer previews.",
    subDescription: [
      "Built using Next.js for SSR and optimized routing",
      "Integrated Firebase Authentication for secure user login and signup",
      "Fetched dynamic movie data using TMDB (The Movie Database) API",
      "Implemented responsive design with Tailwind CSS for seamless viewing across devices",
      "Added real-time video trailers with YouTube player integration",
    ],
    href: "https://github.com/Monil7828/Netflix-clone/tree/main/netflix",
    demoUrl: "https://netflix-clone-monil7828.vercel.app/", 
    image: "/assets/projects/netflix1.png",
    screenshots: [
      // "/assets/projects/netflix2.png",
      // "/assets/projects/netflix3.png",
      // "/assets/projects/netflix4.png",
      // "/assets/projects/netflix5.png",
    ],
    features: [
      "Modern landing page mimicking Netflix’s UI",
      "User authentication via Firebase with protected routes",
      "Dynamic movie and TV show listing using TMDB API",
      "Hover-based trailer playback using React YouTube player",
      "Responsive mobile and desktop layouts using Tailwind CSS",
    ],
    challenges: [
      {
        title: "Handling API Rate Limits from TMDB",
        description:
          "Had to manage frequent data requests without exceeding usage limits",
        solution:
          "Implemented request caching and category-based batching to optimize API usage",
      },
      {
        title: "Dynamic Embedding of YouTube Trailers",
        description:
          "Needed seamless trailer playback on hover without affecting layout or load speed",
        solution:
          "Used React YouTube library with conditional rendering and lazy loading for smoother performance",
      },
    ],
    lessons: [
      "Learned how to integrate third-party media APIs and manage authentication",
      "Gained practical experience with SSR using Next.js",
      "Improved understanding of responsive design and video streaming UX",
    ],
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/next.svg" },
      { id: 2, name: "Firebase", path: "/assets/logos/firebase.svg" },
      { id: 3, name: "TMDB API", path: "/assets/logos/tmdb.png" },
      { id: 4, name: "YouTube API", path: "/assets/logos/youtube.png" },
      { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 4,
    title: " What's Next – Minimalist Productivity Tracker",
    description:
      "A sleek and minimalist productivity app for task management and day planning, built with full-stack modern web technologies.",
    subDescription: [
      "Developed with Next.js and TypeScript for a fast and type-safe experience",
      "Implemented Supabase for authentication and real-time PostgreSQL database management",
      "Designed a clean, responsive UI using Tailwind CSS and Radix UI",
      "Used Zustand for lightweight and reactive state management",
      "Added intuitive task organization with drag-and-drop and priority tagging",
    ],
    href: "https://github.com/Monil7828/what-s-next",
    demoUrl: "https://what-s-next.vercel.app",
    image: "/assets/projects/whatsnext1.png",
    screenshots: [
      // "/assets/projects/whatsnext2.png",
      // "/assets/projects/whatsnext3.png",
      // "/assets/projects/whatsnext4.png",
      // "/assets/projects/whatsnext5.png",
    ],
    features: [
      "Real-time task creation, editing, and deletion",
      "Authentication and user-specific data with Supabase",
      "Organize tasks by priority, status, and tags",
      "Responsive, accessible UI with keyboard navigation support",
      "Minimalist design optimized for both mobile and desktop use",
    ],
    challenges: [
      {
        title: "Building Real-time Sync with Supabase",
        description:
          "Ensured that updates to task lists reflect instantly across sessions and devices",
        solution:
          "Used Supabase’s real-time listeners and RLS (row-level security) policies for per-user data access",
      },
      {
        title: "Managing State Efficiently Without Redux",
        description:
          "Needed a simple yet scalable state solution for UI and task data",
        solution:
          "Adopted Zustand for global state handling with minimal boilerplate and better performance",
      },
    ],
    lessons: [
      "Deepened knowledge of Supabase and real-time database architecture",
      "Improved front-end accessibility and responsiveness practices",
      "Gained confidence in using Zustand and TypeScript in production-level apps",
    ],
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/next.svg" },
      { id: 3, name: "Supabase", path: "/assets/logos/supabase.png" },
      { id: 4, name: "Zustand", path: "/assets/logos/zustand.png" },
      { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];
export const educations = [
  {
  title: "Bachelor of Technology in Computer Science and Engineering",
  institute: "Indian Institute of Technology (ISM), Dhanbad",
  date: "Nov 2022 – Expected May 2026",
  contents: [
    "Pursuing a comprehensive curriculum with emphasis on computer science fundamentals and advanced systems.",
    "Relevant coursework: Data Structures (C++), Algorithm Design and Analysis, Object Oriented Programming (C++), Operating Systems, Probability and Statistics, Theory of Computation.",
    "Engaged in hands-on projects and collaborative assignments to strengthen problem-solving and software engineering skills.",
    "Maintaining a strong academic track and actively exploring areas like AI, Web Development, and System Design."
  ],
},
{
  title: "+2 Senior Secondary Education (PCM)",
  institute: "P.P. Savani Chaitanya Vidya Sankul, Surat",
  date: "April 2021 – April 2022",
  contents: [
    "Focused on Physics, Chemistry, and Mathematics to prepare for competitive engineering entrance exams.",
    "Achieved an 85.23% percentile, demonstrating solid academic grounding and discipline.",
    "Built a strong foundation in logical reasoning, quantitative aptitude, and scientific problem-solving.",
    "Participated in school-level technical competitions and academic forums to foster curiosity and innovation."
  ],
},
{
  title: "Secondary School Education (Class 10)",
  institute: "P.P. Savani Chaitanya Vidya Sankul, Surat",
  date: "April 2019 – April 2020",
  contents: [
    "Completed foundational education with consistent academic excellence across major subjects.",
    "Scored 93.95% percentile, showcasing diligence and academic consistency.",
    "Strengthened core understanding in Mathematics, Science, and English.",
    "Actively participated in co-curricular events to develop leadership and teamwork skills."
  ],
},

];
export const experiences = [
  {
    title: "Front-End Developer",
    job: "Ai2Go Solutions",
    date: "Feb 2025 – May 2025",
    contents: [
      "Redesigned and enhanced the company website UI and added new interactive pages to improve navigation and user experience.",
      "Integrated an AI-powered chatbot to streamline user support and increase user engagement.",
      "Developed a real-time call center dashboard with live analytics, employee management tools, and visual performance metrics.",
      "Collaborated closely with cross-functional teams to ship responsive, accessible, and high-performance web applications.",
      "Utilized React.js, Tailwind CSS, and modern frontend technologies to ensure scalability and performance in AI-driven interfaces.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "May 2025 – Present",
    contents: [
      "Designed and deployed full-stack applications using Next.js, React, Vite, Node.js, and MongoDB, demonstrating end-to-end product ownership.",
      "Built feature-rich web apps including an E-commerce platform, food delivery system, and Netflix-clone to strengthen frontend and backend development expertise.",
      "Focused on learning scalable architectures and maintaining clean, modular code using React hooks, context API, and RESTful services.",
      "Continuously exploring new frameworks, tools, and performance optimization techniques to stay ahead in web development trends.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/918758122759",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/monil-chandgadhiya-626600255/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/monilll__7828/",
    icon: "/assets/socials/instagram.svg",
  },
];
