import Link from "next/link";
import Image from "next/image";

import muscle from "../../assets/images/muscle.png";

import styles from "./button.module.css";

const button = (props: { href: string }) => {
  return (
    <Link className={styles.container} href={props.href}>
      <span className={styles.label}>Join us!</span>
      <Image src={muscle} alt="biceps" width={30} height={30} />
    </Link>
  );
};

export default button;
