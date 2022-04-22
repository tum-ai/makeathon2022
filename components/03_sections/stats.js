import React from 'react';
import styles from '../../styles/03_sections/Stats.module.css'
import ChapterBar from '../02_molecules/chapterBar'
import Headline1 from '../01_atoms/fonts_headline1'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import Paragraph2 from '../01_atoms/fonts_paragraph2'
import Masonry from 'react-masonry-css'
import Image from 'next/image'


import { Bar } from 'react-chartjs-2';

import { useState } from 'react'
import VerticalBarChart from '../charts/verticalBar';
import DoughnutChart from '../charts/doughnut';
import Nationalities from '../charts/Nationalities';
import LineChart from '../charts/line';



const nationality = {
  nationality: {
  'Germany': 136,
  'Australia': 1,
  'Viet Nam': 3,
  'Argentina': 4,
  'Greece': 1,
  'Tajikistan': 1,
  'India': 64,
  'Turkey': 32,
  'Morocco': 1,
  'Tunisia': 10,
  'Brazil': 5,
  'Kyrgyzstan': 1,
  'Indonesia': 7,
  'Ecuador': 1,
  'Pakistan': 9,
  'Italy': 7,
  'Ghana': 2,
  'Russian Federation': 9,
  'Poland': 3,
  'Egypt': 5,
  'France': 2,
  'Luxembourg': 1,
  'Albania': 4,
  'Ukraine': 2,
  'Macedonia, The Former Yugoslav Republic of': 24,
  'Iraq': 1,
  'Nigeria': 6,
  'Bulgaria': 3,
  'Costa Rica': 1,
  'Colombia': 3,
  'Chile': 3,
  'Philippines': 2,
  'China': 8,
  'Jordan': 2,
  'Lebanon': 1,
  'Kazakhstan': 1,
  'Uganda': 1,
  'United States': 1,
  'Spain': 4,
  'Bosnia and Herzegovina': 2,
  'Hungary': 2,
  'Serbia and Montenegro': 1,
  'Japan': 1,
  'Mauritius': 1,
  'Malaysia': 1,
  'Czech Republic': 1,
  'Croatia': 1,
  'Afghanistan': 1,
  'Austria': 7,
  'Uzbekistan': 2,
  'Korea, Republic of': 2,
  'Romania': 1,
  'Nepal': 1,
  'Belarus': 2,
  'Algeria': 1,
  'Ethiopia': 1,
  'Netherlands': 1,
  }
};

const areaOfExpertise = {
    nationality: {
  'AI': 144,
  'Business': 82,
  'IT': 110,
  'Domain': 48,
  'Design/UX': 13,
  '': 4,
    }   
};

export default function Stats(){
  const breakpointColumnsObj = {
    default: 2,
    1100: 1
  };
  const [questionIndex, setQuestionIndex] = useState(undefined);

  return <div className={styles.StatsItem}>
          <h3 style={{marginLeft: "30%", marginBottom: "50px"}}> Some Stats about the applicants for the upcoming makeathon</h3>
         <div style={{marginLeft: "10%"}} className={styles.Grid}> 
         <div className={styles.LeftContainer}>
                <h6> Nationalities </h6>
                <Nationalities nationalities={nationality}></Nationalities>
          </div>
          <div className={styles.RightContainer}>
                <h6> Area of Expertise </h6>
                <Nationalities nationalities={areaOfExpertise}></Nationalities>
          </div>
         </div>
  </div>
}

export async function getStaticProps() {
  const res = await fetch('https://tum-ai-backends-dev.herokuapp.com/makeathon/fetch-applications');
  return {
    props: {
      data
    }
  };
}
