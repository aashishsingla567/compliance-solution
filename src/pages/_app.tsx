import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import Head from "next/head";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta
          name="description"
          content="Get a comprehensive solution for all your compliance needs"
        />
        <link rel="icon" type="image/png" href="/favicon/favicon.png" />

        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
          defer
        />
      </Head>
      <div className={GeistSans.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
