import Link from "next/link";

export default function Signin() {
    return (
        <div id="wd-signin-screen" className="max-w-sm">
            <h3 className="mb-4 text-2xl font-bold">Sign in</h3>

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
                    id="wd-ai-signin-note"
                    placeholder="sample note"
                    className="w-full rounded border border-neutral-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
                />
                <Link
                    href="/dashboard"
                    id="wd-signin-btn"
                    className="w-full rounded bg-red-600 py-2 text-center text-sm font-medium text-white hover:bg-red-700"
                >
                    Sign in
                </Link>

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