import "../styles/globals.css";
import "styles/hide-scrollbar.css";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import Header from "components/navigation/header/Header";
import { SearchContextProvider } from "components/context/SearchContext";

const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchContextProvider>
      <main className={poppins.className + " font-normal"}>
        <Header />
        <Component {...pageProps} />
      </main>
    </SearchContextProvider>
  );
}
