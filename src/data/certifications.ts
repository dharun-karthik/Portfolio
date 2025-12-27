export interface Certification {
  name: string;
  issuer: string;
  year: string;
  link?: string;
}

export const certifications: Certification[] = [
  { name: 'Infosys Certified Software Programmer (Python)', issuer: 'Infosys', year: '2022', link: 'https://drive.google.com/file/d/1_vcO20gZVKGqxZEmiAiyx03mR5Kx4ID3/view?usp=drive_link' },
  { name: 'Docker Containers', issuer: 'freeCodeCamp', year: '2022' },
  { name: 'Kubernetes Fundamentals', issuer: 'Udemy', year: '2023' },
];

