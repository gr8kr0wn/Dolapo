/*
 * PORTFOLIO DATA: edit this file to add or update anything on the site. No other file needs to change.
 *
 * projects (the video wall). Each project:
 *   id          unique short id
 *   url         original X post URL; the popup plays the post through X's own player
 *   category    "fintech" | "crypto" | "ai" | "other"
 *   brand       brand/project name, or null
 *   title       short heading for the card
 *   description one sentence about the video
 *   poster      preview image (X's own preview frame, or a local file such as "assets/img/x.jpg")
 *   ratio       "16:9" | "9:16" | "1:1"
 *   duration    "m:ss"
 *   likes       like count on X when added
 *   date        "YYYY-MM-DD"
 *   video       OPTIONAL local video file, e.g. "assets/videos/name.mp4" (plays directly instead of X's player)
 */
window.PORTFOLIO = {
  name: "Dolapo",
  handle: "@Oxdolapo",
  email: "jusdola1@gmail.com",
  socials: {
    x: "https://x.com/Oxdolapo",
    tiktok: "https://www.tiktok.com/@dolapo.ugc",
    instagram: "https://www.instagram.com/jus_dola"
  },

  // Videos shown on the tilted hero cards (light and dark mode)
  heroCards: ["cleva-ach", "genlayer-ep7", "spenda-2"],

  // What she did on every video (a project can override this with its own "contribution")
  contribution: ["Script", "On camera", "Edit"],

  // Work is shown grouped in this order. Each project's "category" must be one of these keys.
  categories: [
    { key: "fintech", label: "Fintech",       intro: "App walkthroughs and real-life use cases." },
    { key: "crypto",  label: "Web3 & Crypto", intro: "Project explainers, ecosystem videos and product demos." },
    { key: "ai",      label: "AI",            intro: "AI platforms and AI + blockchain explainers." },
    { key: "other",   label: "Other",         intro: "Contest entries and creative pieces." }
  ],

  projects: [
    {
      id: "gloam-privacy", url: "https://x.com/Oxdolapo/status/2122024101011452018",
      category: "crypto", brand: "Gloam", title: "Gloam: private payments",
      description: "How much strangers can see on public blockchains, and making private payments with Gloam.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2122023873331724288/img/vLhoLr-1bUB02k_K.jpg",
      ratio: "16:9", duration: "1:41", likes: 175, date: "2026-11-15"
    },
    {
      id: "spenda-2", url: "https://x.com/Oxdolapo/status/2111321383376695492",
      category: "fintech", brand: "Spenda", title: "Spenda 2.0: sharing out payments",
      description: "How Spenda 2.0 made it easier to send everyone their share after freelance work.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2111321177159348225/img/cqrhSG-mG2RXC4zT.jpg",
      ratio: "9:16", duration: "1:34", likes: 234, date: "2026-10-17"
    },
    {
      id: "genlayer-staking", url: "https://x.com/Oxdolapo/status/2110234806982230205",
      category: "crypto", brand: "GenLayer", title: "GenLayer: choosing validators",
      description: "Why validator choice matters when staking GEN, and whether to spread a stake across several.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2110234525309530112/img/fDFaPMqOOg8893cf.jpg",
      ratio: "16:9", duration: "1:39", likes: 131, date: "2026-10-14"
    },
    {
      id: "cleva-data", url: "https://x.com/Oxdolapo/status/2097909785043554804",
      category: "fintech", brand: "Cleva", title: "Cleva: buying data in the app",
      description: "Funding a Cleva account and buying data directly, with 3% off data purchases.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2097909481682440192/img/zIx0Rmci79QDeYaV.jpg",
      ratio: "16:9", duration: "1:39", likes: 148, date: "2026-09-10"
    },
    {
      id: "genlayer-points", url: "https://x.com/Oxdolapo/status/2091028624132509924",
      category: "crypto", brand: "GenLayer", title: "GenLayer Points explained",
      description: "Season 1 has started, weekly conversions are live, and how contributions are now tracked.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2091028169344110592/img/R7zX_jj4WzzDea9v.jpg",
      ratio: "16:9", duration: "1:49", likes: 173, date: "2026-08-22"
    },
    {
      id: "genlayer-ep21", url: "https://x.com/Oxdolapo/status/2086680894878646613",
      category: "ai", brand: "GenLayer", title: "Learning GenLayer With Me, Ep. 21",
      description: "What GenLayer is, who it's for and why it exists, in the simplest terms.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2086680631237296128/img/c7wfKfVad5CyWU0T.jpg",
      ratio: "16:9", duration: "2:04", likes: 143, date: "2026-08-10"
    },
    {
      id: "cleva-merch", url: "https://x.com/Oxdolapo/status/2075090392391754104",
      category: "fintech", brand: "Cleva", title: "Unboxing Cleva merch",
      description: "Unpacking a Cleva merch box on camera.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2075090182273921024/img/ktgE0pscXy_pJ3NF.jpg",
      ratio: "16:9", duration: "1:16", likes: 102, date: "2026-07-09"
    },
    {
      id: "cleva-ach", url: "https://x.com/Oxdolapo/status/2065307119377600690",
      category: "fintech", brand: "Cleva", title: "Cleva: receiving USD with ACH",
      description: "Getting paid internationally, with Cleva's ACH support for people who earn in dollars.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2065306930982068224/img/rXVOTSNjtpcL8t00.jpg",
      ratio: "16:9", duration: "1:08", likes: 252, date: "2026-06-12"
    },
    {
      id: "insta-share", url: "https://x.com/Oxdolapo/status/2060598356078981291",
      category: "other", brand: null, title: "Contest submission",
      description: "A submission first shared on Instagram, reposted to X.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2060598208422641668/img/uwmK23iztpgO-ssS.jpg",
      ratio: "16:9", duration: "0:55", likes: 141, date: "2026-05-30"
    },
    {
      id: "online-tasks", url: "https://x.com/Oxdolapo/status/2058062502445941079",
      category: "crypto", brand: null, title: "Online tasks for crypto",
      description: "Would you do online tasks for crypto? A quick vertical take.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2058062246987603968/img/2uQmFyCdLYHSPBHP.jpg",
      ratio: "9:16", duration: "1:02", likes: 111, date: "2026-05-23"
    },
    {
      id: "spoutfi-loans", url: "https://x.com/Oxdolapo/status/2056608553863929916",
      category: "crypto", brand: "SpoutFi", title: "SpoutFi: borrow like the rich",
      description: "Why the ultra-rich borrow against assets instead of selling, and SpoutFi opening that to everyone.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2056608007060889600/img/e9xlPmQhAlFlvosi.jpg",
      ratio: "16:9", duration: "1:17", likes: 115, date: "2026-05-19"
    },
    {
      id: "genlayer-ep7", url: "https://x.com/Oxdolapo/status/2054799574217236942",
      category: "ai", brand: "GenLayer", title: "GenLayer Ep. 7: AI on the blockchain",
      description: "AI doesn't always give the same answer twice. How GenLayer reaches consensus anyway.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2054799289012920320/img/ZnfQA9NwEMJ6DZq6.jpg",
      ratio: "16:9", duration: "1:38", likes: 96, date: "2026-05-14"
    },
    {
      id: "spoutfi-cake", url: "https://x.com/Oxdolapo/status/2054074881025732934",
      category: "crypto", brand: "SpoutFi", title: "SpoutFi: eat your cake, keep it",
      description: "Borrowing against your stocks at 0% interest while keeping the upside.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2054074743846838272/img/lbc-MpKl62wgaxUw.jpg",
      ratio: "16:9", duration: "1:04", likes: 116, date: "2026-05-12"
    },
    {
      id: "walletconnect-april", url: "https://x.com/Oxdolapo/status/2053345446957814098",
      category: "crypto", brand: "WalletConnect", title: "WalletConnect: April recap",
      description: "A month of WalletConnect, from partnerships to events, in one video.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2053345324790423553/img/7_KQ9Fy_H0P8sy5R.jpg",
      ratio: "1:1", duration: "1:16", likes: 75, date: "2026-05-10"
    },
    {
      id: "roxom-yield", url: "https://x.com/Oxdolapo/status/2047910524281585691",
      category: "crypto", brand: "Roxom", title: "Roxom: put idle stables to work",
      description: "Depositing stablecoins on Roxom to earn monthly bitcoin dividends instead of leaving money idle.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2047909273691447296/img/ubBAJdgLSZNFYLTz.jpg",
      ratio: "16:9", duration: "1:30", likes: 96, date: "2026-04-25"
    }
  ],

  // Brand explainer case studies. "videos" are project ids from the list above.
  caseStudies: [
    {
      brand: "GenLayer", tag: "AI + Web3",
      title: "Learning GenLayer With Me",
      line: "A running explainer series that makes an AI-native blockchain easy to follow.",
      videos: ["genlayer-ep7", "genlayer-ep21", "genlayer-points", "genlayer-staking"],
      stats: [["21+", "episodes"], ["6.2K", "views on Ep. 7"], ["543", "likes on these 4"]],
      proof: { quote: "amazing", by: "@GenLayer", url: "https://x.com/GenLayer/status/2054842804195512616" }
    },
    {
      brand: "Cleva", tag: "Fintech",
      title: "Cleva in everyday moments",
      line: "Real uses on camera: getting paid in USD, buying data, unboxing the merch.",
      videos: ["cleva-ach", "cleva-data", "cleva-merch"],
      stats: [["3", "videos"], ["502", "likes"], ["252", "on the top post"]]
    },
    {
      brand: "SpoutFi", tag: "DeFi",
      title: "Borrowing against stocks, simplified",
      line: "A DeFi brokerage pitch turned into a simple 'eat your cake and keep it' story.",
      videos: ["spoutfi-cake", "spoutfi-loans"],
      stats: [["2", "videos"], ["231", "likes"]]
    }
  ],

  packages: [
    { icon: "video",  title: "Single video",        line: "One explainer, scripted, shot and edited." },
    { icon: "thread", title: "Video + thread",       line: "A video plus an X thread that carries it further." },
    { icon: "star",   title: "Monthly ambassador",   line: "Ongoing videos and posts as your voice for the month." },
    { icon: "custom", title: "Custom",               line: "Tell me what you need and we'll shape it together." }
  ],

  covers: ["Fintech", "Crypto & Web3", "AI", "UGC", "X threads"],

  tools: [
    { icon: "scissors", name: "CapCut" },
    { icon: "palette",  name: "Canva" },
    { icon: "sparkle",  name: "Claude / ChatGPT" },
    { icon: "chart",    name: "X Analytics" }
  ],

  skills: [
    { group: "Writing",    items: ["Hook writing", "Scriptwriting", "Captioning", "Simplifying technical topics"] },
    { group: "Production", items: ["Pacing", "Voiceover", "Thumbnail design", "Diagram storytelling"] },
    { group: "Strategy",   items: ["Series planning", "Project engagement", "Analytics reading", "Pitching to Web3 projects"] }
  ]
};
