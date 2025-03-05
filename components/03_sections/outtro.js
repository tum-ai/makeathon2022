import styles from '../../styles/03_sections/Outtro.module.css'
import Button from '../01_atoms/button'
import Headline1 from '../01_atoms/fonts_headline1'
import Paragraph1 from '../01_atoms/fonts_paragraph1'
import Ticket from '../02_molecules/ticket'

export default function Outtro(){
  return <div className={styles.OuttroItem}>
    <div className={styles.Background}>
      <div className={styles.ConatinerBG}></div>
    </div>
    <div className={styles.Content}>
      <div className={styles.Grid}>
        <div className={styles.TicketContainer}>
          <Ticket position={"left"} version={"previous"}/>
        </div>
        <div className={styles.TextContainer}>
          <Headline1 isH1={false} isDarkBackground normalContent={"🚀 Our 2023 "} highlightedContent={"Makeathon"}/>
          <div className={styles.ParagraphContainer}>
            <Paragraph1 isDarkBackground normalContent={"If you want to learn more about our student initiative, click the link below:"} />
          </div>
          <div className={styles.buttonWrapper}>
            <Button isDarkBackground link="https://www.tum-ai.com/" content={"Learn more about TUM.ai"}/>
          </div>
          <div className={styles.buttonWrapper}>
            <Button isDarkBackground link="https://tumai-makeathon-october-2022.devpost.com/project-gallery" content={"Explore past projects"}/>
          </div>
        </div>
      </div>
    </div>
  </div>
}