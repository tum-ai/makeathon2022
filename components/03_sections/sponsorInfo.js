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
  "title": "Be a part of TUM.ai Makeathon",
  "paragraph": "Join us on the journey of raising awareness of AI potential and inspiring young individuals to discover potential AI business cases in the real world!",
  "sub_headline": "For companies, NGOs, student or research organizations we offer 3 partner packages:",
  "paragraph_highlighted1": "Premium Sponsor | ",
  "paragraph1": "Share your company’s vision and tell the word about the efforts your company takes to use AI to improve the world in a 1h talk during Deep Dive Days and during opening ceremony. Take advantage of TUM.ai’s talent pool and connect with potential future coworkers and innovators. In addition to that, benefit from marketing posts shared on TUM.ai’s media channels and enjoy many other advantages.",
  "paragraph_highlighted2": "Standard Sponsor | ",
  "paragraph2": "Have your company’s logo advertised in  TUM.ai Makeathon website and contribute to the prize for the winners. In addition, benefit from 3-month sponsor visibility on TUM.ai’s official website and much more.",
  "paragraph_highlighted3": "Challenge Setter | ",
  "paragraph3": "Challenge motivated young people with a problem and test the feasibility of a possible business case. Practive leadership, attract talents, inspire and get inspired, and much more!",
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
            <Paragraph1 className={styles.Paragraph} normalContent={data.sub_headline} isDarkBackground={false}/>
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