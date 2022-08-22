import { useState, useEffect } from "react";
import styles from "../../styles/02_molecules/PersonalDetailForm.module.css";
import DateInput from "../01_atoms/dateInput";
import DropDownInput from "../01_atoms/dropDownInput";
import Headline2 from "../01_atoms/fonts_headline2";
import Paragraph1 from "../01_atoms/fonts_paragraph1";
import TextInput from "../01_atoms/textInput";
import TextAreaInput from "../01_atoms/textAreaInput";
import BoolInput from "../01_atoms/boolInput";

export default function PersonalDetailForm({
  data,
  onInputChange,
  isControlled,
  setIsAppValid,
}) {
  const [isDataConsentConfirmed, setIsDataConsentConfirmed] = useState(false);

  const [isPageValid, setIsPageValid] = useState({
    firstname: data.firstname !== "",
    lastname: data.lastname !== "",
    email: data.email !== "",
    nationality: data.nationality !=="",
    placeOfResidence: data.placeOfResidence !== "",
    timeZone: data.timeZone !== "",
    dateOfBirth: data.dateOfBirth !== "",
    //agreement: data.agreement !== false,
    
  });


  function checkPageStatus() {
    const isCurrentStateValid = Object.keys(isPageValid).reduce(
      (valid, key) => {
        const value = isPageValid[key];
        return valid && value;
      },
      true
    );
    setIsAppValid(isCurrentStateValid)
  }

  useEffect(() => checkPageStatus());

  const validateEmail = (email) => {
    const emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return emailRegex.test(email);
  };

  return (
    <div className={styles.PersonalDetailFormItem}>
      <div className={styles.Grid}>
        <div className={styles.Left}>
          <Headline2 normalContent={"Personal Information"} isDarkBackground />
          <Paragraph1
            normalContent={
              ""
            }
            isDarkBackground
          />
        </div>
        <div className={styles.Right}>
          <div className={styles.Content}>
            <div className={styles.Half}>
              <TextInput
                headerText="First name*"
                placeholderText="Enter first name ..."
                withIcon={false}
                name="firstname"
                onContentChange={(event) => onInputChange(event)}
                value={data.firstname}
                isControlled={isControlled}
                setIsValid={(value) => {
                  let obj = isPageValid;
                  obj.firstname = value;
                  setIsPageValid(obj);
                  checkPageStatus();
                }}
                isRequired={true}
              />
            </div>
            <div className={styles.Half}>
              <TextInput
                headerText="Last name*"
                placeholderText="Enter last name ..."
                withIcon={false}
                name="lastname"
                onContentChange={(event) => onInputChange(event)}
                value={data.lastname}
                isControlled={isControlled}
                setIsValid={(value) => {
                  let obj = isPageValid;
                  obj.lastname = value;
                  setIsPageValid(obj);
                  checkPageStatus();
                }}
                isRequired={true}
              />
            </div>
            <div className={styles.Full}>
              <TextInput
                headerText="Email address*"
                placeholderText="Enter your email adress ..."
                withIcon={true}
                iconPath="/assets/application/email.svg"
                name="email"
                onContentChange={(event) => onInputChange(event)}
                value={data.email}
                isControlled={isControlled}
                setIsValid={(value) => {
                  let obj = isPageValid;
                  obj.email = value;
                  setIsPageValid(obj);
                  checkPageStatus();
                }}
                isRequired={true}
                dataValidator={(email) => validateEmail(email)}
              />
            </div>
            <div className={styles.Half}>
              <DateInput
                headerText="Date of birth*"
                placeholderText="Select date ..."
                name="dateOfBirth"
                onContentChange={(event) => onInputChange(event)}
                value={data.dateOfBirth}
                isControlled={isControlled}
                setIsValid={(value) => {
                  let obj = isPageValid;
                  obj.dateOfBirth = value;
                  setIsPageValid(obj);
                  checkPageStatus();
                }}
                isRequired={true}
              />
            </div>
            <div className={styles.Half}>
              <DropDownInput
                headerText="Nationality*"
                placeholderText="Where are you from?"
                withIcon={true}
                iconPath="/assets/application/land.svg"
                name="nationality"
                onContentChange={(event) => onInputChange(event)}
                value={data.nationality}
                isControlled={isControlled}
                setIsValid={(value) => {
                  let obj = isPageValid;
                  obj.nationality = value;
                  setIsPageValid(obj);
                  checkPageStatus();
                }}
                isRequired={true}
              >
                <option value="">Where are you from?</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">
                  Cocos (Keeling) Islands
                </option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of the">
                  Congo, The Democratic Republic of the
                </option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'Ivoire">Cote D&rsquo;Ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">
                  Falkland Islands (Malvinas)
                </option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">
                  French Southern Territories
                </option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">
                  Heard Island and Mcdonald Islands
                </option>
                <option value="Holy See (Vatican City State)">
                  Holy See (Vatican City State)
                </option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic Of">
                  Iran, Islamic Republic Of
                </option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People'S Republic of">
                  Korea, Democratic People&rsquo;S Republic of
                </option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People'S Democratic Republic">
                  Lao People&rsquo;S Democratic Republic
                </option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">
                  Libyan Arab Jamahiriya
                </option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">
                  Macedonia, The Former Yugoslav Republic of
                </option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">
                  Micronesia, Federated States of
                </option>
                <option value="Moldova, Republic of">Monaco</option>
                <option value="Monaco">Moldova, Republic of</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">
                  Netherlands Antilles
                </option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">
                  Northern Mariana Islands
                </option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">
                  Palestinian Territory, Occupied
                </option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="RWANDA">RWANDA</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">
                  Saint Pierre and Miquelon
                </option>
                <option value="Saint Vincent and the Grenadines">
                  Saint Vincent and the Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia and Montenegro">
                  Serbia and Montenegro
                </option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and the South Sandwich Islands">
                  South Georgia and the South Sandwich Islands
                </option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">
                  Svalbard and Jan Mayen
                </option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">
                  Syrian Arab Republic
                </option>
                <option value="Taiwan, Province of China">
                  Taiwan, Province of China
                </option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">
                  Tanzania, United Republic of
                </option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-Leste">Timor-Leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">
                  Turks and Caicos Islands
                </option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">
                  United States Minor Outlying Islands
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">
                  Virgin Islands, British
                </option>
                <option value="Virgin Islands, U.S">Virgin Islands, U.S</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </DropDownInput>
            </div>
            <div className={styles.Full}>
              <TextInput
                headerText="Place of Residence at the time of the Makeathon?*"
                placeholderText="Enter place here..."
                name="placeOfResidence"
                onContentChange={(event) => onInputChange(event)}
                value={data.placeOfResidence}
                isControlled={isControlled}
                setIsValid={(value) => {
                  let obj = isPageValid;
                  obj.placeOfResidence = value;
                  setIsPageValid(obj);
                  checkPageStatus();
                }}
                isRequired={true}
              />
            </div>
            <div className={styles.Half}>
              <DropDownInput
                headerText="Time Zone*"
                withIcon={false}
                name="timeZone"
                onContentChange={(event) => onInputChange(event)}
                value={data.timeZone}
                isControlled={isControlled}
                setIsValid={(value) => {
                  let obj = isPageValid;
                  obj.timeZone = value;
                  setIsPageValid(obj);
                  checkPageStatus();
                }}
                isRequired={true}
              >
                <option value="">Choose ...</option>
                <option value="CET UTC+1">🇩🇪 Berlin, Germany</option>
                <option value="MSK UTC+3">🇷🇺 Moscow, Russian Federation</option>
                <option value="GST UTC+4">
                  🇦🇪 Dubai, United Arab Emirates
                </option>
                <option value="IST UTC+5:30">🇮🇳 Mumbai, India</option>
                <option value="CST UTC+8">🇨🇳 Beijing, China</option>
                <option value="JST UTC+9">🇯🇵 Tokyo, Japan</option>
                <option value="AEDT UTC+11">🇦🇺 Sydney, Australia</option>
                <option value="NZDT UTC+13">🇳🇿 Auckland, New Zealand</option>
                <option value="PST UTC-8">🇺🇸 Pacific Time (US)</option>
                <option value="MST UTC-7">🇺🇸 Mountain Time (US)</option>
                <option value="CST UTC-6">🇺🇸 Central Time (US)</option>
                <option value="EST UTC-5">🇺🇸 Eastern Time (US)</option>
                <option value="BRT UTC-3">🇧🇷 Rio de Janeiro, Brazil</option>
                <option value="GMT">🇬🇧 London, United Kingdom</option>
              </DropDownInput>
            </div>
            <div className={styles.Full}>
              <BoolInput
                headerText="I accept that my name and e-mail will be forwarded to the partners and GPU providers of the makeathon"
                name="agreement"
                onContentChange={(event) =>{
                   onInputChange(event);
                   setIsDataConsentConfirmed(event.target.checked);
                  }}
                value={isDataConsentConfirmed}
                isControlled={isControlled}
                // setIsValid={(value) => {
                //   let obj = isPageValid;
                //   obj.agreement = value;
                //   setIsPageValid(obj);
                //   checkPageStatus();
                // }}
                isRequired={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
