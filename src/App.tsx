import * as React from "react"
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  theme,
  useDisclosure, Flex,
} from "@chakra-ui/react"
import {
  CustomAutosizeTextarea,
  CustomInput,
  CustomInputWithLabel,
  InputWithRef
} from "./components/CustomInput";
import { useRef } from "react";

export const App = () => {
  const inputRef = useRef(null)

  return (
    <ChakraProvider theme={theme}>
      <Center height='100vh'>
        <Box maxW='500px'>
          <CustomInput/>
          <InputWithRef ref={inputRef} mt={8}/>
          <CustomInputWithLabel label='サンプル'/>
          <CustomAutosizeTextarea mt={8}/>

          <Flex mt={8} gap={4}>
            <FullModal/>
            <CustomDrawer />
          </Flex>
        </Box>
      </Center>
    </ChakraProvider>
  )
}

const FullModal = () => {
  const modal = useDisclosure()

  return (
    <>
      <Button onClick={modal.onOpen}>open modal</Button>

      <Modal isOpen={modal.isOpen} onClose={modal.onClose} size='full'>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Full Modal</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={modal.onClose}>
              Close
            </Button>
            <Button variant='ghost'>Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

const CustomDrawer = () => {
  const drawer = useDisclosure()

  return (
    <>
      <Button colorScheme='teal' onClick={drawer.onOpen}>
        open drawer
      </Button>
      <Drawer
        isOpen={drawer.isOpen}
        placement='right'
        onClose={drawer.onClose}
      >
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={drawer.onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
