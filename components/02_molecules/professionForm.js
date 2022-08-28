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
    whyParticipate: false,
    whatLearn: false,
    whatContribution: false,
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
              isControlled={isControlled}
              setIsValid={(value) => {
                let obj = isPageValid;
                obj.whyParticipate = value;
                setIsPageValid(obj);
                checkPageStatus();
              }}
              isRequired={false}
            />
          </div>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="What do you want to learn during the Makeathon?" 
              placeholderText="Enter text here ..."
              name="whatLearn"
              onContentChange={(event)=>onInputChange(event)}
              isControlled={isControlled}
              setIsValid={(value) => {
                let obj = isPageValid;
                obj.whatLearn = value;
                setIsPageValid(obj);
                checkPageStatus();
              }}
              isRequired={false}
            />
          </div>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="Where do you think you can contribute the most during the Makeathon?" 
              placeholderText="Enter text here ..."
              name="whatContribution"
              onContentChange={(event)=>onInputChange(event)}
              isControlled={isControlled}
              setIsValid={(value) => {
                let obj = isPageValid;
                obj.whatContribution = value;
                setIsPageValid(obj);
                checkPageStatus();
              }}
              isRequired={false}
            />
          </div>
        </div>
      </div>  
    </div>
  </div>
}