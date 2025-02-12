import Sidebar from "@/components/Sidebar";
import Header from "../../../components/Header";
import PageLink from "@/components/PageLink";
import { tabs } from "@/data/material-3/oc";
import DocumentationLink from "@/components/DocumentationLink";
import MaterialLogo from "@/components/MaterialLogo";

export default function Page() {

    const pages = [
        {
            version: '3',
            name: 'Color Scales',
            route: '/owens-corning/material-3/color-scales'
        }, {
            version: '3',
            name: 'Schemes and Tokens',
            route: '/owens-corning/material-3/schemes-and-tokens'
        }
    ]

  return (
    <div className="flex flex-row w-full h-screen">
      <Sidebar/>
      <main className="w-full flex-1 h-full overflow-y-auto">
        <Header
            title={'M3 Palettes and Tokens'}
            company={'Owens Corning'}
            tabs={tabs}
        />
        <div className="max-w-5xl mx-auto pt-5 px-4">
          <div className="grid grid-cols-2 gap-4">
            <DocumentationLink
                icon={<MaterialLogo/>}
                label={'Material 3 documentation'}
                description={'Material 3 is the latest version of Google’s open-source design system.'}
                href={'https://m3.material.io/'}
            />
            {
                pages.map((item, i) => (
                    <PageLink
                        key={i}
                        name={item.name}
                        route={item.route}
                        version={item.version}
                        company={'Owens Corning'}
                    />
                ))
            }
          </div>
        </div>
      </main>
    </div>
  );
}