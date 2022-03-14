import styles from '../../styles/01_atoms/DateInput.module.css'
import Image from 'next/image'
import { useState } from 'react';     

export default function DateInput({value, isControlled, headerText, placeholderText, onContentChange, name, setIsValid, isRequired}){ 

  const [isFieldValid, setIsFieldValid] = useState(true);

  function validateField(event){
    if(isRequired){
      if(event.target.value == ""){
        setIsValid(false);
        setIsFieldValid(false);
      }else{
        setIsValid(true);
        setIsFieldValid(true);
      }
    }
  }

  return <div className={styles.DateInputItem}>
    <div className={styles.InputHeader}>{headerText}</div>
    <div className={styles.InputContainer}>
      <input 
        className={styles.InputField} 
        type="date" 
        id={name} 
        name={name} 
        placeholder={placeholderText} 
        onChange={(event)=>onContentChange(event)}
        value={isControlled ? value : undefined}
        onBlur={(event)=>validateField(event)} 
        style={{outline: isFieldValid ? "" : "2px solid red"}}
      />
      <div className={styles.Label}>
        <Image src={"/assets/application/date.svg"} alt="icon" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.Arrow}>
        <Image src={"/assets/application/arrow.svg"} alt="icon" layout="fill" objectFit="cover" />
      </div>
    </div>
  </div>
}