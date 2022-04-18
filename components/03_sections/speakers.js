import styles from '../../styles/03_sections/Speakers.module.css'
import ChapterBar from '../02_molecules/chapterBar'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Paragraph2 from '../01_atoms/fonts_paragraph2'
import Headline1 from '../01_atoms/fonts_headline1'
import Image from 'next/image'
import $ from 'jquery';
import Headline2 from '../01_atoms/fonts_headline2'
import Link from 'next/link'

const data = {
  "chapter_title": "The speakers",
  "chapter_number": "03",
  "title": "Who will be on stage?",
  "speakers": [
    {
      "name": "Cecilia Carbonelli",
      "paragraph_highlighted": "Senior principal – system and algorithm architect at Infineon AG.",
      "paragraph": " Cecilia is an author of 35+ scientific publications and numerous patents, with broad experience in the areas of system and algorithm design, data science, machine learning, smart sensors, information theory, and signal processing.",
      "linkedIn_link": "https://www.linkedin.com/in/cecilia-carbonelli-a83007b/",
      "website_link": "https://www.infineon.com",
      "image": "/speakers/Cecilia_Carbonelli.jpg"
    },
    {
      "name": "Nico Kelling",
      "paragraph_highlighted": "Head of AI Center of Excellence at Infineon AG.",
      "paragraph": " He will share how a leading semiconductor company is using AI to products its producs and internal products.",
      "linkedIn_link": "https://www.linkedin.com/in/nico-kelling-b686787/",
      "website_link": "https://www.infineon.com",
      "image": "/speakers/Nico_Kelling.jpg"
    },
    {
      "name": "Lorenzo Servadei",
      "paragraph_highlighted": "Senior staff ML engineer at Infineon AG and lecturer at the Technical University of Munich.",
      "paragraph": " Lorenzo has researched in the field of computer vision, image segmentation and crowd-sourcing on web applications, and deep learning approaches in approaches in firmware/hardware and trade-off analysis.",
      "linkedIn_link": "https://www.linkedin.com/in/lorenzo-servadei-32140937/",
      "website_link": "https://www.infineon.com",
      "image": "/speakers/speaker03.jpeg"
    },
    {
        "name": "Muneer Ahmad Dedmari",
        "paragraph_highlighted": "AI engineer at NetApp.",
        "paragraph": " Muneer has worked on developing end-to-end solutions for AI applications in the Automotive, Healthcare and FinTech domains, and is passionate about closing the gap between business and technology.",
        "linkedIn_link": "https://www.linkedin.com/in/muneer-ahmad-dedmari/",
        "website_link": "https://www.netapp.com",
        "image": "/speakers/speaker04.jpg"
    },
    {
        "name": "Dr. Raphael Prevost",
        "paragraph_highlighted": "Senior scientist at ImFusion as Head of Machine Learning.",
        "paragraph": " Raphael specialized in deep learning and image processing, especially in the medical imaging field. He is actively involved in the medical image analysis community, publishing research papers and reviewing main conferences and journals.",
        "linkedIn_link": "https://www.linkedin.com/in/raphaelprevost",
        "website_link": "https://www.imfusion.com",
        "image": "/speakers/speaker05.jpg"
    },
    {
      "name": "Haschemi, Mehdiyar",
      "paragraph_highlighted": "Product Manager for AI Solutions, Advanced Therapies, Siemens Healthineers AG",
      "paragraph": " We are the global leader when it comes to AI patent applications in medical imaging and have been a pioneer in AI development for more than 20 years. We own more than 700 patent families related to machine learning, of which more than 275 are rooted in deep learning. With established AI expertise, future-oriented staff, vast medical data sets, and the exceptional computing power needed for creating algorithm-supported healthcare solutions, we are the right partner when venturing into the world of AI.",
      "linkedIn_link": "",
      "website_link": "https://www.siemens-healthineers.com/",
      "image": "/speakers/220405_Profilbild_TUM.PNG"
    },
    {
      "name": "Lluch Alvarez, Èric",
      "paragraph_highlighted": "Research Scientist in Artificial Intelligence Germany, Siemens Healthineers AG",
      "paragraph": " We are the global leader when it comes to AI patent applications in medical imaging and have been a pioneer in AI development for more than 20 years. We own more than 700 patent families related to machine learning, of which more than 275 are rooted in deep learning. With established AI expertise, future-oriented staff, vast medical data sets, and the exceptional computing power needed for creating algorithm-supported healthcare solutions, we are the right partner when venturing into the world of AI.",
      "linkedIn_link": "",
      "website_link": "https://www.siemens-healthineers.com/",
      "image": "/speakers/fotoCarnet.jpg"
    }
  ]
}

function changeStyles(){
  const slider = $(".slick-list")[1];
  $(slider).css("overflow","visible");
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
            {data.speakers.map(speaker => (
              <div key={speaker.name} className={styles.SpeakerContainer}>
                <div className={styles.TextContainer}>
                  <div className={styles.TopContainer}>
                    <Headline2 isDarkBackground normalContent={speaker.name} isH1={false} />
                    <Paragraph2 isDarkBackground highlightedContent={speaker.paragraph_highlighted} normalContent={speaker.paragraph}/>
                  </div>
                  <div className={styles.SocialLinks}>
                    {speaker.linkedIn_link != "" && 
                        <Link href={speaker.linkedIn_link} passHref>
                          <div className={styles.Link}>
                            <Image src={"/assets/linkedIn.svg"} alt="linkedIn icon" layout="fill" objectFit="cover" />
                          </div>
                        </Link>}
                    {speaker.website_link != "" && 
                        <Link href={speaker.website_link} passHref>
                          <div className={styles.Link}>
                            <Image src={"/assets/website.svg"} alt="website icon" layout="fill" objectFit="cover" />
                          </div>
                        </Link>}
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