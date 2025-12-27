import { Box, Container, Text, HStack, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';
import { personalInfo } from '../../data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box as="footer" py={8} bg="gray.900" borderTop="1px solid" borderColor="gray.800">
      <Container maxW="4xl">
        <Box textAlign="center">
          {/* Social Links */}
          <HStack gap={6} justify="center" mb={6}>
            <Link
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              color="gray.400"
              _hover={{ color: 'white' }}
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              color="gray.400"
              _hover={{ color: 'blue.400' }}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href={`mailto:${personalInfo.email}`}
              color="gray.400"
              _hover={{ color: 'green.400' }}
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </Link>
          </HStack>

          {/* Terminal-style footer text */}
          <Box fontFamily="mono" fontSize="sm" color="gray.500" mb={4}>
            <Text>
              <Text as="span" color="green.400">$</Text> echo &quot;Thanks for visiting!&quot;
            </Text>
          </Box>

          {/* Copyright */}
          <HStack gap={2} justify="center" color="gray.500" fontSize="sm">
            <Text>Built with</Text>
            <FaHeart color="var(--chakra-colors-red-400)" />
            <Text>and</Text>
            <FaCode color="var(--chakra-colors-blue-400)" />
            <Text>by {personalInfo.name}</Text>
          </HStack>
          <Text color="gray.600" fontSize="xs" mt={2}>
            © {currentYear} All rights reserved
          </Text>
        </Box>
      </Container>
    </Box>
  );
}

