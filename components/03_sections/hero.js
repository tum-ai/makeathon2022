import styles from '../../styles/03_sections/Hero.module.css'
import Headline1 from '../01_atoms/fonts_headline1'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import Paragraph2 from '../01_atoms/fonts_paragraph2'
import Ticket from '../02_molecules/ticket'

import Image from 'next/image'

const data = {
  "headline": "The TUM.ai ",
  "headline_marked": "Makeathon",
  "paragraph_marked_1": "AI for Everyone \n 28.04 - 30.04",
  "paragraph_marked": "Join our 2-day challenge ",
  "paragraph": "that connects young innovators with different backgrounds to develop AI solutions for real-life business cases.",
  "value": [
    {
      "title": "Launch your AI project",
      "subtitle": "Use the Makeathon to kickstart your startup journey"
    },
    {
      "title": "Grow your network",
      "subtitle": "Meet and socialize with motivated and likeminded people"
    },
    {
      "title": "Win awesome prizes",
      "subtitle": "🤫  These are still a secret. Stay tuned"
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
          
          {/*<Paragraph1 highlightedContent={data.paragraph_marked_1} isDarkBackground />*/}

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
        <Ticket position={"right"} version={"current"}/>
      </div>
    </div>
  </div>
}