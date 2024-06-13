import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Footer.module.css";

const Footer = () => {
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
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.footer__logo}
        >
          <motion.img
            variants={imageAnimate}
            
           
            className={styles.logo__img}
            width={100}
            height={100}
          />
          <motion.h1 variants={textVariants}>
            Ba-Jubi&apos;s <br />
            <span>
              Services <br /> Ltd
            </span>
          </motion.h1>
          <motion.p variants={textVariants}>
            Ba-Jubi Services Ltd. is a company in South Sudan that specializes in building, excavation,
            construction, and cleaning services.
          </motion.p>
          <motion.div variants={textVariants} className={styles.icon__ctn}>
            {/* <div className={styles.icons}>
              <Image
                src="/svgs/ic-facebook-white.svg"
                alt="facebook_icon"
                width={17}
                height={17}
              />
            </div> */}
            <div className={styles.icons}>
              <Image
                src="/svgs/ic-linkedIn-white.svg"
                alt="linkedIn_icon"
                width={17}
                height={17}
              />
            </div>
            <div className={styles.icons}>
              <Image
                src="/svgs/ic-instagram-white.svg"
                alt="instagram_icon"
                width={17}
                height={17}
              />
            </div>
            <div className={styles.icons}>
              <Image
                src="/svgs/ic-twitter-white.svg"
                alt="twitter_icon"
                width={17}
                height={17}
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.company}
        >
          <motion.h1 variants={textVariants}>Company</motion.h1>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            className={styles.lists}
          >
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                About Us
              </Link>
            </motion.div>
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                Mission Statement
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.services__ctn}
        >
          <motion.h1 variants={textVariants}>Services</motion.h1>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            className={styles.lists}
          >
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                Construction
              </Link>
            </motion.div>
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                Bin Managenent
              </Link>
            </motion.div>
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                General Cleaning
              </Link>
            </motion.div>
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                Deep Cleaning
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          transition={{ staggerChildren: 0.5 }}
          className={styles.contact__ctn}
        >
          <motion.h1 variants={textVariants}>Contact</motion.h1>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            transition={{ staggerChildren: 0.5 }}
            className={styles.lists}
          >
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                FAQ
              </Link>
            </motion.div>
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                Support
              </Link>
            </motion.div>
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                Privacy Policy
              </Link>
            </motion.div>
            <motion.div variants={textVariants} className={styles.link}>
              <span>
                <Image
                  src="/svgs/ic-arrow-white.svg"
                  alt="arrow_white"
                  width={11}
                  height={11}
                />
              </span>
              <Link href="#">
                Terms and Conditions
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
