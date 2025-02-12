import { palette, theme } from "@/data/material-2/oc";
import Sidebar from "@/components/Sidebar";
import M2Palette from "@/components/M2Palette";
import Header from "@/components/Header";

export default function Page() {

  return (
    <div className="flex flex-row w-full h-screen">
      <Sidebar/>
      <main className="w-full flex-1 h-full overflow-y-auto">
        <Header
            title={'Material 2 Color Scales'}
            download={palette}
            filename={'owens-corning-m2-palette.json'}
            company="Owens Corning"
        />
        <div className="max-w-5xl mx-auto pt-5 px-4">
            <M2Palette palette={palette.scales}/>
        </div>
      </main>
    </div>
  );
}
