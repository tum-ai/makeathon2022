import styles from '../../styles/03_sections/Sponsors.module.css'
import Headline2 from '../01_atoms/fonts_headline2'
import Image from 'next/image'
import Link from 'next/link'

export default function Sponsors(){
  return <div className={styles.SponsorsItem}>
    <div className={styles.Grid}>
      <div className={styles.TopContainer}>
        <div className={styles.Separator}></div>
        <Headline2 style={{width: "auto"}} isDarkBackground={false} normalContent={"Premium Sponsors"} />
        <div className={styles.Separator}></div>
      </div>
      <div className={styles.Sponsors}>
        <Link href="https://www.netapp.com/" passHref >
          <div className={styles.Premium}>
            <Image src={"/assets/netapp.png"} alt="netapp" layout="fill" objectFit="contain" />
          </div>
        </Link>
        <Link href="https://www.appliedai.de/" passHref >
          <div className={styles.Premium}>
            <Image src={"/assets/appliedAI.svg"} alt="netapp" layout="fill" objectFit="contain" />
          </div>
        </Link>
        <Link href="https://www.siemens-healthineers.com/" passHref >
          <div style={{filter: "grayscale(1)"}} className={styles.Premium}>
            <Image src={"/assets/siemens_logo_cmyk-pantone.svg"} alt="netapp" layout="fill" objectFit="contain" />
          </div>
        </Link> 
        <Link href="https://www2.deloitte.com/de/de.html" passHref >
          <div style={{filter: "grayscale(1)"}} className={styles.Premium}>
            <Image src={"/assets/deloitte.jpg"} alt="netapp" layout="fill" objectFit="contain" />
          </div>
        </Link> 
        <Link href="https://www.roche.com/" passHref >
          <div style={{filter: "grayscale(1)"}} className={styles.Premium}>
            <Image src={"/assets/roche.png"} alt="netapp" layout="fill" objectFit="contain" />
          </div>
        </Link> 
        <Link href="https://healthcare-xplorers.com/" passHref >
          <div style={{filter: "grayscale(1)"}} className={styles.Premium}>
            <Image src={"/assets/Healthcare-xplorers-Logo-claim.png"} alt="netapp" layout="fill" objectFit="contain" />
          </div>
        </Link> 
        <Link href="https://www.imfusion.com" passHref >
          <div style={{filter: "grayscale(1)"}} className={styles.Premium}>
              <Image src={"/assets/ImFusionLogo.png"} alt="imfusion" layout="fill" objectFit="contain" />
          </div>
        </Link>
        {/* <div className={styles.Sponsor}>
          <Image src={"/assets/infineon.png"} alt="netapp" layout="fill" objectFit="contain" />
        </div> */}
      </div>
      <div style={{opacity: "0.5"}} className={styles.TopContainer}>
        <div className={styles.Separator}></div>
        <Headline2  isDarkBackground={false} normalContent={"Other Partners and Sponsors"} />
        <div className={styles.Separator}></div>
      </div>
      <div className={styles.SponsorsGrid}>
        {/* 1st row */}
        <div className={styles.SponsorsRow}>
            <Link href="https://www.infineon.com/" passHref >
              <div style={{filter: "grayscale(1)"}} className={styles.Sponsor}>
                  <Image src={"/assets/infineon.png"} alt="netapp" layout="fill" objectFit="contain" />
              </div>
            </Link>
            
            {/* TODO: SET CORRECT HREF */}
            <Link href="https://www.mi4people.org/" passHref >
              <div style={{filter: "grayscale(1)"}} className={styles.Sponsor}>
                  <Image src={"/assets/Logo_MI_kurz.svg"} alt="mi" layout="fill" objectFit="contain" />
              </div>
            </Link>
        </div>
        {/* 2nd row */}
        <div className={styles.SponsorsRow}>
            {/*<Link href="https://openai.com/" passHref >
            <div className={styles.Sponsor}>
                <Image src={"/assets/openAI.png"} alt="netapp" layout="fill" objectFit="contain" />
            </div>
            </Link>
            <Link href="https://www.siemens-healthineers.com/" passHref >
            <div className={styles.Sponsor}>
                <Image src={"/assets/siemens.svg"} alt="netapp" layout="fill" objectFit="contain" />
            </div>
            </Link> */}
        </div>
      </div>
    </div>
  </div>
}