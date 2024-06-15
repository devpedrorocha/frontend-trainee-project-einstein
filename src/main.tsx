import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './routes/Dashboard.tsx'
import { QuestionCharts } from './routes/QuestionCharts.tsx'
import { IndividualQuestion } from './routes/IndividualQuestion.tsx'
import { AuthProvider } from '@/context/authContext.tsx';
import { PrivateRoute } from './components/PrivateRoutes.tsx'
import { Home } from './routes/Home.tsx'
import { Login } from './routes/Login.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <App /> {/* Wrap the routes with App component */}
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: 'home', element: <Home /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'question-charts', element: <QuestionCharts /> },
      { path: 'individual-question', element: <IndividualQuestion /> },
    ],
  },
  { path: 'login', element: <Login /> },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
