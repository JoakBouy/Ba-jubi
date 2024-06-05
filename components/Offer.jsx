/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/Offer.module.css";

const Offer = () => {
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
          <motion.h4 variants={textVariants}>Services</motion.h4>
          <motion.div
            variants={containerVariants}
            className={styles.lemon__ctn}
          >
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
          </motion.div>
          <motion.h1 variants={textVariants}>What We Offer</motion.h1>
        </motion.header>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.card__ctn}
        >
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={containerVariants}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
              01
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>Building, Excavation & Construction </motion.h3>
              <motion.p variants={textVariants}>
              This is the standard Building, Excavation and Construction
              
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={imageAnimate}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
              02
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>General Cleaning Services</motion.h3>
              <p>
                This is the standard cleaning offered in institutional offices.
                
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={containerVariants}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
              03
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>Detailed Cleaning Services</motion.h3>
              <motion.p variants={textVariants}>
                We pride ourselves on being the only providers in South Sudan.
                It is the art of cleaning an institution’s premises with approved chemicals
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={imageAnimate}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
              04
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>Scrubbing of Tile and Terrazzo floors</motion.h3>
              <motion.p variants={textVariants}>
                Proper scrubbing and cleaning using modern technology equipment.
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={containerVariants}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
              05
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>Fumigation and Pest control</motion.h3>
              <motion.p variants={textVariants}>
                We Fumigate aganist insects, crawling animals, and rodents.
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            variants={imageAnimate}
            className={styles.card}
          >
            <motion.h1 variants={textVariants} className={styles.card__num}>
              06
            </motion.h1>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              transition={{ staggerChildren: 0.5 }}
              className={styles.card__text}
            >
              <motion.h3 variants={textVariants}>Bin Management Services</motion.h3>
              <motion.p variants={textVariants}>
                Our Bin Management Services ensure timely waste collection, thorough bin cleaning,
                and effective sanitization to maintain a clean and hygienic environment.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.large__img__ctn}
        >
          <motion.img
            variants={imageAnimate}
            src="/images/banner-bg2.jpg"
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
            <h1>A Sample of our work</h1>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Offer;
