import styles from '../../styles/01_atoms/DropDownInput.module.css'
import Image from 'next/image'
import { useState } from 'react';    

export default function DropDownInput({
  value,
  headerText,
  iconPath,
  onContentChange,
  withIcon,
  children,
  name,
  setIsValid,
  isRequired,
}) {
  const [isFieldValid, setIsFieldValid] = useState(true);
  const [input, setInput] = useState(value);

  const validateField = (event) => {
    if (isRequired) {
      setIsValid(event.target.value !== "");
      setIsFieldValid(event.target.value !== "");
    }
  };

  return (
    <div className={styles.DropDownInputItem}>
      <div className={styles.InputHeader}>{headerText}</div>
      <div className={styles.InputContainer}>
        {withIcon ? (
          <select
            className={styles.InputField}
            type="text"
            name={name}
            id={name}
            onChange={(event) => {
                setInput(event.target.value);
                onContentChange(event);
                validateField(event);
            }}
            value={input}
            style={{
              paddingLeft: "70px",
              outline: isFieldValid ? "" : "2px solid red",
            }}
          >
            {children}
          </select>
        ) : (
          <select
            className={styles.InputField}
            type="text"
            name={name}
            id={name}
            onChange={(event) => {
                setInput(event.target.value);
                onContentChange(event);
                validateField(event);
            }}
            value={input}
            style={{ outline: isFieldValid ? "" : "2px solid red" }}
          >
            {children}
          </select>
        )}
        {withIcon ? (
          <div className={styles.Label}>
            <Image src={iconPath} alt="icon" layout="fill" objectFit="cover" />
          </div>
        ) : (
          ""
        )}
        <div className={styles.Arrow}>
          <Image
            src={"/assets/application/arrow.svg"}
            alt="icon"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
