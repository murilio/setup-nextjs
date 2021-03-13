import Head from 'next/head'
import Link from 'next/link'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Project</title>
      </Head>

      <main>
        <h1>Home</h1>
        <Link href="/about">
          <a>About</a>
        </Link>
      </main>
    </div>
  )
}
