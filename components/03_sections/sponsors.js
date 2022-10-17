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
        <Link href="https://www.microsoft.com/" passHref >
          <div className={styles.Premium}>
            <Image src={"/assets/microsoft.png"} alt="microsoft" layout="fill" objectFit="contain" />
          </div>
        </Link>
        {/* <Link href="https://www.appliedai.de/" passHref >
          <div className={styles.Premium}>
            <Image src={"/assets/appliedAI.svg"} alt="netapp" layout="fill" objectFit="contain" />
          </div>
        </Link>
        <Link href="https://www.siemens-healthineers.com/" passHref >
          <div style={{filter: "grayscale(1)"}} className={styles.Premium}>
            <Image src={"/assets/siemens_logo_cmyk-pantone.svg"} alt="netapp" layout="fill" objectFit="contain" />
          </div>
        </Link>  */}
        {/* <Link href="https://www2.deloitte.com/de/de.html" passHref >
          <div style={{filter: "grayscale(1)"}} className={styles.Premium}>
            <Image src={"/assets/Deloitte.png"} alt="netapp" layout="fill" objectFit="contain" />
          </div>
        </Link>  */}
        <Link href="https://www.roche.com/" passHref >
          <div className={styles.Premium}>
            <Image src={"/assets/Roche_Logo.svg"} alt="Roche" layout="fill" objectFit="contain" />
          </div>
        </Link> 
        {/* <Link href="https://healthcare-xplorers.com/" passHref >
          <div style={{filter: "grayscale(1)"}} className={styles.Premium}>
            <Image src={"/assets/Healthcare-xplorers-Logo-claim.png"} alt="netapp" layout="fill" objectFit="contain" />
          </div>
        </Link> 
        <Link href="https://www.imfusion.com" passHref >
          <div style={{filter: "grayscale(1)"}} className={styles.Premium}>
              <Image src={"/assets/ImFusionLogo.png"} alt="imfusion" layout="fill" objectFit="contain" />
          </div>
        </Link> */}
        {/* <div className={styles.Sponsor}>
          <Image src={"/assets/infineon.png"} alt="netapp" layout="fill" objectFit="contain" />
        </div> */}
      </div>
      <div style={{opacity: "0.5"}} className={styles.TopContainer}>
        <div className={styles.Separator}></div>
        <Headline2  isDarkBackground={false} normalContent={"Sponsors"} />
        <div className={styles.Separator}></div>
      </div>
      <div className={styles.SponsorsGrid}>
        {/* 1st row */}
        <div className={styles.SponsorsRow}>
            <Link href="https://www.ibm.com/" passHref >
              <div className={styles.Sponsor}>
                  <Image src={"/assets/IBM_Logo.svg"} alt="IBM" layout="fill" objectFit="contain" />
              </div>
            </Link>
            <Link href="https://www.tngtech.com//" passHref >
              <div className={styles.Sponsor}>
                  <Image src={"/assets/Logo_TNG_Consulting.png"} alt="TNG Consulting" layout="fill" objectFit="contain" />
              </div>
            </Link>
        </div>
      </div>
      <div style={{opacity: "0.5"}} className={styles.TopContainer}>
        <div className={styles.Separator}></div>
        <Headline2  isDarkBackground={false} normalContent={"Challenge Setters"} />
        <div className={styles.Separator}></div>
      </div>
      <div className={styles.SponsorsGrid}>
        {/* 1st row */}
        <div className={styles.SponsorsRow}>
          <Link href="https://www.appliedai.de/" passHref >
            <div className={styles.Sponsor}>
                <Image src={"/assets/appliedAI.svg"} alt="appliedAI" layout="fill" objectFit="contain" />
            </div>
          </Link>
          <Link href="https://ryver.ai/" passHref >
            <div className={styles.Sponsor}>
                <Image src={"/assets/ryver.png"} alt="ryver" layout="fill" objectFit="contain" />
            </div>
          </Link>
          <Link href="https://avelios.com/" passHref >
          <div className={styles.Sponsor}>
              <Image src={"/assets/Avelios Medical.svg"} alt="Avelios Medical" layout="fill" objectFit="contain" />
          </div>
          </Link>
        </div>
      </div>
        {/* 2nd row */}
        {/* TODO: SET CORRECT HREF */}
        <div className={styles.SponsorsRow}>
            <Link href="http://knust.edu.gh" passHref >
            <div s className={styles.Sponsor}>
                <Image src={"/assets/Knust_seal.jpg"} alt="KNUST" layout="fill" objectFit="contain" />
            </div>
            </Link>
            <Link href="https://www.microsoft.com/" passHref >
            <div className={styles.Premium}>
              <Image src={"/assets/microsoft.png"} alt="microsoft" layout="fill" objectFit="contain" />
            </div>
            </Link>
            <Link href="https://ai4medicine.com/" passHref >
              <div className={styles.Sponsor}>
                  <Image src={"/assets/Aim-03.jpg"} alt="ai4medicine" layout="fill" objectFit="contain" />
              </div>
            </Link>
        </div>
    </div>
  </div>
}