const DocumentationLink = ({ href, label, description, icon }) => {
    return(
        <a
            href={href}
            target="_blank"
            className="col-span-2 rounded-lg p-4 bg-surface-container-high hover:bg-neutral-99 dark:hover:bg-neutral-10 flex items-center"
        >
            {
                icon && (
                    <div className="h-10 w-10 mr-4">
                        {icon}
                    </div>
                )
            }
            <div className="flex flex-col items-start w-full flex-1">
                <div className="text-title-medium font-bold">{label}</div>
                {
                    description && (<div className="mt-1 text-body-medium text-on-surface-variant">{description}</div>)
                }
            </div>
            <div className="h-6 w-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
            </div>
        </a>
    )
}

export default DocumentationLink;