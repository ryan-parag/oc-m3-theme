import Link from "next/link";
import LogoRender from "../LogoRender";
import React, { useState } from 'react';
import MaterialLogo from '@/components/MaterialLogo';

const TokenIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-80 120-280v-400l360-200 360 200v400L480-80ZM364-590q23-24 53-37t63-13q33 0 63 13t53 37l120-67-236-131-236 131 120 67Zm76 396v-131q-54-14-87-57t-33-98q0-11 1-20.5t4-19.5l-125-70v263l240 133Zm40-206q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm40 206 240-133v-263l-125 70q3 10 4 19.5t1 20.5q0 55-33 98t-87 57v131Z"/></svg>
    )
}

const PaletteIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z"/></svg>
    )
}

const PageLink = ({ version, name, route, company }) => {

    const [isShown, setIsShown] = useState(false);

    return(
        <Link href={route}>
            <div
                className="transition flex flex-col items-center px-4 py-8 bg-surface-container-high rounded-lg hover:bg-neutral-99 dark:hover:bg-neutral-10 relative overflow-hidden group"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                <div className="flex items-center isolate mb-6">
                    <div class={`${company === 'Masonite' ? 'bg-masonite' : 'bg-ocRed'} border border-outline-variant size-16 p-0 grid place-items-center rounded-xl relative left-2.5 top-1.5 -rotate-6 shadow-lg group-hover:-translate-x-5 group-hover:-rotate-12 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200 overflow-hidden`}>
                        <div className="h-full w-full overflow-hidden">
                            <LogoRender company={company}/>
                        </div>
                    </div>
                    <div class="bg-surface-container-highest border border-outline-variant size-16 p-2 grid place-items-center rounded-xl z-10 shadow-lg group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200 relative">
                        <MaterialLogo/>
                    </div>
                    <div class={`${ name === 'Color Scales' ? 'bg-warning-container-high text-on-warning-container-high' : 'bg-info-container-high text-on-info-container-high' } bg-info-container-high text-on-info-container-high border border-outline-variant size-16 p-2 grid place-items-center rounded-xl relative right-2.5 top-1.5 rotate-6 shadow-lg group-hover:translate-x-5 group-hover:rotate-12 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200`}>
                        <span className="h-10 w-10 inline-flex items-center justify-center">
                            {
                                name === 'Color Scales' ? (
                                    <PaletteIcon/>
                                )
                                :
                                (
                                    <TokenIcon/>
                                )
                            }
                        </span>
                    </div>
                </div>
                <div className="text-title-large mb-2">{name}</div>
                <span className={`text-label-large px-3 py-1 rounded-full ${version === '2' ? 'border border-outline-variant' : 'bg-primary-container-low text-on-primary-container-low'}`}>
                    Material {version}
                </span>
            </div>
        </Link>
    )
}

export default PageLink;