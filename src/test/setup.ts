import '@testing-library/jest-dom'

// Mock IntersectionObserver for framer-motion useInView hook
class MockIntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(callback: IntersectionObserverCallback) {
    // Immediately call the callback with all entries as intersecting
    setTimeout(() => {
      callback([], this);
    }, 0);
  }

  observe() { return null; }
  unobserve() { return null; }
  disconnect() { return null; }
  takeRecords(): IntersectionObserverEntry[] { return []; }
}

globalThis.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;

