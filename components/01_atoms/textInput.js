import styles from '../../styles/01_atoms/TextInput.module.css'
import Image from 'next/image'
import { useState } from 'react';

export default function TextInput({
  value, 
  headerText, 
  placeholderText, 
  iconPath, 
  onContentChange, 
  withIcon, 
  name, 
  setIsValid, 
  isRequired,
  isIntegerInput,
  dataValidator
}) {
const [isFieldValid, setIsFieldValid] = useState(true);
const [input, setInput] = useState(value);

const validateField = (event) => {
  if (isRequired) {
    const isValid = event.target.value !== "" && (dataValidator === undefined || dataValidator(event.target.value));
    setIsValid(isValid);
    setIsFieldValid(isValid);
  } else if (dataValidator !== undefined) {
    setIsFieldValid(event.target.value === "" || dataValidator(event.target.value));
  }
};

return <div className={styles.TextInputItem}>
  <div className={styles.InputHeader}>{headerText}</div>
  <div className={styles.InputContainer}>
    {withIcon ? 
      <input 
        value={input}
        style={{paddingLeft: "70px", outline: isFieldValid ? "" : "2px solid red"}} 
        className={styles.InputField} 
        type={isIntegerInput ? "number" : "text"}
        id={name} 
        name={name} 
        placeholder={placeholderText} 
        onChange={(event)=> { 
          setInput(event.target.value);
          onContentChange(event);
          validateField(event);
        }}
      /> 
      : 
      <input 
        style={{outline: isFieldValid ? "" : "2px solid red"}} 
        value={input}
        className={styles.InputField} 
        type={isIntegerInput ? "number" : "text"}
        id={name} 
        name={name} 
        placeholder={placeholderText} 
        onChange={(event)=> {
          setInput(event.target.value);
          onContentChange(event);
          validateField(event);
        }}
      />}
    {withIcon && 
      <div className={styles.Label}>
        <Image 
          src={iconPath} 
          alt="icon" 
          layout="fill" 
          objectFit="cover" 
        />
      </div>}
  </div>
</div>
}