import { describe, it, expect } from 'vitest';
import { personalInfo } from './personal';
import { experiences } from './experience';
import { skills } from './skills';
import { education } from './education';
import { certifications } from './certifications';
import { achievements } from './achievements';

describe('Personal Info', () => {
  it('should have valid personal information', () => {
    expect(personalInfo.name).toBe('Dharun Karthik A');
    expect(personalInfo.title).toBe('Software Engineer');
  });

  it('should have valid contact information', () => {
    expect(personalInfo.contact.email).toBe('dkdharun@gmail.com');
    expect(personalInfo.contact.github).toContain('github.com');
    expect(personalInfo.contact.linkedin).toContain('linkedin.com');
  });

  it('should have a professional summary', () => {
    expect(personalInfo.summary).toBeTruthy();
    expect(personalInfo.summary.length).toBeGreaterThan(100);
  });
});

describe('Experience', () => {
  it('should have work experience entries', () => {
    expect(experiences).toHaveLength(3);
    expect(experiences[0].company).toBe('Tekion Corp');
  });

  it('should have projects for Sahaj SWE role', () => {
    const sahajSwe = experiences.find((e) => e.id === 'sahaj-swe');
    expect(sahajSwe?.projects).toHaveLength(2);
  });
});

describe('Skills', () => {
  it('should have skills categorized', () => {
    expect(skills.length).toBeGreaterThan(0);
    const programmingSkills = skills.find((s) => s.category === 'Programming');
    expect(programmingSkills).toBeDefined();
    expect(programmingSkills?.skills).toContain('Java');
  });
});

describe('Education', () => {
  it('should have education information', () => {
    expect(education.degree).toContain('Engineering');
    expect(education.gpa).toBe('8.3 / 10');
  });
});

describe('Certifications', () => {
  it('should have certifications', () => {
    expect(certifications.length).toBe(3);
  });
});

describe('Achievements', () => {
  it('should have achievements', () => {
    expect(achievements.length).toBe(4);
  });
});

