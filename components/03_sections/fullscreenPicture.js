import styles from '../../styles/03_sections/FullscreenPicture.module.css'
import Image from "next/image"

export default function FullscreenPicture(){
  return <div className={styles.FullscreenPictureItem}>
    <Image src="/assets/fullscreen.png" alt="TUM.ai members" layout='fill' objectFit='cover'/>
  </div>
}