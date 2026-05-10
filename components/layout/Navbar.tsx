"use client";

import { useState } from "react";
import Moon from "../icons/MoonIcon";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex gap-6.5 items-center">
      <div>
        <button
          type="button"
          aria-label="Theme options"
          className="cursor-pointer"
        >
          <Moon className="text-icon w-3.5 h-auto mt-1.5" />
        </button>
      </div>

      <button
        type="button"
        aria-label="Open menu"
        className="cursor-pointer flex flex-col gap-1.25 py-2 px-1 group"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span
          className={`bg-icon w-5 h-0.75 rounded ${open ? "rotate-45 translate-y-1" : ""} duration-300 transition-transform`}
        ></span>
        <span
          className={`bg-icon w-5 h-0.75 rounded ${open ? "-rotate-45 -translate-y-1" : ""} duration-300 transition-transform`}
        ></span>
      </button>

      <div
        className={`absolute w-screen left-0 text-center ${open ? "top-12.75 opacity-100" : "-top-full opacity-0"} transition-all duration-500 ease-out bg-dark-1 pt-5 pb-8.25 border-b border-b-light-1`}
      >
        <ul>
          <li>
            <a
              href="#"
              className="w-7/12 p-2.5 inline-block relative after:h-px after:w-full after:bg-light-1 after:absolute after:left-0 after:bottom-0 text-sm"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-7/12 p-2.5 inline-block relative after:h-px after:w-full after:bg-light-1 after:absolute after:left-0 after:bottom-0 text-sm"
            >
              Power of thought
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-7/12 p-2.5 inline-block relative after:h-px after:w-full after:bg-light-1 after:absolute after:left-0 after:bottom-0 text-sm"
            >
              E=mc2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-7/12 p-2.5 inline-block relative after:h-px after:w-full after:bg-light-1 after:absolute after:left-0 after:bottom-0 text-sm"
            >
              Beyond science
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-7/12 p-2.5 inline-block relative after:h-px after:w-full after:bg-light-1 after:absolute after:left-0 after:bottom-0 text-sm"
            >
              Write to me
            </a>
          </li>
        </ul>
        <button
          type="button"
          aria-label="Go to Explore"
          className="font-semibold border rounded-full px-4.75 py-0.75 text-heading-1 border-light-2 bg-light-1 mt-8.25"
        >
          Explore
        </button>
      </div>
    </nav>
  );
}
