export const navLinks = [
  { label: "Work", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#metrics" },
  { label: "Process", href: "#process" },
  { label: "Stories", href: "#testimonials" },
];

export const services = [
  {
    id: "photo",
    title: "Event Photography",
    description:
      "Full-day coverage of recruitment, formals, philanthropy, and sisterhood events — edited and delivered fast.",
    tag: "Photo",
  },
  {
    id: "longform",
    title: "Conference Recap Films",
    description:
      "Cinematic long-form videos that capture the scale and emotion of national conventions and leadership conferences.",
    tag: "Video",
  },
  {
    id: "vertical",
    title: "Vertical Social Content",
    description:
      "Reels and TikToks built for the feed — fast cuts, trending audio, and hooks that stop the scroll in the first second.",
    tag: "Social · 9:16",
  },
  {
    id: "horizontal",
    title: "Horizontal & YouTube Content",
    description:
      "Wider-format storytelling for recaps, member spotlights, and campaign films built to live on YouTube and the web.",
    tag: "Social · 16:9",
  },
  {
    id: "live",
    title: "Live & Same-Day Edits",
    description:
      "On-site same-day highlight reels so your chapter is posting before the event even ends.",
    tag: "Live",
  },
  {
    id: "strategy",
    title: "Content Strategy",
    description:
      "A posting calendar and creative direction built around your chapter's calendar, recruitment goals, and brand.",
    tag: "Strategy",
  },
];

export const galleryItems = [
  { id: 1, seed: "ms-recruitment-1", category: "Photo", title: "Recruitment Week", w: 800, h: 1000 },
  { id: 2, seed: "ms-conference-1", category: "Video", title: "National Convention", w: 800, h: 600 },
  { id: 3, seed: "ms-philanthropy-1", category: "Photo", title: "Philanthropy Day", w: 800, h: 1000 },
  { id: 4, seed: "ms-social-1", category: "Social", title: "Reel: Bid Day", w: 800, h: 1400 },
  { id: 5, seed: "ms-formal-1", category: "Photo", title: "Formal Night", w: 800, h: 600 },
  { id: 6, seed: "ms-conference-2", category: "Video", title: "Leadership Summit", w: 800, h: 1000 },
  { id: 7, seed: "ms-social-2", category: "Social", title: "Reel: Chapter Retreat", w: 800, h: 1400 },
  { id: 8, seed: "ms-sisterhood-1", category: "Photo", title: "Sisterhood Retreat", w: 800, h: 1000 },
  { id: 9, seed: "ms-social-3", category: "Social", title: "Recap: Founders' Day", w: 800, h: 600 },
];

export const galleryFilters = ["All", "Photo", "Video", "Social"] as const;

export const metrics = [
  { id: "views", label: "Video Views Generated", value: 42, suffix: "M+" },
  { id: "engagement", label: "Avg. Engagement Rate", value: 8.4, suffix: "%" },
  { id: "events", label: "Chapter Events Covered", value: 260, suffix: "+" },
  { id: "delivery", label: "Avg. Turnaround", value: 48, suffix: "hrs" },
];

export const engagementBars = [
  { label: "Reels", value: 92 },
  { label: "Recap Films", value: 78 },
  { label: "Stories", value: 64 },
  { label: "Photo Sets", value: 71 },
  { label: "Live Cuts", value: 85 },
];

export const processSteps = [
  {
    number: "01",
    title: "Book Your Coverage",
    description:
      "Tell us the event, the vibe, and the goals. We build a custom shot list and content plan around your chapter calendar.",
  },
  {
    number: "02",
    title: "We Show Up & Shoot",
    description:
      "Our team embeds with your chapter for the day — photo, video, and social capture happening simultaneously.",
  },
  {
    number: "03",
    title: "Same-Day Highlights",
    description:
      "Before the event's even over, a same-day edit is ready to post so your chapter stays top of feed.",
  },
  {
    number: "04",
    title: "Full Gallery Delivered",
    description:
      "Within 48 hours, your full photo gallery, recap film, and social cutdowns land in your hands — ready to share.",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Market Street doesn't just show up with a camera — they understand chapter culture. Our convention film had sisters in tears watching it back.",
    name: "Chapter Communications Director",
    org: "Alpha Delta Pi, National Convention",
  },
  {
    id: 2,
    quote:
      "Recruitment week content used to take us weeks to piece together. Now we have same-day reels going up while PNMs are still on campus.",
    name: "VP of Recruitment",
    org: "Alpha Delta Pi Chapter",
  },
  {
    id: 3,
    quote:
      "The turnaround is genuinely unmatched. We had our full philanthropy gallery and a recap video in our inbox less than two days later.",
    name: "Philanthropy Chair",
    org: "Alpha Delta Pi Chapter",
  },
  {
    id: 4,
    quote:
      "It's the first time our social content has actually looked like it belongs on a national brand's page instead of a phone camera roll.",
    name: "Social Media Chair",
    org: "Alpha Delta Pi Chapter",
  },
];

export const contactEmail = "hello@marketststudios.com";
