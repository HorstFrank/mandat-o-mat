import Link from "next/link";
import React from "react";
import Icon from "../icons/Icons";
import styles from "./BottomNavigation.module.css";

export type BottomNavigationProps = {
  activeLink: string;
};

const navLinks = [
  {
    uri: "/question",
    label: "Start",
    icon: "question",
  },
  {
    uri: "/result",
    label: "Ergebnis",
    icon: "result",
  },
  {
    uri: "/info",
    label: "Diese App",
    icon: "info",
  },
  {
    uri: "/settings",
    label: "Einstellungen",
    icon: "settings",
  },
];

export default function BottomNavigation({
  activeLink,
}: BottomNavigationProps) {
  return (
    <ul className={styles.container}>
      {navLinks.map((navLink) => {
        return (
          <li
            className={
              activeLink === navLink.uri ? styles.active : styles.inactive
            }
            key={navLink.uri}
          >
            <Link href={navLink.uri}>
              <a className={styles.buttonlink}>
                <div className="buttoncontent">
                  <Icon
                    className={
                      activeLink === navLink.uri
                        ? styles["svg-icon-css-active"]
                        : styles["svg-icon-css-inactive"]
                    }
                    kind={navLink.icon}
                    width="30px"
                    margin="0 auto"
                  />
                  <div>{navLink.label}</div>
                </div>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
