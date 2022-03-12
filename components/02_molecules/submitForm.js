import styles from '../../styles/02_molecules/SubmitForm.module.css'
import BoolInput from '../01_atoms/boolInput'
import DateInput from '../01_atoms/dateInput'
import DropDownInput from '../01_atoms/dropDownInput'
import Headline2 from '../01_atoms/fonts_headline2'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import TextAreaInput from '../01_atoms/textAreaInput'
import TextInput from '../01_atoms/textInput'

export default function SubmitForm({data, onInputChange}){
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
              headerText="How did you hear about the hackathon?"
              name="hack"
              onContentChange={(event)=>onInputChange(event)}
            >
              <option value="website">Website</option>
              <option value="friends">Friends</option>
              <option value="work">Work</option>
              <option value="university">University</option>
              <option value="other organisations">Other organisations</option>
            </DropDownInput>
          </div>
          <div className={styles.Full}>
            <BoolInput 
              headerText="Would you like to become a part of TUM.ai in future?"
              name="future"
              onContentChange={(event)=>onInputChange(event)}
            />
          </div>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="Is there anything else you would like to share?" 
              placeholderText="Enter text here ..."
              name="share"
              onContentChange={(event)=>onInputChange(event)}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
}