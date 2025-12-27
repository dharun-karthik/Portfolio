import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from '../ui/provider';
import { Experience } from './Experience';
import { experiences } from '../../data';

const renderWithProvider = (component: React.ReactNode) => {
  return render(<Provider>{component}</Provider>);
};

describe('Experience Component', () => {
  it('should render the section heading', () => {
    renderWithProvider(<Experience />);
    expect(screen.getByText(/experience/)).toBeInTheDocument();
  });

  it('should render all experience entries', () => {
    renderWithProvider(<Experience />);
    // Companies are rendered with location, so we check for partial matches
    expect(screen.getByText(/Tekion Corp/)).toBeInTheDocument();
    expect(screen.getAllByText(/Sahaj Software Solutions/).length).toBe(2);
  });

  it('should render job titles', () => {
    renderWithProvider(<Experience />);
    expect(screen.getAllByText('Software Engineer').length).toBeGreaterThanOrEqual(2);
  });

  it('should render Tekion Corp experience', () => {
    renderWithProvider(<Experience />);
    expect(screen.getByText('Tekion Corp • Bengaluru, India')).toBeInTheDocument();
  });

  it('should render project names for Sahaj experience', () => {
    renderWithProvider(<Experience />);
    expect(screen.getByText('Intelligent Real-time Billboard Bidding System')).toBeInTheDocument();
    expect(screen.getByText('Automobile Line Part Validation System')).toBeInTheDocument();
  });

  it('should render tech stack badges', () => {
    renderWithProvider(<Experience />);
    // Spring Boot appears in multiple projects
    expect(screen.getAllByText('Spring Boot').length).toBeGreaterThan(0);
    expect(screen.getAllByText('PostgreSQL').length).toBeGreaterThan(0);
  });
});

