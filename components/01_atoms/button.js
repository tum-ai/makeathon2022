import styles from '../../styles/01_atoms/Button.module.css'
import Link from 'next/link'

export default function Button({content, isDarkBackground, link}){
  if(isDarkBackground){
    return <Link href={link} passHref={true}>
      <div className={styles.ButtonItem}>
        <div className={styles.Text}>{content}</div>
      </div> 
    </Link>
  }else{
    return <Link href={link} passHref={true}>
      <div className={styles.ButtonItemDark}>
        <div className={styles.TextDark}>{content}</div>
      </div> 
    </Link>
  }
}