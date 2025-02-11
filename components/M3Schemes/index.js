import Collapse from "../Collapse"
import React, { useState } from 'react'
import TokenBlock from "../TokenBlock";

const M3Schemes = ({ theme, mode }) => {

    return(
        <Collapse title={`${mode} (${Object.keys(theme).length} tokens)`}>
            <div className="grid grid-cols-6 gap-2">
                <div className="flex flex-col">
                    <TokenBlock color={theme.primary} text={theme.onPrimary}>Primary</TokenBlock>
                    <TokenBlock color={theme.onPrimary} text={theme.primary}>onPrimary</TokenBlock>
                    <TokenBlock color={theme.primaryContainerLow} text={theme.onPrimaryContainerLow}>primaryContainerLow</TokenBlock>
                    <TokenBlock color={theme.onPrimaryContainerLow} text={theme.primaryContainerLow}>onPrimaryContainerLow</TokenBlock>
                    <TokenBlock color={theme.primaryContainerHigh} text={theme.onPrimaryContainerHigh}>primaryContainerHigh</TokenBlock>
                    <TokenBlock color={theme.onPrimaryContainerHigh} text={theme.primaryContainerHigh}>onPrimaryContainerHigh</TokenBlock>
                    <TokenBlock color={theme.inverseSurface } text={theme.inverseOnSurface}>inverseSurface</TokenBlock>
                    <TokenBlock color={theme.inverseOnSurface} text={theme.inverseSurface}>inverseOnSurface</TokenBlock>
                    <TokenBlock color={theme.inversePrimary} text={theme.inverseSurface}>inversePrimary</TokenBlock>
                </div>
                <div className="flex flex-col">
                    <TokenBlock color={theme.secondary} text={theme.onSecondary}>Secondary</TokenBlock>
                    <TokenBlock color={theme.onSecondary} text={theme.secondary}>onSecondary</TokenBlock>
                    <TokenBlock color={theme.secondaryContainer} text={theme.onSecondaryContainer}>secondaryContainer</TokenBlock>
                    <TokenBlock color={theme.onSecondaryContainer} text={theme.secondaryContainer}>onSecondaryContainer</TokenBlock>
                </div>
                <div className="flex flex-col">
                    <TokenBlock color={theme.error} text={theme.onError}>Error</TokenBlock>
                    <TokenBlock color={theme.onError} text={theme.error}>onError</TokenBlock>
                    <TokenBlock color={theme.errorContainerLow} text={theme.onErrorContainerLow}>errorContainerLow</TokenBlock>
                    <TokenBlock color={theme.onErrorContainerLow} text={theme.errorContainerLow}>onErrorContainerLow</TokenBlock>
                    <TokenBlock color={theme.errorContainerHigh} text={theme.onErrorContainerHigh}>errorContainerHigh</TokenBlock>
                    <TokenBlock color={theme.onErrorContainerHigh} text={theme.errorContainerHigh}>onErrorContainerHigh</TokenBlock>
                    <TokenBlock color={theme.inverseErrorSurface } text={theme.inverseOnErrorSurface}>inverseErrorSurface</TokenBlock>
                    <TokenBlock color={theme.inverseOnErrorSurface} text={theme.inverseErrorSurface}>inverseOnErrorSurface</TokenBlock>
                    <TokenBlock color={theme.inverseError} text={theme.inverseErrorSurface}>inverseError</TokenBlock>
                </div>
                <div className="flex flex-col">
                    <TokenBlock color={theme.warning} text={theme.onWarning}>Warning</TokenBlock>
                    <TokenBlock color={theme.onWarning} text={theme.warning}>onWarning</TokenBlock>
                    <TokenBlock color={theme.warningContainerLow} text={theme.onWarningContainerLow}>warningContainerLow</TokenBlock>
                    <TokenBlock color={theme.onWarningContainerLow} text={theme.warningContainerLow}>onWarningContainerLow</TokenBlock>
                    <TokenBlock color={theme.warningContainerHigh} text={theme.onWarningContainerHigh}>warningContainerHigh</TokenBlock>
                    <TokenBlock color={theme.onWarningContainerHigh} text={theme.warningContainerHigh}>onWarningContainerHigh</TokenBlock>
                </div>
                <div className="flex flex-col">
                    <TokenBlock color={theme.success} text={theme.onSuccess}>Success</TokenBlock>
                    <TokenBlock color={theme.onSuccess} text={theme.success}>onSuccess</TokenBlock>
                    <TokenBlock color={theme.successContainerLow} text={theme.onSuccessContainerLow}>successContainerLow</TokenBlock>
                    <TokenBlock color={theme.onSuccessContainerLow} text={theme.successContainerLow}>onSuccessContainerLow</TokenBlock>
                    <TokenBlock color={theme.successContainerHigh} text={theme.onSuccessContainerHigh}>successContainerHigh</TokenBlock>
                    <TokenBlock color={theme.onSuccessContainerHigh} text={theme.successContainerHigh}>onSuccessContainerHigh</TokenBlock>
                    <TokenBlock color={theme.inverseSuccessSurface } text={theme.inverseOnSuccessSurface}>inverseSuccessSurface</TokenBlock>
                    <TokenBlock color={theme.inverseOnSuccessSurface} text={theme.inverseSuccessSurface}>inverseOnSuccessSurface</TokenBlock>
                    <TokenBlock color={theme.inverseSuccess} text={theme.inverseSuccessSurface}>inverseSuccess</TokenBlock>
                </div>
                <div className="flex flex-col">
                    <TokenBlock color={theme.info} text={theme.onInfo}>info</TokenBlock>
                    <TokenBlock color={theme.onInfo} text={theme.info}>onInfo</TokenBlock>
                    <TokenBlock color={theme.infoContainerLow} text={theme.onInfoContainerLow}>infoContainerLow</TokenBlock>
                    <TokenBlock color={theme.onInfoContainerLow} text={theme.infoContainerLow}>onInfoContainerLow</TokenBlock>
                    <TokenBlock color={theme.infoContainerHigh} text={theme.onInfoContainerHigh}>infoContainerHigh</TokenBlock>
                    <TokenBlock color={theme.onInfoContainerHigh} text={theme.infoContainerHigh}>onInfoContainerHigh</TokenBlock>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2 mt-4">
                <div className="grid grid-cols-6">
                    <TokenBlock color={theme.surface} text={theme.onSurface}>surface</TokenBlock>
                    <TokenBlock color={theme.background} text={theme.onBackground}>background</TokenBlock>
                </div>
                <div className="grid grid-cols-6">
                    <TokenBlock color={theme.surface1} text={theme.onSurface}>surface1</TokenBlock>
                    <TokenBlock color={theme.surface2} text={theme.onSurface}>surface2</TokenBlock>
                    <TokenBlock color={theme.surface3} text={theme.onSurface}>surface3</TokenBlock>
                    <TokenBlock color={theme.surface4} text={theme.onSurface}>surface4</TokenBlock>
                    <TokenBlock color={theme.surface5} text={theme.onSurface}>surface5</TokenBlock>
                </div>
                <div className="grid grid-cols-6">
                    <TokenBlock color={theme.onBackground} text={theme.surface}>onBackground</TokenBlock>
                    <TokenBlock color={theme.onSurface} text={theme.surface}>onSurface</TokenBlock>
                    <TokenBlock color={theme.onSurfaceVariant} text={theme.surface}>onSurfaceVariant</TokenBlock>
                    <TokenBlock color={theme.outline} text={theme.surface}>outline</TokenBlock>
                    <TokenBlock color={theme.outlineVariant} text={theme.onSurface}>outlineVariant</TokenBlock>
                </div>
            </div>
        </Collapse>
    )
}

export default M3Schemes;