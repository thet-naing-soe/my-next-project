import {
  Stack,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  AspectRatio,
  Image,
  Divider,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  return (
    <VStack
      w="full"
      h="full"
      alignItems="flex-start"
      p={10}
      spacing={10}
      bg={bgColor}
    >
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Cart</Heading>
        <Text>
          If price is too hard on your eyes,{" "}
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} w="full" alignItems="center">
        <AspectRatio ratio={1} w={24}>
          <Image src="images/skateboard.jpg" alt="skateboard" />
        </AspectRatio>
        <Stack direction="row" alignItems="space-between" w="full">
          <VStack spacing={0} alignItems="flex-start" w="full">
            <Heading size="md">Penny board</Heading>
            <Text color={secondaryTextColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading textAlign="end" size="sm">
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} w="full" alignItems="stretch">
        <HStack justify="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justify="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justify="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
        <Divider />
        <HStack justify="space-between" w="full">
          <Text color={secondaryTextColor}>Total</Text>
          <Heading size="lg">$162.79</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};
export default Cart;
