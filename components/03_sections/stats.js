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
// This site shows some statistics about the application.




//import VerticalBarChart from '../charts/verticalBar-2';
import VerticalBarChart from '../charts/verticalBar';
import DoughnutChart from '../charts/doughnut';
import Nationalities from '../charts/Nationalities';
import LineChart from '../charts/line';


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

//import ApplicationDataTable from '../components/dataTable';

//import Card from '@mui/material/Card';


const data = {
  "chapter_title": "Q&A",
  "chapter_number": "06",
  "title": "Do you have any ",
  "title_highlighted": "questions?", 
  "paragraph_highlighted": "As the largest student-organized Makeathon in Germany, ",
  "paragraph": "you can expect numerous exciting speakers, big-name companies, cool prizes, and excellent opportunities to meet like-minded international students.",
  "questions": [
    {
      "question": "What is a Makeathon?",
      "answer": "A makeathon is an exciting event that brings hundreds of like-minded people from different backgrounds (you don’t need to be a tech person!) to collaborate on building new and innovative products!"
    },
    {
      "question": "Why should I attend?",
      "answer": "There are many reasons to attend our Makeathon! During our Makeathon, you will have a chance to participate in many extraordinary learning opportunities, listen to our exciting speakers, and meet new passionate people! Everybody will find something for themselves and enjoy the Makeathon to the fullest with many other cool people! Not to forget, you will also have a chance to win fabulous prizes!"
    },
    {
      "question": "What is the cost?",
      "answer": "Participation in the TUM.ai Makeathon is completely free! Make sure to apply during the application period to give yourself a chance to experience everything our Makeathon has to offer! "
    },
    {
      "question": "What if I have more questions?",
      "answer": "If you still have questions, you can email makeathon@tum-ai.com, and we will be happy to assist you!"
    },
    {
      "question": "What events will be held?",
      "answer": "The TUM.ai Makeathon will provide you with various cool events to attend! You will have an opportunity to participate in exciting workshops and listen to extraordinary speakers. More details on the events are coming soon! Make sure to stay on the lookout for our full schedule!"
    },
    {
      "question": "What are the prizes?",
      "answer": "We offer many attractive prizes to our winners! Examples from previous years include monetary prizes, fast-track to TUM.ai membership, and many many more!"
    },
    {
      "question": "Is TUM.ai Makeathon in-person or virtual?",
      "answer": "Due to the ongoing COVID-19 pandemic, all the events of the April Makeathon are going to be held virtual. "
    },
    {
      "question": "Can we use hardware?",
      "answer": "As the TUM.ai Makeathon is going to be held online, we will not be able to distribute any hardware. We are looking for innovative digital products that can be easily presented to our jury in a virtual form. "
    },
    {
      "question": "What if I don’t have a team or idea?",
      "answer": "You don’t need to worry about having a team or idea before the Makeathon. On (date) we are going to organize a team-finding event where you can find your teammates and start brainstorming the ideas! "
    },
    {
      "question": "What are the Makeathon tracks?",
      "answer": "For our upcoming Makeathon, we prepared three tracks: Education, MedTech, and Environment. "
    },
    {
      "question": "What can I build?",
      "answer": "We are looking for AI-related ideas. Other than that - sky is the limit! Use your imagination to create new innovative AI-based products and surprise our jury with your creativity! "
    },
    {
      "question": "How will tracks and prizes work?",
      "answer": "In the previous years we offered prizes to the best teams overall. However, for this year we are hoping to redesign our pricing scheme to include track specific prizes. Stay on the lookout for more information. You can expect many very attractive prizes! "
    },
    {
      "question": "What skills do I need to participate?",
      "answer": "You don’t need any skills to participate! We are going to provide you with workshops on many areas, so all you need is a motivation to learn and create!"
    },
    {
      "question": "What is the application deadline?",
      "answer": "The application deadline is 06.04! Make sure you don’t miss it!"
    },
    {
      "question": "Who can participate?",
      "answer": "Everyone can apply to participate in our Makeathon! It doesn’t matter if you are a student or a professional. As long as you have the motivation to build something cool, you are encouraged to apply! After the application deadline (here, add the deadline when available), our team is going to carefully review the applications and select a diverse pool of motivated applicants to participate in the event (our number of participants is unfortunately limited)."
    },
  ]
}


const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  maintainAspectRatio: true ,
};


const data2 = {
  labels: ['AI/Tech', 'Buisness', 'Domain'],
  datasets: [
    {
      label: '# of Votes',
      data: [19, 7, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


const genderData = {
  gender: {
    Male: 20,
    Female: 10,
    Diverse: 5,
  },
};

//const nationality = {
  //nationality: {
    //'German': 20,
    //'British': 15,
    //'American': 10,
    //'Swiss': 10,
    //'Austrian': 15,
    //'French': 15,
  //},
//};





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
    areaOfExpertise: {
  'AI': 5,
  'Domain': 1,
  'Business': 6,
    }   
};


const daywise_apps = {
  daywise: {
    "2019-05-28": 3,
    "2019-05-29": 4,
    "2019-05-30": 3,
    "2019-05-31": 2,
    "2019-06-01": 2,
    "2019-06-02": 1,
  },
};



          //<div className="col-lg-3 col-sm-3">
                //<h6> Genders </h6>
                //<DoughnutChart genderData={genderData}></DoughnutChart>

          //</div>


          //<div className="col-lg-3 col-sm-3">
                //<h6> Applications per Day </h6>
                //<LineChart daywise_apps={daywise_apps}></LineChart>

          //</div>




export default function Stats({ data2 }){
  const breakpointColumnsObj = {
    default: 2,
    1100: 1
  };
  const [questionIndex, setQuestionIndex] = useState(undefined);

  return <div className={styles.FaqsItem}>


          <div className="col-lg-3 col-sm-3">
                <h6> Nationalities </h6>
                <Nationalities nationalities={nationality}></Nationalities>

          </div>




  </div>
}

export async function getStaticProps() {
  // Call an external API endpoint to get data
  // You can use any data fetching library
  //const res = await fetch('http://127.0.0.1:8000/api/appform/fetch-forms');
  //const res = await fetch('https://tumai-application.herokuapp.com/api/appform/fetch-forms');
  const res = await fetch('https://tum-ai-backends-dev.herokuapp.com/makeathon/fetch-applications');
  //const res = await fetch('https://tum-ai-backends-dev.herokuapp.com/membership/fetch-applications');
  // Print it to the console.
  //console.log(res);

  //const res = await fetch('http://127.0.0.1:5000/api/application/1877477104329612121');
  const data2 = await res.json();

  //const res_lang = await fetch('http://127.0.0.1:8000/api/appform/languages');
  //const languages = await res_lang.json();
  //const res_gender = await fetch('http://127.0.0.1:8000/api/appform/gender');
  //const gender = await res_gender.json();
  //const res_nat = await fetch('http://127.0.0.1:8000/api/appform/nationality');
  //const nationality = await res_nat.json();
  //const res_day = await fetch('http://127.0.0.1:8000/api/appform/daywise');
  //const daywise_apps = await res_day.json();

  //return {
    //props: {
      //data,
      //gender,
      //languages,
      //nationality,
      //daywise_apps
    //}
  //};
  return {
    props: {
      data
    }
  };
}
