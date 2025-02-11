import OCLogo from "@/components/OCLogo";
import MasoniteLogo from "../MasoniteLogo";
import Link from "next/link";
import { usePathname } from 'next/navigation'

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

const LogoRender = ({ company }) => {

    const getLogo = (x) => {
        switch(x) {
            case 'Masonite':
                return <MasoniteLogo/>
                break;
            case 'Owens Corning':
                return <OCLogo/>
                break;
            default:
                return null
                break;
        }
    }

    return(
        <>
            {
                getLogo(company)
            }
        </>
    )
}

const Sidebar = () => {

    const currentPath = usePathname();

    const navItems = [
        {
            group: null,
            items: [
                {
                    name: 'Home',
                    route: '/',
                    version: false
                }
            ]
        }, {
            group: 'Owens Corning',
            items: [
                {
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
        <div className="bg-surface-container-high w-80 h-full">
            <Link href="/">
                <div className="flex items-center p-4 border-b border-outline-variant">
                    <div className="w-10">
                        <OCLogo/>
                    </div>
                    <span className="text-title-large font-bold ml-4">Material M3 Themes</span>
                </div>
            </Link>
            <div className={`grid grid-cols-1 gap-2 px-4 mt-4`}>
                {
                    navItems.map((item, i) => (
                        <div key={i} className="grid grid-cols-1 gap-1">
                            {
                                item.group !== null && (
                                    <div className="text-on-surface-variant text-label-large mt-1 mb-2 flex flex-row items-center px-4">
                                        <div className="h-6 w-6 mr-2 rounded-full overflow-hidden">
                                            <LogoRender company={item.group}/>
                                        </div>
                                        <span className="opacity-60 font-medium">{item.group}</span>
                                    </div>
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

export default Sidebar;