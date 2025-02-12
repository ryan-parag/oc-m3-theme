import React, { useState } from 'react';

const Collapse = ({ title, children }) => {
    const [open, setOpen] = useState(false);
  
    return(
      <div className={`transition flex flex-col w-full ${open && 'bg-surface-container-highest'}`}>
        <button className={`transition capitalize flex justify-between p-4 bg-transparent hover:bg-neutral-99 dark:hover:bg-neutral-10 ${!open && 'hover:bg-neutral-A94 dark:hover:bg-neutral-A12 border-b border-outline-variant'}`} onClick={() => setOpen(!open)}>
          <span className="text-title-medium">{title}</span>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={`transition transform ${open && 'rotate-180'}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        {
          open && (
            <div className="px-4 pb-4 border-b border-outline-variant">
              {children}
            </div>
          )
        }
      </div>
    )
}

export default Collapse;