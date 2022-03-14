import styles from '../../styles/02_molecules/ApplyFooter.module.css'
import Image from 'next/image'

import { useState } from 'react';

export default function ApplyFooter({nextBtnText, prevBtnText, stateNumber, nextPage, prevPage, isValid}){

  function nextHandler(){
    nextPage();
    window.scrollTo(0, 0);
  }
  function prevHandler(){
    prevPage();
    window.scrollTo(0, 0);
  }

  return <div className={styles.ApplyFooterItem}>
    <div className={styles.Grid}>
      <div className={styles.Separator}></div>
      <div className={styles.Bottom}>
        {prevBtnText != undefined ? <div className={styles.PrevBtn} onClick={()=>prevHandler()}>{prevBtnText}</div> : <div></div>}
        {isValid ? <div className={styles.Btn} onClick={()=>nextHandler()}>{nextBtnText}</div> :
        <div className={styles.InvalidBtn} onClick={()=>nextHandler()}>{nextBtnText}</div>}
      </div>
    </div>
  </div>
}