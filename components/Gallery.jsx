/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Partners.module.css";

const Partners = () => {
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

  const partnerLogos = [
    "/images/crs.jpg",
    "/images/unfpa.jpg",
    "/images/usaid.png",
    "/images/drc.png",
    "/images/irc.png",
    "/images/mercycorps.png",
    "/images/NRC-logo.png",
    "/images/savethechildren.png",
    "/images/solidarites.png",
    "/images/trinity.jpg",
    "/images/unhcr.png",
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <motion.header
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.header}
        >
          <motion.h4 variants={textVariants}>Partners</motion.h4>
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
          <motion.h1 variants={textVariants}>Our Valued Partners</motion.h1>
        </motion.header>

        <div className={styles.partners__ctn}>
          {partnerLogos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;