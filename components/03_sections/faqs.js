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
  "chapter_number": "04",
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
      "answer": "If you still have questions, you can email makeathon-communication@tum-ai.com, and we will be happy to assist you!"
    },
    {
      "question": "What events will be held?",
      "answer": "The TUM.ai Makeathon will provide you with various cool events to attend! You will have an opportunity to participate in exciting workshops and listen to extraordinary speakers. More details on the events are coming soon! Make sure to stay on the lookout for our full schedule! "
    },
    {
      "question": "What are the prizes?",
      "answer": "We offer many attractive prizes to our winners! Examples from previous years include monetary prizes, fast-track to TUM.ai membership, and many many more!"
    },
    {
      "question": "Is TUM.ai Makeathon in-person or virtual?",
      "answer": "The Makeathon in April 2023 will be taking place in-person in the new Electrical Engineering building at the TUM campus in Garching, Germany. We are happy to fully welcome you in person again!"
    },
    {
      "question": "Can we use hardware?",
      "answer": "We will not distribute any hardware. We are looking for innovative digital products that can be easily presented to our jury in a hybrid form. "
    },
    {
      "question": "What if I don’t have a team or idea?",
      "answer": "You don’t need to worry about having a team or idea before the Makeathon. We will support you to find a suitable team before the event and make sure you have everything you need to get started. "
    },/*
    {
      "question": "What are the Makeathon tracks?",
      "answer": "For our upcoming Makeathon, we prepared four tracks: Globalization, Environment, Healthcare, and Social Support.  "
    },*/
    {
      "question": "What can I build?",
      "answer": "We are looking for AI-related ideas. Other than that - sky is the limit! Use your imagination to create new innovative AI-based products and surprise our jury with your creativity! "
    },
    /*{
      "question": "How will tracks and prizes work?",
      "answer": "In the previous years we offered prizes to the best teams overall. However, for this year we are hoping to redesign our pricing scheme to include track specific prizes. Stay on the lookout for more information. You can expect many very attractive prizes! "
    },*/
    {
      "question": "What skills do I need to participate?",
      "answer": "You don’t need any skills to participate! We are going to provide you with workshops on many areas, so all you need is a motivation to learn and create!"
    },
    {
      "question": "When is the application deadline?",
      "answer": "The application deadline is on the 21st of April 2023. But better be quick, we review the applications on a rolling basis and only have so many spots available. "
    },
    {
      "question": "Who can participate?",
      "answer": "Everyone can apply to participate in our Makeathon! Whether you are a student or a professional, what counts is your motivation to build something cool and interesting with AI. You can apply until the 21st of April 2023 and we will review your application on a rolling basis. "
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