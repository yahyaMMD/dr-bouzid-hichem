import {
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faEnvelope,
  faLocationDot,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { Dentist } from "../lib/Data";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-[95%] md:w-[95%] lg:w-[90%] mx-auto my-8 gap-4 md:gap-4 lg:gap-10">
        <div className="flex flex-col gap-4">
          <div>
            <Image
              src={Dentist.logo}
              width={140}
              height={120}
              alt="logo"
            />
          </div>
          <div id="footer-text">
            <p>
              Au cabinet dentaire {Dentist.name}, notre vision est centrée sur
              la priorité accordée à la dentisterie préventive comme pierre
              angulaire pour obtenir un sourire sain et magnifique.
            </p>
          </div>
          <div className="flex flex-row gap-6">
            <div className="flex items-center justify-center rounded-full bg-blue-800 w-12 h-12 cursor-pointer social-icon">
              <a href="https://web.facebook.com/Docteur.hichem.bouzid">

              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ color: "#ffffff" }}
                width={15}
              />
              </a>
            </div>
            <div className="flex items-center justify-center rounded-full bg-pink-600 w-12 h-12 cursor-pointer social-icon">
              <a href="/">

              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#ffffff" }}
                width={25}
              />
              </a>
            </div>
            <div className="flex items-center justify-center rounded-full bg-blue-400 w-12 h-12 cursor-pointer social-icon">
              <a href="https://maps.app.goo.gl/g9qg1Bj5TzGpmqdb9">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#ffffff" }}
                width={25}
              />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center gap-4">
            <div className="flex items-center justify-center rounded-full bg-blue-400 w-12 h-12 cursor-pointer contact-icon">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "#ffffff" }}
                width={25}
              />
            </div>
            <div id="footer-text">
              <p id="footer-title">Téléphone</p>
              <p>{Dentist.phone1}</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="flex items-center justify-center rounded-full bg-blue-400 w-12 h-12 cursor-pointer contact-icon">
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#ffffff" }}
                width={30}
              />
            </div>
            <div id="footer-text">
              <p id="footer-title">Email</p>
              <p>{Dentist.email}</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div className="flex items-center justify-center rounded-full bg-blue-400 w-12 h-12 cursor-pointer contact-icon">
              <FontAwesomeIcon
                icon={faMapLocationDot}
                style={{ color: "#ffffff" }}
                width={30}
              />
            </div>
            <div id="footer-text">
              <p id="footer-title">Adresse</p>
              <p>{Dentist.clinicName}</p>
              <p>{Dentist.location}</p>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4">
            <div className="flex items-center justify-center rounded-full bg-blue-400 w-12 h-12 cursor-pointer contact-icon">
              <FontAwesomeIcon
                icon={faClock}
                style={{ color: "#ffffff" }}
                width={30}
              />
            </div>
            <div id="footer-text">
              <p id="footer-title">Horaires d&#39;ouverture</p>
              <p>Sam–Jeu: 9:00-17:00 | Ven: Fermé</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-row space-x-4 mb-4 justify-center items-center">
            <a href="#" className="hover:text-blue-400 footer-link text-center">
              Conditions d&#39;utilisation
            </a>
            <a href="#" className="hover:text-blue-400 footer-link text-center">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-blue-400 footer-link text-center">
              Paramètres des cookies
            </a>
          </div>
          <div className="flex flex-col text-xl text-gray-500 justify-center items-center">
            <p>&copy; 2024 {Dentist.name} Dental Clinic</p>
            <p>Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
