import Link from "next/link";
import React from "react";
import "./BottomNavigation.module.css";

export default function BottomNavigation() {
  return (
    <>
      <ul>
        <li>
          <Link href={`/question`} key={"questionview"}>
            question
          </Link>
        </li>
        <li>
          <Link href={`/result`} key={"result"}>
            Result
          </Link>
        </li>
        <li>
          <Link href={`/thisapp`} key={"thisapp"}>
            this app
          </Link>
        </li>
        <li>
          <Link href={`/settings`} key={"settings"}>
            settings
          </Link>
        </li>
      </ul>
    </>
  );
}
