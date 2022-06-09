import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DataProvider } from './context/DataContext'
import CrearOferta from './pages/CrearOferta'
import Dashboard from './pages/Dashboard'
import FichaOferta from './pages/FichaOferta'
import Login from './pages/Login'

const App: React.FC = () => {

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />        
          <Route path='/dashboard' element={<Dashboard />} />        
          <Route path='/:oferta_id' element={<FichaOferta />} /> 
          <Route path='/crear-oferta' element={<CrearOferta />} />              
        </Routes>
      </BrowserRouter>
    </DataProvider>
    
  )
}

export default App
