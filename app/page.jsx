import Image from 'next/image'
import MainHero from '../components/home/mainHero'
import AboutLayout from '../components/home/AboutLayout'
import { Button } from '@nextui-org/react'

import LandingLayout from '../ui/LadingLayout'
export default function Home() {
  return (
    <>
      <LandingLayout>
        <main>
          <MainHero />
          <AboutLayout />
        </main>
      </LandingLayout>
    </>
  )
}

