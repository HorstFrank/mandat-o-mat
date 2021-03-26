import React from "react";
import BottomNavigation from "../components/bottomnav/BottomNavigation";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";
import ReactPlayer from "react-player/youtube";

export default function Home() {
  return (
    <div className={styles.container}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        playing={true}
      />
    </div>
  );
}
