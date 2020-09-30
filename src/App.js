import React from 'react'
import './App.css';
import { ContextProvider } from './Context';
import Form from './Form';
import FormList from './FormList';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'


library.add(faTrash);

export default function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <Form/>
        <FormList/>
      </ContextProvider>
    </div>
  )
}
