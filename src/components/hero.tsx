import { url } from "inspector";
import Image from "next/image";
import React from "react";

import GymTrainers from "../assets/images/Gym-Trainer.jpg";
import WayOfLife from "../assets/images/way-of-life.jpg";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section
      className={styles.container}
    >
      {/* <Image src={WayOfLife} alt="backgroudn"></Image> */}
      <picture>
        <Image
          src={GymTrainers}
          alt={"gym trainers"}
          className={styles.heroPhoto}
        />
      </picture>
      <div className={styles.infoContainer}>
        <span>Your Trainers</span>
        <h3 className={styles.secondTitle}>
          way of <span>life</span>
        </h3>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Our passion and desire is to help people feel comfortable with
            themselves. To teach them to find a balance in their life where
            health is the pillar of all their activities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
