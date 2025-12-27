import { Box, Container, Heading, Text, HStack, VStack, SimpleGrid, Badge } from '@chakra-ui/react';
import { FaCode, FaServer, FaCloud, FaDatabase, FaCogs, FaLaptopCode } from 'react-icons/fa';
import { skills } from '../../data';
import type { SkillCategory } from '../../data';

const categoryIcons: Record<string, React.ReactNode> = {
  Programming: <FaCode />,
  Frameworks: <FaLaptopCode />,
  DevOps: <FaCogs />,
  Cloud: <FaCloud />,
  Databases: <FaDatabase />,
  Practices: <FaServer />,
};

const categoryColors: Record<string, string> = {
  Programming: 'purple',
  Frameworks: 'blue',
  DevOps: 'orange',
  Cloud: 'cyan',
  Databases: 'green',
  Practices: 'pink',
};

function SkillCard({ skillCategory }: { skillCategory: SkillCategory }) {
  const icon = categoryIcons[skillCategory.category] || <FaCode />;
  const color = categoryColors[skillCategory.category] || 'gray';

  return (
    <Box
      bg="gray.900"
      p={5}
      borderRadius="xl"
      border="1px solid"
      borderColor="gray.800"
      _hover={{ borderColor: `${color}.500`, transform: 'translateY(-2px)' }}
      transition="all 0.2s"
      position="relative"
      overflow="hidden"
    >
      {/* Background accent */}
      <Box
        position="absolute"
        top={0}
        right={0}
        w={20}
        h={20}
        bg={`${color}.900`}
        opacity={0.3}
        borderBottomLeftRadius="full"
      />

      <HStack gap={3} mb={4}>
        <Box color={`${color}.400`} fontSize="xl">
          {icon}
        </Box>
        <Heading as="h3" fontSize="md" color="white" fontFamily="mono">
          {skillCategory.category}
        </Heading>
      </HStack>

      <HStack gap={2} flexWrap="wrap">
        {skillCategory.skills.map((skill) => (
          <Badge
            key={skill}
            colorPalette={color}
            variant="subtle"
            px={2}
            py={1}
            borderRadius="md"
            fontSize="xs"
            fontWeight="medium"
          >
            {skill}
          </Badge>
        ))}
      </HStack>
    </Box>
  );
}

export function Skills() {
  return (
    <Box as="section" py={{ base: 12, md: 20 }} bg="gray.950">
      <Container maxW="4xl">
        <VStack gap={10} align="stretch">
          <HStack gap={3}>
            <Box p={2} bg="purple.900" borderRadius="lg" color="purple.300">
              <FaCode size={20} />
            </Box>
            <Heading
              as="h2"
              fontSize={{ base: '2xl', md: '3xl' }}
              color="white"
              fontFamily="mono"
            >
              {'>'} skills
            </Heading>
          </HStack>

          {/* Tech stats bar */}
          <Box
            bg="gray.900"
            p={4}
            borderRadius="lg"
            border="1px solid"
            borderColor="gray.800"
            fontFamily="mono"
            fontSize="sm"
          >
            <Text color="green.400" mb={2}>
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
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
            {skills.map((skillCategory) => (
              <SkillCard key={skillCategory.category} skillCategory={skillCategory} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

