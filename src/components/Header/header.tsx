import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import Logo from "../../assets/images/logo-trainer.png";
import Phone from "../../assets/images/phone.png";
import Message from "../../assets/images/message.png";

import Modal from "../Modal/modal";

import styles from "./header.module.css";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <header className={styles.container}>
        <Image src={Logo} alt="Wolf" width={88} height={88} />
        <div className={styles.infoContainer}>
          <p className={styles.contactInfo}>
            <span className={styles.phone}>
              <Image src={Phone} alt="Phone" width={18} height={18} />
              1829-819-1370
            </span>
            <span className={styles.message}>
              <Image src={Message} alt="Message" width={18} height={18} />
              <Link href="mailto:clients@wolf.fit">clients@wolf.fit</Link>
            </span>
          </p>
          <button className={styles.btn} onClick={() => setOpenModal(true)}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </header>
      {openModal ? <Modal closeModal={() => setOpenModal(false)} /> : <></>}
    </>
  );
};

export default Header;
