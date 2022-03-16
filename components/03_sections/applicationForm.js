import styles from '../../styles/03_sections/ApplicationForm.module.css'
import { useState } from 'react'

import ApplyHeader from '../02_molecules/applyHeader';
import ApplyFooter from '../02_molecules/applyFooter';
import PersonalDetailForm from '../02_molecules/personalDetailForm';
import ProfessionForm from '../02_molecules/professionForm';
import SubmitForm from '../02_molecules/submitForm';
import Image from 'next/image';
import Button from '../01_atoms/button';

export default function ApplicationForm(){
  const [applicationState,changeApplicationState] = useState(0);
  const [applicationData,setApplicationData] = useState({
    "confirmation": "false",
    "furture": "false",
    "mailForward": "false",
    "academic": "false",
    "hackathon": "false",
    "codeSkill": "false",
    "team": "false"
  });
  const [isControlled, setIsControlled] = useState(false);
  const [isAppValid,setIsAppValid] = useState(false);

  function submitData(data) {
    fetch("https://react-test-64a47-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(data),
      header: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      console.log("success");
      applicationState(4);
    });
  }

  function onInputChange(event){
    let newObj = applicationData;
    Object.defineProperty(newObj, event.target.name, {value: event.target.value, writable: true});
    setApplicationData(newObj);
  }

  function handleNextPage(){
    changeApplicationState(applicationState + 1); 
    setIsControlled(true); 
    setTimeout(() => {
      setIsControlled(false);
      setIsAppValid(false);
    }, 500);
    if(applicationState == 2){
      console.log(applicationData);
    }
  }
  function handlePrevPage(){
    changeApplicationState(applicationState - 1); 
    setIsControlled(true); 
    setTimeout(() => {
      setIsControlled(false);
    }, 500);
  }

  switch(applicationState){
    case 0:
       return <div className={styles.ApplicationFormItem}>
        <ApplyHeader title="Details about " highlighted_title="you."/>
        <PersonalDetailForm 
          onInputChange={(event)=>onInputChange(event)}
          data={applicationData}
          isControlled={isControlled}
          setIsAppValid={(value)=>setIsAppValid(value)}
        />
        <ApplyFooter 
          nextBtnText="Next" 
          stateNumber={applicationState + 1} 
          nextPage={()=>handleNextPage()}
          prevPage={()=>handlePrevPage()}
          isValid={isAppValid ? true : false}
        />
        </div>
      break;    
    case 1:
      return <div className={styles.ApplicationFormItem}>
        <ApplyHeader title="Let's talk about your " highlighted_title="profession."/>
        <ProfessionForm 
          onInputChange={(event)=>onInputChange(event)}
          data={applicationData}
          isControlled={isControlled}
          setIsAppValid={(value)=>setIsAppValid(value)}
        />
        <ApplyFooter 
          nextBtnText="Next" 
          prevBtnText="Prev" 
          stateNumber={applicationState + 1} 
          nextPage={()=>handleNextPage()}
          prevPage={()=>handlePrevPage()}
          isValid={isAppValid ? true : false}
        />
       </div>
      break;    
    case 2:
      return <div className={styles.ApplicationFormItem}>
        <ApplyHeader title="Almost " highlighted_title="ready."/>
        <SubmitForm 
          onInputChange={(event)=>onInputChange(event)}
          data={applicationData}
          isControlled={isControlled}
          setIsAppValid={(value)=>setIsAppValid(value)}
        />
        <ApplyFooter 
          nextBtnText="Submit" 
          prevBtnText="Prev" 
          stateNumber={applicationState + 1} 
          nextPage={()=>handleNextPage()}
          prevPage={()=>handlePrevPage()}
          isValid={isAppValid ? true : false}
        />
       </div>
      break;    
    case 3:
      return <div className={styles.ApplicationFormItem}>
        <div className={styles.Wrapper}>
          <div className={styles.Spinner}>
            <Image src="/assets/application/spinner.gif" alt="spinner" layout="fill" objectFit="cover" />
          </div>
        </div>
       </div>
      break;   
    case 4:
      return <div className={styles.ApplicationFormItem}>
        <ApplyHeader title="You did it." highlighted_title=" Congratulations 🎉"/>
        <div className={styles.Grid}>
          <div className={styles.BtnContainer}>
            <Button link="/" content="Back to Makeathon website" isDarkBackground/>
          </div>
        </div>
        </div>
      break;   
    default:
      return <div className={styles.ApplicationFormItem}>

       </div>
      break; 
  }
  return <div className={styles.ApplicationFormItem}>

  </div>
}