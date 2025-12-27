import { Box, Container, Heading, Text, VStack, HStack, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { personalInfo } from '../../data';

const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);

function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) { setDisplayText(text.slice(0, i + 1)); i++; }
        else clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return <Text as="span">{displayText}<Text as="span" color="cyan.400" opacity={showCursor ? 1 : 0}>|</Text></Text>;
}

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } };
const itemVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

export function Hero() {
  return (
    <Box as="section" id="about" minH="100vh" display="flex" alignItems="center" position="relative" overflow="hidden" bg="linear-gradient(180deg, #0a0a14 0%, #0d1117 100%)">
      {/* Floating gradient orbs */}
      <MotionBox position="absolute" top="-20%" left="-10%" w="600px" h="600px" bg="radial-gradient(circle, rgba(102,126,234,0.15) 0%, transparent 70%)" filter="blur(60px)" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <MotionBox position="absolute" bottom="-20%" right="-10%" w="700px" h="700px" bg="radial-gradient(circle, rgba(118,75,162,0.15) 0%, transparent 70%)" filter="blur(60px)" animate={{ scale: [1.1, 1, 1.1] }} transition={{ duration: 10, repeat: Infinity }} />

      <Container maxW="4xl" mx="auto" position="relative" zIndex={1} pt={{ base: 24, md: 0 }} px={{ base: 6, md: 8 }}>
        <MotionBox variants={containerVariants} initial="hidden" animate="visible">
          <VStack gap={8} align="center" textAlign="center">
            {/* Available badge */}
            <MotionBox variants={itemVariants}>
              <HStack gap={2} px={4} py={2} bg="rgba(102, 126, 234, 0.1)" border="1px solid" borderColor="purple.500" borderRadius="full">
                <MotionBox w={2} h={2} bg="green.400" borderRadius="full" animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <Text fontSize="sm" color="gray.300">Available for opportunities</Text>
              </HStack>
            </MotionBox>

            {/* Typing greeting */}
            <MotionBox variants={itemVariants}>
              <Text fontSize="xl" color="purple.400" fontFamily="mono"><TypeWriter text="Hello, I'm" delay={500} /></Text>
            </MotionBox>

            {/* Name */}
            <MotionHeading as="h1" fontSize={{ base: '4xl', md: '7xl' }} fontWeight="extrabold" lineHeight="1.1" variants={itemVariants}>
              <Text as="span" bgGradient="to-r" gradientFrom="white" gradientVia="purple.200" gradientTo="white" bgClip="text">{personalInfo.name}</Text>
            </MotionHeading>

            {/* Title and years */}
            <MotionBox variants={itemVariants}>
              <HStack gap={3} flexWrap="wrap" justify="center">
                <Text fontSize={{ base: 'xl', md: '2xl' }} color="gray.400">{personalInfo.title}</Text>
                <Box w="2px" h="6" bg="purple.500" display={{ base: 'none', md: 'block' }} />
                <Text fontSize={{ base: 'lg', md: 'xl' }} color="cyan.400" fontFamily="mono">4+ years</Text>
              </HStack>
            </MotionBox>

            {/* Summary */}
            <MotionBox variants={itemVariants} maxW="2xl">
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.400" lineHeight="1.8">{personalInfo.summary}</Text>
            </MotionBox>

            {/* CTA Buttons */}
            <MotionBox variants={itemVariants}>
              <HStack gap={4} flexWrap="wrap" justify="center">
                <Box as="a" href={`mailto:${personalInfo.contact.email}`} px={6} py={3} bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" borderRadius="full" color="white" fontWeight="semibold" cursor="pointer" transition="all 0.3s" _hover={{ transform: 'translateY(-3px)', boxShadow: '0 10px 30px rgba(102,126,234,0.4)' }}>
                  Get in Touch
                </Box>
                <Box as="a" href={personalInfo.contact.github} target="_blank" px={6} py={3} border="1px solid" borderColor="gray.600" borderRadius="full" color="gray.300" fontWeight="semibold" cursor="pointer" transition="all 0.3s" _hover={{ borderColor: 'purple.500', color: 'white' }}>
                  View GitHub
                </Box>
              </HStack>
            </MotionBox>

            {/* Social links */}
            <MotionBox variants={itemVariants}>
              <HStack gap={4} pt={4}>
                <Link href={personalInfo.contact.github} target="_blank" p={3} borderRadius="full" bg="rgba(255,255,255,0.05)" color="gray.400" _hover={{ bg: 'rgba(255,255,255,0.1)', color: 'white', transform: 'translateY(-3px)' }} transition="all 0.3s" aria-label="GitHub"><FaGithub size={22} /></Link>
                <Link href={personalInfo.contact.linkedin} target="_blank" p={3} borderRadius="full" bg="rgba(255,255,255,0.05)" color="gray.400" _hover={{ bg: 'rgba(255,255,255,0.1)', color: 'blue.400', transform: 'translateY(-3px)' }} transition="all 0.3s" aria-label="LinkedIn"><FaLinkedin size={22} /></Link>
                <Link href={`mailto:${personalInfo.contact.email}`} p={3} borderRadius="full" bg="rgba(255,255,255,0.05)" color="gray.400" _hover={{ bg: 'rgba(255,255,255,0.1)', color: 'green.400', transform: 'translateY(-3px)' }} transition="all 0.3s" aria-label="Email"><FaEnvelope size={22} /></Link>
              </HStack>
            </MotionBox>
          </VStack>
        </MotionBox>

        {/* Scroll indicator */}
        <MotionBox position="absolute" bottom={10} left="50%" transform="translateX(-50%)" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <Link href="#experience" color="gray.500" _hover={{ color: 'purple.400' }}><FaChevronDown size={24} /></Link>
        </MotionBox>
      </Container>
    </Box>
  );
}

