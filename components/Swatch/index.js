const Swatch = ({ name, value }) => {
    return(
        <div className="flex flex-col border border-outline-variant rounded-lg">
        <div
            className={`h-12 rounded-tr-lg rounded-tl-lg w-full`}
            style={{
                backgroundColor: value
            }}
        />
        <div className="flex flex-col px-2 py-1">
            <span  className="text-label-medium font-bold">
                {name}
            </span>
            <span  className="text-label-small text-on-surface-variant">
                {value}
            </span>
        </div>
        </div>
    )
}

export default Swatch;