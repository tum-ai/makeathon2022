import styles from '../../styles/02_molecules/ChapterBar.module.css'

export default function ChapterBar({number, content, isDarkBackground}){
  if(isDarkBackground){
    return <div className={styles.ChapterBarItem}>
      <div className={styles.LeftConteiner}>
        <div className={styles.Number}>{number}</div>
      </div>
      <div className={styles.Separartor}></div>
      <div className={styles.RightConteiner}>
        <div className={styles.Chapter}>{content}</div>
      </div>
    </div>
  }else{
    return <div className={styles.ChapterBarItem}>
      <div className={styles.LeftConteiner}>
        <div className={styles.NumberDark}>{number}</div>
      </div>
      <div className={styles.SeparartorDark}></div>
      <div className={styles.RightConteiner}>
        <div className={styles.ChapterDark}>{content}</div>
      </div>
    </div>
  }
}