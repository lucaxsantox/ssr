import Button from './components/Button'
import Link from 'next/link'

function HomePage() {
    return <div>
        <h1 className="title">
    {'Esta é uma aplicação rodando em SSR '}
    <br/>
  <Link href="/pagina2">
    <a> <Button/></a>
  </Link>
</h1>
    
       
            </div>
}

export default HomePage