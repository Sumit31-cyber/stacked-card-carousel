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
    id: 4,
    title: "Remote Work Is Quietly Creating Two Classes of Employees",
    short_description: "Visibility bias is becoming the new office politics.",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Dev Malhotra",
      image_url: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    hero_image:
      "https://i.pinimg.com/736x/c6/58/16/c65816f4cfd368e61dbc7094b14e70de.jpg",
    content:
      "Remote work promised flexibility and autonomy — and it delivered. But it also introduced a new divide. Employees who document their work, communicate proactively, and make their progress visible are advancing faster. Others who quietly deliver but don’t signal their contributions risk being overlooked. In distributed teams, perception often shapes opportunity. The solution isn’t self-promotion — it’s structured transparency. Weekly updates, clear documentation, async communication, and measurable outcomes reduce bias. In remote environments, clarity is power.",
  },

  {
    id: 1,
    title: "The Affordability Crisis That Could Crush Startup Founders in 2026",
    short_description:
      "Rising rent, SaaS inflation, and shrinking runway are squeezing early-stage builders.",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Kabir Verma",
      image_url: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    hero_image:
      //   "https://i.pinimg.com/736x/3d/12/cb/3d12cb70ebdb3337a316ec4a773c30dd.jpg",
      //   "https://i.pinimg.com/736x/62/9b/6e/629b6e6d060aa984cbdf48b585a39724.jpg",
      "https://i.pinimg.com/736x/80/a7/42/80a7422307a29e1f294638ef1c117011.jpg",
    content:
      "Startup costs are quietly rising. Office rent in major cities continues to climb, software subscriptions are stacking up, and cloud infrastructure bills scale faster than expected. Meanwhile, funding cycles are slowing down and investors are demanding profitability earlier. This creates a dangerous squeeze on early-stage founders. The solution isn’t panic — it’s discipline. Audit your SaaS stack. Replace fixed costs with variable ones. Build remote teams in cost-efficient regions. Focus on revenue before vanity metrics. The founders who survive the affordability crunch will be the ones who treat cash flow as oxygen, not optional fuel.",
  },
  {
    id: 0,
    title: `5 Tech Industry Trends For Non-Billionaires`,
    short_description:
      "You don’t need venture capital to ride the next wave of tech. Here are five realistic opportunities.",
    created_at: "2026-02-12T09:15:00.000Z",
    author: {
      name: "Aarav Mehta",
      image_url: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    hero_image:
      //   "https://i.pinimg.com/736x/a9/2d/56/a92d562e9a65a9023c5c75191492a45c.jpg",
      "https://i.pinimg.com/736x/84/91/61/849161cdaf99b5e8240a09fce7de0d8e.jpg",
    content:
      "The future of tech isn’t reserved for venture-backed founders. In fact, some of the biggest opportunities right now favor small, fast-moving teams. First, AI wrappers that solve specific workflow problems are thriving because they focus on outcomes, not hype. Second, vertical SaaS products targeting niche industries are outperforming generic tools. Third, micro-acquisitions allow builders to buy small revenue-generating projects and scale them. Fourth, creator-led brands are turning audiences into distribution channels. And finally, automation-first businesses are lowering operational costs dramatically. The real edge in 2026 won’t be funding — it will be speed, clarity, and consistency.",
  },
  {
    id: 2,
    title:
      "The Wrong Business Partner Can Turn Your Dream Empire Into a Battlefield",
    short_description: "Skill gaps can be fixed. Character gaps usually can’t.",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Riya Sharma",
      image_url: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    hero_image:
      "https://i.pinimg.com/1200x/05/fe/2f/05fe2fce0e55073b0e49480b537f2c32.jpg",

    content:
      "Choosing a co-founder is more like choosing a spouse than hiring an employee. You’re committing to long-term stress, risk, and uncertainty together. Most founder breakups don’t happen because of incompetence — they happen because of misaligned expectations. Differences in work ethic, financial discipline, communication style, and long-term ambition slowly compound into conflict. Before signing anything, discuss worst-case scenarios: What happens if revenue stalls? If one person wants to quit? If acquisition offers arrive? Alignment on values and vision is non-negotiable. A great partner multiplies energy. The wrong one drains it daily.",
  },

  {
    id: 3,
    title: "Why Most Side Hustles Die After 90 Days",
    short_description: "Motivation fades. Systems win.",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Neha Kapoor",
      image_url: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    hero_image:
      "https://i.pinimg.com/1200x/0d/a8/03/0da8032cfef70f3177d0a591d3944091.jpg",
    content:
      "Most side projects don’t fail because they’re bad ideas — they fail because they rely on mood. The first few weeks feel exciting. You post consistently, build features quickly, and imagine big outcomes. Then life gets busy. Energy dips. Progress slows. Without systems, momentum collapses. Sustainable side hustles are built on small, repeatable actions: shipping every Friday, publishing twice a week, iterating based on real feedback. Discipline compounds in a way motivation never can. If you want your project to survive 90 days, build habits first — growth second.",
  },

  {
    id: 5,
    title: "The Rise of Micro-SaaS in Emerging Markets",
    short_description:
      "Small tools solving hyper-specific problems are winning big.",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Ananya Iyer",
      image_url: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    hero_image:
      "https://images.unsplash.com/photo-1616329965712-cd10c0d3c599?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "In emerging markets, founders are building lean, profitable SaaS tools focused on narrow customer segments. Instead of chasing billion-dollar valuations, they’re targeting stability and recurring revenue. Lower development costs, global payment infrastructure, and community-led distribution make it possible for solo founders to compete globally. Micro-SaaS succeeds because it prioritizes depth over scale. When you solve a painful, specific problem exceptionally well, customers stay — and they pay.",
  },
  {
    id: 6,
    title:
      "Your Startup Doesn’t Need More Features — It Needs Better Distribution",
    short_description:
      "Great products fail every day because nobody knows they exist.",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Ishaan Rao",
      image_url: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    hero_image:
      "https://images.unsplash.com/photo-1621177555452-bedbe4c28879?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "Founders love building. Adding features feels productive. But distribution is what creates survival. A mediocre product with excellent distribution often beats a brilliant product that nobody discovers. Community-building, partnerships, content marketing, SEO, and audience ownership are no longer optional — they are strategic advantages. Before building your next feature, ask: How will people hear about this? If you solve distribution early, product iterations become growth multipliers instead of hidden improvements.",
  },
  {
    id: 7,
    title: "Burnout Is Becoming a Founder Status Symbol",
    short_description: "Working 16-hour days is not a growth strategy.",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Sanya Patel",
      image_url: "https://randomuser.me/api/portraits/women/52.jpg",
    },
    hero_image:
      "https://images.unsplash.com/photo-1726594692111-7939325c616d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "There’s a dangerous narrative in startup culture: exhaustion equals commitment. But burnout doesn’t scale — clarity does. Sleep deprivation reduces decision quality. Chronic stress kills creativity. Sustainable performance requires boundaries, recovery, and deliberate rest. The best founders treat energy like capital — invested wisely, protected fiercely. Long-term growth is a marathon, not a sprint disguised as one.",
  },
  {
    id: 8,
    title: "Why 2026 Will Be the Year of Indie AI Builders",
    short_description:
      "APIs are getting cheaper. Distribution is getting easier.",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Rahul Desai",
      image_url: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    hero_image:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "AI is no longer exclusive to large research labs. With open-source models and affordable APIs, individual developers can now build powerful AI-native applications. The barrier to entry is falling, while demand for automation and intelligence is rising. The real opportunity lies in combining domain expertise with AI tooling. Builders who understand specific industries can embed AI in ways that feel natural and transformative.",
  },
  {
    id: 9,
    title: "The Death of Traditional Networking Events",
    short_description: "Digital communities are replacing conference halls.",
    hero_image:
      "https://images.unsplash.com/photo-1616329965712-cd10c0d3c599?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    created_at: "2026-02-07T09:15:00.000Z",
    author: {
      name: "Priya Nair",
      image_url: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    content:
      "Large conferences are losing their edge. While they offer visibility, they rarely create depth. In contrast, niche digital communities foster ongoing conversations, trust, and collaboration. Modern networking is less about exchanging business cards and more about building shared spaces online. The strongest professional relationships in 2026 will likely start in DMs, Slack groups, and focused communities — not hotel ballrooms.",
  },
];
