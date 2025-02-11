import { palette, theme } from "@/data/material-3/oc";
import Sidebar from "@/components/Sidebar";
import M3Palette from "@/components/M3Palette";

export default function Page() {

  return (
    <div className="flex flex-row w-full h-screen">
      <Sidebar/>
      <main className="w-full flex-1 h-full overflow-y-auto">
        <div className="max-w-5xl mx-auto pt-5 px-4">
          <M3Palette palette={palette} company={'owens-corning'}/>
        </div>
      </main>
    </div>
  );
}
