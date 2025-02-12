import LogoRender from "../LogoRender";

const Header = ({ title, download, company, filename }) => {

    const data = JSON.stringify(download);
    const blob = new Blob([data], { type: "application/json" });
    const jsonObjectUrl = URL.createObjectURL(blob);

    return(
        <div className="pt-12 pb-8 w-full bg-surface-container-highest">
            <header className="flex items-center w-full mb-4 max-w-5xl mx-auto px-4">
                <div className={'flex flex-col w-full flex-1 items-start'}>
                    {
                        company && (
                            <div className="inline-flex items-center mb-2">
                                <div className="h-6 w-6 rounded-full mr-2 overflow-hidden">
                                    <LogoRender company={company}/>
                                </div>
                                <span className="text-sm opacity-50">{company}</span>
                            </div>
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
        </div>
    )
}

export default Header;