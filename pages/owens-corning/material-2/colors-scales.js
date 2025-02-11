import { palette, theme } from "@/data/material-2/oc";
import Sidebar from "@/components/Sidebar";

export default function Page() {

    console.log(theme)
  return (
    <div className="flex flex-row w-full h-screen">
      <Sidebar/>
      <main className="w-full flex-1 h-full overflow-y-auto">
        <div className="max-w-5xl mx-auto pt-5 px-4">
            sup OC
        </div>
      </main>
    </div>
  );
}