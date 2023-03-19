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
      "title": "Application Phase Opens",
      "icon": "/assets/deadline.svg",
      "time": "28.03",
      "content_highlighted": "",
      "content": "Registration opens for the TUM.ai Makeathon 2023. Students, recent graduates and AI enthusiasts from around the world are invited to apply and showcase their skills and interest in AI. Participants will be asked to provide their background, interests, and goals for the Makeathon. ",
      "img": "/assets/road01.jpg"
    },
    {
      "title": "Application Deadline",
      "icon": "/assets/selection.svg",
      "time": "21.04",
      "content_highlighted": "",
      "content": "Registration closes. \nNote: We review applications on a rolling basis. That means the earlier you apply, the better. \n\n\n",
      "img": "/assets/road02.jpg"
    },
    {
      "title": "Opening Ceremony ",
      "icon": "/assets/pitch.svg",
      "time": "27.04",
      "content_highlighted": "Online \n",
      "content": "Makeathon 2023 starts with an exciting Opening Ceremony, where participants will be introduced to the event organizers, mentors, and industry partners. As a special surprise, we also invited a renowned AI expert.",
      "img": "/assets/road03.jpg"
    },
    {
      "title": "Kick-off ",
      "icon": "/assets/workshops.svg",
      "time": "28.04",
      "content_highlighted": "On-Site \n",
      "content": "Following the Opening Ceremony, the Makeathon kicks off on-site at the TUM Campus in Garching. Here, the challenges are presented and the hacking starts. \n \n",
      "img": "/assets/road04.jpg"
    },
    // {
    //   "title": "Workshops & Team Finding",
    //   "icon": "/assets/workshops.svg",
    //   "time": "25.09 - 27.09",
    //   "content_highlighted": "Find your team members in the series of socializing events between 27th and 29th of September! ",
    //   "content": "In addition, TUM.ai and industry partners organize educational workshops about introduction to AI to non-techies, business ideation and much more!",
    //   "img": "/assets/road04.jpg"
    // },
    // {
    //   "title": "Deep Dive Days",
    //   "icon": "/assets/business_talks.svg",
    //   "time": "27.09 - 29.09",
    //   "content_highlighted": "From the 27th until the 29th of September, ",
    //   "content": "you will have a chance to listen to inspiring talks held by industry leaders on topics related to AI in the medical, environmental or social domain. The workshops will be held in hybrid starting at 19:00 CET.",
    //   "img": "/assets/road05.jpeg"
    // },
    /*{
      "title": "Makeathon",
      "icon": "/assets/makeathon.svg",
      "time": "30.09 - 02.10",
      "content_highlighted": "You have 48 hours to develop a proof of concept with your team. ",
      "content": "After pitching your results on Sunday afternoon, a jury of experts will select the winning teams for each track in the closing ceremony. Fantastic prizes are waiting!",
      "img": "/assets/road06.jpg"
    },*/
  ] 
}

export default function Roadmap(){
  const [roadIndex, setRoadIndex] = useState(0);

  function calculatePercentage(){
    return (roadIndex * 24) + 14 //(roadIndex * 16.6) + 10
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
          {/*<Image src={data.points[roadIndex].img} alt={data.points[roadIndex].title} layout="fill" objectFit='cover' />*/}
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
            {/*<Image src={point.img} alt={point.title} layout="fill" objectFit='cover' />*/}
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
/*

.TopContainer{
  width: 100%; 
  height: 260px;
  position: relative;
}
.CardTime {
  padding-top: 280px;
  text-align: right;
  padding-right: 40px;
}
.BottomContainer{
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px;
}

.LeftContainer{
  width: 50%;
  height: 800px;
  position: relative;
}

vs. 


.TopContainer{
  width: 100%; 
  height: 10px;
  position: relative;
}
.CardTime {
  padding-top: 80px;
  text-align: right;
  padding-right: 80px;
}
.BottomContainer{
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px;
  height: 75%
}
.LeftContainer{
  width: 50%;
  height: 600px;
  position: relative;
}

*/