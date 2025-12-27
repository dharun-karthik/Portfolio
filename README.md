# Portfolio

A modern, responsive developer portfolio built with React 19, TypeScript, and Chakra UI v3.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2 | UI framework with latest concurrent features |
| TypeScript | 5.9 | Type safety and developer experience |
| Vite | 7.2 | Build tool and dev server |
| Chakra UI | 3.30 | Component library with design system |
| Framer Motion | 12.x | Animations and transitions |
| Vitest | 4.x | Unit testing framework |

## Technical Decisions

### Why React 19?
- Leverages the latest React features including improved concurrent rendering
- Better performance with automatic batching
- Future-proof foundation for the project

### Why Chakra UI v3?
- Built-in dark mode support with CSS variables
- Responsive design utilities out of the box
- Composable component architecture that integrates well with Framer Motion
- Uses `@emotion/react` for CSS-in-JS with excellent TypeScript support

### Why Framer Motion?
- **Layout animations**: The navbar's active section indicator uses `layoutId` for smooth sliding pill animation between nav items. This enables shared element transitions without complex CSS.
- **Scroll-based animations**: Used for entrance animations with staggered children
- **Spring physics**: Provides natural, physics-based motion (e.g., navbar pill uses `stiffness: 400, damping: 30`)

## Animation Architecture

### Navbar Active Section Tracking
```tsx
// Uses viewport-relative threshold for section detection
const scrollPosition = window.scrollY + window.innerHeight / 2;
```
The active section is determined by checking which section's top offset is above the viewport's midpoint. This provides intuitive highlighting as users scroll.

### Sliding Pill Animation
```tsx
<MotionSpan
  layoutId="navPill"  // Shared layout ID enables cross-component animation
  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
/>
```
Using `layoutId` instead of manual position calculations allows Framer Motion to automatically interpolate between positions.

### Scroll Indicator Centering
```tsx
// Flexbox centering avoids transform conflicts with Framer Motion
<Box position="absolute" left={0} right={0} display="flex" justifyContent="center">
  <MotionBox animate={{ y: [0, 10, 0] }} />
</Box>
```
The bounce animation uses `transform: translateY()`. Using CSS `transform: translateX(-50%)` for centering would conflict. Flexbox centering solves this.

## Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections (Hero, Experience, Skills, etc.)
│   │   ├── Navbar.tsx     # Fixed navigation with scroll tracking
│   │   ├── Hero.tsx       # Landing section with typewriter effect
│   │   ├── Experience.tsx # Work history timeline
│   │   ├── Skills.tsx     # Technical skills grid
│   │   ├── Education.tsx  # Education & certifications
│   │   └── Footer.tsx     # Contact section
│   └── ui/
│       └── provider.tsx   # Chakra UI theme provider
├── data/                  # Centralized content data
│   ├── personal.ts        # Bio, contact info
│   ├── experience.ts      # Work history
│   ├── skills.ts          # Technical skills
│   ├── education.ts       # Degrees, certifications
│   └── index.ts           # Barrel exports
├── test/
│   └── setup.ts           # Vitest configuration
├── App.tsx                # Root component
└── main.tsx               # Entry point
```

### Data-Driven Architecture
All portfolio content is centralized in `/src/data/`. This separation enables:
- Easy content updates without touching component logic
- Type-safe data structures
- Potential for CMS integration in the future

### Testing Strategy
- **Vitest** with **React Testing Library** for component tests
- Tests co-located with components (`*.test.tsx`)
- Coverage reporting via `@vitest/coverage-v8`

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Opens at `http://localhost:5173`

### Build
```bash
npm run build
```
Outputs to `/dist`

### Testing
```bash
npm test           # Watch mode
npm run test:run   # Single run
npm run test:coverage  # With coverage report
```

### Linting
```bash
npm run lint
```

## Browser Support
Modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS backdrop-filter for glassmorphism effects.

## License
MIT
