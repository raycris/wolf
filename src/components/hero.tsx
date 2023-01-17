import React from "react";
import Image from "next/image";

import Button from "./button";

import GymTrainers from "../assets/images/Gym-Trainer.jpg";

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <picture>
        <Image
          src={GymTrainers}
          alt={"gym trainers"}
          className={styles.heroPhoto}
        />
      </picture>
      <div className={styles.infoContainer}>
        <div className={styles.labelContainer}>
          <span className={styles.title}>Your Trainers</span>
          <h3 className={styles.secondTitle}>
            way of <span style={{ color: "#4c00ff" }}>life</span>
          </h3>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Our passion and desire is to help people feel comfortable with
            themselves. To teach them to find a balance in their life where
            health is the pillar of all their activities.
          </p>
        </div>
        <Button href={undefined} />
      </div>
    </section>
  );
};

export default Hero;
