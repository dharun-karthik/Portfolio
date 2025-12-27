import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from '../ui/provider';
import { Skills } from './Skills';
import { skills } from '../../data';

const renderWithProvider = (component: React.ReactNode) => {
  return render(<Provider>{component}</Provider>);
};

describe('Skills Component', () => {
  it('should render the section heading', () => {
    renderWithProvider(<Skills />);
    expect(screen.getByRole('heading', { name: /> skills/ })).toBeInTheDocument();
  });

  it('should render all skill categories', () => {
    renderWithProvider(<Skills />);
    skills.forEach((category) => {
      expect(screen.getByText(category.category)).toBeInTheDocument();
    });
  });

  it('should render the tech stats bar', () => {
    renderWithProvider(<Skills />);
    expect(screen.getByText(/years_experience:/)).toBeInTheDocument();
    expect(screen.getByText(/technologies:/)).toBeInTheDocument();
    expect(screen.getByText(/always_learning/)).toBeInTheDocument();
  });

  it('should render programming skills', () => {
    renderWithProvider(<Skills />);
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('should render framework skills', () => {
    renderWithProvider(<Skills />);
    expect(screen.getAllByText('Spring Boot').length).toBeGreaterThan(0);
    expect(screen.getByText('ReactJS')).toBeInTheDocument();
  });

  it('should render DevOps skills', () => {
    renderWithProvider(<Skills />);
    expect(screen.getByText('Docker')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
  });
});

