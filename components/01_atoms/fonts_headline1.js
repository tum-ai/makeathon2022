import styles from '../../styles/01_atoms/Fonts_headline1.module.css'

export default function Headline1({isH1, normalContent, highlightedContent, isDarkBackground}){
  if(isH1){
    if(isDarkBackground){
      return(<div className={styles.Headline1Item}>
        <h1 className={styles.NormalHeadline}>{normalContent}<span className={styles.HighlightedContent}>{highlightedContent}</span></h1>
      </div>);
    }else{
      return(<div className={styles.Headline1Item}>
        <h1 className={styles.NormalHeadlineDark}>{normalContent}<span className={styles.HighlightedContent}>{highlightedContent}</span></h1>
      </div>);
    }
  }else{
    if(isDarkBackground){
      return(<div className={styles.Headline1Item}>
        <h2 className={styles.NormalHeadline}>{normalContent}<span className={styles.HighlightedContent}>{highlightedContent}</span></h2>
      </div>);
    }else{
      return(<div className={styles.Headline1Item}>
        <h2 className={styles.NormalHeadlineDark}>{normalContent}<span className={styles.HighlightedContent}>{highlightedContent}</span></h2>
      </div>);
    }
  }
}