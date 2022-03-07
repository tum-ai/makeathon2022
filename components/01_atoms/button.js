import styles from '../../styles/01_atoms/Button.module.css'

export default function Button({content, isDarkBackground}){
  if(isDarkBackground){
    return <div className={styles.ButtonItem}>
      <div className={styles.Text}>{content}</div>
    </div>
  }else{
    return <div className={styles.ButtonItemDark}>
      <div className={styles.TextDark}>{content}</div>
    </div>
  }
}