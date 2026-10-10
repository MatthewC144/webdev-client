import Link from "next/link";

export default function Profile() {
    return (
        <div id="wd-profile-screen" className="max-w-sm">
            <h3 className="mb-4 text-2xl font-bold">Profile</h3>

            <div className="flex flex-col gap-3">
                <input
                    defaultValue="alice"
                    placeholder="username"
                    className="wd-username w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                />
                <input
                    defaultValue="123"
                    placeholder="password"
                    type="password"
                    className="wd-password w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                />
                <input
                    defaultValue="Alice"
                    placeholder="First Name"
                    id="wd-firstname"
                    className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                />
                <input
                    defaultValue="Wonderland"
                    placeholder="Last Name"
                    id="wd-lastname"
                    className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                />
                <input
                    defaultValue="2000-01-01"
                    type="date"
                    id="wd-dob"
                    className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                />
                <input
                    defaultValue="alice@wonderland"
                    type="email"
                    id="wd-email"
                    className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                />
                <select
                    defaultValue="FACULTY"
                    id="wd-role"
                    className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                >
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                </select>

                <Link
                    href="/account/signin"
                    className="w-full rounded bg-red-600 py-2 text-center text-sm font-medium text-white hover:bg-red-700"
                >
                    Sign out
                </Link>
            </div>
        </div>
    );
}