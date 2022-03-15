import styles from '../../styles/03_sections/Tracks.module.css'
import ChapterBar from '../02_molecules/chapterBar'
import Headline1 from '../01_atoms/fonts_headline1'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import Image from 'next/image'
import Paragraph2 from '../01_atoms/fonts_paragraph2'

import { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';

const data = {
  "chapter_number": "02",
  "chapter_title": "Our tracks",
  "title": "We would love to introduce you to the",
  "title_highlighted": " following tracks.",
  "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
  "paragraph": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students.",
  "track_list": [
    {
      "title": "Education",
      "icon": "/assets/education.svg",
      "text": "This track is about empowering & enhancing education for people of all ages and backgrounds.",
      "soundfile": "/sounds/sound.mp3",
      "soundtitle": "Why is education important?",
      "userImage": "/assets/pic.png",
      "userLink": "https://www.google.com",
      "subText": "The pandemic in particular significantly accelerated the digitization of classrooms and now presents far-reaching opportunities to actively drive the shift to Remote Learning.",
      "guidingQuestions": [
        "How can Remote Learning enhance access to education?",
        "In which way can technology embrace the positive effects of Remote Learning?",
        "What technologies could we build to help teachers quickly pivot from in-person to remote learning and vice versa?",
        "What are the unresolved challenges (access to education in many countries, quality & effectiveness of education, personalized learning, affordability)?",
      ],
      "challeges": [
        {
          "image": "/assets/woods.png",
          "title": "Google AI Geoecology",
          "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
          "paragraph": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students."
        },
        {
          "image": "/assets/woods.png",
          "title": "Google AI Geoecology",
          "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
          "paragraph": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students."
        },
      ],
    },
    {
      "title": "Environment",
      "icon": "/assets/environment.svg",
      "text": "Projects in this track look at how Technology can help make humanity's treatment of our planet more sustainable.",
      "soundfile": "/sounds/test.mp3",
      "soundtitle": "Why is education important?",
      "userImage": "/assets/pic.png",
      "userLink": "https://www.google.com",
      "subText": "The pandemic in particular significantly accelerated the digitization of classrooms and now presents far-reaching opportunities to actively drive the shift to Remote Learning.",
      "guidingQuestions": [
        "How can Remote Learning enhance access to education?",
        "In which way can technology embrace the positive effects of Remote Learning?",
        "What technologies could we build to help teachers quickly pivot from in-person to remote learning and vice versa?",
        "What are the unresolved challenges (access to education in many countries, quality & effectiveness of education, personalized learning, affordability)?",
      ],
      "challeges": [
        {
          "image": "/assets/woods.png",
          "title": "Google AI Geoecology",
          "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
          "paragraph": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students."
        }
      ],
    },
    {
      "title": "MedTech",
      "icon": "/assets/health.svg",
      "text": "Projects in this track investigate the possibilities of new technologies for better understanding and solving medicine and health-related problems.",
      "soundfile": "/sounds/test.mp3",
      "soundtitle": "Why is education important?",
      "userImage": "/assets/pic.png",
      "userLink": "https://www.google.com",
      "subText": "The pandemic in particular significantly accelerated the digitization of classrooms and now presents far-reaching opportunities to actively drive the shift to Remote Learning.",
      "guidingQuestions": [
        "How can Remote Learning enhance access to education?",
        "In which way can technology embrace the positive effects of Remote Learning?",
        "What technologies could we build to help teachers quickly pivot from in-person to remote learning and vice versa?",
        "What are the unresolved challenges (access to education in many countries, quality & effectiveness of education, personalized learning, affordability)?",
      ],
      "challeges": [
        {
          "image": "/assets/woods.png",
          "title": "Google AI Geoecology",
          "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
          "paragraph": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students."
        }
      ],
    },
  ]
}

export default function Tracks(){
  const [trackIndex, setTrackIndex] = useState(undefined);

  return <div className={styles.TracksItem}>
    <div className={styles.Grid}>
        <div className={styles.LeftContainer}>
          <ChapterBar number={data.chapter_number} content={data.chapter_title} isDarkBackground={false}/>
        </div>
        <div className={styles.MiddleContainer}>
          <Headline1 isH1={false} normalContent={data.title} highlightedContent={data.title_highlighted} isDarkBackground={false}/>
          <div className={styles.Paragraph}>
            <Paragraph1 className={styles.Paragraph} highlightedContent={data.paragraph_highlighted} normalContent={data.paragraph} isDarkBackground={false}/>
          </div>
          <div className={styles.TracklList}>
            {data.track_list.map((track,index)=>(
              <div key={index} className={styles.Track}>
                <div className={styles.TopContainer} onClick={()=>trackIndex == index ? setTrackIndex(undefined) : setTrackIndex(index)}>
                  <div className={styles.TitleSection}>
                    <div className={styles.Icon}>
                      <Image src={track.icon} alt={track.title} layout="fill" objectFit="cover" />
                    </div>
                    <Paragraph1 isDarkBackground={false} normalContent={""} highlightedContent={track.title} />
                  </div>
                  <div className={styles.DescriptionSection}>
                    <Paragraph1 isDarkBackground={false} normalContent={track.text} highlightedContent={""} />
                  </div>
                  <div className={styles.ArrowSection}>
                    {trackIndex == index ? <div className={styles.Arrow} style={{transform: "rotate(180deg)"}}>
                      <Image src={"/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> :
                    <div className={styles.Arrow}>
                      <Image src={"/assets/arrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                    </div> }
                  </div>
                </div>
                {trackIndex == index ? <div className={styles.Content}>
                  <div className={styles.ContentTextConatiner}>
                    <div className={styles.ContentSub}>
                      <ReactAudioPlayer
                        src={track.soundfile}
                        controls
                      />
                    </div>
                  </div>
                  <div className={styles.ContentTextConatiner}>
                    <div className={styles.ContentSub}>
                      <Paragraph2 isDarkBackground={false} normalContent={track.text} highlightedContent={""}/>
                    </div>
                  </div>
                  <div className={styles.ContentTextConatiner}>
                    <div className={styles.ContentSub}>
                      <div className={styles.ListHeadline}>GUIDING QUESTIONS</div>
                      <ul className={styles.List}>
                        {track.guidingQuestions.map((question, index)=>(
                          <li key={index}>
                            <Paragraph2 normalContent={question} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {track.challeges.map((challenge,index)=>(
                    <div key={index} className={styles.ChallengeContainer}>
                      <div className={styles.FirstContainer}>
                        <div className={styles.NextArrow}>
                          <Image src={"/assets/nextArrow.svg"} alt="arrow" layout="fill" objectFit="cover" />
                        </div>
                      </div>
                      <div className={styles.SecondContainer}>
                        <div className={styles.ChallengeImg}>
                          <Image src={challenge.image} alt={challenge.title} layout="fill" objectFit="cover" />
                        </div>
                      </div>
                      <div className={styles.ThirdContainer}>
                        <Paragraph1 isDarkBackground={false} normalContent={""} highlightedContent={challenge.title} />
                        <Paragraph2 isDarkBackground={false} highlightedContent={challenge.paragraph_highlighted} normalContent={challenge.paragraph} />
                      </div>
                    </div>
                  ))}
                </div> : ""}
                <div className={styles.Separator}></div>
              </div>
            ))}
          </div>
        </div>
    </div>
  </div>
}