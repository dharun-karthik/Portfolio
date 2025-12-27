import { Box, Container, HStack, Link, Text } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';
import { personalInfo } from '../../data';

const MotionBox = motion.create(Box);

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.95]);
  const blur = useTransform(scrollY, [0, 100], [0, 10]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      py={4}
      style={{
        backgroundColor: `rgba(10, 10, 20, ${bgOpacity})`,
        backdropFilter: `blur(${blur}px)`,
      }}
    >
      <Container maxW="5xl" mx="auto" px={{ base: 6, md: 8 }}>
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
          <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                color="gray.400"
                fontSize="sm"
                fontWeight="medium"
                _hover={{ color: 'white' }}
                transition="color 0.2s"
              >
                {link.name}
              </Link>
            ))}
          </HStack>

          {/* CTA Button */}
          <Box
            as="a"
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
            _hover={{ transform: 'translateY(-2px)', boxShadow: '0 10px 20px rgba(102,126,234,0.3)' }}
          >
            Hire Me
          </Box>
        </HStack>
      </Container>
    </MotionBox>
  );
}

