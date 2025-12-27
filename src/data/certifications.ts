export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export const certifications: Certification[] = [
  { name: 'Infosys Certified Software Programmer (Python)', issuer: 'Infosys', year: '2022' },
  { name: 'Docker Containers', issuer: 'freeCodeCamp', year: '2022' },
  { name: 'Kubernetes Fundamentals', issuer: 'Udemy', year: '2023' },
];

