import styles from '../../styles/03_sections/Speakers.module.css'
import ChapterBar from '../02_molecules/chapterBar'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Paragraph2 from '../01_atoms/fonts_paragraph2'
import Headline1 from '../01_atoms/fonts_headline1'
import Image from 'next/image'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import $ from 'jquery';

const data = {
  "chapter_title": "The speakers",
  "chapter_number": "03",
  "title": "Who will be on stage?",
  "speakers": [
    {
      "name": "Keith Randall",
      "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
      "paragraph": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students.",
      "linkedIn_link": "https://www.google.com",
      "twitter_link": "https://www.google.com",
      "website_link": "https://www.google.com",
      "image": "/assets/keithRandal.png"
    },
    {
      "name": "Peter Lustig2",
      "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
      "paragraph": "you can expect numerous exciting speakers, big-name numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students.",
      "linkedIn_link": "https://www.google.com",
      "twitter_link": "https://www.google.com",
      "website_link": "https://www.google.com",
      "image": "/assets/peterLustig.png"
    },
    {
      "name": "Peter Lustig3",
      "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
      "paragraph": "you can expect numerous exciting speakers, big-name numerous exciting speakers, big-name companies, cool prizes, and excellent numerous exciting speakers, big-name opportunities numerous exciting speakers, big-name to meet like-minded international students.",
      "linkedIn_link": "https://www.google.com",
      "twitter_link": "https://www.google.com",
      "website_link": "https://www.google.com",
      "image": "/assets/peterLustig.png"
    },
  ]

}

function changeStyles(){
  const slider = $(".slick-list")[1];
  console.log($(slider).css("overflow","visible"));
}

export default function Speakers(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    draggable: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return <div className={styles.SpeakersItem}>
    <div className={styles.Grid}>
        <div className={styles.LeftContainer}>
          <ChapterBar number={data.chapter_number} content={data.chapter_title} isDarkBackground/>
        </div>
        <div className={styles.MiddleContainer}>
          <Headline1 isH1={false} normalContent={data.title} isDarkBackground />
          <Slider {...settings} onInit={()=>changeStyles()}>
            {data.speakers.map((speaker,index)=>(
              <div key={index} className={styles.SpeakerContainer}>
                <div className={styles.TextContainer}>
                  <div className={styles.TopContainer}>
                    <Paragraph1 isDarkBackground highlightedContent={speaker.name} isH1={false} />
                    <Paragraph2 isDarkBackground highlightedContent={speaker.paragraph_highlighted} normalContent={speaker.paragraph}/>
                  </div>
                  <div className={styles.SocialLinks}>
                    {speaker.website_link != "" ? <a href={speaker.website_link} className={styles.Link}>
                      <Image src={"/assets/website.svg"} alt="website icon" layout="fill" objectFit="cover" />
                    </a> : ""}
                    {speaker.linkedIn_link != "" ? <a href={speaker.linkedIn_link} className={styles.Link}>
                      <Image src={"/assets/linkedIn.svg"} alt="linkedIn icon" layout="fill" objectFit="cover" />
                    </a> : ""}
                    {speaker.twitter_link != "" ? <a href={speaker.twitter_link} className={styles.Link}>
                      <Image src={"/assets/twitter.svg"} alt="twitter icon" layout="fill" objectFit="cover" />
                    </a> : ""}
                  </div>
                </div>
                <div className={styles.ImageContainer}>
                  <Image src={speaker.image} alt={speaker.name} layout="fill" objectFit="cover" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
    </div>
  </div>
}

function SamplePrevArrow(props) {
  return <div></div>
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={styles.Arrow}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div className={styles.Container}>
        <Image src="/assets/sliderArrow.svg" alt="arrow" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}