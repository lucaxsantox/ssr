import Link from 'next/link'
import ButtonBack from './components/ButtonBack'
import Image from 'next/image'


export default function FirstPost() {
  return (
    <>
      <h1>Utilizar SSR permite o carregamento mais rápido na renderização inicial.</h1>
      <Image src="/pokebola.png" alt="logo react"  width={100}  height={100}  />
      <h2>
      <Link href="/">
    <a> <ButtonBack/></a>
    </Link>
      </h2>
    </>
  )
}