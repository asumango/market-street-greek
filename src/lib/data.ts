export const navLinks = [
  { label: "Work", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#metrics" },
  { label: "Process", href: "#process" },
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
      "On-site same-day highlight reels so your organization is posting before the event even ends.",
    tag: "Live",
  },
  {
    id: "strategy",
    title: "Content Strategy",
    description:
      "A fully customized content calendar and creative direction built around your organization's specific goals and brand — you get a true content partner, not just another vendor.",
    tag: "Strategy",
  },
];

export const galleryItems = [
  {
    id: 1,
    src: "/photos/gallery-recruitment-week.jpg",
    alt: "Registration candids at Alpha Delta Pi recruitment week",
    category: "Photo",
    title: "Recruitment Week",
    w: 800,
    h: 1000,
  },
  {
    id: 2,
    src: "/photos/gallery-national-convention.jpg",
    alt: "Processional at Alpha Delta Pi National Convention",
    category: "Video",
    title: "National Convention",
    w: 800,
    h: 600,
  },
  {
    id: 3,
    src: "/photos/gallery-philanthropy-day.jpg",
    alt: "Western District session at Alpha Delta Pi conference",
    category: "Photo",
    title: "Philanthropy Day",
    w: 800,
    h: 1000,
  },
  {
    id: 4,
    src: "/photos/gallery-bid-day.jpg",
    alt: "Welcome party celebration at Alpha Delta Pi convention",
    category: "Social",
    title: "Reel: Bid Day",
    w: 800,
    h: 1400,
  },
  {
    id: 5,
    src: "/photos/gallery-formal-night.jpg",
    alt: "Awards banquet at Alpha Delta Pi National Convention",
    category: "Photo",
    title: "Formal Night",
    w: 800,
    h: 600,
  },
  {
    id: 6,
    src: "/photos/gallery-leadership-summit.jpg",
    alt: "Keynote session at Alpha Delta Pi leadership summit",
    category: "Video",
    title: "Leadership Summit",
    w: 800,
    h: 1000,
  },
  {
    id: 7,
    src: "/photos/gallery-chapter-retreat.jpg",
    alt: "Reading social gathering at Alpha Delta Pi chapter retreat",
    category: "Social",
    title: "Reel: Chapter Retreat",
    w: 800,
    h: 1400,
  },
  {
    id: 8,
    src: "/photos/gallery-sisterhood-retreat.jpg",
    alt: "Alumnae dinner at Alpha Delta Pi convention",
    category: "Photo",
    title: "Sisterhood Retreat",
    w: 800,
    h: 1000,
  },
  {
    id: 9,
    src: "/photos/gallery-founders-day.jpg",
    alt: "Dawn podium moment at Alpha Delta Pi convention",
    category: "Social",
    title: "Recap: Founders' Day",
    w: 800,
    h: 600,
  },
];

export const galleryFilters = ["All", "Photo", "Video", "Social"] as const;

export const metrics = [
  { id: "views", label: "Video Views Generated", value: 42, suffix: "M+" },
  { id: "engagement", label: "Avg. Engagement Rate", value: 8.4, suffix: "%" },
  { id: "events", label: "Organization Events Covered", value: 260, suffix: "+" },
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
      "Tell us the event, the vibe, and the goals. We build a custom shot list and content plan around your organization's calendar.",
  },
  {
    number: "02",
    title: "We Show Up & Shoot",
    description:
      "Our team embeds with your organization for the day — photo, video, and social capture happening simultaneously.",
  },
  {
    number: "03",
    title: "Same-Day Highlights",
    description:
      "Before the event's even over, same-day edits are ready to post so your organization stays top of feed.",
  },
  {
    number: "04",
    title: "Full Gallery Delivered",
    description:
      "Within 48 hours, your full photo gallery, recap film, and social cutdowns land in your hands — ready to share.",
  },
];

export const contactEmail = "hello@marketststudios.com";
export const calendlyUrl = "https://calendly.com/marketstreetstudios/30min";
