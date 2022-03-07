import styles from '../../styles/02_molecules/Ticket.module.css'

export default function Ticket(){
  return <div className={styles.TicketItem}>
    <div alt="Ticket" className={styles.Ticket}></div>
    <div className={styles.CtaButton}>
      <div className={styles.Text}>Apply now</div>
    </div>
  </div>
}