import Link from "next/link";
import ToggleDarkMode from "@/app/components/ToggleDarkMode";
import { buttonVariants } from "@/components/ui/button"


export default function Navbar() {
  return (
    <div className="w-full mx-auto border-b py-2 px-4 bg-zinc-100 dark:bg-zinc-950 sticky top-0 backdrop-blur-md">
      <div className="container flex items-center justify-between">
        <div className="flex">
          <Link href="/">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl">
              Quantum Prop
            </h1>
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          <ToggleDarkMode />
          <Link href="/sign-in" className={buttonVariants({ variant: "default" })}>Sign in</Link>
        </div>
      </div>
    </div>
  );
}
