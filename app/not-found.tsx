import Link from "next/link";
export default function NotFound() {
  return <div className="grid min-h-screen place-items-center px-5 text-center"><div><h1 className="font-display text-4xl">Page not found</h1><Link href="/" className="btn btn-primary mt-6">Back to home</Link></div></div>;
}
