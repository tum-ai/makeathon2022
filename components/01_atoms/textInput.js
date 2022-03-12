import styles from '../../styles/01_atoms/TextInput.module.css'
import Image from 'next/image'


export default function TextInput({value, isControlled, headerText, placeholderText, iconPath, onContentChange, withIcon, name}){ 

  return <div className={styles.TextInputItem}>
    <div className={styles.InputHeader}>{headerText}</div>
    <div className={styles.InputContainer}>
      {withIcon ? <input value={isControlled ? value : undefined} style={{"padding-left": "70px"}} className={styles.InputField} type="text" id={name} name={name} placeholder={placeholderText} onChange={(event)=>onContentChange(event)}/> : <input value={isControlled ? value : undefined} className={styles.InputField} type="text" id={name} name={name} placeholder={placeholderText} onChange={(event)=>onContentChange(event)}/>}
      {withIcon ? <div className={styles.Label}>
        <Image src={iconPath} alt="icon" layout="fill" objectFit="cover" />
      </div> : ""}
    </div>
  </div>
}