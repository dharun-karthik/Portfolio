import { Box, Container, Heading, Text, VStack, HStack, Badge, List } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCode } from 'react-icons/fa';
import { experiences } from '../../data';
import type { Experience as ExperienceType, Project } from '../../data';

const MotionBox = motion.create(Box);

function ProjectCard({ project }: { project: Project }) {
  return (
    <Box
      bg="rgba(13, 17, 23, 0.6)"
      p={4}
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.700"
      _hover={{ borderColor: 'blue.500' }}
      transition="border-color 0.2s"
    >
      <HStack gap={2} mb={2}>
        <FaCode color="var(--chakra-colors-blue-400)" />
        <Text fontWeight="semibold" color="blue.300">{project.name}</Text>
      </HStack>
      <HStack gap={2} flexWrap="wrap" mb={3}>
        {project.techStack.map((tech) => (
          <Badge key={tech} px={2} py={0.5} bg="rgba(6,182,212,0.15)" color="cyan.400" borderRadius="full" fontSize="xs">{tech}</Badge>
        ))}
      </HStack>
      <List.Root gap={1} fontSize="sm" color="gray.300">
        {project.highlights.map((highlight, idx) => (
          <List.Item key={idx} _marker={{ color: 'blue.400' }}>{highlight}</List.Item>
        ))}
      </List.Root>
    </Box>
  );
}

function ExperienceCard({ experience, index }: { experience: ExperienceType; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <MotionBox
      ref={ref}
      position="relative"
      pl={{ base: 6, md: 8 }}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Timeline dot */}
      <MotionBox
        position="absolute"
        left={0}
        top={2}
        w={4}
        h={4}
        bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        borderRadius="full"
        border="3px solid"
        borderColor="#0d1117"
        animate={{ boxShadow: ['0 0 0 0 rgba(102,126,234,0.4)', '0 0 0 8px rgba(102,126,234,0)', '0 0 0 0 rgba(102,126,234,0)'] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <Box
        bg="rgba(13, 17, 23, 0.8)"
        backdropFilter="blur(10px)"
        p={{ base: 4, md: 6 }}
        borderRadius="xl"
        border="1px solid"
        borderColor="rgba(102, 126, 234, 0.2)"
        _hover={{ borderColor: 'purple.500', transform: 'translateX(5px)' }}
        transition="all 0.3s ease"
      >
        <HStack justify="space-between" flexWrap="wrap" gap={2} mb={2}>
          <HStack gap={2}>
            <FaBriefcase color="var(--chakra-colors-green-400)" />
            <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} color="white">{experience.title}</Heading>
          </HStack>
          <Badge px={3} py={1} bg="rgba(34,197,94,0.15)" color="green.400" borderRadius="full" fontFamily="mono" fontSize="xs">{experience.period}</Badge>
        </HStack>

        <Text color="gray.400" fontSize="md" mb={4}>{experience.company} • {experience.location}</Text>

        {experience.highlights.length > 0 && (
          <List.Root gap={2} mb={4} color="gray.300">
            {experience.highlights.map((highlight, idx) => (
              <List.Item key={idx} _marker={{ color: 'green.400' }}>{highlight}</List.Item>
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
    </MotionBox>
  );
}

export function Experience() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <Box as="section" id="experience" py={{ base: 16, md: 24 }} bg="linear-gradient(180deg, #0d1117 0%, #0a0a14 100%)" position="relative">
      {/* Background decoration */}
      <Box position="absolute" top="20%" right="0" w="300px" h="300px" bg="radial-gradient(circle, rgba(102,126,234,0.08) 0%, transparent 70%)" filter="blur(40px)" />

      <Container maxW="4xl" mx="auto" px={{ base: 6, md: 8 }}>
        <MotionBox
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          mb={16}
          textAlign="center"
        >
          <HStack gap={4} mb={4} justify="center">
            <Box p={3} bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" borderRadius="xl" color="white">
              <FaBriefcase size={24} />
            </Box>
            <VStack align="flex-start" gap={0}>
              <Text fontSize="sm" color="purple.400" fontFamily="mono" textTransform="uppercase" letterSpacing="wider">Career Journey</Text>
              <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} color="white">Work Experience</Heading>
            </VStack>
          </HStack>
        </MotionBox>

        {/* Timeline */}
        <Box position="relative">
          {/* Timeline line */}
          <MotionBox
            position="absolute"
            left={{ base: '7px', md: '7px' }}
            top={0}
            bottom={0}
            w="2px"
            bg="linear-gradient(180deg, #667eea 0%, #764ba2 50%, transparent 100%)"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <VStack gap={10} align="stretch">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}

