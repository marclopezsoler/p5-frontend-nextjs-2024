import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen py-16 flex flex-col items-center justify-center gap-4">
      <p className="font-normal">Page not found</p>
      <Link href="/" className="font-bold cursor-pointer text-xl">Back to home</Link>
    </div>
  );
}
