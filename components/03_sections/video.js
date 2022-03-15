import styles from '../../styles/03_sections/Video.module.css'

export default function Video(){
  return <div className={styles.VideoItem}>
    <div className={styles.Grid}>
      <video autoPlay controls muted loop height="100%" width="100%">
        <source src="/trailer.mp4" />
      </video>
    </div>
  </div>
}