import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-black px-6 text-center">
      <h1 className="text-5xl font-bold text-black dark:text-white">404</h1>

      <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-400">
        The page you’re looking for could not be found.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-black px-6 py-3 text-white dark:bg-white dark:text-black"
      >
        Go Home
      </Link>
    </div>
  );
}
