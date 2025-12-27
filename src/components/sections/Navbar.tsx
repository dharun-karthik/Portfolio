import { Box, HStack, Link, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaTerminal } from 'react-icons/fa';
import { personalInfo } from '../../data';

const MotionBox = motion.create(Box);
const MotionSpan = motion.create('span');

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      as="nav"
      position="fixed"
      top={4}
      left="50%"
      transform="translateX(-50%)"
      zIndex={1000}
      w={{ base: '95%', md: '90%' }}
      maxW="5xl"
    >
      <MotionBox
        px={{ base: 4, md: 6 }}
        py={3}
        bg="rgba(15, 15, 25, 0.7)"
        backdropFilter="blur(20px)"
        borderRadius="full"
        boxShadow="0 8px 32px rgba(0, 0, 0, 0.3)"
      >
        <HStack justify="space-between">
          {/* Logo */}
          <Link
            href="#"
            display="flex"
            alignItems="center"
            gap={2}
            _hover={{ textDecoration: 'none' }}
          >
            <Box p={2} bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" borderRadius="lg">
              <FaTerminal color="white" />
            </Box>
            <Text fontWeight="bold" fontSize="lg" color="white">
              {personalInfo.name.split(' ')[0].toLowerCase()}.dev
            </Text>
          </Link>

          {/* Nav Links - Desktop */}
          <HStack gap={1} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  position="relative"
                  color={isActive ? 'white' : 'gray.400'}
                  fontSize="sm"
                  fontWeight="medium"
                  px={3}
                  py={1.5}
                  zIndex={1}
                  _hover={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                  _focus={{ outline: 'none', boxShadow: 'none' }}
                  _focusVisible={{ outline: 'none', boxShadow: 'none' }}
                  transition="color 0.2s ease"
                >
                  {isActive && (
                    <MotionSpan
                      layoutId="navPill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(102, 126, 234, 0.3)',
                        borderRadius: '9999px',
                        zIndex: -1,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </HStack>

          {/* CTA Button */}
          <Link
            href={`mailto:${personalInfo.contact.email}`}
            px={5}
            py={2}
            bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            borderRadius="full"
            color="white"
            fontSize="sm"
            fontWeight="semibold"
            cursor="pointer"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-2px)', boxShadow: '0 10px 20px rgba(102,126,234,0.3)', textDecoration: 'none' }}
          >
            Hire Me
          </Link>
        </HStack>
      </MotionBox>
    </Box>
  );
}

