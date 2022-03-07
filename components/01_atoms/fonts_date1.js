import styles from '../../styles/01_atoms/Fonts_date1.module.css'

export default function Date1({normalContent, isDarkBackground}){
  if(isDarkBackground){
    return(<div className={styles.Date1Item}>
    <p className={styles.NormalText}>{normalContent}</p>
    </div>);
  }else{
    return(<div className={styles.Date1Item}>
    <p className={styles.NormalTextDark}>{normalContent}</p>
    </div>);
  }
}