import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      Mainview Splashscreen
      <Link href={`/question`} key={"questionview"}>
        <a>
          <span> question </span>
        </a>
      </Link>
    </div>
  );
}
