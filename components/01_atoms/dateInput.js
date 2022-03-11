import styles from '../../styles/01_atoms/DateInput.module.css'
import Image from 'next/image'

export default function DateInput({headerText, placeholderText, iconPath, onContentChange, withIcon, name}){ 

  return <div className={styles.DateInputItem}>
    <div className={styles.InputHeader}>{headerText}</div>
    <div className={styles.InputContainer}>
      <input 
        className={styles.InputField} 
        type="date" 
        id={name} 
        name={name} 
        placeholder={placeholderText} 
        onChange={(event)=>onContentChange(event.target.value)}
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