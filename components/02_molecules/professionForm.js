import styles from '../../styles/02_molecules/ProfessionForm.module.css'
import BoolInput from '../01_atoms/boolInput'
import DateInput from '../01_atoms/dateInput'
import DropDownInput from '../01_atoms/dropDownInput'
import Headline2 from '../01_atoms/fonts_headline2'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import TextAreaInput from '../01_atoms/textAreaInput'
import TextInput from '../01_atoms/textInput'

export default function ProfessionForm(){
  return <div className={styles.ProfessionFormItem}>
    <div className={styles.Grid}>
      <div className={styles.Left}>
        <Headline2 normalContent={"Your background"} isDarkBackground/>
        <Paragraph1 normalContent={"Is a weekend project that connects several hundred students."} isDarkBackground/>
      </div>
      <div className={styles.Right}>
        <div className={styles.Content}>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="Are you currently pursuing or did you pursue an academic or professional degree ?" 
              placeholderText="Enter text here ..."
              name="academic"
            />
          </div>
          <div className={styles.Full}>
            <TextInput 
              headerText="Which University you are studying at?" 
              placeholderText="Name of you university ..."
              name="university"
              withIcon
              iconPath="/assets/application/school.svg"
            />
          </div>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="What describes you best?" 
              placeholderText="Enter text here ..."
              name="description"
            />
          </div>
          <div className={styles.Full}>
            <DropDownInput
              headerText="Which field do you think you are expert in?"
              name="expert"
            >
              <option value="AI">Artificial Intelligence</option>
              <option value="IT">IT</option>
              <option value="Business">Business</option>
              <option value="Design/UX">Design/UX</option>
              <option value="Domain">A specific Domain</option>
            </DropDownInput>
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
            />
          </div>
          <div className={styles.Half}>
            <TextInput 
              headerText="If yes – which skills do you have? (Do not be afraid is this does not apply to you)" 
              placeholderText="Enter skills here ..."
              name="codeSkillDescription"
            />
          </div>
          <div className={styles.Half}>
            <BoolInput 
              headerText="Have you done a hackathon/makeathon before?"
              name="hackathon"
            />
          </div>
          <div className={styles.Half}>
            <TextInput 
              headerText="If yes, which one?" 
              placeholderText="Talk about your experience here ..."
              name="hackathonList"
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
            />
          </div>
          <div className={styles.Half}>
            <BoolInput 
              headerText="Are you part of a team?"
              name="team"
            />
          </div>
          <div className={styles.Half}>
            <TextInput 
              headerText="If yes, please specify the exact names and Email addresses of your team mates." 
              placeholderText="List team mates here ..."
              name="mates"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
}