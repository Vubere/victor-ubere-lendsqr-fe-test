import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.scss'

import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/Errorboundary.tsx'
import TakeToTop from './components/TakeToTop.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <TakeToTop>
            <App />
        </TakeToTop>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode >,
)
