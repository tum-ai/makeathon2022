import styles from '../../styles/03_sections/Hero.module.css'
import Headline1 from '../01_atoms/fonts_headline1'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import Paragraph2 from '../01_atoms/fonts_paragraph2'
import Ticket from '../02_molecules/ticket'

const data = {
  "headline": "Join our next",
  "headline_marked": " Makeathon",
  "paragraph_marked": "The Makeathon by TUM.ai ",
  "paragraph": "is a weekend project that connects several hundred students to collaborate on new, innovative AI-related solutions on the topic of AI4SocialGood.",
  "value": [
    {
      "title": "Lauch your AI project",
      "subtitle": "innovative AI-related solutions on the"
    },
    {
      "title": "Grow your network",
      "subtitle": "innovative AI-related solutions on the"
    },
    {
      "title": "Win awesome prices",
      "subtitle": "innovative AI-related solutions on the"
    }
  ] 
}

export default function Hero(){
  return <div className={styles.HeroItem}>
    <div className={styles.Background}>{NotSymetricBG()}</div>
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
        <Ticket />
      </div>
    </div>
  </div>
}


function NotSymetricBG() {
  return (
    <svg
      className={styles.Svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1512 912"
    >
      <path fill="#C4C4C4" d="M0 0h1512v704L0 912V0z"></path>
      <path
        fill="url(#paint0_linear_248_1194)"
        d="M0 0h1512v704L0 912V0z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_248_1194"
          x1="0"
          x2="1069.96"
          y1="0"
          y2="1266.67"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.089" stopColor="#211B45"></stop>
          <stop offset="1" stopColor="#0F2538"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}