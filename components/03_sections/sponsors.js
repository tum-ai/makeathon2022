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
        <Link href="https://www.netapp.com/de/" passHref >
          <div className={styles.Premium}>
            <Image src={"/assets/netapp.png"} alt="netapp" layout="fill" objectFit="contain" />
          </div>
        </Link>
        <Link href="https://www.appliedai.de/" passHref >
          <div className={styles.Premium}>
            <Image src={"/assets/appliedAI.svg"} alt="netapp" layout="fill" objectFit="contain" />
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
      <div className={styles.Sponsors}>
        <Link href="https://www.infineon.com/" passHref >
          <div className={styles.Sponsor}>
            <Image src={"/assets/infineon.png"} alt="netapp" layout="fill" objectFit="contain" />
          </div>
        </Link>
        <Link href="https://openai.com/" passHref >
          <div className={styles.Sponsor}>
            <Image src={"/assets/openAI.png"} alt="netapp" layout="fill" objectFit="contain" />
          </div>
        </Link>
        <Link href="https://www.siemens-healthineers.com/de" passHref >
          <div className={styles.Sponsor}>
            <Image src={"/assets/siemens.svg"} alt="netapp" layout="fill" objectFit="contain" />
          </div>
        </Link>
      </div>
    </div>
  </div>
}