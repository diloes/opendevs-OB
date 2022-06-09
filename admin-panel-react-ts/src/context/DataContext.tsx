import { useState, createContext, useContext, useEffect } from 'react'
import { RegisterUser, User } from '../types'


const INITIAL_STATE = {
  email: '',
  password: '',
  rememberPassword: ''
}

// Creamos el contexto de datos con el estado inicial y el 'setter' de datos
export const DataContext = createContext({
  inputValues: INITIAL_STATE,
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {},
  saveUser: (email: string, password: string) => {}
})

interface FormState {
  inputValues: RegisterUser,
  user: User
}

export const DataProvider = (props: any) => {

  const [inputValues, setInputValues] = useState<FormState['inputValues']>(INITIAL_STATE)
  const [user, setUser] = useState<FormState['user']>({id: '0', email: '0', password: '0'})

  // Compruebo que se ha guardado el usuario
  useEffect(() => {
    console.log(user)
  },[user])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  // Guardamos la data del usuario
  const saveUser = (email: string, password: string) => {
    console.log(email, password)
    setUser({
      id: Math.floor(Math.random() * 100),
      email: email,
      password: password
    })
  }

  return (
    <DataContext.Provider value={{
      inputValues,
      handleChange,
      saveUser
    }}>
       {props.children}
    </DataContext.Provider>
  )
}

// exportamos el contexto
export function useAppContext(){
  return useContext(DataContext)
}