import { Box, Container, Text, HStack, VStack, Heading, Link, SimpleGrid } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaWhatsapp, FaReact } from 'react-icons/fa';
import { personalInfo } from '../../data';

const MotionBox = motion.create(Box);

export function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box as="footer" id="contact" position="relative" overflow="hidden">
      {/* Contact Section */}
      <Box py={{ base: 16, md: 24 }} bg="linear-gradient(180deg, #0a0a14 0%, #0d1117 100%)">
        <Box position="absolute" top="0" left="50%" transform="translateX(-50%)" w="800px" h="400px" bg="radial-gradient(circle, rgba(102,126,234,0.1) 0%, transparent 70%)" filter="blur(80px)" />

        <Container maxW="4xl" mx="auto" position="relative" px={{ base: 6, md: 8 }}>
          <MotionBox
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            textAlign="center"
            mb={12}
          >
            <Text fontSize="sm" color="purple.400" fontFamily="mono" textTransform="uppercase" letterSpacing="wider" mb={2}>Get In Touch</Text>
            <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} color="white" mb={4} pb={1}>
              Let's Work Together
            </Heading>
            <Text color="gray.400" fontSize="lg" maxW="xl" mx="auto">
              I'm currently available for freelance work and full-time positions. If you have a project in mind or want to chat, feel free to reach out!
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} mb={12}>
            {[
              { icon: FaEnvelope, label: 'Email', value: personalInfo.contact.email, href: `mailto:${personalInfo.contact.email}`, color: 'blue' },
              { icon: FaLinkedin, label: 'LinkedIn', value: 'Connect with me', href: personalInfo.contact.linkedin, color: 'purple' },
              { icon: FaGithub, label: 'GitHub', value: 'View my code', href: personalInfo.contact.github, color: 'gray' },
            ].map((item, index) => (
              <MotionBox
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Link href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} _hover={{ textDecoration: 'none' }}>
                  <Box
                    p={6}
                    bg="rgba(13, 17, 23, 0.6)"
                    backdropFilter="blur(10px)"
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="rgba(102,126,234,0.2)"
                    textAlign="center"
                    _hover={{ borderColor: `${item.color}.500`, transform: 'translateY(-5px)' }}
                    transition="all 0.3s ease"
                  >
                    <Box mx="auto" mb={4} p={3} bg={`${item.color}.500`} borderRadius="xl" color="white" w="fit-content">
                      <item.icon size={24} />
                    </Box>
                    <Text color="white" fontWeight="semibold" mb={1}>{item.label}</Text>
                    <Text color="gray.400" fontSize="sm">{item.value}</Text>
                  </Box>
                </Link>
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* CTA Button */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            textAlign="center"
          >
            <Link
              href={`https://wa.me/${personalInfo.contact.whatsapp}`}
              target="_blank"
              display="inline-flex"
              alignItems="center"
              gap={3}
              px={8}
              py={4}
              bg="linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
              borderRadius="full"
              color="white"
              fontWeight="semibold"
              fontSize="lg"
              cursor="pointer"
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-3px)', boxShadow: '0 20px 40px rgba(37,211,102,0.4)', textDecoration: 'none' }}
            >
              <FaWhatsapp /> Send me a message
            </Link>
          </MotionBox>
        </Container>
      </Box>

      {/* Bottom Footer */}
      <Box py={6} bg="#0a0a14" borderTop="1px solid" borderColor="rgba(102,126,234,0.2)">
        <Container maxW="4xl" mx="auto" px={{ base: 6, md: 8 }}>
          <VStack gap={4}>
            {/* Terminal-style text */}
            <Box fontFamily="mono" fontSize="sm" color="gray.500">
              <Text>
                <Text as="span" color="green.400">$</Text> echo "Thanks for visiting!"
              </Text>
            </Box>

            <HStack gap={2} color="gray.500" fontSize="sm">
              <Text>Built with</Text>
              <FaHeart color="var(--chakra-colors-red-400)" />
              <Text>using</Text>
              <FaReact color="var(--chakra-colors-cyan-400)" />
              <Text>React + TypeScript</Text>
            </HStack>
            <Text color="gray.600" fontSize="xs">© {currentYear} All rights reserved</Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}

