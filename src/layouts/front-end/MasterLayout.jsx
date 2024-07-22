import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationLayout from './NavigationLayout'
import FooterLayout from './FooterLayout'

import Home from './pages/Home'


function MasterLayout() {
  return (
   <>
      <main>
            <div>
                  <NavigationLayout/>
            </div>
            <section id='content'>

            </section>
            <div>
                  <FooterLayout/>
            </div>
      </main>
      <Outlet/>
   </>
      

  )
}

export default MasterLayout