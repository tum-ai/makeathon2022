import styles from '../../styles/01_atoms/DateInput.module.css'
import Image from 'next/image'
import { useState } from 'react';     

export default function DateInput({
  value, 
  headerText, 
  placeholderText, 
  onContentChange, 
  name, 
  setIsValid, 
  isRequired
}) { 
  const [isFieldValid, setIsFieldValid] = useState(true);
  const [input, setInput] = useState(value);

  const validateField = (event) => {
    if (isRequired) {
      setIsValid(event.target.value !== "");
      setIsFieldValid(event.target.value !== "");
    }
  };

  return <div className={styles.DateInputItem}>
    <div className={styles.InputHeader}>{headerText}</div>
    <div className={styles.InputContainer}>
      <input 
        className={styles.InputField} 
        type="date" 
        id={name} 
        name={name} 
        placeholder={placeholderText} 
        onChange={(event)=> {
            setInput(event.target.value);
            onContentChange(event);
            validateField(event);
        }}
        value={input}
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