import { useState, useEffect } from "react";
import styles from "../../styles/02_molecules/PersonalDetailForm.module.css";
import DateInput from "../01_atoms/dateInput";
import DropDownInput from "../01_atoms/dropDownInput";
import Headline2 from "../01_atoms/fonts_headline2";
import Paragraph1 from "../01_atoms/fonts_paragraph1";
import TextInput from "../01_atoms/textInput";
import TextAreaInput from "../01_atoms/textAreaInput";
import BoolInput from "../01_atoms/boolInput";

export default function TeamForm({
  data,
  onInputChange,
  isControlled,
  setIsAppValid,
}) {
  const [isPageValid, setIsPageValid] = useState({
    isTeamBool: data.isTeamBool !== "",
    // teamDetails: false,
    attendingMode: data.attendingMode !=="",
  });

  function checkPageStatus() {
    const isCurrentStateValid = Object.keys(isPageValid).reduce(
      (valid, key) => {
        const value = isPageValid[key];
        return valid && value;
      },
      true
    );
    setIsAppValid(isCurrentStateValid)
  }
  function transformYesNo(answer){
    return answer=="yes";
  }
  useEffect(() => checkPageStatus());

  return (
    <div className={styles.PersonalDetailFormItem}>
      <div className={styles.Grid}>
        <div className={styles.Left}>
          <Headline2 normalContent={"Team"} isDarkBackground />
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
              <DropDownInput 
                headerText="Are you part of a team?*"
                name="teamDetailsBool"
                onContentChange={(event)=>onInputChange(event)}
                value={transformYesNo(data.teamDetailsBool)}
                isControlled={isControlled}
                setIsValid={(value) => {
                  let obj = isPageValid;
                  obj.isTeamBool = value;
                  setIsPageValid(obj);
                  checkPageStatus();
                }}
                isRequired={true}
              >
                <option value="">Choose ...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </DropDownInput>
            </div>
            <div className={styles.Full}>
              <TextInput 
                headerText="If yes, please specify the exact names and Email addresses of your team mates." 
                placeholderText="List team mates here ..."
                name="teamDetails"
                onContentChange={(event)=>onInputChange(event)}
                value={data.teamDetails}
                isControlled={isControlled}
                isRequired={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Grid}>
        <div className={styles.Left}>
          <Headline2 normalContent={"Planning"} isDarkBackground />
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
              <DropDownInput 
                headerText="Are you planning to attend the Makeathon online or onsite?*"
                descriptionText="We will be having a hybrid event this year in TU München on campus Garching bei München. If you are available on the 30th of September to the 2nd of October, we would love to have you there. Please confirm your availability by marking yes or no. The response is binding, as we are expecting to fill a capacity of 100 people on-site. First come, first serve."
                name="attendingMode"
                onContentChange={(event)=>onInputChange(event)}
                withIcon={false}
                value={data.attendingMode}
                isControlled={isControlled}
                setIsValid={(value) => {
                  let obj = isPageValid;
                  obj.attendingMode = value;
                  setIsPageValid(obj);
                  checkPageStatus();
                }}
                isRequired={true}
              >
                <option value="">Choose ...</option>
                <option value="Online">Online</option>
                <option value="On-site">On-site</option>
              </DropDownInput>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
