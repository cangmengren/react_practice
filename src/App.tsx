import './App.css'
import routes from './index.router'
import { useRoutes } from 'react-router-dom'

function App() {
  // 根据路由表生成对应的路由规则
  const ElementRouter = useRoutes(routes)
  return <>{ElementRouter}</>
}

export default App
