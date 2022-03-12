import styles from '../../styles/02_molecules/PersonalDetailForm.module.css'
import DateInput from '../01_atoms/dateInput'
import DropDownInput from '../01_atoms/dropDownInput'
import Headline2 from '../01_atoms/fonts_headline2'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import TextInput from '../01_atoms/textInput'
import TextAreaInput from '../01_atoms/textAreaInput'

export default function PersonalDetailForm({data, onFirstNameChange, onLastNameChange, onEmailChange, onLandChange, onTZChange, onBirthChange, onLinkedInChange, onWebsiteChange, onGithubChange, onParticipationChange, onReachChange, onContributionChange, onLearningChange}){
  console.log(data);
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
              headerText="First name"
              placeholderText="Enter first name ..."
              withIcon={false}
              name="fname"
              onContentChange={(value)=>onFirstNameChange(value)}
              value={data.personal.first_name}
            />
          </div>
          <div className={styles.Half}>
            <TextInput 
              headerText="Last name"
              placeholderText="Enter last name ..."
              withIcon={false}
              name="lname"
              onContentChange={(value)=>onLastNameChange(value)}
            />
          </div>
          <div className={styles.Full}>
            <TextInput 
              headerText="Email"
              placeholderText="Enter your email adress ..."
              withIcon={true}
              iconPath="/assets/application/email.svg"
              name="email"
              onContentChange={(value)=>onEmailChange(value)}
            />
          </div>
          <div className={styles.Half}>
            <TextInput 
              headerText="Nationality"
              placeholderText="Where are you from?"
              withIcon={true}
              iconPath="/assets/application/land.svg"
              name="land"
              onContentChange={(value)=>onLandChange(value)}
            />
          </div>
          <div className={styles.Half}>
            <DropDownInput 
              headerText="Time Zone"
              withIcon={false}
              name="timeZone"
              onContentChange={(value)=>onTZChange(value)}
            >
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
          <div className={styles.Half}>
            <DateInput headerText="Date of birth" placeholderText="Select date ..." name="birthday" onContentChange={(value)=>onBirthChange(value)}/>
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
              onContentChange={(value)=>onLinkedInChange(value)}
            />
          </div>
          <div className={styles.Full}>
            <TextInput 
              headerText="Website"
              placeholderText="Enter your website url ..."
              withIcon={true}
              iconPath="/assets/application/website.svg"
              name="website"
              onContentChange={(value)=>onWebsiteChange(value)}
            />
          </div>
          <div className={styles.Full}>
            <TextInput 
              headerText="Github"
              placeholderText="Enter your Github url ..."
              withIcon={true}
              iconPath="/assets/application/github.svg"
              name="github"
              onContentChange={(value)=>onGithubChange(value)}
            />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.Grid}>
      <div className={styles.Left}>
        <Headline2 normalContent={"Your motivation"} isDarkBackground/>
        <Paragraph1 normalContent={"Is a weekend project that connects several hundred students."} isDarkBackground/>
      </div>
      <div className={styles.Right}>
        <div className={styles.Content}>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="Why do you want to take part in the hack?" 
              placeholderText="Enter text here ..."
              name="participation"
              onContentChange={(value)=>onParticipationChange(value)}
            />
          </div>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="What do you want to reach?" 
              placeholderText="Enter text here ..."
              name="reach"
              onContentChange={(value)=>onReachChange(value)}
            />
          </div>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="What do you think you can contribute to?" 
              placeholderText="Enter text here ..."
              name="contribution"
              onContentChange={(value)=>onContributionChange(value)}
            />
          </div>
          <div className={styles.Full}>
            <TextAreaInput 
              headerText="What do you want to learn?" 
              placeholderText="Enter text here ..."
              name="learing"
              onContentChange={(value)=>onLearningChange(value)}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
}