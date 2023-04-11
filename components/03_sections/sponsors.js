import styles from '../../styles/03_sections/Sponsors.module.css'
import Headline2 from '../01_atoms/fonts_headline2'
import Headline1 from '../01_atoms/fonts_headline1'

import Paragraph1 from "../01_atoms/fonts_paragraph1";
import Paragraph2 from "../01_atoms/fonts_paragraph2";
import Image from 'next/image'
import Link from 'next/link'

export default function Sponsors(){
  return <div className={styles.SponsorsItem}>
    <div className={styles.Grid}>
      <div className={styles.TitleContainer}>
          <Headline1 style={{width: "auto"}} isDarkBackground={false} normalContent={"Makeathon 2023 Industry Partners"} />
      </div>
      {/*<div className={styles.TitleContainer}/>*/}
      
        <div style={{opacity: "0.5"}} className={styles.TopContainer}>
          <div className={styles.Separator}></div>
          <Headline2 style={{width: "auto"}} isDarkBackground={false} normalContent={""} />
          <div className={styles.Separator}></div>
        </div>
      
      <div className={styles.Sponsors}>
      {/*<div style={{opacity: "0.75"}}>*/}
      {/*  <Headline2*/}
      {/*    className={styles.Paragraph}*/}
      {/*    highlightedContent={""}*/}
      {/*    normalContent={"Coming Soon… \nStay Tuned…🚀\n\n"}*/}
      {/*    isDarkBackground={false}*/}
      {/*  />*/}
      {/*</div>*/}
        <Link href="https://www.esa.int" passHref >
          <div className={styles.Premium_bigger}>
            <Image src={"/assets/ESA_logo_1.png"} alt="ESA" layout="fill" objectFit="contain" />
          </div>
        </Link>
         <Link href="https://www.bmwgroup.com/de.html" passHref >
          <div className={styles.Premium}>
            <Image src={"/assets/BMWGroup_Logo.svg"} alt="BMW" layout="fill" objectFit="contain" />
          </div>
        </Link>
        <Link href="https://dai.ki" passHref >
          <div className={styles.Premium}>
            <Image src={"/assets/logo_Daiki.png"} alt="Daiki" layout="fill" objectFit="contain" />
          </div>
        </Link>
        <Link href="https://www.gresearch.co.uk" passHref >
          <div className={styles.Premium_smaller}>
            <Image src={"/assets/gresearch_logo.png"} alt="GResearch" layout="fill" objectFit="contain" />
          </div>
        </Link>
        <Link href="https://cohere.ai" passHref >
          <div className={styles.Premium_smaller}>
            <Image src={"/assets/Cohere_Logo.png"} alt="Cohere" layout="fill" objectFit="contain" />
          </div>
        </Link>
        <Link href="https://mcml.ai" passHref >
          <div className={styles.Premium_smaller}>
            <Image src={"/assets/MCML_Logo.png"} alt="MCML" layout="fill" objectFit="contain" />
          </div>
        </Link>
        <div className={styles.SponsorsGrid}>
          {/*/!* 1st row *//*}*/}
          <div className={styles.SponsorsRow}>
            <Link href="https://genistat.ch/en/" passHref >
              <div className={styles.Sponsor}>
                <Image src={"/assets/Genistat_Logo.png"} alt="Genistat" layout="fill" objectFit="contain" />
              </div>
            </Link>
            <Link href="https://www.nvidia.com/en-us/" passHref >
              <div className={styles.Sponsor_bigger}>
                <Image src={"/assets/NVIDIA_Logo.png"} alt="Nvidia" layout="fill" objectFit="contain" />
              </div>
            </Link>
            <Link href="https://www.appliedai.de/" passHref >
              <div className={styles.Sponsor}>
                <Image src={"/assets/appliedAI.svg"} alt="appliedAI" layout="fill" objectFit="contain" />
              </div>
            </Link>
          </div>
        </div>
        {/* <Link href="https://www2.deloitte.com/de/de.html" passHref >
          <div style={{filter: "grayscale(1)"}} className={styles.Premium}>
            <Image src={"/assets/Deloitte.png"} alt="netapp" layout="fill" objectFit="contain" />
          </div>
        </Link>
        <Link href="https://www.roche.com/" passHref >
          <div className={styles.Premium}>
            <Image src={"/assets/Roche_Logo.svg"} alt="Roche" layout="fill" objectFit="contain" />
          </div>
        </Link> */}
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
      {/*<div style={{opacity: "0.5"}} className={styles.TopContainer}>*/}
      {/*  <div className={styles.Separator}></div>*/}
      {/*  <Headline2  isDarkBackground={false} normalContent={"Sponsors"} />*/}
      {/*  <div className={styles.Separator}></div>*/}
      {/*</div>*/}
      {/*<div className={styles.SponsorsGrid}>*/}
      {/*  /!* 1st row *//*}
      {/*  <div className={styles.SponsorsRow}>*/}
      {/*      <Link href="https://www.esa.int" passHref >*/}
      {/*        <div className={styles.Sponsor}>*/}
      {/*            <Image src={"/assets/Cohere_Logo.png"} alt="Cohere" layout="fill" objectFit="contain" />*/}
      {/*        </div>*/}
      {/*      </Link>*/}
      {/*      <Link href="https://www.tngtech.com/" passHref >*/}
      {/*        <div className={styles.Sponsor}>*/}
      {/*            <Image src={"/assets/Logo_TNG_Consulting.png"} alt="TNG Consulting" layout="fill" objectFit="contain" />*/}
      {/*        </div>*/}
      {/*      </Link>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div style={{opacity: "0.5"}} className={styles.TopContainer}>*/}
      {/*  <div className={styles.Separator1}></div>*/}
      {/*  <Headline2  isDarkBackground={false} normalContent={"Challenge Setters"} />*/}
      {/*  <div className={styles.Separator1}></div>*/}
      {/*</div>*/}
      

        {/*  2nd row */}
        {/* /!* TODO: SET CORRECT HREF *//*}*/}
        {/*<div className={styles.SponsorsRow}>*/}
        {/*    <Link href="http://knust.edu.gh" passHref >*/}
        {/*    <div s className={styles.Sponsor}>*/}
        {/*        <Image src={"/assets/Knust_seal.jpg"} alt="KNUST" layout="fill" objectFit="contain" />*/}
        {/*    </div>*/}
        {/*    </Link>*/}
        {/*    <Link href="https://www.microsoft.com/" passHref >*/}
        {/*    <div className={styles.Premium}>*/}
        {/*      <Image src={"/assets/microsoft.png"} alt="microsoft" layout="fill" objectFit="contain" />*/}
        {/*    </div>*/}
        {/*    </Link>*/}
        {/*    <Link href="https://ai4medicine.com/" passHref >*/}
        {/*      <div className={styles.Sponsor}>*/}
        {/*          <Image src={"/assets/Aim-03.jpg"} alt="ai4medicine" layout="fill" objectFit="contain" />*/}
        {/*      </div>*/}
        {/*    </Link>*/}
        {/*</div>*/}
    </div>
  </div>
}