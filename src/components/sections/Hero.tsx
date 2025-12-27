import { Box, Container, Heading, Text, HStack, Link, VStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data';

export function Hero() {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} position="relative" overflow="hidden">
      {/* Tech-themed background gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.5}
        bgGradient="to-br"
        gradientFrom="gray.900"
        gradientVia="gray.950"
        gradientTo="blue.950"
        zIndex={0}
      />
      
      <Container maxW="4xl" position="relative" zIndex={1}>
        <VStack gap={6} textAlign="center">
          {/* Terminal-style intro */}
          <Box
            fontFamily="mono"
            fontSize="sm"
            color="green.400"
            bg="gray.900"
            px={4}
            py={2}
            borderRadius="md"
            border="1px solid"
            borderColor="green.600"
          >
            <Text as="span" color="gray.500">$</Text> whoami
          </Box>

          <Heading
            as="h1"
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="bold"
            bgGradient="to-r"
            gradientFrom="cyan.400"
            gradientTo="blue.500"
            bgClip="text"
            lineHeight="shorter"
          >
            {personalInfo.name}
          </Heading>

          <HStack gap={2} flexWrap="wrap" justify="center">
            <Box
              px={3}
              py={1}
              bg="blue.900"
              color="blue.200"
              borderRadius="full"
              fontSize="sm"
              fontFamily="mono"
            >
              {'<'}
              {personalInfo.title}
              {' />'}
            </Box>
          </HStack>

          <Text
            fontSize={{ base: 'lg', md: 'xl' }}
            color="gray.400"
            maxW="2xl"
            lineHeight="tall"
          >
            {personalInfo.summary}
          </Text>

          {/* Contact Links */}
          <HStack gap={4} pt={4}>
            <Link
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              color="gray.400"
              _hover={{ color: 'white', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
              aria-label="GitHub Profile"
            >
              <FaGithub size={28} />
            </Link>
            <Link
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              color="gray.400"
              _hover={{ color: 'blue.400', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={28} />
            </Link>
            <Link
              href={`mailto:${personalInfo.contact.email}`}
              color="gray.400"
              _hover={{ color: 'green.400', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}

