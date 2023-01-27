import Link from "next/link";
import Image from "next/image";

import X from "../../assets/icons/xIcon.svg";
import IgSVG from "../../assets/icons/instagram.svg";

import styles from "./modal.module.css";

const Modal = ({ closeModal }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.closeIcon} onClick={closeModal}>
        <Image src={X} alt="close modal icon" width={35} height={35} />
      </div>
      <ul className={styles.menuContainer}>
        <li className={styles.menuItem}>
          <Link href="/" className={styles.label}>
            Home
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href={"/forms/clients-34"} className={styles.label}>
            Registration
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="mailto:clients@wolf.fit" className={styles.label}>
            Contact
          </Link>
        </li>
      </ul>
      <div className={styles.contactContainer}>
        <div className={styles.information}>
          <span className={styles.message}>
            <Link href="mailto:clients@wolf.fit">clients@wolf.fit</Link>
          </span>
          <span className={styles.phone}>1829-819-1370</span>
        </div>
        <Link href="https://www.instagram.com/bewolf.rd/">
          <Image src={IgSVG} alt="instagram" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
};

export default Modal;
