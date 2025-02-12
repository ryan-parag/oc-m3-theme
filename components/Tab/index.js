import Link from "next/link";
import React, { useState } from 'react';

const Tab = ({ active, route, children }) => {

    const [hover, setIsHover] = useState(false);

    return(
        <Link href={route}>
            <div
                className={`transition pt-2 flex flex-col items-center bg-surface-container-highest dark:hover:bg-neutral-20 hover:bg-neutral-95`}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <span className="mt-1 mb-3 px-4 text-label-large">{children}</span>
                <span className={`transition h-0.5 w-full ${active ? 'bg-primary' : 'bg-transparent'} ${hover && 'bg-surface-container'}`}/>
            </div>
        </Link>
    )
}

export default Tab;