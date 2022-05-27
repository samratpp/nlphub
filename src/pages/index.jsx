import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  Link,
  SimpleGrid,
  StackDivider,
  IconButton,
  Square,
  createIcon,
  Wrap,
  WrapItem,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  Textarea,
  Tag,
  Center,
  IconProps,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from 'react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import { NextSeo } from "next-seo";
import NextImage from "next/image";

import anime from 'animejs';

import ParticleJs from "../components/UI/particle";
import Feature from "../components/feature"

import { seo, data } from "config";

const Home = () => {
  const color = useColorModeValue("telegram.500", "telegram.400");

  const isOdd = (num) => num % 2;

  const title = "Home";
  const description = seo.description;

  return (
    <>

      <Container maxW={'7xl'} px={[4, 6, 10, 14, 20]}>
        <Stack
          minH={'100vh'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 20 }}

          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.3}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Welcome to
              </Text>
              <br />
              <Text as={'span'} color={'blue.400'}>
                Natural Language Processing Hub
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              NLP Hub, a Research and Development center amalgamating both technology and language
              with the objective of greater human machine interaction.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'blue.400'}
                _hover={{ bg: 'blue.500' }}>
                Learn More
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            {/* <ParticleJs /> */}
            particles
          </Flex>
        </Stack>
        {/* hero stack ends   */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              About
            </Text>
            <Heading>Open Platform Model</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              NLP Hub is registered as a profit not distributing company with it's main objective to create a open platform for NLP/ AI/ ML enthusiasts and serve the community with open source software. And work on different community based research projects with a sustainability approach as well.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Analysis'}
              />
              <Feature
                icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Some text'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Research'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              alt={'Login Image'}
              objectFit={'contain'}
              src="/model.png"
            />
          </Flex>
        </SimpleGrid>
        {/* open platform ends   */}
        <Stack py={{ base: 20, md: 20 }} pb={{ base: 0, md: 0 }} spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Projects
          </Text>
          <Heading>The awesome work we do</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={{ base: 10, md: 10 }}>
            <Box
              maxW={'445px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              <Box
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740'
                  }
                  layout={'fill'}
                />
              </Box>
              <Stack>
                <Text
                  color={'green.500'}
                  textTransform={'uppercase'}
                  fontWeight={800}
                  fontSize={'sm'}
                  letterSpacing={1.1}>
                  Historic data
                </Text>
                <Heading
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'1xl'}
                  fontFamily={'body'}>
                  AI mapping history events
                </Heading>
                <Link
                  px={1}
                  py={1}
                  color={'blue.500'}
                  href={'#'}>
                  Learn More
                </Link>
              </Stack>
            </Box>
            <Box
              maxW={'445px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              <Box
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740'
                  }
                  layout={'fill'}
                />
              </Box>
              <Stack>
                <Text
                  color={'green.500'}
                  textTransform={'uppercase'}
                  fontWeight={800}
                  fontSize={'sm'}
                  letterSpacing={1.1}>
                  Historic data
                </Text>
                <Heading
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'1xl'}
                  fontFamily={'body'}>
                  AI mapping history events
                </Heading>
                <Link
                  px={1}
                  py={1}
                  color={'blue.500'}
                  href={'#'}>
                  Learn More
                </Link>
              </Stack>
            </Box>
            <Box
              maxW={'445px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}>
              <Box
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740'
                  }
                  layout={'fill'}
                />
              </Box>
              <Stack>
                <Text
                  color={'green.500'}
                  textTransform={'uppercase'}
                  fontWeight={800}
                  fontSize={'sm'}
                  letterSpacing={1.1}>
                  Historic data
                </Text>
                <Heading
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'1xl'}
                  fontFamily={'body'}>
                  AI mapping history events
                </Heading>
                <Link
                  px={1}
                  py={1}
                  color={'blue.500'}
                  href={'#'}>
                  Learn More
                </Link>
              </Stack>
            </Box>
          </SimpleGrid>
        </Stack>
        {/* projects ends  */}
        <Stack py={{ base: 20, md: 20 }} pb={{ base: 0, md: 0 }} spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Research
          </Text>
          <Heading>Our Research Areas</Heading>
          <Flex color='white'>
            <Flex w='25%' flexDir={"column"}>
              <Stack bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                borderBottom={"5px solid #4299e1"}
                overflow={'hidden'}
                _hover={{ bg: '#4299e1', color: 'white' }}>
                <Center
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'0.75xl'}
                  fontWeight={'500'}
                  fontFamily={'body'}>
                  AI mapping history events
                </Center>
              </Stack>
              <Stack bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                mt={10}
                borderBottom={"5px solid #4299e1"}
                overflow={'hidden'}
                _hover={{ bg: '#4299e1', color: 'white' }}>
                <Center
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'0.75xl'}
                  fontWeight={'500'}
                  fontFamily={'body'}>
                  AI mapping history events
                </Center>
              </Stack>
              <Stack bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                mt={10}
                borderBottom={"5px solid #4299e1"}
                overflow={'hidden'}
                _hover={{ bg: '#4299e1', color: 'white' }}>
                <Center
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'0.75xl'}
                  fontWeight={'500'}
                  fontFamily={'body'}>
                  AI mapping history events
                </Center>
              </Stack>
            </Flex>
            <Square flex='1' px={10}>
              <Image
                alt={'Login Image'}
                objectFit={'contain'}
                src="/brain.svg"
              />

            </Square>
            <Flex w='25%' flexDir={"column"}>
              <Stack bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                borderBottom={"5px solid #4299e1"}
                overflow={'hidden'}
                _hover={{ bg: '#4299e1', color: 'white' }}>
                <Center
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'0.75xl'}
                  fontWeight={'500'}
                  fontFamily={'body'}>
                  AI mapping history events
                </Center>
              </Stack>
              <Stack bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                mt={10}
                borderBottom={"5px solid #4299e1"}
                overflow={'hidden'}
                _hover={{ bg: '#4299e1', color: 'white' }}>
                <Center
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'0.75xl'}
                  fontWeight={'500'}
                  fontFamily={'body'}>
                  AI mapping history events
                </Center>
              </Stack>
              <Stack bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                mt={10}
                borderBottom={"5px solid #4299e1"}
                overflow={'hidden'}
                _hover={{ bg: '#4299e1', color: 'white' }}>
                <Center
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'0.75xl'}
                  fontWeight={'500'}
                  fontFamily={'body'}>
                  AI mapping history events
                </Center>
              </Stack>
            </Flex>
          </Flex>
        </Stack>
        {/* research areas ends  */}
        <Stack py={{ base: 20, md: 20 }} pb={{ base: 0, md: 0 }} spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Blog
          </Text>
          <Heading>News, Tips & Tricks</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={{ base: 10, md: 10 }}>
            <Wrap spacing="30px" marginTop="0">
              <WrapItem width={'100%'}>
                <Box w="100%">
                  <Box borderRadius="lg" overflow="hidden">
                    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                      <Image
                        transform="scale(1.0)"
                        src={
                          'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                        }
                        alt="some text"
                        objectFit="contain"
                        width="100%"
                        transition="0.3s ease-in-out"
                        _hover={{
                          transform: 'scale(1.05)',
                        }}
                      />
                    </Link>
                  </Box>
                  <HStack spacing={2} marginTop={2}>
                    <Tag size={'md'} variant="solid" colorScheme="blue" >
                      History
                    </Tag>
                  </HStack>
                  <Heading fontSize="xl" marginTop="2">
                    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                      Some blog title
                    </Link>
                  </Heading>
                  <Text as="p" fontSize="md" marginTop="2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </Text>
                  <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
                    <Image
                      borderRadius="full"
                      boxSize="40px"
                      src="https://100k-faces.glitch.me/random-image"
                      alt="Avatar of .."
                    />
                    <Text fontWeight="medium">John</Text>
                    <Text>—</Text>
                    <Text>2020/2/2</Text>
                  </HStack>
                </Box>
              </WrapItem>
            </Wrap>
            <Wrap spacing="30px" marginTop="0">
              <WrapItem width={'100%'}>
                <Box w="100%">
                  <Box borderRadius="lg" overflow="hidden">
                    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                      <Image
                        transform="scale(1.0)"
                        src={
                          'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                        }
                        alt="some text"
                        objectFit="contain"
                        width="100%"
                        transition="0.3s ease-in-out"
                        _hover={{
                          transform: 'scale(1.05)',
                        }}
                      />
                    </Link>
                  </Box>
                  <HStack spacing={2} marginTop={2}>
                    <Tag size={'md'} variant="solid" colorScheme="blue" >
                      History
                    </Tag>
                  </HStack>
                  <Heading fontSize="xl" marginTop="2">
                    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                      Some blog title
                    </Link>
                  </Heading>
                  <Text as="p" fontSize="md" marginTop="2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </Text>
                  <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
                    <Image
                      borderRadius="full"
                      boxSize="40px"
                      src="https://100k-faces.glitch.me/random-image"
                      alt="Avatar of .."
                    />
                    <Text fontWeight="medium">John</Text>
                    <Text>—</Text>
                    <Text>2020/2/2</Text>
                  </HStack>
                </Box>
              </WrapItem>
            </Wrap>
            <Wrap spacing="30px" marginTop="0">
              <WrapItem width={'100%'}>
                <Box w="100%">
                  <Box borderRadius="lg" overflow="hidden">
                    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                      <Image
                        transform="scale(1.0)"
                        src={
                          'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                        }
                        alt="some text"
                        objectFit="contain"
                        width="100%"
                        transition="0.3s ease-in-out"
                        _hover={{
                          transform: 'scale(1.05)',
                        }}
                      />
                    </Link>
                  </Box>
                  <HStack spacing={2} marginTop={2}>
                    <Tag size={'md'} variant="solid" colorScheme="blue" >
                      History
                    </Tag>
                  </HStack>
                  <Heading fontSize="xl" marginTop="2">
                    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                      Some blog title
                    </Link>
                  </Heading>
                  <Text as="p" fontSize="md" marginTop="2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </Text>
                  <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
                    <Image
                      borderRadius="full"
                      boxSize="40px"
                      src="https://100k-faces.glitch.me/random-image"
                      alt="Avatar of .."
                    />
                    <Text fontWeight="medium">John</Text>
                    <Text>—</Text>
                    <Text>2020/2/2</Text>
                  </HStack>
                </Box>
              </WrapItem>
            </Wrap>
          </SimpleGrid>
        </Stack>
        {/* projects ends  */}
        <Stack
          textAlign={'center'}
          align={'center'}
          boxShadow={'2xl'}
          rounded={'20px'}
          my={{ base: 5, md: 10 }}
          spacing={{ base: 8, md: 5 }}
          py={{ base: 20, md: 35 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
            lineHeight={'110%'}>
            <Text as={'span'} bgGradient='linear(to-l, #351bcd, #00a2ff)' bgClip='text'>
              Get involved
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            We are looking for contributors to help up build the community stronger.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button rounded={'full'} px={6} size={'lg'}>
              Join
            </Button>
            <Button rounded={'full'} px={6} size={'lg'}>
              Contact
            </Button>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              size={'lg'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.500' }}>
              Donate
            </Button>
          </Stack>
        </Stack>
        {/* donate section ends here  */}
        {/* <Stack>
          <Box
            bg="#02054B"
            color="white"
            m={{ sm: 4, md: 1, lg: 1 }}
            p={{ sm: 5, md: 5, lg: 1 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                          +91-988888888
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                          hello@abc.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                          Karnavati, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box> */}
        {/* </Stack> */}
        {/* contact section ends here   */}

      </Container>
    </>
  );
};

export default Home;