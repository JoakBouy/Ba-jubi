import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <div
      className={`${styles.wrapper} ${
        pathname === "/contact" && styles.change__bg
      } ${pathname === "/donate" && styles.change__bg}`}
    >
      <div className={styles.inner}>
        <div className={styles.logo__ctn}>
          <span>

          </span>
          <span>

          </span>
        </div>

        <div className={styles.nav__content}>
          <div className={styles.top}>
            <div className={styles.contact__details}>
              <div className={styles.contact__icon}>
                <span>
                  <Image
                    src="/svgs/ic-contact.svg"
                    alt="contact_icon"
                    width={20}
                    height={20}
                  />
                </span>
                info@ba-jubiservices.com
              </div>
              <div className={styles.contact__icon}>
                <span>
                  <Image
                    src="/svgs/ic-dial.svg"
                    alt="contact_icon"
                    width={20}
                    height={20}
                  />
                </span>
                +211 921 260 560
              </div>
            </div>
            <div className={styles.icon__ctn}>
              <div className={styles.icons}>
                <Image
                  src="/svgs/ic-facebook.svg"
                  alt="facebook_icon"
                  width={17}
                  height={17}
                />
              </div>
              <div className={styles.icons}>
                <Image
                  src="/svgs/ic-instagram.svg"
                  alt="instagram_icon"
                  width={17}
                  height={17}
                />
              </div>
              <div className={styles.icons}>
                <Image
                  src="/svgs/ic-twitter.svg"
                  alt="twitter_icon"
                  width={17}
                  height={17}
                />
              </div>
              <div className={styles.icons}>
                <Image
                  src="/svgs/ic-linkedIn.svg"
                  alt="linkedIn_icon"
                  width={17}
                  height={17}
                />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <ul className={styles.links__ctn}>
              <li
                className={`${styles.links} ${
                  pathname === "/" && styles.route
                }`}
              >
                <Link href="/">
                  Home
                </Link>
              </li>
              <li
                className={`${styles.links} ${
                  pathname === "/about" && styles.route
                }`}
              >
                <Link href="/about">
                  About
                </Link>
              </li>
              <li
                className={`${styles.links} ${
                  pathname === "/services" && styles.route
                }`}
              >
                <Link href="/services">
                  Services
                </Link>
              </li>
              <li
                className={`${styles.links} ${
                  pathname === "/gallery" && styles.route
                }`}
              >
                <Link href="/gallery">
                  Gallery
                </Link>
              </li>
              <li
                className={`${styles.links} ${
                  pathname === "/contact" && styles.route
                }`}
              >
                <Link href="/contact">
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
