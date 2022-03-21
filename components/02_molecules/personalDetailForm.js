import styles from '../../styles/02_molecules/PersonalDetailForm.module.css'
import DateInput from '../01_atoms/dateInput'
import DropDownInput from '../01_atoms/dropDownInput'
import Headline2 from '../01_atoms/fonts_headline2'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import TextInput from '../01_atoms/textInput'
import TextAreaInput from '../01_atoms/textAreaInput'
import BoolInput from '../01_atoms/boolInput'
import { useState } from 'react'

export default function PersonalDetailForm({data, onInputChange, isControlled, setIsAppValid}){

  const [isPageValid, setIsPageValid] = useState({
    "firstname": false,
    "lastname": false,
    "email": false,
    "nationality": false,
    "placeOfResidence": false,
    "timeZone": false,
    "areaOfExpertise": false,
    "dateOfBirth": false,
  });

  function checkPageStatus(){
    if (Object.values(isPageValid).includes(false) == false){
      setIsAppValid(true);
    } 
  }

  return <div className={styles.PersonalDetailFormItem}>
    <div className={styles.Grid}>
      <div className={styles.Left}>
        <Headline2 normalContent={"Personal Information"} isDarkBackground/>
        <Paragraph1 normalContent={"Is a weekend project that connects several hundred students."} isDarkBackground/>
      </div>
      <div className={styles.Right}>
        <div className={styles.Content}>
          <div className={styles.Half}>
            <TextInput 
              headerText="First name*"
              placeholderText="Enter first name ..."
              withIcon={false}
              name="firstname"
              onContentChange={(event)=>onInputChange(event)}
              value={data.firstname}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.firstname = value; setIsPageValid(obj); checkPageStatus();}}
              isRequired={true}
            />
          </div>
          <div className={styles.Half}>
            <TextInput 
              headerText="Last name*"
              placeholderText="Enter last name ..."
              withIcon={false}
              name="lastname"
              onContentChange={(event)=>onInputChange(event)}
              value={data.lastname}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.lastname = value; setIsPageValid(obj); checkPageStatus();}}
              isRequired={true}
            />
          </div>
          <div className={styles.Full}>
            <TextInput 
              headerText="Email address*"
              placeholderText="Enter your email adress ..."
              withIcon={true}
              iconPath="/assets/application/email.svg"
              name="email"
              onContentChange={(event)=>onInputChange(event)}
              value={data.email}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.email = value; setIsPageValid(obj); checkPageStatus();}}
              isRequired={true}
            />
          </div>
          <div className={styles.Full}>
            <TextInput 
              headerText="Phone"
              placeholderText="Enter your phone number ..."
              name="phone"
              onContentChange={(event)=>onInputChange(event)}
              value={data.phone}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.phone = value; setIsPageValid(obj); checkPageStatus();}}
            />
          </div>
          <div className={styles.Half}>
            <DateInput 
              headerText="Date of birth*" 
              placeholderText="Select date ..." 
              name="dateOfBirth" 
              onContentChange={(event)=>onInputChange(event)}
              value={data.dateOfBirth}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.dateOfBirth = value; setIsPageValid(obj); checkPageStatus();}}
              isRequired={true}
            />
          </div>
          <div className={styles.Half}>
            <TextInput 
              headerText="Nationality*"
              placeholderText="Where are you from?"
              withIcon={true}
              iconPath="/assets/application/land.svg"
              name="nationality"
              onContentChange={(event)=>onInputChange(event)}
              value={data.nationality}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.nationality = value; setIsPageValid(obj); checkPageStatus();}}
              isRequired={true}
            />
          </div>
          <div className={styles.Full}>
            <TextInput 
              headerText="Place of Residence at the time of the Makeathon?*"
              placeholderText="Enter place here..."
              name="placeOfResidence"
              onContentChange={(event)=>onInputChange(event)}
              value={data.placeOfResidence}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.placeOfResidence = value; setIsPageValid(obj); checkPageStatus();}}
              isRequired={true}
            />
          </div>
          <div className={styles.Half}>
            <DropDownInput 
              headerText="Time Zone*"
              withIcon={false}
              name="timeZone"
              onContentChange={(event)=>onInputChange(event)}
              value={data.timeZone}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.timeZone = value; setIsPageValid(obj); checkPageStatus();}}
              isRequired={true}
            >
              <option value="">Choose ...</option>
              <option value="CET UTC+1">🇩🇪  Berlin, Germany</option>
              <option value="MSK UTC+3">🇷🇺 Moscow, Russian Federation</option>
              <option value="GST UTC+4">🇦🇪 Dubai, United Arab Emirates</option>
              <option value="IST UTC+5:30">🇮🇳 Mumbai, India</option>
              <option value="CST UTC+8">🇨🇳 Beijing, China</option>
              <option value="JST UTC+9">🇯🇵 Tokyo, Japan</option>
              <option value="AEDT UTC+11">🇦🇺 Sydney, Australia</option>
              <option value="NZDT UTC+13">🇳🇿 Auckland, New Zealand</option>
              <option value="PST UTC-8">🇺🇸 Pacific Time (US)</option>
              <option value="MST UTC-7">🇺🇸 Mountain Time (US)</option>
              <option value="CST UTC-6">🇺🇸 Central Time (US)</option>
              <option value="EST UTC-5">🇺🇸 Eastern Time (US)</option>
              <option value="BRT UTC-3">🇧🇷 Rio de Janeiro, Brazil</option>
              <option value="GMT">🇬🇧 London, United Kingdom</option>
            </DropDownInput>
          </div>
          <div className={styles.Full}>
            <BoolInput 
              headerText="I accept that my name and e-mail will be forwarded to OpenAI in order to create an account for accessing Codex and GPT-3."
              name="openAI"
              onContentChange={(event)=>onInputChange(event)}
              value={data.openAI}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.openAI = value; setIsPageValid(obj); checkPageStatus();}}
              isRequired={true}
            />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.Grid}>
      <div className={styles.Left}>
        <Headline2 normalContent={"Digital Appearence"} isDarkBackground/>
        <Paragraph1 normalContent={"Is a weekend project that connects several hundred students."} isDarkBackground/>
      </div>
      <div className={styles.Right}>
        <div className={styles.Content}>
          <div className={styles.Full}>
            <TextInput 
              headerText="LinkedIn"
              placeholderText="Enter your LinkedIn url ..."
              withIcon={true}
              iconPath="/assets/application/linkedIn.svg"
              name="linkedIn"
              onContentChange={(event)=>onInputChange(event)}
              value={data.linkedIn}
              isControlled={isControlled}
              isRequired={false}
            />
          </div>
          <div className={styles.Full}>
            <TextInput 
              headerText="Website"
              placeholderText="Enter your website url ..."
              withIcon={true}
              iconPath="/assets/application/website.svg"
              name="personalWebsite"
              onContentChange={(event)=>onInputChange(event)}
              value={data.personalWebsite}
              isControlled={isControlled}
              isRequired={false}
            />
          </div>
          <div className={styles.Full}>
            <TextInput 
              headerText="Github"
              placeholderText="Enter your Github url ..."
              withIcon={true}
              iconPath="/assets/application/github.svg"
              name="github"
              onContentChange={(event)=>onInputChange(event)}
              value={data.github}
              isControlled={isControlled}
              isRequired={false}
              setIsValid={(value)=>{let obj = isPageValid; obj.mailForward = value; setIsPageValid(obj); checkPageStatus();}}
            />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.Grid}>
    <div className={styles.Left}>
        <Headline2 normalContent={"Your background"} isDarkBackground/>
        <Paragraph1 normalContent={"Is a weekend project that connects several hundred students."} isDarkBackground/>
      </div>
      <div className={styles.Right}>
        <div className={styles.Content}>
        <div className={styles.Full}>
            <BoolInput 
              headerText="Are you currently pursuing or did you pursue an academic or professional degree?" 
              name="universityBool"
              onContentChange={(event)=>onInputChange(event)}
              value={data.universityBool}
              isControlled={isControlled}
            />
          </div>
          <div className={styles.Full}>
            <TextInput 
              headerText="If yes, which university are you studying at?" 
              placeholderText="Name of you university ..."
              name="university"
              withIcon
              iconPath="/assets/application/school.svg"
              onContentChange={(event)=>onInputChange(event)}
              value={data.university}
              isControlled={isControlled}
              setIsValid={(value)=>setIsPageValid(value)}
              isRequired={false}
            />
          </div>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="What describes you best?" 
              placeholderText="Enter text here ..."
              name="bestDescription"
              onContentChange={(event)=>onInputChange(event)}
              value={data.bestDescription}
              isControlled={isControlled}
            />
          </div>
          <div className={styles.Full}>
            <DropDownInput
              headerText="Which field do you think you are expert in?*"
              name="areaOfExpertise"
              onContentChange={(event)=>onInputChange(event)}
              value={data.areaOfExpertise}
              isControlled={isControlled}
              setIsValid={(value)=>{let obj = isPageValid; obj.areaOfExpertise = value; setIsPageValid(obj); checkPageStatus();}}
              isRequired={true}
            >
              <option value="">Choose ...</option>
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
  </div>
}