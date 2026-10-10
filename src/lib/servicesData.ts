import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  // ==========================================
  // CATEGORY 1: DIGITAL GROWTH
  // ==========================================
  {
    id: 'ai-digital-marketing',
    slug: 'ai-digital-marketing',
    title: 'AI Digital Marketing',
    category: 'Digital Growth',
    badge: 'Flagship AI Solution',
    iconName: 'Sparkles',
    shortDescription: 'Leverage predictive machine learning, generative creative pipelines, and hyper-targeted audience modeling to maximize acquisition velocity.',
    heroHeadline: 'Supercharge Acquisition with Autonomous AI Marketing Engines',
    fullDescription: 'Our AI Digital Marketing framework merges predictive consumer intelligence with automated multi-channel orchestration. We build self-optimizing ad funnels, predictive lifetime-value scoring, and dynamic creative delivery systems that reduce Customer Acquisition Cost (CAC) while continuously scaling Return On Ad Spend (ROAS).',
    benefits: [
      'Up to 42% decrease in average cost-per-acquisition via automated bidder algorithms',
      'Real-time multivariate creative testing generating thousands of variations weekly',
      'Proprietary customer intent modeling that captures high-intent buyers prior to competitors',
      'Seamless multi-platform cross-channel attribution reporting'
    ],
    features: [
      {
        title: 'Predictive Audience Modeling',
        description: 'Machine learning algorithms that analyze past conversions to predict which prospect segments will convert with the highest lifetime value.',
        icon: 'Cpu'
      },
      {
        title: 'Autonomous Ad Bidding & Pacing',
        description: 'Dynamic budget allocation algorithms that shift ad spend between channels in real time based on marginal revenue efficiency.',
        icon: 'TrendingUp'
      },
      {
        title: 'Generative Creative Pipelines',
        description: 'Automated generation and variation testing of ad copy, visual hooks, and micro-video assets customized to niche buyer personas.',
        icon: 'Layers'
      },
      {
        title: 'Zero-Party Intent Data Enrichment',
        description: 'Interactive conversational widgets that collect buyer intent signals and feed them directly into CRM lifecycle triggers.',
        icon: 'Zap'
      }
    ],
    process: [
      { step: 1, title: 'AI Data Audit & Scoring', description: 'We audit your historical analytics, conversion signals, and customer lifetime value cohorts to benchmark baseline metrics.' },
      { step: 2, title: 'Model Architecture & Integration', description: 'Connect predictive APIs, tracking pixels, and conversion APIs across your digital ecosystem.' },
      { step: 3, title: 'Generative Sprint & Launch', description: 'Deploy hyper-segmented campaigns with dynamic ad creatives and AI-adjusted bidding rules.' },
      { step: 4, title: 'Autonomous Scale & Attribution', description: 'Continuous learning loops refine targeting parameters and allocate ad budget to top-performing cohorts.' }
    ],
    deliverables: [
      'Custom AI Ad Management & Bid Optimization Suite',
      'Real-time Predictive Analytics Dashboard',
      'Bi-weekly Generative Creative Asset Pack (30+ variations)',
      'Cross-channel Attribution Model Report'
    ],
    tiers: [
      {
        name: 'Growth AI',
        price: '$2,800',
        period: '/month',
        description: 'For scaling companies spending $5k - $20k monthly on ads seeking automated optimization.',
        highlights: ['Up to 2 ad platforms', 'Weekly predictive optimization', '15 AI creative variants/mo', 'Dedicated AI Strategist']
      },
      {
        name: 'Enterprise AI Engine',
        price: '$5,500',
        period: '/month',
        description: 'Full-funnel autonomous marketing engine for high-growth brands spending $20k+ monthly.',
        highlights: ['All major ad platforms', 'Real-time multi-touch attribution', 'Custom machine learning LTV model', 'Daily creative synthesis', '24/7 Slack channel with Lead Strategist'],
        popular: true
      }
    ],
    faqs: [
      {
        question: 'How is AI Digital Marketing different from traditional marketing?',
        answer: 'Traditional digital marketing relies heavily on manual A/B testing and delayed weekly reporting. Our AI engine processes thousands of real-time signals hourly, automatically redistributing budget to high-yield segments and dynamically updating copy hooks.'
      },
      {
        question: 'Will AI replace human strategic creative thought?',
        answer: 'Never. Our human senior strategists direct the brand identity, narrative hooks, and market positioning, while AI handles the computational heavy lifting of multivariate testing and programmatic pacing.'
      }
    ],
    relatedCaseStudies: ['fintech-ai-acquisition-scale', 'ecommerce-meta-ai-scaling']
  },
  {
    id: 'chatgpt-optimization',
    slug: 'chatgpt-optimization',
    title: 'ChatGPT Optimization',
    category: 'Digital Growth',
    badge: 'Generative Engine GEO',
    iconName: 'Bot',
    shortDescription: 'Optimize your brand visibility, domain authority, and structured data so ChatGPT and generative assistants cite your business as the definitive answer.',
    heroHeadline: 'Command Generative Search: Become the #1 Recommended Brand on ChatGPT',
    fullDescription: 'Generative Engine Optimization (GEO) is the next evolution of search. As millions of prospects ask ChatGPT for vendor recommendations, software comparisons, and buying guides, your brand must be cited as the trusted authority. We structure your digital footprint, entity graphs, and digital PR to dominate ChatGPT citations.',
    benefits: [
      'Consistent citation as the premier choice in conversational AI search prompts',
      'Knowledge-graph alignment establishing your brand as an industry authoritative entity',
      'Capture early-adopter commercial queries before they ever reach traditional search engines',
      'Comprehensive prompt audits tracking brand mention frequency and sentiment in OpenAI models'
    ],
    features: [
      {
        title: 'Entity & Knowledge Graph Calibration',
        description: 'Synchronize your enterprise data with Wikidata, schema markups, and verified knowledge bases referenced by LLMs.',
        icon: 'Network'
      },
      {
        title: 'Prompt Benchmark Monitoring',
        description: 'Simulate 500+ commercial buyer prompts weekly to evaluate your brand share-of-voice inside ChatGPT responses.',
        icon: 'Search'
      },
      {
        title: 'Authoritative Digital PR Placement',
        description: 'Secure editorial citations on high-reputation domains that OpenAI crawlers frequently index and prioritize.',
        icon: 'Award'
      },
      {
        title: 'Synthesized Content Architecture',
        description: 'Restructure your whitepapers, guides, and docs in markdown structures optimized for LLM token extraction.',
        icon: 'FileText'
      }
    ],
    process: [
      { step: 1, title: 'Prompt Footprint Audit', description: 'We test your industry buyer questions in GPT-4o to reveal whether you are currently cited, omitted, or hallucinated.' },
      { step: 2, title: 'Schema & Entity Alignment', description: 'Inject enterprise semantic JSON-LD structures, Wikidata entities, and official brand definitions.' },
      { step: 3, title: 'Authority Citation Blitz', description: 'Deploy content syndication across authoritative reference platforms favored by LLM web retrieval agents.' },
      { step: 4, title: 'Sentiment & Share-of-Voice Tracking', description: 'Bi-weekly tracking of citation volume, ranking position in comparative recommendations, and link inclusion.' }
    ],
    deliverables: [
      'Comprehensive ChatGPT Brand Presence & Prompt Audit',
      'Entity Graph & Semantic JSON-LD Infrastructure',
      'High-Authority Digital PR Placement Matrix',
      'Monthly LLM Citation Share-of-Voice Report'
    ],
    tiers: [
      {
        name: 'GEO Starter',
        price: '$1,950',
        period: '/month',
        description: 'Ideal for niche B2B software and specialized local service leaders.',
        highlights: ['50 monitored prompt queries', 'Semantic entity optimization', '2 authoritative citations/mo', 'Monthly citation delta report']
      },
      {
        name: 'Enterprise GEO Domination',
        price: '$4,200',
        period: '/month',
        description: 'Complete prompt dominance for high-ticket service providers and competitive SaaS.',
        highlights: ['250+ monitored commercial prompts', 'Competitor displacement campaign', '6 high-tier authoritative citations/mo', 'Weekly prompt benchmark matrix'],
        popular: true
      }
    ],
    faqs: [
      {
        question: 'What is Generative Engine Optimization (GEO)?',
        answer: 'GEO is the discipline of optimizing web content and domain authority so Large Language Models like ChatGPT, Perplexity, and Gemini identify and summarize your brand when users ask conversational queries.'
      },
      {
        question: 'How fast can a brand get recognized by ChatGPT?',
        answer: 'With the live search browsing features in ChatGPT (GPT-4o), properly structured entity content and authoritative press releases can be indexed and cited within 2 to 6 weeks.'
      }
    ],
    relatedCaseStudies: ['b2b-saas-geo-domination']
  },
  {
    id: 'gemini-optimization',
    slug: 'gemini-optimization',
    title: 'Gemini Optimization',
    category: 'Digital Growth',
    badge: 'Google AI Ecosystem',
    iconName: 'Sparkle',
    shortDescription: 'Align your business with Google Gemini, Search Generative Experience (SGE), and Google AI Overviews to capture top conversational real estate.',
    heroHeadline: 'Dominate Google AI Overviews & Gemini Multimodal Search',
    fullDescription: 'Google is embedding Gemini directly into Google Search Overviews, Google Workspace, and Android devices. To win in this new era, your website must be optimized for Gemini’s multimodal understanding, Knowledge Graph associations, and structured information extraction.',
    benefits: [
      'Prominent placement in Google AI Overviews at the very top of SERP result pages',
      'Multimodal optimization allowing your diagrams, charts, and product images to be pulled into Gemini summaries',
      'Defensive competitor displacement in conversational queries',
      'Future-proofed search traffic resilient to traditional blue-link organic declines'
    ],
    features: [
      {
        title: 'Google AI Overview Optimization',
        description: 'Crafting content answers directly matched to Google SGE retrieval patterns and information gain requirements.',
        icon: 'Compass'
      },
      {
        title: 'Multimodal Schema Integration',
        description: 'Structuring visual graphics, technical tables, and video transcripts for seamless Gemini multimodal ingestion.',
        icon: 'Image'
      },
      {
        title: 'Google Knowledge Graph Fortification',
        description: 'Strengthening your Google Business Profile, Knowledge Graph API validation, and trusted entity nodes.',
        icon: 'Database'
      },
      {
        title: 'Information Gain Content Engineering',
        description: 'Publishing primary proprietary research, surveys, and unique statistics that Gemini AI prioritizes citing.',
        icon: 'BarChart3'
      }
    ],
    process: [
      { step: 1, title: 'AI Overview Keyword Audit', description: 'Identify high-value keywords where Google currently displays Gemini AI Overviews.' },
      { step: 2, title: 'Entity Fortification', description: 'Reconcile Google Knowledge Graph attributes with unified structured data schemas.' },
      { step: 3, title: 'Information Gain Publishing', description: 'Create high-signal original data assets designed specifically for Gemini snippet synthesis.' },
      { step: 4, title: 'SGE Tracking & Reporting', description: 'Monitor inclusion rates, cited card positions, and referral traffic within Google Search Console.' }
    ],
    deliverables: [
      'Gemini AI Overview Keyword Opportunity Map',
      'Knowledge Graph API Verification & Schema Pack',
      'Quarterly Original Research & Data Asset',
      'Monthly SGE Snippet Inclusion Tracking'
    ],
    faqs: [
      {
        question: 'How do Google AI Overviews impact traditional organic SEO?',
        answer: 'AI Overviews occupy prime screen real estate above traditional organic links. By optimizing specifically for Gemini information synthesis, your brand secures the authoritative summary card, driving high-intent qualified clicks.'
      }
    ],
    relatedCaseStudies: ['b2b-saas-geo-domination', 'healthtech-seo-dominance']
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Digital Growth',
    badge: '360 Omnichannel',
    iconName: 'Target',
    shortDescription: 'Full-funnel digital marketing strategies that connect paid media, organic inbound, email nurturing, and CRO into a predictable revenue machine.',
    heroHeadline: 'End-to-End Omnichannel Digital Marketing That Generates Scalable Pipeline',
    fullDescription: 'Stop juggling disjointed agencies and disjointed tactics. Our comprehensive 360° Digital Marketing solution unifies your brand narrative across search, paid social, email automation, content marketing, and conversion rate optimization (CRO) into one synchronized growth engine.',
    benefits: [
      'A single unified growth strategy eliminating marketing silos and duplicate ad spend',
      'Continuous conversion rate optimization lifting every dollar of paid traffic',
      'Predictable monthly lead generation with transparent attribution modeling',
      'Weekly sprint cycles driven by experienced senior growth directors'
    ],
    features: [
      {
        title: 'Full-Funnel Media Planning',
        description: 'Strategic allocation across top-of-funnel brand building, mid-funnel consideration, and bottom-funnel conversion.',
        icon: 'Sliders'
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        description: 'Continuous multivariate testing of landing pages, checkout funnels, and pricing tables to maximize yield.',
        icon: 'Zap'
      },
      {
        title: 'Lifecycle & CRM Automation',
        description: 'Behavioral email, SMS, and retargeting workflows that convert casual visitors into repeat loyal customers.',
        icon: 'Mail'
      },
      {
        title: 'Unified Executive Dashboard',
        description: 'A custom real-time dashboard tracking Customer Acquisition Cost (CAC), Lifetime Value (LTV), and Blended ROAS.',
        icon: 'PieChart'
      }
    ],
    process: [
      { step: 1, title: 'Growth Architecture Diagnostic', description: 'Deep-dive analysis of your current funnel leaks, attribution gaps, and conversion benchmarks.' },
      { step: 2, title: 'Omnichannel Playbook', description: 'Formulate your 90-day sprint strategy across paid media, inbound content, and CRO.' },
      { step: 3, title: 'Campaign Execution & Creative', description: 'Launch coordinated campaigns across paid search, social platforms, and automated email sequences.' },
      { step: 4, title: 'Weekly Iteration & Scaling', description: 'Rapid A/B testing and agile budget reallocation towards your highest-performing assets.' }
    ],
    deliverables: [
      'Comprehensive 90-Day Omnichannel Growth Playbook',
      'Bespoke High-Converting Landing Pages',
      'Lifecycle Email & SMS Automation Sequences',
      'Live Executive Business Intelligence Dashboard'
    ],
    tiers: [
      {
        name: 'Growth Accelerate',
        price: '$3,500',
        period: '/month',
        description: 'For growing brands needing full-funnel execution across 2 paid channels + email.',
        highlights: ['Paid Search + Paid Social management', 'Klaviyo/HubSpot automated flows', 'Monthly CRO testing', 'Weekly performance sync']
      },
      {
        name: 'Scale Omnichannel',
        price: '$6,800',
        period: '/month',
        description: 'Complete outsourced digital marketing department for established growth brands.',
        highlights: ['Full paid media stack', 'Dedicated copywriter & designer', 'Advanced multi-touch attribution', 'Custom landing page development', 'Executive weekly reporting'],
        popular: true
      }
    ],
    faqs: [
      {
        question: 'Do you manage both paid ad spend and organic marketing?',
        answer: 'Yes! The greatest ROI happens when organic content, search engine optimization, and paid ad funnels amplify each other in harmony rather than operating in silos.'
      }
    ],
    relatedCaseStudies: ['fintech-ai-acquisition-scale', 'ecommerce-meta-ai-scaling']
  },
  {
    id: 'seo-services',
    slug: 'seo-services',
    title: 'SEO Services',
    category: 'Digital Growth',
    badge: 'High-Intent Inbound',
    iconName: 'Search',
    shortDescription: 'Technical SEO, programmatic architecture, and high-authority link acquisition engineered to capture organic search market share.',
    heroHeadline: 'Dominate Organic Search Rankings & Capture Uncontested Inbound Traffic',
    fullDescription: 'Modern SEO is not about keyword stuffing—it is a sophisticated engineering discipline encompassing Core Web Vitals, programmatic site architectures, semantic entity graphs, and editorial digital PR. We build compounding organic search assets that drive qualified prospects directly to your sales pipeline.',
    benefits: [
      'Sustained month-over-month growth in organic revenue and pipeline volume',
      'Pristine Core Web Vitals and technical crawling health for 100k+ page catalogs',
      'White-hat editorial backlinks earned on premier Tier-1 industry publications',
      'Protection against Google Core Algorithm updates through bulletproof E-E-A-T architecture'
    ],
    features: [
      {
        title: 'Deep Technical Infrastructure',
        description: 'Auditing server response times, JavaScript rendering, canonical tag chains, and crawl budget distribution.',
        icon: 'Code'
      },
      {
        title: 'Programmatic SEO Scaling',
        description: 'Building dynamic, template-driven landing page engines targeting long-tail commercial intent keywords.',
        icon: 'LayoutGrid'
      },
      {
        title: 'Editorial Link Building & Digital PR',
        description: 'Securing contextual, authoritative mentions on reputable publications like Forbes, TechCrunch, and industry journals.',
        icon: 'ExternalLink'
      },
      {
        title: 'Semantic Content Clustering',
        description: 'Structuring pillar pages and topic clusters to establish absolute topical authority over your category.',
        icon: 'FolderTree'
      }
    ],
    process: [
      { step: 1, title: 'Comprehensive Technical Audit', description: 'Over 140 technical health checkpoints inspected to eliminate indexing barriers and rendering bottlenecks.' },
      { step: 2, title: 'Opportunity & Competitor Gap Analysis', description: 'Pinpoint the exact high-intent search queries where your competitors are extracting revenue.' },
      { step: 3, title: 'Topical Authority Content Sprint', description: 'Publish optimized pillar assets, schema-rich FAQs, and interactive calculators.' },
      { step: 4, title: 'Authority Link Acquisition', description: 'Execute outreach campaigns to earn high-tier domain authority links.' }
    ],
    deliverables: [
      'Technical SEO Fix Roadmap with developer tickets',
      'Topical Authority Keyword & Content Matrix',
      'High-Authority Backlink Placement Portfolio',
      'Monthly Keyword Velocity & Organic Revenue Analytics'
    ],
    faqs: [
      {
        question: 'How long until we see tangible organic traffic growth?',
        answer: 'Technical fixes often yield improvements within 3 to 6 weeks. Significant competitive keyword movements typically compound between months 3 through 6 as domain authority and topical clusters mature.'
      }
    ],
    relatedCaseStudies: ['healthtech-seo-dominance', 'b2b-saas-geo-domination']
  },
  {
    id: 'social-media-marketing',
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    category: 'Digital Growth',
    badge: 'Viral Engagement',
    iconName: 'Share2',
    shortDescription: 'Build an engaged, loyal community with viral short-form video strategies, trend-jacking, and executive personal branding across LinkedIn, Instagram, and TikTok.',
    heroHeadline: 'Transform Followers into Evangelists with High-Impact Social Strategy',
    fullDescription: 'Social media is the heartbeat of brand perception. We craft native, algorithm-favored short-form reels, thought-leadership carousels, and proactive community engagement tactics that position your brand as the undeniable cultural leader of your niche.',
    benefits: [
      'Consistent organic reach through algorithmic hook optimization',
      'Executive thought leadership on LinkedIn driving high-value B2B inbound leads',
      'Vibrant community management turning comments into customer conversations',
      'End-to-end content production from scriptwriting to final cut and scheduling'
    ],
    features: [
      {
        title: 'Short-Form Video Production',
        description: 'Snappy, retention-optimized Reels, TikToks, and Shorts designed to stop the scroll in the first 2 seconds.',
        icon: 'Video'
      },
      {
        title: 'Executive Personal Branding',
        description: 'Ghostwriting high-impact LinkedIn essays and carousels for C-suite leaders to attract talent and enterprise deals.',
        icon: 'UserCheck'
      },
      {
        title: 'Proactive Community Management',
        description: 'Active daily moderation, conversational replies, and strategic commenting on key industry influencers.',
        icon: 'MessageSquare'
      },
      {
        title: 'Social Listening & Trend Jacking',
        description: 'Real-time monitoring of viral audio and cultural moments to inject your brand organically into the conversation.',
        icon: 'Radio'
      }
    ],
    process: [
      { step: 1, title: 'Audience Persona & Tone Blueprint', description: 'Define the distinct visual identity, voice, and narrative pillars that resonate with your target demographic.' },
      { step: 2, title: 'Monthly Production Sprint', description: 'Batch-produce scripts, graphics, carousels, and video edits for streamlined review and approval.' },
      { step: 3, title: 'Strategic Multi-Platform Distribution', description: 'Schedule posts during peak engagement windows tailored to each platform’s algorithm.' },
      { step: 4, title: 'Analysis & Iteration', description: 'Analyze retention curves, save rates, and direct message conversions to refine the creative flywheel.' }
    ],
    deliverables: [
      'Monthly Social Media Content Calendar (20-30 assets)',
      'High-Resolution Graphic Assets & Edited Reels',
      'Executive LinkedIn Ghostwriting Content Pack',
      'Monthly Engagement & Follower Growth Analytics'
    ],
    faqs: [
      {
        question: 'Which social platforms do you recommend for our company?',
        answer: 'We tailor the platform mix to your business model. For B2B companies, LinkedIn and YouTube typically yield the highest lead value. For D2C and consumer brands, Instagram, TikTok, and YouTube Shorts drive the strongest brand resonance.'
      }
    ],
    relatedCaseStudies: ['luxury-beverage-social-rebrand']
  },
  {
    id: 'google-ads',
    slug: 'google-ads',
    title: 'Google Ads (PPC)',
    category: 'Digital Growth',
    badge: 'Intent Monetization',
    iconName: 'MousePointerClick',
    shortDescription: 'Capture high-intent buyers at the exact moment of search with meticulously structured Google Search, Performance Max, and YouTube ad campaigns.',
    heroHeadline: 'Capture High-Intent Buyers with High-ROI Google Search & Performance Max Campaigns',
    fullDescription: 'Every second, high-intent prospects search Google for the exact solutions you offer. We engineer laser-focused Google Ads architectures—including Performance Max asset groups, single-keyword search clusters, negative keyword sculpting, and offline conversion tracking—to extract maximum revenue from your ad spend.',
    benefits: [
      'Stop wasting budget on irrelevant search terms with airtight negative keyword lists',
      'Enhanced Offline Conversion Tracking feeding clean buyer values back into Google’s smart bidding',
      'High Quality Scores leading to lower Cost-Per-Click (CPC) than your competitors',
      'Transparent weekly reporting focused purely on Revenue and ROAS, not vanity clicks'
    ],
    features: [
      {
        title: 'Performance Max (PMax) Optimization',
        description: 'Deep asset group segmentation and audience signal engineering to guide Google’s algorithm towards your ideal buyers.',
        icon: 'Maximize2'
      },
      {
        title: 'Search Intent Architecture',
        description: 'Granular ad groups with hyper-relevant headlines that achieve 10/10 Quality Scores and high click-through rates.',
        icon: 'Search'
      },
      {
        title: 'Conversion Tracking & Offline Imports',
        description: 'Server-side Google Tag Manager (GTM) setup ensuring zero data loss from browser ad-blockers and iOS privacy restrictions.',
        icon: 'CheckCircle'
      },
      {
        title: 'YouTube & Display Remarketing',
        description: 'Stunning visual video ads that re-engage previous site visitors and pull them back to finish their transactions.',
        icon: 'Tv'
      }
    ],
    process: [
      { step: 1, title: 'Full Account & Tracking Audit', description: 'Diagnose wasted ad spend, review search query reports, and audit conversion tracking accuracy.' },
      { step: 2, title: 'Campaign Restructuring', description: 'Rebuild campaign hierarchies, write compelling ad copy variants, and inject sitelink extensions.' },
      { step: 3, title: 'Smart Bidding Calibration', description: 'Train Google’s Target CPA and Target ROAS algorithms with high-quality first-party data.' },
      { step: 4, title: 'Weekly Scaling & Negatives Sculpting', description: 'Continuously weed out search term waste and aggressively bid on proven converting queries.' }
    ],
    deliverables: [
      'Clean Google Ads Account Architecture',
      'Server-side GTM Tracking Configuration',
      'Bespoke Search Copy & Ad Extension Portfolio',
      'Live ROAS & Cost-per-Acquisition Dashboard'
    ],
    faqs: [
      {
        question: 'What is a reasonable minimum ad budget to start with?',
        answer: 'While we work with brands spending anywhere from $3,000 to over $100,000 monthly, we generally recommend at least $2,500/month in ad spend to feed Google’s machine learning algorithms enough conversion signals to optimize effectively.'
      }
    ],
    relatedCaseStudies: ['fintech-ai-acquisition-scale']
  },
  {
    id: 'meta-ads',
    slug: 'meta-ads',
    title: 'Meta Ads (Facebook & Instagram)',
    category: 'Digital Growth',
    badge: 'Creative Scaling Engine',
    iconName: 'Layers',
    shortDescription: 'Scale your revenue with battle-tested Meta advertising systems combining dynamic creative testing, broad targeting, and Conversion API (CAPI) infrastructure.',
    heroHeadline: 'Scale Customer Acquisition on Facebook & Instagram with Creative-Led Systems',
    fullDescription: 'In the modern Meta advertising landscape, creative is your targeting. We combine psychologically backed visual hooks, UGC-style video assets, and robust Meta Conversions API (CAPI) server tracking to unlock scalable, profitable customer acquisition across Facebook and Instagram.',
    benefits: [
      'Predictable scaling with lower CPA through relentless creative testing cycles',
      'First-party Conversions API (CAPI) integration bypassing iOS privacy signal loss',
      'Broad targeting strategies that give Meta’s Andromeda AI the freedom to find your cheapest conversions',
      'Dedicated creative strategist delivering fresh high-converting hooks every single week'
    ],
    features: [
      {
        title: 'Creative-Led Targeting Strategy',
        description: 'Developing varied visual hooks (founder stories, objection crushers, UGC testimonials) that attract different buyer personas.',
        icon: 'Film'
      },
      {
        title: 'Meta Conversions API (CAPI)',
        description: 'Server-to-server tracking pipeline connecting Shopify, Stripe, or CRM directly to Meta Events Manager.',
        icon: 'Server'
      },
      {
        title: 'Dynamic Creative Testing (DCT)',
        description: 'Systematic testing of 3 copy hooks × 3 creatives × 2 headlines to quickly identify breakthrough winners.',
        icon: 'Sliders'
      },
      {
        title: 'Full-Funnel Retargeting Matrix',
        description: 'Segmented remarketing campaigns that nurture cart abandoners with limited-time offers and social proof.',
        icon: 'RefreshCw'
      }
    ],
    process: [
      { step: 1, title: 'Creative & Technical Audit', description: 'Analyze historical creative fatigue, Event Quality Match score, and landing page drop-offs.' },
      { step: 2, title: 'Creative Sprint & CAPI Setup', description: 'Set up server-side tracking and produce initial batch of 12 distinct video and image creatives.' },
      { step: 3, title: 'DCT Sandbox Testing', description: 'Deploy dynamic creative testing ad sets to isolate winning combinations with statistical certainty.' },
      { step: 4, title: 'Budget Scaling into Evergreen Campaigns', description: 'Graduate winning ads into high-budget scaling campaigns with automated safety rules.' }
    ],
    deliverables: [
      'Meta Conversions API Server Integration',
      'Bi-weekly Creative Drop (10-15 high-converting ads)',
      'Dynamic Creative Testing Framework',
      'Real-time Meta ROAS & Blended CAC Dashboard'
    ],
    faqs: [
      {
        question: 'Why do our Facebook ads stop performing after a few weeks?',
        answer: 'Ad fatigue is the #1 reason performance drops. When the same audience sees an ad repeatedly, frequency rises and click-through rates plummet. Our systematic weekly creative drops introduce fresh visual angles to prevent fatigue permanently.'
      }
    ],
    relatedCaseStudies: ['ecommerce-meta-ai-scaling', 'luxury-beverage-social-rebrand']
  },

  // ==========================================
  // CATEGORY 2: CREATIVE & BRAND
  // ==========================================
  {
    id: 'graphic-design',
    slug: 'graphic-design',
    title: 'Graphic Design & Visual Identity',
    category: 'Creative & Brand',
    badge: 'Premium Visuals',
    iconName: 'Palette',
    shortDescription: 'Bespoke brand identities, design systems, digital collateral, and packaging that command premium pricing and customer loyalty.',
    heroHeadline: 'Craft an Unforgettable Visual Brand That Commands Premium Market Value',
    fullDescription: 'Your visual identity is the instant subconscious judgment prospects make about your competence and price point. We create cohesive brand design systems—from custom logo marks and typography suites to marketing collateral, pitch decks, and digital design libraries—that make your brand stand out with unmistakable authority.',
    benefits: [
      'Elevate your market perception to justify higher enterprise and consumer pricing',
      'Unified design system ensuring pixel-perfect consistency across all digital and print touchpoints',
      'Complete vector asset library ready for web, mobile, apparel, and large-format print',
      'Comprehensive Brand Guidelines manual empowering your internal team to execute flawlessly'
    ],
    features: [
      {
        title: 'Brand Identity & Logo Architecture',
        description: 'Iconic logo marks, custom monograms, color psychology palettes, and harmonious typography hierarchies.',
        icon: 'PenTool'
      },
      {
        title: 'Comprehensive Brand Guidelines',
        description: 'A 50+ page brand book detailing spacing rules, misuse guidelines, digital color codes, and tone guidelines.',
        icon: 'BookOpen'
      },
      {
        title: 'Marketing & Sales Collateral',
        description: 'Executive pitch decks, one-pagers, whitepapers, social media design templates, and event booth graphics.',
        icon: 'FileSpreadsheet'
      },
      {
        title: 'Design System Tokens',
        description: 'Figma design tokens mapped directly to Tailwind CSS variables for seamless developer handoff.',
        icon: 'Component'
      }
    ],
    process: [
      { step: 1, title: 'Brand Discovery & Archetype Workshop', description: 'Uncover your core brand values, target demographic psychology, and competitive visual landscape.' },
      { step: 2, title: 'Concept Moodboards & Sketches', description: 'Develop 3 contrasting creative directions exploring typography, spatial balance, and emotional tone.' },
      { step: 3, title: 'Refinement & Asset Generation', description: 'Iterate upon the chosen direction, perfecting optical kerning, vector bezier paths, and color systems.' },
      { step: 4, title: 'Design System Delivery', description: 'Package all vector exports, Figma component libraries, and the comprehensive brand style guide.' }
    ],
    deliverables: [
      'Master Vector Logo Suite (.SVG, .EPS, .PNG, .PDF)',
      'Comprehensive Brand Guidelines Book',
      'Complete Figma Component & Token Library',
      'Sales Pitch Deck & Digital Collateral Suite'
    ],
    faqs: [
      {
        question: 'What do we receive at the end of the branding project?',
        answer: 'You receive full ownership rights, a master Figma design file, an organized cloud folder with every asset format, and an exhaustive Brand Guideline manual covering all digital and physical applications.'
      }
    ],
    relatedCaseStudies: ['luxury-beverage-social-rebrand']
  },
  {
    id: 'video-editing',
    slug: 'video-editing',
    title: 'Video Editing / Video Reels & Social Media Visuals',
    category: 'Creative & Brand',
    badge: 'High-Retention Creative',
    iconName: 'Video',
    shortDescription: 'High-velocity short-form reels, 3D motion graphics, kinetic typography, and ad creatives edited to maximize viewer retention.',
    heroHeadline: 'Scroll-Stopping Video Production & High-Retention Reels That Go Viral',
    fullDescription: 'Video is the undisputed champion of consumer attention. Our dedicated post-production studio crafts dopamine-triggering short-form reels, cinematic YouTube videos, kinetic typography ads, and explainer animations designed to maximize average view duration and convert viewers into paying customers.',
    benefits: [
      'Hook retention rates that consistently beat platform averages in the first 3 seconds',
      'Dynamic sound design, kinetic captions, and subtle 3D transitions that keep eyes glued',
      'Fast 48-hour turnarounds on iterative ad creative tests',
      'Multi-aspect ratio outputs tailored perfectly for 9:16 vertical, 16:9 widescreen, and 1:1 square feeds'
    ],
    features: [
      {
        title: 'Retention-Engineered Editing',
        description: 'Pacing, J-cuts, visual b-roll pops, and seamless loop transitions engineered to hack watch-time algorithms.',
        icon: 'FastForward'
      },
      {
        title: 'Kinetic Subtitles & Micro-Animations',
        description: 'Eye-catching animated subtitles with custom brand typography, emojis, and highlighting effects.',
        icon: 'Type'
      },
      {
        title: 'Bespoke Sound Design',
        description: 'Layered sound effects (whooshes, risers, cinematic impacts) and royalty-free commercial music licensing.',
        icon: 'Volume2'
      },
      {
        title: 'High-Converting Video Ads',
        description: 'Direct-response ad frameworks including Problem-Agitate-Solve, Before-and-After, and Founder Showcases.',
        icon: 'Sparkles'
      }
    ],
    process: [
      { step: 1, title: 'Concept, Scripting & Hook Ideation', description: 'Brainstorm 5 high-converting hook angles for every video concept backed by viral pattern data.' },
      { step: 2, title: 'Raw Footage Ingestion & Sync', description: 'Color grade raw camera profiles, clean up dialogue audio, and assemble the rough narrative cut.' },
      { step: 3, title: 'Visual Effects & Kinetic Motion', description: 'Inject custom graphic overlays, dynamic zooms, sound effects, and kinetic subtitles.' },
      { step: 4, title: 'Multi-Format Render & Delivery', description: 'Export 4K ProRes and optimized mobile MP4s with custom designed thumbnail cover cards.' }
    ],
    deliverables: [
      'Batch of 16-24 Polished Short-Form Reels / Month',
      'Custom Click-Optimized Thumbnail Covers',
      'Multi-Platform Aspect Ratios (9:16, 1:1, 16:9)',
      'Master High-Resolution Archive Access'
    ],
    faqs: [
      {
        question: 'Do we need to film our own raw video footage?',
        answer: 'You can either send us raw smartphone or camera footage (we provide step-by-step recording guides and teleprompter scripts), or we can produce 100% studio-grade motion graphics, kinetic typography, and stock-curated videos without you stepping in front of a camera.'
      }
    ],
    relatedCaseStudies: ['luxury-beverage-social-rebrand', 'ecommerce-meta-ai-scaling']
  },

  // ==========================================
  // CATEGORY 3: WEB & TECHNOLOGY
  // ==========================================
  {
    id: 'website-development',
    slug: 'website-development',
    title: 'Website Development',
    category: 'Web & Technology',
    badge: 'Next-Gen Performance',
    iconName: 'Code2',
    shortDescription: 'Modern, high-performance web applications built with Next.js, React, TypeScript, and Tailwind CSS engineered for sub-second speed.',
    heroHeadline: 'Build Blazing-Fast, High-Converting Web Platforms with Modern Tech Stacks',
    fullDescription: 'Your website is your 24/7 top-performing salesperson. We build custom, ultra-fast web platforms using Next.js 14+, React, TypeScript, and modern headless architectures. Featuring 100/100 Lighthouse performance scores, fluid micro-interactions, and frictionless conversion funnels, your site will outpace the competition on every benchmark.',
    benefits: [
      'Sub-second page load times that maximize conversion rates and Google SEO rankings',
      'Custom React/TypeScript codebase with zero template bloat or security vulnerabilities',
      'Responsive design meticulously tested across all mobile, tablet, and ultra-wide screens',
      'Intuitive headless CMS integration empowering your team to update content effortlessly'
    ],
    features: [
      {
        title: 'Modern Next.js & React Architecture',
        description: 'Server Components, dynamic edge routing, and streaming SSR for instant, zero-latency user experiences.',
        icon: 'Terminal'
      },
      {
        title: 'Fluid 3D & Micro-Interactions',
        description: 'Tasteful Framer Motion scroll animations and interactive WebGL canvas elements that captivate visitors.',
        icon: 'Sparkles'
      },
      {
        title: 'Headless CMS Integration',
        description: 'Seamless integration with Sanity, Strapi, or Contentful for flexible, no-code editorial publishing.',
        icon: 'Database'
      },
      {
        title: 'Enterprise Security & Performance',
        description: 'Edge caching, automated SSL, automated CI/CD pipelines, and strict Content Security Policies (CSP).',
        icon: 'ShieldCheck'
      }
    ],
    process: [
      { step: 1, title: 'Information Architecture & Wireframing', description: 'Map out user conversion journeys, page hierarchies, and low-fidelity structural blueprints.' },
      { step: 2, title: 'High-Fidelity UI/UX Design in Figma', description: 'Design responsive desktop and mobile prototypes with complete component states.' },
      { step: 3, title: 'Full-Stack Development Sprint', description: 'Code the application in Next.js, TypeScript, and Tailwind CSS with interactive motion polish.' },
      { step: 4, title: 'QA, Speed Optimization & Deployment', description: 'Exhaustive cross-browser testing, accessibility compliance (WCAG AA), and DNS cutover.' }
    ],
    deliverables: [
      'Production-Ready Next.js / TypeScript Web Application',
      'Headless CMS Publishing Dashboard',
      '100/100 Core Web Vitals Optimization',
      'Full Source Code Repository & Documentation'
    ],
    tiers: [
      {
        name: 'Growth Web Platform',
        price: '$5,500',
        description: 'Custom 5-8 page modern website for scaling businesses ready to stand out.',
        highlights: ['Next.js + Tailwind CSS', 'Custom animations & interactions', 'CMS integration', 'Basic SEO setup']
      },
      {
        name: 'Enterprise Custom Portal',
        price: '$11,500',
        description: 'Complex multi-page web application with custom portal logic, 3D elements, and full CRM integration.',
        highlights: ['Custom interactive 3D / WebGL graphics', 'Advanced headless CMS architecture', 'Complex lead routing & calculator logic', 'VIP maintenance & SLA warranty'],
        popular: true
      }
    ],
    faqs: [
      {
        question: 'Why do you use Next.js and React instead of WordPress?',
        answer: 'WordPress sites suffer from slow database queries, security vulnerabilities, and bloated plugins that hurt Google rankings. Next.js produces static pre-rendered pages with instantaneous edge delivery, providing unmatched speed, security, and limitless design freedom.'
      }
    ],
    relatedCaseStudies: ['modern-fintech-web-rebuild', 'b2b-saas-geo-domination']
  },
  {
    id: 'app-development',
    slug: 'app-development',
    title: 'Mobile App Development (iOS & Android)',
    category: 'Web & Technology',
    badge: 'Cross-Platform Native',
    iconName: 'Smartphone',
    shortDescription: 'Native iOS and Android applications built with React Native and Flutter, featuring offline capability and smooth 60fps animations.',
    heroHeadline: 'Ship Polished, High-Retention iOS & Android Apps from a Single Codebase',
    fullDescription: 'Turn your product vision into an intuitive mobile app that users love opening daily. Using cross-platform technologies like React Native and Flutter, we deliver native-speed performance, biometric authentication, offline synchronization, and seamless push notifications with half the maintenance cost of separate codebases.',
    benefits: [
      'Unified codebase delivering simultaneous iOS App Store and Google Play launches',
      'Silky 60fps animations, native haptic feedback, and fluid gesture handling',
      'Robust offline-first architecture keeping users engaged even without cell service',
      'Turnkey App Store submission handling and compliance review management'
    ],
    features: [
      {
        title: 'React Native & Flutter Architecture',
        description: 'Native compilation to ARM binary for true native performance, memory efficiency, and platform styling.',
        icon: 'Cpu'
      },
      {
        title: 'Push Notification Engine',
        description: 'Segmented, automated push triggers via OneSignal or Firebase Cloud Messaging to boost retention.',
        icon: 'Bell'
      },
      {
        title: 'Biometrics & Secure Enclave',
        description: 'FaceID, TouchID, and encrypted keychain storage protecting user authentication tokens.',
        icon: 'Lock'
      },
      {
        title: 'In-App Subscriptions & Payments',
        description: 'Flawless RevenueCat and Stripe integration handling Apple Pay, Google Pay, and tiered recurring subscriptions.',
        icon: 'CreditCard'
      }
    ],
    process: [
      { step: 1, title: 'App Blueprint & UX Flows', description: 'Map screen transitions, state management lifecycles, and edge case error states.' },
      { step: 2, title: 'Interactive Clickable Prototype', description: 'Test the tactile feel and navigation paradigms on physical devices using TestFlight.' },
      { step: 3, title: 'Core Engineering & API Hookup', description: 'Build native components, offline SQLite/WatermelonDB storage, and REST/GraphQL integrations.' },
      { step: 4, title: 'Store Submission & Launch', description: 'Prepare App Store screenshots, privacy declarations, and guide your app through Apple and Google review.' }
    ],
    deliverables: [
      'Production iOS & Android Binary Builds (.IPA and .AAB)',
      'Backend API & Database Microservices',
      'App Store Optimization (ASO) Screenshot Pack',
      'Comprehensive Architecture & Deployment Docs'
    ],
    faqs: [
      {
        question: 'Will a cross-platform React Native app feel like a real native app?',
        answer: 'Yes! React Native renders true native UI components (UIKit on iOS and Android View on Android), giving your users the authentic tactile feel, native gestures, and 60fps responsiveness of pure native code.'
      }
    ],
    relatedCaseStudies: ['modern-fintech-web-rebuild']
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design & Product Prototyping',
    category: 'Web & Technology',
    badge: 'Human-Centered Design',
    iconName: 'Layout',
    shortDescription: 'Data-driven user interface and user experience design, wireframing, design systems, and clickable Figma prototypes.',
    heroHeadline: 'Design Intuitive User Experiences That Frictionlessly Turn Visitors into Advocates',
    fullDescription: 'Beautiful design is meaningless if users cannot navigate your software intuitively. Our UI/UX design practice blends cognitive psychology, empirical user testing, and refined visual aesthetics into intuitive digital interfaces that shorten onboarding times, reduce churn, and drive measurable product adoption.',
    benefits: [
      'Eliminate user friction points and cognitive overload across complex workflows',
      'Rapid interactive Figma prototypes allowing you to validate assumptions before writing code',
      'Scalable design systems with auto-layout and responsive component variants',
      'Comprehensive usability audits identifying exact drop-off points in your funnels'
    ],
    features: [
      {
        title: 'User Journey & Empathy Mapping',
        description: 'Analyzing user mental models, behavioral drivers, and friction points across the entire lifecycle.',
        icon: 'Compass'
      },
      {
        title: 'Interactive Clickable Figma Prototypes',
        description: 'High-fidelity prototypes with realistic hover states, micro-interactions, and conditional logic.',
        icon: 'MousePointer'
      },
      {
        title: 'Atomic Design Systems',
        description: 'Standardized libraries of buttons, inputs, modals, typography tokens, and spacing grids.',
        icon: 'Layers'
      },
      {
        title: 'Usability Testing & Session Replay',
        description: 'Empirical user testing sessions analyzing heatmaps and screen recordings to validate design clarity.',
        icon: 'Eye'
      }
    ],
    process: [
      { step: 1, title: 'User Research & Competitive Benchmarking', description: 'Conduct stakeholder interviews and audit top market leaders to identify experience gaps.' },
      { step: 2, title: 'Low-Fidelity Wireframes', description: 'Iterate rapidly on layout options, content prioritization, and visual ergonomics.' },
      { step: 3, title: 'Visual UI Design & Component Crafting', description: 'Apply typography, color palettes, elevation shadows, and micro-interactions.' },
      { step: 4, title: 'Developer Handoff & Redlines', description: 'Provide detailed spacing redlines, responsive constraints, and asset exports for engineering.' }
    ],
    deliverables: [
      'Master Figma Workspace with Clickable Prototype',
      'Complete Atomic Design System Library',
      'Usability Test Findings & Video Recordings',
      'Developer Handoff Specification Document'
    ],
    faqs: [
      {
        question: 'Do you deliver static mockups or interactive prototypes?',
        answer: 'We deliver fully interactive, clickable prototypes inside Figma that simulate actual software behavior, including micro-interactions, modal overlays, and form validation states.'
      }
    ],
    relatedCaseStudies: ['modern-fintech-web-rebuild', 'b2b-saas-geo-domination']
  },
  {
    id: 'ecommerce-development',
    slug: 'ecommerce-development',
    title: 'eCommerce Development (Shopify & Custom Headless)',
    category: 'Web & Technology',
    badge: 'Conversion-Engineered Stores',
    iconName: 'ShoppingBag',
    shortDescription: 'High-converting Shopify Plus stores and custom headless commerce solutions built to scale sales, Average Order Value, and customer retention.',
    heroHeadline: 'Scale Direct-to-Consumer Revenue with Conversion-Engineered eCommerce Stores',
    fullDescription: 'Stop losing sales to clunky checkouts and sluggish mobile pages. We architect high-converting eCommerce stores on Shopify Plus and custom headless frameworks (Next.js + Medusa / Shopify Storefront API) with instant 1-click checkouts, intelligent cross-sells, and tailored subscription funnels that boost Average Order Value (AOV).',
    benefits: [
      'Lightning-fast product catalog navigation and instant instant-search indexing',
      'Custom checkout optimizations and post-purchase upsells that elevate AOV by 20%+',
      'Seamless multi-currency, international localization, and automated tax calculations',
      'Complete integrations with Klaviyo, Gorgias, Recharge, and warehouse 3PL systems'
    ],
    features: [
      {
        title: 'Custom Shopify Plus Theme Engineering',
        description: 'Bespoke Liquid and headless React architectures with zero third-party app conflicts or slow render times.',
        icon: 'Cpu'
      },
      {
        title: 'High-AOV Upsell & Cross-Sell Engines',
        description: 'In-cart product recommendations, threshold free-shipping meters, and post-purchase 1-click upsells.',
        icon: 'DollarSign'
      },
      {
        title: 'Subscription & Recurring Billing',
        description: 'Tailored subscription membership models built with Recharge or Shopify Subscriptions API.',
        icon: 'Repeat'
      },
      {
        title: 'Omnichannel Inventory & 3PL Sync',
        description: 'Direct bi-directional sync with ShipBob, Amazon FBA, ERP systems, and physical retail POS registers.',
        icon: 'Truck'
      }
    ],
    process: [
      { step: 1, title: 'Merchandising & Catalog Strategy', description: 'Analyze SKU hierarchies, pricing tiers, bundle opportunities, and high-margin product pathways.' },
      { step: 2, title: 'UX & Cart Flow Wireframing', description: 'Design mobile-first collection filters, product detail pages (PDPs), and slide-out cart drawers.' },
      { step: 3, title: 'Theme Development & App Integration', description: 'Code the custom store, hook up third-party marketing apps, and configure server-side tracking.' },
      { step: 4, title: 'Checkout Testing & Store Migration', description: 'Migrate past customer records, test payment gateways across all card types, and cut over live.' }
    ],
    deliverables: [
      'Bespoke Shopify Plus / Headless Commerce Store',
      'Optimized Slide-Out Cart with Dynamic Upsell Engine',
      'Full ERP & 3PL Warehouse Integration',
      'Automated Klaviyo Lifecycle Flows (Abandonment, Welcome, Win-back)'
    ],
    faqs: [
      {
        question: 'Can you migrate all our products and customer history from WooCommerce or Magento?',
        answer: 'Yes, we execute zero-downtime migrations including product variants, customer databases, past order histories, and SEO 301 redirects to ensure you maintain all search rankings.'
      }
    ],
    relatedCaseStudies: ['ecommerce-meta-ai-scaling']
  },
  {
    id: 'website-maintenance',
    slug: 'website-maintenance',
    title: 'Website Maintenance & Speed Optimization',
    category: 'Web & Technology',
    badge: '24/7 Security & Uptime',
    iconName: 'Wrench',
    shortDescription: 'Proactive 24/7 uptime monitoring, security patching, Core Web Vitals optimization, and dedicated monthly development support hours.',
    heroHeadline: 'Keep Your Web Platform Bulletproof, Blazing Fast, and Always Online',
    fullDescription: 'Never worry about broken plugins, malware attacks, or sudden website outages again. Our white-glove Website Maintenance & SLA Support service provides around-the-clock uptime monitoring, daily automated cloud backups, critical security patch management, and dedicated monthly developer hours to push continuous updates.',
    benefits: [
      'Guaranteed 99.99% uptime with 24/7 automated synthetic response time monitoring',
      'Immediate emergency response SLA within 30 minutes for critical outages',
      'Daily off-site encrypted backups ensuring instantaneous point-in-time recovery',
      'Regular Core Web Vitals audits ensuring your site stays in Google’s good graces'
    ],
    features: [
      {
        title: '24/7 Synthetic Uptime Monitoring',
        description: 'Global ping checks every 60 seconds from 12 global regions detecting latency spikes before users do.',
        icon: 'Activity'
      },
      {
        title: 'Proactive Security & Malware Defense',
        description: 'Web Application Firewall (WAF) configuration, DDoS mitigation, and continuous vulnerability scans.',
        icon: 'ShieldAlert'
      },
      {
        title: 'Core Web Vitals Tuning',
        description: 'Continuous image compression, font optimization, and JavaScript bundle pruning to maintain green scores.',
        icon: 'Gauge'
      },
      {
        title: 'Dedicated Monthly Developer Hours',
        description: 'Use your hours for new feature requests, landing page builds, copy updates, and marketing integrations.',
        icon: 'Clock'
      }
    ],
    process: [
      { step: 1, title: 'Onboarding & Security Audit', description: 'Inspect server logs, clean up legacy dependencies, and set up staging environments.' },
      { step: 2, title: 'Automated Monitoring Setup', description: 'Connect real-time uptime monitors, SSL renewal alerts, and error tracking via Sentry.' },
      { step: 3, title: 'Daily Backups & Staging Updates', description: 'Run daily cloud backups and test all dependency updates in isolated staging before live deployment.' },
      { step: 4, title: 'Monthly Executive Health Report', description: 'Receive detailed monthly reports detailing uptime, security events, speed metrics, and completed tasks.' }
    ],
    deliverables: [
      '24/7 Automated Uptime & Error Alerting',
      'Daily Automated Encrypted Cloud Backups',
      'Dedicated 10-20 Monthly Engineering Hours',
      'Monthly Security & Core Web Vitals Health Report'
    ],
    faqs: [
      {
        question: 'What happens if our website goes down in the middle of the night?',
        answer: 'Our automated synthetic monitors instantly page our on-call engineering team via PagerDuty. A senior developer diagnoses and resolves the issue immediately—often before your team even wakes up.'
      }
    ],
    relatedCaseStudies: ['modern-fintech-web-rebuild']
  },
  {
    id: 'domain-hosting',
    slug: 'domain-hosting',
    title: 'Domain & Cloud Hosting Management',
    category: 'Web & Technology',
    badge: 'Enterprise Infrastructure',
    iconName: 'Server',
    shortDescription: 'Enterprise cloud hosting setup, DNS management, Global CDN edge distribution, and custom email deliverability configurations.',
    heroHeadline: 'High-Performance Cloud Infrastructure, Global CDN & Bulletproof DNS',
    fullDescription: 'Slow hosting and misconfigured DNS records destroy marketing campaigns. We architect enterprise-grade cloud hosting on AWS, Google Cloud, and Vercel Edge Networks. With custom Cloudflare Enterprise routing, global caching, automated SSL management, and pristine DKIM/SPF/DMARC email deliverability, your digital foundation is unshakeable.',
    benefits: [
      'Sub-50ms Global Time-to-First-Byte (TTFB) via Anycast Edge CDN networks',
      'Pristine email deliverability ensuring your cold outreach and newsletters never land in spam',
      'Seamless autoscaling capable of absorbing millions of sudden viral traffic spikes',
      'Complete domain portfolio protection against DNS hijacking and spoofing'
    ],
    features: [
      {
        title: 'Global Anycast Edge CDN',
        description: 'Static assets and cached HTML distributed across 300+ edge nodes worldwide for instant localized delivery.',
        icon: 'Globe'
      },
      {
        title: 'DNS & DMARC/DKIM/SPF Hardening',
        description: 'Airtight email authentication records to guarantee high inbox placement and prevent email spoofing.',
        icon: 'MailCheck'
      },
      {
        title: 'Autoscaling Serverless Architecture',
        description: 'Zero server management needed—resources scale up elastically during major sales spikes and down to zero idle cost.',
        icon: 'CloudLightning'
      },
      {
        title: 'Automated SSL & DDoS Mitigation',
        description: 'Enterprise Cloudflare DDoS shields protecting against Layer 3, 4, and 7 volumetric attacks.',
        icon: 'ShieldCheck'
      }
    ],
    process: [
      { step: 1, title: 'Infrastructure & DNS Audit', description: 'Analyze existing server bottlenecks, DNS propagation delays, and email spam scores.' },
      { step: 2, title: 'Cloud Environment Provisioning', description: 'Set up isolated staging and production environments on Vercel / AWS with CI/CD hooks.' },
      { step: 3, title: 'Zero-Downtime DNS Cutover', description: 'Migrate nameservers with low TTL values to guarantee zero packet loss or downtime.' },
      { step: 4, title: 'Email Deliverability Verification', description: 'Run automated seed-list tests across Gmail, Outlook, and Yahoo to verify 100% inbox placement.' }
    ],
    deliverables: [
      'Custom Cloud Hosting Environment Setup',
      'Cloudflare Enterprise Edge Configuration',
      'Hardened DNS, SPF, DKIM & DMARC Records',
      '24/7 Global Latency & Uptime Monitoring'
    ],
    faqs: [
      {
        question: 'Will changing our hosting or DNS cause downtime?',
        answer: 'No! We use safe DNS pre-warming techniques and lower TTL (Time To Live) settings in advance, ensuring a seamless, zero-downtime transition.'
      }
    ],
    relatedCaseStudies: ['modern-fintech-web-rebuild']
  }
];

// Helper to get services by category
export const getServicesByCategory = (category: 'Digital Growth' | 'Creative & Brand' | 'Web & Technology') => {
  return servicesData.filter(service => service.category === category);
};

// Helper to get service by slug
export const getServiceBySlug = (slug: string) => {
  return servicesData.find(service => service.slug === slug);
};
