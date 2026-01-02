import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from '../ui/provider';
import { Navbar } from './Navbar';
import { personalInfo } from '../../data';

const renderWithProvider = (component: React.ReactNode) => {
  return render(<Provider>{component}</Provider>);
};

describe('Navbar Component', () => {
  beforeEach(() => {
    // Mock scrollIntoView
    Element.prototype.scrollIntoView = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the logo with name', () => {
    renderWithProvider(<Navbar />);
    const firstName = personalInfo.name.split(' ')[0].toLowerCase();
    expect(screen.getByText(`${firstName}.dev`)).toBeInTheDocument();
  });

  it('should render all nav links', () => {
    renderWithProvider(<Navbar />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should render Hire Me button with correct contact link', () => {
    renderWithProvider(<Navbar />);
    const hireButton = screen.getByText('Hire Me');
    expect(hireButton).toBeInTheDocument();
    expect(hireButton).toHaveAttribute('href', '#contact');
  });

  it('should have correct href for nav links', () => {
    renderWithProvider(<Navbar />);
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '#about');
    expect(screen.getByText('Experience').closest('a')).toHaveAttribute('href', '#experience');
    expect(screen.getByText('Skills').closest('a')).toHaveAttribute('href', '#skills');
    expect(screen.getByText('Education').closest('a')).toHaveAttribute('href', '#education');
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '#contact');
  });

  it('should call scrollIntoView when nav link is clicked', () => {
    // Create a mock section element
    const mockSection = document.createElement('div');
    mockSection.id = 'about';
    document.body.appendChild(mockSection);

    renderWithProvider(<Navbar />);
    const aboutLink = screen.getByText('About');
    
    fireEvent.click(aboutLink);
    
    expect(mockSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    
    // Cleanup
    document.body.removeChild(mockSection);
  });

  it('should prevent default behavior on nav link click', () => {
    renderWithProvider(<Navbar />);
    const aboutLink = screen.getByText('About');
    
    const clickEvent = new MouseEvent('click', { bubbles: true });
    const preventDefaultSpy = vi.spyOn(clickEvent, 'preventDefault');
    
    aboutLink.dispatchEvent(clickEvent);
    
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  describe('Active Section Tracking', () => {
    beforeEach(() => {
      // Create mock sections
      ['about', 'experience', 'skills', 'education', 'contact'].forEach((id, index) => {
        const section = document.createElement('div');
        section.id = id;
        Object.defineProperty(section, 'offsetTop', { value: index * 500, configurable: true });
        document.body.appendChild(section);
      });
    });

    afterEach(() => {
      // Cleanup mock sections
      ['about', 'experience', 'skills', 'education', 'contact'].forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          document.body.removeChild(section);
        }
      });
    });

    it('should add scroll event listener on mount', () => {
      const addEventListenerSpy = vi.spyOn(window, 'addEventListener');
      
      renderWithProvider(<Navbar />);
      
      expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    });

    it('should remove scroll event listener on unmount', () => {
      const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
      
      const { unmount } = renderWithProvider(<Navbar />);
      unmount();
      
      expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    });
  });
});

