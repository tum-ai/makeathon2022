import styles from '../../styles/01_atoms/DropDownInput.module.css'
import Image from 'next/image'

export default function DropDownInput({headerText, iconPath, onContentChange, withIcon, children, name}){ 

  return <div className={styles.DropDownInputItem}>
    <div className={styles.InputHeader}>{headerText}</div>
    <div className={styles.InputContainer}>
      {withIcon ? <select 
        style={{"padding-left": "70px"}} 
        className={styles.InputField} 
        type="text" 
        name={name} 
        id={name}
        onChange={(event)=>onContentChange(event.target.value)}
      >
        {children}
      </select> : <select 
        className={styles.InputField} 
        type="text" 
        name={name} 
        id={name}
        onChange={(event)=>onContentChange(event.target.value)}
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