import { useEffect, useState } from "react";

import Image from "next/image";
import Trainers from "../../assets/images/trainer3.jpg";

import * as Progress from "@radix-ui/react-progress";

import styles from "./chooseUs.module.css";

const data = [
  { id: 1, title: "Nutrition Skills", percent: "100%" },
  { id: 2, title: "Muscle Building", percent: "100%" },
  { id: 3, title: "Cardio Training", percent: "100%" },
];

const ChooseUs = () => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.photoContainer}>
        <picture>
          <Image
            src={Trainers}
            alt={"all the trainers"}
            className={styles.photo}
          />
        </picture>
        <div className={styles.square} />
      </div>

      <div>
        <div>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>why choose us?</h3>
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            We will be your partners, your allies and accomplices in this
            process. Together we will achieve each of the goals and objectives
            to achieve an optimal state of wellness. We believe that what unites
            us most is the power of sweat and teamwork.
          </p>
        </div>
        <div className={styles.skillContainer}>
          {data.map((item) => (
            <div className={styles.barContainer} key={item.id}>
              <div className={styles.barLabes}>
                <span>{item.title}</span>
                <span>{item.percent}</span>
              </div>
              <Progress.Root className={styles.ProgressRoot} value={16}>
                <Progress.Indicator
                  className={styles.ProgressIndicator}
                  style={{ transform: `translateX(-${100 - progress}%)` }}
                />
              </Progress.Root>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
