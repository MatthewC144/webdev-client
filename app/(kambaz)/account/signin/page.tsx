"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as db from "../../database";
import { useAccountContext } from "../AccountContext";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signin = () => {
    const user = db.users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password,
    );
    if (!user) return;
    setCurrentUser(user);
    router.push("/dashboard");
  };

  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h3 className="mb-4 text-2xl font-bold">Sign in</h3>
      <div className="flex flex-col gap-3">
        <input
          placeholder="username"
          id="wd-username"
          className="wd-username w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <input
          placeholder="password"
          type="password"
          id="wd-password"
          className="wd-password w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button
          type="button"
          onClick={signin}
          id="wd-signin-btn"
          className="w-full rounded bg-red-600 py-2 text-center text-sm font-medium text-white hover:bg-red-700"
        >
          Sign in
        </button>
        <Link
          href="/account/signup"
          id="wd-signup-link"
          className="text-sm text-red-600 hover:underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
