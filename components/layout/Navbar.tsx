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
    </nav>
  );
}
