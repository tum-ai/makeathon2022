import styles from '../../styles/02_molecules/Ticket.module.css'
import Link from 'next/link'

export default function Ticket({position}){
  if(position == "right"){
    return <div style={{right: 0}}className={styles.TicketItem}>
      <div alt="Ticket" className={styles.Ticket}></div>
      <Link href="#" passHref={true} >
        <div className={styles.CtaButton}>
          <div className={styles.Text}>Application phase will open soon!</div>
        </div>
      </Link>
    </div>
  }else{
    return <div className={styles.TicketItem}>
      <div alt="Ticket" className={styles.Ticket}></div>
      <Link href="#" passHref={true} >
        <div className={styles.CtaButton}>
          <div className={styles.Text}>Application phase will open soon!</div>
        </div>
      </Link>
    </div>
  }
}