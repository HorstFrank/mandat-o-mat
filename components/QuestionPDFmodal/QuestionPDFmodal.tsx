import React from "react";
// import { txt, txtFindReplace } from "../../assets/utils/txt";
import Icon from "../icons/Icons";
import styles from "./QuestionPDFmodal.module.css";

export type QuestionPDFmodalType = {
  url?: string;
  state?: boolean;
  xx?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function QuestionPDFmodal({
  url = "",
  state = false,
  onClick,
}: QuestionPDFmodalType) {
  const showHideClassName = state
    ? `${styles.modal} ${styles["display-block"]}`
    : `${styles.modal} ${styles["display-none"]}`;

  return (
    <div className={showHideClassName}>
      <section className={styles["modal-main"]}>
        <embed
          src={url}
          width="100%"
          height="100%"
          allow-script-access="always"
          allow-full-screen="false"
          type="application/pdf"
        />
        {/* 
        <iframe
          src="/pdfs/1927800.pdf"
          // src="http://dipbt.bundestag.de/dip21/btd/19/278/1927800.pdf"
          width="100%"
          height="100%"
        ></iframe>
      
        http://dipbt.bundestag.de/dip21/btd/19/278/1927800.pdf
        <object
          type="application/pdf"
          data="/pdfs/1927800.pdf"
          width="100%"
          height="70%"
        ></object> */}

        <div className={styles["close-button"]} onClick={() => onClick(true)}>
          <Icon
            kind="close"
            fill="var(--base-background)"
            primary-fill="var(--primary)"
            width="var(--close-icon-width)"
            margin="0 0"
          />
        </div>
      </section>
    </div>
  );
}
