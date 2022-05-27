import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
  Tooltip,
  useClipboard,
  IconButton,
  useColorModeValue,
  Link,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea
} from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';

export default function Contact() {
  const { hasCopied, onCopy } = useClipboard('example@example.com');

  return (
    <>
      <Flex
        w={'full'}
        h={'50vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1534536281715-e28d76689b4d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'left center'}>
        <VStack
          w={'full'}
          justify={'center'}
          align={'start'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} px={[4, 6, 10, 14, 20]}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Contact
            </Text>
          </Stack>
        </VStack>
      </Flex>
      <Stack
        minH={'100vh'}
        align={'start'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 20 }}
        px={[4, 6, 10, 14, 20]}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Text color={'gray.500'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Stack>
        <Stack
          spacing={{ base: 4, md: 8, lg: 20 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack
            align="center"
            justify="space-around"
            direction={{ base: 'row', md: 'column' }}>
            <Tooltip
              label={hasCopied ? 'Email Copied!' : 'Copy Email'}
              closeOnClick={false}
              hasArrow>
              <IconButton
                aria-label="email"
                variant="ghost"
                size="lg"
                fontSize="3xl"
                icon={<MdEmail />}
                _hover={{
                  bg: 'blue.500',
                  color: useColorModeValue('white', 'gray.700'),
                }}
                onClick={onCopy}
                isRound
              />
            </Tooltip>



            <Link href="#">
              <IconButton
                aria-label="twitter"
                variant="ghost"
                size="lg"
                icon={<BsTwitter size="28px" />}
                _hover={{
                  bg: 'blue.500',
                  color: useColorModeValue('white', 'gray.700'),
                }}
                isRound
              />
            </Link>

            <Link href="#">
              <IconButton
                aria-label="linkedin"
                variant="ghost"
                size="lg"
                icon={<BsLinkedin size="28px" />}
                _hover={{
                  bg: 'blue.500',
                  color: useColorModeValue('white', 'gray.700'),
                }}
                isRound
              />
            </Link>
          </Stack>

          <Box
            bg={useColorModeValue('white', 'gray.700')}
            borderRadius="lg"
            p={8}
            color={useColorModeValue('gray.700', 'whiteAlpha.900')}
            shadow="base">
            <VStack spacing={5}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>

                <InputGroup>
                  <InputLeftElement children={<BsPerson />} />
                  <Input type="text" name="name" placeholder="Your Name" />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>

                <InputGroup>
                  <InputLeftElement children={<MdOutlineEmail />} />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  resize="none"
                />
              </FormControl>

              <Button
                colorScheme="blue"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: 'blue.500',
                }}
                isFullWidth>
                Send Message
              </Button>
            </VStack>
          </Box>
        </Stack>
        {/* <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          particles
        </Flex> */}
      </Stack>
    </>
  );
}
