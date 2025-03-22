import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ConfigProvider theme={{ cssVar: true }}>
      <App />
    </ConfigProvider>
    </BrowserRouter>
  </StrictMode>,
)
