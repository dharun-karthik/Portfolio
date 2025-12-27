import { Box, Container, Heading, Text, VStack, HStack, Badge, SimpleGrid, Link } from '@chakra-ui/react';
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';
import { education, certifications, achievements } from '../../data';

export function Education() {
  return (
    <Box as="section" py={{ base: 12, md: 20 }} bg="gray.950">
      <Container maxW="4xl">
        <VStack gap={12} align="stretch">
          {/* Education Section */}
          <Box>
            <HStack gap={3} mb={8}>
              <Box p={2} bg="green.900" borderRadius="lg" color="green.300">
                <FaGraduationCap size={20} />
              </Box>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                color="white"
                fontFamily="mono"
              >
                {'>'} education
              </Heading>
            </HStack>

            <Box
              bg="gray.900"
              p={6}
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.800"
              _hover={{ borderColor: 'green.500' }}
              transition="border-color 0.2s"
            >
              <HStack justify="space-between" flexWrap="wrap" gap={2} mb={2}>
                <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} color="white">
                  {education.degree}
                </Heading>
                <Badge colorPalette="green" variant="subtle" fontFamily="mono" fontSize="xs">
                  {education.period}
                </Badge>
              </HStack>
              <Text color="gray.400" fontSize="md" mb={2}>
                {education.institution}
              </Text>
              <Text color="gray.500" fontSize="sm">
                {education.location}
              </Text>
            </Box>
          </Box>

          {/* Certifications Section */}
          <Box>
            <HStack gap={3} mb={8}>
              <Box p={2} bg="yellow.900" borderRadius="lg" color="yellow.300">
                <FaCertificate size={20} />
              </Box>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                color="white"
                fontFamily="mono"
              >
                {'>'} certifications
              </Heading>
            </HStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              {certifications.map((cert) => (
                <Link
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Box
                    bg="gray.900"
                    p={5}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="gray.800"
                    _hover={{ borderColor: 'yellow.500', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                    h="full"
                  >
                    <HStack justify="space-between" mb={2}>
                      <Text fontWeight="semibold" color="white" fontSize="sm">
                        {cert.name}
                      </Text>
                      <FaExternalLinkAlt color="var(--chakra-colors-gray-500)" size={12} />
                    </HStack>
                    <Text color="gray.400" fontSize="xs">
                      {cert.issuer}
                    </Text>
                  </Box>
                </Link>
              ))}
            </SimpleGrid>
          </Box>

          {/* Achievements Section */}
          <Box>
            <HStack gap={3} mb={8}>
              <Box p={2} bg="orange.900" borderRadius="lg" color="orange.300">
                <FaTrophy size={20} />
              </Box>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl' }}
                color="white"
                fontFamily="mono"
              >
                {'>'} achievements
              </Heading>
            </HStack>

            <VStack gap={4} align="stretch">
              {achievements.map((achievement, idx) => (
                <Box
                  key={idx}
                  bg="gray.900"
                  p={5}
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="gray.800"
                  _hover={{ borderColor: 'orange.500' }}
                  transition="border-color 0.2s"
                >
                  <HStack gap={3}>
                    <Box color="orange.400" fontSize="lg">
                      <FaTrophy />
                    </Box>
                    <Text color="gray.200">{achievement}</Text>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

