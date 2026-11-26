export type Project = {
  name: string;
  slug: string;
  story: string[];
  date: string;
  category: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  color: string;
  image?: string;
};

export const projects: Project[] = [
  {
    name: "heyenso",
    date: "2026-04",
    category: "ai product",
    slug: "heyenso",
    story: [
      "marketing research can mean juggling websites, audience insights, competitors, and campaign ideas across a dozen tabs. i built heyenso around the idea of a marketing team that can bring that scattered work into one place.",
      "i used next.js, typescript, and firebase to build the workspace, with apify for research and gemini for ai-powered analysis. building it pushed me to think about how specialized agents share context and turn research into something useful.",
    ],
    description:
      "an ai marketing team for research, audience insights, and campaign planning.",
    tags: ["next.js", "typescript", "firebase", "apify", "gemini"],
    links: [
      { label: "website", href: "https://heyenso.com" },
      { label: "devpost", href: "https://devpost.com/software/heyenso-4cxfn6" },
      { label: "youtube", href: "https://www.youtube.com/watch?v=iGUi2Q8f64w" },
    ],
    color: "#e9dfd2",
    image: "/projects/heyenso-cover.webp",
  },
  {
    image: "/projects/clues-in-common-cover.webp",
    name: "clues in common",
    date: "2026-10-25",
    category: "game",
    slug: "clues-in-common",
    story: [
      "clues in common is a cooperative mystery built for twitch, where creators and their communities can investigate together. i wanted the experience to feel like something people could enjoy as a group rather than a game happening beside the stream.",
      "i worked with react, twitch extensions, and firebase to bring the shared experience together. the project gave me a chance to think about storytelling, participation, and the small details that help a live community play together.",
    ],
    description:
      "a cooperative mystery experience that brings twitch creators and their communities together.",
    tags: ["react", "twitch extensions", "firebase"],
    links: [
      {
        label: "devpost",
        href: "https://devpost.com/software/clues-in-common",
      },
      {
        label: "github",
        href: "https://github.com/vikramadityaiwnl/clues-in-common",
      },
      { label: "youtube", href: "https://www.youtube.com/watch?v=ZIoqFgItWzo" },
    ],
    color: "#e5e3dc",
  },
  {
    name: "secondshed",
    date: "2026-08",
    category: "mobile app",
    slug: "secondshed",
    story: [
      "secondshed explores how a wellness routine can feel more engaging through the sense of progress found in games. it brings training and recovery together with quests, streaks, and achievements.",
      "i built the mobile experience with react native, expo, and firebase. working on it helped me think about how to make consistency feel encouraging while giving recovery a place in the journey.",
    ],
    description:
      "a gamified wellness companion for training, recovery, and building consistent habits.",
    tags: ["react native", "expo", "firebase"],
    links: [
      { label: "devpost", href: "https://devpost.com/software/secondshed" },
      { label: "youtube", href: "https://youtu.be/CaQrVcjrZLI" },
    ],
    color: "#e9e3db",
    image: "/projects/secondshed-cover.webp",
  },
  {
    name: "focusforge",
    date: "2024-12",
    category: "browser extension",
    slug: "focusforge",
    story: [
      "when chrome introduced its built-in on-device ai, i wanted to explore how it could help with the work already happening in the browser. focusforge became a productivity companion for managing tasks and staying focused.",
      "i built the extension with react, vite, and typescript, and explored chrome’s built-in ai for chatting about tasks, summarizing, and proofreading. it was an opportunity to learn how on-device assistance could fit into an everyday workflow.",
    ],
    description:
      "a productivity companion for focused work, tasks, and ai-assisted browsing.",
    tags: ["react", "vite", "typescript", "chrome built-in ai"],
    links: [
      { label: "devpost", href: "https://devpost.com/software/focusforge" },
      { label: "youtube", href: "https://youtu.be/ptA3C8oWqa4" },
    ],
    color: "#e5e2da",
    image: "/projects/focusforge-cover.webp",
  },
  {
    name: "geoestate",
    date: "2024-11",
    category: "mobile app",
    slug: "geoestate",
    story: [
      "geoestate was one of my first experiences building with a larger team, and it introduced me to people who became good friends. we wanted to make property and neighborhood exploration more immersive through maps and 3d views.",
      "the project was a challenge: our team spent two days and nights gathering open geospatial data, putting it into postgresql, creating apis, and connecting that data to the frontend. we used polygons to highlight whatever a person searched for, whether that was an entire building or a park.",
      "i worked on the frontend with react native, expo, three.js, and firebase. getting so many pieces to work together taught me a lot about maps, data, and collaborating through a demanding build.",
    ],
    description:
      "explore properties and neighborhoods through immersive 3d maps and local insights.",
    tags: ["react native", "expo", "three.js", "firebase", "postgresql"],
    links: [
      { label: "website", href: "https://www.geo.estate" },
      {
        label: "devpost",
        href: "https://devpost.com/software/geoestate-1uqjc7",
      },
      { label: "github", href: "https://github.com/geoestateapp/frontend" },
      { label: "youtube", href: "https://www.youtube.com/watch?v=-iV_1kjLIg8" },
    ],
    color: "#e2e6df",
    image: "/projects/geoestate-video-cover.webp",
  },
  {
    name: "chats got talent",
    date: "2024-11",
    category: "twitch extension",
    slug: "chats-got-talent",
    story: [
      "a friend invited me to join chats got talent while it was already in progress. the idea was to bring a talent show to twitch, giving viewers a way to join a queue and take the stage during a stream.",
      "working with the team gave me a chance to contribute to a live, community-driven experience built with javascript, html, css, twitch, and google cloud. it showed me how much coordination goes into making an interaction feel natural for both the streamer and the audience.",
    ],
    description:
      "a twitch talent queue that helps streamers bring their community onto the stage.",
    tags: ["javascript", "html", "css", "twitch", "google cloud"],
    links: [
      { label: "website", href: "https://chats-got-talent-website.vercel.app" },
      {
        label: "devpost",
        href: "https://devpost.com/software/chats-got-talent",
      },
      { label: "youtube", href: "https://www.youtube.com/watch?v=h6LD3oh4cHA" },
    ],
    color: "#e8dedb",
    image: "/projects/chats-got-talent-cover.webp",
  },
  {
    name: "walklog",
    date: "2026-11",
    category: "mobile app",
    slug: "walklog",
    story: [
      "walklog was built for the people who notice the work that needs doing: carpenters, plumbers, independent inspectors, and others walking through a property on their own.",
      "i wanted to make it easier to capture observations in the moment and turn them into an organized punch list or report. with react native, expo, and firebase, i built an offline-first mobile experience around voice, photos, and video, keeping the original context close to each item.",
    ],
    description:
      "an offline-first walkthrough companion that turns site observations into structured punch lists and reports.",
    tags: ["react native", "expo", "firebase"],
    links: [
      { label: "github", href: "https://github.com/vikramadityaiwnl/walklog" },
      {
        label: "youtube",
        href: "https://www.youtube.com/watch?v=WytjSCY0OXg",
      },
      { label: "devpost", href: "https://devpost.com/software/walklog" },
    ],
    color: "#e7e3da",
    image: "/projects/walklog.png",
  },
  {
    name: "speedtasks",
    date: "2026-02",
    category: "web app",
    slug: "speed-tasks",
    story: [
      "i created speedtasks to manage my own work more efficiently. i wanted one place to see what needed doing and keep projects moving without adding unnecessary complexity.",
      "using next.js, typescript, and firebase, i brought personal tasks and project work into a workspace with boards and lists. building it helped me focus on the everyday details that make a task manager useful over time.",
    ],
    description: "a workspace for organizing tasks and projects.",
    tags: ["next.js", "firebase", "typescript"],
    links: [{ label: "website", href: "https://speedtasks.vercel.app/" }],
    color: "#e5e2da",
    image: "/projects/speedtasks-cover.webp",
  },
  {
    image: "/projects/veykor-cover.svg",
    name: "veykor",
    date: "2026-10-29",
    category: "developer tool",
    slug: "veykor",
    story: [
      "veykor began with a problem i was having: managing multiple ai agents across projects and helping them communicate with one another. for the meta global ai developer hackathon, i built an environment where those agents could work together as a team.",
      "powered by meta’s muse code cli, veykor brings delegation, collaboration, and code review into one workspace while keeping the developer informed and in control. i built the interface with react, vite, and typescript, exploring how a multi-agent workflow could feel more coordinated and approachable.",
    ],
    description:
      "an agent development environment for collaboration, delegation, and review.",
    tags: ["react", "vite", "typescript", "muse code"],
    links: [
      { label: "github", href: "https://github.com/vikramadityaiwnl/veykor" },
      { label: "youtube", href: "https://www.youtube.com/watch?v=olnVUH_Oyf8" },
    ],
    color: "#e2e3e4",
  },
];
