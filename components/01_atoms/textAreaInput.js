import styles from '../../styles/01_atoms/TextAreaInput.module.css'
import Image from 'next/image'

export default function TextAreaInput({headerText, placeholderText, onContentChange, name}){ 

  return <div className={styles.TextAreaInputItem}>
    <div className={styles.InputHeader}>{headerText}</div>
    <div className={styles.InputContainer}>
      <textarea className={styles.InputField} cols="4" name={name} id={name} placeholder={placeholderText} onChange={(event)=>onContentChange(event.target.value)}/>
    </div>
  </div>
}