import Collapse from "../Collapse"

const Block = ({ color, text, children}) => {
    return(
        <div
            className="flex w-full h-14 text-xs px-2 py-2 truncate"
            style={{
                color: text,
                backgroundColor: color
            }}
        >
            {children}
        </div>
    )
}

const Schemes = ({ theme, mode }) => {

    return(
        <Collapse title={`${mode} (${Object.keys(theme).length} tokens)`}>
            <div className="grid grid-cols-6 gap-2">
                <div className="flex flex-col">
                    <Block color={theme.primary} text={theme.onPrimary}>Primary</Block>
                    <Block color={theme.onPrimary} text={theme.primary}>onPrimary</Block>
                    <Block color={theme.primaryContainerLow} text={theme.onPrimaryContainerLow}>primaryContainerLow</Block>
                    <Block color={theme.onPrimaryContainerLow} text={theme.primaryContainerLow}>onPrimaryContainerLow</Block>
                    <Block color={theme.primaryContainerHigh} text={theme.onPrimaryContainerHigh}>primaryContainerHigh</Block>
                    <Block color={theme.onPrimaryContainerHigh} text={theme.primaryContainerHigh}>onPrimaryContainerHigh</Block>
                    <Block color={theme.inverseSurface } text={theme.inverseOnSurface}>inverseSurface</Block>
                    <Block color={theme.inverseOnSurface} text={theme.inverseSurface}>inverseOnSurface</Block>
                    <Block color={theme.inversePrimary} text={theme.inverseSurface}>inversePrimary</Block>
                </div>
                <div className="flex flex-col">
                    <Block color={theme.secondary} text={theme.onSecondary}>Secondary</Block>
                    <Block color={theme.onSecondary} text={theme.secondary}>onSecondary</Block>
                    <Block color={theme.secondaryContainer} text={theme.onSecondaryContainer}>secondaryContainer</Block>
                    <Block color={theme.onSecondaryContainer} text={theme.secondaryContainer}>onSecondaryContainer</Block>
                </div>
                <div className="flex flex-col">
                    <Block color={theme.error} text={theme.onError}>Error</Block>
                    <Block color={theme.onError} text={theme.error}>onError</Block>
                    <Block color={theme.errorContainerLow} text={theme.onErrorContainerLow}>errorContainerLow</Block>
                    <Block color={theme.onErrorContainerLow} text={theme.errorContainerLow}>onErrorContainerLow</Block>
                    <Block color={theme.errorContainerHigh} text={theme.onErrorContainerHigh}>errorContainerHigh</Block>
                    <Block color={theme.onErrorContainerHigh} text={theme.errorContainerHigh}>onErrorContainerHigh</Block>
                    <Block color={theme.inverseErrorSurface } text={theme.inverseOnErrorSurface}>inverseErrorSurface</Block>
                    <Block color={theme.inverseOnErrorSurface} text={theme.inverseErrorSurface}>inverseOnErrorSurface</Block>
                    <Block color={theme.inverseError} text={theme.inverseErrorSurface}>inverseError</Block>
                </div>
                <div className="flex flex-col">
                    <Block color={theme.warning} text={theme.onWarning}>Warning</Block>
                    <Block color={theme.onWarning} text={theme.warning}>onWarning</Block>
                    <Block color={theme.warningContainerLow} text={theme.onWarningContainerLow}>warningContainerLow</Block>
                    <Block color={theme.onWarningContainerLow} text={theme.warningContainerLow}>onWarningContainerLow</Block>
                    <Block color={theme.warningContainerHigh} text={theme.onWarningContainerHigh}>warningContainerHigh</Block>
                    <Block color={theme.onWarningContainerHigh} text={theme.warningContainerHigh}>onWarningContainerHigh</Block>
                </div>
                <div className="flex flex-col">
                    <Block color={theme.success} text={theme.onSuccess}>Success</Block>
                    <Block color={theme.onSuccess} text={theme.success}>onSuccess</Block>
                    <Block color={theme.successContainerLow} text={theme.onSuccessContainerLow}>successContainerLow</Block>
                    <Block color={theme.onSuccessContainerLow} text={theme.successContainerLow}>onSuccessContainerLow</Block>
                    <Block color={theme.successContainerHigh} text={theme.onSuccessContainerHigh}>successContainerHigh</Block>
                    <Block color={theme.onSuccessContainerHigh} text={theme.successContainerHigh}>onSuccessContainerHigh</Block>
                    <Block color={theme.inverseSuccessSurface } text={theme.inverseOnSuccessSurface}>inverseSuccessSurface</Block>
                    <Block color={theme.inverseOnSuccessSurface} text={theme.inverseSuccessSurface}>inverseOnSuccessSurface</Block>
                    <Block color={theme.inverseSuccess} text={theme.inverseSuccessSurface}>inverseSuccess</Block>
                </div>
                <div className="flex flex-col">
                    <Block color={theme.info} text={theme.onInfo}>info</Block>
                    <Block color={theme.onInfo} text={theme.info}>onInfo</Block>
                    <Block color={theme.infoContainerLow} text={theme.onInfoContainerLow}>infoContainerLow</Block>
                    <Block color={theme.onInfoContainerLow} text={theme.infoContainerLow}>onInfoContainerLow</Block>
                    <Block color={theme.infoContainerHigh} text={theme.onInfoContainerHigh}>infoContainerHigh</Block>
                    <Block color={theme.onInfoContainerHigh} text={theme.infoContainerHigh}>onInfoContainerHigh</Block>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2 mt-4">
                <div className="grid grid-cols-6">
                    <Block color={theme.surface} text={theme.onSurface}>surface</Block>
                    <Block color={theme.background} text={theme.onBackground}>background</Block>
                </div>
                <div className="grid grid-cols-6">
                    <Block color={theme.surface1} text={theme.onSurface}>surface1</Block>
                    <Block color={theme.surface2} text={theme.onSurface}>surface2</Block>
                    <Block color={theme.surface3} text={theme.onSurface}>surface3</Block>
                    <Block color={theme.surface4} text={theme.onSurface}>surface4</Block>
                    <Block color={theme.surface5} text={theme.onSurface}>surface5</Block>
                </div>
                <div className="grid grid-cols-6">
                    <Block color={theme.onBackground} text={theme.surface}>onBackground</Block>
                    <Block color={theme.onSurface} text={theme.surface}>onSurface</Block>
                    <Block color={theme.onSurfaceVariant} text={theme.surface}>onSurfaceVariant</Block>
                    <Block color={theme.outline} text={theme.surface}>outline</Block>
                    <Block color={theme.outlineVariant} text={theme.onSurface}>outlineVariant</Block>
                </div>
            </div>
        </Collapse>
    )
}

export default Schemes;