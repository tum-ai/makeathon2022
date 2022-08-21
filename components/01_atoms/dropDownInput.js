import styles from '../../styles/01_atoms/DropDownInput.module.css'
import Image from 'next/image'
import { useState } from 'react';    

export default function DropDownInput({value, isControlled, headerText, iconPath, onContentChange, withIcon, children, name, setIsValid, isRequired, descriptiontext=""}){ 

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
  if (descriptiontext!=""){
    return <div className={styles.DropDownInputItem}>
    <div className={styles.InputHeader}>{headerText}</div>
    <div className={styles.DescriptionText}>{descriptiontext}</div>
    <div className={styles.InputContainer}>
      {withIcon ? <select 
        className={styles.InputField} 
        type="text" 
        name={name} 
        id={name}
        onChange={(event)=>onContentChange(event)}
        value={isControlled ? value : undefined}
        onBlur={(event)=>validateField(event)} 
        style={{paddingLeft: "70px", outline: isFieldValid ? "" : "2px solid red"}}
      >
        {children}
      </select> : <select 
        className={styles.InputField} 
        type="text" 
        name={name} 
        id={name}
        onChange={(event)=>onContentChange(event)}
        value={isControlled ? value : undefined}
        onBlur={(event)=>validateField(event)} 
        style={{outline: isFieldValid ? "" : "2px solid red"}}
      >
        {children}
      </select>}
      {withIcon ? <div className={styles.Label}>
        <Image src={iconPath} alt="icon" layout="fill" objectFit="cover" />
      </div> : ""}
      <div className={styles.Arrow}>
        <Image src={"/assets/application/arrow.svg"} alt="icon" layout="fill" objectFit="cover" />
      </div>
    </div>
  </div>
  }
  else{
  return <div className={styles.DropDownInputItem}>
    <div className={styles.InputHeader}>{headerText}</div>
    <div className={styles.InputContainer}>
      {withIcon ? <select 
        className={styles.InputField} 
        type="text" 
        name={name} 
        id={name}
        onChange={(event)=>onContentChange(event)}
        value={isControlled ? value : undefined}
        onBlur={(event)=>validateField(event)} 
        style={{paddingLeft: "70px", outline: isFieldValid ? "" : "2px solid red"}}
      >
        {children}
      </select> : <select 
        className={styles.InputField} 
        type="text" 
        name={name} 
        id={name}
        onChange={(event)=>onContentChange(event)}
        value={isControlled ? value : undefined}
        onBlur={(event)=>validateField(event)} 
        style={{outline: isFieldValid ? "" : "2px solid red"}}
      >
        {children}
      </select>}
      {withIcon ? <div className={styles.Label}>
        <Image src={iconPath} alt="icon" layout="fill" objectFit="cover" />
      </div> : ""}
      <div className={styles.Arrow}>
        <Image src={"/assets/application/arrow.svg"} alt="icon" layout="fill" objectFit="cover" />
      </div>
    </div>
  </div>
  }
}