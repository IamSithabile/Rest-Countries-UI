import './index.css'
import Nav from './components/Nav'
import { Navigate, Route, Routes } from 'react-router-dom'
import Country from './components/Country'
import Homepage from './components/Homepage'

const App = () => {
  return (
    <div className=' bg-slate-200 dark:bg-gray-900'>
      <Nav />
      <Routes>
        <Route
          path='/'
          element={
            <Navigate
              replace={true}
              to='/countries'
            />
          }
        />
        <Route
          path='/countries'
          element={<Homepage />}
        />
        <Route
          path='/country/:name'
          element={<Country />}
        />
      </Routes>
    </div>
  )
}

export default App
