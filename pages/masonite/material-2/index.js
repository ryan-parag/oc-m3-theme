import Sidebar from "@/components/Sidebar";
import Header from "../../../components/Header";
import PageLink from "@/components/PageLink";
import { tabs } from '@/data/material-2/masonite';
import DocumentationLink from "@/components/DocumentationLink";
import MaterialLogo from "@/components/MaterialLogo";

export default function Page() {

    const pages = [
        {
            version: '2',
            name: 'Color Scales',
            route: '/masonite/material-2/color-scales'
        }, {
            version: '2',
            name: 'Schemes and Tokens',
            route: '/masonite/material-2/schemes-and-tokens'
        }
    ]

  return (
    <div className="flex flex-row w-full h-screen">
      <Sidebar/>
      <main className="w-full flex-1 h-full overflow-y-auto">
        <Header
            title={'M2 Palettes and Tokens'}
            company={'Masonite'}
            tabs={tabs}
        />
        <div className="max-w-5xl mx-auto pt-5 px-4">
          <div className="grid grid-cols-2 gap-4">
            <DocumentationLink
                icon={<MaterialLogo/>}
                label={'Material 2 documentation'}
                description={'Material 2 is the legacy version of Google’s open-source design system.'}
                href={'https://m2.material.io/'}
            />
            {
                pages.map((item, i) => (
                    <PageLink
                        key={i}
                        name={item.name}
                        route={item.route}
                        version={item.version}
                        company={'Masonite'}
                    />
                ))
            }
          </div>
        </div>
      </main>
    </div>
  );
}