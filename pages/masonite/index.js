import Sidebar from "@/components/Sidebar";
import Header from "../../components/Header";
import PageLink from "@/components/PageLink";
import MaterialLogo from "@/components/MaterialLogo";
import DocumentationLink from "@/components/DocumentationLink";

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
        }, {
            version: '3',
            name: 'Color Scales',
            route: '/masonite/material-3/color-scales'
        }, {
            version: '3',
            name: 'Schemes and Tokens',
            route: '/masonite/material-3/schemes-and-tokens'
        }
    ]

  return (
    <div className="flex flex-row w-full h-screen">
      <Sidebar/>
      <main className="w-full flex-1 h-full overflow-y-auto">
        <Header
            title={'Palettes and Tokens'}
            company={'Masonite'}
        />
        <div className="max-w-5xl mx-auto pt-5 px-4">
          <div className="grid grid-cols-2 gap-4">
            <DocumentationLink
                icon={<MaterialLogo/>}
                label={'Material 3 documentation'}
                description={'Material 3 is the latest version of Google’s open-source design system.'}
                href={'https://m3.material.io/'}
            />
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