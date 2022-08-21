import styles from "../../styles/02_molecules/PersonalDetailForm.module.css";
import Headline2 from "../01_atoms/fonts_headline2";
import Paragraph1 from "../01_atoms/fonts_paragraph1";
import TextInput from "../01_atoms/textInput";
import TextAreaInput from "../01_atoms/textAreaInput";
import BoolInput from "../01_atoms/boolInput";
import { useState } from "react";
import DropDownInput from "../01_atoms/dropDownInput";

export default function StatisticsForm({
  data,
  onInputChange,
  isControlled,
  setIsAppValid,
}) {
  const [isPageValid, setIsPageValid] = useState({
    hackExperienceBool: false,
    hackExperience: false,
    programmingSkillsBool: false,
    programmingSkills: false,
    programmingSkillsOthers: false,
    sourceHeard: false,
  });

  function checkPageStatus() {
    console.log(isPageValid);
    if (Object.values(isPageValid).includes(false) == false) {
      setIsAppValid(true);
    }
  }

  function transformYesNo(answer){
    return answer=="yes";
  }

  return (
    <div className={styles.PersonalDetailFormItem}>
      <div className={styles.Grid}>
      <div className={styles.Left}>
        <Headline2 normalContent={"Statistics"} isDarkBackground/>
        <Paragraph1 normalContent={""} isDarkBackground/>
      </div>
      <div className={styles.Right}>
        <div className={styles.Content}>
          <div className={styles.Full}>
            <DropDownInput 
              headerText="Have you previously participated in a Hackathon?*"
              name="hackExperienceBool"
              onContentChange={(event)=>onInputChange(event)}
              isControlled={isControlled}
              setIsValid={(value)=>{
                let obj = isPageValid;
                obj.hackExperienceBool = transformYesNo(value);
                setIsPageValid(obj);
                checkPageStatus();}}
              isRequired = {true}
            >
            <option value="">Choose ...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </DropDownInput>
          </div>
          <div className={styles.Full}>
            <TextInput 
              headerText="If yes, which one?" 
              placeholderText="Talk about your experience here ..."
              name="hackExperience"
              onContentChange={(event)=>onInputChange(event)}
              value={data.hackExperience}
              isControlled={isControlled}
            />
          </div>
          <div className={styles.Full}>
            <DropDownInput 
              headerText="Do you have programming skills?*"
              name="programmingSkillsBool"
              onContentChange={(event)=>onInputChange(event)}
              isControlled={isControlled}
              setIsValid={(value)=>{
                let obj = isPageValid;
                obj.programmingSkillsBool = transformYesNo(value);
                setIsPageValid(obj);
                checkPageStatus();}}
              isRequired = {true}
            >
            <option value="">Choose ...</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            </DropDownInput>
          </div>
          <div className={styles.Full}>
            <DropDownInput 
              headerText="If yes – which skills do you have? (Do not be afraid if this does not apply to you)" 
              placeholderText="Enter skills here ..."
              name="programmingSkills"
              onContentChange={(event)=>onInputChange(event)}
              isControlled={isControlled}
              setIsValid={(value)=>{
                let obj = isPageValid;
                obj.programmingSkills = value;
                setIsPageValid(obj);
                checkPageStatus();}}
              isRequired={false}
            >
            <option value="">Choose ...</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C++">Cpp</option>
            <option value="Go">Go</option>
            <option value="Tensorflow/Pytorch">Tf</option>
            <option value="Others">Others</option>
            </DropDownInput>
          </div>
          <div className={styles.Full}>
            <TextInput 
              headerText="If others, which one?" 
              placeholderText="Please specify which other programming languages you know"
              name="programmingSkillsOthers"
              onContentChange={(event)=>onInputChange(event)}
              isControlled={isControlled}
              setIsValid={(value)=>{
                let obj = isPageValid;
                obj.programmingSkillsOthers = value;
                setIsPageValid(obj);
                checkPageStatus();}}
              isRequired={false}
            />
          </div>
          <div className={styles.Full}>
            <DropDownInput 
              headerText="How did you hear about the Makeathon?*" 
              placeholderText="Enter source here ..."
              name="sourceHeard"
              onContentChange={(event)=>onInputChange(event)}
              isControlled={isControlled}
              setIsValid={(value)=>{
                let obj = isPageValid;
                obj.sourceHeard = value;
                setIsPageValid(obj);
                checkPageStatus();}}
              isRequired={true}
            >
            <option value="">Choose ...</option>
            <option value="Website">Website</option>
            <option value="Friends">Friends</option>
            <option value="Instagram">Instagram</option>
            <option value="Twitter">Twitter</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Work">Work</option>
            <option value="University">University</option>
            <option value="Other student initiatives">OtherIn</option>
            <option value="Other">Other</option>
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
        </div>
      </div>
      </div>
      <div className={styles.Grid}>
        <div className={styles.Left}>
          <Headline2 normalContent={"Confirmation"} isDarkBackground />
          <Paragraph1
            normalContent={
              ""
            }
            isDarkBackground
          />
        </div>
        <div className={styles.Right}>
          <div className={styles.Content}>
            <div className={styles.Full}>
              <BoolInput 
                headerText="I hereby confirm that I will  participate for the full 48 hours of the Makeathon. (22-24.04)*"
                name="confirmation"
                onContentChange={(event)=>{
                  onInputChange(event); 
                  let obj = isPageValid; 
                  obj.confirmation = event.target.checked;
                  setIsPageValid(obj); 
                  checkPageStatus();
                  if(event.target.checked == false){
                    setIsAppValid(false);
                  }
                }}
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
  );
}
