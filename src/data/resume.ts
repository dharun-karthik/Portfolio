import type { ResumeData } from './types';

export const resumeData: ResumeData = {
  name: 'Dharun Karthik A',
  title: 'Software Engineer',
  contact: {
    email: 'dkdharun@gmail.com',
    github: 'https://github.com/dharun-karthik',
    linkedin: 'https://linkedin.com/in/dharun-karthik',
    phone: '+91-99439 62784',
  },
  summary:
    'Results-driven Software Engineer with 4 years of experience building scalable, high-performance, and resilient systems across all domains. Skilled in Java, Python, Spring Boot, and React, with expertise in system design, distributed systems, and performance optimization. Experienced in Docker, Kubernetes, and AWS for cloud-native, CI/CD-driven development. Passionate about designing systems that scale seamlessly, reduce latency, and deliver measurable business impact.',
  experience: [
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
            'Enabled top brands like Starbucks and McDonald\'s to launch campaigns 80% faster, boosting revenue by 20%.',
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
  ],
  education: {
    degree: 'Bachelor of Engineering (Electronics and Communication Engineering)',
    institution: 'Sri Eshwar College of Engineering',
    location: 'Coimbatore',
    gpa: '8.3 / 10',
    period: '2018 – 2022',
  },
  certifications: [
    { name: 'Infosys Certified Software Programmer (Python)', issuer: 'Infosys', year: '2022' },
    { name: 'Docker Containers', issuer: 'freeCodeCamp', year: '2022' },
    { name: 'Kubernetes Fundamentals', issuer: 'Udemy', year: '2023' },
  ],
  skills: [
    { category: 'Programming', skills: ['Java', 'Kotlin', 'Python', 'TypeScript'] },
    { category: 'Frameworks', skills: ['Spring Boot', 'ReactJS'] },
    { category: 'DevOps', skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'RabbitMQ', 'Kafka', 'Redis'] },
    { category: 'Cloud', skills: ['AWS (EC2, S3, Athena, Glue, ECR, EKS)', 'Terraform'] },
    { category: 'Databases', skills: ['PostgreSQL', 'MongoDB'] },
    { category: 'Practices', skills: ['TDD', 'SOLID', 'System Design', 'Performance Tuning', 'Clean Architecture'] },
  ],
  achievements: [
    'Optimized microservices and restructured architecture, reducing system bottlenecks and improving performance.',
    'Spearheaded CI/CD automation efforts, improving developer velocity and deployment reliability.',
    'Delivered core product features under tight deadlines, consistently achieving measurable business outcomes.',
    'Mentored 6 interns, all of whom transitioned to full-time engineering roles.',
  ],
};

