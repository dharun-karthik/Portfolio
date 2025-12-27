import { Box, Container, Heading, Text, VStack, HStack, Badge, List } from '@chakra-ui/react';
import { FaBriefcase, FaCode } from 'react-icons/fa';
import { experiences } from '../../data';
import type { Experience as ExperienceType, Project } from '../../data';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Box
      bg="gray.800"
      p={4}
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.700"
      _hover={{ borderColor: 'blue.500' }}
      transition="border-color 0.2s"
    >
      <HStack gap={2} mb={2}>
        <FaCode color="var(--chakra-colors-blue-400)" />
        <Text fontWeight="semibold" color="blue.300">
          {project.name}
        </Text>
      </HStack>
      <HStack gap={2} flexWrap="wrap" mb={3}>
        {project.techStack.map((tech) => (
          <Badge key={tech} colorPalette="cyan" variant="subtle" fontSize="xs">
            {tech}
          </Badge>
        ))}
      </HStack>
      <List.Root gap={1} fontSize="sm" color="gray.300">
        {project.highlights.map((highlight, idx) => (
          <List.Item key={idx} _marker={{ color: 'blue.400' }}>
            {highlight}
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
}

function ExperienceCard({ experience }: { experience: ExperienceType }) {
  return (
    <Box position="relative" pl={{ base: 6, md: 8 }}>
      {/* Timeline dot */}
      <Box
        position="absolute"
        left={0}
        top={1}
        w={3}
        h={3}
        bg="blue.500"
        borderRadius="full"
        border="2px solid"
        borderColor="gray.900"
      />
      
      <Box
        bg="gray.900"
        p={{ base: 4, md: 6 }}
        borderRadius="xl"
        border="1px solid"
        borderColor="gray.800"
        _hover={{ borderColor: 'gray.700' }}
        transition="border-color 0.2s"
      >
        <HStack justify="space-between" flexWrap="wrap" gap={2} mb={2}>
          <HStack gap={2}>
            <FaBriefcase color="var(--chakra-colors-green-400)" />
            <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} color="white">
              {experience.title}
            </Heading>
          </HStack>
          <Badge colorPalette="green" variant="subtle" fontFamily="mono" fontSize="xs">
            {experience.period}
          </Badge>
        </HStack>
        
        <Text color="gray.400" fontSize="md" mb={4}>
          {experience.company} • {experience.location}
        </Text>

        {experience.highlights.length > 0 && (
          <List.Root gap={2} mb={4} color="gray.300">
            {experience.highlights.map((highlight, idx) => (
              <List.Item key={idx} _marker={{ color: 'green.400' }}>
                {highlight}
              </List.Item>
            ))}
          </List.Root>
        )}

        {experience.projects && experience.projects.length > 0 && (
          <VStack gap={4} align="stretch">
            {experience.projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </VStack>
        )}
      </Box>
    </Box>
  );
}

export function Experience() {
  return (
    <Box as="section" py={{ base: 12, md: 20 }} bg="gray.950">
      <Container maxW="4xl">
        <HStack gap={3} mb={10}>
          <Box
            p={2}
            bg="blue.900"
            borderRadius="lg"
            color="blue.300"
          >
            <FaBriefcase size={20} />
          </Box>
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl' }}
            color="white"
            fontFamily="mono"
          >
            {'>'} experience
          </Heading>
        </HStack>

        {/* Timeline */}
        <Box position="relative" pl={{ base: 0, md: 2 }}>
          {/* Timeline line */}
          <Box
            position="absolute"
            left={{ base: '5px', md: '5px' }}
            top={4}
            bottom={4}
            w="2px"
            bg="gray.800"
          />
          
          <VStack gap={8} align="stretch">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}

