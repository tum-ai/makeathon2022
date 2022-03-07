import styles from '../../styles/01_atoms/Fonts_headline2.module.css'

export default function Headline2({normalContent, isDarkBackground}){
  if(isDarkBackground){
    return(<div className={styles.Headline2Item}>
    <h2 className={styles.NormalHeadline}>{normalContent}</h2>
    </div>);
  }else{
    return(<div className={styles.Headline2Item}>
    <h2 className={styles.NormalHeadlineDark}>{normalContent}</h2>
    </div>);
  }
}