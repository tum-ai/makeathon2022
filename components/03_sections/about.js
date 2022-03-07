import styles from '../../styles/03_sections/About.module.css'
import Headline1 from '../01_atoms/fonts_headline1'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import Button from '../01_atoms/button'
import ChapterBar from '../02_molecules/chapterBar'

const data = {
  "title": "We at TUM.ai are thrilled to have you on board and can't wait to hear what you and your team come up with! 🚀",
  "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
  "paragraph": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students. Due to the ongoing Corona Pandemic, all events will be held online. Therefore you don't have to live in Munich to participate.",
  "button": "Learn more about TUM.ai",
  "button_link": "https://www.tum-ai.com/",
  "chapter_title": "About the makeathon",
  "chapter_number": "01"
}

export default function About(){
  return <div className={styles.AboutItem}>
    <div className={styles.Description}>
      <div className={styles.Grid}>
        <div className={styles.LeftContainer}>
          <ChapterBar number={data.chapter_number} content={data.chapter_title} isDarkBackground={false}/>
        </div>
        <div className={styles.MiddleContainer}>
          <Headline1 isH1={false} normalContent={data.title} highlightedContent={""} isDarkBackground={false}/>
          <div className={styles.Paragraph}>
            <Paragraph1 className={styles.Paragraph} highlightedContent={data.paragraph_highlighted} normalContent={data.paragraph} isDarkBackground={false}/>
          </div>
          <div className={styles.Button}>
            <Button content={data.button} isDarkBackground={false}/>
          </div>
        </div>
      </div>
    </div>
  </div>
}