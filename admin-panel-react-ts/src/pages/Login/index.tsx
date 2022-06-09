import { 
  Box, 
  Button, 
  Container, 
  Divider, 
  Heading, 
  HStack, 
  Text, 
} from '@chakra-ui/react'
import FormComponent from '../../components/FormComponent'


const Login = () => {

  return (
    <Container maxW='full'>
      <HStack spacing={10} justifyContent='space-between'>
        <Box p='0 200px' maxW={800} w='100%' m='0 auto' >
          <Heading as='h1' fontWeight={700} mb={4}>Sign In</Heading>
          <Text mb={8}>Enter yout email and password to sign in!</Text>
          <Button w='100%' mb={8}>Sign in with Google</Button>
          <HStack mb={6} > 
            <Divider />
            <Text>or</Text>
            <Divider />
          </HStack>
          <FormComponent />
        </Box>

        <Box maxW={800} w='100%' h='100vh' backgroundColor='blue.500' marginRight={-2}>
          <Text>Aquí va la imagen</Text>
        </Box>
      </HStack>
    </Container>
  )
}

export default Login