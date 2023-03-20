import styles from "../../styles/03_sections/About.module.css";
import Headline1 from "../01_atoms/fonts_headline1";
import Paragraph1 from "../01_atoms/fonts_paragraph1";
import Button from "../01_atoms/button";
import ChapterBar from "../02_molecules/chapterBar";
import Link from "next/link";
import Image from "next/image";
import Paragraph2 from "../01_atoms/fonts_paragraph2";

const data = {
  title:
    "We at TUM.ai are thrilled to have you on board and can't wait to hear what you and your team come up with! 🚀",
  paragraph_highlighted:
    "The Makeathon is a 2-day hackathon for motivated students and young professionals to develop innovative AI solutions on real-world business cases presented by industry leaders.",
  paragraph:
    " Innovators of tomorrow work together in interdisciplinary teams to develop a prototype for challenges centred around the theme of AI for everyone. As Germany's leading AI student initiative, we drive positive social impact through interdisciplinary projects. The Makeathon seeks to achieve this by providing talks of leading industry speakers, hands-on challenges, networking opportunities with like-minded people, industry leaders, start-ups and research organizations. This year's Makeathon is in-person on TUM's campus in Garching during the last week of April. We invite you to explore the possibilities of AI and create innovative solutions that can positively impact everyone.",
  button: "Learn more about TUM.ai",
  button_link: "https://www.tum-ai.com/",
  button_2: "Apply now",
  button_2_link: "https://makeathon23.tum-ai.com/apply",
  chapter_title: "About the makeathon",
  chapter_number: "01",
  soundfile: "/sounds/sound.mp3",
  soundtitle: "What can you expect?",
  soundAuthor: "Nicolas Remerscheid",
  userImage: "/assets/author.png",
  userLink: "https://www.google.com",
};

export default function About() {
  function playerStyleHandler(e) {
    console.log("moin");
    e.target.nextElementSibling.children[1].style.flex = "unset";
    e.target.parentElement.style.boxShadow = "none";
    e.target.parentElement.style.backgroundColor = "transparent";
    e.target.parentElement.style.padding = 0;
  }

  return (
    <div className={styles.AboutItem}>
      <div className={styles.Description}>
        <div className={styles.Grid}>
          <div className={styles.LeftContainer}>
            <ChapterBar
              number={data.chapter_number}
              content={data.chapter_title}
              isDarkBackground={false}
            />
          </div>
          <div className={styles.MiddleContainer}>
            <Headline1
              isH1={false}
              normalContent={data.title}
              highlightedContent={""}
              isDarkBackground={false}
            />
            <div className={styles.Paragraph}> 
              <Paragraph1
                className={styles.Paragraph}
                highlightedContent={data.paragraph_highlighted}
                normalContent={data.paragraph}
                isDarkBackground={false}
              />
            </div>
            <div className={styles.ButtonContainer}>
              <div className={styles.Button}>
                <Button
                  content={data.button}
                  link="https://www.tum-ai.com/"
                  isDarkBackground={false}
                />
              </div>
              {/*<div className={styles.ButtonSpace}/>
              <div className={styles.Button}>
                <Button
                  content={data.button_2}
                  link={data.button_2_link}
                  isDarkBackground={false}
                />
              </div>*/}
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
  );
}
