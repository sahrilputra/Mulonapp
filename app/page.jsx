import Image from 'next/image'
import MainHero from '../components/home/mainHero'
import AboutLayout from '../components/home/AboutLayout'
import { Button } from '@nextui-org/react'
export default function Home() {
  return (
    <>
      <main>
        <MainHero />
        <AboutLayout />
      </main>
    </>
  )
}
