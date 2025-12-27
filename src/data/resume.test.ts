import { describe, it, expect } from 'vitest';
import { resumeData } from './resume';

describe('Resume Data', () => {
  it('should have valid personal information', () => {
    expect(resumeData.name).toBe('Dharun Karthik A');
    expect(resumeData.title).toBe('Software Engineer');
  });

  it('should have valid contact information', () => {
    expect(resumeData.contact.email).toBe('dkdharun@gmail.com');
    expect(resumeData.contact.github).toContain('github.com');
    expect(resumeData.contact.linkedin).toContain('linkedin.com');
  });

  it('should have a professional summary', () => {
    expect(resumeData.summary).toBeTruthy();
    expect(resumeData.summary.length).toBeGreaterThan(100);
  });

  it('should have work experience entries', () => {
    expect(resumeData.experience).toHaveLength(3);
    expect(resumeData.experience[0].company).toBe('Tekion Corp');
  });

  it('should have skills categorized', () => {
    expect(resumeData.skills.length).toBeGreaterThan(0);
    const programmingSkills = resumeData.skills.find((s) => s.category === 'Programming');
    expect(programmingSkills).toBeDefined();
    expect(programmingSkills?.skills).toContain('Java');
  });

  it('should have education information', () => {
    expect(resumeData.education.degree).toContain('Engineering');
    expect(resumeData.education.gpa).toBe('8.3 / 10');
  });

  it('should have certifications', () => {
    expect(resumeData.certifications.length).toBeGreaterThan(0);
  });

  it('should have achievements', () => {
    expect(resumeData.achievements.length).toBe(4);
  });
});

