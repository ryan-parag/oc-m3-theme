import Sidebar from "@/components/Sidebar";
import M3Schemes from "@/components/M3Schemes";
import { theme } from "@/data/material-3/oc";
import Header from "@/components/Header";

export default function Page() {

  return (
    <div className="flex flex-row w-full h-screen">
      <Sidebar/>
      <main className="w-full flex-1 h-full overflow-y-auto">
        <Header
            title={'Material 3 Schemes and Tokens'}
            download={theme}
            filename={'owens-corning-m3-tokens.json'}
            company={'Owens Corning'}
        />
        <div className="max-w-5xl mx-auto pt-5 px-4">
          <div className="rounded-lg border border-outline-variant overflow-hidden">
            <M3Schemes theme={theme.schemes.light} mode="Light mode"/>
            <M3Schemes theme={theme.schemes.dark} mode="Dark mode"/>
          </div>
        </div>
      </main>
    </div>
  );
}
