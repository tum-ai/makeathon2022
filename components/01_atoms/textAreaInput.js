import styles from '../../styles/01_atoms/TextAreaInput.module.css'
import Image from 'next/image'
import { useState } from 'react';     

export default function TextAreaInput({value, isControlled, headerText, placeholderText, onContentChange, name, setIsValid, isRequired}){ 

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

  return <div className={styles.TextAreaInputItem}>
    <div className={styles.InputHeader}>{headerText}</div>
    <div className={styles.InputContainer}>
      <textarea 
        style={{outline: isFieldValid ? "" : "2px solid red"}}
        value={isControlled ? value : undefined} 
        className={styles.InputField} 
        cols="4" 
        name={name} 
        id={name} 
        placeholder={placeholderText} 
        onBlur={(event)=>validateField(event)} 
        onChange={(event)=>onContentChange(event)}
      />
    </div>
  </div>
}