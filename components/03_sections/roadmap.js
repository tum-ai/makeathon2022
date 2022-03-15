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
      "icon": "/assets/users.svg",
      "time": "06.04",
      "content_highlighted": "As the largest student-organized Makeathon in Germany, ",
      "content": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students. Due to the ongoing Corona Pandemic, all events will be held online. Therefore you don't have to live in Munich to participate."
    },
    {
      "title": "Selection Process ",
      "icon": "/assets/users.svg",
      "time": "09.04",
      "content_highlighted": "As the largest student-organized Makeathon in Germany, ",
      "content": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students. Due to the ongoing Corona Pandemic, all events will be held online. Therefore you don't have to live in Munich to participate."
    },
    {
      "title": "Challenge Pitch",
      "icon": "/assets/users.svg",
      "time": "11.04",
      "content_highlighted": "As the largest student-organized Makeathon in Germany, ",
      "content": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students. Due to the ongoing Corona Pandemic, all events will be held online. Therefore you don't have to live in Munich to participate."
    },
    {
      "title": "Workshops",
      "icon": "/assets/users.svg",
      "time": "12.04 - 15.04",
      "content_highlighted": "As the largest student-organized Makeathon in Germany, ",
      "content": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students. Due to the ongoing Corona Pandemic, all events will be held online. Therefore you don't have to live in Munich to participate."
    },
    {
      "title": "Business Talks",
      "icon": "/assets/users.svg",
      "time": "18.04 - 21.04",
      "content_highlighted": "As the largest student-organized Makeathon in Germany, ",
      "content": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students. Due to the ongoing Corona Pandemic, all events will be held online. Therefore you don't have to live in Munich to participate."
    },
    {
      "title": "Makeathon",
      "icon": "/assets/users.svg",
      "time": "22.04 - 24.04",
      "content_highlighted": "As the largest student-organized Makeathon in Germany, ",
      "content": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students. Due to the ongoing Corona Pandemic, all events will be held online. Therefore you don't have to live in Munich to participate."
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
              return <div className={styles.PointMarked} key={index} onClick={()=>setRoadIndex(index)}>
                <Image width="16px" height="16px" src={point.icon} alt={point.title}/>
              </div>
            }else{
              return <div className={styles.Point} key={index} onClick={()=>setRoadIndex(index)}>
                <Image width="16px" height="16px" src={point.icon} alt={point.title}/>
              </div>
            }
          })}
        </div>
        <div className={styles.TextContainer}>
        {data.points.map(function(point, index){
          if(index %2 == 0){
            return <div key={index} onClick={()=>setRoadIndex(index)} style={index==roadIndex ? {"opacity":"1"} : {"opacity":"0.5"}} className={styles.TextLeft}>
              <Paragraph1 highlightedContent={point.title} normalContent={""} isDarkBackground={false}/>
              <Paragraph2 highlightedContent={""} normalContent={point.time} isDarkBackground={false}/>
            </div>
          }else{
            return <div key={index} onClick={()=>setRoadIndex(index)} style={index==roadIndex ? {"opacity":"1"} : {"opacity":"0.5"}} className={styles.TextRight}>
              <Paragraph1 style={index == roadIndex ? {"color":"#000000"} : {"color":"#A0A0A0"}} highlightedContent={point.title} normalContent={""} isDarkBackground={false}/>
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
    </div>
  </div>
}