import Head from "next/head";
import { HomeModule } from "../src/modules/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecommerce site UI</title>
        <meta name="description" content="Ecommerce site UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeModule />
    </>
  );
}
