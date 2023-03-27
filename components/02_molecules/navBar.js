import styles from "../../styles/02_molecules/NavBar.module.css";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";

import Image from "next/image";

export default function NavBar() {
  return (
    <div className={styles.NavBarItem}>
      <div className={styles.Grid}>
        <div className={styles.Logo}>
          <Link href="https://www.tum-ai.com/">
            <a>
              <Image
                src={"/assets/logo.svg"}
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
        <div className={styles.Nav}>
          <LinkScroll
            to="about"
            spy={true}
            smooth={true}
            className={styles.Link}
          >
            About
          </LinkScroll>
          {/*<LinkScroll
            to="tracks"
            spy={true}
            smooth={true}
            className={styles.Link}
          >
            Tracks
          </LinkScroll> */}
          {/* <LinkScroll
            to="speakers"
            spy={true}
            smooth={true}
            className={styles.Link}
          >
            Speakers
          </LinkScroll> */}
          <LinkScroll
            to="stories"
            spy={true}
            smooth={true}
            className={styles.Link}
          >
            Stories
          </LinkScroll>
          <LinkScroll
            to="faqs"
            spy={true}
            smooth={true}
            className={styles.Link}
          >
            {"Q&A"}
          </LinkScroll>{" "}
        </div>
      </div>
    </div>
  );
}
