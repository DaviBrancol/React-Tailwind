// MARK: React
import React from 'react'

// MARK: Contexts
import { useContextExample } from '../context/useContextExample'
import { useSnackbar } from '@brancol/react-snackbar'

export function Home() {
  const { stateExample } = useContextExample()
  const snackbar = useSnackbar()

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1>Home</h1>
      <div className="container mx-auto justify-center inline-flex space-x-10 mt-10">
        <button
          className="rounded-lg shadow-sm bg-success-500 text-white font-bold px-6 py-2"
          onClick={() => snackbar.showSuccess('Main success page now')}
        >
          Success
        </button>
        <button
          className="rounded-lg shadow-sm bg-warning-500 text-white font-bold px-6 py-2"
          onClick={() => snackbar.showWarning('Warning')}
        >
          Warning
        </button>
        <button
          className="rounded-lg shadow-sm bg-danger-500 text-white font-bold px-6 py-2"
          onClick={() => snackbar.showDanger('Danger')}
        >
          Danger
        </button>
      </div>
    </div>
  )
}
