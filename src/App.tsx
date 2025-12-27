import { Box } from '@chakra-ui/react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Education } from './components/sections/Education';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <Box minH="100vh" bg="#0a0a14" color="white">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Footer />
    </Box>
  );
}

export default App;
