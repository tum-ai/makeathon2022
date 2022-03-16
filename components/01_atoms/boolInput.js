import styles from '../../styles/01_atoms/BoolInput.module.css'

export default function BoolInput({headerText, onContentChange, name}){ 

  return <div className={styles.BoolInputItem}>
    <div className={styles.InputContainer}>
      <input 
        className={styles.Checkbox} 
        type="checkbox" 
        id={name} 
        name={name} 
        onChange={(event)=>{
          let obj = event;
          if(event.target.checked){
            obj.target.value = true;
          }else{
            obj.target.value = false;
          }
          onContentChange(event);
        }}
      />
      <label className={styles.Label} htmlFor={name}>{headerText}</label>
    </div>
  </div>
}