import React from "react";
import BottomNavigation from "../components/bottomnav/BottomNavigation";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      infoview
      <BottomNavigation activeLink={""} />
    </div>
  );
}
