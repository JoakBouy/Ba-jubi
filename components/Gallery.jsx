/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Gallery.module.css";

const Gallery = () => {
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
      <div className={styles.inner}>
        <motion.header
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.header}
        >
          <motion.h4 variants={textVariants}>Gallery</motion.h4>
          <div className={styles.lemon__ctn}>
            {[...Array(3)].map((_, i) => (
              <Image
                key={i}
                src="/svgs/ic-lemon.svg"
                width={30}
                height={30}
                alt="lemon"
              />
            ))}
          </div>
          <motion.h1 variants={textVariants}>View Our Work</motion.h1>
        </motion.header>

        <div className={styles.grid__ctn}>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            className={styles.img__top}
          >
            <motion.img
              variants={imageAnimate}
              src="/images/banner-bg3.jpg"
              alt="Tractor"
            />
            <motion.img
              variants={imageAnimate}
              src="/images/banner-bg2.jpg"
              className={styles.right}
              alt="Germination"
            />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            className={styles.img__bottom}
          >
            <motion.img
              variants={imageAnimate}
              src="/images/roadside.jpg"
              className={styles.right}
              alt="Little Flower"
            />
            <motion.img
              variants={imageAnimate}
              src="/images/view-more.png"
              alt="View More"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;