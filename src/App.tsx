import * as React from "react"
import {
  Box,
  Center,
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { CustomAutosizeTextarea, CustomInput, CustomInputWithLabel, InputWithRef } from "./components/CustomInput";
import { useRef } from "react";

export const App = () => {
  const inputRef = useRef(null)

  return (
    <ChakraProvider theme={theme}>
      <Center height='100vh'>
        <Box maxW='500px'>
          <CustomInput/>
          <InputWithRef ref={inputRef} />
          <CustomInputWithLabel label='サンプル'/>
          <CustomAutosizeTextarea mt={8} />
        </Box>
      </Center>
    </ChakraProvider>
  )
}
