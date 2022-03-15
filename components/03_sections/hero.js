import styles from '../../styles/03_sections/Hero.module.css'
import Headline1 from '../01_atoms/fonts_headline1'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import Paragraph2 from '../01_atoms/fonts_paragraph2'
import Ticket from '../02_molecules/ticket'

import Image from 'next/image'

const data = {
  "headline": "Join our next",
  "headline_marked": " Makeathon",
  "paragraph_marked": "The Makeathon by TUM.ai ",
  "paragraph": "is a weekend project that connects several hundred students to collaborate on new, innovative AI-related solutions on the topic of AI4SocialGood.",
  "value": [
    {
      "title": "Lauch your AI project",
      "subtitle": "in the filed of AI4SocialGood"
    },
    {
      "title": "Grow your network",
      "subtitle": "work, talk and connect to other students"
    },
    {
      "title": "Win awesome prices",
      "subtitle": "up to 2000 Euro for the winning teams"
    }
  ] 
}

export default function Hero(){
  return <div className={styles.HeroItem}>
    <div className={styles.Background}>
      <div className={styles.BgContainer}>
      </div>
    </div>
    <div className={styles.Grid}>
      <div className={styles.LeftContainer}>
        <div className={styles.UpperContainer}>
          <Headline1 isH1 normalContent={data.headline} highlightedContent={data.headline_marked} isDarkBackground/>
          <Paragraph1 highlightedContent={data.paragraph_marked} normalContent={data.paragraph} isDarkBackground />
        </div>
        <div className={styles.BottomContainer}>
          {data.value.map((value, index)=>{
            return(
              <div key={index} className={styles.Value}>
                <div className={styles.CheckIcon}></div>
                <div className={styles.Text}>
                  <Paragraph1 highlightedContent={value.title} normalContent={""} isDarkBackground/>
                  <Paragraph2 highlightedContent={""} normalContent={value.subtitle} isDarkBackground/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.RightContainer}>
        <Ticket position={"right"}/>
      </div>
    </div>
  </div>
}