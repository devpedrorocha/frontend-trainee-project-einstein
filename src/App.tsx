import { Header } from './components/molecules/header';
import { Outlet } from 'react-router-dom';
import './index.css'

function App() {

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-between min-h-screen p-24">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
