import Image from "next/image";

import wolfLogo from "../assets/images/logo-trainer.png";
import InstagramSVG from "../assets/icons/instagram.svg";

import styles from "./footer.module.css";

const footer = () => {
  return (
    <footer className={styles.container}>
      <Image src={wolfLogo} alt="wolf" height={140} width={140} />
      <span className={styles.infoContainer}>
        <a href="https://www.instagram.com/bewolf.rd/">
          <Image
            src={InstagramSVG}
            alt="instagram"
            height={24}
            width={24}
            style={{ marginRight: 12 }}
          />
          <div className={styles.label}>@bewolf.rd</div>
        </a>
      </span>
      <div>
        <span className={styles.label}>
          Copyright © 2022
          <br />
          All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default footer;
