import { useEffect, useState } from 'react';
import styles from '../../styles/02_molecules/SummaryForm.module.css';
import BoolInput from '../01_atoms/boolInput';
import Headline2 from '../01_atoms/fonts_headline2';
import Paragraph1 from '../01_atoms/fonts_paragraph1';

export default function SubmitForm({ data, setIsAppValid }) {
  const [isDataConsentConfirmed, setIsDataConsentConfirmed] = useState(false);

  useEffect(() => setIsAppValid(isDataConsentConfirmed));

  function bool2string(in_bool){
    if(in_bool){
      return "yes";
    }
    else{
      return "no";
    }
  }
  
  return (
    <div className={styles.SubmitFormItem}>
      <div className={styles.Grid}>
        <div className={styles.Left}>
          <Headline2 normalContent={"Personal Info"} isDarkBackground/>
          <Paragraph1 normalContent={""} isDarkBackground/>
        </div>
        <div className={styles.Right}>
          <div className={styles.TextGrid}>
            <div className={styles.TextLeft}>
              <p className={styles.TextLabel}> First Name: </p> 
            </div>
            <div className={styles.TextRight}>
              <p className={styles.Text}> {data.firstname} </p> 
            </div>
          </div>
          <div className={styles.TextGrid}>
            <div className={styles.TextLeft}>
              <p className={styles.TextLabel}> Last Name: </p> 
            </div>
            <div className={styles.TextRight}>
              <p className={styles.Text}> {data.lastname} </p> 
            </div>
          </div>
          <div className={styles.TextGrid}>
            <div className={styles.TextLeft}>
              <p className={styles.TextLabel}> E-Mail: </p> 
            </div>
            <div className={styles.TextRight}>
              <p className={styles.Text}> {data.email} </p> 
            </div>
          </div>
          <div className={styles.TextGrid}>
            <div className={styles.TextLeft}>
              <p className={styles.TextLabel}> Nationality: </p> 
            </div>
            <div className={styles.TextRight}>
              <p className={styles.Text}> {data.nationality} </p> 
            </div>
          </div>
          <div className={styles.TextGrid}>
            <div className={styles.TextLeft}>
              <p className={styles.TextLabel}> Place of Residence: </p> 
            </div>
            <div className={styles.TextRight}>
              <p className={styles.Text}> {data.placeOfResidence} </p> 
            </div>
          </div>
          <div className={styles.TextGrid}>
            <div className={styles.TextLeft}>
              <p className={styles.TextLabel}> Time Zone: </p> 
            </div>
            <div className={styles.TextRight}>
              <p className={styles.Text}> {data.timeZone} </p> 
            </div>
          </div>
          <div className={styles.TextGrid}>
            <div className={styles.TextLeft}>
              <p className={styles.TextLabel}> Area of Expertise: </p> 
            </div>
            <div className={styles.TextRight}>
              <p className={styles.Text}> {data.areaOfExpertise} </p> 
            </div>
          </div>
          <div className={styles.TextGrid}>
            <div className={styles.TextLeft}>
              <p className={styles.TextLabel}> Agreement: </p> 
            </div>
            <div className={styles.TextRight}>
              <p className={styles.Text}> {bool2string(data.agreement)} </p> 
            </div>
          </div>
          
        </div>
      </div>

      <div className={styles.Grid}>
        <div className={styles.Left}>
          <Headline2 normalContent={"Your Background & Digital Appearance"} isDarkBackground/>
          <Paragraph1 normalContent={""} isDarkBackground/>
        </div>
        
        <div className={styles.Right}>
          {data.resume !== undefined && 
            <div className={styles.TextGrid}>
              <div className={styles.TextLeft}>
                <p className={styles.TextLabel}> Pursuing a degree: </p> 
              </div>
              <div className={styles.TextRight}>
                <p className={styles.Text}> {bool2string(data.universityBool)} </p> 
              </div>
            </div>
          }
          {data.linkedin !== "" &&
            <div className={styles.TextGrid}>
              <div className={styles.TextLeft}>
                <p className={styles.TextLabel}> University: </p> 
              </div>
              <div className={styles.TextRight}>
                <p className={styles.Text}> {data.university}</p> 
              </div>
            </div>
          }
          {data.linkedin !== "" &&
            <div className={styles.TextGrid}>
              <div className={styles.TextLeft}>
                <p className={styles.TextLabel}> Area of Expertise: </p> 
              </div>
              <div className={styles.TextRight}>
                <p className={styles.Text}> {data.areaOfExpertise}</p> 
              </div>
            </div>
          }
          {data.linkedin !== "" &&
            <div className={styles.TextGrid}>
              <div className={styles.TextLeft}>
                <p className={styles.TextLabel}> LinkedIn: </p> 
              </div>
              <div className={styles.TextRight}>
                <p className={styles.Text}> {data.linkedIn}</p> 
              </div>
            </div>
          }
          {data.otherDigitalAppearance !== "" &&
            <div className={styles.TextGrid}>
              <div className={styles.TextLeft}>
                <p className={styles.TextLabel}> Personal Website: </p> 
              </div>
              <div className={styles.TextRight}>
                <p className={styles.Text}> {data.otherDigitalAppearance} </p> 
              </div>
            </div>
          }
          {data.github !== "" && 
            <div className={styles.TextGrid}>
              <div className={styles.TextLeft}>
                <p className={styles.TextLabel}> Github: </p> 
              </div>
              <div className={styles.TextRight}>
                <p className={styles.Text}> {data.github} </p> 
              </div>
            </div>
          }
        </div>
      </div>

      <div className={styles.Grid}>
        <div className={styles.Left}>
          <Headline2 normalContent={"Makeathon Info"} isDarkBackground/>
          <Paragraph1 normalContent={""} isDarkBackground/>
        </div>
        <div className={styles.Right}>        
          <div className={styles.TextGrid}>
            <div className={styles.TextLeft}>
              <p className={styles.TextLabel}> Are you part of a team: </p> 
            </div>
            <div className={styles.TextRight}>
              <p className={styles.Text}> {data.isTeamBool} </p> 
            </div>
          </div>
          <div className={styles.TextGrid}>
            <div className={styles.TextLeft}>
              <p className={styles.TextLabel}> Name of the team members: </p> 
            </div>
            <div className={styles.TextRight}>
              <p className={styles.Text}> {data.teamDetails} </p> 
            </div>
          </div>
          <div className={styles.TextGrid}>
            <div className={styles.TextLeft}>
              <p className={styles.TextLabel}> Attending mode: </p> 
            </div>
            <div className={styles.TextRight}>
              <p className={styles.Text}> {data.attendingMode} </p> 
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Grid}>
        <div className={styles.Left}>
        <Headline2 normalContent={"Data Protection Statement"} isDarkBackground/>
          <Paragraph1 normalContent={""} isDarkBackground/>
          <p className={styles.Text}> The data protection statement can be found <a href="https://tum-ai.com/datenschutz" className={styles.Link}>here</a>. </p>
        </div>
        <div className={styles.Right}>
          <BoolInput
            headerText={"I agree to the Data Protection Statement.*"}
            value={isDataConsentConfirmed}
            onContentChange={(event) => {
              setIsDataConsentConfirmed(event.target.checked);
            }}
          />
        </div>
      </div>
    </div>
  );
}