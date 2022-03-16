import styles from '../../styles/01_atoms/Fonts_paragraph1.module.css'

export default function Paragraph1({normalContent, highlightedContent, isDarkBackground, isUnderlined}){
  if(isDarkBackground){
    return(<div className={styles.Paragraph1Item}>
      <h3 style={{textDecoration: isUnderlined ? "underline" : ""}} className={styles.NormalParagraph}><span className={styles.HighlightedContent}>{highlightedContent}</span>{normalContent}</h3>
    </div>);
  }else{
    return(<div className={styles.Paragraph1Item}>
      <h3 style={{textDecoration: isUnderlined ? "underline" : ""}} className={styles.NormalParagraphDark}><span className={styles.HighlightedContentDark}>{highlightedContent}</span>{normalContent}</h3>
    </div>);
  }
}