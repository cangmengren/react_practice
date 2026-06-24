// import { Navigate } from 'react-router-dom'

import LoginPage from './LoginPage'

const loginRouter = [
  // {
  //   path: '/',
  //   element: <Navigate to='/login' /> ,
  // },
  {
    path: '/login',
    element: <LoginPage />,
  },
]

export default loginRouter