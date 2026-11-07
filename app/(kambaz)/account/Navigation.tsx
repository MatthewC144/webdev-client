"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
  const pathname = usePathname() ?? "";
  return (
    <div
      id="wd-account-navigation"
      className="flex flex-col gap-1 text-sm"
    >
      {links.map((link) => {
        const href = `/account/${link}`;
        const isActive = pathname.includes(href);
        return (
          <Link
            key={link}
            href={href}
            className={`rounded px-3 py-2 text-left font-medium transition-colors ${
              isActive
                ? "border-l-2 border-black bg-white font-bold text-black"
                : "text-red-600 hover:bg-neutral-100"
            }`}
          >
            {link === "signin"
              ? "Signin"
              : link === "signup"
                ? "Signup"
                : "Profile"}
          </Link>
        );
      })}
    </div>
  );
}
