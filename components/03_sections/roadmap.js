import styles from '../../styles/03_sections/Roadmap.module.css'
import Image from 'next/image'
import { useState } from 'react'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import Paragraph2 from '../01_atoms/fonts_paragraph2'
import Headline2 from '../01_atoms/fonts_headline2'
import Date1 from '../01_atoms/fonts_date1'

const data = {
  "points": [
    {
      "title": "Application deadline",
      "icon": "/assets/deadline.svg",
      "time": "06.04",
      "content_highlighted": "You have time to submit your application until the 6th of April. ",
      "content": "As we accept applications on a rolling basis, the earlier you apply the higher are your changes. Furthermore, we are giving away great gifts for early birds."
    },
    {
      "title": "Selection Process ",
      "icon": "/assets/selection.svg",
      "time": "09.04",
      "content_highlighted": "You will hear from us the latest by the 9th of April ",
      "content": "if you were accepted to participate in the Makeathon. In this email you will also receive more information about the upcoming talks, workshops and tools available to you."
    },
    {
      "title": "Challenge Pitch",
      "icon": "/assets/pitch.svg",
      "time": "11.04",
      "content_highlighted": "On the 11th of April you get the chance to hear companies (Challenge Setters) presenting real life problems. ",
      "content": "Afterwards, a team finding event will take place where you can discuss the presented projects with the other participants and form you interdisciplinary team. You always have the option to also work on your own ideas. These events will take place in the evening."
    },
    {
      "title": "Workshops",
      "icon": "/assets/workshops.svg",
      "time": "12.04 - 15.04",
      "content_highlighted": "Use the workshops to get helpful insights into AI as well as how business modeling works. ",
      "content": "The workshops will be held on the evenings (19:00) from the 12th until 15th of April. "
    },
    {
      "title": "Business Talks",
      "icon": "/assets/business_talks.svg",
      "time": "18.04 - 21.04",
      "content_highlighted": "Join business talks and get inspired by entrepreneurs or industry experts. ",
      "content": "The Business talks will be held from the 19th to 21st of April."
    },
    {
      "title": "Makeathon",
      "icon": "/assets/makeathon.svg",
      "time": "22.04 - 24.04",
      "content_highlighted": "You have 48 hours to develop a proof of concept with your team. ",
      "content": "After pitching your results on Sunday afternoon, a jury of experts will select the winning teams for each track. Fantastic prizes are waiting!"
    },
  ] 
}

export default function Roadmap(){
  const [roadIndex, setRoadIndex] = useState(0);

  function calculatePercentage(){
    return (roadIndex * 16.6) + 10
  }

  return <div className={styles.RoadmapItem}>
    <div className={styles.Grid}>
      <div className={styles.LeftContainer}>
        <div className={styles.LineContainer}>
          <div className={styles.Line}></div>
        </div>
        <div className={styles.MarkedLineContainer}>
          <div style={{"height": calculatePercentage()+"%"}} className={styles.MarkedLine}></div>
        </div>
        <div className={styles.PointContainer}>
          {data.points.map(function(point, index){
            if(roadIndex >= index){
              return <div style={{boxShadow: roadIndex == index ? "0px 4px 20px rgba(131, 123, 239, 0.55)" : ""}} className={styles.PointMarked} key={index} onClick={()=>setRoadIndex(index)}>
                {/* <Image style={{opacity: 0.5}} layout='fill' objectFit='cover' src={point.icon} alt={point.title}/> */}
              </div>
            }else{
              return <div className={styles.Point} key={index} onClick={()=>setRoadIndex(index)}>
                {/* <Image layout='fill' objectFit='cover' src={point.icon} alt={point.title}/> */}
                <div className={styles.LittlePoint} />
              </div>
            }
          })}
        </div>
        <div className={styles.TextContainer}>
        {data.points.map(function(point, index){
          if(index %2 == 0){
            return <div key={index} onClick={()=>setRoadIndex(index)} style={index==roadIndex ? {"opacity":"1"} : {"opacity":"0.5"}} className={styles.TextLeft}>
              <Paragraph1 isUnderlined highlightedContent={point.title} normalContent={""} isDarkBackground={false}/>
              <Paragraph2 highlightedContent={""} normalContent={point.time} isDarkBackground={false}/>
            </div>
          }else{
            return <div key={index} onClick={()=>setRoadIndex(index)} style={index==roadIndex ? {"opacity":"1"} : {"opacity":"0.5"}} className={styles.TextRight}>
              <Paragraph1 isUnderlined highlightedContent={point.title} normalContent={""} isDarkBackground={false}/>
              <Paragraph2 highlightedContent={""} normalContent={point.time} isDarkBackground={false}/>
            </div>
          }
        })}
        </div>
      </div>
      <div className={styles.RightContainer}>
        <div className={styles.TopContainer}>
          <Image src="/assets/roadmap01.png" alt={data.points[roadIndex].title} layout="fill" objectFit='cover' />
          <div className={styles.CardTime}>
            <Date1 normalContent={data.points[roadIndex].time} isDarkBackground/>
          </div>
        </div>
        <div className={styles.BottomContainer}>
          <Headline2 isDarkBackground normalContent={data.points[roadIndex].title}/>
          <Paragraph1 highlightedContent={data.points[roadIndex].content_highlighted} normalContent={data.points[roadIndex].content} isDarkBackground/>
        </div>
      </div>
      {data.points.map((point, index)=>(
        <div key={index} className={styles.MobileContainer}>
          <div className={styles.TopContainer}>
            <Image src="/assets/roadmap01.png" alt={point.title} layout="fill" objectFit='cover' />
            <div className={styles.CardTime}>
              <Date1 normalContent={point.time} isDarkBackground/>
            </div>
          </div>
          <div className={styles.BottomContainer}>
            <Headline2 isDarkBackground normalContent={point.title}/>
            <Paragraph1 highlightedContent={point.content_highlighted} normalContent={point.content} isDarkBackground/>
          </div>
        </div>
      ))}
    </div>
  </div>
}