import styles from '../../styles/03_sections/PreviousSponsors.module.css'
import Headline2 from '../01_atoms/fonts_headline2'
import Image from 'next/image'
import Link from 'next/link'

export default function PreviousSponsors(){
  return <div className={styles.SponsorsItem}>
    {/*<div className={styles.Background}>
      <div className={styles.ConatinerBG}></div>
</div>*/}
    <div className={styles.Grid}>
      <div className={styles.TopContainer}>
        <div className={styles.Separator}></div>
        <Headline2 style={{width: "auto"}} isDarkBackground={true} normalContent={"Previous Sponsors"} />
        <div className={styles.Separator}></div>
      </div>
      <div className={styles.Sponsors}>
        <div className={styles.SponsorsGrid}>
          {/* 1st row */}
          <div className={styles.SponsorsRow}>
            <Link href="https://www.microsoft.com/" passHref >
              <div className={styles.Sponsor} >
                <Image src={"/assets/microsoft.png"} alt="microsoft" layout="fill" objectFit="contain" />
              </div>
            </Link>
            <Link href="https://www.roche.com/" passHref >
              <div className={styles.Sponsor}>
                <Image src={"/assets/Roche_Logo.svg"} alt="Roche" layout="fill" objectFit="contain" />
              </div>
            </Link> 
          </div>
          <div className={styles.SponsorsRow}>
              <Link href="https://www.ibm.com/" passHref >
                <div className={styles.Sponsor}>
                    <Image src={"/assets/ibm.svg"} alt="IBM" layout="fill" objectFit="contain" />
                </div>
              </Link>
              <Link href="https://www.tngtech.com/" passHref >
                <div className={styles.Sponsor}>
                    <Image src={"/assets/tng.svg"} alt="TNG Consulting" layout="fill" objectFit="contain" />
                </div>
              </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
}