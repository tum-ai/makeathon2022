import styles from '../../styles/03_sections/ApplicationForm.module.css'
import { useState } from 'react'

import TextInput from '../01_atoms/textInput';
import DropDownInput from '../01_atoms/dropDownInput';
import TextAreaInput from '../01_atoms/textAreaInput';
import BoolInput from '../01_atoms/boolInput';
import ApplyHeader from '../02_molecules/applyHeader';
import ApplyFooter from '../02_molecules/applyFooter';
import PersonalDetailForm from '../02_molecules/personalDetailForm';
import ProfessionForm from '../02_molecules/professionForm';
import SubmitForm from '../02_molecules/submitForm';
import Image from 'next/image';
import Button from '../01_atoms/button';

export default function ApplicationForm(){
  const [applicationState,changeApplicationState] = useState(0);
  const [applicationData,setApplicationData] = useState({
    "personal": {
      "first_name": "",
      "last_name": "",
      "email": "",
      "nationality": "",
      "time_zone": "",
      "date_of_birth": ""
    },
    "digital_appearence": {
      "linkedIn": "",
      "website": "",
      "github": ""
    },
    "motivation": {
      "why_participate": "",
      "goal": "",
      "contribution": "",
      "learn": ""
    },
    "background": {
      "degree_text": "",
      "university": "",
      "personal_description": "",
      "expert": ""
    },
    "code": {
      "coding": "",
      "skills": "",
      "not_first_hackathon": "",
      "hackathons_text": ""
    },
    "idea": {
      "description": "",
      "have_a_team": "",
      "mates": ""
    },
    "meta": {
      "how_u_hear": "",
      "become_member": "",
      "want_share": ""
    }
  });

  switch(applicationState){
    case 0:
       return <div className={styles.ApplicationFormItem}>
        <ApplyHeader title="Details about " highlighted_title="you."/>
        <PersonalDetailForm 
          onFirstNameChange={(value)=>{let obj = applicationData; obj.personal.first_name = value; setApplicationData(obj)}}
          onLastNameChange={(value)=>{let obj = applicationData; obj.personal.last_name = value; setApplicationData(obj)}}
          onEmailChange={(value)=>{let obj = applicationData; obj.personal.email = value; setApplicationData(obj)}}
          onLandChange={(value)=>{let obj = applicationData; obj.personal.nationality = value; setApplicationData(obj)}}
          onTZChange={(value)=>{let obj = applicationData; obj.personal.time_zone = value; setApplicationData(obj)}}
          onBirthChange={(value)=>{let obj = applicationData; obj.personal.date_of_birth = value; setApplicationData(obj)}}
          onLinkedInChange={(value)=>{let obj = applicationData; obj.digital_appearence.linkedIn = value; setApplicationData(obj)}}
          onWebsiteChange={(value)=>{let obj = applicationData; obj.digital_appearence.website = value; setApplicationData(obj)}}
          onGithubChange={(value)=>{let obj = applicationData; obj.digital_appearence.github = value; setApplicationData(obj)}}
          onParticipationChange={(value)=>{let obj = applicationData; obj.motivation.why_participate = value; setApplicationData(obj)}}
          onReachChange={(value)=>{let obj = applicationData; obj.motivation.goal = value; setApplicationData(obj)}}
          onContributionChange={(value)=>{let obj = applicationData; obj.motivation.contribution = value; setApplicationData(obj)}}
          onLearningChange={(value)=>{let obj = applicationData; obj.motivation.learn = value; setApplicationData(obj)}}
        />
        <ApplyFooter 
          nextBtnText="Next" 
          stateNumber={applicationState + 1} 
          nextPage={()=>changeApplicationState(applicationState + 1)}
          prevPage={()=>changeApplicationState(applicationState - 1)}
        />
        </div>
      break;    
    case 1:
      return <div className={styles.ApplicationFormItem}>
        <ApplyHeader title="Let's talk about your " highlighted_title="profession."/>
        <ProfessionForm 
          onAcademicChange={(value)=>{let obj = applicationData; obj.background.degree_text = value; setApplicationData(obj)}}
          onUniversityChange={(value)=>{let obj = applicationData; obj.background.university = value; setApplicationData(obj)}}
          onDescriptionChange={(value)=>{let obj = applicationData; obj.background.personal_description = value; setApplicationData(obj)}}
          onExpertChange={(value)=>{let obj = applicationData; obj.background.expert = value; setApplicationData(obj)}}
          onCodeSkillChange={(value)=>{let obj = applicationData; obj.code.coding = value; setApplicationData(obj)}}
          onCodeSkillDescriptionChange={(value)=>{let obj = applicationData; obj.code.skills = value; setApplicationData(obj)}}
          onHackathonChange={(value)=>{let obj = applicationData; obj.code.not_first_hackathon = value; setApplicationData(obj)}}
          onHackathonListChange={(value)=>{let obj = applicationData; obj.code.hackathons_text = value; setApplicationData(obj)}}
          onIdeaChange={(value)=>{let obj = applicationData; obj.idea.description = value; setApplicationData(obj)}}
          onTeamChange={(value)=>{let obj = applicationData; obj.idea.have_a_team = value; setApplicationData(obj)}}
          onMatesChange={(value)=>{let obj = applicationData; obj.idea.mates = value; setApplicationData(obj)}}
        />
        <ApplyFooter 
          nextBtnText="Next" 
          prevBtnText="Prev" 
          stateNumber={applicationState + 1} 
          nextPage={()=>changeApplicationState(applicationState + 1)}
          prevPage={()=>changeApplicationState(applicationState - 1)}
        />
       </div>
      break;    
    case 2:
      return <div className={styles.ApplicationFormItem}>
        <ApplyHeader title="Almost " highlighted_title="ready."/>
        <SubmitForm 
          onHackChange={(value)=>{let obj = applicationData; obj.meta.how_u_hear = value; setApplicationData(obj)}}
          onFutureChange={(value)=>{let obj = applicationData; obj.meta.become_member = value; setApplicationData(obj)}}
          onShareChange={(value)=>{let obj = applicationData; obj.meta.want_share = value; setApplicationData(obj)}}
        />
        <ApplyFooter 
          nextBtnText="Submit" 
          prevBtnText="Prev" 
          stateNumber={applicationState + 1} 
          nextPage={()=>changeApplicationState(applicationState + 1)}
          prevPage={()=>changeApplicationState(applicationState - 1)}
        />
       </div>
      break;    
    case 3:
      return <div className={styles.ApplicationFormItem}>
        <div className={styles.Wrapper}>
          <div className={styles.Spinner}>
            <Image src="/assets/application/spinner.gif" alt="spinner" layout="fill" objectFit="cover" />
          </div>
        </div>
       </div>
      break;   
    case 4:
      return <div className={styles.ApplicationFormItem}>
        <ApplyHeader title="You did it." highlighted_title=" Congratulations 🎉"/>
        <div className={styles.Grid}>
          <div className={styles.BtnContainer}>
            <Button link="/" content="Back to Makeathon website" isDarkBackground/>
          </div>
        </div>
        </div>
      break;   
    default:
      return <div className={styles.ApplicationFormItem}>

       </div>
      break; 
  }
  return <div className={styles.ApplicationFormItem}>

  </div>
}