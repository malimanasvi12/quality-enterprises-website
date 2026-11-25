"use client";
export default function Error({ reset }: { reset: () => void }) {
  return <div className="grid min-h-screen place-items-center px-5 text-center"><div><h1 className="font-display text-3xl">Something went wrong</h1><button onClick={reset} className="btn btn-primary mt-6">Try again</button></div></div>;
}
