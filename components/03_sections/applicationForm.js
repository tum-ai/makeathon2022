import styles from "../../styles/03_sections/ApplicationForm.module.css";
import { useState } from "react";

import ApplyHeader from "../02_molecules/applyHeader";
import ApplyFooter from "../02_molecules/applyFooter";
import PersonalDetailForm from "../02_molecules/personalDetailForm";
import ProfessionForm from "../02_molecules/professionForm";
import SubmitForm from "../02_molecules/submitForm";
import Image from "next/image";
import Button from "../01_atoms/button";
import { appConfig } from "../04_constants/constants"

export default function ApplicationForm() {
  const [applicationState, changeApplicationState] = useState(0);
  const [applicationData, setApplicationData] = useState({
    academicBackground: "",
    confirmation: false,
    futureMember: false,
    hackExperienceBool: false,
    openAI: false,
    programmingSkilsBool: false,
    teamDetailsBool: false,
    additionalInfo: "",
    areaOfExpertise: "",
    bestDescription: "",
    dateOfBirth: null,
    email: "",
    firstname: "",
    github: "",
    hackAwareness: null,
    hackExperience: "",
    lastname: "",
    linkedIn: "",
    nationality: "",
    personalWebsite: "",
    phone: "",
    placeOfResidence: "",
    programmingSkills: "",
    programmingSkillsBool: false,
    teamDetails: "",
    timeZone: null,
    university: "",
    universityBool: true,
    whatContribution: "",
    whatLearn: "",
    whyParticipate: "",
  });
  const [isControlled, setIsControlled] = useState(false);
  const [isAppValid, setIsAppValid] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);

  function fetchData() {
    if (!submitStatus) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify(applicationData);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        `${appConfig.urls.API_BASE_URL}/makeathon/submit-application`,
        requestOptions
      )
        .then((response) => {
          //           console.log(response.text());
          if (response.status == 201)
            changeApplicationState(applicationState + 1);
          else if (response.status == 409)
            changeApplicationState(applicationState + 2);
          else {
            console.log("fail");
            changeApplicationState(applicationState + 3);
          }
        })
        .catch((error) => console.log("error", error));

      setSubmitStatus(true);
    }
  }

  function onInputChange(event) {
    let newObj = applicationData;
    Object.defineProperty(newObj, event.target.name, {
      value: event.target.value,
      writable: true,
    });
    setApplicationData(newObj);
  }

  function handleNextPage() {
    changeApplicationState(applicationState + 1);
    setIsControlled(true);
    setTimeout(() => {
      setIsControlled(false);
      setIsAppValid(false);
    }, 500);
    if (applicationState == 2) {
      //console.log(applicationData);
    }
  }

  function handlePrevPage() {
    changeApplicationState(applicationState - 1);
    setIsControlled(true);
    setTimeout(() => {
      setIsControlled(false);
    }, 500);
  }

  function submitValidation() {
    if (applicationState == 2) {
      if (isAppValid) {
        if (applicationData.confirmation) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      if (isAppValid) {
        return true;
      } else {
        return false;
      }
    }
  }

  switch (applicationState) {
    case 0:
      return (
        <div className={styles.ApplicationFormItem}>
          <ApplyHeader title="Details about " highlighted_title="you." />
          <PersonalDetailForm
            onInputChange={(event) => onInputChange(event)}
            data={applicationData}
            isControlled={isControlled}
            setIsAppValid={(value) => setIsAppValid(value)}
          />
          <ApplyFooter
            nextBtnText="Next"
            stateNumber={applicationState + 1}
            nextPage={() => handleNextPage()}
            prevPage={() => handlePrevPage()}
            isValid={isAppValid ? true : false}
          />
        </div>
      );

    case 1:
      return (
        <div className={styles.ApplicationFormItem}>
          <ApplyHeader
            title="Let's talk about your "
            highlighted_title="profession."
          />
          <ProfessionForm
            onInputChange={(event) => onInputChange(event)}
            data={applicationData}
            isControlled={isControlled}
            setIsAppValid={(value) => setIsAppValid(value)}
          />
          <ApplyFooter
            nextBtnText="Next"
            prevBtnText="Prev"
            stateNumber={applicationState + 1}
            nextPage={() => handleNextPage()}
            prevPage={() => handlePrevPage()}
            isValid={isAppValid ? true : false}
          />
        </div>
      );

    case 2:
      return (
        <div className={styles.ApplicationFormItem}>
          <ApplyHeader title="Almost " highlighted_title="ready." />
          <SubmitForm
            onInputChange={(event) => onInputChange(event)}
            data={applicationData}
            isControlled={isControlled}
            setIsAppValid={(value) => setIsAppValid(value)}
          />
          <ApplyFooter
            nextBtnText="Submit"
            prevBtnText="Prev"
            stateNumber={applicationState + 1}
            nextPage={() => handleNextPage()}
            prevPage={() => handlePrevPage()}
            isValid={isAppValid ? true : false}
          />
        </div>
      );

    case 3:
      fetchData();
      return (
        <div className={styles.ApplicationFormItem}>
          <div className={styles.Wrapper}>
            <div className={styles.Spinner}>
              <Image
                src="/assets/application/spinner.gif"
                alt="spinner"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      );

    case 4:
      return (
        <div className={styles.ApplicationFormItem}>
          <ApplyHeader
            title="You did it."
            highlighted_title=" Congratulations 🎉"
          />
          <div className={styles.Grid}>
            <p>
              If you have any questions about your application, please write to
              applicants.makeathon@tum-ai.com
            </p>
            <div className={styles.BtnContainer}>
              <Button
                link="/"
                content="Back to Makeathon website"
                isDarkBackground
              />
            </div>
          </div>
        </div>
      );

    case 5:
      return (
        <div className={styles.ApplicationFormItem}>
          <ApplyHeader
            title="Your email address is already registered with us!"
            highlighted_title=""
          />
          <div className={styles.Grid}>
            <p>
              If you have any questions about your application, please write to
              applicants.makeathon@tum-ai.com
            </p>
            <div className={styles.BtnContainer}>
              <Button
                link="/"
                content="Back to Makeathon website"
                isDarkBackground
              />
            </div>
          </div>
        </div>
      );

    case 6:
      return (
        <div className={styles.ApplicationFormItem}>
          <ApplyHeader
            title="Schade! "
            highlighted_title="Some error has occurred on the server."
          />
          <div className={styles.Grid}>
            <p>Please write to applicants.makeathon@tum-ai.com</p>
            <div className={styles.BtnContainer}>
              <Button
                link="/"
                content="Back to Makeathon website"
                isDarkBackground
              />
            </div>
          </div>
        </div>
      );

    default:
      return <div className={styles.ApplicationFormItem}></div>;
  }
}
