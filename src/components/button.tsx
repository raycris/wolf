import Image from "next/image";
import React from "react";
import styles from "./button.module.css";

import muscle from "../assets/images/muscle.png";

const button = (props: { href: string | undefined }) => {
  return (
    <a className={styles.container} href={props.href}>
      <span className={styles.label}>Join us!</span>
      <Image src={muscle} alt="biceps" width={30} height={30} />
    </a>
  );
};

export default button;