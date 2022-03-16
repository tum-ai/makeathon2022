import styles from '../../styles/03_sections/Tracks.module.css'
import ChapterBar from '../02_molecules/chapterBar'
import Headline1 from '../01_atoms/fonts_headline1'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import Image from 'next/image'
import Paragraph2 from '../01_atoms/fonts_paragraph2'
import AudioPlayer, {RHAP_UI} from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import Link from 'next/link'

import { useState } from 'react'

const data = {
  "chapter_number": "02",
  "chapter_title": "Our tracks",
  "title": "We would love to introduce you to the",
  "title_highlighted": " following tracks.",
  "paragraph_highlighted": "The main idea of our Makeathon is to develop a solution powered by AI with a cross-functional team. ",
  "paragraph": "The solutions you will be working on have to fit into one of three tracks: Education, Environment or MedTech. Within these tracks, you can either join a challenge pitched by one of our industry partners (Challenge-Setter), or if you have an awesome idea yourself you can also pitch it, so you can convince others to join you in building a viable business concept.",
  "track_list": [
    {
      "title": "Education",
      "icon": "/assets/education.svg",
      "text": "Empower & enhance education for people of all ages and backgrounds",
      "soundfile": "/sounds/sound.mp3",
      "soundtitle": "Why is education important? 📘",
      "soundAuthor": "Nicolas Remerscheid",
      "userImage": "/assets/author.png",
      "userLink": "https://www.google.com",
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
      "text": "Utilise AI to make humanity's treatment of our planet more sustainable",
      "soundfile": "/sounds/test.mp3",
      "soundtitle": "Let's talk about environment? 🍃",
      "soundAuthor": "Nicolas Remerscheid",
      "userImage": "/assets/author.png",
      "userLink": "https://www.google.com",
      "guidingQuestions": [
        "In what ways is our current Technology unsustainable, and how could we address this?",
        "How can we address the tradeoff between sustainability and affordability?",
        "How can Technology minimize the negative impact of human behavior?",
        "What must be done to establish a shared awareness of our responsibility towards the environment, and how can Technology help accomplish this?",
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
      "text": "Find ways for AI to improve modern day health care and make it more accessible",
      "soundfile": "/sounds/test.mp3",
      "soundtitle": "MedTech - Why should we care? 💊",
      "soundAuthor": "Nicolas Remerscheid",
      "userImage": "/assets/author.png",
      "userLink": "https://www.google.com",
      "guidingQuestions": [
        "How can we improve access to healthcare for people of different ages and backgrounds?",
        "What are the unresolved issues, and how can Technology help?",
        "How can healthcare become more personalized?",
        "How can a common understanding of the significance of a healthy lifestyle be achieved?",
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

  function playerStyleHandler(e){
    e.target.nextElementSibling.children[1].style.flex = "unset";
    e.target.parentElement.style.boxShadow = "none";
    e.target.parentElement.style.backgroundColor = "transparent";
    e.target.parentElement.style.padding = 0;
  }

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
                      <div className={styles.Player}>
                        <div className={styles.PlayerSeparator}></div>
                        <div className={styles.PlayerRightContainer}>
                          <div className={styles.PlayerHeader}>
                            <Link href={track.userLink} passHref={true}>
                              <div className={styles.Author}>
                                <Image src={track.userImage} alt="author" layout='fill' objectFit='cover' />
                              </div>
                            </Link>
                            <div className={styles.Text}>
                              <Paragraph1 highlightedContent={track.soundtitle} />
                              <Paragraph2 normalContent={track.soundAuthor} />
                            </div>
                          </div>
                          <AudioPlayer
                            src="/sounds/sound.mp3"
                            showSkipControls={false}
                            showJumpControls={false}
                            layout="horizontal-reverse"
                            autoPlay={false}
                            loop={false}
                            customControlsSection={[RHAP_UI.MAIN_CONTROLS,]}
                            onLoadStart={playerStyleHandler}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.ContentTextConatiner}>
                    <div className={styles.ContentSub}>
                      <Paragraph2 highlightedContent={"Guiding Questions"} />
                      <ul className={styles.List}>
                        {track.guidingQuestions.map((question, index)=>(
                          <li key={index}>
                            <Paragraph2 normalContent={question} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* {track.challeges.map((challenge,index)=>(
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
                  ))} */}
                </div> : ""}
                <div className={styles.Separator}></div>
              </div>
            ))}
          </div>
        </div>
    </div>
  </div>
}