import { Box } from '@chakra-ui/react';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';

function App() {
  return (
    <Box minH="100vh" bg="gray.950" color="white">
      <Hero />
      <Experience />
      <Skills />
      <Education />
    </Box>
  );
}

export default App;
