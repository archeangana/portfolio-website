import { useState } from 'react';

// Routes
import { Routes, Route} from 'react-router-dom'


// Pages
import Home from './layouts/front-end/pages/Home';
import About from './layouts/front-end/pages/About';
import Projects from './layouts/front-end/pages/Projects';
import Contacts from './layouts/front-end/pages/Contacts';

import NavigationLayout from './layouts/front-end/NavigationLayout';
import MasterLayout from './layouts/front-end/MasterLayout';


function App() {

  return (
    <>
      <Routes>
        <Route element={ <MasterLayout/>}>
          <Route index element={ <Home/>}/>
          <Route path='/projects' element={ <Projects/>}/>
        </Route>
        <Route path="*" element={<h1 className='text-7xl'>PAGE NOT FOUND</h1>}></Route>
      </Routes>
    </>
  )
}

export default App
