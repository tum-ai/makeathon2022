import styles from '../../styles/03_sections/Tracks.module.css'
import ChapterBar from '../02_molecules/chapterBar'
import Headline1 from '../01_atoms/fonts_headline1'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import Image from 'next/image'
import Paragraph2 from '../01_atoms/fonts_paragraph2'

import { useState } from 'react'

const data = {
  "chapter_number": "02",
  "chapter_title": "Our tracks",
  "title": "We would love to introduce you to the",
  "title_highlighted": " following tracks.",
  "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
  "paragraph": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students.",
  "track_list": [
    {
      "title": "Health",
      "icon": "/assets/health.svg",
      "text": "Bring together companies and students through projects and events about AI.",
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
      "text": "Bring together companies and students through projects and events about AI.",
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
      "title": "Eductaion",
      "icon": "/assets/education.svg",
      "text": "Bring together companies and students through projects and events about AI.",
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
  const [trackIndex, setTrackIndex] = useState(1);

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