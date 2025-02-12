import LogoRender from '../LogoRender';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const NavItem = ({ href, label, active, version }) => {

    return(
        <Link href={href}>
            <div className={`transition rounded-lg flex items-center px-4 py-3 h-12 ${active ? 'bg-primary-container-low text-on-primary-container-low' : 'bg-transparent hover:bg-neutral-99 dark:hover:bg-neutral-10 text-on-surface-variant'}`}>
                <div className="flex flex-col w-full items-start">
                    {
                        version && (
                            <span className="text-xs text-on-surface-variant">{version}</span>
                        )
                    }
                    <span className="text-body-large w-full flex-1">{label}</span>
                </div>
            </div>
        </Link>
    )
}

const Sidebar = () => {

    const currentPath = usePathname();
    const [isHidden, setIsHidden] = useState(false);

    const navItems = [
        {
            group: null,
            parent: '/',
            items: [
                {
                    name: 'Home',
                    route: '/',
                    version: false
                }
            ]
        }, {
            group: 'Owens Corning',
            parent: '/owens-corning',
            items: [
                {
                    name: 'Color Scales',
                    route: '/owens-corning/material-2/color-scales',
                    version: 'Material 2'
                }, {
                    name: 'Schemes and Tokens',
                    route: '/owens-corning/material-2/schemes-and-tokens',
                    version: 'Material 2'
                },{
                    name: 'Color Scales',
                    route: '/owens-corning/material-3/color-scales',
                    version: 'Material 3'
                }, {
                    name: 'Schemes and Tokens',
                    route: '/owens-corning/material-3/schemes-and-tokens',
                    version: 'Material 3'
                }
            ]
        }, {
            group: 'Masonite',
            parent: '/masonite',
            items: [
                {
                    name: 'Color Scales',
                    route: '/masonite/material-2/color-scales',
                    version: 'Material 2'
                }, {
                    name: 'Schemes and Tokens',
                    route: '/masonite/material-2/schemes-and-tokens',
                    version: 'Material 2'
                }, {
                    name: 'Color Scales',
                    route: '/masonite/material-3/color-scales',
                    version: 'Material 3'
                }, {
                    name: 'Schemes and Tokens',
                    route: '/masonite/material-3/schemes-and-tokens',
                    version: 'Material 3'
                }
            ]
        }
    ]

    return(
        <>
            {
                isHidden && (
                    <button
                        className={`inline-flex items-center justify-center h-10 w-10 rounded-lg bg-surface-container-highest dark:hover:bg-neutral-20 hover:bg-neutral-95 border border-outline-variant fixed top-5 left-6 z-10 shadow-md`}
                        onClick={() => setIsHidden(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                    </button>
                )
            }
            {
                !isHidden && (
                    <div className="bg-surface-container-high w-80 h-full relative">
                        {
                            !isHidden && (
                                <button
                                    onClick={() => setIsHidden(true)}
                                    className={'inline-flex items-center justify-center h-10 w-10 rounded-lg bg-surface-container-highest dark:hover:bg-neutral-20 hover:bg-neutral-95 border border-outline-variant shadow-md absolute top-5 -right-4'}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                                </button>
                            )
                        }
                        <Link href="/">
                            <div className="flex items-center p-4 border-b border-outline-variant">
                                <div className="w-10">
                                    <LogoRender company="Owens Corning"/>
                                </div>
                                <span className="text-title-large font-bold ml-4">Material Themes</span>
                            </div>
                        </Link>
                        <div className={`grid grid-cols-1 gap-2 px-4 mt-4`}>
                            {
                                navItems.map((item, i) => (
                                    <div key={i} className="grid grid-cols-1 gap-1">
                                        {
                                            item.group !== null && (
                                                <Link href={item.parent}>
                                                    <div className="text-on-surface-variant text-label-large mt-1 mb-2 flex flex-row items-center px-4 hover:underline">
                                                        <div className="h-6 w-6 mr-2 rounded-full overflow-hidden">
                                                            <LogoRender company={item.group}/>
                                                        </div>
                                                        <span className="opacity-60 font-medium">{item.group}</span>
                                                    </div>
                                                </Link>
                                            )
                                        }
                                        {
                                            item.items.map((x, i) => (
                                                <NavItem key={i} version={x.version} href={x.route} label={x.name} active={currentPath === x.route}/>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Sidebar;