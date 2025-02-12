import React, { useState } from 'react';
import CopyButton from "@/components/CopyButton";

const TokenBlock = ({ color, text, children}) => {
    const [isShown, setIsShown] = useState(false);
    return(
        <div
            className="flex flex-col items-start w-full h-20 text-xs px-2 py-2 truncate"
            style={{
                color: text,
                backgroundColor: color
            }}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <CopyButton ghost copyText={children} text={children}/>
            {
                isShown && (
                    <div className="mt-1">
                        <CopyButton copyText={color} text={color}/>
                    </div>
            )
            }
        </div>
    )
}

export default TokenBlock;