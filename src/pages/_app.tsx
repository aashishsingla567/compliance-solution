import { type AppType } from "next/app";
import { Cambay } from "next/font/google";

const cambay = Cambay({
  subsets: ["latin"],
  display: "swap",
  weight: "400", // Add this line
});

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={cambay.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
