import styles from '../../styles/03_sections/SponsorInfo.module.css'
import Headline1 from '../01_atoms/fonts_headline1'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import Button from '../01_atoms/button'
import ChapterBar from '../02_molecules/chapterBar'
import Link from 'next/link'
import Image from 'next/image'
import Paragraph2 from '../01_atoms/fonts_paragraph2'
import AudioPlayer, {RHAP_UI} from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import Headline2 from '../01_atoms/fonts_headline2'

const data = {
  "title": "For sponsers",
  "paragraph": "Join us on the journey of raising awareness of AI potential and inspiring young individuals to discover potential AI business cases in the real world!",
  "paragraph_highlighted1": "The Makeathon is a 48-hour virtual challenge with the overall theme AI4SocialGood ",
  "paragraph1": "in which innovators of tomorrow develop a working AI solution for a real-world business case. Students and young professionals will be working together on challenges in Education, Environment, and MedTech. As the largest student-organized Makeathon in Germany, you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students. Due to the ongoing Corona Pandemic, all events will be held online. Therefore you don't have to live in Munich to participate.",
  "paragraph_highlighted2": "The Makeathon is a 48-hour virtual challenge with the overall theme AI4SocialGood ",
  "paragraph2": "in which innovators of tomorrow develop a working AI solution for a real-world business case. Students and young professionals will be working together on challenges in Education, Environment, and MedTech. As the largest student-organized Makeathon in Germany, you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students. Due to the ongoing Corona Pandemic, all events will be held online. Therefore you don't have to live in Munich to participate.",
  "paragraph_highlighted3": "The Makeathon is a 48-hour virtual challenge with the overall theme AI4SocialGood ",
  "paragraph3": "in which innovators of tomorrow develop a working AI solution for a real-world business case. Students and young professionals will be working together on challenges in Education, Environment, and MedTech. As the largest student-organized Makeathon in Germany, you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students. Due to the ongoing Corona Pandemic, all events will be held online. Therefore you don't have to live in Munich to participate.",
  "button": "Get in touch with us",
  "button_link": "mailto:makeathon@tum-ai.com?subject=Sponsor%20request",
  "chapter_title": "For the sponsors",
  "chapter_number": "05",
  "soundfile": "/sounds/sound.mp3",
  "soundtitle": "What can you expect?",
  "soundAuthor": "Nicolas Remerscheid",
  "userImage": "/assets/author.png",
  "userLink": "https://www.google.com",
}

export default function SponsorInfo(){

  function playerStyleHandler(e){
    console.log("moin");
    e.target.nextElementSibling.children[1].style.flex = "unset";
    e.target.parentElement.style.boxShadow = "none";
    e.target.parentElement.style.backgroundColor = "transparent";
    e.target.parentElement.style.padding = 0;
  }

  return <div className={styles.AboutItem}>
    <div className={styles.Description}>
      <div className={styles.Grid}>
        <div className={styles.LeftContainer}>
          <ChapterBar number={data.chapter_number} content={data.chapter_title} isDarkBackground={false}/>
        </div>
        <div className={styles.MiddleContainer}>
          <Headline1 isH1={false} normalContent={data.title} highlightedContent={""} isDarkBackground={false}/>
          <div className={styles.Paragraph}>
            <Headline2 className={styles.Paragraph} normalContent={data.paragraph} isDarkBackground={false}/>
          </div>
          <div className={styles.Paragraph}>
            <Paragraph1 className={styles.Paragraph} highlightedContent={data.paragraph_highlighted1} normalContent={data.paragraph1} isDarkBackground={false}/>
          </div>
          <div className={styles.Paragraph}>
            <Paragraph1 className={styles.Paragraph} highlightedContent={data.paragraph_highlighted2} normalContent={data.paragraph2} isDarkBackground={false}/>
          </div>
          <div className={styles.Paragraph}>
            <Paragraph1 className={styles.Paragraph} highlightedContent={data.paragraph_highlighted3} normalContent={data.paragraph3} isDarkBackground={false}/>
          </div>
          <div className={styles.Button}>
            <Button content={data.button} link={data.button_link} isDarkBackground={false}/>
          </div>
        </div>
      </div>
      {/* <div className={styles.Grid} style={{justifyContent: "flex-end"}}>
        <div className={styles.Player}>
          <div className={styles.PlayerSeparator}></div>
          <div className={styles.PlayerRightContainer}>
            <div className={styles.PlayerHeader}>
              <Link href={data.userLink} passHref={true}>
                <div className={styles.Author}>
                  <Image src={data.userImage} alt="author" layout='fill' objectFit='cover' />
                </div>
              </Link>
              <div className={styles.Text}>
                <Paragraph1 highlightedContent={data.soundtitle} />
                <Paragraph2 normalContent={data.soundAuthor} />
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
              onLoadedData={playerStyleHandler}
              onLoadStart={playerStyleHandler}
            />
          </div>
        </div>
      </div> */}
    </div>
  </div>
}