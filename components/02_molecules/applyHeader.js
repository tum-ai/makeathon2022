import styles from '../../styles/02_molecules/ApplyHeader.module.css'
import Image from 'next/image'

export default function ApplyHeader({title, highlighted_title}){
  return <div className={styles.ApplyHeaderItem}>
    <div className={styles.Grid}>
      <div className={styles.TopContainer}>
        <div className={styles.LogoContainer}>
          <Image src={"/assets/logo.svg"} alt="Logo" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.BottomContainer}>
        <div className={styles.Text}>{title}<span className={styles.Highlight}>{highlighted_title}</span></div>
      </div>
      <div className={styles.Separator}></div>
    </div>
  </div>
}