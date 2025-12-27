export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  { category: 'Programming', skills: ['Java', 'Kotlin', 'Python', 'TypeScript'] },
  { category: 'Frameworks', skills: ['Spring Boot', 'ReactJS'] },
  { category: 'DevOps', skills: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'RabbitMQ', 'Kafka', 'Redis'] },
  { category: 'Cloud', skills: ['AWS (EC2, S3, Athena, Glue, ECR, EKS)', 'Terraform'] },
  { category: 'Databases', skills: ['PostgreSQL', 'MongoDB'] },
  { category: 'Practices', skills: ['TDD', 'SOLID', 'System Design', 'Performance Tuning', 'Clean Architecture'] },
];

