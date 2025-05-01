import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yaseen",
  initial: "S",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:"Final year B.Tech CSBS student. I love building projects and exploring new tech. Currently diving into Web3 and sharing my journey online.",
  summary:
    "At the middle of 2025, I’m wrapping up my final year of B.Tech in Computer Science and Business Systems while diving full-time into building and experimenting with tech projects. In the past, I’ve built a variety of cool projects, interned at tech startups, and participated in several hackathons. Currently, I’m immersing myself in Web3 and excited to explore the endless possibilities in this space",
  avatarUrl: "/me.webp",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Tailwind CSS",
    "Node.js",
    "Prisma",
    "Mongodb",
    "Postgres",
    "Redis",
    "Kafka",
    "AWS",
    "Docker",
    "CI/CD",
    "Kubernetes",
    "Java",
    "Solidity",
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "mohammedyaseen.dev@gmail.com",
    tel: "+91 9361099113",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Mohammedyaseen29",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammed-yaseen-72239a22a/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/yaseen17861786",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mohammedyaseen.dev@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "GlamCam",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "data:image/png;base64,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  ",
      start: "Oct 2024",
      end: "present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Summer Internship (NIT)",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Machine learning",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/National_Institute_of_Technology%2C_Tiruchirappalli.svg/1200px-National_Institute_of_Technology%2C_Tiruchirappalli.svg.png",
      start: "July 2023",
      end: "August 2023",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Remote",
      title: "developed websites",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjp1hAEcsPo38Ulf0uPa3ZhCMklm0dDz1zzYJErTl_-wYKj4WYS0YOfTWRal5z7ULT0I&usqp=CAU",
      start: "Dec 2024",
      end: "Jan 2025",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s5",
      logoUrl: "/buildspace.jpg",
      start: "2024",
      end: "2024",
    },
    {
      school: "Cyfrin Updraft",
      href: "https://updraft.cyfrin.io/",
      degree: "Smart Contract Development and Auditing",
      logoUrl: "data:image/jpeg;base64,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",
      start: "2023",
      end: "2024",
    },
    {
      school: "100xDevs",
      href: "https://100xdevs.com/",
      degree: "Cohort 3",
      logoUrl: "data:image/png;base64,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",
      start: "2024",
      end: "2025",
    },
    {
      school: "Anna University (SCE)",
      href: "#",
      degree: "Bachelor of Technology (CSBS)",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCT1IOlpn7nbuMP7LVOiALaIFUbuIsZ4UGw&s",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "ZenFlow",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Web based solana wallet",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Thought-vault",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Doodle-Dock",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
