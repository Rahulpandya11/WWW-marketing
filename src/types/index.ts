/**
 * Core Type Definitions for WEST WARD WORKS Digital Marketing Agency
 * 
 * Defines the data contracts for services, categories, case studies,
 * portfolio items, testimonials, and contact inquiries.
 */

export type ServiceCategory = 'Digital Growth' | 'Creative & Brand' | 'Web & Technology';

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  highlights: string[];
  popular?: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: ServiceCategory;
  badge?: string;
  iconName: string; // Lucide icon identifier
  accentColor?: string;
  heroHeadline: string;
  fullDescription: string;
  benefits: string[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  process: ServiceProcessStep[];
  deliverables: string[];
  tiers?: ServiceTier[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedCaseStudies?: string[]; // slugs
}

export interface CaseStudyStat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  highlight?: boolean;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  serviceCategory: ServiceCategory;
  serviceName: string;
  timeframe: string;
  summary: string;
  thumbnail: string;
  stats: CaseStudyStat[];
  challenge: string;
  strategy: string[];
  execution: {
    phase: string;
    title: string;
    details: string;
  }[];
  resultsOverview: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  };
  technologies: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'Web Development' | 'Graphic Design' | 'Video & Social' | 'Marketing Campaigns';
  imageUrl: string;
  summary: string;
  deliverables: string[];
  results?: string;
  year: string;
  liveUrl?: string;
  technologies: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  avatar: string;
  rating: number;
  content: string;
  serviceReceived: string;
  metricHighlight?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}
