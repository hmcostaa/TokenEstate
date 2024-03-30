import React from "react";
import Link from "next/link";
import { RainbowKitCustomConnectButton } from "./scaffold-eth";

/**
 * Site header
 */
export const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="about">About Us</Link>
            </li>
            <li>
              <Link href="howitworks">How it works</Link>
            </li>
            <li>
              <Link href="listings">Listings</Link>
            </li>
            <li>
              <Link href="faq">FAQ</Link>
            </li>
            <li>
              <Link href="contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <img src="/logo.svg" alt="TokenEstate logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/howitworks">How it works</Link>
          </li>
          <li>
            <Link href="/listings">Listings</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end z-10">
        <RainbowKitCustomConnectButton />
      </div>
    </div>
  );
};
