import CopyButton from '../CopyButton';
import React, { useState } from 'react';

const Swatch = ({ name, value }) => {

    const [isShown, setIsShown] = useState(false);

    return(
        <div
            className="flex flex-col border border-outline-variant rounded-lg"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            <div
                className={`h-12 rounded-tr-lg rounded-tl-lg w-full flex items-center justify-center`}
                style={{
                    backgroundColor: value
                }}
            >
                {
                    isShown && (
                        <CopyButton copyText={value.toUpperCase()} text={value.toUpperCase()}/>
                    )
                }
            </div>
            <div className="flex flex-col px-2 py-1">
                <span  className="text-label-medium font-bold">
                    {name}
                </span>
                <span  className="text-label-small text-on-surface-variant uppercase">
                    {value}
                </span>
            </div>
        </div>
    )
}

export default Swatch;