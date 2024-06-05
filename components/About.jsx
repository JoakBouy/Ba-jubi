/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/About.module.css";

const About = () => {
  const imageAnimate = {
    offscreen: {
      opacity: 0,
      x: -100,
    },
    onscreen: {
      opacity: 1,
      x: 0,
      rotate: [0, 90, -90, 0],
      transition: {
        type: "spring",
        bounce: 0.4,
        ease: [0.175, 0.885, 0.32, 1.275],
        duration: 1,
      },
    },
  };

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

  const bannerVariants = {
    offscreen: {
      y: -100,
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 1,
      },
    },
    onscreen: {
      y: 0,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: 1,
      },
    },
  };
  return (
    <div className={styles.wrapper}>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        transition={{ staggerChildren: 0.5 }}
        className={styles.about__inner}
      >
        <div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.about__banner}
        >
          <motion.img
            variants={bannerVariants}
            src="/images/about-banner.jpg"
            alt="about_banner"
            className={styles.main__img}
          />

          <div className={styles.absolute__ctn}>
            
            <img
              src="/images/ellipse-two.png"
              alt=""
              className={styles.absolute__second}
            />
            <img
              src="/images/right-ellipse.png"
              alt=""
              className={styles.absolute__third}
            />
          </div>
        </div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.about__content}
        >
          <motion.h4
            initial="offscreen"
            animate="onscreen"
            variants={textVariants}
          >
            ABOUT
          </motion.h4>
          <header>
            <Image
              src="/svgs/ic-lemon.svg"
              width={20}
              height={20}
              alt="lemon"
            />
            <Image
              src="/svgs/ic-lemon.svg"
              width={20}
              height={20}
              alt="lemon"
            />
            <Image
              src="/svgs/ic-lemon.svg"
              width={20}
              height={20}
              alt="lemon"
            />
          </header>
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
              className={styles.stats}
            >
              <motion.img
                variants={imageAnimate}
                src="/svgs/about-time.svg"
                width={128}
                height={128}
                alt="time"
              />
              <motion.h1 variants={textVariants}>11+</motion.h1>
              <motion.p variants={textVariants}>Years of Service</motion.p>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
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
      </motion.div>
    </div>
  );
};

export default About;
