import Head from "next/head";
import Image from "next/image";
import ApplicationForm from "../components/03_sections/applicationForm";
import styles from "../styles/Home.module.css";

export default function Apply() {
  return (
    <div>
      <Head>
        <title>Makeathon 2025</title>
        <meta
          name="description"
          content="TUM.ai Makeathon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ApplicationForm />
      </main>
      <footer className={styles.Footer}>
        <div className={styles.Grid}>
          <div className={styles.Container}>
            <div className={styles.Top}>
              {"TUM.ai © 2022 "}
            </div>
            <div className={styles.Middle}>
              <div className={styles.FirstContainer}>
                {
                  "Website by IT & Infrastructure department"
                }
              </div>
              <div className={styles.SecondContainer}>
                <a
                  href="mailto:contact@tum-ai.com"
                  className={styles.Link}
                >
                  Contact
                </a>
                <a className={styles.Link}>Admin</a>
              </div>
              <div className={styles.ThirdContainer}>
                <a
                  href="https://www.tum-ai.com/datenschutz"
                  className={styles.Link}
                >
                  {"Terms&Security"}
                </a>
                <a
                  href="https://www.tum-ai.com/impressum"
                  className={styles.Link}
                >
                  Imprint
                </a>
              </div>
            </div>
            <div className={styles.Bottom}>
              <a className={styles.SocialWrapper}>
                <Image
                  src={"/assets/linkedIn.svg"}
                  alt={"LinkedIn"}
                  layout="fill"
                  objectFit="cover"
                />
              </a>
              <a className={styles.SocialWrapper}>
                <Image
                  src={"/assets/insta.svg"}
                  alt={"Instagram"}
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
