import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import Portfolio from '../components/Portfolio'
import Timeline from '../components/Timeline'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
<div className='bg-stone-900 text-slate-50 font-roboto'>
  <div className='max-w-5xl x-11/12 mx-auto'>
    <Intro/>
    <Portfolio/>
    <Timeline/>
    <Contact/>
    <Footer/>
  </div>
</div>)
}
