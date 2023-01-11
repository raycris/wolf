import Image from "next/image";
import Logo from "../assets/images/logo-trainer.png";

import Phone from "../assets/images/phone.png";
import Message from "../assets/images/message.png";

import styles from "./header.module.css";

const header = () => {
  return (
    <header className={styles.container}>
      <Image src={Logo} alt="Wolf" width={140} height={64} />
      <div className={styles.infoContainer}>
        <p>
          <span>
            <Image src={Phone} alt="Phone" width={16} height={16} />
            1829-819-1370
          </span>
          <span>
            <Image src={Message} alt="Message" width={16} height={16} />
            <a href="mailto:clients@wolf.fit">clients@wolf.fit</a>
          </span>
        </p>
        <button className={styles.btn}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </header>
  );
};

export default header;
