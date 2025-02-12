import LogoRender from "../LogoRender";
import Tab from '../Tab';
import { usePathname } from 'next/navigation';
import Link from "next/link";

const Header = ({ title, download, company, filename, tabs }) => {

    const data = JSON.stringify(download);
    const blob = new Blob([data], { type: "application/json" });
    const jsonObjectUrl = URL.createObjectURL(blob);

    const currentPath = usePathname();

    return(
        <div className={`pt-12 ${tabs ? 'pb-0' : 'pb-8'} w-full bg-surface-container-highest`}>
            <header className="flex items-center w-full max-w-5xl mx-auto px-4">
                <div className={'flex flex-col w-full flex-1 items-start'}>
                    {
                        company && (
                            <Link href={`${company === 'Owens Corning' ? '/owens-corning' : '/masonite'}`}>
                                <div className="inline-flex items-center mb-2 text-on-surface-variant hover:text-on-surface hover:underline">
                                    <div className="h-6 w-6 rounded-full mr-2 overflow-hidden">
                                        <LogoRender company={company}/>
                                    </div>
                                    <span className="text-sm">{company}</span>
                                </div>
                            </Link>
                        )
                    }
                    <h1 className="text-headline-medium font-bold w-full flex-1">{title}</h1>
                </div>
                {
                    download && (
                        <a
                            className="transition border border-outline-variant px-4 py-2 rounded-lg bg-transparent dark:hover:bg-neutral-20 hover:bg-neutral-95"
                            href={jsonObjectUrl}
                            download={filename}
                            >
                            Export JSON
                        </a>
                    )
                }
            </header>
            {
                tabs && (
                    <div className="flex items-center w-full max-w-5xl mx-auto px-4 mt-8">
                        {
                            tabs.map((tab, i) => (
                                <Tab
                                    key={i}
                                    active={currentPath === tab.route}
                                    route={tab.route}
                                >
                                    {tab.name}
                                </Tab>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Header;