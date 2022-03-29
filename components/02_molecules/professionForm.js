import styles from '../../styles/02_molecules/ProfessionForm.module.css'
import BoolInput from '../01_atoms/boolInput'
import DropDownInput from '../01_atoms/dropDownInput'
import Headline2 from '../01_atoms/fonts_headline2'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import TextAreaInput from '../01_atoms/textAreaInput'
import TextInput from '../01_atoms/textInput'
import { useState } from 'react'

export default function ProfessionForm({data, onInputChange, isControlled, setIsAppValid}){

  const [isPageValid, setIsPageValid] = useState({
    "test": true,
  });

  function checkPageStatus(){
    if (Object.values(isPageValid).includes(false) == false){
      setIsAppValid(true);
    } 
  }

  checkPageStatus();

  return <div className={styles.ProfessionFormItem}>
    <div className={styles.Grid}>
      <div className={styles.Left}>
        <Headline2 normalContent={"Your motivation"} isDarkBackground/>
        <Paragraph1 normalContent={""} isDarkBackground/>
      </div>
      <div className={styles.Right}>
        <div className={styles.Content}>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="What are your main reasons for participating in the Makeathon?" 
              placeholderText="Enter text here ..."
              name="whyParticipate"
              onContentChange={(event)=>onInputChange(event)}
              value={data.whyParticipate}
              isControlled={isControlled}
            />
          </div>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="What do you want to learn during the Makeathon?" 
              placeholderText="Enter text here ..."
              name="whatLearn"
              onContentChange={(event)=>onInputChange(event)}
              value={data.whatLearn}
              isControlled={isControlled}
            />
          </div>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="Where do you think you can contribute the most during the Makeathon?" 
              placeholderText="Enter text here ..."
              name="whatContribution"
              onContentChange={(event)=>onInputChange(event)}
              value={data.whatContribution}
              isControlled={isControlled}
            />
          </div>
        </div>
      </div>  
    </div>
    <div className={styles.Grid}>
      <div className={styles.Left}>
        <Headline2 normalContent={"Code?"} isDarkBackground/>
        <Paragraph1 normalContent={""} isDarkBackground/>
      </div>
      <div className={styles.Right}>
        <div className={styles.Content}>
          <div className={styles.Half}>
            <BoolInput 
              headerText="Have you previously participated in a Hackathon?"
              name="hackExperienceBool"
              onContentChange={(event)=>onInputChange(event)}
              value={data.hackExperience}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.hackExperienceBool = value; setIsPageValid(obj); checkPageStatus();}}
            />
          </div>
          <div className={styles.Half}>
            <TextInput 
              headerText="If yes, which one?" 
              placeholderText="Talk about your experience here ..."
              name="hackExperience"
              onContentChange={(event)=>onInputChange(event)}
              value={data.hackExperience}
              isControlled={isControlled}
            />
          </div>
          <div className={styles.Half}>
            <BoolInput 
              headerText="Do you have programming skills?"
              name="programmingSkillsBool"
              onContentChange={(event)=>onInputChange(event)}
              value={data.programmingSkillsBool}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.programmingSkillsBool = value; setIsPageValid(obj); checkPageStatus();}}

            />
          </div>
          <div className={styles.Half}>
            <TextInput 
              headerText="If yes – which skills do you have? (Do not be afraid is this does not apply to you)" 
              placeholderText="Enter skills here ..."
              name="programmingSkills"
              onContentChange={(event)=>onInputChange(event)}
              value={data.programmingSkills}
              isControlled={isControlled}
            />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.Grid}>
      <div className={styles.Left}>
        <Headline2 normalContent={"Your want to bring your own idea?"} isDarkBackground/>
        <Paragraph1 normalContent={""} isDarkBackground/>
      </div>
      <div className={styles.Right}>
        <div className={styles.Content}>
          <div className={styles.Half}>
            <BoolInput 
              headerText="Are you part of a team?"
              name="teamDetailsBool"
              onContentChange={(event)=>onInputChange(event)}
              value={data.teamDetailsBool}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.teamDetailsBool = value; setIsPageValid(obj); checkPageStatus();}}
            />
          </div>
          <div className={styles.Half}>
            <TextInput 
              headerText="If yes, please specify the exact names and Email addresses of your team mates." 
              placeholderText="List team mates here ..."
              name="teamDetails"
              onContentChange={(event)=>onInputChange(event)}
              value={data.teamDetails}
              isControlled={isControlled}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
}