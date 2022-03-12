import styles from '../../styles/01_atoms/TextInput.module.css'
import Image from 'next/image'

export default function TextInput({value, headerText, placeholderText, iconPath, onContentChange, withIcon, name}){ 

  return <div className={styles.TextInputItem}>
    <div className={styles.InputHeader}>{headerText}</div>
    <div className={styles.InputContainer}>
      {withIcon ? <input style={{"padding-left": "70px"}} value={value} className={styles.InputField} type="text" id={name} name={name} placeholder={placeholderText} onChange={(event)=>onContentChange(event.target.value)}/> : <input className={styles.InputField} value={value} type="text" id="fname" name="fname" placeholder={placeholderText} onChange={(event)=>onContentChange(event.target.value)}/>}
      {withIcon ? <div className={styles.Label}>
        <Image src={iconPath} alt="icon" layout="fill" objectFit="cover" />
      </div> : ""}
    </div>
  </div>
}