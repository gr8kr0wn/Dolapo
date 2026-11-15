/*
 * PORTFOLIO DATA: edit this file to add or update work. No other file needs to change.
 *
 * Each project:
 *   id          unique short id
 *   url         original X post URL (required); the popup plays the post through X's own player
 *   category    "fintech" | "crypto" | "ai" | null
 *   format      "video" | "photo"
 *   brand       brand/project name, or null
 *   title       short heading for the card
 *   description one sentence about the content
 *   caption     the post's caption as written (shown in the popup)
 *   poster      preview image (X's own preview frame, or a local file such as "assets/img/x.jpg")
 *   ratio       "16:9" | "9:16" | "photo"
 *   duration    "m:ss", for video posts
 *   likes       like count on X when added (shown on the card)
 *   date        "YYYY-MM-DD"
 *   video       OPTIONAL local video file, e.g. "assets/videos/cleva-ach.mp4".
 *               If set, the popup plays it directly instead of X's player.
 */
window.PORTFOLIO = {
  name: "Dolapo",
  handle: "@Oxdolapo",
  profileUrl: "https://x.com/Oxdolapo",
  email: "jusdola1@gmail.com",

  categories: [
    { key: "all",     label: "All" },
    { key: "fintech", label: "Fintech" },
    { key: "crypto",  label: "Crypto & Web3" },
    { key: "ai",      label: "AI" }
  ],

  projects: [
    {
      id: "spenda-2",
      url: "https://x.com/Oxdolapo/status/2111321383376695492",
      category: "fintech", format: "video", brand: "Spenda",
      title: "Spenda 2.0: sharing out payments",
      description: "How Spenda 2.0 made it easier to send everyone their share after freelance work.",
      caption: "Freelance work is stressful enough.\n\nChasing payments is one thing, figuring out how to send everyone their share is another\n\nSpenda 2.0 made that part a lot easier for me.\n\nHere's how I used it\n\n#MySpenda @MySpenda",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2111321177159348225/img/cqrhSG-mG2RXC4zT.jpg",
      ratio: "9:16", duration: "1:34", likes: 234, date: "2026-10-17"
    },
    {
      id: "genlayer-staking",
      url: "https://x.com/Oxdolapo/status/2110234806982230205",
      category: "crypto", format: "video", brand: "GenLayer",
      title: "GenLayer: choosing validators",
      description: "Why validator choice matters when staking GEN, and whether to spread a stake across several.",
      caption: "Two people. Same amount of GEN. Different choices.\n\nStaking is more than locking tokens, and choosing the right validator matters.\n\nIf I were delegating my GEN on @GenLayer, I'd look at validator performance and consider spreading my stake across several reliable validators.\n\nWhat would you choose: one validator or several??",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2110234525309530112/img/fDFaPMqOOg8893cf.jpg",
      ratio: "16:9", duration: "1:39", likes: 131, date: "2026-10-14"
    },
    {
      id: "cleva-data",
      url: "https://x.com/Oxdolapo/status/2097909785043554804",
      category: "fintech", format: "video", brand: "Cleva",
      title: "Cleva: buying data in the app",
      description: "Funding a Cleva account and buying data directly, with 3% off data purchases.",
      caption: "Why are you still calling someone whenever your data finishes?\n\nWith @clevabanking, you can fund your account, buy your data directly and enjoy 3% off your data purchase.\n\nNo more having to ask someone to get you data, you can easily do that yourself.\n\nDownload Cleva and use my referral code https://app.getcleva.com/refer/DOLA754 to sign up.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2097909481682440192/img/zIx0Rmci79QDeYaV.jpg",
      ratio: "16:9", duration: "1:39", likes: 148, date: "2026-09-10"
    },
    {
      id: "genlayer-points",
      url: "https://x.com/Oxdolapo/status/2091028624132509924",
      category: "crypto", format: "video", brand: "GenLayer",
      title: "GenLayer Points explained",
      description: "Season 1 has started, weekly conversions are live, and how contributions are now tracked.",
      caption: "GenLayer Points are officially here\n\nSeason 1 has started, weekly conversions are live, and a lot is changing around how contributions are tracked.\n\nIf you've been confused about what happened to your points, this clears things up.\n\nEverything you did counts. Now, what you do next counts too… @GenLayer",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2091028169344110592/img/R7zX_jj4WzzDea9v.jpg",
      ratio: "16:9", duration: "1:49", likes: 173, date: "2026-08-22"
    },
    {
      id: "genlayer-ep21",
      url: "https://x.com/Oxdolapo/status/2086680894878646613",
      category: "crypto", format: "video", brand: "GenLayer",
      title: "Learning GenLayer With Me, Ep. 21",
      description: "What GenLayer is, who it's for and why it exists, in the simplest terms.",
      caption: "What is @GenLayer?\n\nWho is it for?\n\nAnd why does it exist?\n\nEpisode 21 of Learning GenLayer With Me is about answering those three questions in the simplest way I can.\n\nIf you've been curious about GenLayer but still struggle to explain it, this one is for you.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2086680631237296128/img/c7wfKfVad5CyWU0T.jpg",
      ratio: "16:9", duration: "2:04", likes: 143, date: "2026-08-10"
    },
    {
      id: "cleva-merch",
      url: "https://x.com/Oxdolapo/status/2075090392391754104",
      category: "fintech", format: "video", brand: "Cleva",
      title: "Unboxing Cleva merch",
      description: "Unpacking a Cleva merch box on camera.",
      caption: "Unpackage my @clevabanking merch with me",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2075090182273921024/img/ktgE0pscXy_pJ3NF.jpg",
      ratio: "16:9", duration: "1:16", likes: 102, date: "2026-07-09"
    },
    {
      id: "cleva-ach",
      url: "https://x.com/Oxdolapo/status/2065307119377600690",
      category: "fintech", format: "video", brand: "Cleva",
      title: "Cleva: receiving USD with ACH",
      description: "Getting paid internationally, with Cleva's ACH support for people who earn in dollars.",
      caption: "Getting paid internationally shouldn't feel like a guessing game.\n\nFor freelancers, creators, and remote workers, receiving USD payments is often just as important as earning them.\n\nOne thing I like about @clevabanking is that it supports ACH payments, making it easier to receive USD from international clients, employers, and supported platforms.\n\nIf you earn in dollars, it's definitely worth checking out.",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2065306930982068224/img/rXVOTSNjtpcL8t00.jpg",
      ratio: "16:9", duration: "1:08", likes: 252, date: "2026-06-12"
    },
    {
      id: "insta-share",
      url: "https://x.com/Oxdolapo/status/2060598356078981291",
      category: null, format: "video", brand: null,
      title: "Contest submission",
      description: "A submission first shared on Instagram, reposted to X.",
      caption: "Submitted this via insta but I'm sharing it here\n\nAnd also a like and comment would really help\n\nLink in CS ….thank you mutuals",
      poster: "https://pbs.twimg.com/amplify_video_thumb/2060598208422641668/img/uwmK23iztpgO-ssS.jpg",
      ratio: "16:9", duration: "0:55", likes: 141, date: "2026-05-30"
    },
    {
      id: "ai-training",
      url: "https://x.com/Oxdolapo/status/2111716177617535245",
      category: "ai", format: "photo", brand: null,
      title: "AI training account management",
      description: "Managing accounts across AI training platforms like Outlier, Handshake, Mercor and DataAnnotation.",
      caption: "If you're exploring AI training opportunities but don't have time to manage your accounts, I can help.\n\nI specialize in managing accounts across multiple platforms, including:\n\n→ Outlier\n→ Handshake\n→ Micro1\n→ Mercor\n→ AfterQuery\n→ OneForma\n→ Snorkel\n→ DataAnnotation",
      poster: "https://pbs.twimg.com/media/HU5Sq0QWgAA2-rW.jpg",
      ratio: "photo", likes: 71, date: "2026-10-18"
    }
  ],

  services: [
    { icon: "video",   title: "Short-form video",  line: "Videos that explain, demo or promote a product." },
    { icon: "phone",   title: "Fintech videos",    line: "App walkthroughs, feature demos and explainers." },
    { icon: "cube",    title: "Crypto & Web3",     line: "Project intros, ecosystem explainers, campaigns." },
    { icon: "user",    title: "UGC-style content", line: "Natural videos that show how a product works." },
    { icon: "x",       title: "X content",         line: "Posts, threads and campaign materials." },
    { icon: "sparkle", title: "AI & tech",         line: "Audience-first content about AI platforms." }
  ],

  strengths: ["Video first", "Plain language", "Fintech + crypto", "Native to X", "Video + writing", "AI platforms"]
};
