import Head from "next/head";
import styles from "../styles/Home.module.css";


import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>WOLF | WAY OF LIFE RAY</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/webIcon.png" />
      </Head>
      <main className={styles.main}>
        <Header/>
        <Hero/>
        <Footer/>
      </main>
    </>
  );
}
