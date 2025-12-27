import { Box, Container, Heading, Text, HStack, VStack, SimpleGrid, Badge } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaServer, FaCloud, FaDatabase, FaCogs, FaLaptopCode } from 'react-icons/fa';
import { skills } from '../../data';
import type { SkillCategory } from '../../data';

const MotionBox = motion.create(Box);

const categoryIcons: Record<string, React.ReactNode> = {
  Programming: <FaCode />,
  Frameworks: <FaLaptopCode />,
  DevOps: <FaCogs />,
  Cloud: <FaCloud />,
  Databases: <FaDatabase />,
  Practices: <FaServer />,
};

const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  Programming: { bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.3)', text: 'purple.400' },
  Frameworks: { bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.3)', text: 'blue.400' },
  DevOps: { bg: 'rgba(249,115,22,0.1)', border: 'rgba(249,115,22,0.3)', text: 'orange.400' },
  Cloud: { bg: 'rgba(6,182,212,0.1)', border: 'rgba(6,182,212,0.3)', text: 'cyan.400' },
  Databases: { bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.3)', text: 'green.400' },
  Practices: { bg: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.3)', text: 'pink.400' },
};

function SkillCard({ skillCategory, index }: { skillCategory: SkillCategory; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const icon = categoryIcons[skillCategory.category] || <FaCode />;
  const colors = categoryColors[skillCategory.category] || { bg: 'rgba(156,163,175,0.1)', border: 'rgba(156,163,175,0.3)', text: 'gray.400' };

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      bg="rgba(13, 17, 23, 0.8)"
      backdropFilter="blur(10px)"
      p={5}
      borderRadius="xl"
      border="1px solid"
      borderColor={colors.border}
      _hover={{ borderColor: colors.text, transform: 'translateY(-4px)', boxShadow: `0 10px 40px ${colors.bg}` }}
      style={{ transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease' }}
      position="relative"
      overflow="hidden"
    >
      {/* Background gradient accent */}
      <Box
        position="absolute"
        top={-10}
        right={-10}
        w={24}
        h={24}
        bg={colors.bg}
        filter="blur(20px)"
        borderRadius="full"
      />

      <HStack gap={3} mb={4} position="relative">
        <Box p={2} bg={colors.bg} borderRadius="lg" color={colors.text} fontSize="lg">
          {icon}
        </Box>
        <Heading as="h3" fontSize="md" color="white" fontFamily="mono">
          {skillCategory.category}
        </Heading>
      </HStack>

      <HStack gap={2} flexWrap="wrap" position="relative">
        {skillCategory.skills.map((skill) => (
          <Badge
            key={skill}
            px={3}
            py={1}
            bg={colors.bg}
            color={colors.text}
            borderRadius="full"
            fontSize="xs"
            fontWeight="medium"
          >
            {skill}
          </Badge>
        ))}
      </HStack>
    </MotionBox>
  );
}

export function Skills() {
  const headerRef = useRef(null);
  const statsRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });

  return (
    <Box as="section" id="skills" py={{ base: 16, md: 24 }} bg="linear-gradient(180deg, #0a0a14 0%, #0d1117 100%)" position="relative">
      {/* Background decoration */}
      <Box position="absolute" top="30%" left="0" w="250px" h="250px" bg="radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" filter="blur(40px)" />

      <Container maxW="4xl" mx="auto" px={{ base: 6, md: 8 }}>
        <MotionBox
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          mb={10}
          textAlign="center"
        >
          <HStack gap={4} mb={4} justify="center">
            <Box p={3} bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" borderRadius="xl" color="white">
              <FaCode size={24} />
            </Box>
            <VStack align="flex-start" gap={0}>
              <Text fontSize="sm" color="purple.400" fontFamily="mono" textTransform="uppercase" letterSpacing="wider">Tech Stack</Text>
              <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} color="white">Skills & Expertise</Heading>
            </VStack>
          </HStack>
        </MotionBox>

        {/* Tech stats bar */}
        <MotionBox
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          bg="rgba(13, 17, 23, 0.8)"
          backdropFilter="blur(10px)"
          p={5}
          borderRadius="xl"
          border="1px solid"
          borderColor="rgba(102, 126, 234, 0.2)"
          fontFamily="mono"
          fontSize="sm"
          mb={8}
        >
          <Text color="green.400" mb={3}>
            $ cat /proc/skills | grep -E &quot;years|technologies&quot;
          </Text>
          <HStack gap={6} flexWrap="wrap" color="gray.300">
            <Text>
              <Text as="span" color="cyan.400">years_experience:</Text> 4
            </Text>
            <Text>
              <Text as="span" color="cyan.400">technologies:</Text> {skills.reduce((acc, cat) => acc + cat.skills.length, 0)}+
            </Text>
            <Text>
              <Text as="span" color="cyan.400">status:</Text>{' '}
              <Text as="span" color="green.400">always_learning</Text>
            </Text>
          </HStack>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
          {skills.map((skillCategory, index) => (
            <SkillCard key={skillCategory.category} skillCategory={skillCategory} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

