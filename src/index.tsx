import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// 语言汉化
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { HashRouter } from 'react-router-dom'

dayjs.locale('zh-cn')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HashRouter>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </HashRouter>
  </React.StrictMode>
)
