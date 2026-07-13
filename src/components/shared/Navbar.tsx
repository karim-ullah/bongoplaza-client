"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
type LinkType = {
  href: string;
  label: string;
};
const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const links: LinkType[] = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/deals", label: "Deals" },
    { href: "/brand", label: "Brand" },
    { href: "/support", label: "Support" },
    { href: "/about", label: "About" },
  ];

  const navLinks = (
    <>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            className="font-dmSans text-sm font-normal text-[#6B7A99]"
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/60 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between container">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div>
            <Link
              href={"/"}
              className="font-bold text-xl text-[#E8EDF8] uppercase"
            >
              Bongoplaza
            </Link>
          </div>
        </div>

        <div>
          <ul className="hidden items-center gap-4 md:flex">{navLinks}</ul>
        </div>
        <div className="flex items-center gap-4 text-[#6B7A99]">
          <IoIosSearch className="cursor-pointer" size={16} />

          {user && (
            <Link href={"login"}>
              <FiUser className="cursor-pointer" size={16} />
            </Link>
          )}
          <FiShoppingCart className="cursor-pointer" size={16} />
          {user ? (
            <div className="relative">
              <Avatar className="size-8">
                <Avatar.Image
                  alt="Online User"
                  src={user?.image}
                />
                <Avatar.Fallback>ON</Avatar.Fallback>
              </Avatar>
              <span className="absolute right-0 bottom-0 size-2 rounded-full bg-green-500 ring-2 ring-background" />
            </div>
          ) : (
            <Button>Sign In</Button>
          )}
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{navLinks}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
