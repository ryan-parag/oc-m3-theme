import Sidebar from "@/components/Sidebar";
import M2Schemes from "@/components/M2Schemes";
import { theme } from "@/data/material-2/masonite";
import Header from "@/components/Header";

export default function Page() {

    const data = JSON.stringify(theme);
    const blob = new Blob([data], { type: "application/json" });
    const jsonObjectUrl = URL.createObjectURL(blob);
    const filename = `masonite-m2-tokens.json`;

  return (
    <div className="flex flex-row w-full h-screen">
      <Sidebar/>
      <main className="w-full flex-1 h-full overflow-y-auto">
        <Header
            title={'Material 2 Schemes and Tokens'}
            download={theme}
            filename={'masonite-m2-tokens.json'}
            company="Masonite"
        />
        <div className="max-w-5xl mx-auto pt-5 px-4">
          <div className="rounded-lg border border-outline-variant overflow-hidden">
            <M2Schemes theme={theme.tokens.light} mode="Light mode"/>
            <M2Schemes theme={theme.tokens.dark} mode="Dark mode"/>
          </div>
        </div>
      </main>
    </div>
  );
}
