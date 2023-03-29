import styles from "../../styles/03_sections/Banner.module.css";
import Headline1 from "../01_atoms/fonts_headline1";
import Paragraph1 from "../01_atoms/fonts_paragraph1";
import Button from "../01_atoms/button";
import Paragraph2 from "../01_atoms/fonts_paragraph2";

const data = {
  title: "Innovation through AI awaits you, sign up now! \nLet’s build",
  title_bold: " AI for Everyone",

  button: "Apply now!",
  button_link: "https://makeathon23.tum-ai.com/apply",
};

export default function Banner() {
  function playerStyleHandler(e) {
    console.log("moin");
    e.target.nextElementSibling.children[1].style.flex = "unset";
    e.target.parentElement.style.boxShadow = "none";
    e.target.parentElement.style.backgroundColor = "transparent";
    e.target.parentElement.style.padding = 0;
  }

  return (
    <div className={styles.AboutItem}>
      <div className={styles.Description}>
        <div className={styles.Grid}>
            <Headline1
                isH1={false}
                normalContent={data.title}
                highlightedContent={data.title_bold}
                isDarkBackground={false}
            />
            <div className={styles.ButtonSpace}/>
            <div className={styles.Button}>
                <Button
                    content={data.button}
                    link="https://makeathon.tum-ai.com"
                    isDarkBackground={false}
                />
            </div>
        </div>
      </div>
    </div>
  );
}
