import Link from "next/link";

export default function Signup() {
    return (
        <div id="wd-signup-screen" className="max-w-sm">
            <h3 className="mb-4 text-2xl font-bold">Sign up</h3>

            <div className="flex flex-col gap-3">
                <input
                    placeholder="username"
                    className="wd-username w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                    defaultValue="ada"
                />
                <input
                    placeholder="password"
                    type="password"
                    className="wd-password w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                    defaultValue="123"
                />
                <input
                    placeholder="verify password"
                    type="password"
                    className="wd-password-verify w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                />

                <Link
                    href="/account/profile"
                    className="w-full rounded bg-red-600 py-2 text-center text-sm font-medium text-white hover:bg-red-700"
                >
                    Sign up
                </Link>

                <Link
                    href="/account/signin"
                    className="text-sm text-red-600 hover:underline"
                >
                    Sign in
                </Link>
            </div>
        </div>
    );
}