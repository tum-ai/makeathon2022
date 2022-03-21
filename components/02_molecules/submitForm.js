import styles from '../../styles/02_molecules/SubmitForm.module.css'
import BoolInput from '../01_atoms/boolInput'
import DropDownInput from '../01_atoms/dropDownInput'
import Headline2 from '../01_atoms/fonts_headline2'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import TextAreaInput from '../01_atoms/textAreaInput'
import { useState } from 'react'

export default function SubmitForm({data, onInputChange, isControlled, setIsAppValid}){

  const [isPageValid, setIsPageValid] = useState({
    "hackAwareness": false,
  });

  function checkPageStatus(){
    if (Object.values(isPageValid).includes(false) == false){
      setIsAppValid(true);
    } 
  }

  return <div className={styles.SubmitFormItem}>
    <div className={styles.Grid}>
      <div className={styles.Left}>
        <Headline2 normalContent={"How did you get here?"} isDarkBackground/>
        <Paragraph1 normalContent={"Is a weekend project that connects several hundred students."} isDarkBackground/>
      </div>
      <div className={styles.Right}>
        <div className={styles.Content}>
          <div className={styles.Full}>
            <DropDownInput
              headerText="How have you heard about the Makeathon?*"
              name="hackAwareness"
              onContentChange={(event)=>onInputChange(event)}
              value={data.hackAwareness}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.hackAwareness = value; setIsPageValid(obj); checkPageStatus();}}
              isRequired={true}
            >
              <option value="">Choose ...</option>
              <option value="website">Website</option>
              <option value="friends">Friends</option>
              <option value="linkedIn">LinkedIn</option>
              <option value="work">Work</option>
              <option value="university">University</option>
              <option value="other student initiatives">Other student initiatives</option>
              <option value="other">Other</option>
            </DropDownInput>
          </div>
          <div className={styles.Full}>
            <BoolInput 
              headerText="Would you like to become a part of TUM.ai in future?"
              name="futureMember"
              onContentChange={(event)=>onInputChange(event)}
              value={data.futureMember}
              isControlled={isControlled}
            />
          </div>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="Is there anything else you would like to share?" 
              placeholderText="Enter text here ..."
              name="additionalInfo"
              onContentChange={(event)=>onInputChange(event)}
              value={data.additionalInfo}
              isControlled={isControlled}
            />
          </div>
          <div className={styles.Full}>
            <BoolInput 
              headerText="I hereby confirm that I will  participate for the full 48 hours of the Makeathon. (22-24.04)*"
              name="confirmation"
              onContentChange={(event)=>onInputChange(event)}
              value={data.confirmation}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.confirmation = value; setIsPageValid(obj); checkPageStatus();}}
              isRequired={true}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
}