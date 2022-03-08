import styles from '../../styles/03_sections/Faqs.module.css'
import ChapterBar from '../02_molecules/chapterBar'
import Headline1 from '../01_atoms/fonts_headline1'
import Paragraph1 from '../01_atoms/fonts_paragraph1'

const data = {
  "chapter_title": "Q&A",
  "chapter_number": "05",
  "title": "Do you have any ",
  "title_highlighted": "questions?", 
  "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
  "paragraph": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students.",
  "questions": [
    {
      "question": "Bring together companies and students through projects and events about AI?",
      "answer": "Bring together companies and students through projects and events about AI? Bring together companies and students through projects and events about AI?"
    },
    {
      "question": "Bring together companies and students through projects and events about AI?",
      "answer": "Bring together companies and students through projects and events about AI? Bring together companies and students through projects and events about AI?"
    },
    {
      "question": "Bring together companies and students through projects and events about AI?",
      "answer": "Bring together companies and students through projects and events about AI? Bring together companies and students through projects and events about AI?"
    },
    {
      "question": "Bring together companies and students through projects and events about AI?",
      "answer": "Bring together companies and students through projects and events about AI? Bring together companies and students through projects and events about AI?"
    },
    {
      "question": "Bring together companies and students through projects and events about AI?",
      "answer": "Bring together companies and students through projects and events about AI? Bring together companies and students through projects and events about AI?"
    },
    {
      "question": "Bring together companies and students through projects and events about AI?",
      "answer": "Bring together companies and students through projects and events about AI? Bring together companies and students through projects and events about AI?"
    },
    {
      "question": "Bring together companies and students through projects and events about AI?",
      "answer": "Bring together companies and students through projects and events about AI? Bring together companies and students through projects and events about AI?"
    },
  ]
}

export default function Faqs(){
  return <div className={styles.FaqsItem}>
    <div className={styles.Grid}>
      <div className={styles.LeftContainer}>
        <ChapterBar number={data.chapter_number} content={data.chapter_title} isDarkBackground={false}/>
      </div>
      <div className={styles.MiddleContainer}>
        <Headline1 isH1={false} normalContent={data.title} highlightedContent={data.title_highlighted} isDarkBackground={false}/>
        <div className={styles.Paragraph}>
          <Paragraph1 className={styles.Paragraph} highlightedContent={data.paragraph_highlighted} normalContent={data.paragraph} isDarkBackground={false}/>
        </div>
      </div>
    </div>
  </div>
}