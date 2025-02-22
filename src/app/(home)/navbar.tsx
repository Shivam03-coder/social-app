import Image from "next/image";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const MenuItems = [
  {
    label: "Solutions",
    href: "/solutions",
    color: "#bbf7d0",
  },
  {
    label: "Products",
    href: "/products",
    color: "#fed7aa",
  },
  {
    label: "Pricing",
    href: "/pricing",
    color: "#FDB7EA",
  },
  {
    label: "Resources",
    href: "/resources",
    color: "#B2A5FF",
  },
];

const Menu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {MenuItems.map((item) => (
          <NavigationMenuItem
            key={item.label}
            className="rounded-xl p-1 transition-colors duration-300"
            style={{ "--hover-color": item.color } as React.CSSProperties}
          >
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} block rounded-lg px-4 py-2 font-lexend font-normal transition-colors duration-300 hover:bg-[var(--hover-color)]`}
                style={{ fontSize: "17px" }}
              >
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Navbar = () => {
  return (
    <header className="w-full dark:bg-gray-900">
      <nav className="mx-auto mt-5 flex min-h-[80px] w-[90%] items-center justify-between rounded-full px-5 transition-all hover:bg-white">
        <div className="flex items-center gap-x-7">
          <div className="flex items-center gap-x-2">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              SOCIAL-X
            </h1>
          </div>
          <div className="block max-lg:hidden">
            <Menu />
          </div>
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-x-4 max-lg:hidden">
          <Link href="/login" legacyBehavior passHref>
            <button className="rounded-full bg-gray-900 px-8 py-3 text-base font-semibold text-white transition-colors focus:outline-none">
              Log in
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
