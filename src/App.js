// MARK: React Imports
import React from 'react'
import { hot } from 'react-hot-loader'

// MARK: Router Import
import Routes from './Router'

// MARK: Context Import
import { ExampleProvider } from './context/useContextExample'
import SnackbarProvider from '@brancol/react-snackbar'

const App = () => (
  <ExampleProvider>
    <SnackbarProvider>
      <Routes />
    </SnackbarProvider>
  </ExampleProvider>
)

export default hot(module)(App)
