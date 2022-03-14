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
    "participation": false,
    "reach": false,
    "contribution": false,
    "learing": false
  });

  function checkPageStatus(){
    if (Object.values(isPageValid).includes(false) == false){
      setIsAppValid(true);
    } 
  }

  return <div className={styles.ProfessionFormItem}>
    <div className={styles.Grid}>
      <div className={styles.Left}>
        <Headline2 normalContent={"Your motivation"} isDarkBackground/>
        <Paragraph1 normalContent={"Is a weekend project that connects several hundred students."} isDarkBackground/>
      </div>
      <div className={styles.Right}>
        <div className={styles.Content}>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="Why do you want to take part in the hack?*" 
              placeholderText="Enter text here ..."
              name="participation"
              onContentChange={(event)=>onInputChange(event)}
              value={data.participation}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.participation = value; setIsPageValid(obj); checkPageStatus();}}
              isRequired={true}
            />
          </div>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="What do you want to reach?*" 
              placeholderText="Enter text here ..."
              name="reach"
              onContentChange={(event)=>onInputChange(event)}
              value={data.reach}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.reach = value; setIsPageValid(obj); checkPageStatus();}}
              isRequired={true}
            />
          </div>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="What do you think you can contribute to?*" 
              placeholderText="Enter text here ..."
              name="contribution"
              onContentChange={(event)=>onInputChange(event)}
              value={data.contribution}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.contribution = value; setIsPageValid(obj); checkPageStatus();}}
              isRequired={true}
            />
          </div>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="What do you want to learn?*" 
              placeholderText="Enter text here ..."
              name="learing"
              onContentChange={(event)=>onInputChange(event)}
              value={data.learing}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.learing = value; setIsPageValid(obj); checkPageStatus();}}
              isRequired={true}
            />
          </div>
        </div>
      </div>  
    </div>
    <div className={styles.Grid}>
      <div className={styles.Left}>
        <Headline2 normalContent={"Code?"} isDarkBackground/>
        <Paragraph1 normalContent={"Is a weekend project that connects several hundred students."} isDarkBackground/>
      </div>
      <div className={styles.Right}>
        <div className={styles.Content}>
          <div className={styles.Half}>
            <BoolInput 
              headerText="Do you have programming skills?"
              name="codeSkill"
              onContentChange={(event)=>onInputChange(event)}
              value={data.codeSkill}
              isControlled={isControlled}
            />
          </div>
          <div className={styles.Half}>
            <TextInput 
              headerText="If yes – which skills do you have? (Do not be afraid is this does not apply to you)" 
              placeholderText="Enter skills here ..."
              name="codeSkillDescription"
              onContentChange={(event)=>onInputChange(event)}
              value={data.codeSkillDescription}
              isControlled={isControlled}
            />
          </div>
          <div className={styles.Half}>
            <BoolInput 
              headerText="Have you done a hackathon/makeathon before?"
              name="hackathon"
              onContentChange={(event)=>onInputChange(event)}
              value={data.hackathon}
              isControlled={isControlled}
            />
          </div>
          <div className={styles.Half}>
            <TextInput 
              headerText="If yes, which one?" 
              placeholderText="Talk about your experience here ..."
              name="hackathonList"
              onContentChange={(event)=>onInputChange(event)}
              value={data.hackathonList}
              isControlled={isControlled}
            />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.Grid}>
      <div className={styles.Left}>
        <Headline2 normalContent={"Your want to bring your own idea?"} isDarkBackground/>
        <Paragraph1 normalContent={"Is a weekend project that connects several hundred students."} isDarkBackground/>
      </div>
      <div className={styles.Right}>
        <div className={styles.Content}>
          <div className={styles.Full}>
            <TextInput 
              headerText="What is your idea?" 
              placeholderText="Talk about your idea here ..."
              name="idea"
              onContentChange={(event)=>onInputChange(event)}
              value={data.idea}
              isControlled={isControlled}
            />
          </div>
          <div className={styles.Half}>
            <BoolInput 
              headerText="Are you part of a team?"
              name="team"
              onContentChange={(event)=>onInputChange(event)}
              value={data.team}
              isControlled={isControlled}
            />
          </div>
          <div className={styles.Half}>
            <TextInput 
              headerText="If yes, please specify the exact names and Email addresses of your team mates." 
              placeholderText="List team mates here ..."
              name="mates"
              onContentChange={(event)=>onInputChange(event)}
              value={data.mates}
              isControlled={isControlled}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
}