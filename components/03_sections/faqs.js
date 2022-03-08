import styles from '../../styles/03_sections/Faqs.module.css'
import ChapterBar from '../02_molecules/chapterBar'
import Headline1 from '../01_atoms/fonts_headline1'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import Paragraph2 from '../01_atoms/fonts_paragraph2'
import Masonry from 'react-masonry-css'
import Image from 'next/image'
import { useState } from 'react'

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
  const breakpointColumnsObj = {
    default: 2,
    800: 1
  };
  const [questionIndex, setQuestionIndex] = useState(1);

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
    <div className={styles.BottomGrid}>
      <div className={styles.QuestionContainer}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGridColumn}>
        {data.questions.map((question, index)=>(
          <div key={index} className={styles.Question}>
            <div className={styles.Header} onClick={()=>questionIndex == index ? setQuestionIndex(undefined) : setQuestionIndex(index)}>
              {questionIndex != index ? <div className={styles.Text}>
                <Paragraph1 normalContent={question.question} isDarkBackground={false}/>
              </div> :
              <div className={styles.Text}>
                <Paragraph1 highlightedContent={question.question} isDarkBackground={false}/>
              </div>}
              {questionIndex == index ? <div className={styles.Arrow} style={{transform: "rotate(180deg)"}}>
                <Image src="/assets/arrow.svg" alt="Arrow" layout="fill" objectFit="cover" />
              </div> :
              <div className={styles.Arrow} >
                <Image src="/assets/arrow.svg" alt="Arrow" layout="fill" objectFit="cover" />
              </div>}
            </div>
            {questionIndex == index ? <div className={styles.Answer}>
              <Paragraph2 normalContent={question.answer} isDarkBackground={false} />
            </div> : ""}
            <div className={styles.Separator}></div>
          </div>
        ))}
      </Masonry>
      </div>
    </div>
  </div>
}