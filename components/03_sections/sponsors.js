import styles from "../../styles/03_sections/Sponsors.module.css";
import Headline2 from "../01_atoms/fonts_headline2";
import Headline1 from "../01_atoms/fonts_headline1";

import Paragraph1 from "../01_atoms/fonts_paragraph1";
import Paragraph2 from "../01_atoms/fonts_paragraph2";
import Image from "next/image";
import Link from "next/link";

export default function Sponsors() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900 mb-16">
          Makeathon 2024 Industry Partners
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none justify-center">
          {[
            {
              name: "Reply",
              url: "https://www.reply.com/arlanis-reply/de/",
              src: "/assets/Reply.png",
            },
            {
              name: "Osapiens",
              url: "https://www.osapiens.com/de",
              src: "/assets/Osapiens.png",
            },
            {
              name: "Salesforce",
              url: "https://www.salesforce.com/de/",
              src: "/assets/salesforce.png",
            },
            {
              name: "Mercedes",
              url: "https://www.mercedes-benz.de/",
              src: "/assets/Mercedes.png",
            },
            {
              name: "GResearch",
              url: "https://www.gresearch.com/",
              src: "/assets/G-Research.png",
            },
            {
              name: "QuantCo",
              url: "https://www.quantco.com/",
              src: "/assets/QuantCo.png",
            },
            {
              name: "Care for Rare",
              url: "https://www.care-for-rare.org/",
              src: "/assets/CareforRare.png",
            },
            {
              name: "Hauner",
              url: "https://www.lmu-klinikum.de/hauner/kinder-und-kinderpoliklinik",
              src: "/assets/Hauner.png",
            },
            {
              name: "LMU Klinikum",
              url: "https://www.lmu-klinikum.de/",
              src: "/assets/LMUKlinikum.png",
            },
            {
              name: "MI for People",
              url: "https://www.munich-ecosystem.de/",
              src: "/assets/MI4People.png",
            },
            {
              name: "Check24",
              url: "https://jobs.check24.de/de/",
              src: "/assets/Check24.png",
            },
            {
              name: "Helmholtz Munich",
              url: "https://www.helmholtz-munich.de/en",
              src: "/assets/Helmholtz.png",
            },
            {
              name: "Jane Street",
              url: "https://www.janestreet.com/",
              src: "/assets/JaneStreet.png",
            },
            {
              name: "JetBrains",
              url: "https://www.jetbrains.com/",
              src: "/assets/JetBrains.png",
            },
            {
              name: "msg",
              url: "https://www.msg.group/",
              src: "/assets/msg.png",
            },
            {
              name: "Ryver",
              url: "https://ryver.ai/",
              src: "/assets/ryver.png",
            },
          ].map((item) => (
            <Link key={item.name} href={item.url} passHref>
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 cursor-pointer self-center"
                src={item.src}
                alt={item.name}
                width={158}
                height={48}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// export default function Sponsors() {
//   return (
//     <div className={styles.SponsorsItem}>
//       <div className={styles.Grid}>
//         <div className={styles.TitleContainer}>
//           <Headline1
//             style={{ width: "auto" }}
//             isDarkBackground={false}
//             normalContent={
//               "Makeathon 2024 Industry Partners"
//             }
//           />
//         </div>

//         <div
//           style={{ opacity: "0.5" }}
//           className={styles.TopContainer}
//         >
//           <div className={styles.Separator}></div>
//           <Headline2
//             style={{ width: "auto" }}
//             isDarkBackground={false}
//             normalContent={""}
//           />
//           <div className={styles.Separator}></div>
//         </div>

//         <div className={styles.Sponsors}>
//           <Link
//             href="https://www.reply.com/arlanis-reply/de/"
//             passHref
//           >
//             <div className={styles.Premium_bigger}>
//               <Image
//                 src={"/assets/Reply.png"}
//                 alt="Reply"
//                 layout="fill"
//                 objectFit="contain"
//               />
//             </div>
//           </Link>
//           <Link href="https://www.gresearch.com/" passHref>
//             <div className={styles.Premium}>
//               <Image
//                 src={"/assets/G-Research.png"}
//                 alt="GResearch"
//                 layout="fill"
//                 objectFit="contain"
//               />
//             </div>
//           </Link>
//           <Link href="https://www.quantco.com/" passHref>
//             <div className={styles.Premium}>
//               <Image
//                 src={"/assets/QuantCo.png"}
//                 alt="Quantco"
//                 layout="fill"
//                 objectFit="contain"
//               />
//             </div>
//           </Link>
//           <Link
//             href="https://www.care-for-rare.org/"
//             passHref
//           >
//             <div className={styles.Premium_smaller}>
//               <Image
//                 src={"/assets/CareforRare.png"}
//                 alt="Care for Rare"
//                 layout="fill"
//                 objectFit="contain"
//               />
//             </div>
//           </Link>
//           <Link
//             href="https://www.lmu-klinikum.de/hauner/kinder-und-kinderpoliklinik"
//             passHref
//           >
//             <div className={styles.Premium_smaller}>
//               <Image
//                 src={"/assets/Hauner.png"}
//                 alt="Hauner"
//                 layout="fill"
//                 objectFit="contain"
//               />
//             </div>
//           </Link>
//           <Link
//             href="https://www.lmu-klinikum.de/"
//             passHref
//           >
//             <div className={styles.Premium_smaller}>
//               <Image
//                 src={"/assets/LMUKlinikum.png"}
//                 alt="LMU"
//                 layout="fill"
//                 objectFit="contain"
//               />
//             </div>
//           </Link>
//           <Link
//             href="https://www.munich-ecosystem.de/"
//             passHref
//           >
//             <div className={styles.Premium_smaller}>
//               <Image
//                 src={"/assets/MI4People.png"}
//                 alt="MI"
//                 layout="fill"
//                 objectFit="contain"
//               />
//             </div>
//           </Link>
//           <div className={styles.SponsorsGrid}>
//             {/*/!* 1st row */
//             /*}*/}
//             <div className={styles.SponsorsRow}>
//               <Link
//                 href="https://jobs.check24.de/de/"
//                 passHref
//               >
//                 <div className={styles.Sponsor}>
//                   <Image
//                     src={"/assets/Check24.png"}
//                     alt="Check24"
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </div>
//               </Link>
//               <Link
//                 href="https://www.osapiens.com/de"
//                 passHref
//               >
//                 <div className={styles.Sponsor_bigger}>
//                   <Image
//                     src={"/assets/Osapiens.png"}
//                     alt="Osapiens"
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </div>
//               </Link>

//               <Link
//                 href="https://www.helmholtz-munich.de/en"
//                 passHref
//               >
//                 <div className={styles.Sponsor_bigger}>
//                   <Image
//                     src={"/assets/Helmholtz.png"}
//                     alt="Helmholtz"
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </div>
//               </Link>

//               <Link
//                 href="https://www.janestreet.com/"
//                 passHref
//               >
//                 <div className={styles.Sponsor_bigger}>
//                   <Image
//                     src={"/assets/JaneStreet.png"}
//                     alt="Jane Street"
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </div>
//               </Link>

//               <Link
//                 href="https://www.jetbrains.com/"
//                 passHref
//               >
//                 <div className={styles.Sponsor_bigger}>
//                   <Image
//                     src={"/assets/JetBrains.png"}
//                     alt="Jet Brains"
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </div>
//               </Link>

//               <Link
//                 href="https://www.mercedes-benz.de/"
//                 passHref
//               >
//                 <div className={styles.Sponsor_bigger}>
//                   <Image
//                     src={"/assets/Mercedes.png"}
//                     alt="Mercedes"
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </div>
//               </Link>

//               <Link href="https://www.msg.group/" passHref>
//                 <div className={styles.Sponsor_bigger}>
//                   <Image
//                     src={"/assets/msg.png"}
//                     alt="msg"
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </div>
//               </Link>

//               <Link href="https://ryver.ai/" passHref>
//                 <div className={styles.Sponsor_bigger}>
//                   <Image
//                     src={"/assets/ryver.png"}
//                     alt="ryver"
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </div>
//               </Link>

//               <Link
//                 href="https://www.salesforce.com/de/"
//                 passHref
//               >
//                 <div className={styles.Sponsor_bigger}>
//                   <Image
//                     src={"/assets/salesforce.png"}
//                     alt="salesforce"
//                     layout="fill"
//                     objectFit="contain"
//                   />
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
