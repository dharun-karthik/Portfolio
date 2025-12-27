import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from '../ui/provider';
import { Education } from './Education';
import { education, certifications, achievements } from '../../data';

const renderWithProvider = (component: React.ReactNode) => {
  return render(<Provider>{component}</Provider>);
};

describe('Education Component', () => {
  it('should render the education section heading', () => {
    renderWithProvider(<Education />);
    expect(screen.getByRole('heading', { name: /Education/ })).toBeInTheDocument();
  });

  it('should render the degree information', () => {
    renderWithProvider(<Education />);
    expect(screen.getByText(education.degree)).toBeInTheDocument();
    expect(screen.getByText(education.institution)).toBeInTheDocument();
  });

  it('should render the certifications section heading', () => {
    renderWithProvider(<Education />);
    expect(screen.getByRole('heading', { name: /Certifications/ })).toBeInTheDocument();
  });

  it('should render all certifications', () => {
    renderWithProvider(<Education />);
    certifications.forEach((cert) => {
      expect(screen.getByText(cert.name)).toBeInTheDocument();
    });
  });

  it('should render the achievements section heading', () => {
    renderWithProvider(<Education />);
    expect(screen.getByRole('heading', { name: /Achievements/ })).toBeInTheDocument();
  });

  it('should render all achievements', () => {
    renderWithProvider(<Education />);
    achievements.forEach((achievement) => {
      expect(screen.getByText(achievement)).toBeInTheDocument();
    });
  });

  it('should render certification issuers', () => {
    renderWithProvider(<Education />);
    certifications.forEach((cert) => {
      expect(screen.getByText(cert.issuer)).toBeInTheDocument();
    });
  });
});

