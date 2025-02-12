import { palette, theme, tabs } from "@/data/material-3/masonite";
import Sidebar from "@/components/Sidebar";
import M3Palette from "@/components/M3Palette";
import Header from "@/components/Header";

export default function Page() {

  return (
    <div className="flex flex-row w-full h-screen">
      <Sidebar/>
      <main className="w-full flex-1 h-full overflow-y-auto">
        <Header
            title={'Material 3 Color Scales'}
            download={palette}
            filename={'masonite-m3-palette.json'}
            company="Masonite"
            tabs={tabs}
        />
        <div className="max-w-5xl mx-auto pt-5 px-4">
            <M3Palette palette={palette} company={'masonite'}/>
        </div>
      </main>
    </div>
  );
}
