import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './home.js'
import Main from './main.js'

function App(){
  
 return(
  <div className='App'>
      <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/main' element={<Main/>}/>
    </Routes>
   </BrowserRouter>
  </div>
   )
}

export default App;
