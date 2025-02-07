import Sidebar from "@/components/Sidebar";
import Schemes from "@/components/Schemes";
import { theme } from "@/data/masonite";

export default function Page() {

  const data = JSON.stringify(theme);
      const blob = new Blob([data], { type: "application/json" });
      const jsonObjectUrl = URL.createObjectURL(blob);
      const filename = `masonite-m3-tokens.json`;

  return (
    <div className="flex flex-row w-full h-screen">
      <Sidebar/>
      <main className="w-full flex-1 h-full overflow-y-auto">
        <div className="max-w-5xl mx-auto pt-5 px-4">
          <header className="flex items-center w-full mb-4">
              <h1 className="text-headline-medium font-bold w-full flex-1">Schemes and Tokens</h1>
              <a
              className="transition border border-outline-variant px-4 py-2 rounded-lg bg-transparent dark:hover:bg-neutral-20 hover:bg-neutral-95"
              href={jsonObjectUrl}
              download={filename}
              >
              Export JSON
              </a>
          </header>
          <div className="rounded-lg border border-outline-variant overflow-hidden">
            <Schemes theme={theme.schemes.light} mode="Light mode"/>
            <Schemes theme={theme.schemes.dark} mode="Dark mode"/>
          </div>
        </div>
      </main>
    </div>
  );
}
