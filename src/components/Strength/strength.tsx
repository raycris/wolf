import Link from "next/link";
import Image from "next/image";

import Logo01 from "../../assets/images/Logo01.png";
import Logo02 from "../../assets/images/Logo02.png";
import Logo03 from "../../assets/images/Logo03.png";
import PlayButton from "../../assets/images/Play-B.png";

import Button from "../Button/button";

import styles from "./strength.module.css";

const data = [
  {
    id: 1,
    icon: Logo01,
    title: "Pure Strength",
    description:
      "It is essential to make the best use of the time we spend exercising to ensure optimal results from the effort.",
  },
  {
    id: 2,
    icon: Logo02,
    title: "The Challenge",
    description:
      "Unlearn to learn how to lead a healthy lifestyle according to your daily life. It is from this process that we can put into practice our philosophy of empowering each person's current capacity and, at the same time, guiding them towards their goals.",
  },
  {
    id: 3,
    icon: Logo03,
    title: "Our Mission",
    description:
      "Our purpose is to transfer valuable knowledge to positively influence people's health and fitness.",
  },
];

const Strength = () => {
  return (
    <section className={styles.container}>
      <div>
        {data.map((item) => (
          <div className={styles.infoContainer} key={item.id}>
            <picture>
              <Image src={item.icon} alt={item.title} className={styles.icon} />
            </picture>
            <div className={styles.textContainer}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
        <div className={styles.btnJoin}>
          <Button href={"/forms/clients-34"} />
        </div>
      </div>
      <div>
        <Link
          href="https://www.youtube.com/watch?v=7KSNmziMqog"
          target="_blank"
          rel="noreferrer"
          className={styles.videoImage}
        >
          <span className={styles.btnPlayContainer}>
            <picture>
              <Image
                src={PlayButton}
                alt={"Play Button"}
                width={100}
                height={101}
              />
            </picture>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Strength;
