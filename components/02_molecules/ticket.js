import styles from '../../styles/02_molecules/Ticket.module.css'

export default function Ticket({position}){
  if(position == "right"){
    return <div style={{right: 0}}className={styles.TicketItem}>
      <div alt="Ticket" className={styles.Ticket}></div>
      <div className={styles.CtaButton}>
        <div className={styles.Text}>Apply now</div>
      </div>
    </div>
  }else{
    return <div className={styles.TicketItem}>
      <div alt="Ticket" className={styles.Ticket}></div>
      <div className={styles.CtaButton}>
        <div className={styles.Text}>Apply now</div>
      </div>
    </div>
  }
  
}