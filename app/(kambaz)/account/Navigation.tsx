"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
    const pathname = usePathname();

    const links = [
        { label: "Sign in", href: "/account/signin" },
        { label: "Sign up", href: "/account/signup" },
        { label: "Profile", href: "/account/profile" },
    ];

    return (
        <div id="wd-account-navigation" className="flex flex-col gap-1 text-sm">
            {links.map((link) => {
                const isActive = pathname.includes(link.href);
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`rounded px-3 py-2 text-left font-medium transition-colors ${isActive
                                ? "bg-white font-bold text-black border-l-2 border-black"
                                : "text-red-600 hover:bg-neutral-100"
                            }`}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </div>
    );
}