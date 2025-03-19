import styles from "../../styles/03_sections/PreviousSponsors.module.css";
import Headline2 from "../01_atoms/fonts_headline2";
import Image from "next/image";
import Link from "next/link";

export default function PreviousSponsors() {
  return (
    <div className={styles.SponsorsItem}>
      {/*<div className={styles.Background}>
      <div className={styles.ConatinerBG}></div>
</div>*/}
      <div className={styles.Grid}>
        <div className={styles.TopContainer}>
          <div className={styles.Separator}></div>
          <Headline2
            style={{ width: "auto" }}
            isDarkBackground={true}
            normalContent={"Previous Sponsors"}
          />
          <div className={styles.Separator}></div>
        </div>
        <div className={styles.Sponsors}>
          <div className={styles.SponsorsGrid}>
            {/* 1st row */}
            <div className={styles.SponsorsRow}>
              <Link href="https://aleph-alpha.com/de/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/AlephAlpha_logo.png"}
                    alt="Aleph Alpha"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.allianz.de/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/allianz_logo_2.png"}
                    alt="Allianz"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.bmw.de/de/home.html" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/BMWGroup_Logo.svg"}
                    alt="BMW"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.esa.int/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/ESA_logo.png"}
                    alt="ESA"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
            </div>
            <div className={styles.SponsorsRow}>
              <Link href="https://www.ibm.com/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/ibm.svg"}
                    alt="IBM"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.microsoft.com/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/microsoft_v3.png"}
                    alt="microsoft"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.roche.com/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/Roche_Logo.svg"}
                    alt="Roche"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.tngtech.com/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/tng.svg"}
                    alt="TNG Consulting"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
            </div>
            <div className={styles.SponsorsRow}>
              <Link href="https://www.reply.com/de/about/careers/de" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/Reply - LOGO_Negative_RGB.png"}
                    alt="Reply"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.osapiens.com/de" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/Osapiens.png"}
                    alt="Osapiens"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.salesforce.com/de/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/Salesforce.png"}
                    alt="Salesforce"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.mercedes-benz.de/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/Mercedes.png"}
                    alt="Mercedes"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
            </div>
            <div className={styles.SponsorsRow}>
              <Link href="https://www.janestreet.com/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/JaneStreet.png"}
                    alt="Jane Street"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.jetbrains.com/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/JetBrains.png"}
                    alt="JetBrains"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.quantco.com/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/QuantCo.png"}
                    alt="QuantCo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.gresearch.com/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/G-Research.png"}
                    alt="GResearch"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
            </div>
            <div className={styles.SponsorsRow}>
              <Link href="https://www.care-for-rare.org/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/CareforRare.png"}
                    alt="Care for Rare"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.lmu-klinikum.de/hauner/kinder-und-kinderpoliklinik" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/Hauner.png"}
                    alt="Hauner"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.lmu-klinikum.de/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/LMUKlinikum.png"}
                    alt="LMU Klinikum"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://ryver.ai/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/ryver.png"}
                    alt="Ryver"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
            </div>
            <div className={styles.SponsorsRow}>
              <Link href="https://jobs.check24.de/de/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/check24.svg"}
                    alt="Check24"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.helmholtz-munich.de/en" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/Helmholtz.png"}
                    alt="Helmholtz Munich"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.msg.group/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/msg.png"}
                    alt="msg"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="https://www.munich-ecosystem.de/" passHref>
                <div className={styles.Sponsor}>
                  <Image
                    src={"/assets/MI4People.png"}
                    alt="MI for People"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
