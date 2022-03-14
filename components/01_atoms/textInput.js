import styles from '../../styles/01_atoms/TextInput.module.css'
import Image from 'next/image'
import { useState } from 'react';

export default function TextInput({value, isControlled, headerText, placeholderText, iconPath, onContentChange, withIcon, name, setIsValid, isRequired}){ 

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

  return <div className={styles.TextInputItem}>
    <div className={styles.InputHeader}>{headerText}</div>
    <div className={styles.InputContainer}>
      {withIcon ? <input value={isControlled ? value : undefined} style={{paddingLeft: "70px", outline: isFieldValid ? "" : "2px solid red"}} className={styles.InputField} type="text" id={name} name={name} placeholder={placeholderText} onBlur={(event)=>validateField(event)} onChange={(event)=>onContentChange(event)}/> : <input style={{outline: isFieldValid ? "" : "2px solid red"}} value={isControlled ? value : undefined} className={styles.InputField} type="text" id={name} name={name} placeholder={placeholderText} onBlur={(event)=>validateField(event)} onChange={(event)=>onContentChange(event)}/>}
      {withIcon ? <div className={styles.Label}>
        <Image src={iconPath} alt="icon" layout="fill" objectFit="cover" />
      </div> : ""}
    </div>
  </div>
}