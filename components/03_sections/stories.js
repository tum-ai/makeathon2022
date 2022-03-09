import styles from '../../styles/03_sections/Stories.module.css'
import ChapterBar from '../02_molecules/chapterBar'
import Headline1 from '../01_atoms/fonts_headline1'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import Paragraph2 from '../01_atoms/fonts_paragraph2'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from 'next/image'
import { Component } from 'react/cjs/react.production.min'

const data = {
  "chapter_title": "Stories",
  "chapter_number": "04",
  "title": "Winning teams of the last ",
  "title_highlighted": "Makeathon.",
  "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
  "paragraph": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students.",
  "stories": [
    {
      "title": "CabMate",
      "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
      "paragraph": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students.",
      "image": "/assets/story01.png",
      "members": [
        {
          "image": "/assets/user01.png",
          "link": "https://www.google.com",
        },
        {
          "image": "/assets/user02.png",
          "link": "https://www.google.com",
        },
        {
          "image": "/assets/user03.png",
          "link": "https://www.google.com",
        },
        {
          "image": "/assets/user04.png",
          "link": "https://www.google.com",
        },
      ]
    },
    {
      "title": "CabMate",
      "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
      "paragraph": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students.",
      "image": "/assets/keithRandal.png",
      "members": [
        {
          "image": "/assets/user01.png",
          "link": "https://www.google.com",
        },
        {
          "image": "/assets/user02.png",
          "link": "https://www.google.com",
        },
      ]
    },
    {
      "title": "CabMate",
      "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
      "paragraph": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students.",
      "image": "/assets/keithRandal.png",
      "members": [
        {
          "image": "/assets/user01.png",
          "link": "https://www.google.com",
        },
        {
          "image": "/assets/user02.png",
          "link": "https://www.google.com",
        },
        {
          "image": "/assets/user03.png",
          "link": "https://www.google.com",
        },
      ]
    },
  ]
}

export default class Stories extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      draggable: true,
      arrows: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
    return <div className={styles.StoriesItem}>
      <div className={styles.Grid}>
        <div className={styles.LeftContainer}>
          <ChapterBar number={data.chapter_number} content={data.chapter_title} isDarkBackground={false}/>
        </div>
        <div className={styles.MiddleContainer}>
          <Headline1 isH1={false} normalContent={data.title} highlightedContent={data.title_highlighted} isDarkBackground={false}/>
          <div className={styles.Paragraph}>
            <Paragraph1 className={styles.Paragraph} highlightedContent={data.paragraph_highlighted} normalContent={data.paragraph} isDarkBackground={false}/>
          </div>
        </div>
      </div>
      <div className={styles.BottomGrid}>
        <div className={styles.SliderBox}>
          <Slider {...settings} >
            {data.stories.map((story, index)=>(
              <div key={index} className={styles.Box}>
                <div className={styles.Card}>
                  <div className={styles.TopImage}>
                    <Image src={story.image} alt={story.title} layout="fill" objectFit="cover" />
                  </div>
                  <div className={styles.CardContent}>
                    <div className={styles.Text}>
                      <Paragraph1 highlightedContent={story.title} isDarkBackground />
                      <Paragraph2 highlightedContent={story.paragraph_highlighted} normalContent={story.paragraph} isDarkBackground />
                    </div>
                    <div className={styles.Members}>
                      {story.members.map((member,i)=>(
                        <a href={member.link} key={i} className={styles.Member}>
                          <Image src={member.image} alt="member" layout="fill" objectFit="cover" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  }
}