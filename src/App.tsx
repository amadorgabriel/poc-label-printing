import {
  Container,
  HStack,
  Box,
  Text,
  Heading,
  Input,
  InputGroup,
  Button,
} from "@chakra-ui/react";

import "./App.css";

function App() {
  return (
    <Container height="max">
      <Box>
        <Heading>Label Printing</Heading>
        <Text mt="2" fontSize={"md"}>
          Gere etiquetas para impressão sem perder qualidade de imagem.
        </Text>
      </Box>

      <Box width="100%" mt={8}>
        <Input placeholder="Texto para sua etiqueta" />

        <InputGroup mt={3}>
          <input type="file" style={{ display: "none" }}></input>

          <Input size={"md"} placeholder="Upload do SVG" />
        </InputGroup>
      </Box>

      <Box w="100%" mt={8}>
        <Box bg="gray" height='300px' w="100%" p={4} color="white">
          Box Previwer
        </Box>

        <HStack mt={6} direction="row" spacing={3}>
          <Button colorScheme="blue" variant="solid">
            Gerar PDF
          </Button>
          <Button colorScheme="blue" variant="solid">
            Gerar SVG
          </Button>
        </HStack>
      </Box>
    </Container>
  );
}

export default App;
