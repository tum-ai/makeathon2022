import styles from "../../styles/02_molecules/PersonalDetailForm.module.css";
import DateInput from "../01_atoms/dateInput";
import DropDownInput from "../01_atoms/dropDownInput";
import Headline2 from "../01_atoms/fonts_headline2";
import Paragraph1 from "../01_atoms/fonts_paragraph1";
import TextInput from "../01_atoms/textInput";
import TextAreaInput from "../01_atoms/textAreaInput";
import BoolInput from "../01_atoms/boolInput";
import { useState } from "react";

export default function ResumeForm({
  data,
  onInputChange,
  isControlled,
  setIsAppValid,
}) {
  const [isPageValid, setIsPageValid] = useState({
    universityBool: false,
    university: false,
    areaOfExpertise: false,
    linkedIn: false,
    personalWebsite: false,
    github: false,
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

  const validateURL = (url) => {
    const urlRegex = new RegExp(/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/);
    return urlRegex.test(url);
  };
  return (
    <div className={styles.PersonalDetailFormItem}>
      <div className={styles.Grid}>
        <div className={styles.Left}>
          <Headline2 normalContent={"Your background"} isDarkBackground />
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
                headerText="Are you currently pursuing or did you pursue an academic or professional degree?*"
                name="universityBool"
                onContentChange={(event) => onInputChange(event)}
                isControlled={isControlled}
                setIsValid={(value) => {
                  let obj = isPageValid;
                  obj.universityBool = transformYesNo(value);   // transform it to bool
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
                headerText="If yes, which university are you studying at?"
                placeholderText="Name of you university ..."
                name="university"
                withIcon
                iconPath="/assets/application/school.svg"
                onContentChange={(event) => onInputChange(event)}
                value={data.university}
                isControlled={isControlled}
                setIsValid={(value) => setIsPageValid(value)}
                isRequired={false}
              />
            </div>
            <div className={styles.Full}>
              <DropDownInput
                headerText="Which field do you think you are expert in?*"
                name="areaOfExpertise"
                onContentChange={(event) => onInputChange(event)}
                value={data.areaOfExpertise}
                isControlled={isControlled}
                setIsValid={(value) => {
                  let obj = isPageValid;
                  obj.areaOfExpertise = value;
                  setIsPageValid(obj);
                  checkPageStatus();
                }}
                isRequired={true}
              >
                <option value="">Choose ...</option>
                <option value="Computer Vision">Computer Vision</option>
                <option value="Natural Language Processing">NLP</option>
                <option value="Data Science">Data Science</option>
                <option value="Software Development/DevOps">Software</option>
                <option value="Business Development">Business Development</option>
                <option value="Design Interface/UX/Prototyping">Design/UX</option>
              </DropDownInput>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Grid}>
        <div className={styles.Left}>
          <Headline2 normalContent={"Digital Appearence"} isDarkBackground />
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
              <TextInput
                headerText="LinkedIn"
                placeholderText="Enter your LinkedIn url ..."
                withIcon={true}
                iconPath="/assets/application/linkedIn.svg"
                name="linkedIn"
                onContentChange={(event) => onInputChange(event)}
                value={data.linkedIn}
                isControlled={isControlled}
                isRequired={false}
                dataValidator={(url) => validateURL(url)}
              />
            </div>
            <div className={styles.Full}>
              <TextInput
                headerText="Website"
                placeholderText="Enter your website url ..."
                withIcon={true}
                iconPath="/assets/application/website.svg"
                name="personalWebsite"
                onContentChange={(event) => onInputChange(event)}
                isControlled={isControlled}
                setIsValid={(value) => {
                  let obj = isPageValid;
                  obj.personalWebsite = value;
                  setIsPageValid(obj);
                  checkPageStatus();
                }}
                isRequired={false}
                dataValidator={(url) => validateURL(url)}
              />
            </div>
            <div className={styles.Full}>
              <TextInput
                headerText="Github"
                placeholderText="Enter your Github url ..."
                withIcon={true}
                iconPath="/assets/application/github.svg"
                name="github"
                onContentChange={(event) => onInputChange(event)}
                isControlled={isControlled}
                isRequired={false}
                setIsValid={(value) => {
                  let obj = isPageValid;
                  obj.github = value;
                  setIsPageValid(obj);
                  checkPageStatus();
                }}
                dataValidator={(url) => validateURL(url)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}