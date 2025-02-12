import { palette, theme, tabs } from "@/data/material-2/masonite";
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
            filename={'masonite-m2-palette.json'}
            company="Masonite"
            tabs={tabs}
        />
        <div className="max-w-5xl mx-auto pt-5 px-4">
            <M2Palette company="masonite" palette={palette.scales}/>
        </div>
        </main>
    </div>
    );
}
