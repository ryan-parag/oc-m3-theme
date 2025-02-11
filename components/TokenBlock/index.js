import React, { useState } from 'react'

const TokenBlock = ({ color, text, children}) => {
    const [isShown, setIsShown] = useState(false);
    return(
        <div
            className="flex flex-col items-start w-full h-16 text-xs px-2 py-2 truncate"
            style={{
                color: text,
                backgroundColor: color
            }}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            {children}
            {
                isShown && (<span className="opacity-50 mt-1">{color}</span>)
            }
        </div>
    )
}

export default TokenBlock;