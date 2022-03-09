import styles from '../../styles/02_molecules/NavBar.module.css'
import { Link } from 'react-scroll'
import Image from 'next/image'

export default function NavBar(){
  return <div className={styles.NavBarItem}>
    <div className={styles.Grid}>
      <div className={styles.Logo}>
        <Image src={"/assets/logo.svg"} alt="Logo" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.Nav}>
        <Link to="about" spy={true} smooth={true} className={styles.Link}>About</Link>
        <Link to="tracks" spy={true} smooth={true} className={styles.Link}>Tracks</Link>
        <Link to="speakers" spy={true} smooth={true} className={styles.Link}>Speakers</Link>
        <Link to="stories" spy={true} smooth={true} className={styles.Link}>Stories</Link>
        <Link to="faqs" spy={true} smooth={true} className={styles.Link}>{"Q&A"}</Link>      </div>
    </div>
  </div>
}