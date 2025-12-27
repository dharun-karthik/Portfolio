export interface Project {
  name: string;
  techStack: string[];
  highlights: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  projects?: Project[];
}

export const experiences: Experience[] = [
  {
    id: 'tekion',
    title: 'Software Engineer',
    company: 'Tekion Corp',
    location: 'Bengaluru, India',
    period: 'Jun 2024 – Present',
    highlights: [
      'Designing and developing high-performance backend systems for next-gen automotive retail platforms, handling millions of transactions with low latency and high reliability.',
      'Architected and optimized APIs and microservices using Java, Spring Boot, and Python, improving throughput and reducing response latency by 30%.',
      'Implemented CI/CD pipelines with Jenkins, Docker, and Kubernetes, automating builds, testing, and deployments, reducing manual effort and improving release frequency.',
      'Enhanced system observability by integrating metrics and logging frameworks, enabling faster root cause analysis and improved uptime.',
      'Collaborated with cross-functional teams (DevOps, QA, Product) to deliver production-ready, fault-tolerant features aligned with business goals.',
      'Applied TDD, SOLID, and clean architecture principles to maintain high code quality and scalability across services.',
      'Contributed to AWS cloud-native deployments using Terraform, EKS, and managed services, ensuring secure and cost-efficient infrastructure.',
    ],
  },
  {
    id: 'sahaj-swe',
    title: 'Software Engineer',
    company: 'Sahaj Software Solutions',
    location: 'Chennai, India',
    period: 'Jun 2022 – Apr 2024',
    highlights: [],
    projects: [
      {
        name: 'Intelligent Real-time Billboard Bidding System',
        techStack: ['ReactJS', 'Python', 'Spring Boot', 'MongoDB', 'RabbitMQ', 'PostgreSQL', 'Kubernetes', 'ELK'],
        highlights: [
          'Built an OOH campaign planning and bidding tool handling 5,000+ requests/sec from multiple SSPs with <200ms response times.',
          'Precomputed "strategy–deal–creative" matches to optimize bidding flow and reduce response time by 90%.',
          "Enabled top brands like Starbucks and McDonald's to launch campaigns 80% faster, boosting revenue by 20%.",
          'Achieved 99th percentile latency of 150ms, ensuring high-performance bidding.',
        ],
      },
      {
        name: 'Automobile Line Part Validation System',
        techStack: ['Spring Boot', 'PostgreSQL', 'Kafka', 'Docker', 'GitHub Actions', 'Kubernetes'],
        highlights: [
          'Designed a serial number generation and part validation system integrated with SAP for assembly-line tracking.',
          'Built a tree-based data model, cutting data redundancy and storage by 30%.',
          'Achieved 100% part traceability and 30% faster manufacturing, reducing manual effort by 60% and minimizing errors.',
        ],
      },
    ],
  },
  {
    id: 'sahaj-ase',
    title: 'Associate Software Engineer',
    company: 'Sahaj Software Solutions',
    location: 'Chennai, India',
    period: 'Jan 2022 – Jun 2022',
    highlights: [
      'Developed a CSV validation tool using Kotlin and vanilla JS to streamline data quality checks.',
      'Enhanced deployment workflows using Docker and GitHub Actions, cutting build times by 30%.',
      'Increased test coverage from 60% to 92%, reducing production issues by 50%.',
      'Drove feature delivery cycles that improved client revenue by 30% through rapid iteration.',
    ],
  },
];

