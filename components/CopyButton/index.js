import React, { useState } from 'react';

const CopyButton = ({ copyText, text, ghost }) => {
    const [isCopied, setIsCopied] = useState(false);
  
    async function copyTextToClipboard(text) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }
  
    // onClick handler function for the copy button
    const handleCopyClick = () => {
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard(copyText)
        .then(() => {
          // If successful, update the isCopied state value
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return(
        <div>
            <input className="hidden opacity-0 h-0 w-0 absolute -z-10" type="text" value={copyText} readOnly />
            <button
                onClick={handleCopyClick}
                className={`transition justify-center text-label-small inline-flex rounded-md py-1 px-2 hover:underline ${ghost ? 'hover:bg-neutral-0 hover:text-neutral-100' : 'bg-[#00000087] hover:bg-[#000000] text-neutral-100'}`}
            >
                <span>{isCopied ? 'Copied!' : text}</span>
            </button>
        </div>
    )
}

export default CopyButton;