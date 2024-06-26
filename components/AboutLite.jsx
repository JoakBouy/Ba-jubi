/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/About-lite.module.css";

const AboutLite = () => {
  const textVariants = {
    offscreen: {
      opacity: 0,
      y: -100,
      transition: {
        type: "tween",
        bounce: 0.4,
        ease: "easeIn",
        duration: 1,
      },
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        bounce: 0.4,
        ease: "easeOut",
        duration: 1,
      },
    },
  };
  const imageAnimate = {
    offscreen: {
      opacity: 0,
      scale: 0,
      transition: {
        type: "bounce",
        bounce: 0.4,
        ease: "easeIn",
        duration: 1,
      },
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "bounce",
        bounce: 0.4,
        ease: "easeOut",
        duration: 1,
      },
    },
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.about__inner}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.about__banner}
        >
          <motion.img
            variants={imageAnimate}
            src="/images/harvester.png"
            alt="about_banner"
            className={styles.main__img}
          />

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            className={styles.absolute__ctn}
          >
            <motion.img
              variants={imageAnimate}
              src="/images/tractor-ploughing.png"
              alt=""
              className={styles.absolute__first}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.about__content}
        >
          <motion.h4 variants={textVariants}>ABOUT</motion.h4>
          <motion.header
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
          >
            <motion.img
              variants={imageAnimate}
              src="/svgs/ic-lemon.svg"
              width={30}
              height={30}
              alt="lemon"
            />
            <motion.img
              variants={imageAnimate}
              src="/svgs/ic-lemon.svg"
              width={30}
              height={30}
              alt="lemon"
            />
            <motion.img
              variants={imageAnimate}
              src="/svgs/ic-lemon.svg"
              width={30}
              height={30}
              alt="lemon"
            />
          </motion.header>
          <motion.h1 variants={textVariants}>Who We Are</motion.h1>
          <motion.p variants={textVariants}>
            Ba-Jubi Services Ltd. aims to contribute to building, excavation, construction
            and maintaining a clean, healthy environment in South Sudan by providing quality, hygienic
            and affordable services. Our vision is to become a fully-fledged one-stop provider of building
            construction, and cleaning services, offering free concepts and services to busy organizations and institutions
            We are committed to creating sustainable conditions and acting in an environmentally friendly manner.
          </motion.p>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            className={styles.stats__ctn}
          >
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              variants={textVariants}
              className={styles.stats}
            >
              <motion.img
                variants={imageAnimate}
                src="/svgs/about-time.svg"
                width={128}
                height={128}
                alt="time"
              />
              <motion.h1 variants={textVariants}>2+</motion.h1>
              <motion.p variants={textVariants}>Years of Service</motion.p>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              variants={textVariants}
              className={styles.stats}
            >
              <motion.img
                variants={imageAnimate}
                src="/svgs/about-workers.svg"
                width={128}
                height={128}
                alt="workers"
              />
              <motion.h1 variants={textVariants}>50+</motion.h1>
              <motion.p variants={textVariants}>Dedicated Workers</motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutLite;
