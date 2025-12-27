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

  it('should render the title badge', () => {
    renderWithProvider(<Hero />);
    expect(screen.getByText(/<Software Engineer \/>/)).toBeInTheDocument();
  });

  it('should render social links', () => {
    renderWithProvider(<Hero />);
    expect(screen.getByLabelText('GitHub Profile')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn Profile')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('should have correct GitHub link', () => {
    renderWithProvider(<Hero />);
    const githubLink = screen.getByLabelText('GitHub Profile');
    expect(githubLink).toHaveAttribute('href', personalInfo.contact.github);
  });

  it('should have correct email link', () => {
    renderWithProvider(<Hero />);
    const emailLink = screen.getByLabelText('Email');
    expect(emailLink).toHaveAttribute('href', `mailto:${personalInfo.contact.email}`);
  });
});

