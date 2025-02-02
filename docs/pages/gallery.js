import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Gallery() {

  return (
    <>
      <Head>
        <title>Portal.js Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>

        </main>
        <Footer />
      </div>
    </>
  )
}
