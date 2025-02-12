import Link from "next/link";
import LogoRender from "../components/LogoRender";

export default function Page() {

  return (
    <div className="flex flex-row w-full h-screen">
      <main className="w-full flex-1 h-full overflow-y-auto">
        <div className="w-full h-full max-w-5xl mx-auto pt-5 px-4 flex flex-col items-center justify-center">
            <div className="flex flex-col rounded-lg p-6 bg-surface-container-high items-center w-full">
                <div className="h-10 w-10 overflow-hidden rounded-full mb-4">
                    <LogoRender company="Owens Corning"/>
                </div>
                <h1 className="text-headline-large font-bold">404</h1>
                <span className="text-on-surface-variant text-body-large mb-4">This page could not be found</span>
                <Link href="/">
                    <span className="transition border border-outline-variant px-4 py-2 rounded-lg bg-transparent dark:hover:bg-neutral-20 hover:bg-neutral-95">
                        Return home
                    </span>
                </Link>
            </div>
        </div>
      </main>
    </div>
  );
}
