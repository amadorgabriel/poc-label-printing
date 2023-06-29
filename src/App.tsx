import { ChangeEvent, useRef, useState } from "react";
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

function App() {
  const [value, setValue] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  const handleGeneratePdf = () => {
   
  };

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  function resetForm() {
    setFile(null);
    setValue("");
  }

  return (
    <Container height="max">
      <Box>
        <Heading>Label Printing</Heading>
        <Text mt="2" fontSize={"md"}>
          Gere etiquetas para impressão sem perder qualidade de imagem.
        </Text>
      </Box>

      <form onReset={resetForm}>
        <Box width="100%" mt={8}>
          <Input
            placeholder="Texto para sua etiqueta"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />

          <Input
            type="file"
            placeholder="Nenhum ficheiro selecionado"
            onChange={handleFileChange}
            mt={3}
            accept=".svg"
          ></Input>
        </Box>

        <Box w="100%" mt={8}>
          <Box
            ref={ref}
            className="box-container"
            height="200px"
            w="100%"
            p={4}
            color="white"
          >
            <Box className="text-content">
              <Text mt="2" fontSize={"2xl"} color={value ? "initial" : "gray"}>
                {value || "Seu texto aparecerá aqui..."}
              </Text>
            </Box>

            <Box className="image-container">
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
                  className="image-content"
                />
              ) : (
                <img
                  src="https://fakeimg.pl/150x150?font=bebas"
                  style={{ borderRadius: "4px" }}
                  className="image-content"
                />
              )}
            </Box>
          </Box>
        </Box>

        <HStack mt={6} direction="row" spacing={3} as="footer">
          <Box>
            <Button
              colorScheme="blue"
              variant="solid"
              type="submit"
              onClick={handleGeneratePdf}
              isDisabled={!file}
            >
              Gerar PDF
            </Button>

            <Button
              ms={3}
              type="submit"
              colorScheme="blue"
              variant="solid"
              isDisabled
            >
              Gerar SVG
            </Button>
          </Box>

          <Button colorScheme="blue" variant="outline" type="reset">
            Resetar
          </Button>
        </HStack>
      </form>
    </Container>
  );
}

export default App;
