import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from '../ui/provider';
import { Hero } from './Hero';
import { personalInfo } from '../../data';

const renderWithProvider = (component: React.ReactNode) => {
  return render(<Provider>{component}</Provider>);
};

describe('Hero Component', () => {
  it('should render the name', () => {
    renderWithProvider(<Hero />);
    expect(screen.getByText(personalInfo.name)).toBeInTheDocument();
  });

  it('should render the title', () => {
    renderWithProvider(<Hero />);
    expect(screen.getByText(personalInfo.title)).toBeInTheDocument();
  });

  it('should render available badge', () => {
    renderWithProvider(<Hero />);
    expect(screen.getByText('Available for opportunities')).toBeInTheDocument();
  });

  it('should render social links', () => {
    renderWithProvider(<Hero />);
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('should have correct GitHub link', () => {
    renderWithProvider(<Hero />);
    const githubLink = screen.getByLabelText('GitHub');
    expect(githubLink).toHaveAttribute('href', personalInfo.contact.github);
  });

  it('should have correct email link', () => {
    renderWithProvider(<Hero />);
    const emailLink = screen.getByLabelText('Email');
    expect(emailLink).toHaveAttribute('href', `mailto:${personalInfo.contact.email}`);
  });

  it('should render CTA buttons', () => {
    renderWithProvider(<Hero />);
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    expect(screen.getByText('View GitHub')).toBeInTheDocument();
  });
});

