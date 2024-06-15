import { Header } from './components/header';
import { Outlet } from 'react-router-dom';
import './index.css'

function App() {

  return (
    <div>
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
