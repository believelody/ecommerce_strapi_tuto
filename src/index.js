import React from 'react'
import ReactDOM from 'react-dom'
import 'gestalt/dist/gestalt.css'
import App from './App.jsx'
import { AppProvider } from './contexts'

ReactDOM.render(
    <AppProvider>
        <App />
    </AppProvider>,
    document.getElementById('root')
)