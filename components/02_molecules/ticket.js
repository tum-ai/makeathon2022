import styles from '../../styles/02_molecules/Ticket.module.css'
import previousStyles from '../../styles/02_molecules/PreviousTicket.module.css'
import Link from 'next/link'
// import "../../pages/application"

export default function Ticket({position, version}){
  if(version != "previous"){
    if(position == "right"){
      return <div style={{right: 0}}className={styles.TicketItem}>
        <div alt="Ticket" className={styles.Ticket}></div>
          <Link href="" passHref={true} >
          <div className={styles.CtaButton}>
            { <div className={styles.Text}>Applications closed!</div> }
          </div>
        </Link>
      </div>
    }else{
      return <div className={styles.TicketItem}>
        <div alt="Ticket" className={styles.Ticket}></div>
          <Link href="" passHref={true} >
          <div className={styles.CtaButton}>
            { <div className={styles.Text}>Applications closed!</div> }
          </div>
        </Link>
      </div>
    }
  } else {
    if(position == "right"){
      return <div style={{right: 0}} className={previousStyles.TicketItem}>
        <div alt="Ticket" className={previousStyles.Ticket}></div>
        <Link href="" passHref={true} >
          <div className={styles.CtaButton}>
            {/* <div className={styles.Text}>Application closed!</div> */}
          </div>
        </Link>
      </div>
    }else{
      return <div className={previousStyles.TicketItem}>
        <div alt="Ticket" className={previousStyles.Ticket}></div>
        <Link href="" passHref={true} >
          <div className={previousStyles.CtaButton}>
            {/* <div className={previousStyles.Text}>Application closed!</div> */}
          </div>
        </Link>
      </div>
    }
  }
  /*calc(121vw - 93px);
  */
}
