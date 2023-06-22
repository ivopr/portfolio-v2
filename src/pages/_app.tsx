import type { AppProps } from "next/app";
import Head from "next/head";

import "@/styles/globals.css";

import Header from "@/components/Header";
import { SocialsProvider } from "@/contexts/Social";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ivo&rsquo;s Portfolio</title>
      </Head>
      <SocialsProvider>
        <div className="inset-0 h-screen flex flex-col overflow-hidden bg-[rgb(36,36,36)] text-white">
          <Header />
          <div className="flex flex-col flex-1 h-full w-full overflow-hidden">
            <Component {...pageProps} />
          </div>
        </div>
      </SocialsProvider>
    </>
  );
}
