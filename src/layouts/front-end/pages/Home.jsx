import React from 'react'
import Button from '../../../components/Button'

function Home() {
  return (
    <>
      <main className='text-white w-full h-screen flex flex-col items-center justify-start pt-24'>
        <h1 className={`text-7xl font-bold text-white mb-12`}>
          Web DEVELOPER
          </h1>
        <div className={`flex gap-8`}>
          <p className='w-96 text-lg opacity-90 text-left'>I'am Arche Web Developer based in Philippines.</p>
          <Button isLink to="" className={`neon-bg2 primary-text py-2 px-10 rounded-md`} >
              View Resume
          </Button>
        </div>

      {/* Featured Projects */}
        <section>
            <h1>Featured Projects</h1>
        </section>
      </main>
    </>
  )
}

export default Home