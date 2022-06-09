import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Text
} from '@chakra-ui/react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import theme from '../../theme'
import { RegisterUser } from '../../types'

interface FormState {
  inputValues: RegisterUser
}

const INITIAL_STATE = {
  email: '',
  password: '',
  rememberPassword: ''
}

const mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const FormComponent: React.FC = () => {

  const [inputValues, setInputValues] = useState<FormState['inputValues']>(INITIAL_STATE)
  const [formStatus, setFormStatus] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  /**
   * Validamos los datos y ponemos en true la variable de estado formStatus para que 
   * entre el Navigate y nos lleve al dashboard.
   * @param e evento del botón
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() 
    const { email, password, rememberPassword } = inputValues
    if( email.match(mailformat) && password === rememberPassword){
      console.log(inputValues)
      setFormStatus(true)    
    }
  }

  return (
    <>
      {
        formStatus ? <Navigate to="/dashboard" replace={true} />
        :
        <form onSubmit={handleSubmit}>
          <FormControl isRequired mb={5}>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input 
              name='email' 
              onChange={handleChange}
              placeholder='mail@example.com' 
              type='email' 
            />
          </FormControl>

          <FormControl isRequired mb={5}>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input 
              name='password' 
              onChange={handleChange}
              placeholder='Min. 8 characters' 
              type='password' 
            />
          </FormControl>

          <FormControl isRequired mb={5}>
            <FormLabel htmlFor='remember-password'>Remember password</FormLabel>
            <Input 
              name='rememberPassword' 
              onChange={handleChange}
              placeholder='Min. 8 characters' 
              type='password' 
            />
          </FormControl>

          <HStack mb={5}>
            <Checkbox>Keep me logged in</Checkbox>
            <Link color={theme.colors.primary}>Forgot password?</Link>
          </HStack>

          <Button 
            backgroundColor={theme.colors.primary}
            color='white'
            width='100%'
            borderRadius={12}
            mb={4}
            type='submit'
          >Sign In</Button>
          <Text>
            No registerd yet?{' '}
            <Link color={theme.colors.primary} href='#'>
              Create an Account
            </Link>
          </Text>
          <Text fontSize={15} mt={20} >
            2022 Diloes SA. All Rigths Reserved. Made with love by Diloes!
          </Text>
        </form> 
      }
      
    </>
    
  )
}

export default FormComponent