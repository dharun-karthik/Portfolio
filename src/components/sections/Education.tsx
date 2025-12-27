import { Box, Container, Heading, Text, VStack, HStack, Badge, SimpleGrid, Link } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';
import { education, certifications, achievements } from '../../data';

const MotionBox = motion.create(Box);

export function Education() {
  const headerRef = useRef(null);
  const eduCardRef = useRef(null);
  const certHeaderRef = useRef(null);
  const achieveHeaderRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isEduCardInView = useInView(eduCardRef, { once: true, margin: "-50px" });
  const isCertHeaderInView = useInView(certHeaderRef, { once: true });
  const isAchieveHeaderInView = useInView(achieveHeaderRef, { once: true });

  return (
    <Box as="section" id="education" py={{ base: 16, md: 24 }} bg="linear-gradient(180deg, #0d1117 0%, #0a0a14 100%)" position="relative">
      {/* Background decoration */}
      <Box position="absolute" bottom="20%" right="0" w="300px" h="300px" bg="radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)" filter="blur(40px)" />

      <Container maxW="4xl" mx="auto" px={{ base: 6, md: 8 }}>
        <VStack gap={16} align="stretch">
          {/* Education Section */}
          <Box>
            <MotionBox
              ref={headerRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              mb={8}
              textAlign="center"
            >
              <HStack gap={4} mb={4} justify="center">
                <Box p={3} bg="linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" borderRadius="xl" color="white">
                  <FaGraduationCap size={24} />
                </Box>
                <VStack align="flex-start" gap={0}>
                  <Text fontSize="sm" color="green.400" fontFamily="mono" textTransform="uppercase" letterSpacing="wider">Academic Background</Text>
                  <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} color="white">Education</Heading>
                </VStack>
              </HStack>
            </MotionBox>

            <MotionBox
              ref={eduCardRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isEduCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              bg="rgba(13, 17, 23, 0.8)"
              backdropFilter="blur(10px)"
              p={6}
              borderRadius="xl"
              border="1px solid"
              borderColor="rgba(34, 197, 94, 0.2)"
              _hover={{ borderColor: 'green.500', transform: 'translateY(-4px)' }}
              style={{ transition: 'border-color 0.3s ease, transform 0.3s ease' }}
            >
              <HStack justify="space-between" flexWrap="wrap" gap={2} mb={2}>
                <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} color="white">
                  {education.degree}
                </Heading>
                <Badge px={3} py={1} bg="rgba(34,197,94,0.15)" color="green.400" borderRadius="full" fontFamily="mono" fontSize="xs">
                  {education.period}
                </Badge>
              </HStack>
              <Text color="gray.400" fontSize="md" mb={2}>
                {education.institution}
              </Text>
              <Text color="gray.500" fontSize="sm">
                {education.location}
              </Text>
            </MotionBox>
          </Box>

          {/* Certifications Section */}
          <Box>
            <MotionBox
              ref={certHeaderRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isCertHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              mb={8}
              textAlign="center"
            >
              <HStack gap={4} mb={4} justify="center">
                <Box p={3} bg="linear-gradient(135deg, #eab308 0%, #ca8a04 100%)" borderRadius="xl" color="white">
                  <FaCertificate size={24} />
                </Box>
                <VStack align="flex-start" gap={0}>
                  <Text fontSize="sm" color="yellow.400" fontFamily="mono" textTransform="uppercase" letterSpacing="wider">Professional Credentials</Text>
                  <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} color="white">Certifications</Heading>
                </VStack>
              </HStack>
            </MotionBox>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
              {certifications.map((cert, index) => (
                <CertificationCard key={cert.name} cert={cert} index={index} />
              ))}
            </SimpleGrid>
          </Box>

          {/* Achievements Section */}
          <Box>
            <MotionBox
              ref={achieveHeaderRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isAchieveHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              mb={8}
              textAlign="center"
            >
              <HStack gap={4} mb={4} justify="center">
                <Box p={3} bg="linear-gradient(135deg, #f97316 0%, #ea580c 100%)" borderRadius="xl" color="white">
                  <FaTrophy size={24} />
                </Box>
                <VStack align="flex-start" gap={0}>
                  <Text fontSize="sm" color="orange.400" fontFamily="mono" textTransform="uppercase" letterSpacing="wider">Recognition</Text>
                  <Heading as="h2" fontSize={{ base: '3xl', md: '4xl' }} color="white">Achievements</Heading>
                </VStack>
              </HStack>
            </MotionBox>

            <VStack gap={4} align="stretch">
              {achievements.map((achievement, idx) => (
                <AchievementCard key={idx} achievement={achievement} index={idx} />
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

function CertificationCard({ cert, index }: { cert: { name: string; issuer: string; link?: string }; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const cardContent = (
    <Box
      bg="rgba(13, 17, 23, 0.8)"
      backdropFilter="blur(10px)"
      p={5}
      borderRadius="xl"
      border="1px solid"
      borderColor="rgba(234, 179, 8, 0.2)"
      _hover={cert.link ? { borderColor: 'yellow.500', transform: 'translateY(-4px)', boxShadow: '0 10px 40px rgba(234,179,8,0.1)', cursor: 'pointer' } : {}}
      transition="all 0.3s ease"
      h="full"
    >
      <HStack justify="space-between" mb={2}>
        <Text fontWeight="semibold" color="white" fontSize="sm">
          {cert.name}
        </Text>
        {cert.link && <FaExternalLinkAlt color="var(--chakra-colors-yellow-500)" size={12} />}
      </HStack>
      <Text color="gray.400" fontSize="xs">
        {cert.issuer}
      </Text>
    </Box>
  );

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {cert.link ? (
        <Link
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ textDecoration: 'none' }}
        >
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </MotionBox>
  );
}

function AchievementCard({ achievement, index }: { achievement: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      bg="rgba(13, 17, 23, 0.8)"
      backdropFilter="blur(10px)"
      p={5}
      borderRadius="xl"
      border="1px solid"
      borderColor="rgba(249, 115, 22, 0.2)"
      _hover={{ borderColor: 'orange.500', transform: 'translateX(5px)' }}
      style={{ transition: 'border-color 0.3s ease, transform 0.3s ease' }}
    >
      <HStack gap={3}>
        <Box p={2} bg="rgba(249, 115, 22, 0.15)" borderRadius="lg" color="orange.400" fontSize="lg">
          <FaTrophy />
        </Box>
        <Text color="gray.200">{achievement}</Text>
      </HStack>
    </MotionBox>
  );
}

