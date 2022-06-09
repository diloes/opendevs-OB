import { useState, createContext, useContext } from 'react'
import { RegisterUser } from '../types'


const INITIAL_STATE = {
  email: '',
  password: '',
  rememberPassword: ''
}

// Creamos el contexto de datos con el estado inicial y el 'setter' de datos
export const DataContext = createContext({
  inputValues: INITIAL_STATE,
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {}
})

interface FormState {
  inputValues: RegisterUser
}

export const DataProvider = (props: any) => {

  const [inputValues, setInputValues] = useState<FormState['inputValues']>(INITIAL_STATE)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  return (
    <DataContext.Provider value={{
      inputValues,
      handleChange
    }}>
       {props.children}
    </DataContext.Provider>
  )
}

// exportamos el contexto
export function useAppContext(){
  return useContext(DataContext)
}