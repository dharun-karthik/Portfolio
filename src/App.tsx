import { Box } from '@chakra-ui/react';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';

function App() {
  return (
    <Box minH="100vh" bg="gray.950" color="white">
      <Hero />
      <Experience />
      <Skills />
    </Box>
  );
}

export default App;
