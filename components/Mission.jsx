/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

import styles from "../styles/Mission.module.css";

const Mission = () => {
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

  const containerVariants = {
    offscreen: {
      opacity: 0,
      x: -100,
      transition: {
        type: "tween",
        bounce: 0.4,
        ease: "easeIn",
        duration: 1,
      },
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        bounce: 0.4,
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
        className={styles.inner}
      >
        <motion.header
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.header}
        >
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            className={styles.vision__ctn}
          >
            <motion.h4 variants={textVariants}>Vision</motion.h4>
            <motion.header variants={containerVariants}>
              <Image
                src="/svgs/ic-lemon.svg"
                width={30}
                height={30}
                alt="lemon"
              />
              <Image
                src="/svgs/ic-lemon.svg"
                width={30}
                height={30}
                alt="lemon"
              />
              <Image
                src="/svgs/ic-lemon.svg"
                width={30}
                height={30}
                alt="lemon"
              />
            </motion.header>
            <motion.h1 variants={textVariants}>Our Vision</motion.h1>
            <motion.p variants={textVariants}>
              To contribute towards Building, Excavation, Construction and a clean healthy environment
              by providing quality work, hygienic and affordable Construction & cleaning services.
            </motion.p>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            className={styles.vision__ctn}
          >
            <motion.h4 variants={textVariants}>Mission</motion.h4>
            <motion.header variants={containerVariants}>
              <Image
                src="/svgs/ic-lemon.svg"
                width={30}
                height={30}
                alt="lemon"
              />
              <Image
                src="/svgs/ic-lemon.svg"
                width={30}
                height={30}
                alt="lemon"
              />
              <Image
                src="/svgs/ic-lemon.svg"
                width={30}
                height={30}
                alt="lemon"
              />
            </motion.header>
            <motion.h1 variants={textVariants}>Our Mission</motion.h1>
            <motion.p variants={textVariants}>
              To attain a one-stop fully-fledged Building, Construction & Cleaning services 
              corporate status in South Sudan and provide free Construction, Cleaning services, and concepts 
              for busy organizations and institutions.
            </motion.p>
          </motion.div>
        </motion.header>
        <motion.div variants={imageAnimate} className={styles.large__img__ctn}>
          <motion.img
            variants={imageAnimate}
            src="/images/banner-bg.jpg"
            className={styles.large__img}
            alt=""
          />
          <div className={styles.absolute}>
            <Image
              src="/svgs/ic-play-yellow.svg"
              alt="yellow play icon"
              height={120}
              width={120}
            />
            <h1>The Future Of Service</h1>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Mission;
