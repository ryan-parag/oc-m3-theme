import OCLogo from "@/components/OCLogo";
import MasoniteLogo from "../MasoniteLogo";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const NavItem = ({ href, label, active }) => {

    return(
        <Link href={href}>
            <div className={`transition rounded-lg flex items-center px-4 py-3 h-12 ${active ? 'bg-primary-container-low text-on-primary-container-low' : 'bg-transparent hover:bg-neutral-99 dark:hover:bg-neutral-10 text-on-surface-variant'}`}>
                <span className="text-body-large w-full flex-1">{label}</span>
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
                    route: '/'
                }
            ]
        }, {
            group: 'Owens Corning',
            items: [
                {
                    name: 'Color Scales',
                    route: '/owens-corning/color-scales'
                }, {
                    name: 'Schemes and Tokens',
                    route: '/owens-corning/schemes-and-tokens'
                }
            ]
        }, {
            group: 'Masonite',
            items: [
                {
                    name: 'Color Scales',
                    route: '/masonite/color-scales'
                }, {
                    name: 'Schemes and Tokens',
                    route: '/masonite/schemes-and-tokens'
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
                                    <div className="text-on-surface-variant text-label-large my-1 flex flex-row items-center px-4">
                                        <div className="h-6 w-6 mr-2 rounded-full overflow-hidden">
                                            <LogoRender company={item.group}/>
                                        </div>
                                        <span className="opacity-60 font-medium">{item.group}</span>
                                    </div>
                                )
                            }
                            {
                                item.items.map((x, i) => (
                                    <NavItem key={i} href={x.route} label={x.name} active={currentPath === x.route}/>
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