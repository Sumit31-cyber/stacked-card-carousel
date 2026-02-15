export interface Author {
  name: string;

  image_url: string;
}

export interface DataType {
  id: number;
  title: string;
  short_description: string;
  author: Author;
  content: string;
  hero_image: string;
  created_at: string;
}

export const DATA: DataType[] = [
  {
    id: 0,
    title: "Remote Work Is Quietly Creating Two Classes of Employees",
    short_description: "Visibility bias is becoming the new office politics.",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Dev Malhotra",
      image_url:
        "https://i.pinimg.com/736x/3b/35/66/3b35668121c0c482408475490a0197fe.jpg",
    },
    hero_image:
      "https://i.pinimg.com/1200x/79/8b/95/798b954796c5abfcda5d14712863c61c.jpg",
    content:
      "Flexibility and independence were promised by remote work, and they were fulfilled. However, it also created a fresh rift. Workers are moving more quickly when they keep track of their work, communicate in a proactive manner, and show off their accomplishments. Others who contribute subtly but without indicating it run the danger of being missed. Perception frequently shapes potential in remote teams. Structured transparency, not self-promotion, is the answer. Bias is lessened by async communication, weekly updates, transparent documentation, and quantifiable results. Clarity is key in remote settings.",
  },

  {
    id: 1,
    title: "The Affordability Crisis That Could Crush Startup Founders in 2026",
    short_description:
      "Rising rent, SaaS inflation, and shrinking runway are squeezing early-stage builders.",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Kabir Verma",
      image_url:
        "https://i.pinimg.com/736x/b2/a5/c5/b2a5c58cb271445de80688a46464aeba.jpg",
    },
    hero_image:
      //   "https://i.pinimg.com/736x/3d/12/cb/3d12cb70ebdb3337a316ec4a773c30dd.jpg",
      //   "https://i.pinimg.com/736x/62/9b/6e/629b6e6d060aa984cbdf48b585a39724.jpg",
      "https://i.pinimg.com/1200x/07/09/eb/0709eb53da1c0fd7462b9f6a913d8147.jpg",
    content:
      "Startup expenses are subtly increasing. Cloud infrastructure expenditures are growing more quickly than anticipated, software subscriptions are piling up, and office rent in big locations is still rising. Investors are requesting profitability sooner, and funding cycles are slowing down. Early-stage founders are put in a risky situation as a result. Discipline, not panic, is the answer. Examine the SaaS stack you use. Substitute variable expenses for fixed ones. Create remote teams in areas with lower costs. Prioritise revenue over vanity metrics. The founders who view capital flow as oxygen rather than optional fuel will be the ones who make it through the affordability constraint.",
  },

  {
    id: 2,
    title:
      "The Wrong Business Partner Can Turn Your Dream Empire Into a Battlefield",
    short_description: "Skill gaps can be fixed. Character gaps usually can’t.",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Riya Sharma",
      image_url:
        "https://i.pinimg.com/1200x/5f/86/3c/5f863ca5cffb43ffbd8c46becbc8bf34.jpg",
    },
    hero_image:
      "https://i.pinimg.com/736x/f8/24/7f/f8247f7bffb7269d9e3b2310844b330d.jpg",

    content:
      "Choosing a co-founder is more like choosing a spouse than hiring an employee. You’re committing to long-term stress, risk, and uncertainty together. Most founder breakups don’t happen because of incompetence — they happen because of misaligned expectations. Differences in work ethic, financial discipline, communication style, and long-term ambition slowly compound into conflict. Before signing anything, discuss worst-case scenarios: What happens if revenue stalls? If one person wants to quit? If acquisition offers arrive? Alignment on values and vision is non-negotiable. A great partner multiplies energy. The wrong one drains it daily.",
  },
  {
    id: 3,
    title: `5 Tech Industry Trends Shaping the Future for Non-Billionaires`,
    short_description:
      "You don’t need venture capital to ride the next wave of tech. Here are five realistic opportunities.",
    created_at: "2026-02-12T09:15:00.000Z",
    author: {
      name: "Aarav Mehta",
      image_url:
        "https://i.pinimg.com/736x/3e/f3/50/3ef350dc86cc82a092463e5d795654b5.jpg",
    },
    hero_image:
      //   "https://i.pinimg.com/736x/a9/2d/56/a92d562e9a65a9023c5c75191492a45c.jpg",
      "https://i.pinimg.com/736x/a7/55/4d/a7554db43b28f1a4659d0ef10c8c3dc5.jpg",
    content:
      "The future of tech isn’t reserved for venture-backed founders. In fact, some of the biggest opportunities right now favor small, fast-moving teams. First, AI wrappers that solve specific workflow problems are thriving because they focus on outcomes, not hype. Second, vertical SaaS products targeting niche industries are outperforming generic tools. Third, micro-acquisitions allow builders to buy small revenue-generating projects and scale them. Fourth, creator-led brands are turning audiences into distribution channels. And finally, automation-first businesses are lowering operational costs dramatically. The real edge in 2026 won’t be funding — it will be speed, clarity, and consistency.",
  },
  {
    id: 4,
    title: "The Hidden Reasons Most Side Hustles Collapse After 3 Months",
    short_description: "Motivation fades. Systems win.",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Neha Kapoor",
      image_url:
        "https://i.pinimg.com/736x/fb/a4/15/fba41589e38f30daf70f154370a64623.jpg",
    },
    hero_image:
      "https://i.pinimg.com/1200x/0d/a8/03/0da8032cfef70f3177d0a591d3944091.jpg",
    content:
      "Most side projects don’t fail because they’re bad ideas — they fail because they rely on mood. The first few weeks feel exciting. You post consistently, build features quickly, and imagine big outcomes. Then life gets busy. Energy dips. Progress slows. Without systems, momentum collapses. Sustainable side hustles are built on small, repeatable actions: shipping every Friday, publishing twice a week, iterating based on real feedback. Discipline compounds in a way motivation never can. If you want your project to survive 90 days, build habits first — growth second.",
  },

  {
    id: 5,
    title: "Remote Work Is Quietly Creating Two Classes of Employees",
    short_description: "Visibility bias is becoming the new office politics.",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Dev Malhotra",
      image_url:
        "https://i.pinimg.com/736x/3b/35/66/3b35668121c0c482408475490a0197fe.jpg",
    },
    hero_image:
      "https://i.pinimg.com/736x/c6/58/16/c65816f4cfd368e61dbc7094b14e70de.jpg",
    content:
      "Flexibility and independence were promised by remote work, and they were fulfilled. However, it also created a fresh rift. Workers are moving more quickly when they keep track of their work, communicate in a proactive manner, and show off their accomplishments. Others who contribute subtly but without indicating it run the danger of being missed. Perception frequently shapes potential in remote teams. Structured transparency, not self-promotion, is the answer. Bias is lessened by async communication, weekly updates, transparent documentation, and quantifiable results. Clarity is key in remote settings.",
  },

  {
    id: 6,
    title: "The Affordability Crisis That Could Crush Startup Founders in 2026",
    short_description:
      "Rising rent, SaaS inflation, and shrinking runway are squeezing early-stage builders.",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Kabir Verma",
      image_url:
        "https://i.pinimg.com/736x/b2/a5/c5/b2a5c58cb271445de80688a46464aeba.jpg",
    },
    hero_image:
      "https://i.pinimg.com/736x/80/a7/42/80a7422307a29e1f294638ef1c117011.jpg",
    content:
      "Startup expenses are subtly increasing. Cloud infrastructure expenditures are growing more quickly than anticipated, software subscriptions are piling up, and office rent in big locations is still rising. Investors are requesting profitability sooner, and funding cycles are slowing down. Early-stage founders are put in a risky situation as a result. Discipline, not panic, is the answer. Examine the SaaS stack you use. Substitute variable expenses for fixed ones. Create remote teams in areas with lower costs. Prioritise revenue over vanity metrics. The founders who view capital flow as oxygen rather than optional fuel will be the ones who make it through the affordability constraint.",
  },

  {
    id: 7,
    title:
      "The Wrong Business Partner Can Turn Your Dream Empire Into a Battlefield",
    short_description: "Skill gaps can be fixed. Character gaps usually can’t.",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Riya Sharma",
      image_url:
        "https://i.pinimg.com/1200x/5f/86/3c/5f863ca5cffb43ffbd8c46becbc8bf34.jpg",
    },
    hero_image:
      "https://i.pinimg.com/1200x/05/fe/2f/05fe2fce0e55073b0e49480b537f2c32.jpg",

    content:
      "Choosing a co-founder is more like choosing a spouse than hiring an employee. You’re committing to long-term stress, risk, and uncertainty together. Most founder breakups don’t happen because of incompetence — they happen because of misaligned expectations. Differences in work ethic, financial discipline, communication style, and long-term ambition slowly compound into conflict. Before signing anything, discuss worst-case scenarios: What happens if revenue stalls? If one person wants to quit? If acquisition offers arrive? Alignment on values and vision is non-negotiable. A great partner multiplies energy. The wrong one drains it daily.",
  },
  {
    id: 8,
    title: `5 Tech Industry Trends Shaping the Future for Non-Billionaires`,
    short_description:
      "You don’t need venture capital to ride the next wave of tech. Here are five realistic opportunities.",
    created_at: "2026-02-12T09:15:00.000Z",
    author: {
      name: "Aarav Mehta",
      image_url:
        "https://i.pinimg.com/736x/3e/f3/50/3ef350dc86cc82a092463e5d795654b5.jpg",
    },
    hero_image:
      "https://i.pinimg.com/736x/a0/94/f2/a094f2eac49e2ba0f8432612e23b99bf.jpg",
    content:
      "The future of tech isn’t reserved for venture-backed founders. In fact, some of the biggest opportunities right now favor small, fast-moving teams. First, AI wrappers that solve specific workflow problems are thriving because they focus on outcomes, not hype. Second, vertical SaaS products targeting niche industries are outperforming generic tools. Third, micro-acquisitions allow builders to buy small revenue-generating projects and scale them. Fourth, creator-led brands are turning audiences into distribution channels. And finally, automation-first businesses are lowering operational costs dramatically. The real edge in 2026 won’t be funding — it will be speed, clarity, and consistency.",
  },
  {
    id: 9,
    title: "The Hidden Reasons Most Side Hustles Collapse After 3 Months",
    short_description: "Motivation fades. Systems win.",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Neha Kapoor",
      image_url:
        "https://i.pinimg.com/736x/fb/a4/15/fba41589e38f30daf70f154370a64623.jpg",
    },
    hero_image:
      "https://i.pinimg.com/1200x/0d/a8/03/0da8032cfef70f3177d0a591d3944091.jpg",
    content:
      "Most side projects don’t fail because they’re bad ideas — they fail because they rely on mood. The first few weeks feel exciting. You post consistently, build features quickly, and imagine big outcomes. Then life gets busy. Energy dips. Progress slows. Without systems, momentum collapses. Sustainable side hustles are built on small, repeatable actions: shipping every Friday, publishing twice a week, iterating based on real feedback. Discipline compounds in a way motivation never can. If you want your project to survive 90 days, build habits first — growth second.",
  },
];
