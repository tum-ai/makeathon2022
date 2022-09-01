import styles from '../../styles/02_molecules/Ticket.module.css'
import Link from 'next/link'
// import "../../pages/application"

export default function Ticket({position}){
  if(position == "right"){
    return <div style={{right: 0}}className={styles.TicketItem}>
      <div alt="Ticket" className={styles.Ticket}></div>
      <Link href="application" passHref={true} >
        <div className={styles.CtaButton}>
          <div className={styles.Text}>Apply now!</div>
        </div>
      </Link>
    </div>
  }else{
    return <div className={styles.TicketItem}>
      <div alt="Ticket" className={styles.Ticket}></div>
      <Link href="application" passHref={true} >
        <div className={styles.CtaButton}>
          <div className={styles.Text}>Apply now!</div>
        </div>
      </Link>
    </div>
  }
}
