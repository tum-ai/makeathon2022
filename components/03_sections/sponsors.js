import styles from '../../styles/03_sections/Sponsors.module.css'
import Headline2 from '../01_atoms/fonts_headline2'
import Image from 'next/image'

export default function Sponsors(){
  return <div className={styles.SponsorsItem}>
    <div className={styles.Grid}>
      <div className={styles.TopContainer}>
        <div className={styles.Separator}></div>
        <Headline2 isDarkBackground={false} normalContent={"Our Sonsors"} />
        <div className={styles.Separator}></div>
      </div>
      <div className={styles.Sponsors}>
        <div className={styles.Sponsor}>
          <Image src={"/assets/netapp.png"} alt="netapp" layout="fill" objectFit="contain" />
        </div>
        <div className={styles.Sponsor}>
          <Image src={"/assets/openAI.png"} alt="netapp" layout="fill" objectFit="contain" />
        </div>
        <div className={styles.Sponsor}>
          <Image src={"/assets/infineon.png"} alt="netapp" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  </div>
}