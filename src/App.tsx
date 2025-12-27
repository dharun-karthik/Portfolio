import { Box } from '@chakra-ui/react';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';

function App() {
  return (
    <Box minH="100vh" bg="gray.950" color="white">
      <Hero />
      <Experience />
    </Box>
  );
}

export default App;
