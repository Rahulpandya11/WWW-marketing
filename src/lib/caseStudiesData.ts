import { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: '1',
    slug: 'fintech-ai-acquisition-scale',
    title: 'How LuminaPay Scaled to $1.4M ARR with AI-Driven Performance Marketing',
    client: 'LuminaPay Financial',
    industry: 'Fintech & B2B SaaS',
    serviceCategory: 'Digital Growth',
    serviceName: 'AI Digital Marketing & Google Ads',
    timeframe: '6 Months',
    summary: 'Restructured paid acquisition using predictive AI audience modeling and server-side tracking to drop CAC by 42% while scaling monthly active users by 310%.',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { value: 42, suffix: '%', label: 'Reduction in CAC', highlight: true },
      { value: 310, suffix: '%', label: 'Growth in Active Users' },
      { value: 4.8, suffix: 'x', label: 'Blended Paid ROAS' },
      { value: 1.4, suffix: 'M', prefix: '$', label: 'New ARR Pipeline' }
    ],
    challenge: 'LuminaPay was facing severe acquisition plateauing on traditional Google Ads. Their Customer Acquisition Cost (CAC) had climbed to $340 per qualified merchant, and iOS privacy updates had blindfolded their Facebook retargeting campaigns. Their internal team was bogged down trying to manually manage 80+ fragmented ad sets.',
    strategy: [
      'Transition from manual bidding to an autonomous predictive AI bidding engine tied to verified merchant transaction volumes.',
      'Deploy server-side Google Tag Manager and Meta Conversions API (CAPI) to restore 100% data fidelity.',
      'Develop high-intent B2B search keyword clusters capturing CFOs and fintech decision makers comparing legacy merchant processors.',
      'Produce 24 dynamic video creative variations tackling fee transparency and setup speed.'
    ],
    execution: [
      {
        phase: 'Weeks 1-3',
        title: 'Infrastructure & Tracking Rebuild',
        details: 'Implemented server-to-server data ingestion with customer lifetime value backfills, achieving a 9.4/10 Meta Event Match Quality score.'
      },
      {
        phase: 'Weeks 4-8',
        title: 'AI Bidding & Creative Sandbox Launch',
        details: 'Launched dynamic creative testing on Meta and trained Google PMax models exclusively on high-tier merchant conversions.'
      },
      {
        phase: 'Weeks 9-16',
        title: 'Budget Scaling & Competitor Conquesting',
        details: 'Scaled monthly ad spend from $15,000 to $65,000 while maintaining a marginal blended ROAS above 4.5x.'
      },
      {
        phase: 'Weeks 17-24',
        title: 'Lifecycle Retargeting & LTV Expansion',
        details: 'Implemented automated SMS and email reactivation loops to turn abandoned merchant signups into onboarded accounts.'
      }
    ],
    resultsOverview: 'Within 6 months, LuminaPay broke through their growth plateau, driving over 1,800 verified enterprise merchant accounts and adding $1.4M in predictable annual recurring revenue at a fraction of their historical customer acquisition cost.',
    testimonial: {
      quote: 'WEST WARD WORKS completely revolutionized our acquisition economics. Their AI predictive bidding models cut our CAC in half in under 90 days. We went from burning cash to generating consistent 4.8x returns.',
      author: 'Marcus Vance',
      role: 'Chief Commercial Officer',
      company: 'LuminaPay Financial',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    technologies: ['Google Ads', 'Meta Ads CAPI', 'AI Bidding Engine', 'Server-side GTM', 'HubSpot']
  },
  {
    id: '2',
    slug: 'healthtech-seo-dominance',
    title: 'AuraHealth: Capturing 450,000 Monthly Organic Visitors via Programmatic SEO',
    client: 'AuraHealth Telemedicine',
    industry: 'Healthcare & Telehealth',
    serviceCategory: 'Digital Growth',
    serviceName: 'SEO Services',
    timeframe: '9 Months',
    summary: 'Engineered a programmatic SEO architecture and secured 140+ Tier-1 health authority backlinks, resulting in a 280% organic traffic surge and 52,000 patient consultations booked.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { value: 280, suffix: '%', label: 'Organic Search Growth', highlight: true },
      { value: 450, suffix: 'k', label: 'Monthly Organic Visits' },
      { value: 52, suffix: 'k', label: 'Consultations Booked' },
      { value: 140, suffix: '+', label: 'Tier-1 Backlinks Earned' }
    ],
    challenge: 'AuraHealth was reliant on exorbitant PPC keywords ($45+ per click) in the fiercely competitive telehealth space. Their website had technical crawl bloat, duplicate condition pages, and zero high-ranking non-branded search positions against giants like WebMD and Healthline.',
    strategy: [
      'Eliminate 30,000 thin, auto-generated condition pages and consolidate authority into 180 comprehensive, medically reviewed condition guides.',
      'Deploy strict schema markup (MedicalCondition, Physician, MedicalGuideline) to fulfill Google E-E-A-T trust signals.',
      'Launch a digital PR initiative pitching proprietary telehealth patient sentiment data to mainstream news outlets.',
      'Architect a lightning-fast Next.js frontend scoring 99/100 on Google PageSpeed Insights.'
    ],
    execution: [
      {
        phase: 'Phase 1',
        title: 'Technical Pruning & E-E-A-T Architecture',
        details: 'Resolved canonical chains, compressed media assets, and added verifiable physician author credentials to all clinical articles.'
      },
      {
        phase: 'Phase 2',
        title: 'Programmatic Symptom Checker Cluster',
        details: 'Created dynamic, medically verified symptom-to-specialist landing pages targeting high-intent localized search terms.'
      },
      {
        phase: 'Phase 3',
        title: 'Digital PR & Health Authority Outreach',
        details: 'Secured editorial citations and backlinks on Forbes Health, Healthline, and leading regional hospital networks.'
      }
    ],
    resultsOverview: 'AuraHealth now ranks in top 3 positions for over 2,400 competitive medical and specialist search terms, generating 450k monthly organic visits that save the company over $350,000 each month in equivalent paid ad spend.',
    testimonial: {
      quote: 'WEST WARD WORKS gave us an unstoppable inbound moat. We transitioned from relying on paid ads to having a continuous flood of organic patient bookings every single day.',
      author: 'Dr. Elena Rostova',
      role: 'VP of Growth & Clinical Ops',
      company: 'AuraHealth',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    technologies: ['Next.js', 'Schema.org JSON-LD', 'Ahrefs Enterprise', 'Digital PR', 'Google Search Console']
  },
  {
    id: '3',
    slug: 'ecommerce-meta-ai-scaling',
    title: 'Solstice Apparel: Scaling from $80k to $620k Monthly GMV with Creative Ad Systems',
    client: 'Solstice Performance Apparel',
    industry: 'Direct-to-Consumer (D2C)',
    serviceCategory: 'Digital Growth',
    serviceName: 'Meta Ads & Video Editing',
    timeframe: '5 Months',
    summary: 'Combined high-velocity UGC video testing with broad Meta Andromeda targeting and a custom Shopify conversion funnel to scale monthly revenue by 675%.',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { value: 675, suffix: '%', label: 'Revenue Growth', highlight: true },
      { value: 3.9, suffix: 'x', label: 'Average ROAS' },
      { value: 24, suffix: '%', label: 'Increase in AOV' },
      { value: 620, suffix: 'k', prefix: '$', label: 'Monthly GMV Reached' }
    ],
    challenge: 'Solstice had hit a hard glass ceiling at $80k monthly sales. Their creative ads suffered severe fatigue within 10 days of launching, causing ROAS to dip below break-even (1.4x), while their Shopify store checkout abandoned 72% of shoppers.',
    strategy: [
      'Implement a weekly Creative Drop pipeline producing 15 fresh UGC-style and cinematic reels testing distinct psychological hooks.',
      'Switch from micro-targeted audiences to broad open targeting, allowing Meta’s algorithm to self-identify high-converting buyers.',
      'Re-engineer the Shopify product detail pages (PDP) with interactive bundle builders and dynamic threshold shipping meters.',
      'Build automated Klaviyo email flows (Browse abandonment, VIP win-back) with personalized dynamic coupon codes.'
    ],
    execution: [
      {
        phase: 'Sprint 1',
        title: 'Creative Angle Research & Production',
        details: 'Researched 3 core buyer avatars (Gym Lifters, Trail Runners, Everyday Commuters) and scripted 12 high-retention video hooks.'
      },
      {
        phase: 'Sprint 2',
        title: 'Shopify Checkout Optimization',
        details: 'Integrated a slide-out cart with one-click upsells, lifting Average Order Value from $68 to $84.'
      },
      {
        phase: 'Sprint 3',
        title: 'Aggressive Ad Pacing & Scaling',
        details: 'Identified 3 viral winner ads and scaled daily ad spend from $900/day to $6,500/day with steady 3.9x blended return.'
      }
    ],
    resultsOverview: 'Solstice crossed $620,000 in monthly revenue in month 5, maintaining a 3.9x ROAS with zero creative fatigue thanks to the continuous weekly video testing flywheel.',
    testimonial: {
      quote: 'The team at WEST WARD WORKS operates like elite navy seals for eCommerce. Their video creative hooks are unmatched, and their store optimizations paid for themselves in the very first week.',
      author: 'Julian Croft',
      role: 'Founder & CEO',
      company: 'Solstice Apparel',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    technologies: ['Meta Ads Manager', 'Shopify Plus', 'Klaviyo', 'Adobe Premiere / After Effects', 'TripleWhale']
  },
  {
    id: '4',
    slug: 'modern-fintech-web-rebuild',
    title: 'Nexis Cloud: 0.4s Next.js Re-architecture That Increased Enterprise Demos by 195%',
    client: 'Nexis Cloud Systems',
    industry: 'Enterprise Software & DevOps',
    serviceCategory: 'Web & Technology',
    serviceName: 'Website Development & UI/UX Design',
    timeframe: '8 Weeks',
    summary: 'Replaced a bloated legacy WordPress site with an ultra-fast Next.js 14 web platform featuring interactive 3D architecture visualizers, lifting demo conversion rates by 195%.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { value: 195, suffix: '%', label: 'Lift in Demo Bookings', highlight: true },
      { value: 0.4, suffix: 's', label: 'Average Page Load' },
      { value: 99, suffix: '/100', label: 'Google Lighthouse' },
      { value: 68, suffix: '%', label: 'Reduction in Bounce Rate' }
    ],
    challenge: 'Nexis had a 6-year-old WordPress website with 42 plugins that took 4.2 seconds to load. 68% of visitors bounced before seeing their enterprise feature matrix, and sales reps were frustrated with lackluster inbound demo volume.',
    strategy: [
      'Complete ground-up rewrite using Next.js 14 App Router, TypeScript, and Tailwind CSS.',
      'Build an interactive 3D cloud latency simulator using Three.js and React Three Fiber to showcase Nexis’s infrastructure speed.',
      'Redesign the UI with modern glassmorphism, crisp micro-interactions, and frictionless 2-step demo booking forms.',
      'Integrate Sanity Headless CMS for zero-latency marketing updates without developer intervention.'
    ],
    execution: [
      {
        phase: 'Weeks 1-2',
        title: 'Figma UI/UX & Information Architecture',
        details: 'Designed clean, high-contrast layouts emphasizing developer ergonomics and transparent pricing comparisons.'
      },
      {
        phase: 'Weeks 3-5',
        title: 'Full-Stack Next.js Engineering',
        details: 'Built server components, responsive navigation mega-menus, and interactive Three.js 3D latency canvases.'
      },
      {
        phase: 'Weeks 6-8',
        title: 'Lighthouse 100/100 Tuning & Launch',
        details: 'Optimized asset delivery via Vercel Edge, cut over DNS, and integrated real-time Salesforce demo routing.'
      }
    ],
    resultsOverview: 'The new site loads in 400 milliseconds, achieved a 99/100 Core Web Vitals score, and instantly nearly tripled the volume of Fortune 500 engineering leaders booking software demos.',
    testimonial: {
      quote: 'Our new website completely transformed how enterprise prospects perceive us. The interactive 3D features and instant sub-second speed gave us the elite tech presence our engineering deserved.',
      author: 'David Zhang',
      role: 'Head of Product Marketing',
      company: 'Nexis Cloud',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    technologies: ['Next.js 14', 'React Three Fiber', 'Tailwind CSS', 'TypeScript', 'Sanity CMS', 'Vercel']
  },
  {
    id: '5',
    slug: 'b2b-saas-geo-domination',
    title: 'Synthetix AI: Becoming the #1 Recommended Brand on ChatGPT & Perplexity',
    client: 'Synthetix Data Intelligence',
    industry: 'Artificial Intelligence & SaaS',
    serviceCategory: 'Digital Growth',
    serviceName: 'ChatGPT Optimization & Gemini Optimization',
    timeframe: '4 Months',
    summary: 'Pioneered Generative Engine Optimization (GEO) to get Synthetix cited as the premier vendor across 320+ conversational AI buyer prompts, generating $850k in inbound pipeline.',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { value: 320, suffix: '+', label: 'LLM Buyer Prompts Won', highlight: true },
      { value: 850, suffix: 'k', prefix: '$', label: 'Attributed AI Pipeline' },
      { value: 74, suffix: '%', label: 'AI Citation Share-of-Voice' },
      { value: 4.6, suffix: 'x', label: 'Higher Lead Close Rate' }
    ],
    challenge: 'Synthetix realized that modern enterprise buyers were no longer clicking 10 blue links on Google—they were asking ChatGPT and Perplexity: "Which enterprise synthetic data platform has the best HIPAA compliance?" Synthetix was completely absent from conversational responses, while older competitors were cited by default.',
    strategy: [
      'Conduct deep prompt engineering audits across GPT-4, Claude 3.5, and Gemini Pro to identify missing entity references.',
      'Restructure Synthetix technical documentation and case studies into LLM-friendly semantic markdown schemas.',
      'Execute targeted digital PR across high-authority tech publications indexed in real-time search LLM retrieval.',
      'Fortify Wikidata, Crunchbase, and Schema.org knowledge nodes to cement Synthetix as the category authority.'
    ],
    execution: [
      {
        phase: 'Month 1',
        title: 'Prompt Benchmark & Entity Gap Analysis',
        details: 'Simulated 500 commercial buyer prompts to establish baseline omission and misattribution rates.'
      },
      {
        phase: 'Month 2',
        title: 'Knowledge Base & Schema Overhaul',
        details: 'Deployed structured JSON-LD entity definitions directly linking Synthetix patents and enterprise compliance certifications.'
      },
      {
        phase: 'Month 3-4',
        title: 'Authority Syndication & Share-of-Voice Scaling',
        details: 'Secured Tier-1 mentions on VentureBeat and TechTarget, cementing Synthetix into LLM web-browsing retrieval models.'
      }
    ],
    resultsOverview: 'Within 4 months, Synthetix achieved a 74% share-of-voice in AI conversational recommendations, producing over $850k in high-intent enterprise pipeline from buyers citing AI tools as their discovery source.',
    testimonial: {
      quote: 'WEST WARD WORKS understood the future of search before anyone else. Being the #1 recommended vendor on ChatGPT and Gemini has given us an incredible pipeline of high-intent enterprise buyers.',
      author: 'Amara Chen',
      role: 'Co-Founder & CEO',
      company: 'Synthetix Data Intelligence',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    technologies: ['Generative Engine Optimization (GEO)', 'OpenAI API', 'Wikidata Entity Graph', 'Schema.org', 'Digital PR']
  },
  {
    id: '6',
    slug: 'luxury-beverage-social-rebrand',
    title: 'Kura Botanicals: 4.8M Viral Social Views & 340% Retail Sell-Through',
    client: 'Kura Botanicals',
    industry: 'Consumer Goods & Luxury Beverage',
    serviceCategory: 'Creative & Brand',
    serviceName: 'Graphic Design, Video Reels & Experiential Brand Activations',
    timeframe: '3 Months',
    summary: 'Unified an elevated minimalist brand identity with viral short-form video production and interactive digital billboard activations during festival week, propelling product sell-through by 340%.',
    thumbnail: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { value: 4.8, suffix: 'M', label: 'Viral Organic Views', highlight: true },
      { value: 340, suffix: '%', label: 'Retail Sell-Through' },
      { value: 18, suffix: 'k', label: 'New Instagram Followers' },
      { value: 92, suffix: '%', label: 'Positive Brand Sentiment' }
    ],
    challenge: 'Kura was launching their premium zero-sugar botanical spritz in Whole Foods and Erewhon, but lacked consumer awareness against established beverage brands. They needed an electrifying omnichannel brand launch to drive immediate retail velocity.',
    strategy: [
      'Refine the visual identity with bespoke packaging, luxury typography, and vibrant pastel color palettes.',
      'Produce 30 retention-engineered short-form reels showcasing the sensory experience and natural botanical mixology.',
      'Deploy interactive 4K digital screen pop-ups and experiential tasting lounges across Venice Beach and festival hubs with instant QR code loyalty redemption.',
      'Synchronize mobile geofencing ads to retarget every smartphone exposed to the street activations.'
    ],
    execution: [
      {
        phase: 'Weeks 1-4',
        title: 'Packaging & Visual Asset Overhaul',
        details: 'Engineered can labels, carton packaging, and social design kits exuding effortless quiet luxury.'
      },
      {
        phase: 'Weeks 5-8',
        title: 'Video Content Flywheel & Influencer Seeding',
        details: 'Batch-filmed aesthetic lifestyle reels, securing organic reposts from wellness creators and mixologists.'
      },
      {
        phase: 'Weeks 9-12',
        title: 'Experiential Screen Pop-Up Blitz',
        details: 'Activated high-definition 4K interactive outdoor digital displays during high-traffic festival weekends, distributing 15,000 chilled samples.'
      }
    ],
    resultsOverview: 'The campaign generated 4.8 million organic social views, cleared retail shelves across 45 regional stores within 14 days, and established Kura Botanicals as a breakout consumer darling.',
    testimonial: {
      quote: 'The synergy between WEST WARD WORKS’s video team and the street-level experiential digital activations created an undeniable buzz. People were literally walking into stores holding their phones showing our reels.',
      author: 'Soren Lindqvist',
      role: 'Brand Director',
      company: 'Kura Botanicals',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80'
    },
    technologies: ['Figma Brand Suite', 'DaVinci Resolve', 'Interactive 4K Digital Displays', 'Geofenced Mobile DSP', 'TikTok Ads']
  }
];

export const getCaseStudyBySlug = (slug: string) => {
  return caseStudiesData.find(cs => cs.slug === slug);
};
