import type { AppProps } from "next/app";
import BottomNavigation from "../components/bottomnav/BottomNavigation";
import Header from "../components/header/Header";
import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      {/* -------- "Background" of the Appo -------- */}
      <div className="app-main-container">
        <div className="header">
          <Header />
        </div>
        <div
          className={`top-shadow-stripes ${
            router.pathname === "/info" ? "top-shadow-stripes-infoshift" : ""
          }`}
        ></div>
        <div>{/* Auto Height SpaceHolder to show BG-Color */}</div>
        <div className="bottom-shadow-stripes"></div>
        <div className="bottom-nav">
          <BottomNavigation activeLink={router.pathname} />
        </div>
      </div>
      {/* -------- Content Overlay -------- */}
      <div className="content">
        <Component {...pageProps} />
      </div>
      {/* -------- Tiny CSS Shadow Overlay -------- */}
      <div
        className={`real-shadow-top ${
          router.pathname === "/info" ? "real-shadow-top-infoshift" : ""
        }`}
      ></div>
      <div className="real-shadow-bottom"></div>
    </>
  );
}

export default MyApp;
