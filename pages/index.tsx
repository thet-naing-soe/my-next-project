import { Container, Flex } from "@chakra-ui/react";
import Details from "../src/sections/details";
import Cart from "../src/sections/cart";
const IndexPage = () => (
  <Container maxW="container.xl" p={0}>
    <Flex
      py={[0, 10, 20]}
      h={{ base: "auto", md: "120vh" }}
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default IndexPage;
