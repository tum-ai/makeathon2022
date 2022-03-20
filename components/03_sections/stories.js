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
  "paragraph_highlighted": "Over 600 enthusiastic students and young participants have already participated in TUM.ai’s previous Makeathon iterations. ",
  "paragraph": "Have a look at the winning teams and fantastic solutions that resulted from only 48h working time!",
  "stories": [
    {
      "title": "CabMate",
      "paragraph_highlighted": "An AI based web app that supports taxi drivers on a daily basis ",
      "paragraph": "by predicting where the most demand will be across the city. By using CabMate cabdrivers can reduce their cruising-time and have more productive shifts.",
      "image": "/assets/story01.png",
      "members": [
        {
          "image": "/stories/nils_jacobsen.webp",
          "link": "https://www.linkedin.com/in/nils-jacobsen/",
        },
        {
          "image": "/stories/oliver_kovacs.webp",
          "link": "https://www.linkedin.com/in/oliver-kovacs/",
        },
        {
          "image": "/stories/ramona_dombetzki.webp",
          "link": "https://www.linkedin.com/in/ramona-dombetzki-9a52531a0/",
        },
        {
          "image": "/stories/sebastian_wilhelm.webp",
          "link": "https://www.linkedin.com/in/sebastian-wilhelm/",
        },
        {
          "image": "/stories/stefan_rummer.webp",
          "link": "https://www.linkedin.com/in/stefanrmmr/",
        },
      ]
    },
    {
      "title": "flyAI",
      "paragraph_highlighted": "AI as a service to enable autonomous drones to land anywhere. ",
      "paragraph": "Added to this we create a drone fleet relocation algorithm to ensure best coverage of drone services.",
      "image": "/stories/flyai.jpeg",
      "members": [
        {
          "image": "/stories/marcel_schlicke.jpg",
          "link": "https://www.linkedin.com/in/marcel-schlicke-63657b18a/",
        },
        {
          "image": "/stories/mreenav_deka.jpg",
          "link": "https://www.linkedin.com/in/mreenavdeka/",
        },
        {
          "image": "/stories/nikolas_kolbenschlag.jpg",
          "link": "https://www.linkedin.com/in/nicolas-kolbenschlag-860161169/",
        },
        {
          "image": "/stories/raphael_maier.jpg",
          "link": "https://www.linkedin.com/in/raphael-m-952481153/",
        },
      ]
    },
    {
      "title": "Speak Easy",
      "paragraph_highlighted": "'Speak Easy' ",
      "paragraph": "- a text simplification engine that automatically turns text from 'normal' into 'simple language' - language that is easily understood by elderly, cognitively impaired, mentally handicapped people and learners of a new language.",
      "image": "/stories/speak_easy.jpeg",
      "members": [
        {
          "image": "/stories/alisha_r.webp",
          "link": "https://www.linkedin.com/in/alisha-riecker-690743187/",
        },
        {
          "image": "/stories/flora_g.webp",
          "link": "https://www.linkedin.com/in/flora-g-603274a9/",
        },
        {
          "image": "/stories/nicholas.webp",
          "link": "https://www.linkedin.com/in/nicholas-jm-wolf/",
        },
        {
          "image": "/stories/vanessa.jpg",
          "link": "https://www.linkedin.com/in/vanessa-theel-624b54122/",
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