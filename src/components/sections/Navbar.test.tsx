import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { Navbar } from './Navbar';

const renderWithChakra = (component: React.ReactNode) => {
  return render(
    <ChakraProvider value={defaultSystem}>
      {component}
    </ChakraProvider>
  );
};

describe('Navbar', () => {
  it('renders the logo with site name', () => {
    renderWithChakra(<Navbar />);
    expect(screen.getByText(/\.dev/)).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    renderWithChakra(<Navbar />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders the Hire Me CTA button', () => {
    renderWithChakra(<Navbar />);
    expect(screen.getByText('Hire Me')).toBeInTheDocument();
  });

  it('has correct href for navigation links', () => {
    renderWithChakra(<Navbar />);
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '#about');
    expect(screen.getByText('Experience').closest('a')).toHaveAttribute('href', '#experience');
    expect(screen.getByText('Skills').closest('a')).toHaveAttribute('href', '#skills');
    expect(screen.getByText('Education').closest('a')).toHaveAttribute('href', '#education');
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '#contact');
  });
});

