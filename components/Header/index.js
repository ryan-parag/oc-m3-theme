import LogoRender from "../LogoRender";
import Tab from '../Tab';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Code from "../Code";
import CopyButton from "../CopyButton";

const SideSheet = ({ open, setOpen, download, filename }) => {

    const data = JSON.stringify(download);
    const blob = new Blob([data], { type: "application/json" });
    const jsonObjectUrl = URL.createObjectURL(blob);

    return(
        <>
            <motion.div
                className="h-screen bg-surface-container-high w-full border-l border-outline-variant max-w-lg fixed top-0 bottom-0 right-0 z-20 flex flex-col"
                initial={{ opacity: 0, right: '-500px' }}
                animate={{ opacity: 1, right: 0 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
            >
                <div className="flex items-center justify-start p-4 border-b border-outline-variant w-full">
                    <button
                        onClick={() => setOpen(false)}
                        className="transition border border-outline-variant p-1 rounded-lg bg-transparent dark:hover:bg-neutral-20 hover:bg-neutral-95 inline-flex justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </button>
                    <span className="text-title-large font-bold ml-4">
                        Preview JSON
                    </span>
                </div>
                <div className="h-full w-full overflow-y-scroll p-4">
                    <div className="mb-4">
                        <CopyButton
                            text={'Copy JSON'}
                            copyText={data}
                            large
                        />
                    </div>
                    <Code>
                        {JSON.stringify(download, null, 2)}
                    </Code>
                </div>
                <div className="border-t border-outline-variant w-full pt-4 px-4 pb-8 grid grid-cols-1 gap-4">
                    <a
                        className="transition border border-outline-variant px-4 py-2 rounded-lg bg-transparent dark:hover:bg-neutral-20 hover:bg-neutral-95 inline-flex justify-center"
                        href={jsonObjectUrl}
                        download={filename}
                        >
                        Export JSON
                    </a>
                </div>
            </motion.div>
            <div
                className="fixed top-0 bottom-0 right-0 left-0 z-10 bg-neutral-10 opacity-50"
                role="button"
                onClick={() => setOpen(false)}
            />
        </>
    )
}

const Header = ({ title, download, company, filename, tabs }) => {

    const data = JSON.stringify(download);
    const blob = new Blob([data], { type: "application/json" });
    const jsonObjectUrl = URL.createObjectURL(blob);

    const currentPath = usePathname();
    const [open, setOpen] = useState(false);

    return(
        <>
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
                            <button
                                onClick={() => setOpen(true)}
                                className="transition border border-outline-variant px-4 py-2 rounded-lg bg-transparent dark:hover:bg-neutral-20 hover:bg-neutral-95 inline-flex justify-center"
                            >
                                Preview JSON
                            </button>
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
            {
                open && (
                    <SideSheet
                        open={open}
                        setOpen={setOpen}
                        download={download}
                        filename={filename}
                    />
                )
            }
        </>
    )
}

export default Header;