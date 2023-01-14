import Image from "next/image";
import React, { useState } from "react";

import IgSVG from "../assets/icons/instagram.svg";

import X from "../assets/icons/xIcon.svg";

import styles from "./modal.module.css";

const Modal = ({ closeModal }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.closeIcon} onClick={closeModal}>
        <Image src={X} alt="close modal icon" width={35} height={35} />
      </div>
      <ul className={styles.menuContainer}>
        <li className={styles.menuItem}>
          <a href="#main" className={styles.label}>Home</a>
        </li>
        <li className={styles.menuItem}>
          <a href="#register" className={styles.label}>Registration</a>
        </li>
        <li className={styles.menuItem}>
          <a href="mailto:clients@wolf.fit" className={styles.label}>Contact</a>
        </li>
      </ul>
      <div className={styles.contactContainer}>
        <div className={styles.information}>
          <span className={styles.message}>
            <a href="mailto:clients@wolf.fit" >clients@wolf.fit</a>
          </span>
          <span className={styles.phone}>1829-819-1370</span>
        </div>
        <Image src={IgSVG} alt="instagram" width={24} height={24} />
      </div>
    </div>
  );
};

export default Modal;