import loginRouter from './pages/login/login.router'
import demoRouters from './pages/demo.router'
import layoutRouter from './pages/layout.router'

const routes = [
  ...loginRouter,
  ...demoRouters,
  ...layoutRouter,
]

export default routes