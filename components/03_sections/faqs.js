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
  "chapter_number": "06",
  "title": "Do you have any ",
  "title_highlighted": "questions?", 
  "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
  "paragraph": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students.",
  "questions": [
    {
      "question": "What is a Makeathon?",
      "answer": "A makeathon is an exciting event that brings hundreds of like-minded people from different backgrounds (you don’t need to be a tech person!) to collaborate on building new and innovative products!"
    },
    {
      "question": "Why should I attend?",
      "answer": "There are many reasons to attend our Makeathon! During our Makeathon, you will have a chance to participate in many extraordinary learning opportunities, listen to our exciting speakers, and meet new passionate people! Everybody will find something for themselves and enjoy the Makeathon to the fullest with many other cool people! Not to forget, you will also have a chance to win fabulous prizes!"
    },
    {
      "question": "What is the cost?",
      "answer": "Participation in the TUM.ai Makeathon is completely free! Make sure to apply during the application period to give yourself a chance to experience everything our Makeathon has to offer! "
    },
    {
      "question": "What if I have more questions?",
      "answer": "If you still have questions, you can email contact@tum-ai.com, and we will be happy to assist you!"
    },
    {
      "question": "What events will be held?",
      "answer": "The TUM.ai Makeathon will provide you with various cool events to attend! You will have an opportunity to participate in exciting workshops and listen to extraordinary speakers. More details on the events are coming soon! Make sure to stay on the lookout for our full schedule!"
    },
    {
      "question": "What are the prizes?",
      "answer": "We offer many attractive prizes to our winners! Examples from previous years include monetary prizes, fast-track to TUM.ai membership, and many many more!"
    },
    {
      "question": "Is TUM.ai Makeathon in-person or virtual?",
      "answer": "Due to the ongoing COVID-19 pandemic, all the events of the April Makeathon are going to be held virtual. "
    },
    {
      "question": "Can we use hardware?",
      "answer": "As the TUM.ai Makeathon is going to be held online, we will not be able to distribute any hardware. We are looking for innovative digital products that can be easily presented to our jury in a virtual form. "
    },
    {
      "question": "What if I don’t have a team or idea?",
      "answer": "You don’t need to worry about having a team or idea before the Makeathon. On (date) we are going to organize a team-finding event where you can find your teammates and start brainstorming the ideas! "
    },
    {
      "question": "What are the Makeathon tracks?",
      "answer": "For our upcoming Makeathon, we prepared three tracks: Education, MedTech, and Environment. "
    },
    {
      "question": "What can I build?",
      "answer": "We are looking for AI-related ideas. Other than that - sky is the limit! Use your imagination to create new innovative AI-based products and surprise our jury with your creativity! "
    },
    {
      "question": "How will tracks and prizes work?",
      "answer": "In the previous years we offered prizes to the best teams overall. However, for this year we are hoping to redesign our pricing scheme to include track specific prizes. Stay on the lookout for more information. You can expect many very attractive prizes! "
    },
    {
      "question": "What skills do I need to participate?",
      "answer": "You don’t need any skills to participate! We are going to provide you with workshops on many areas, so all you need is a motivation to learn and create!"
    },
    {
      "question": "What is the application deadline?",
      "answer": "The application deadline is 06.04! Make sure you don’t miss it!"
    },
    {
      "question": "Who can participate?",
      "answer": "Everyone can apply to participate in our Makeathon! It doesn’t matter if you are a student or a professional. As long as you have the motivation to build something cool, you are encouraged to apply! After the application deadline (here, add the deadline when available), our team is going to carefully review the applications and select a diverse pool of motivated applicants to participate in the event (our number of participants is unfortunately limited)."
    },
  ]
}

export default function Faqs(){
  const breakpointColumnsObj = {
    default: 2,
    1100: 1
  };
  const [questionIndex, setQuestionIndex] = useState(undefined);

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