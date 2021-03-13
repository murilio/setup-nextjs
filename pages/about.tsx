import Head from 'next/head'
import Link from 'next/link'

export default function About () {
  return (
    <div>
      <Head>
        <title>About | Project</title>
      </Head>

      <main>
        <h1>About</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
      </main>
    </div>
  )
}
