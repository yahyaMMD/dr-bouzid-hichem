"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { signOut, useSession } from "next-auth/react";
import { Dentist } from "../lib/Data";

import * as animationData from '../public/animations/navAnimation.json';
import Lottie from "react-lottie";


export default function NavBar() {
  const { data: session, status } = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, []);

  const role = session?.user?.role ?? "User"; // Default to 'User' if role is undefined

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      {/* Top Section */}
      <div className="border-b-2">
        <div className="flex flex-row justify-between items-center mx-2 sm:mx-4 md:mx-8 lg:mx-16">
          <div>
            <p className="uppercase sm:font-semibold sm:text-[16px] text-[12px] text-gray-800 ">
                {Dentist.navText}
            </p>
          </div>

          <div className="flex flex-row gap-4">
            {/* Clickable Email */}
            <a
              href="mailto:mouloud.aroul@gmail.com"
              className="flex flex-row gap-2 items-center text-white bg-blue-400 font-mono px-2 py-1 font-semibold"
            >
              <MdEmail />
              <p className="hidden sm:block">{Dentist.email}</p>
            </a>
            {/* Clickable Phone */}
            <a
              href="tel:+213662996965"
              className="flex flex-row gap-2 items-center font-bold font-mono text-[18px]"
            >
              <FaPhoneVolume className="text-blue-400" />
              <p className="hidden sm:block">{Dentist.phone2}</p>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex flex-row md:hidden justify-between items-center bg-white mx-2 py-2">
        <div className="flex items-center justify-center">
        <a href="/">
          <Image
            src={Dentist.logo}
            width={100}
            height={100}
            alt="logo"
          />
          </a>
        </div>
        <div onClick={toggleSidebar} className="cursor-pointer">
          <FaBars className="text-blue-500" size={40} />
        </div>
      </div>

      {/* Sidebar */}
      <div>
        <div
          className={`z-50 fixed top-0 left-0 h-full w-64 bg-gray-50 text-blue-400 p-4 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden`}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-bold">Menu</div>
            <div onClick={toggleSidebar} className="cursor-pointer">
              <FaTimes size={40} />
            </div>
          </div>
          <ul>
            {[
              {
                name: "Accueil",
                link: "/",
              },
              {
                name: "À Propos",
                link: "/dr-bouzid",
              },
              {
                name: "Galerie",
                link: "/galerie",
              },
              {
                name: "Blog",
                link: "/",
              },
              {
                name: "Carrière",
                link: "/dr-bouzid#Carrière",
              },
              {
                name: "Promotions",
                link: "/",
              },
              {
                name: "Contact",
                link: "/#Contact",
              },
            ].map((item, index) => (
              <li key={index} className="mb-2">
                <a
                  href={item.link}
                  className="hover:text-gray-400"
                  onClick={toggleSidebar}
                >
                  {item.name}
                </a>
              </li>
            ))}

            {status === "loading" ? (
              <></>
            ) : session?.user ? (
              role === "Admin" ? (
                <div className="flex flex-col items-center justify-center">
                  <li className="mb-6 my-8">
                    <Link
                      href="/dashboard"
                      className="text-white text-[18px] font-bold font-mono px-4 py-2 rounded-full bg-green-400"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <button
                    onClick={() => signOut()}
                    className="py-2 px-4 text-white bg-red-400  font-mono font-bold rounded-full"
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => signOut()}
                  className="py-2 px-4 mt-8  text-white bg-red-400  text-center font-mono font-semibold rounded-full flex items-center justify-center"
                >
                  Sign out
                </button>
              )
            ) : (
              <div className="flex flex-col items-center justify-center">
              <li className="mb-6 my-8">
                <Link
                      href="/auth/login"
                      className="text-white px-4 py-2 rounded-full bg-blue-400 font-mono font-bold text-[18px]"
                    >
                      Se connecter
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link
                      href="/auth/register"
                      className="text-white px-4 py-2 rounded-full bg-green-400 font-mono font-bold text-[18px]"
                    >
                      S&#39;inscrire
                    </Link>
                  </li>
              </div>
            )}

          </ul>
        </div>
      </div>

      {/* Main Desktop Navbar */}
      <div className="hidden md:flex flex-row justify-between item.names-center mx-8 border-b-2">
        <div className="flex flex-row items-center gap-4">
          <Image
          
            src="/images/hospital.png"
            width={140}
            height={100}
            alt="logo"
          />
          <div className="flex flex-col gap-2">
            <p className="font-mono font-semibold text-gray-400">
                {Dentist.location}
            </p>
            <p className="text-[26px] font-bold font-mono text-gray-800">
                {Dentist.phone1}
            </p>
          </div>
        </div>

        <div>
          <a href="/">
          <Image
            src={Dentist.logo}
            width={140}
            height={100}
            alt="logo"
            className="mt-4"
          />
          </a>
        </div>

        {/* Conditional Rendering of Buttons Based on Role */}
        <div className="flex flex-row items-center gap-6">
        <div className="flex flex-col gap-2">

          {status === "loading" ? (
            <></>
          ) : session?.user ? (
            role === "Admin" ? (
              <>
                <a
                  href="/dashboard"
                  className="relative inline-block py-1 px-4 text-white bg-blue-400 overflow-hidden group text-center font-mono font-semibold rounded-full"
                >
                  <span className="absolute inset-0 bg-gray-900 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></span>
                  <span className="relative z-10">Dashboard</span>
                </a>
                <button
                  onClick={() => signOut()}
                  className="relative inline-block py-1 px-4 text-white bg-red-400 overflow-hidden group text-center font-mono font-semibold rounded-full"
                  >
                  Sign out
                </button>
              </>
            ) : (
              <button
              onClick={() => signOut()}
                className="relative inline-block py-1 px-4 text-white bg-red-400 overflow-hidden group text-center font-mono font-semibold rounded-full"
              >
                Sign out
              </button>
            )
          ) : (
            <>
              <a
                href="/auth/login"
                className="relative inline-block py-1 px-4 text-gray-800 bg-white hover:text-white overflow-hidden group text-center font-mono font-bold rounded-full text-[18px]"
              >
                <span className="absolute inset-0 bg-gray-900 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></span>
                <span className="relative z-10">Se connecter</span>
              </a>

              <a
                href="/auth/register"
                className="relative inline-block py-1 px-4 text-white bg-blue-400 overflow-hidden group text-center font-mono font-semibold rounded-full"
              >
                <span className="absolute inset-0 bg-gray-900 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></span>
                <span className="relative z-10">S&#39;inscrire</span>
              </a>
            </>
          )}
            </div>

            <Lottie options={defaultOptions} height={180} width={180} />

        </div>
      </div>

      {/* Secondary Nav Links */}
      <nav className="bg-white shadow-md sticky w-full z-50 hidden md:block">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex-grow flex justify-center">
            <div className="flex space-x-8">
              {[
              {
                name: "Accueil",
                link: "/",
              },
              {
                name: "À Propos",
                link: "/dr-bouzid",
              },
              {
                name: "Galerie",
                link: "/galerie",
              },
              {
                name: "Blog",
                link: "/",
              },
              {
                name: "Carrière",
                link: "/dr-bouzid#Carrière",
              },
              {
                name: "Promotions",
                link: "/",
              },
              {
                name: "Contact",
                link: "/#Contact",
              },
            ].map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={item.link}
                    className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
                  >
                    {item.name}
                  </a>
                  <span className="block h-0.5 bg-blue-600 absolute bottom-0 left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
