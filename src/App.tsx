import {
  Container,
  HStack,
  Box,
  Text,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";

import "./App.css";

import puzzleSVG from "./assets/svg/puzzle.svg";

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

        <Input
          type="file"
          placeholder="Nenhum ficheiro selecionado"
          mt={3}
          accept=".svg"
        ></Input>
      </Box>

      <Box w="100%" mt={8}>
        <Box
          className="box-container"
          height="200px"
          w="100%"
          p={4}
          color="white"
        >
          <Box className="text-content">
            <Text mt="2" fontSize={"2xl"}>
              Texto alternativo
            </Text>
          </Box>

          <Box className="image-container">
            <img src={puzzleSVG} className="image-content" />
          </Box>
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
