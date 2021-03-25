import type { AppProps } from "next/app";
import BottomNavigation from "../components/bottomnav/BottomNavigation";
import Header from "../components/header/Header";
import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="app-main-container">
      <Header />
      <Component {...pageProps} />
      <BottomNavigation activeLink={router.pathname} />
    </div>
  );
}

export default MyApp;
