import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <section className='px-6 md:px-20 py-24'>
        <div className='flex max-xl:flex-col gap-16 '>
          <div className='flex flex-col justify-center'>
            <p 
              className='small-text font-spaceGrotesk'
            >
              ChatGPT for every site
              <Image 
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={18}
                height={18}
              />
            </p>
            <h1 className='head-text'>
              Unleash the power of 
                <span className='text-primary'> Chatbots</span>
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

