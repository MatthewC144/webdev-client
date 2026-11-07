"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h3 className="mb-4 text-2xl font-bold">Profile</h3>
      <div className="flex flex-col gap-3">
        <input
          id="wd-username"
          className="wd-username w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
          value={profile.username}
          onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        />
        <input
          id="wd-password"
          type="password"
          className="wd-password w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
          value={profile.password}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        />
        <input
          id="wd-firstname"
          className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
          value={profile.firstName}
          onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        />
        <input
          id="wd-lastname"
          className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
          value={profile.lastName}
          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        />
        <input
          id="wd-email"
          type="email"
          className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
        <select
          id="wd-role"
          className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
          value={profile.role}
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
        <button
          type="button"
          onClick={signout}
          id="wd-signout-btn"
          className="w-full rounded bg-red-600 py-2 text-center text-sm font-medium text-white hover:bg-red-700"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
