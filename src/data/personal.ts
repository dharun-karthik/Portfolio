export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  phone: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  contact: ContactInfo;
  summary: string;
}

export const personalInfo: PersonalInfo = {
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
};

