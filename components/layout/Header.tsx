import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-secondary-bg w-full">
      <div className="flex justify-between w-11/12 mx-auto py-3 items-center gap-5">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Albert Einstein logo"
            width={314}
            height={45}
            className="h-5.5 w-auto"
          />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
