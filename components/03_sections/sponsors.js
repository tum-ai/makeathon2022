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
          Makeathon 2025 Industry Partners
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none justify-center">
          {[
            {
              name: "Reply",
              url: "https://www.reply.com/de/about/careers/de",
              src: "/assets/Reply - LOGO_Negative_RGB.png",
            },
            {
              name: "Osapiens",
              url: "https://www.osapiens.com/de",
              src: "/assets/Osapiens.png",
            },
            {
              name: "Salesforce",
              url: "https://www.salesforce.com/de/",
              src: "/assets/Salesforce.png",
            },
            {
              name: "Mercedes",
              url: "https://www.mercedes-benz.de/",
              src: "/assets/Mercedes.png",
            },
            {
              name: "Jane Street",
              url: "https://www.janestreet.com/",
              src: "/assets/JaneStreet.png",
            },
            {
              name: "QuantCo",
              url: "https://www.quantco.com/",
              src: "/assets/QuantCo.png",
            },
            {
              name: "GResearch",
              url: "https://www.gresearch.com/",
              src: "/assets/G-Research.png",
            },
            {
              name: "JetBrains",
              url: "https://www.jetbrains.com/",
              src: "/assets/JetBrains.png",
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
              src: "/assets/check24.svg",
            },
            {
              name: "Helmholtz Munich",
              url: "https://www.helmholtz-munich.de/en",
              src: "/assets/Helmholtz.png",
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
