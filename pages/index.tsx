import type { NextPage } from 'next'
import ContactForm from '../components/ContactForm'

const Home: NextPage = () => {
  return (
    <main className='bg-white h-screen flex items-center justify-center flex-col text-black'>
      <h1 className='text-2xl'>
        AWS Contact Form Test
      </h1>
      <ContactForm/>
    </main>
  )
}

export default Home
