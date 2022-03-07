import styles from '../../styles/01_atoms/Fonts_paragraph1.module.css'

export default function Paragraph1({normalContent, highlightedContent, isDarkBackground}){
  if(isDarkBackground){
    return(<div className={styles.Paragraph1Item}>
      <h1 className={styles.NormalParagraph}><span className={styles.HighlightedContent}>{highlightedContent}</span>{normalContent}</h1>
    </div>);
  }else{
    return(<div className={styles.Paragraph1Item}>
      <h1 className={styles.NormalParagraphDark}><span className={styles.HighlightedContentDark}>{highlightedContent}</span>{normalContent}</h1>
    </div>);
  }
}